import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";
import path from "path";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on(
        "file:preprocessor",
        vitePreprocessor({
          configFile: path.resolve(__dirname, "./vite.config.js"),
          mode: "development",
        }),
      );
    },
  },
});
