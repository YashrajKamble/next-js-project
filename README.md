# 📇 Contact Manager (Next.js 15)

Full‑stack contact management demo built with Next.js 15 App Router, React 19, Tailwind CSS 4, and a lightweight JSON Server backend. It showcases modern server actions for authentication plus CRUD flows for contacts so teammates can fork the repo, experiment locally, and extend the feature set with confidence.

---

## ✨ Feature Highlights
- 🔐 Cookie-based auth handled via server actions (`loginAction`, `logoutAction`) and `Next.js` `cookies()` API.
- 📱 Responsive UI built with Tailwind CSS 4, React Server Components, and client components where interactivity is required (`LoginForm`, `ContactForm`, `DeleteButton`).
- 📂 Contacts CRUD (list, create, edit, delete) backed by a JSON dataset at `src/app/_data/db.json`.
- 🔄 Live revalidation (`revalidatePath`) keeps `/contact` fresh after any mutation.
- 🧭 Global navigation with conditional rendering for authenticated vs guest sessions.

---

## 🧰 Tech Stack
- Next.js `15.3.3` (App Router + Server Actions)
- React `19`
- Tailwind CSS `v4` (via `@tailwindcss/postcss`)
- TypeScript `5`
- JSON Server `1.0.0-beta.3` (mock REST API on `http://localhost:3001`)
- Axios for API calls
- React Icons for UI affordances

---

## ✅ Prerequisites
| Tool | Version |
| --- | --- |
| Node.js | ≥ 18.18 (align with Next.js 15 requirement) |
| npm | ≥ 9 (ships with Node 18) |

> 💡 Run `node -v` and `npm -v` to confirm.

---

## 🚀 Quick Start (Fork → Clone → Run)
1. **Fork** the repository on GitHub so you can open PRs safely.
2. **Clone** and install dependencies:
   ```bash
   git clone <your-fork-url>
   cd next-js-tut
   npm install
   ```
3. **Seed & run the mock API** (required for login + contacts):
   ```bash
   npm run server
   ```
   - Serves `src/app/_data/db.json` on `http://localhost:3001`.
   - Hot-reloads whenever the JSON file changes.
4. **Launch the Next.js dev server** (separate terminal):
   ```bash
   npm run dev
   ```
5. Visit `http://localhost:3000`, authenticate, and start managing contacts.

> 🧪 Default test accounts (from `db.json`): `abc@abc.com / 12345678`, `abc2@abc.com / 12345678`.

---

## 🗂️ Project Structure
```
src/
└─ app/
   ├─ layout.tsx              # Global layout with NavBar + metadata
   ├─ page.tsx                # Landing page hero
   ├─ globals.css             # Tailwind entrypoint
   ├─ (auth)/login/page.tsx   # Login route (server component)
   ├─ contact/                # Contact list + nested routes
   │  ├─ page.tsx             # Protected contacts index
   │  ├─ new/page.tsx         # Create contact
   │  └─ edit/[id]/page.tsx   # Update contact
   ├─ _components/            # Reusable UI (forms, buttons, nav)
   ├─ _data/db.json           # JSON Server data store
   ├─ _lib/session.ts         # Cookie helpers (set/get/delete)
   ├─ _types/                 # Shared TypeScript models
   ├─ api/contact.ts          # Axios wrapper for JSON Server
   └─ actions/                # Server actions for auth + contacts
```

---

## 🔄 Core Flows
- **Authentication**  
  - `LoginForm` posts directly to `loginAction`, which validates credentials via JSON Server, then persists a signed user payload in `cookies()`.
  - `LogoutButton` triggers `logoutAction` to clear the session and redirect to `/login`.
- **Authorization**  
  - Server components (`NavBar`, `contact/page.tsx`) call `getSession()` to gate routes and tailor the UI.
- **Contact CRUD**  
  - `ContactForm` reuses a single client component for both create and update flows; `useActionState` provides success/error feedback and client-side redirects.
  - `DeleteButton` confirms destructive actions before invoking `deleteContactAction`.
  - All mutations call `revalidatePath('/contact')` to keep ISR cache coherent.

---

## 🧪 Available npm Scripts
| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js dev server (Turbopack enabled). |
| `npm run build` | Create a production build. |
| `npm run start` | Run the built app with `next start`. |
| `npm run lint` | Execute `next lint`. |
| `npm run server` | Boot JSON Server on `http://localhost:3001`. |

> 🧵 Always keep both `npm run dev` and `npm run server` running during development to avoid network errors from the client components.

---

## 📦 Production Build & Deploy
1. Ensure the mock API is available in your target environment (e.g., deploy JSON Server separately or migrate the data to your real backend).
2. Build the Next.js app:
   ```bash
   npm run build
   npm run start
   ```
3. Configure your hosting provider (Vercel, Netlify, etc.) to expose the API base URL as `http://localhost:3001` equivalent in prod, or refactor `src/app/api/contact.ts` to point to your hosted service.

---

## 🛠️ Extending the Project
- Add `src/app/(auth)/register` to match the existing nav link.
- Replace JSON Server with a proper database + API when ready.
- Layer in form validation (zod/react-hook-form) and error boundaries.
- Add automated tests (Playwright or Vitest) once core flows stabilize.

---

## 🤝 Contributing
1. Fork ➜ branch ➜ commit ➜ open PR against your fork or upstream.
2. Include screenshots or screen recordings for UI-facing changes.
3. Run `npm run lint` plus smoke-test `npm run dev` + `npm run server` before pushing.


