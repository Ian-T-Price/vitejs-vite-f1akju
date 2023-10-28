// vite.config.js

// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     open: '/out/index.html',
//   },
// });

// module.exports = {
//   root: 'src',
//   build: {
//     outDir: '../dist'
//   }
// }

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'out',
  build: {
    outDir: '../out',
  },
});
