import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // tsconfig.json path alias
  resolve: {
    alias: {
      '~/': `${process.cwd()}/src/`,
    },
  },
  server: {
    host: '0.0.0.0',
    open: true,
  },
  build: {
    sourcemap: true,
  },
  // setup for emotion
  esbuild: {
    jsxFactory: `jsx`,
    jsxInject: `import React from 'react'\nimport { jsx } from '@emotion/react'`,
  },
});
