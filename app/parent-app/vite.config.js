import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "parent",
      remotes: {
        listPage: "http://localhost/child-app-1/assets/remoteEntry.js",
        homePage: "http://localhost/child-app-2/assets/remoteEntry.js",
      },
      exposes: {
        "./store": "./src/store/store.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.3.1",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.3.1",
        },
        "@reduxjs/toolkit": { singleton: true },
        "react-redux": { singleton: true },
      },
    }),
  ],
  build: {
    base: "/",
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: ["homePage/HomePage", "listPage/ListPage"],
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 5173,
    host: "0.0.0.0",

    cors: {
      origin: "*",
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  },
});
