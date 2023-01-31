import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
// import {modifyVars} from './src/theme/primary-theme'

// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log(mode);

  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: (process.env.VITE_PORT as unknown as number) || 3000,
      proxy: {
        '/online': {
          target: process.env.VITE_HOST || 'http://220.135.67.240:3032',
          secure: false,
          changeOrigin: true,
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/sass/variables.scss"; @import "@/sass/mixins.scss";`
        }
      }
    },
    

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },

    build: {
      emptyOutDir: true, // 打包前清空原有打包資料夾
    },
  });
};
