/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      all: true,
      include: ['src/**/*'],
      exclude: ['src/setupTests.ts', 'src/**/*.{test,d}.{ts,tsx}'],
    },
  },
});
