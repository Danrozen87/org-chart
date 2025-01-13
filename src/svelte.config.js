// @ts-nocheck
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    typescript: {
      transpileOnly: true,
    },
    postcss: true, 
  }),

  kit: {
  },
};

export default config;