import {defineConfig, loadEnv} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const {GOOGLE_MAPS_API_KEY = ''} = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.GOOGLE_MAPS_API_KEY': JSON.stringify(GOOGLE_MAPS_API_KEY)
    }
  };
});
