import path from 'path';
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@template/common': path.join(__dirname, '..', 'common', 'src', 'index.ts')
    }
  }
})
