import { defineConfig } from 'vite';
import type { ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';
import { mockProjectList } from './src/pods/project-list/api/project-list.mock-data';

const apiPlugin = () => ({
  name: 'api-mock',
  configureServer(server: ViteDevServer) {
    server.middlewares.use('/api/projects', (req: any, res: any, next: any) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(mockProjectList));
    });
  },
});

export default defineConfig({
  plugins: [react(), apiPlugin()],
});
