import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
//import adapter from "@sveltejs/adapter-static";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    target: "#svelte",
    // adapter: adapter({
    //   // default options are shown
    //   pages: "build",
    //   assets: "build",
    //   fallback: "app.html",
    // }),
    ssr: false,
    // hydrate the <div id="svelte"> element in src/app.html
  },
};

export default config;
