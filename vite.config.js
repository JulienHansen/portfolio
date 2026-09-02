import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GITHUB_PAGES=true sert le site sous /portfolio/ (aperçu GitHub Pages).
// Sans cette variable : racine du domaine (dev local et Cloudflare Pages).
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/portfolio/' : '/',
})
