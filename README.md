# swrep

## Stack

- Turborepo
- Next.js
- Tailwind CSS
- Shadcn/UI
- TypeScript
- Nest.js
- Jest

## Architecture
This monorepo is organized into the following directories:

```
├── apps
│   ├── api                         # Nest.js api
│   └── web                         # Next.js web app
└── packages
    ├── eslint-config                # ESLint config
    ├── typescript-config            # TypeScript config
    └── ui                          # Shadcn/UI components 
```

## Node Version
- v22.14.0

## Installation
```bash
pnpm install
```

## Environment Variables
You need to create a `.env` file in the root of each app. you can use the `.env.example` file as a reference.

## Usage

```bash
pnpm dev
```

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```
