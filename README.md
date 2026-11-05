# lukemadeit.io

Personal website for **Luke Made It** — home for blog posts, affiliate gear links and (soon) products.
Built with Next.js (App Router), React, TypeScript and Tailwind CSS.

- **Live site:** https://lukemadeit.io
- **YouTube:** https://www.youtube.com/@LukeMadeIt

---

## Table of contents

- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Pages](#pages)
- [Adding content](#adding-content)
  - [Add a blog post](#add-a-blog-post)
  - [Add a gear item](#add-a-gear-item)
- [Styling](#styling)
- [GitHub Pages deployment](#github-pages-deployment)
- [Known issues](#known-issues)

---

## Tech stack

| Area        | Tool                                                                                   |
| ----------- | -------------------------------------------------------------------------------------- |
| Framework   | [Next.js 15](https://nextjs.org/) (App Router, Turbopack in dev)                       |
| UI          | [React 19](https://react.dev/)                                                         |
| Language    | [TypeScript 5](https://www.typescriptlang.org/)                                        |
| Styling     | [Tailwind CSS 3](https://tailwindcss.com/) + `@tailwindcss/aspect-ratio`               |
| Animation   | [Motion](https://motion.dev/) (imported as `framer-motion`)                            |
| Fonts       | Geist / Geist Mono via `next/font/google`                                              |
| Linting     | ESLint 9 with `eslint-config-next`                                                     |

## Getting started

### Prerequisites

- **Node.js 22** — the exact version is pinned in [`.nvmrc`](./.nvmrc) (`v22.11.0`). With nvm: `nvm use`
- **npm** (comes with Node)

### Run locally

```bash
git clone https://github.com/luukasmakila/lukemadeit.io.git
cd lukemadeit.io
nvm use          # optional, picks the Node version from .nvmrc
npm install
npm run dev
```

Open http://localhost:3000. Pages hot-reload as you edit files in `src/`.

No environment variables are needed to run the site.

### Production build

```bash
npm run build
npm run start    # serves the production build on http://localhost:3000
```

For GitHub Pages, use `npm run build:pages` instead. It writes a static site to `out/`; `next start` is only for the normal server build.

## Available scripts

| Command         | What it does                                      |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Start the dev server with Turbopack               |
| `npm run build` | Create an optimized production build (runs lint)  |
| `npm run start` | Serve the production build                        |
| `npm run lint`  | Run ESLint (`next lint`)                          |
| `npm test` | Test asset paths and static-export validation |
| `npm run typecheck` | Check TypeScript without emitting files |
| `npm run build:pages` | Export a static site to `out/` for GitHub Pages |
| `npm run verify:pages` | Check exported routes and local HTML URLs |

## Project structure

```
.
├── public/                  # Static assets served from the site root
│   ├── blog/                # Blog post cover images
│   ├── gear/                # Camera gear images
│   └── setupGear/           # Desk setup gear images
├── src/app/                 # Next.js App Router — every folder with a page.tsx is a route
│   ├── layout.tsx           # Root layout: fonts, global CSS, <html>/<body>
│   ├── globals.css          # Tailwind directives and global styles
│   ├── page.tsx             # Home page (/)
│   ├── types.ts             # Shared types (Product, ChildrenProps)
│   ├── blog/
│   │   ├── page.tsx         # Blog index (/blog)
│   │   ├── assets.ts        # List of blog posts shown on the index
│   │   ├── my-story/        # /blog/my-story
│   │   └── m4-macbook-pro/  # /blog/m4-macbook-pro
│   ├── gear/
│   │   ├── page.tsx         # Gear page (/gear)
│   │   └── assets.ts        # Camera and setup gear lists (affiliate links)
│   ├── products/page.tsx    # Products page placeholder (/products)
│   └── components/          # Shared UI components
│       ├── basePage.tsx     # Centered, max-width page container
│       ├── header.tsx       # Site header (wraps Navbar)
│       ├── sectionBody.tsx  # Vertical section layout
│       ├── socialMediaButton.tsx
│       ├── Navbar/          # Navbar + animated nav buttons
│       ├── Blog/            # BlogCard and BlogPage (post layout)
│       └── ProductCard/     # ProductCard and its loading skeleton
├── tailwind.config.ts       # Theme colors and plugins
├── next.config.ts
└── eslint.config.mjs
```

The `@/` import alias points to `src/` (e.g. `import { Product } from "@/app/types"`).

## Pages

| Route                  | File                                   | Notes                                       |
| ---------------------- | -------------------------------------- | ------------------------------------------- |
| `/`                    | `src/app/page.tsx`                     | Intro, social links, pinned posts           |
| `/blog`                | `src/app/blog/page.tsx`                | Grid of all posts from `blog/assets.ts`     |
| `/blog/my-story`       | `src/app/blog/my-story/page.tsx`       | Blog post                                   |
| `/blog/m4-macbook-pro` | `src/app/blog/m4-macbook-pro/page.tsx` | Blog post                                   |
| `/gear`                | `src/app/gear/page.tsx`                | Camera + setup gear from `gear/assets.ts`   |
| `/products`            | `src/app/products/page.tsx`            | Placeholder, not linked from the navbar yet |

## Adding content

All content lives in code — there is no CMS or database. Blog posts, gear and cards all use the
shared `Product` type from `src/app/types.ts`:

```ts
interface Product {
  title: string;
  description: string;
  href: string;   // internal route (/blog/...) or external affiliate link
  image: string;  // path under /public, e.g. "/blog/my-post.jpg"
}
```

### Add a blog post

1. **Cover image** — add it to `public/blog/` (e.g. `public/blog/my-new-post.jpg`).
2. **Post page** — create `src/app/blog/my-new-post/page.tsx`. Wrap the content in `BlogPage`:

   ```tsx
   import { BlogPage } from "@/app/components/Blog/blogPage";

   export default function MyNewPost() {
     return (
       <BlogPage>
         <div className="flex flex-col gap-4">
           <h1 className="text-2xl">My New Post</h1>
           <p>First paragraph&hellip;</p>
         </div>
       </BlogPage>
     );
   }
   ```

   Escape apostrophes and quotes in JSX text (`&apos;`, `&quot;`) or ESLint will fail the build.
3. **List it** — add an entry to `blogPosts` in `src/app/blog/assets.ts`:

   ```ts
   {
     title: "My New Post",
     description: "One-line summary shown on the card",
     href: "/blog/my-new-post",
     image: "/blog/my-new-post.jpg",
   },
   ```
4. **(Optional) Pin it** — add a `BlogCard` to the "Pinned posts" section in `src/app/page.tsx`.

### Add a gear item

1. Add the product image to `public/gear/` (camera gear) or `public/setupGear/` (desk setup).
2. Add an entry to `cameraGear` or `setupGear` in `src/app/gear/assets.ts`, with the affiliate link as `href`.

## Styling

- Tailwind CSS utility classes are used everywhere; there are no CSS modules.
- Custom theme colors (in `tailwind.config.ts`): `dark`, `darkGray`, `lightGray`, `white` —
  use them as e.g. `bg-dark`, `text-lightGray`.
- Card images use the aspect-ratio plugin (`aspect-w-16 aspect-h-9`).

## GitHub Pages deployment

The workflow in [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml)
installs dependencies with `npm ci`, tests, lints, builds a static export, checks types,
and verifies that exported routes and their local assets exist.

- **Pull requests targeting `main`:** run the checks with the `/lukemadeit.io` project-site
  prefix, without publishing or requiring Pages configuration.
- **Every push to `main`:** run the checks, upload `out/`, and deploy through the official
  GitHub Pages artifact/deployment actions.
- **Manual runs:** available on the Actions tab. Only `main` can publish.
- Main workflows are serialized without cancelling an active publication. GitHub may
  replace an older pending run with a newer one when commits arrive quickly.
- Only the deploy job receives `pages: write` and `id-token: write`; no personal token is needed.

### One-time repository setup

Before merging the deployment PR, open **Settings → Pages → Build and deployment**
and select **GitHub Actions** as the source. The workflow reads this configuration;
it deliberately does not enable Pages or change repository settings itself.
If GitHub creates a `github-pages` environment, allow deployments from `main`
and configure any desired approval rules there.

By default the site is served at `https://luukasmakila.github.io/lukemadeit.io/`.
If using `lukemadeit.io`, configure the custom domain in Pages settings and follow
GitHub's DNS instructions. The workflow reads the configured base path, so custom
domains use `/` while project-site deployments use `/lukemadeit.io/`.
No domain or DNS settings are changed by this PR.

### Verify the static export locally

```bash
npm ci
npm test
npm run lint
NEXT_PUBLIC_BASE_PATH=/lukemadeit.io npm run build:pages
npm run typecheck
NEXT_PUBLIC_BASE_PATH=/lukemadeit.io npm run verify:pages
```

For a custom-domain/root preview, omit `NEXT_PUBLIC_BASE_PATH` from both commands,
then serve `out/` with any static server, for example
`python3 -m http.server 3000 --directory out`.
Do not use `npm run start` to preview the Pages export.

The Pages export uses trailing-slash directories for deep links and unoptimized
images, since GitHub Pages cannot run Next.js server features. Public image URLs
are prefixed by `assetPath`; Next.js handles the base path for router navigation.
New content must remain statically renderable. Server-side rendering, API routes,
and the default Next.js image optimizer require a different host.

## Known issues

Documented here so they are easy to pick up later (not fixed in this docs change):

- **Two lockfiles.** Both `package-lock.json` and `yarn.lock` are committed. This README uses npm;
  removing one lockfile would avoid drift.
- **Animation import name.** `package.json` depends on `motion`, but the code imports from
  `framer-motion` (installed transitively). Switching the imports to `motion/react` would make the
  dependency explicit.
- **Placeholder metadata.** `src/app/layout.tsx` still has the default "Create Next App" title and description.
- Some blog cards (`Samsung Galaxy S25 Ultra Review`, `Setting Up A MacBook Pro For Programming`)
  link to `/` because their pages don't exist yet.
