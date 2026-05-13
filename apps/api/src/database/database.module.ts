import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import type { AppEnv } from "../config/env.validation";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService<AppEnv>) => ({
        type: "postgres",
        host: config.getOrThrow("DATABASE_HOST"),
        port: config.getOrThrow("DATABASE_PORT"),
        username: config.getOrThrow("DATABASE_USER"),
        password: config.getOrThrow("DATABASE_PASSWORD"),
        database: config.getOrThrow("DATABASE_NAME"),
        autoLoadEntities: true,
        synchronize: false,
        migrationsRun: false,
        migrations: ["dist/database/migrations/*.js"],
      }),
    }),
  ],
})
export class DatabaseModule {}
