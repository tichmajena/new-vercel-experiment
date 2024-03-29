/*
  let money = [10, 5, 20, 3];
  // 0 + 10 = 10
  // 10 + 5 = 15
  //15 + 10 = 35
  //35 + 3 = 38
  let total = money.reduce((accumilator, arrayItemValue, index) => {
    return accumilator + arrayItemValue;
  }, 0);

  console.log("Total:", total);

  let keys = ["A", "B", "C", "D", "E", "F", "G"];
  let octave = 0;

  let keysWithOctave = keys.map((item) => {
    return item + octave;
  });
  console.log(keysWithOctave);

  let pressedKey = "C";

  let quizKey = "C";

  let contacts = [
    { name: "Tich", phone: "0773" },
    { name: "Berlin", phone: "0774" },
    { name: "Trish", phone: "0775" },
  ];
  let searchInput = "Trish";
  let found = contacts.filter((item) => {
    return item.name === searchInput;
  });
  console.log("Contact:", found);
*/

import { build, timestamp, files } from "$service-worker";

// declare const self;

const applicationCache = `applicationCache-v${timestamp}`;
const staticCache = `staticCache-v${timestamp}`;

const returnSSRpage = (path) =>
  caches.open("ssrCache").then((cache) => cache.match(path));

// Caches the svelte app (not the data)
self.addEventListener("install", (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .open("ssrCache")
        .then((cache) => cache.addAll(["/", "/posts", "/posts/offline"])),
      caches.open(applicationCache).then((cache) => cache.addAll(build)),
      caches.open(staticCache).then((cache) => cache.addAll(files)),
    ])
      .then(self.skipWaiting())
      .then(() => console.log("installed"))
  );
});

// Removes old caches
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
                key !== "postsCache" &&
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
  const request = event.request;
  const requestURL = new URL(request.url);

  if (/(posts\.json)/.test(requestURL.pathname)) {
    const returnOfflinePosts = () => {
      return fetch(event.request).catch(() => {
        return caches
          .open("postsCache")
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
  } else if (
    /(\/posts\/)(\w+-?)*/.test(requestURL.pathname) &&
    !/(.css)|(.js)$/.test(requestURL.pathname)
  ) {
    const findOfflinePost = () =>
      caches
        .match(request)
        .then((response) => (response ? response : fetch(request)))
        .catch(() => returnSSRpage("/posts/offline"));

    event.respondWith(findOfflinePost());
  } else
    event.respondWith(
      caches.match(request).then((cacheRes) => cacheRes || fetch(request))
    );
});
