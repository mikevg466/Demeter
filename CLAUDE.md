# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm test           # Jest in watch mode
npm run build      # Production build
```

To run a single test file:
```bash
npx react-scripts test --testPathPattern=<filename>
```

Linting runs automatically on pre-commit via Husky + lint-staged (ESLint with Google base config + React plugin).

## Architecture

Demeter is a baby name ranking app. Users select a gender, curate a list of names, then do pairwise comparisons that drive a merge-sort algorithm to produce a ranked list.

**Tech stack:** React 18, Redux + redux-thunk, SASS, `immutability-helper` for reducer state updates.

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

- `src/components/` — presentational (stateless/PureComponent) React components
- `src/containers/` — Redux-connected smart components
- `src/actions/` — action creators; async side-effects use redux-thunk (`getState` reads)
- `src/reducers/` — pure reducer functions using `immutability-helper`
- `src/utils/` — `shuffle()` (Fisher-Yates), `splitArray()`, gender constants
- `src/assets/data/` — name JSON datasets

### Store

Dev builds include Redux DevTools (`composeWithDevTools`) and a logger middleware. Config lives in `src/store/`.
