import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss";
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: [
    { 
      find: "@", 
      replacement : path.resolve(__dirname, "./src")
    },
    { 
      find: "@components", 
      replacement: path.resolve(__dirname,"./src/components")
    },
    {
       find: "@assets", 
       replacement : path.resolve(__dirname, "./src/asserts")
    }
      
    ]
  }
});
