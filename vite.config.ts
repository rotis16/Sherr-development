import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Only project GitHub Pages builds (npm run build --base=/Sherr-development/)
  // need a non-root base; local dev and the default build stay at "/".
  base: process.env.GH_PAGES_BASE || '/',
  plugins: [react(), tailwindcss()],
})
