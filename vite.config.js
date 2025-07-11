import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pranavigpalli.github.io/', // <-- THIS IS ESSENTIAL
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
