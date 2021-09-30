import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: resolve(__dirname, "./src/components"),
      views: resolve(__dirname, "./src/views"),
      layouts: resolve(__dirname, "./src/layouts"),
      hooks: resolve(__dirname, "./src/hooks"),
      services: resolve(__dirname, "./src/services"),
      utils: resolve(__dirname, "./src/utils"),
      assets: resolve(__dirname, "./src/assets"),
      configs: resolve(__dirname, "./src/configs"),
    }
  }
})
