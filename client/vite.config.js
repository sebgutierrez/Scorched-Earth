import {defineConfig, loadEnv} from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const {VITE_GOOGLE_MAPS_API_KEY = ''} = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_GOOGLE_MAPS_API_KEY': JSON.stringify(VITE_GOOGLE_MAPS_API_KEY)
    }
  };
});

