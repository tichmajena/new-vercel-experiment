import{S as t,i as s,s as e,l,f as o,H as n,d as r,au as i,e as a,t as c,c as h,a as d,g as f,F as u,G as m,k as p,j as v,n as g,m as w,b as x,o as $,x as k,u as E,v as b,w as y,D as j,W as B,J as C,A as D,r as T,K as N}from"../../chunks/vendor-3cb4ad3c.js";import{c as V,d as I}from"../../chunks/store-67a0ef90.js";import O from"./NoteBody.svelte-9e701054.js";import S from"./TitleForm.svelte-5ba513db.js";import U from"./TitleContent.svelte-1b97257e.js";import _ from"./OurButtons.svelte-a83c4448.js";import{g as z}from"../../chunks/navigation-e6c17f3a.js";import{s as H,d as J,p as L}from"../../chunks/offline-fc210c00.js";import"./CodeContent.svelte-504a563e.js";import"../../chunks/preload-helper-08cc8e69.js";import"./CodeForm.svelte-dc8476da.js";import"./DescriptionForm.svelte-cd89b207.js";import"./DescriptionContent.svelte-015f91e4.js";import"../../chunks/index-f1a48b6c.js";/* empty css                                                           */import"../../chunks/singletons-ff603286.js";function M(t){let s,e,l,i;return{c(){s=a("button"),e=c("Download post")},l(t){s=h(t,"BUTTON",{});var l=d(s);e=f(l,"Download post"),l.forEach(r)},m(n,r){o(n,s,r),u(s,e),l||(i=m(s,"click",t[1]),l=!0)},p:n,d(t){t&&r(s),l=!1,i()}}}function F(t){let s,e,l,i;return{c(){s=a("button"),e=c("Remove download")},l(t){s=h(t,"BUTTON",{});var l=d(s);e=f(l,"Remove download"),l.forEach(r)},m(n,r){o(n,s,r),u(s,e),l||(i=m(s,"click",t[2]),l=!0)},p:n,d(t){t&&r(s),l=!1,i()}}}function A(t){let s;function e(t,s){return t[0]?F:M}let i=e(t),a=i(t);return{c(){a.c(),s=l()},l(t){a.l(t),s=l()},m(t,e){a.m(t,e),o(t,s,e)},p(t,[l]){i===(i=e(t))&&a?a.p(t,l):(a.d(1),a=i(t),a&&(a.c(),a.m(s.parentNode,s)))},i:n,o:n,d(t){a.d(t),t&&r(s)}}}function G(t,s,e){const l=i();let{offline:o}=s,{slug:n}=s;return t.$$set=t=>{"offline"in t&&e(0,o=t.offline),"slug"in t&&e(3,n=t.slug)},[o,async function(t=n){H(t).then((()=>l("saved")))},async function(){J(note_slug).then((()=>l("deleted")))},n]}class P extends t{constructor(t){super(),s(this,t,G,A,e,{offline:0,slug:3})}}function R(t,s,e){const l=t.slice();return l[15]=s[e],l[17]=e,l}function K(t){let s,e,l,n,i,c,f,m,j,C,D,N,V,I,O,S,U,z,H,J,L,M,F=t[6][t[1]].edit&&Q(t),A=!t[6][t[1]].edit&&W(t),G=t[6][t[1]].steps,K=[];for(let o=0;o<G.length;o+=1)K[o]=q(R(t,G,o));const Z=t=>E(K[t],1,1,(()=>{K[t]=null}));let tt=!it;N=new P({props:{offline:t[0].offline,slug:t[2]}}),N.$on("saved",t[7]),N.$on("deleted",t[8]),O=new _({props:{i:t[1]}});let lt=!t[5].save&&!t[5].update&&X(t),ot=t[5].save&&"draft"===t[6][t[1]].mode&&Y(t),nt=t[5].save&&"publish"===t[6][t[1]].mode&&st(),rt=t[5].update&&"publish"===t[6][t[1]].mode&&et(t);return{c(){s=a("div"),e=a("div"),l=a("div"),n=a("div"),F&&F.c(),i=p(),c=a("div"),A&&A.c(),f=p(),m=a("div"),j=a("ol");for(let t=0;t<K.length;t+=1)K[t].c();C=p(),tt&&tt.c(),D=p(),v(N.$$.fragment),V=p(),I=a("div"),v(O.$$.fragment),S=p(),U=a("div"),z=a("div"),lt&&lt.c(),H=p(),ot&&ot.c(),J=p(),nt&&nt.c(),L=p(),rt&&rt.c(),this.h()},l(t){s=h(t,"DIV",{class:!0});var o=d(s);e=h(o,"DIV",{class:!0});var a=d(e);l=h(a,"DIV",{class:!0});var u=d(l);n=h(u,"DIV",{class:!0});var p=d(n);F&&F.l(p),p.forEach(r),i=g(u),c=h(u,"DIV",{class:!0});var v=d(c);A&&A.l(v),v.forEach(r),u.forEach(r),a.forEach(r),f=g(o),m=h(o,"DIV",{class:!0});var x=d(m);j=h(x,"OL",{class:!0});var $=d(j);for(let s=0;s<K.length;s+=1)K[s].l($);$.forEach(r),C=g(x),tt&&tt.l(x),D=g(x),w(N.$$.fragment,x),x.forEach(r),V=g(o),I=h(o,"DIV",{class:!0});var k=d(I);w(O.$$.fragment,k),k.forEach(r),S=g(o),U=h(o,"DIV",{class:!0});var E=d(U);z=h(E,"DIV",{id:!0});var b=d(z);lt&&lt.l(b),H=g(b),ot&&ot.l(b),J=g(b),nt&&nt.l(b),L=g(b),rt&&rt.l(b),b.forEach(r),E.forEach(r),o.forEach(r),this.h()},h(){x(n,"class","title__form-div"),x(c,"class","title__content-div"),x(l,"class","note-title__title"),x(e,"class","note-title"),x(j,"class","list-decimal"),x(m,"class","note-body"),x(I,"class","note-footer"),x(z,"id","add-btn"),x(U,"class","bottom-bar md:pl-64"),x(s,"class","app-wrapper svelte-18ehxgn")},m(t,r){o(t,s,r),u(s,e),u(e,l),u(l,n),F&&F.m(n,null),u(l,i),u(l,c),A&&A.m(c,null),u(s,f),u(s,m),u(m,j);for(let s=0;s<K.length;s+=1)K[s].m(j,null);u(m,C),tt&&tt.m(m,null),u(m,D),$(N,m,null),u(s,V),u(s,I),$(O,I,null),u(s,S),u(s,U),u(U,z),lt&&lt.m(z,null),u(z,H),ot&&ot.m(z,null),u(z,J),nt&&nt.m(z,null),u(z,L),rt&&rt.m(z,null),M=!0},p(t,s){if(t[6][t[1]].edit?F?(F.p(t,s),66&s&&k(F,1)):(F=Q(t),F.c(),k(F,1),F.m(n,null)):F&&(T(),E(F,1,1,(()=>{F=null})),y()),t[6][t[1]].edit?A&&(T(),E(A,1,1,(()=>{A=null})),y()):A?(A.p(t,s),66&s&&k(A,1)):(A=W(t),A.c(),k(A,1),A.m(c,null)),66&s){let e;for(G=t[6][t[1]].steps,e=0;e<G.length;e+=1){const l=R(t,G,e);K[e]?(K[e].p(l,s),k(K[e],1)):(K[e]=q(l),K[e].c(),k(K[e],1),K[e].m(j,null))}for(T(),e=G.length;e<K.length;e+=1)Z(e);y()}const e={};1&s&&(e.offline=t[0].offline),4&s&&(e.slug=t[2]),N.$set(e);const l={};2&s&&(l.i=t[1]),O.$set(l),t[5].save||t[5].update?lt&&(lt.d(1),lt=null):lt?lt.p(t,s):(lt=X(t),lt.c(),lt.m(z,H)),t[5].save&&"draft"===t[6][t[1]].mode?ot?ot.p(t,s):(ot=Y(t),ot.c(),ot.m(z,J)):ot&&(ot.d(1),ot=null),t[5].save&&"publish"===t[6][t[1]].mode?nt||(nt=st(),nt.c(),nt.m(z,L)):nt&&(nt.d(1),nt=null),t[5].update&&"publish"===t[6][t[1]].mode?rt?rt.p(t,s):(rt=et(t),rt.c(),rt.m(z,null)):rt&&(rt.d(1),rt=null)},i(t){if(!M){k(F),k(A);for(let t=0;t<G.length;t+=1)k(K[t]);k(tt),k(N.$$.fragment,t),k(O.$$.fragment,t),M=!0}},o(t){E(F),E(A),K=K.filter(Boolean);for(let s=0;s<K.length;s+=1)E(K[s]);E(tt),E(N.$$.fragment,t),E(O.$$.fragment,t),M=!1},d(t){t&&r(s),F&&F.d(),A&&A.d(),B(K,t),tt&&tt.d(),b(N),b(O),lt&&lt.d(),ot&&ot.d(),nt&&nt.d(),rt&&rt.d()}}}function Q(t){let s,e;return s=new S({props:{i:t[1]}}),{c(){v(s.$$.fragment)},l(t){w(s.$$.fragment,t)},m(t,l){$(s,t,l),e=!0},p(t,e){const l={};2&e&&(l.i=t[1]),s.$set(l)},i(t){e||(k(s.$$.fragment,t),e=!0)},o(t){E(s.$$.fragment,t),e=!1},d(t){b(s,t)}}}function W(t){let s,e;return s=new U({props:{i:t[1]}}),{c(){v(s.$$.fragment)},l(t){w(s.$$.fragment,t)},m(t,l){$(s,t,l),e=!0},p(t,e){const l={};2&e&&(l.i=t[1]),s.$set(l)},i(t){e||(k(s.$$.fragment,t),e=!0)},o(t){E(s.$$.fragment,t),e=!1},d(t){b(s,t)}}}function q(t){let s,e,l,n;return e=new O({props:{i:t[1],ii:t[17]}}),{c(){s=a("li"),v(e.$$.fragment),l=p(),this.h()},l(t){s=h(t,"LI",{class:!0});var o=d(s);w(e.$$.fragment,o),l=g(o),o.forEach(r),this.h()},h(){x(s,"class","mb-5")},m(t,r){o(t,s,r),$(e,s,null),u(s,l),n=!0},p(t,s){const l={};2&s&&(l.i=t[1]),e.$set(l)},i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){t&&r(s),b(e)}}}function X(t){let s,e,l,i,c;return{c(){s=a("button"),e=j("svg"),l=j("path"),this.h()},l(t){s=h(t,"BUTTON",{class:!0});var o=d(s);e=h(o,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var n=d(e);l=h(n,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),d(l).forEach(r),n.forEach(r),o.forEach(r),this.h()},h(){x(l,"stroke-linecap","round"),x(l,"stroke-linejoin","round"),x(l,"stroke-width","2"),x(l,"d","M12 6v6m0 0v6m0-6h6m-6 0H6"),x(e,"xmlns","http://www.w3.org/2000/svg"),x(e,"class","h-8 w-8"),x(e,"fill","none"),x(e,"viewBox","0 0 24 24"),x(e,"stroke","currentColor"),x(s,"class","text-white rounded-full h-14 w-14 bg-pink-700 grid place-items-center")},m(n,r){o(n,s,r),u(s,e),u(e,l),i||(c=m(s,"click",t[9]),i=!0)},p:n,d(t){t&&r(s),i=!1,c()}}}function Y(t){let s,e,l;function n(t,s){return t[3]?tt:Z}let i=n(t),c=i(t);return{c(){s=a("button"),c.c(),this.h()},l(t){s=h(t,"BUTTON",{class:!0});var e=d(s);c.l(e),e.forEach(r),this.h()},h(){x(s,"class","text-white rounded-full h-14 w-14 bg-green-700 flex items-center justify-center")},m(n,r){o(n,s,r),c.m(s,null),e||(l=m(s,"click",t[10]),e=!0)},p(t,e){i!==(i=n(t))&&(c.d(1),c=i(t),c&&(c.c(),c.m(s,null)))},d(t){t&&r(s),c.d(),e=!1,l()}}}function Z(t){let s,e;return{c(){s=j("svg"),e=j("path"),this.h()},l(t){s=h(t,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var l=d(s);e=h(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),d(e).forEach(r),l.forEach(r),this.h()},h(){x(e,"stroke-linecap","round"),x(e,"stroke-linejoin","round"),x(e,"stroke-width","2"),x(e,"d","M5 13l4 4L19 7"),x(s,"xmlns","http://www.w3.org/2000/svg"),x(s,"class","h-8 w-8"),x(s,"fill","none"),x(s,"viewBox","0 0 24 24"),x(s,"stroke","currentColor")},m(t,l){o(t,s,l),u(s,e)},d(t){t&&r(s)}}}function tt(t){let s,e,l;return{c(){s=j("svg"),e=j("circle"),l=j("path"),this.h()},l(t){s=h(t,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0},1);var o=d(s);e=h(o,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0},1),d(e).forEach(r),l=h(o,"path",{class:!0,fill:!0,d:!0},1),d(l).forEach(r),o.forEach(r),this.h()},h(){x(e,"class","opacity-25"),x(e,"cx","12"),x(e,"cy","12"),x(e,"r","10"),x(e,"stroke","currentColor"),x(e,"stroke-width","4"),x(l,"class","opacity-75"),x(l,"fill","currentColor"),x(l,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),x(s,"class","animate-spin mx-auro h-8 w-8 text-white text-center"),x(s,"xmlns","http://www.w3.org/2000/svg"),x(s,"fill","none"),x(s,"viewBox","0 0 24 24")},m(t,n){o(t,s,n),u(s,e),u(s,l)},d(t){t&&r(s)}}}function st(t){let s,e,l,n;return{c(){s=a("button"),e=j("svg"),l=j("circle"),n=j("path"),this.h()},l(t){s=h(t,"BUTTON",{class:!0});var o=d(s);e=h(o,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0},1);var i=d(e);l=h(i,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0},1),d(l).forEach(r),n=h(i,"path",{class:!0,fill:!0,d:!0},1),d(n).forEach(r),i.forEach(r),o.forEach(r),this.h()},h(){x(l,"class","opacity-25"),x(l,"cx","12"),x(l,"cy","12"),x(l,"r","10"),x(l,"stroke","currentColor"),x(l,"stroke-width","4"),x(n,"class","opacity-75"),x(n,"fill","currentColor"),x(n,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),x(e,"class","animate-spin mx-auro h-8 w-8 text-white text-center"),x(e,"xmlns","http://www.w3.org/2000/svg"),x(e,"fill","none"),x(e,"viewBox","0 0 24 24"),x(s,"class","text-white rounded-full h-14 w-14 bg-green-700 flex items-center justify-center")},m(t,r){o(t,s,r),u(s,e),u(e,l),u(e,n)},d(t){t&&r(s)}}}function et(t){let s,e,l;function n(t,s){return t[4]?ot:lt}let i=n(t),c=i(t);return{c(){s=a("button"),c.c(),this.h()},l(t){s=h(t,"BUTTON",{class:!0});var e=d(s);c.l(e),e.forEach(r),this.h()},h(){x(s,"class","text-white rounded-full h-14 w-14 bg-blue-700 grid place-items-center")},m(n,r){o(n,s,r),c.m(s,null),e||(l=m(s,"click",t[11]),e=!0)},p(t,e){i!==(i=n(t))&&(c.d(1),c=i(t),c&&(c.c(),c.m(s,null)))},d(t){t&&r(s),c.d(),e=!1,l()}}}function lt(t){let s,e;return{c(){s=j("svg"),e=j("path"),this.h()},l(t){s=h(t,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var l=d(s);e=h(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),d(e).forEach(r),l.forEach(r),this.h()},h(){x(e,"stroke-linecap","round"),x(e,"stroke-linejoin","round"),x(e,"stroke-width","2"),x(e,"d","M5 13l4 4L19 7"),x(s,"xmlns","http://www.w3.org/2000/svg"),x(s,"class","h-8 w-8"),x(s,"fill","none"),x(s,"viewBox","0 0 24 24"),x(s,"stroke","currentColor")},m(t,l){o(t,s,l),u(s,e)},d(t){t&&r(s)}}}function ot(t){let s,e,l;return{c(){s=j("svg"),e=j("circle"),l=j("path"),this.h()},l(t){s=h(t,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0},1);var o=d(s);e=h(o,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0},1),d(e).forEach(r),l=h(o,"path",{class:!0,fill:!0,d:!0},1),d(l).forEach(r),o.forEach(r),this.h()},h(){x(e,"class","opacity-25"),x(e,"cx","12"),x(e,"cy","12"),x(e,"r","10"),x(e,"stroke","currentColor"),x(e,"stroke-width","4"),x(l,"class","opacity-75"),x(l,"fill","currentColor"),x(l,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),x(s,"class","animate-spin mx-auro h-8 w-8 text-white text-center"),x(s,"xmlns","http://www.w3.org/2000/svg"),x(s,"fill","none"),x(s,"viewBox","0 0 24 24")},m(t,n){o(t,s,n),u(s,e),u(s,l)},d(t){t&&r(s)}}}function nt(t){let s,e,l,n,i,m,v,w=t[6][t[1]]&&K(t);return{c(){s=a("div"),e=a("h3"),l=c("Code Notes"),n=p(),i=a("div"),m=a("div"),w&&w.c(),this.h()},l(t){s=h(t,"DIV",{class:!0});var o=d(s);e=h(o,"H3",{class:!0});var a=d(e);l=f(a,"Code Notes"),a.forEach(r),o.forEach(r),n=g(t),i=h(t,"DIV",{class:!0});var c=d(i);m=h(c,"DIV",{class:!0});var u=d(m);w&&w.l(u),u.forEach(r),c.forEach(r),this.h()},h(){x(e,"class","ml-10"),x(s,"class","fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"),x(m,"class","container mx-auto max-w-screen-md "),x(i,"class","section md:mt-8 mt-12")},m(t,r){o(t,s,r),u(s,e),u(e,l),o(t,n,r),o(t,i,r),u(i,m),w&&w.m(m,null),v=!0},p(t,[s]){t[6][t[1]]?w?(w.p(t,s),66&s&&k(w,1)):(w=K(t),w.c(),k(w,1),w.m(m,null)):w&&(T(),E(w,1,1,(()=>{w=null})),y())},i(t){v||(k(w),v=!0)},o(t){E(w),v=!1},d(t){t&&r(s),t&&r(n),t&&r(i),w&&w.d()}}}async function rt({page:t,fetch:s,session:e}){if(!e)return{status:302,redirect:"/auth"};let l,o=t.params.index,n=o.split("-"),r=+n[0];if(n[1],n.length>1){const t=await s(`/code/${o}.json`),e=await t.json();l=JSON.parse(e.string),t.status}return{props:{i:r,session:e,post:l,slug:o}}}let it=!0;function at(t,s,e){let l,o;C(t,I,(t=>e(5,l=t))),C(t,V,(t=>e(6,o=t)));let{i:n=0}=s,{post:r}=s,{slug:i}=s,a=!1,c=!1,{session:h}=s;function d(){N(I,l.update=!1,l),o.forEach((t=>{t.edit=!1,t.steps.length>0&&t.steps.forEach((t=>{t.editDesc=!1,t.editCode=!1}))}))}return D((()=>{console.log("SLUG: ",i),"caches"in window&&L(r,i).then((t=>e(0,r=t)))})),void 0===o[n]&&void 0!==r?N(V,o[n]=r,o):o[n]?console.log("new"):(console.log("ELSING"),browser&&z("/code",{invalidate:!0})),l.save||d(),t.$$set=t=>{"i"in t&&e(1,n=t.i),"post"in t&&e(0,r=t.post),"slug"in t&&e(2,i=t.slug),"session"in t&&e(12,h=t.session)},[r,n,i,a,c,l,o,function(){e(0,r.offline=!0,r)},function(){e(0,r.offline=!1,r)},function(){N(V,o=[...o,{title:"",steps:[],edit:!0,ready:!0,mode:"draft"}],o),N(I,l.showFabs=!0,l),N(I,l.save=!0,l),N(I,l.edit=!1,l);let t=o.length-1;z("/code/"+t)},async function(){e(3,a=!0),N(I,l.update=!1,l),N(V,o[n].mode="publish",o);let t=o[n],s={title:o[n].title,string:JSON.stringify(t),status:"publish",author:h.id};const r=await fetch(`/code/${i}}.json`,{method:"POST",body:JSON.stringify(s)}),c=await r.json();setTimeout((()=>{d(),N(V,o.ready=!0,o),N(I,l.save=!1,l),N(I,l.update=!1,l),z(`/code/${n}-${c.body.id}`,{replaceState:!0})}),2001)},async function(){e(4,c=!0),N(V,o[n].mode="publish",o);let t=o[n],s={title:o[n].title,string:JSON.stringify(t),status:"publish",author:h.id};console.log(o[n].id);const r=await fetch(`/code/${o[n].id}.json`,{method:"PUT",body:JSON.stringify(s)});await r.json(),e(4,c=!1),N(I,l.update=!1,l)},h]}class ct extends t{constructor(t){super(),s(this,t,at,nt,e,{i:1,post:0,slug:2,session:12})}}export{ct as default,rt as load};