import { fileURLToPath, URL } from 'url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

import UnoConfig from './unocss.config'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  root: resolve(__dirname, '../dev'),

  plugins: [Vue(), UnoCSS(UnoConfig)],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../dev', import.meta.url))
    }
  },

  server: {
    port: 3399
  }
})
