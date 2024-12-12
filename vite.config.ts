import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // Required for resolving paths

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Example alias: '@components' points to the 'src/Components' directory
      "@components": path.resolve(__dirname, "src/Components"),
      "@assets": path.resolve(__dirname, "src/Assets"),
      "@hooks": path.resolve(__dirname, "src/Hooks"),
      "@store": path.resolve(__dirname, "src/Store"),
    },
  },
});
