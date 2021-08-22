# nana-vite-template

## library

- vite
- react
- jest (+babel)
- eslint
- prettier
- material-ui

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

- `jest.config.js`

```js
const config = {
  // ...
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
};
```

### jest

- ts -> js 변환 속도 리스크도 있고 `ts-node` 패키지 설치가 필수이므로 `jest.config.ts` 대신 `jest.config.js` 사용
