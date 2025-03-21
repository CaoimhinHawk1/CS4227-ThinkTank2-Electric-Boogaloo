import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: "/CS4227-ThinkTank2-Electric-Boogaloo",
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
