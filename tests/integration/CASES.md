# API Integration Test Cases: Team Module

This module manages Team lifecycles, memberships, invitations, and access control.

**Scope**:
*   **Included**: 
    *   Teams CRUD (`/api/teams`, `/api/teams/[id]`)
    *   Members Management (`/api/teams/[id]/members`)
    *   Invitation Management (`/api/teams/[id]/invitations`)
    *   Invitation Acceptance (`/api/invitations/accept`)
    *   API Key Management (`/api/teams/[id]/keys`)
*   **Excluded**: Billing, Chat.

## 0. Configuration & Prerequisites
*   **Database**: Clean state, seeded via `Factory`.
*   **Roles**: `OWNER`, `ADMIN` (Team Admin), `MEMBER`, `USER` (Non-member), `SITE_ADMIN`.
*   **Auth**: Testing requires `ApiClient` with valid session cookies or Team API Tokens.
*   **Factory Setup**:
    *   `Factory.create('user')`
    *   `Factory.create('team', { members: { create: { userId: ..., role: ... } } })`

---

## 1. Team Lifecycle

### POST /api/teams
**Description**: Creates a new team and assigns the creator as OWNER.

#### 1.1. Successful Creation
**Goal**: Verify a standard user can create a team.
**Constraint**: Authenticated User.

**Prerequisites**:
*   User 'Alice' exists.

**Request**:
*   **Method**: `POST`
*   **URL**: `/api/teams`
*   **Headers**: `Cookie: session=alice_session`
*   **Body**: `{ "name": "Alpha Squad" }`

**Expected Response**:
*   **Status**: `201 Created`
*   **Body**: `{ "id": "...", "name": "Alpha Squad" }`

**Side Effects**:
*   **Database**: `Team` record created. `TeamMember` record created for Alice with role `OWNER`.
*   **Hooks**: `team.created` event fired.

#### 1.2. Validation Failure - Missing Name
**Goal**: Verify required fields.

**Request**:
*   **Method**: `POST`
*   **Body**: `{}`

**Expected Response**:
*   **Status**: `400 Bad Request`
*   **Body**: `{ "error": "Name is required" }`

#### 1.3. Creation Limit Reached
**Goal**: Enforce maximum team limit per user.
**Constraint**: Hard limit of 10 teams per owner.

**Prerequisites**:
*   User 'Bob' already owns 10 teams.

**Request**:
*   **Method**: `POST`
*   **Body**: `{ "name": "Team Eleven" }`

**Expected Response**:
*   **Status**: `400 Bad Request`
*   **Body**: `{ "error": "Maximum team limit reached (10)" }`

#### 1.4. Unauthorized - Anonymous
**Goal**: Verify public access is denied.

**Request**:
*   **Method**: `POST`
*   **Body**: `{ "name": "Hacker Team" }`

**Expected Response**:
*   **Status**: `403 Forbidden` (or 401)

---

### GET /api/teams
**Description**: Lists teams the current user belongs to.

#### 1.5. List User Teams
**Goal**: Retrieve only relevant teams.

**Prerequisites**:
*   User 'Alice' is in 'Team A' and 'Team B'.
*   Team 'C' exists (Alice is not a member).

**Request**:
*   **Method**: `GET`
*   **URL**: `/api/teams`
*   **Headers**: `Cookie: session=alice_session`

**Expected Response**:
*   **Status**: `200 OK`
*   **Body**: Array containing 'Team A' and 'Team B'. **NOT** 'Team C'. Verify `_count.members` is present.

#### 1.6. Search Teams
**Goal**: Verify filtering capabilities.

**Prerequisites**:
*   User 'Alice' is in 'Alpha Team', 'Beta Team'.

**Request**:
*   **Method**: `GET`
*   **URL**: `/api/teams?search=Alpha`

**Expected Response**:
*   **Status**: `200 OK`
*   **Body**: Array containing only 'Alpha Team'.

---

### GET /api/teams/[id]
**Description**: Retrieve details of a specific team.

#### 1.7. Access as Member
**Goal**: Verify member access.

**Prerequisites**:
*   User 'Alice' is MEMBER of 'Team Alpha'.

**Request**:
*   **Method**: `GET`
*   **URL**: `/api/teams/[id_of_alpha]`

**Expected Response**:
*   **Status**: `200 OK`
*   **Body**: `{ "id": "...", "name": "Team Alpha", "_count": { "members": 1 } }`

#### 1.8. Access Denied - Non-Member
**Goal**: Verify isolation.

**Prerequisites**:
*   User 'Bob' exists.
*   'Team Alpha' exists (Bob is not a member).

**Request**:
*   **Method**: `GET`
*   **URL**: `/api/teams/[id_of_alpha]`
*   **Headers**: `Cookie: session=bob_session`

**Expected Response**:
*   **Status**: `403 Forbidden`

#### 1.9. Access as Site Admin
**Goal**: Verify administrative override.

**Prerequisites**:
*   User 'Admin' has global role `ADMIN`.
*   'Team Alpha' exists (Admin is not a member).

**Request**:
*   **Method**: `GET`
*   **URL**: `/api/teams/[id_of_alpha]`
*   **Headers**: `Cookie: session=admin_session`

**Expected Response**:
*   **Status**: `200 OK`

---

### PUT /api/teams/[id]
**Description**: Update team details.

#### 1.10. Successful Update
**Goal**: Update name.

**Prerequisites**:
*   User 'Alice' is OWNER/ADMIN of 'Team Alpha'.

**Request**:
*   **Method**: `PUT`
*   **URL**: `/api/teams/[id_of_alpha]`
*   **Body**: `{ "name": "Team Alpha Renamed" }`

**Expected Response**:
*   **Status**: `200 OK`
*   **Body**: `{ "name": "Team Alpha Renamed" }`

#### 1.11. Security - Unauthorized Update (Vulnerability Check)
**Goal**: Ensure NON-members cannot update team details.
**Context**: Checking for missing permission gates in `PUT` handler.

**Prerequisites**:
*   User 'Eve' exists (no relation to team).
*   'Team Alpha' exists.

**Request**:
*   **Method**: `PUT`
*   **URL**: `/api/teams/[id_of_alpha]`
*   **Headers**: `Cookie: session=eve_session`
*   **Body**: `{ "name": "Hacked" }`

**Expected Response**:
*   **Status**: `403 Forbidden` (or 404). If 200, **FAIL**.

---

### DELETE /api/teams/[id]
**Description**: Delete a team.

#### 1.12. Successful Deletion
**Goal**: Owner deletes team.

**Prerequisites**:
*   User 'Alice' is OWNER of 'Team Alpha'.

**Request**:
*   **Method**: `DELETE`
*   **URL**: `/api/teams/[id_of_alpha]`

**Expected Response**:
*   **Status**: `200 OK`

**Side Effects**:
*   **Database**: Team record removed. Memberships removed (cascade).

#### 1.13. Permission Failure - Regular Member
**Goal**: Prevent members from deleting the team.

**Prerequisites**:
*   User 'Bob' is MEMBER (not Owner) of 'Team Alpha'.

**Request**:
*   **Method**: `DELETE`
*   **URL**: `/api/teams/[id_of_alpha]`

**Expected Response**:
*   **Status**: `403 Forbidden`

---

## 2. Member Management

### GET /api/teams/[id]/members
**Description**: List team members.

#### 2.1. List Members
**Goal**: Retrieve member list with user details.

**Prerequisites**:
*   'Team A' has members 'Alice' (Owner) and 'Bob' (Member).

**Request**:
*   **Method**: `GET`
*   **URL**: `/api/teams/[id_of_a]/members`
*   **Headers**: `Cookie: session=alice_session`

**Expected Response**:
*   **Status**: `200 OK`
*   **Body**: Array of 2 items. Each item contains `{ user: { id, name, ... }, role: ... }`.

---

### PUT /api/teams/[id]/members/[userId]
**Description**: Update a member's role.

#### 2.2. Promote Member
**Goal**: Change role from MEMBER to ADMIN.

**Prerequisites**:
*   'Alice' is OWNER.
*   'Bob' is MEMBER.

**Request**:
*   **Method**: `PUT`
*   **URL**: `/api/teams/[id]/members/[bob_id]`
*   **Body**: `{ "role": "ADMIN" }`

**Expected Response**:
*   **Status**: `200 OK`
*   **Body**: `{ "role": "ADMIN" }`

#### 2.3. Invalid Role Validation
**Goal**: Prevent setting invalid roles.

**Request**:
*   **Method**: `PUT`
*   **Body**: `{ "role": "SUPER_KING" }`

**Expected Response**:
*   **Status**: `400 Bad Request`

---

### DELETE /api/teams/[id]/members/[userId]
**Description**: Remove a member or leave team.

#### 2.4. Kick Member
**Goal**: Owner removes a member.

**Prerequisites**:
*   'Alice' is OWNER.
*   'Bob' is MEMBER.

**Request**:
*   **Method**: `DELETE`
*   **URL**: `/api/teams/[id]/members/[bob_id]`
*   **Headers**: `Cookie: session=alice_session`

**Expected Response**:
*   **Status**: `200 OK`

**Side Effects**:
*   **Database**: TeamMember record for Bob is deleted.

#### 2.5. Self-Leave (Last Owner Constraint)
**Goal**: Prevent the last owner from leaving the team (orphaning it).

**Prerequisites**:
*   'Alice' is the *only* OWNER of 'Team A'.

**Request**:
*   **Method**: `DELETE`
*   **URL**: `/api/teams/[id]/members/[alice_id]`
*   **Headers**: `Cookie: session=alice_session`

**Expected Response**:
*   **Status**: `500 Internal Server Error` (or specific 400 error if handled gracefully: "Last owner cannot leave team").

---

## 3. Invitations

### POST /api/teams/[id]/invitations
**Description**: Invite a user to the team.

#### 3.1. Invite New User (Standard Flow)
**Goal**: Create an invitation record for a non-existent user.

**Prerequisites**:
*   'Alice' is OWNER.
*   Email 'new@example.com' is not in DB.

**Request**:
*   **Method**: `POST`
*   **URL**: `/api/teams/[id]/invitations`
*   **Body**: `{ "email": "new@example.com", "role": "MEMBER" }`

**Expected Response**:
*   **Status**: `201 Created`
*   **Body**: `{ "invitation": { "email": "new@example.com", "token": "..." }, "url": "..." }`

**Side Effects**:
*   **Database**: `Invitation` record created.
*   **Email**: 'user:invite' email sent to 'new@example.com'.

#### 3.2. Add Existing User (Direct Add)
**Goal**: Immediately add a user who already has an account.

**Prerequisites**:
*   'Bob' exists (`bob@example.com`).
*   Bob is NOT in the team.

**Request**:
*   **Method**: `POST`
*   **Body**: `{ "email": "bob@example.com", "role": "ADMIN" }`

**Expected Response**:
*   **Status**: `201 Created`
*   **Body**: `{ "success": true, "message": "User added to team." }`

**Side Effects**:
*   **Database**: `TeamMember` created for Bob. NO `Invitation` record created.
*   **Email**: 'user:invite' (variant: added) email sent.

#### 3.3. Conflict - Already Member
**Goal**: Prevent adding same user twice.

**Prerequisites**:
*   'Bob' is already in the team.

**Request**:
*   **Method**: `POST`
*   **Body**: `{ "email": "bob@example.com" }`

**Expected Response**:
*   **Status**: `409 Conflict`
*   **Body**: `{ "error": "User is already a member of this team" }`

#### 3.4. Conflict - Duplicate Invite
**Goal**: Prevent spamming invites.

**Prerequisites**:
*   Invitation already exists for 'new@example.com'.

**Request**:
*   **Method**: `POST`
*   **Body**: `{ "email": "new@example.com" }`

**Expected Response**:
*   **Status**: `409 Conflict`

---

### POST /api/invitations/accept
**Description**: Accept an invitation via token.

#### 3.5. Successful Acceptance
**Goal**: Join team via token.

**Prerequisites**:
*   Team 'Alpha' exists.
*   User 'Alice' exists.
*   Invitation exists: `{ email: "alice@example.com", token: "valid-token", teamId: "alpha-id" }`.

**Request**:
*   **Method**: `POST`
*   **URL**: `/api/invitations/accept`
*   **Headers**: `Cookie: session=alice_session`
*   **Body**: `{ "token": "valid-token" }`

**Expected Response**:
*   **Status**: `200 OK`
*   **Body**: `{ "success": true, "teamId": "..." }`

#### 3.6. Email Mismatch
**Goal**: Prevent users from accepting invites sent to others.

**Prerequisites**:
*   Invitation exists for "bob@example.com".
*   User 'Alice' is logged in ("alice@example.com").

**Request**:
*   **Method**: `POST`
*   **Body**: `{ "token": "bob-token" }`

**Expected Response**:
*   **Status**: `403 Forbidden`

#### 3.7. Expired Token
**Goal**: Verify expiration logic.

**Prerequisites**:
*   Invitation exists but `expires` date is in the past.

**Request**:
*   **Method**: `POST`
*   **Body**: `{ "token": "expired-token" }`

**Expected Response**:
*   **Status**: `410 Gone` (or similar error).

---

## 4. API Keys Management

### GET /api/teams/[id]/keys
**Description**: List API keys for the team.

#### 4.1. Successful List
**Goal**: Retrieve keys.
**Constraint**: `MANAGE_TEAM` permission.

**Prerequisites**:
*   'Alice' is OWNER.
*   'Team Alpha' has 2 keys.

**Request**:
*   **Method**: `GET`
*   **URL**: `/api/teams/[id]/keys`
*   **Headers**: `Cookie: session=alice_session`

**Expected Response**:
*   **Status**: `200 OK`
*   **Body**: Array of keys.

#### 4.2. Access Denied
**Goal**: Regular member cannot see keys.

**Prerequisites**:
*   'Bob' is MEMBER.

**Request**:
*   **Method**: `GET`
*   **Headers**: `Cookie: session=bob_session`

**Expected Response**:
*   **Status**: `403 Forbidden`

---

### POST /api/teams/[id]/keys
**Description**: Create a new API key.

#### 4.3. Create Key
**Goal**: Create key and receive the raw secret.

**Request**:
*   **Method**: `POST`
*   **URL**: `/api/teams/[id]/keys`
*   **Body**: `{ "name": "CI/CD Key" }`

**Expected Response**:
*   **Status**: `201 Created`
*   **Body**: `{ "rawKey": "sk_...", "key": { "id": "..." } }`

**Side Effects**:
*   **Database**: Key record created. Hash stored.

---

### DELETE /api/teams/[id]/keys/[keyId]
**Description**: Revoke/Delete an API key.

#### 4.4. Revoke Key
**Goal**: Delete a key.

**Request**:
*   **Method**: `DELETE`
*   **URL**: `/api/teams/[id]/keys/[key_id]`

**Expected Response**:
*   **Status**: `200 OK`

**Side Effects**:
*   **Database**: Key record deleted.