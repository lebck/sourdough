# copilot-instructions.md

## Project Overview

This is a modern React (TypeScript) project for a sourdough calculator web app. It uses Vite for development/build, Tailwind CSS for styling, ESLint and Prettier for code quality, and Storybook for UI component development. The project supports i18n via react-i18next and uses Jotai for state management.

## Coding Standards

- **Language:** TypeScript (strictly typed)
- **Framework:** React (functional components only, no class components)
- **Styling:** Tailwind CSS (utility-first)
- **State Management:** Jotai
- **i18n:** Use react-i18next for all user-facing text
- **Testing:** Use Vitest for unit tests and Storybook for UI testing

## Linting & Formatting

- **ESLint** is configured to:
  - Disallow the use of the function keyword for function declarations/expressions; use arrow functions only.
  - Enforce Prettier formatting.
- **Prettier** is used for code formatting, with Tailwind CSS plugin for class sorting.

## File & Export Conventions

- Use `export const ComponentName = ...` for all components and utilities.
- Do not use `export { ComponentName }` or default exports for components/utilities.
- Organize components in feature-based folders.
- Place shared UI components in `src/SourDoughCalculator/components/shared/`.

## Folder Structure

- `src/` — Main source code
  - `App.tsx` — App entry point
  - `SourDoughCalculator/` — Main feature module
    - `components/` — UI components (Calculator, Form, Ingredients, etc.)
    - `services/` — State and business logic
    - `types/` — TypeScript types and interfaces
    - `shared/` — Reusable UI components

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run lint` — Run ESLint
- `npm run test` — Run tests with Vitest
- `npm run storybook` — Start Storybook

## Best Practices

- Use arrow functions for all functions (including React components).
- Use named exports (`export const ...`) for all modules.
- Use Tailwind CSS classes for all styling.
- Write unit tests for all logic and components.
- Use i18n for all user-facing strings.
- Keep business logic out of components; use services/hooks.

## Commit & PR Guidelines

- Ensure all code passes linting and tests before committing.
- Use clear, descriptive commit messages.
- Reference issues or features in PRs.

