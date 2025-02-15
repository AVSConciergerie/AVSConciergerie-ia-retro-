import { defineConfig } from 'vite'

export default defineConfig({
  modules: [
    {
      type: 'javascript',
      MIME: 'text/javascript',
      regex: /\.(js|cjs|mjs)$/i,
    }
  ]
})
