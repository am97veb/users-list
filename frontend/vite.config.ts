import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path/win32'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/users-list/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})
