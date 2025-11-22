import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://amhaservice.et', // actual backend URL
        changeOrigin: true,
        secure: false,
        configure: (proxy) => {
          proxy.on('error', (err, _req, _res) => console.log('proxy error', err));
          proxy.on('proxyReq', (proxyReq, req) =>
            console.log('Sending Request to Target:', req.method, req.url)
          );
          proxy.on('proxyRes', (proxyRes, req) =>
            console.log('Received Response from Target:', proxyRes.statusCode, req.url)
          );
        },
      },
      '/method': {
        target: 'http://amhaservice.et',
        changeOrigin: true,
        secure: false,
      },
      '/resource': {
        target: 'http://amhaservice.et',
        changeOrigin: true,
        secure: false,
      },
      '/files': {
        target: 'http://amhaservice.et',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
