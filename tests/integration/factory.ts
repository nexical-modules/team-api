// GENERATED CODE - DO NOT MODIFY
import crypto from 'node:crypto';
import bcrypt from 'bcryptjs';
import { Factory } from '@tests/integration/lib/factory';

export function hashPassword(password: string): string {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

export const factories = {
  team: (index: number) => {
    return {
      name: `name_${index}`,
    };
  },
  teamApiKey: (index: number) => {
    return {
      name: `name_${index}`,
      hashedKey: `hashedKey_${index}_${crypto.randomUUID().split('-')[0]}`,
      prefix: `prefix_${index}`,
      lastUsedAt: new Date(),
      team: {
        create: Factory.getBuilder('team')(index),
      },
    };
  },
  teamMember: (index: number) => {
    return {
      user: {
        create: Factory.getBuilder('user')(index),
      },
      team: {
        create: Factory.getBuilder('team')(index),
      },
    };
  },
  invitation: (index: number) => {
    return {
      email: `${index}_${crypto.randomUUID()}@example.com`.toLowerCase(),
      teamId: `teamId_${index}`,
      inviterId: `inviterId_${index}`,
      token: `token_${index}_${crypto.randomUUID().split('-')[0]}`,
      expires: new Date(),
    };
  },
  user: (index: number) => {
    return {
      id: `id_${index}`,
      name: `name_${index}`,
      email: `${index}_${crypto.randomUUID()}@example.com`.toLowerCase(),
      username: `username_${index}_${crypto.randomUUID().split('-')[0]}`,
      image: `image_${index}`,
      password: hashPassword('Password123!'),
    };
  },
};
