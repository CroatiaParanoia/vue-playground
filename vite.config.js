import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'https://cdn.jsdelivr.net/gh/croatiaparanoia/vue-playground@gh-pages/',
});
