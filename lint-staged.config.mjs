const MODULES = [
  { name: 'random-menu', parent: 'apps' },
  { name: 'common-utils', parent: 'packages' },
  { name: 'common-ui', parent: 'packages' },
]
const typeCheckConfigs = MODULES.reduce(
  (prev, { name, parent }) => ({
    ...prev,
    [`./${parent}/${name}/**/*.{ts,tsx}`]: () =>
      `pnpm run --filter ${name} type-check`,
  }),
  {},
)

export default {
  // linting
  '*.{ts,tsx}': 'eslint --cache --max-warnings=0',

  // formatting
  '*.{ts,tsx,css,md}': 'prettier --write',

  // type check
  ...typeCheckConfigs,
}
