import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
    },
  },
  server: {
    port: 8001,
    hot: true,
  },
});
