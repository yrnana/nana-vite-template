import linaria from '@linaria/rollup';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {
          presets: ['@linaria'],
        },
        generatorOpts: {
          presets: ['@linaria'],
        },
      },
    }),
    linaria({
      sourceMap: true,
    }),
  ],
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
});
