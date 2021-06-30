import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
/** @type {import('@sveltejs/kit').Config} */
//import adapter from "@sveltejs/adapter-static";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: "app.html",
    }),
    target: "#svelte",

    ssr: true,
    // hydrate the <div id="svelte"> element in src/app.html
  },
};

export default config;
