// vite.config.ts
import vue from "file:///home/nicolas/Projects/Formation/Vue/VueExpertStarterKit/vue-lib-expert-starter-kit/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import * as path from "path";
import { defineConfig } from "file:///home/nicolas/Projects/Formation/Vue/VueExpertStarterKit/vue-lib-expert-starter-kit/node_modules/vite/dist/node/index.js";
import dts from "file:///home/nicolas/Projects/Formation/Vue/VueExpertStarterKit/vue-lib-expert-starter-kit/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/nicolas/Projects/Formation/Vue/VueExpertStarterKit/vue-lib-expert-starter-kit";
var isWatch = process.env.BUILD_WATCH === "1";
var vite_config_default = defineConfig({
  plugins: [vue(), ...isWatch ? [] : [dts()]],
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "VueLibExoCorrected",
      fileName: "vue-lib-expert-starter-kit"
    },
    rollupOptions: {
      external: [
        "vue",
        "vue-draggable",
        "lodash-es",
        "markdown-it",
        "vuetify",
        "vue-i18n",
        "pinia",
        "pinia-plugin-persistedstate",
        "zod"
      ],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "src"), we don't do that because lib can be use in hot project with hot reload (alias)
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "src/styles/vue-lib-expert-starter-kit.scss" as *;
        `
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9uaWNvbGFzL1Byb2plY3RzL0Zvcm1hdGlvbi9WdWUvVnVlRXhwZXJ0U3RhcnRlcktpdC92dWUtbGliLWV4cGVydC1zdGFydGVyLWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbmljb2xhcy9Qcm9qZWN0cy9Gb3JtYXRpb24vVnVlL1Z1ZUV4cGVydFN0YXJ0ZXJLaXQvdnVlLWxpYi1leHBlcnQtc3RhcnRlci1raXQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbmljb2xhcy9Qcm9qZWN0cy9Gb3JtYXRpb24vVnVlL1Z1ZUV4cGVydFN0YXJ0ZXJLaXQvdnVlLWxpYi1leHBlcnQtc3RhcnRlci1raXQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuY29uc3QgaXNXYXRjaCA9IHByb2Nlc3MuZW52LkJVSUxEX1dBVENIID09PSBcIjFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCAuLi4oaXNXYXRjaCA/IFtdIDogW2R0cygpXSldLFxuICBidWlsZDoge1xuICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwiVnVlTGliRXhvQ29ycmVjdGVkXCIsXG4gICAgICBmaWxlTmFtZTogXCJ2dWUtbGliLWV4cGVydC1zdGFydGVyLWtpdFwiLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgXCJ2dWVcIixcbiAgICAgICAgXCJ2dWUtZHJhZ2dhYmxlXCIsXG4gICAgICAgIFwibG9kYXNoLWVzXCIsXG4gICAgICAgIFwibWFya2Rvd24taXRcIixcbiAgICAgICAgXCJ2dWV0aWZ5XCIsXG4gICAgICAgIFwidnVlLWkxOG5cIixcbiAgICAgICAgXCJwaW5pYVwiLFxuICAgICAgICBcInBpbmlhLXBsdWdpbi1wZXJzaXN0ZWRzdGF0ZVwiLFxuICAgICAgICBcInpvZFwiLFxuICAgICAgXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIC8vIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSwgd2UgZG9uJ3QgZG8gdGhhdCBiZWNhdXNlIGxpYiBjYW4gYmUgdXNlIGluIGhvdCBwcm9qZWN0IHdpdGggaG90IHJlbG9hZCAoYWxpYXMpXG4gICAgfSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxuICAgICAgICBAdXNlIFwic3JjL3N0eWxlcy92dWUtbGliLWV4cGVydC1zdGFydGVyLWtpdC5zY3NzXCIgYXMgKjtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyYSxPQUFPLFNBQVM7QUFDM2IsWUFBWSxVQUFVO0FBQ3RCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQUt6QyxJQUFNLFVBQVUsUUFBUSxJQUFJLGdCQUFnQjtBQUU1QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsSUFBSSxHQUFHLEdBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBRTtBQUFBLEVBQzVDLE9BQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxJQUNiLEtBQUs7QUFBQSxNQUNILE9BQVksYUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBO0FBQUEsSUFFUDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxNQUdsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
