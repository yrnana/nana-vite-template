# nana-vite-template

## library

- vite
- react
- eslint
- prettier

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
