import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // user/organization site (pasachiya.github.io). For project site use '/repo-name/'.
})
