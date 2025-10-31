import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  allowedHosts: ['devserver-main--vermillion-puffpuff-0d18b9.netlify.app'],
},
})