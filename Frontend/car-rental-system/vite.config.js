import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite" 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],

  server: { //so that cors doesn't intercept 
    proxy: {
      "/api": "http://localhost:4000/api", //this is the port of our backend server.
    }
  }
})
