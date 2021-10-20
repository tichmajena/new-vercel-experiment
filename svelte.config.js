import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
//import vercel from "@sveltejs/adapter-vercel";
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
      pages: "build",
      assets: "build",
      fallback: "app.html",
    }),
    //adapter: vercel(),

    target: "#svelte",

    ssr: true,
    // hydrate the <div id="svelte"> element in src/app.html
    files: {
      serviceWorker: "src/service-worker",
    },
  },
};

export default config;
