# PLP Task Manager

A small React + Vite + Tailwind CSS application implementing a Task Manager and an API data viewer. This repository was created to complete Week 3 of the Front-End Development module: React.js, JSX and Tailwind CSS.

Features implemented
- TaskManager component with add, toggle complete, delete, and filter (All, Active, Completed). Tasks are persisted to localStorage.
- Reusable `Button` component with variants (primary, secondary, danger) and sizes.
- `Navbar` and `Footer` components and a `ThemeProvider` (light/dark) using Tailwind's dark mode.
- `ApiList` component fetching posts from JSONPlaceholder with loading/error handling, search, and pagination.
- Responsive layout built with Tailwind utility classes.

Project structure

```
src/
  main.jsx         # App entry
  index.css        # Tailwind entry styles
  App.jsx          # App wiring + ThemeProvider
  context/ThemeContext.jsx
  components/
    Button.jsx
    TaskManager.jsx
    Navbar.jsx
    Footer.jsx
    ApiList.jsx
```

Quick start (Windows PowerShell)

```powershell
npm install
npm run dev
# open http://localhost:5173/
```

Build and preview

```powershell
npm run build
npm run preview
```

Deployment

Recommended (zero-config): Vercel or Netlify.

Vercel
1. Sign in to vercel.com and import the repository.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy.

Netlify
1. Create a new site from Git.
2. Build command: `npm run build`
3. Publish directory: `dist`

GitHub Pages (static)
1. Build the app: `npm run build`.
2. Deploy the contents of the `dist` folder using a GitHub Pages action or a static-file hosting setup.

Screenshots

Below are placeholder screenshots included in this repository. Replace these SVGs with real screenshots (PNG/JPG) created from your browser if you prefer higher fidelity images.

Desktop preview (placeholder):

![Desktop preview](screenshots/desktop.svg)

Mobile preview (placeholder):

![Mobile preview](screenshots/mobile.svg)

If you replace them with PNGs, name them `screenshots/desktop.png` and `screenshots/mobile.png` and update this README accordingly.

Notes and verification
- I ran `npm install` and started the Vite dev server locally; the server reported: `Local: http://localhost:5173/`.
- The TaskManager uses localStorage for persistence and the theme persists to localStorage as well.

Next steps (optional)
- Add unit tests (Jest/Vitest + React Testing Library).
- Add CI (GitHub Actions) to run lint/tests and deploy on push.
- Improve accessibility and keyboard interactions for TaskManager.

If you'd like, I can create a small GitHub Actions workflow to auto-deploy to Vercel or Netlify and add a `screenshots/` directory with sample images.

---
_Generated on 2025-11-10._
# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Files Included

- `Week3-Assignment.md`: Detailed assignment instructions
- Starter files for your React application:
  - Basic project structure
  - Pre-configured Tailwind CSS
  - Sample component templates

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Code editor (VS Code recommended)

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx          # Main application component
```

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Deploy your application and add the URL to your README.md

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/) 