import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/orange-portfolio-frontend",
  build: {
    rollupOptions: {
      external: ["axios", 'react-icons/io', 'react-dropzone'],
    },
  },
})
