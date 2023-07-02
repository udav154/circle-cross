import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: {
      '@': './src',
      "@settings": "src/settings",
      "@interfaces": "src/interfaces",
      "@models": "src/models",
      "@services": "src/services",
      "@components": "src/components",
      "@store": "src/store",
      "@assets": "src/assets",
      "@apps": "src/apps",
    },
  },
  plugins: [react()],
})
