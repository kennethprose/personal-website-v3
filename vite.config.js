import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Matches CRA's default build folder
  },
  server: {
    port: 3000,      // Matches CRA's default port
  },
});
