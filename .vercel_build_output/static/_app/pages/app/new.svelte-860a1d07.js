import{S as t,i as e,s,e as l,t as n,k as o,j as r,c as a,a as c,g as i,d as f,n as u,m as h,f as p,F as d,o as g,x as m,u as v,v as $,J as w,b as k,V as x,X as b,G as j,D as E,H as y,W as B,K as N}from"../../chunks/vendor-3cb4ad3c.js";import{b as S}from"../../chunks/store-67a0ef90.js";import{B as T}from"../../chunks/index-f1a48b6c.js";import{C as A}from"../../chunks/Card-aee6b4ff.js";import{g as I}from"../../chunks/navigation-e6c17f3a.js";import"../../chunks/singletons-ff603286.js";function D(t,e,s){const l=t.slice();return l[15]=e[s],l[16]=e,l[17]=s,l}function O(t){let e,s,n,o,r;function i(){return t[10](t[17])}return{c(){e=l("button"),s=E("svg"),n=E("path"),this.h()},l(t){e=a(t,"BUTTON",{class:!0});var l=c(e);s=a(l,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var o=c(s);n=a(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),c(n).forEach(f),o.forEach(f),l.forEach(f),this.h()},h(){k(n,"stroke-linecap","round"),k(n,"stroke-linejoin","round"),k(n,"stroke-width","2"),k(n,"d","M20 12H4"),k(s,"xmlns","http://www.w3.org/2000/svg"),k(s,"class","h-4 w-4"),k(s,"fill","none"),k(s,"viewBox","0 0 24 24"),k(s,"stroke","currentColor"),k(e,"class","text-white bg-pink-700 grid place-items-center rounded-full h-8 w-8  items-center justify-center")},m(t,l){p(t,e,l),d(e,s),d(s,n),o||(r=j(e,"click",i),o=!0)},p(e,s){t=e},d(t){t&&f(e),o=!1,r()}}}function V(t){let e,s,n,o,r;return{c(){e=l("button"),s=E("svg"),n=E("path"),this.h()},l(t){e=a(t,"BUTTON",{class:!0});var l=c(e);s=a(l,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var o=c(s);n=a(o,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),c(n).forEach(f),o.forEach(f),l.forEach(f),this.h()},h(){k(n,"stroke-linecap","round-full"),k(n,"stroke-linejoin","round-full"),k(n,"stroke-width","2"),k(n,"d","M12 6v6m0 0v6m0-6h6m-6 0H6"),k(s,"xmlns","http://www.w3.org/2000/svg"),k(s,"class","h-5 w-5"),k(s,"fill","none"),k(s,"viewBox","0 0 24 24"),k(s,"stroke","currentColor"),k(e,"class","text-white bg-green-700 grid place-items-center rounded-full h-8 w-8  items-center justify-center")},m(l,a){p(l,e,a),d(e,s),d(s,n),o||(r=j(e,"click",t[3]),o=!0)},p:y,d(t){t&&f(e),o=!1,r()}}}function C(t){let e,s,r,h,g,m,v,$,w,E,y,B,N,S,T=t[17]+1+"";function A(){t[9].call(r,t[16],t[17])}let I=t[17]!==t[1].length-1&&O(t),D=t[17]===t[1].length-1&&V(t);return{c(){e=l("div"),s=l("div"),r=l("input"),g=o(),m=l("label"),$=n("\r\n        Step\r\n        "),w=n(T),E=o(),y=l("div"),I&&I.c(),B=o(),D&&D.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var l=c(e);s=a(l,"DIV",{style:!0,class:!0});var n=c(s);r=a(n,"INPUT",{class:!0,id:!0,type:!0}),g=u(n),m=a(n,"LABEL",{class:!0,for:!0}),c(m).forEach(f),$=i(n,"\r\n        Step\r\n        "),w=i(n,T),n.forEach(f),E=u(l),y=a(l,"DIV",{class:!0});var o=c(y);I&&I.l(o),B=u(o),D&&D.l(o),o.forEach(f),l.forEach(f),this.h()},h(){k(r,"class","w-full rounded"),k(r,"id",h="step-"+(t[17]+1)),k(r,"type","text"),k(m,"class","text-xs"),k(m,"for",v="step-"+(t[17]+1)),x(s,"width","100%"),k(s,"class","pr-2 flex flex-col-reverse"),k(y,"class","add-btn mb-1 svelte-1n3g4k6"),k(e,"class","flex flex-row mb-5")},m(l,n){p(l,e,n),d(e,s),d(s,r),b(r,t[15].note.title),d(s,g),d(s,m),d(s,$),d(s,w),d(e,E),d(e,y),I&&I.m(y,null),d(y,B),D&&D.m(y,null),N||(S=j(r,"input",A),N=!0)},p(e,s){t=e,2&s&&r.value!==t[15].note.title&&b(r,t[15].note.title),t[17]!==t[1].length-1?I?I.p(t,s):(I=O(t),I.c(),I.m(y,B)):I&&(I.d(1),I=null),t[17]===t[1].length-1?D?D.p(t,s):(D=V(t),D.c(),D.m(y,null)):D&&(D.d(1),D=null)},d(t){t&&f(e),I&&I.d(),D&&D.d(),N=!1,S()}}}function H(t){let e;return{c(){e=n("Save")},l(t){e=i(t,"Save")},m(t,s){p(t,e,s)},d(t){t&&f(e)}}}function L(t){let e,s,w,x,E,y,N,S,A,I,O,V=t[1],L=[];for(let l=0;l<V.length;l+=1)L[l]=C(D(t,V,l));return S=new T({props:{color:"red",loading:J,$$slots:{default:[H]},$$scope:{ctx:t}}}),S.$on("click",t[2]),{c(){e=l("div"),s=l("input"),w=o(),x=l("label"),E=n("App Name"),y=o();for(let t=0;t<L.length;t+=1)L[t].c();N=o(),r(S.$$.fragment),this.h()},l(t){e=a(t,"DIV",{class:!0});var l=c(e);s=a(l,"INPUT",{class:!0,type:!0}),w=u(l),x=a(l,"LABEL",{for:!0});var n=c(x);E=i(n,"App Name"),n.forEach(f),l.forEach(f),y=u(t);for(let e=0;e<L.length;e+=1)L[e].l(t);N=u(t),h(S.$$.fragment,t),this.h()},h(){k(s,"class","w-full rounded"),k(s,"type","text"),k(x,"for","Title"),k(e,"class","flex flex-col-reverse mb-5")},m(l,n){p(l,e,n),d(e,s),b(s,t[0]),d(e,w),d(e,x),d(x,E),p(l,y,n);for(let t=0;t<L.length;t+=1)L[t].m(l,n);p(l,N,n),g(S,l,n),A=!0,I||(O=j(s,"input",t[8]),I=!0)},p(t,e){if(1&e&&s.value!==t[0]&&b(s,t[0]),26&e){let s;for(V=t[1],s=0;s<V.length;s+=1){const l=D(t,V,s);L[s]?L[s].p(l,e):(L[s]=C(l),L[s].c(),L[s].m(N.parentNode,N))}for(;s<L.length;s+=1)L[s].d(1);L.length=V.length}const l={};262144&e&&(l.$$scope={dirty:e,ctx:t}),S.$set(l)},i(t){A||(m(S.$$.fragment,t),A=!0)},o(t){v(S.$$.fragment,t),A=!1},d(t){t&&f(e),t&&f(y),B(L,t),t&&f(N),$(S,t),I=!1,O()}}}function U(t){let e,s,w,k,x;return k=new A({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){e=l("h1"),s=n("App notes"),w=o(),r(k.$$.fragment)},l(t){e=a(t,"H1",{});var l=c(e);s=i(l,"App notes"),l.forEach(f),w=u(t),h(k.$$.fragment,t)},m(t,l){p(t,e,l),d(e,s),p(t,w,l),g(k,t,l),x=!0},p(t,[e]){const s={};262147&e&&(s.$$scope={dirty:e,ctx:t}),k.$set(s)},i(t){x||(m(k.$$.fragment,t),x=!0)},o(t){v(k.$$.fragment,t),x=!1},d(t){t&&f(e),t&&f(w),$(k,t)}}}let J=!1;function P(t,e,s){let l,n;w(t,S,(t=>s(13,n=t)));let{slug:o}=e,{user:r}=e;console.log(r);let{leaf:a}=e,c="",i=[{note:{title:"",steps:[]},id:""}];function f(t){console.log(t),s(1,i=i.filter((e=>e!==i[t])))}return t.$$set=t=>{"slug"in t&&s(6,o=t.slug),"user"in t&&s(7,r=t.user),"leaf"in t&&s(5,a=t.leaf)},t.$$.update=()=>{3&t.$$.dirty&&(l={note:{title:c,steps:i},id:""})},[c,i,async function(){console.log(r),N(S,n=[...n,l],n);let t={title:l.note.title,string:JSON.stringify(l),status:"publish",author:r.id};const e=await fetch("/app/new.json",{method:"POST",body:JSON.stringify(t)});console.log(e);const s=await e.json();console.log(s),e.ok&&I("/app")},function(){s(1,i=[...i,{note:{title:"",steps:[]},id:""}]),console.log(i)},f,a,o,r,function(){c=this.value,s(0,c)},function(t,e){t[e].note.title=this.value,s(1,i)},t=>{f(t)}]}class M extends t{constructor(t){super(),e(this,t,P,U,s,{slug:6,user:7,leaf:5})}}export{M as default};
