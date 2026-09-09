import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      // Otimização de builds para produção
      babel: {
        plugins: [],
      },
    }),
    tailwindcss(),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
  build: {
    // Otimizações de build
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Code splitting para vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['framer-motion'],
          'charts-vendor': ['recharts'],
          'dnd-vendor': ['@dnd-kit/core', '@dnd-kit/sortable', '@dnd-kit/utilities'],
          'utils-vendor': ['date-fns', 'uuid', 'canvas-confetti'],
        },
      },
    },
    // Limiar para alertas de bundle size
    chunkSizeWarningLimit: 1000,
    // Habilitar source maps apenas em desenvolvimento
    sourcemap: false,
    // Compressão gzip/brotli
    reportCompressedSize: true,
  },
  esbuild: {
    // Otimizações do esbuild
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  optimizeDeps: {
    // Pré-otimização de dependências
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
    ],
    exclude: ['@dnd-kit/core'],
  },
  // Configurações de CSS
  css: {
    devSourcemap: false,
  },
});
