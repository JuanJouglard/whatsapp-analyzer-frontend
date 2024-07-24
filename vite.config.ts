import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
      manifest: true,
      rollupOptions: {
          output: {
              manualChunks: {
                "react": ["react", "react-dom"]
              }
          }
      }
  },
  test: {
      environment: "jsdom",
      setupFiles: "./src/__tests__/setup.js"
  }
})
