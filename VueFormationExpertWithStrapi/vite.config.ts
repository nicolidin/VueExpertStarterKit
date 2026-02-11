import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const libRootPath = path.resolve(
  __dirname,
  '../vue-lib-expert-starter-kit',
);

export default defineConfig(() => {
  const isLibDev = process.env.LIB_DEV_MODE === 'true';

  return {
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, 'src'),
        },
        // Toujours résoudre le CSS vers le fichier physique (dist ou node_modules)
        {
          find: 'vue-lib-expert-starter-kit/style.css',
          replacement: isLibDev
            ? path.resolve(libRootPath, 'dist/style.css')
            : path.resolve(__dirname, 'node_modules/vue-lib-expert-starter-kit/dist/style.css'),
        },
        ...(isLibDev
          ? [
              {
                find: 'vue-lib-expert-starter-kit',
                replacement: libRootPath,
              },
            ]
          : []),
      ],
    },
    server: {
      ...(isLibDev ? { fs: { allow: [path.resolve(__dirname), libRootPath] } } : {}),
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: isLibDev
            ? `@use "${path.resolve(libRootPath, 'src/styles/vue-lib-expert-starter-kit.scss')}" as *;`
            : `@use "vue-lib-expert-starter-kit/styles/vue-lib-expert-starter-kit.scss" as *;`,
        },
      },
    },
  };
});
