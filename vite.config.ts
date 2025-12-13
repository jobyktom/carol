import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Crucial for relative paths in subfolders
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});