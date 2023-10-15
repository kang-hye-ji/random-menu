const MODULES = [
  { name: 'random-menu', parent: 'apps' },
  { name: 'common-utils', parent: 'packages' },
  { name: 'common-ui', parent: 'packages' },
]
const checkLintAndType = MODULES.reduce(
  (prev, { name, parent }) => ({
    ...prev,
    [`./${parent}/${name}/**/*.{ts,tsx}`]: () => [
      `pnpm run --filter ${name} lint:test`,
      `pnpm run --filter ${name} type-check`,
    ],
  }),
  {},
)

export default {
  // formatting
  '*.{ts,tsx,css,md}': 'prettier --write',

  // linting & type check
  ...checkLintAndType,
}
