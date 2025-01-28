import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: '/child-app-1/',
  plugins: [
    react(),
    federation({
      name: "child1",
      filename: "remoteEntry.js",
      exposes: {
        "./ListPage": "./src/pages/ListPage.jsx",
      },
      remotes: { parentApp: "http://parent-app:5173/assets/remoteEntry.js" },
      
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.3.1",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.3.1",
        },
        redux: {
          singleton: true,
        },
        "react-redux": {
          singleton: true,
        },
      },
    }),
  ],
  build: {
    base: "/",
   
    outDir: 'dist',
    assetsDir: 'assets',
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]", 
        chunkFileNames: "assets/[name].js",
        entryFileNames: "assets/[name].js",
      },
    },
    
   
  },
  server: {
    port: 5174,
    host: '0.0.0.0',
    cors:true,
  },
});