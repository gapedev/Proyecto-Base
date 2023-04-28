import adapter from '@sveltejs/adapter-auto'
import preprocessor from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocessor({
    scss: {
      prependData: "@import './static/styles.scss';"
    }
  }),
  kit: {
    adapter: adapter({
      // if true, will create a Netlify Edge Function rather
      // than using standard Node-based functions
      edge: false,

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    })
  }
}

export default config
