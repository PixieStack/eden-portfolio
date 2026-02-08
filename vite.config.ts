import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use base path only for production build (GitHub Pages)
  base: command === "build" ? "/eden-portfolio/" : "/",
  server: {
    port: 3000,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://localhost:8001",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "docs",
    sourcemap: false,
    minify: "esbuild",
  },
}));
