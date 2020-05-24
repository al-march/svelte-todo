const sveltePreprocess = require('svelte-preprocess');
module.exports = {
  preprocess: [preprocess()],
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src'],
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
  }),
};
