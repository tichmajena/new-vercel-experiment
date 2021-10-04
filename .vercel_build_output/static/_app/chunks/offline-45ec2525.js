function c(e,n){//! This is acting upon the post prop object
return console.log("patchSinglePostOfflineStatus",n),caches.open("codeNoteCache").then(o=>o.match(`/code/${n}.json`)).then(o=>(o?e.offline=!0:e.offline=!1,e))}function t(e){console.log("SAVE: ",e);//! This is acting upon a route/endpoint, we cache the route & json data
return Promise.all([caches.open("codeNoteCache").then(n=>n.add(`/code/${e}.json`)),caches.open("codeNoteCacheSSR").then(n=>n.add(`/code/${e}`))]).then(()=>!0).catch(()=>!1)}export{c as p,t as s};
