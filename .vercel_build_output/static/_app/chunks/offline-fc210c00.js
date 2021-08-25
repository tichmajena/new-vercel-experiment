function e(e,o){
//! This is acting upon the post prop object
return console.log("patchSinglePostOfflineStatus",o),caches.open("codeNoteCache").then((e=>e.match(`/code/${o}.json`))).then((o=>(e.offline=!!o,e)))}function o(e){
//! This is acting upon a route/endpoint, we cache the route & json data
return console.log("SAVE: ",e),Promise.all([caches.open("codeNoteCache").then((o=>o.add(`/code/${e}.json`))),caches.open("codeNoteCacheSSR").then((o=>o.add(`/code/${e}`)))]).then((()=>!0)).catch((()=>!1))}
//! I may have overlooked the fact that it's the slug-id combo that is used
function c(e){
//! This is acting upon a route/endpoint, we cache the route & json data
return Promise.all([caches.open("codeNoteCache").then((o=>o.delete(`/code/${e}.json`))),caches.open("codeNoteCacheSSR").then((o=>o.delete(`/code/${e}`)))]).then((([e,o])=>e&&o))}export{c as d,e as p,o as s};
