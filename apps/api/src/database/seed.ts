import "dotenv/config";
import * as bcrypt from "bcryptjs";
import { DataSource } from "typeorm";

import { User, UserRole } from "../modules/users/entities/user.entity";

const SEEDS: { email: string; password: string; role: UserRole }[] = [
  { email: "admin@example.com", password: "Admin1234!", role: UserRole.Admin },
  { email: "editor@example.com", password: "Editor1234!", role: UserRole.Editor },
];

async function seed() {
  const ds = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST ?? "localhost",
    port: parseInt(process.env.DATABASE_PORT ?? "5432"),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User],
    synchronize: false,
  });

  await ds.initialize();
  const repo = ds.getRepository(User);

  for (const seed of SEEDS) {
    const exists = await repo.findOne({ where: { email: seed.email } });
    if (exists) {
      console.log(`  — пропущен (уже существует): ${seed.email}`);
      continue;
    }
    const passwordHash = await bcrypt.hash(seed.password, 12);
    await repo.save(repo.create({ email: seed.email, passwordHash, role: seed.role }));
    console.log(`  ✓ создан [${seed.role}]: ${seed.email}`);
  }

  await ds.destroy();

  console.log("\n  Данные для входа:");
  console.log("  ┌─────────────────────────────┬─────────────┬──────────────┐");
  console.log("  │ Email                        │ Пароль      │ Роль         │");
  console.log("  ├─────────────────────────────┼─────────────┼──────────────┤");
  for (const s of SEEDS) {
    const email = s.email.padEnd(28);
    const pass = s.password.padEnd(11);
    const role = s.role.padEnd(12);
    console.log(`  │ ${email} │ ${pass} │ ${role} │`);
  }
  console.log("  └─────────────────────────────┴─────────────┴──────────────┘");
  console.log("  ⚠  Смените пароли после первого входа!\n");
}

seed().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
