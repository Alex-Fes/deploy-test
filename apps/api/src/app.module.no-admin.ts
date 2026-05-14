import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { DatabaseModule } from "./database/database.module";
import { validateEnv } from "./config/env.validation";
import { HealthController } from "./modules/health/health.controller";
import { LeadsModule } from "./modules/leads/leads.module";
import { MailModule } from "./modules/mail/mail.module";

const envFilePath =
  process.env.NODE_ENV === "production"
    ? [".env"]
    : [".env", ".env.local", ".env.example", "../../.env", "../../.env.example"];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      validate: validateEnv,
    }),
    DatabaseModule,
    MailModule,
    LeadsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
