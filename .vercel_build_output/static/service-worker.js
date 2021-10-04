const timestamp = 1633281815992;
const build = [
  "/_app/start-1808eaeb.js",
  "/_app/assets/start-464e9d0a.css",
  "/_app/pages/__layout.svelte-9b5f03ae.js",
  "/_app/assets/pages/__layout.svelte-c6870080.css",
  "/_app/error.svelte-2e250251.js",
  "/_app/pages/index.svelte-df645e5b.js",
  "/_app/pages/contacts/index.svelte-2492c0a2.js",
  "/_app/pages/contacts/new.svelte-8abedfce.js",
  "/_app/pages/contacts/[slug].svelte-1d248494.js",
  "/_app/assets/pages/contacts/[slug].svelte-58a734ce.css",
  "/_app/pages/myShop/index.svelte-650e6158.js",
  "/_app/pages/about.svelte-d450b17d.js",
  "/_app/assets/pages/about.svelte-846f56b5.css",
  "/_app/pages/notes/index.svelte-29afbc04.js",
  "/_app/pages/notes/new.svelte-6387e7ab.js",
  "/_app/pages/notes/[slug].svelte-0ba9b624.js",
  "/_app/pages/todos/index.svelte-377c7a1d.js",
  "/_app/assets/pages/todos/index.svelte-785505fa.css",
  "/_app/pages/tools/index.svelte-5b9e2fe2.js",
  "/_app/assets/pages/tools/index.svelte-46bba601.css",
  "/_app/pages/tools/stopwatch.svelte-c2920133.js",
  "/_app/pages/tools/dates.svelte-c1515a66.js",
  "/_app/pages/tools/sales.svelte-cfe6f4af.js",
  "/_app/pages/auth/index.svelte-52cbae2c.js",
  "/_app/pages/cars/index.svelte-454fe40e.js",
  "/_app/pages/cars/[index].svelte-c6a928e1.js",
  "/_app/pages/code/index.svelte-49069df5.js",
  "/_app/pages/code/OurButtons.svelte-b3ae2b8c.js",
  "/_app/pages/code/DescriptionContent.svelte-28241d0c.js",
  "/_app/pages/code/DescriptionForm.svelte-9b95a921.js",
  "/_app/pages/code/TitleContent.svelte-d605ce40.js",
  "/_app/pages/code/CodeContent.svelte-2ac324cb.js",
  "/_app/assets/pages/code/CodeContent.svelte-1b9f216b.css",
  "/_app/pages/code/QuillCode.svelte-a6a628bd.js",
  "/_app/assets/QuillCode.svelte_svelte&type=style&lang-af316d4c.css",
  "/_app/pages/code/TitleForm.svelte-80959ad0.js",
  "/_app/pages/code/CodeForm.svelte-d01338bd.js",
  "/_app/assets/pages/code/CodeForm.svelte-7c93d51d.css",
  "/_app/pages/code/NoteBody.svelte-088853ff.js",
  "/_app/pages/code/CodeJar.svelte-7f604c3e.js",
  "/_app/pages/code/offline.svelte-a47d5b81.js",
  "/_app/pages/code/[index].svelte-2a0b6e97.js",
  "/_app/assets/pages/code/[index].svelte-a5d2f24a.css",
  "/_app/pages/quiz/index.svelte-68611023.js",
  "/_app/assets/pages/quiz/index.svelte-a9ee7896.css",
  "/_app/pages/quiz/[slug].svelte-03d448fe.js",
  "/_app/pages/app/index.svelte-84977d35.js",
  "/_app/assets/pages/app/index.svelte-0d576a2f.css",
  "/_app/pages/app/new.svelte-f69f6c8c.js",
  "/_app/assets/pages/app/[slug].svelte-58cc6b15.css",
  "/_app/pages/app/[slug].svelte-840e1ced.js",
  "/_app/chunks/vendor-52b416c4.js",
  "/_app/chunks/singletons-ff603286.js",
  "/_app/chunks/preload-helper-ec9aa979.js",
  "/_app/chunks/stores-d013c170.js",
  "/_app/chunks/navigation-51b348a1.js",
  "/_app/chunks/store-18dbc89f.js",
  "/_app/chunks/index-4a09887f.js",
  "/_app/chunks/index-dff4edb2.js",
  "/_app/chunks/offline-45ec2525.js",
  "/_app/chunks/Card-bccc4dc3.js",
  "/_app/chunks/index-6fdebf86.js",
  "/_app/chunks/javascript-247adf3f.js",
  "/_app/chunks/php-7eff8603.js",
  "/_app/chunks/atom-one-dark-9fa0c185.js",
  "/_app/chunks/quill-bf22308a.js",
  "/_app/chunks/_commonjsHelpers-7d66b65f.js",
  "/_app/chunks/index-c7efbd9d.js",
  "/_app/assets/index-01dc06ec.css",
  "/_app/chunks/javascript-23f6e463.js"
];
const files = [
  "/favicon.ico",
  "/ic_launcher.png",
  "/manifest.json",
  "/robots.txt",
  "/svelte-welcome.png",
  "/svelte-welcome.webp"
];
const applicationCache = `applicationCache-v${timestamp}`;
const staticCache = `staticCache-v${timestamp}`;
const returnSSRpage = (path) => caches.open("ssrCache").then((cache) => cache.match(path));
self.addEventListener("install", (event) => {
  event.waitUntil(Promise.all([
    caches.open("ssrCache").then((cache) => cache.addAll(["/", "/auth", "/code", "/code/offline"])),
    caches.open(applicationCache).then((cache) => cache.addAll(build)),
    caches.open(staticCache).then((cache) => cache.addAll(files))
  ]).then(self.skipWaiting()).then(() => console.log("installed")));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim(), caches.keys().then((keys) => {
    return Promise.all(keys.filter((key) => key !== applicationCache && key !== staticCache && key !== "codeNoteCache" && key !== "ssrCache").map((key) => caches.delete(key)));
  }).then(self.skipWaiting()).then(() => console.log("activated")));
});
self.addEventListener("fetch", (event) => {
  if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") {
    return;
  }
  const request = event.request;
  const requestURL = new URL(request.url);
  if (/(code\.json)/.test(requestURL.pathname)) {
    console.log("REQUESTS: ", request, requestURL);
    const returnOfflinePosts = () => {
      return fetch(event.request).catch(() => {
        return caches.open("codeNoteCache").then((cache) => {
          return cache.keys().then((cacheKeys) => {
            return Promise.all(cacheKeys.map((cacheKey) => cache.match(cacheKey)));
          });
        }).then((cachesResponses) => {
          return Promise.all(cachesResponses.map((response) => response.json()));
        }).then((posts) => {
          const response = new Response(JSON.stringify(posts), {
            statusText: "offline"
          });
          return response;
        });
      });
    };
    event.respondWith(returnOfflinePosts());
    console.log("PATHS IF: ", requestURL.pathname);
  } else if (/(\/code\/)(\w+-?)*/.test(requestURL.pathname) && !/(.css)|(.js)$/.test(requestURL.pathname)) {
    console.log("PATHS ELSE IF: ", requestURL.pathname);
    const findOfflinePost = () => caches.match(request).then((response) => response ? response : fetch(request)).catch(() => returnSSRpage("/code/offline"));
    event.respondWith(findOfflinePost());
  } else
    event.respondWith(caches.match(request).then((cacheRes) => cacheRes || fetch(request)));
});
