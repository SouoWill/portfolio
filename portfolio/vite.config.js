import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Mude para '/~SEU_LOGIN/' antes do npm run build
})