const e=["/_app/start-95883e4f.js","/_app/assets/start-0826e215.css","/_app/pages/__layout.svelte-e8cd550c.js","/_app/assets/pages/__layout.svelte-47e33859.css","/_app/error.svelte-59b6f671.js","/_app/pages/index.svelte-39ef8d0c.js","/_app/pages/contacts/index.svelte-3cf3577e.js","/_app/pages/contacts/new.svelte-31c17941.js","/_app/pages/contacts/[slug].svelte-d1ca20ea.js","/_app/assets/pages/contacts/[slug].svelte-4bf92ded.css","/_app/pages/myShop/index.svelte-5ac671d8.js","/_app/pages/about.svelte-eb6a8fd8.js","/_app/assets/pages/about.svelte-51ba7a34.css","/_app/pages/notes/index.svelte-bcce9620.js","/_app/pages/notes/new.svelte-76dc6f05.js","/_app/pages/notes/[slug].svelte-535bfc9a.js","/_app/pages/todos/index.svelte-c5949797.js","/_app/assets/pages/todos/index.svelte-ab14594b.css","/_app/pages/tools/index.svelte-8b8d8ad5.js","/_app/assets/pages/tools/index.svelte-214ebbc6.css","/_app/pages/tools/stopwatch.svelte-52954f88.js","/_app/pages/tools/dates.svelte-b4d22ae6.js","/_app/pages/tools/sales.svelte-99d35b10.js","/_app/pages/auth/index.svelte-062c5440.js","/_app/pages/cars/index.svelte-b0d4c920.js","/_app/pages/cars/[index].svelte-8e2186c7.js","/_app/pages/code/index.svelte-2e2d8559.js","/_app/pages/code/OurButtons.svelte-a83c4448.js","/_app/pages/code/DescriptionContent.svelte-015f91e4.js","/_app/pages/code/DescriptionForm.svelte-cd89b207.js","/_app/pages/code/TitleContent.svelte-1b97257e.js","/_app/pages/code/CodeContent.svelte-504a563e.js","/_app/assets/pages/code/CodeContent.svelte-34bd68e6.css","/_app/pages/code/QuillCode.svelte-d972655e.js","/_app/assets/QuillCode.svelte_svelte&type=style&lang-f384224f.css","/_app/pages/code/TitleForm.svelte-5ba513db.js","/_app/pages/code/CodeForm.svelte-dc8476da.js","/_app/assets/pages/code/CodeForm.svelte-d1691e53.css","/_app/pages/code/NoteBody.svelte-9e701054.js","/_app/pages/code/CodeJar.svelte-d1b2a495.js","/_app/pages/code/offline.svelte-32fdf572.js","/_app/pages/code/[index].svelte-183b9e5d.js","/_app/assets/pages/code/[index].svelte-b2c0f41b.css","/_app/pages/quiz/index.svelte-b6a8aaa1.js","/_app/assets/pages/quiz/index.svelte-001a687f.css","/_app/pages/quiz/[slug].svelte-73b316cf.js","/_app/pages/app/index.svelte-9ddbcfbc.js","/_app/assets/pages/app/index.svelte-4c60bb27.css","/_app/pages/app/new.svelte-860a1d07.js","/_app/assets/pages/app/new.svelte-a22408ed.css","/_app/pages/app/[slug].svelte-65847f2c.js","/_app/chunks/vendor-3cb4ad3c.js","/_app/chunks/singletons-ff603286.js","/_app/chunks/preload-helper-08cc8e69.js","/_app/chunks/stores-a8276c3d.js","/_app/chunks/navigation-e6c17f3a.js","/_app/chunks/store-67a0ef90.js","/_app/chunks/index-f1a48b6c.js","/_app/chunks/index-b46d0a65.js","/_app/chunks/offline-fc210c00.js","/_app/chunks/Card-aee6b4ff.js","/_app/chunks/index-81894c16.js","/_app/chunks/javascript-a837743b.js","/_app/chunks/php-fff554a0.js","/_app/chunks/atom-one-dark-9fa0c185.js","/_app/chunks/quill-55589507.js","/_app/chunks/_commonjsHelpers-7d66b65f.js","/_app/chunks/index-3f01ef15.js","/_app/assets/index-39b4e2a9.css","/_app/chunks/javascript-4090567a.js"],s=["/favicon.ico","/ic_launcher.png","/manifest.json","/robots.txt","/svelte-welcome.png","/svelte-welcome.webp"];self.addEventListener("install",(a=>{a.waitUntil(Promise.all([caches.open("ssrCache").then((e=>e.addAll(["/","/code","/code/offline"]))),caches.open("applicationCache-v1629916882574").then((s=>s.addAll(e))),caches.open("staticCache-v1629916882574").then((e=>e.addAll(s)))]).then(self.skipWaiting()).then((()=>console.log("installed"))))})),self.addEventListener("activate",(e=>{e.waitUntil(clients.claim(),caches.keys().then((e=>Promise.all(e.filter((e=>"applicationCache-v1629916882574"!==e&&"staticCache-v1629916882574"!==e&&"codeNoteCache"!==e&&"ssrCache"!==e)).map((e=>caches.delete(e)))))).then(self.skipWaiting()).then((()=>console.log("activated"))))})),self.addEventListener("fetch",(e=>{const s=e.request,a=new URL(s.url);if(/(code\.json)/.test(a.pathname)){console.log("REQUESTS: ",s,a);const p=()=>fetch(e.request).catch((()=>caches.open("codeNoteCache").then((e=>e.keys().then((s=>Promise.all(s.map((s=>e.match(s)))))))).then((e=>Promise.all(e.map((e=>e.json()))))).then((e=>new Response(JSON.stringify(e),{statusText:"offline"})))));e.respondWith(p()),console.log("PATHS IF: ",a.pathname)}else if(/(\/code\/)(\w+-?)*/.test(a.pathname)&&!/(.css)|(.js)$/.test(a.pathname)){console.log("PATHS ELSE IF: ",a.pathname);const p=()=>caches.match(s).then((e=>e||fetch(s))).catch((()=>{return e="/code/offline",caches.open("ssrCache").then((s=>s.match(e)));var e}));e.respondWith(p())}else e.respondWith(caches.match(s).then((e=>e||fetch(s))))}));
