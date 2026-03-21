# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server (alias for react-router dev)
npm run dev        # Dev server at http://localhost:5173
npm run build      # Production build
```

Linting runs automatically on pre-commit via Husky + lint-staged (ESLint with Google base config + React plugin).

## Architecture

Demeter is a baby name ranking app. Users select a gender, curate a list of names, then do pairwise comparisons that drive a merge-sort algorithm to produce a ranked list.

**Tech stack:** React 19, React Router v7 (framework mode, SPA/ssr:false), Vite, Redux + redux-thunk, SASS, `immutability-helper` for reducer state updates.

### App flow

1. **Gender selection** → `setGenderType()` filters `combinedTop2024.json` (top 1,000 names)
2. **List preview** → users add/remove names from `rawList`
3. **Init sorting** → `initializeSortingList()` shuffles `rawList` and splits it into single-element arrays (`sortingList`)
4. **Pairwise voting** → `selectName()` / `removeName()` thunks drive a merge-sort merge via `SORT_SELECTOR_NAMES` in the names reducer
5. **Final view** → when `isSortingFinished === true`, `finalList` is shown

### Redux state shape (names slice)

```js
{
  initialRawList,   // full loaded pool
  rawList,          // user-curated list
  sortingList,      // 2D array — the merge-sort structure
  currentSortList,  // temp array during merge passes
  finalList,        // completed sorted result
  firstName, secondName,           // currently displayed pair
  mainIdx, leftIdx, rightIdx,      // merge-sort pointers
  isSortingFinished,
  genderType,       // 'M' | 'F' | ''
  customName
}
```

### Directory conventions

- `src/components/` — all React components (functional, using hooks); previously split into components/ + containers/
- `src/actions/` — action creators; async side-effects use redux-thunk (`getState` reads)
- `src/reducers/` — pure reducer functions using `immutability-helper`
- `src/utils/` — `shuffle()` (Fisher-Yates), `splitArray()`, gender constants
- `src/assets/data/` — name JSON datasets

### React Router v7 entry points

- `src/root.jsx` — root layout component (rendered server-side); contains `<html>`, `<head>`, `<body>`, `<Outlet>`
- `src/entry.client.jsx` — client-only hydration bootstrap; mounts `HydratedRouter` wrapped in Redux `Provider`
- `src/routes.js` — route definitions using `@react-router/dev/routes`
- `react-router.config.js` — framework config (`appDirectory: 'src'`, `ssr: false`)
- `vite.config.js` — Vite config with `reactRouter()` plugin

### Store

Redux `Provider` lives in `src/entry.client.jsx` (not `root.jsx`) to avoid store creation during SSR. Dev builds include Redux DevTools (`composeWithDevTools`) and a logger middleware. Config lives in `src/store/`. Uses `import.meta.env.MODE` (Vite) to switch between dev and production store configs.
