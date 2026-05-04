# SunCart – Summer Essentials Store

A JavaScript/JSX version of the SunCart assignment project built with Next.js App Router, Tailwind CSS, DaisyUI, and Better Auth.

## Live URL

Add your deployed link here.

## GitHub Repository

Add your repository link here.

## Features

- Responsive home page
- Hero section
- Popular summer products
- All products page
- Product details page
- Protected routes
- Login with email/password
- Register with email/password
- Google login setup
- My Profile page
- Update Profile page
- Summer care tips section
- Product data from local JavaScript file

## Tech Stack

- Next.js App Router
- JavaScript / JSX
- Tailwind CSS
- DaisyUI
- Better Auth
- SQLite using better-sqlite3

## Folder Structure

```txt
src/
  app/
    api/auth/[...all]/route.js
    login/page.jsx
    register/page.jsx
    products/page.jsx
    products/[id]/page.jsx
    my-profile/page.jsx
    update-profile/page.jsx
    layout.jsx
    page.jsx
    globals.css

  components/
    AuthForms.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    ProductCard.jsx

  data/
    products.js

  lib/
    auth.js
    auth-client.js
```

## Environment Variables

Create a `.env.local` file from `.env.example`.

```bash
cp .env.example .env.local
```

Example:

```env
BETTER_AUTH_SECRET=replace-with-a-long-random-secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
SQLITE_DB_PATH=./sqlite.db
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Installation

```bash
npm install
```

## Better Auth Database Setup

```bash
npm run auth:generate
npm run auth:migrate
```

## Run Locally

```bash
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Suggested Commit Plan

Use meaningful commits like these:

```bash
git init
git add .
git commit -m "Initial Next.js JavaScript project setup"
git commit -m "Add Tailwind CSS and DaisyUI theme"
git commit -m "Create home page hero section"
git commit -m "Add product data and product card component"
git commit -m "Create all products page"
git commit -m "Create protected product details page"
git commit -m "Configure Better Auth"
git commit -m "Add login and register pages"
git commit -m "Add profile and update profile pages"
git commit -m "Improve responsive UI and README"
```

## Notes

This project is written in JavaScript/JSX, not TypeScript. There is no `tsconfig.json`, and files use `.js` / `.jsx` extensions.
