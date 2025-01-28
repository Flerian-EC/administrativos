import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    build: {
        target: "es2020"
    },
    plugins: [
        tailwindcss(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        })
    ],
})