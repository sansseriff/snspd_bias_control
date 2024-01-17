import { defineConfig } from 'vite'
import postcss from './postcss.config.js';
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/snspd-bias-controll-svelte/',
  plugins: [svelte()],
  css: {
    postcss
  }
})
