import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'global': {}, // aws-sdk needs 'global' to be defined https://stackoverflow.com/questions/72114775/vite-global-is-not-defined)
  }
})
