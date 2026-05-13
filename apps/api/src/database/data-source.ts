import { DataSource } from "typeorm";

const required = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
};

export default new DataSource({
  type: "postgres",
  host: required("DATABASE_HOST"),
  port: parseInt(required("DATABASE_PORT")),
  username: required("DATABASE_USER"),
  password: required("DATABASE_PASSWORD"),
  database: required("DATABASE_NAME"),
  synchronize: false,
  entities: ["src/modules/**/*.entity.ts"],
  migrations: ["src/database/migrations/*.ts"],
});
