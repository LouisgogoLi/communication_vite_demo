import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_APP_PUBLICPATH,
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_PROXY,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    define: {
      'process.env': env,
    },
    build: {
      sourcemap: mode === 'production' ? false : true,
    },
    plugins: [
      vue(),
      vueI18n({
        // you need to set i18n resource including paths !
        include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/src/locales/**'),
      }),
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: false })],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./unit_test/vitest.init.js'],
      deps: {
        inline: ['element-plus'],
      },
    },
  };
});
