# nana-vite-template

## library

- vite
- react
- jest (+babel)
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

- `jest.config.js`

```js
const config = {
  // ...
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
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

- `jest.config.js`

```js
const config = {
  // ...
  snapshotSerializers: ['@emotion/jest/serializer'],
};
```

### jest

- ts -> js 변환 속도 리스크도 있고 `ts-node` 패키지 설치가 필수이므로 `jest.config.ts` 대신 `jest.config.js` 사용
