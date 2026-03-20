// GENERATED CODE - DO NOT MODIFY
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { TeamSDK } from '../../../src/sdk/team-sdk';

describe('TeamSDK', () => {
  let sdk: TeamSDK;
  let mockClient: { request: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = {
      request: vi.fn().mockResolvedValue({ success: true, data: { id: 'test-id' } }),
    };
    sdk = new TeamSDK(mockClient as unknown as Record<string, unknown>);
  });

  it('should initialize', () => {
    expect(sdk).toBeDefined();
  });

  it('should call POST /create on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).createTeam(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('POST');

    let expectedPath = 'create';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on createTeam()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/create'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('POST')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).createTeam(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team on list()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).list(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on list()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).list(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call GET /team/[id] on get()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).get(...args);

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('GET');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on get()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('GET')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).get(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call PUT /team/[id] on update()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).update(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('PUT');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on update()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('PUT')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).update(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });

  it('should call DELETE /team/[id] on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: true, data: {} });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    await (sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>).delete(
      ...args,
    );

    expect(mockClient.request).toHaveBeenCalled();
    const [callVerb, callPath] = mockClient.request.mock.calls[0];
    expect(callVerb).toBe('DELETE');

    let expectedPath = 'team/[id]';
    pathParams.forEach((p) => {
      expectedPath = expectedPath.replace(p, 'test-id');
    });
    expect(callPath).toContain(expectedPath);
  });

  it('should handle failure on delete()', async () => {
    mockClient.request.mockResolvedValue({ success: false, error: 'API Error' });

    const args: unknown[] = [];
    const pathParams = '/team/[id]'.match(/\[(\w+)\]/g) || [];
    pathParams.forEach(() => args.push('test-id'));

    if (['POST', 'PUT', 'PATCH'].includes('DELETE')) {
      args.push({ name: 'test' } as Record<string, unknown>);
    }

    const result = await (
      sdk as unknown as Record<string, (...args: unknown[]) => Promise<unknown>>
    ).delete(...args);
    expect(result.success).toBe(false);
    expect(result.error).toBe('API Error');
  });
});
