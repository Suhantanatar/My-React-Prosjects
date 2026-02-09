import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace with the name of your GitHub repo:
export default defineConfig({
  plugins: [react()],
  base: '/My-React-Prosjects/', // 👈 must match your repo name
});
