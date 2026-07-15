import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // 👈 コンテナ内でのファイル変更検知を確実にする
    },
    port: 5173,
  },
})