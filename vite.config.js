import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Change this to a valid IP address if needed
    port: 5173, // Optional otherwise your app will start on default port
  }
})
