// /**
//  * Adds the `offline` property to an single post, based on the posts cached status
//  * @param post a post
//  * @returns A promise that resolves to the post with a `offline` property
//  */
// export function patchSinglePostOfflineStatus(post, route, slug) {
//   //! This is acting upon the post prop object
//   console.log("patchSinglePostOfflineStatus", slug);
//   return caches
//     .open(`${route}NoteCache`)
//     .then((cache) => {
//       return cache.match(`/${route}/${slug}.json`);
//     })
//     .then((response) => {
//       if (response) post.offline = true;
//       else post.offline = false;
//       return post;
//     });
// }
// //! My post doesn't have an offline property though
// //! Are we caching routes? Or Objects?

// /**
//  * Adds the `offline` property to an array of posts, based on their cached status returns only offline posts when `appOffline = true`
//  * @param posts An array of posts
//  * @param appOffline A boolean wether the app is offline, filtering out posts that are not cached
//  * @returns A promise that resolves to posts with an `offline` property and only offline posts when `appOffline = true`
//  */
// export function patchAllpostsOfflineStatus(posts, appOffline) {
//   console.log("appOffline");
//   //! this is acting upon the post prop object
//   return Promise.all(posts.map(patchSinglePostOfflineStatus)).then((posts) =>
//     appOffline ? posts.filter((post) => post.offline) : posts
//   );
// }
// //! consumes an array of posts
// //? Is it json or...
// //? and appOnline status, not sure where that comes from

// /**
//  * Saves a post in the cache based on its id
//  * @param slug the id of the post to save
//  * @returns True if saved to cache, false on error
//  */
// export function saveInCache(route, slug) {
//   console.log("SAVE: ", slug);
//   //! This is acting upon a route/endpoint, we cache the route & json data
//   return Promise.all([
//     caches
//       .open(`${route}NoteCache`)
//       .then((cache) => cache.add(`/${route}/${slug}.json`)),
//     caches
//       .open(`${route}NoteCacheSSR`)
//       .then((cache) => cache.add(`/${route}/${slug}`)),
//   ])
//     .then(() => true)
//     .catch(() => false);
// }
// // This was previously working with IDs, I changed it to slug
// // I thinkthat might have been a mistake
// // But i did this based on the fact that these post are not using id for routes but rather the slug
// //! I may have overlooked the fact that it's the slug-id combo that is used
// // So that's probably what I need to cache

// /**
//  * Deletes a post in the cache based on its id
//  * @param slug the id of the post to save
//  * @returns True if deleted and false if not
//  */
// export function deleteInCache(route, slug) {
//   //! This is acting upon a route/endpoint, we cache the route & json data
//   return Promise.all([
//     caches
//       .open(`${route}NoteCache`)
//       .then((cache) => cache.delete(`/${route}/${slug}.json`)),
//     caches
//       .open(`${route}NoteCacheSSR`)
//       .then((cache) => cache.delete(`/${route}/${slug}`)),
//   ]).then(([dataSuccess, ssrSuccess]) => dataSuccess && ssrSuccess);
// }
// // Need I say more?
