import { build, timestamp, files } from "$service-worker";

// declare const self;
const applicationCache = `applicationCache-v${timestamp}`;
const staticCache = `staticCache-v${timestamp}`;

const returnSSRpage = (path) =>
  caches.open("ssrCache").then((cache) => cache.match(path));

// Caches the svelte app (not the data)
// * I could include the other routes
self.addEventListener("install", (event) => {
  // if (
  //   event.request.cache === "only-if-cached" &&
  //   event.request.mode !== "same-origin"
  // ) {
  //   return;
  // }
  event.waitUntil(
    Promise.all([
      caches
        .open("ssrCache")
        .then((cache) =>
          cache.addAll(["/", "/auth", "/code", "/code/offline"])
        ),
      caches.open(applicationCache).then((cache) => cache.addAll(build)),
      caches.open(staticCache).then((cache) => cache.addAll(files)),
    ])
      .then(self.skipWaiting())
      .then(() => console.log("installed"))
  );
});

// Removes old caches
// * I could remove the other post-type caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    clients.claim(),
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter(
              (key) =>
                key !== applicationCache &&
                key !== staticCache &&
                key !== "codeNoteCache" &&
                key !== "ssrCache"
            )
            .map((key) => caches.delete(key))
        );
      })
      .then(self.skipWaiting())
      .then(() => console.log("activated"))
  );
});

self.addEventListener("fetch", (event) => {
  if (
    event.request.cache === "only-if-cached" &&
    event.request.mode !== "same-origin"
  ) {
    return;
  }
  const request = event.request;
  const requestURL = new URL(request.url);

  // Do this for every route up for caching
  if (/(code\.json)/.test(requestURL.pathname)) {
    console.log("REQUESTS: ", request, requestURL);
    const returnOfflinePosts = () => {
      return fetch(event.request).catch(() => {
        return caches
          .open("codeNoteCache")
          .then((cache) => {
            return cache.keys().then((cacheKeys) => {
              return Promise.all(
                cacheKeys.map((cacheKey) => cache.match(cacheKey))
              );
            });
          })
          .then((cachesResponses) => {
            return Promise.all(
              cachesResponses.map((response) => response.json())
            );
          })
          .then((posts) => {
            const response = new Response(JSON.stringify(posts), {
              statusText: "offline",
            });
            return response;
          });
      });
    };

    event.respondWith(returnOfflinePosts());
    console.log("PATHS IF: ", requestURL.pathname);
  } else if (
    /(\/code\/)(\w+-?)*/.test(requestURL.pathname) &&
    !/(.css)|(.js)$/.test(requestURL.pathname)
  ) {
    console.log("PATHS ELSE IF: ", requestURL.pathname);
    const findOfflinePost = () =>
      caches
        .match(request)
        .then((response) => (response ? response : fetch(request)))
        .catch(() => returnSSRpage("/code/offline"));
    event.respondWith(findOfflinePost());
  } else
    event.respondWith(
      caches.match(request).then((cacheRes) => cacheRes || fetch(request))
    );
});
