export default {
  // linting
  '*.{ts,tsx}': 'eslint --cache --max-warnings=0',

  // formatting
  '*.{ts,tsx,css,md}': 'prettier --write',

  // type check
  './apps/random-menu/**/*.{ts,tsx}': () =>
    'pnpm run --filter random-menu type-check',
  './packages/common-utils/**/*.{ts,tsx}': () =>
    'pnpm run --filter common-utils type-check',
  './packages/common-ui/**/*.{ts,tsx}': () =>
    'pnpm run --filter common-ui type-check',
}
