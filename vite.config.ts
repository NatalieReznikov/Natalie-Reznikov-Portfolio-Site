import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    target: ["es2020", "safari13"]
  },
  server: {
    host: "0.0.0.0"
  }
});
