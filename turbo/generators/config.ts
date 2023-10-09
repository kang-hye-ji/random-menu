import type { PlopTypes } from '@turbo/gen'

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

// eslint-disable-next-line import/no-default-export -- Turbo generators require default export
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator('react-component', {
    description: 'Adds a new react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'append',
        path: 'index.tsx',
        pattern: /(?<insertion>\/\/ component exports)/g,
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Adds a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the Name of the Page?',
      },
      {
        type: 'input',
        name: 'path',
        message:
          'What is the Path of the Page? (input:./apps/random-menu/app -> output: ./apps/random-menu/app/page.tsx)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}/page.tsx',
        templateFile: 'templates/page.hbs',
      },
    ],
  })
}
