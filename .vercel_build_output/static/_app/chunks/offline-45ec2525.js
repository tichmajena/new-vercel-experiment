function e(e,o){
//! This is acting upon the post prop object
return console.log("patchSinglePostOfflineStatus",o),caches.open("codeNoteCache").then((e=>e.match(`/code/${o}.json`))).then((o=>(e.offline=!!o,e)))}function o(e){
//! This is acting upon a route/endpoint, we cache the route & json data
return console.log("SAVE: ",e),Promise.all([caches.open("codeNoteCache").then((o=>o.add(`/code/${e}.json`))),caches.open("codeNoteCacheSSR").then((o=>o.add(`/code/${e}`)))]).then((()=>!0)).catch((()=>!1))}export{e as p,o as s};
