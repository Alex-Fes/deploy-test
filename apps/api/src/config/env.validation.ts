type EnvValue = string | undefined;

type RawEnv = Record<string, EnvValue>;

export type AppEnv = {
  API_PORT: number;
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_NAME: string;
  SMTP_HOST?: string;
  SMTP_PORT?: number;
  SMTP_SECURE?: boolean;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  MAIL_FROM?: string;
  MAIL_TO?: string;
  WEB_ORIGIN?: string;
};

const requiredString = (env: RawEnv, key: keyof AppEnv): string => {
  const value = env[key];

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

const requiredNumber = (env: RawEnv, key: keyof AppEnv): number => {
  const rawValue = requiredString(env, key);
  const value = Number(rawValue);

  if (!Number.isFinite(value)) {
    throw new Error(`Environment variable ${key} must be a number`);
  }

  return value;
};

const requiredBoolean = (env: RawEnv, key: keyof AppEnv): boolean => {
  const rawValue = requiredString(env, key).toLowerCase();

  if (rawValue === "true") {
    return true;
  }

  if (rawValue === "false") {
    return false;
  }

  throw new Error(`Environment variable ${key} must be true or false`);
};

export const validateEnv = (env: RawEnv): AppEnv => ({
  API_PORT: requiredNumber(env, "API_PORT"),
  DATABASE_HOST: requiredString(env, "DATABASE_HOST"),
  DATABASE_PORT: requiredNumber(env, "DATABASE_PORT"),
  DATABASE_USER: requiredString(env, "DATABASE_USER"),
  DATABASE_PASSWORD: requiredString(env, "DATABASE_PASSWORD"),
  DATABASE_NAME: requiredString(env, "DATABASE_NAME"),
  SMTP_HOST: env.SMTP_HOST,
  SMTP_PORT: env.SMTP_PORT ? Number(env.SMTP_PORT) : undefined,
  SMTP_SECURE: env.SMTP_SECURE ? env.SMTP_SECURE.toLowerCase() === "true" : undefined,
  SMTP_USER: env.SMTP_USER,
  SMTP_PASS: env.SMTP_PASS,
  MAIL_FROM: env.MAIL_FROM,
  MAIL_TO: env.MAIL_TO,
  WEB_ORIGIN: env.WEB_ORIGIN,
});
