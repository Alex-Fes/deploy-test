# deploy-test

Internal starter for landing projects built with Next.js, NestJS, PostgreSQL, TypeORM, SCSS Modules, Axios, and TanStack Query.

## Lifecycle

This starter is a one-time project source. A new client project is generated or copied from the current starter version and then evolves independently.

When this starter receives future improvements, existing projects created from older versions are not updated automatically. If an improvement is needed in an older project, apply it manually or through a project-specific task.

## Workspace

```txt
apps/
  web/
  api/
packages/
  config/
  styles/
  ui/
  contracts/
tools/
  create-project/
```

## Scripts

```bash
npm install
npm run db:up
npm run dev
npm run dev:local
npm run build
npm run lint
npm run test
npm run typecheck
```

## Local Database

```bash
npm run db:up
npm run db:logs
npm run db:down
```

Default local database values are documented in `.env.example`.

## Mail Environment

The API has SMTP variables prepared for real project mail providers:

```txt
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
MAIL_FROM
MAIL_TO
```

`MAIL_FROM` should usually match `SMTP_USER`, because some SMTP providers reject messages with a different sender. Stage and production API examples are available in `apps/api/.env.stage.example` and `apps/api/.env.production.example`.

The starter still uses a mock/log mail provider by default. Replace the provider inside `apps/api/src/modules/mail` when a real SMTP transport is needed.

## Apps

```txt
apps/web  Next.js App Router public site and /admin routes
apps/api  NestJS API with TypeORM/PostgreSQL modules
```

Default URLs:

```txt
web:   http://localhost:3000
api:   http://localhost:3001
admin: http://localhost:3000/admin
```

## Backend

The API uses modular Nest architecture:

```txt
src/modules/auth
src/modules/users
src/modules/leads
src/modules/mail
src/modules/content
src/modules/settings
src/modules/admin
```

TypeORM uses PostgreSQL with `synchronize: false`. Schema changes should be handled through migrations.

Migration scripts:

```bash
npm run typeorm:migration:generate --workspace apps/api
npm run typeorm:migration:run --workspace apps/api
npm run typeorm:migration:revert --workspace apps/api
```

The initial mail implementation is a mock/log provider behind `MailService`. Real projects can replace the provider without changing `LeadsService`.

## Frontend

The frontend uses Next.js App Router and FSD-inspired folders without an FSD `pages` layer:

```txt
src/app
src/widgets
src/features
src/entities
src/shared
```

Client API access uses Axios through `src/shared/api`. Client server state uses TanStack Query.

## UI And Styles

The starter uses internal components, SCSS Modules, and design tokens. Mantine, GSAP, Tailwind, and form libraries are not included by default.

```txt
packages/styles  reset, tokens, functions, mixins, typography, utilities
packages/ui      shared React UI primitives
```

Images should usually go through the `AppImage` wrapper over `next/image`. SVG UI icons are configured through SVGR.

## Create A Project

Full guide: `docs/create-project.md`.
Deployment guide: `docs/deployment.md`.

Build the generator:

```bash
npm run build --workspace tools/create-project
```

Create a new project:

```bash
node tools/create-project/dist/index.js D:\free\my-client-site --name "My Client Site"
```

Generated projects are independent copies. They do not receive automatic updates when this starter changes later.

## Docs

See `docs/superpowers/specs` and `docs/superpowers/plans` for the approved design and implementation plan.
