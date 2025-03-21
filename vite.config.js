import { defineConfig } from "vite";

export default defineConfig({
  base: "/deploy/", // Set base URL for GitHub Pages
  build: {
    outDir: "dist", // Output directory for the build
    emptyOutDir: true, // Clear the output directory before building
  },
});
