# nana-vite-template

## template list

### default

- vite
- react
- jest (+babel)
- eslint
- prettier
- emotion

### material-ui

- default
  - \- emotion
  - \+ material-ui

### wo-jest

- default
  - \- jest
  - \- babel

### tailwindcss

- default
  - \- emotion
  - \+ tailwindcss

### simple

- default
  - \- jest
  - \- babel
  - \- emotion

### linaria

- default
  - \- jest
  - \- babel
  - \- emotion
  - \+ linaria

### vanilla-extract

- default
  - \- jest
  - \- babel
  - \- emotion
  - \+ vanilla-extract

## download template

```bash
npm i -g degit

degit yrnana/nana-vite-template/default my-vite-app
degit yrnana/nana-vite-template/material-ui my-vite-app
degit yrnana/nana-vite-template/wo-jest my-vite-app
degit yrnana/nana-vite-template/tailwindcss my-vite-app
degit yrnana/nana-vite-template/simple my-vite-app
degit yrnana/nana-vite-template/linaria my-vite-app
degit yrnana/nana-vite-template/vanilla-extract my-vite-app
```

## command

```sh
find . -maxdepth 1 -type d ! -name ".*" -exec yarn --cwd "{}" type-check \;
```
