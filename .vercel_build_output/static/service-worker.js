const e=self,s="cache1625588005773",a=["/_app/start-ce91df32.js","/_app/assets/start-0826e215.css","/_app/pages/__layout.svelte-a49c1f35.js","/_app/assets/pages/__layout.svelte-29fe2983.css","/_app/error.svelte-4a4eaecd.js","/_app/pages/index.svelte-e3d3e06b.js","/_app/pages/contacts/index.svelte-a386dc6a.js","/_app/pages/contacts/new.svelte-7f833160.js","/_app/pages/contacts/[slug].svelte-fd19e811.js","/_app/assets/pages/contacts/[slug].svelte-4bf92ded.css","/_app/pages/myShop/index.svelte-d3e332aa.js","/_app/pages/about.svelte-5241ad11.js","/_app/assets/pages/about.svelte-51ba7a34.css","/_app/pages/notes/index.svelte-3436beec.js","/_app/pages/notes/new.svelte-2d895c32.js","/_app/pages/notes/[slug].svelte-653c0d83.js","/_app/pages/todos/index.svelte-0cbb0f4e.js","/_app/assets/pages/todos/index.svelte-ab14594b.css","/_app/pages/tools/index.svelte-a4cfcaaf.js","/_app/assets/pages/tools/index.svelte-9e254ab9.css","/_app/pages/tools/stopwatch.svelte-4af5e8b6.js","/_app/pages/tools/sales.svelte-a6e95bcb.js","/_app/pages/auth/index.svelte-ff7cb805.js","/_app/pages/cars/index.svelte-c381dcbf.js","/_app/pages/cars/[index].svelte-6111e773.js","/_app/pages/code/index.svelte-b94bcdb1.js","/_app/pages/code/OurButtons.svelte-5689548c.js","/_app/pages/code/DescriptionContent.svelte-109fd435.js","/_app/pages/code/DescriptionForm.svelte-d1b219e5.js","/_app/pages/code/TitleContent.svelte-b1acbaaa.js","/_app/pages/code/CodeContent.svelte-de560a7d.js","/_app/assets/pages/code/CodeContent.svelte-34bd68e6.css","/_app/pages/code/TitleForm.svelte-e914bfbf.js","/_app/pages/code/CodeForm.svelte-d7b3ec92.js","/_app/assets/pages/code/CodeForm.svelte-d1691e53.css","/_app/pages/code/NoteBody.svelte-ca554794.js","/_app/pages/code/[index].svelte-904f6fbf.js","/_app/assets/pages/code/[index].svelte-b2c0f41b.css","/_app/pages/quiz/index.svelte-021c7d4b.js","/_app/assets/pages/quiz/index.svelte-a0991019.css","/_app/pages/quiz/[slug].svelte-30d65c31.js","/_app/pages/app/index.svelte-6e2940d8.js","/_app/assets/pages/app/index.svelte-4c60bb27.css","/_app/pages/app/new.svelte-118b1599.js","/_app/assets/pages/app/new.svelte-a22408ed.css","/_app/pages/app/[slug].svelte-4daa04c3.js","/_app/chunks/vendor-d62291b3.js","/_app/chunks/singletons-9c431dc7.js","/_app/chunks/preload-helper-9f12a5fd.js","/_app/chunks/stores-8b1f3b79.js","/_app/chunks/navigation-0819b7b8.js","/_app/chunks/store-0291cfd6.js","/_app/chunks/index-130bfc23.js","/_app/chunks/index-bc38e049.js","/_app/chunks/Card-36eb63f7.js","/_app/chunks/index-b324eacd.js","/_app/chunks/javascript-31fc1c6d.js","/_app/chunks/php-fff554a0.js","/_app/chunks/atom-one-dark-3184ac91.js","/_app/chunks/index-49a4a8d6.js","/_app/assets/index-a9bef3e9.css","/_app/chunks/_commonjsHelpers-db6d3250.js","/_app/chunks/javascript-da8b0e04.js"].concat(["/favicon.ico","/ic_launcher.png","/manifest.pdf","/robots.txt","/svelte-welcome.png","/svelte-welcome.webp"]),p=new Set(a);e.addEventListener("install",(p=>{p.waitUntil(caches.open(s).then((e=>e.addAll(a))).then((()=>{e.skipWaiting()})))})),e.addEventListener("activate",(a=>{a.waitUntil(caches.keys().then((async a=>{for(const e of a)e!==s&&await caches.delete(e);e.clients.claim()})))})),e.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url),a=s.protocol.startsWith("http"),t=s.hostname===self.location.hostname&&s.port!==self.location.port,c=s.host===self.location.host&&p.has(s.pathname),n="only-if-cached"===e.request.cache&&!c;!a||t||n||e.respondWith((async()=>c&&await caches.match(e.request)||async function(e){const s=await caches.open("offline1625588005773");try{const a=await fetch(e);return s.put(e,a.clone()),a}catch(a){const p=await s.match(e);if(p)return p;throw a}}(e.request))())}));
