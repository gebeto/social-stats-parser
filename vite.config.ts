import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      entryRoot: "src",
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "social-stats-parser",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `social-stats-parser.${format}.js`,
    },
  },
});
