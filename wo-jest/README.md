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

- `vite.config.ts`

```ts
const config = {
  // ...
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion'],
      },
    }),
  ],
};
```
