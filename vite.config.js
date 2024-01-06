/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
      emitWarning: false,
    }),
  ],
  server: {
    hmr: {
      overlay: false,
    },
  },
  define: {
    global: {}, // aws-sdk needs 'global' to be defined https://stackoverflow.com/questions/72114775/vite-global-is-not-defined)
  },
});
