
# Star Wars Planets Explorer

A web application built with **Next.js App Router** that lets users explore the Star Wars universe through planets, characters, starships, and more — powered by the public **SWAPI** API.

## 🚀 Technologies

- [Next.js 15+](https://nextjs.org/) with App Router
- Server Components & Client Components
- Static Generation (ISR) + Dynamic Metadata
- Tailwind CSS
- TypeScript
- JSON-LD for structured data (SEO)
- Shadcn/UI
- ESLint
- Prettier

## 📂 Project Structure

```
├── app
│   ├── planets
│   ├── people
│   ├── starships
│   └── films
├── components
├── types
|── services
├── lib
├── public
├── .env
├── .env.local
```


## 

## Running the project

```bash
pnpm dev
```

## Building the project
> You need to run the api locally first.
> Due to the apps/web needs to fetch data from the api to create static pages.

```bash
pnpm build
```