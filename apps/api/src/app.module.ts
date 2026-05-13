import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { DatabaseModule } from "./database/database.module";
import { validateEnv } from "./config/env.validation";
import { AdminModule } from "./modules/admin/admin.module";
import { AuthModule } from "./modules/auth/auth.module";
import { ContentModule } from "./modules/content/content.module";
import { HealthController } from "./modules/health/health.controller";
import { LeadsModule } from "./modules/leads/leads.module";
import { MailModule } from "./modules/mail/mail.module";
import { SettingsModule } from "./modules/settings/settings.module";
import { UsersModule } from "./modules/users/users.module";

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
    UsersModule,
    AuthModule,
    AdminModule,
    MailModule,
    LeadsModule,
    ContentModule,
    SettingsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
