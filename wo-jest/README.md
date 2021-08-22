# nana-vite-template

## library

- vite
- react
- eslint
- prettier
- emotion

## checkpoint

### path alias

- `tsconfig.json`

```json
{
  "baseUrl": ".",
  "paths": {
    "~/*": ["./src/*"]
  }
}
```

- `vite.config.ts`

```ts
const config = {
  //...
  resolve: {
    alias: {
      '~/': `${process.cwd()}/src/`,
    },
  },
};
```

### emotion

- `babel.config.json`

```json
{
  "presets": ["@emotion/babel-preset-css-prop"]
}
```

- `vite.config.ts`

```ts
const config = {
  // ...
  esbuild: {
    jsxFactory: `jsx`,
    jsxInject: `import { jsx } from '@emotion/react'`,
  },
};
```
