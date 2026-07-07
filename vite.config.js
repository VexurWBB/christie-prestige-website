import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        standard: resolve(__dirname, "christie-standard.html"),
        whoWeHelp: resolve(__dirname, "who-we-help.html"),
        process: resolve(__dirname, "our-process.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        aboutBen: resolve(__dirname, "about-ben.html"),
        aboutLiam: resolve(__dirname, "about-liam.html"),
      },
    },
  },
});
