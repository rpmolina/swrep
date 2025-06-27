import { config } from 'dotenv';
import { envSchema } from './config/env.schema';

/**
 * I'm using dotenv to load the environment variables because I want to
 * validate them with zod and use them in the app.
 */

(config as () => void)();

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Invalid environment variables:', parsed.error.format());
  process.exit(1);
}

export const env = parsed.data;
