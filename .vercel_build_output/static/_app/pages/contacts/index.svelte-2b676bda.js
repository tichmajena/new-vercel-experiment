import{S as t,i as s,s as e,e as a,t as n,k as r,c as o,a as c,g as l,d as h,n as f,b as i,T as p,f as u,G as m,h as d,l as g,I as v,U as b}from"../../chunks/vendor-66f8d0bb.js";function E(t,s,e){const a=t.slice();return a[5]=s[e],a[7]=e,a}function N(t,s,e){const a=t.slice();return a[8]=s[e],a[7]=e,a}function x(t){let s,e,a=t[5].phone_numbers,r=[];for(let n=0;n<a.length;n+=1)r[n]=k(N(t,a,n));return{c(){s=n("Not a string\n            ");for(let t=0;t<r.length;t+=1)r[t].c();e=g()},l(t){s=l(t,"Not a string\n            ");for(let s=0;s<r.length;s+=1)r[s].l(t);e=g()},m(t,a){u(t,s,a);for(let s=0;s<r.length;s+=1)r[s].m(t,a);u(t,e,a)},p(t,s){if(1&s){let n;for(a=t[5].phone_numbers,n=0;n<a.length;n+=1){const o=N(t,a,n);r[n]?r[n].p(o,s):(r[n]=k(o),r[n].c(),r[n].m(e.parentNode,e))}for(;n<r.length;n+=1)r[n].d(1);r.length=a.length}},d(t){t&&h(s),b(r,t),t&&h(e)}}}function w(t){let s,e,p,g,v,b=t[5].phone_numbers+"";return{c(){s=a("span"),e=a("span"),p=n("phone"),g=r(),v=n(b),this.h()},l(t){s=o(t,"SPAN",{class:!0});var a=c(s);e=o(a,"SPAN",{class:!0});var n=c(e);p=l(n,"phone"),n.forEach(h),g=f(a),v=l(a,b),a.forEach(h),this.h()},h(){i(e,"class","ml-5"),i(s,"class","block")},m(t,a){u(t,s,a),m(s,e),m(e,p),m(s,g),m(s,v)},p(t,s){1&s&&b!==(b=t[5].phone_numbers+"")&&d(v,b)},d(t){t&&h(s)}}}function k(t){let s,e,p,g,v,b,E=t[8]+"";return{c(){s=a("span"),e=a("span"),p=n("phone"),g=r(),v=n(E),b=r(),this.h()},l(t){s=o(t,"SPAN",{class:!0});var a=c(s);e=o(a,"SPAN",{class:!0});var n=c(e);p=l(n,"phone"),n.forEach(h),g=f(a),v=l(a,E),b=f(a),a.forEach(h),this.h()},h(){i(e,"class","ml-5"),i(s,"class","block")},m(t,a){u(t,s,a),m(s,e),m(e,p),m(s,g),m(s,v),m(s,b)},p(t,s){1&s&&E!==(E=t[8]+"")&&d(v,E)},d(t){t&&h(s)}}}function A(t){let s,e,g,v,b,E,N,k,A,S,P,_,y,I,j,D,V,T,B,C,H,U=t[5].full_name+"",$=t[5].email+"";function z(t,s){return"string"==typeof t[5].phone_numbers?w:x}let G=z(t),L=G(t);return{c(){s=a("li"),e=a("div"),g=a("div"),v=n("icon"),b=r(),E=a("div"),N=a("a"),k=a("h5"),A=n(U),P=r(),_=a("span"),y=n("edit"),I=r(),j=a("span"),L.c(),D=r(),V=a("span"),T=n("email"),B=n($),C=a("br"),H=r(),this.h()},l(t){s=o(t,"LI",{});var a=c(s);e=o(a,"DIV",{style:!0,class:!0});var n=c(e);g=o(n,"DIV",{});var r=c(g);v=l(r,"icon"),r.forEach(h),b=f(n),E=o(n,"DIV",{});var i=c(E);N=o(i,"A",{"sveltekit:prefetch":!0,href:!0});var p=c(N);k=o(p,"H5",{});var u=c(k);A=l(u,U),u.forEach(h),p.forEach(h),P=f(i),_=o(i,"SPAN",{});var m=c(_);y=l(m,"edit"),m.forEach(h),I=f(i),j=o(i,"SPAN",{});var d=c(j);L.l(d),D=f(d),V=o(d,"SPAN",{class:!0});var x=c(V);T=l(x,"email"),x.forEach(h),B=l(d,$),C=o(d,"BR",{}),d.forEach(h),i.forEach(h),n.forEach(h),H=f(a),a.forEach(h),this.h()},h(){i(N,"sveltekit:prefetch",""),i(N,"href",S="/contacts/"+t[5].slug),i(V,"class","ml-5"),p(e,"border-bottom","2px solid gray"),i(e,"class","d-flex flex-row mb-8")},m(t,a){u(t,s,a),m(s,e),m(e,g),m(g,v),m(e,b),m(e,E),m(E,N),m(N,k),m(k,A),m(E,P),m(E,_),m(_,y),m(E,I),m(E,j),L.m(j,null),m(j,D),m(j,V),m(V,T),m(j,B),m(j,C),m(s,H)},p(t,s){1&s&&U!==(U=t[5].full_name+"")&&d(A,U),1&s&&S!==(S="/contacts/"+t[5].slug)&&i(N,"href",S),G===(G=z(t))&&L?L.p(t,s):(L.d(1),L=G(t),L&&(L.c(),L.m(j,D))),1&s&&$!==($=t[5].email+"")&&d(B,$)},d(t){t&&h(s),L.d()}}}function S(t){let s,e,p,d,N,x,w,k,S,P=t[0],_=[];for(let a=0;a<P.length;a+=1)_[a]=A(E(t,P,a));return{c(){s=a("div"),e=a("h3"),p=n("Contacts"),d=r(),N=a("a"),x=a("button"),w=n("New"),k=r();for(let t=0;t<_.length;t+=1)_[t].c();S=g(),this.h()},l(t){s=o(t,"DIV",{class:!0});var a=c(s);e=o(a,"H3",{class:!0});var n=c(e);p=l(n,"Contacts"),n.forEach(h),a.forEach(h),d=f(t),N=o(t,"A",{href:!0});var r=c(N);x=o(r,"BUTTON",{class:!0});var i=c(x);w=l(i,"New"),i.forEach(h),r.forEach(h),k=f(t);for(let s=0;s<_.length;s+=1)_[s].l(t);S=g(),this.h()},h(){i(e,"class","ml-10"),i(s,"class","fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"),i(x,"class","px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"),i(N,"href","/contacts/new")},m(t,a){u(t,s,a),m(s,e),m(e,p),u(t,d,a),u(t,N,a),m(N,x),m(x,w),u(t,k,a);for(let s=0;s<_.length;s+=1)_[s].m(t,a);u(t,S,a)},p(t,[s]){if(1&s){let e;for(P=t[0],e=0;e<P.length;e+=1){const a=E(t,P,e);_[e]?_[e].p(a,s):(_[e]=A(a),_[e].c(),_[e].m(S.parentNode,S))}for(;e<_.length;e+=1)_[e].d(1);_.length=P.length}},i:v,o:v,d(t){t&&h(s),t&&h(d),t&&h(N),t&&h(k),b(_,t),t&&h(S)}}}const P=async({fetch:t})=>{const s=await t("/contacts.json");if(console.log(s),s.ok){const t=await s.json();return{props:{contacts:await t}}}const{message:e}=await s.json();return{error:new Error(e)}};function _(t,s,e){let{contacts:a}=s;return console.log(a),t.$$set=t=>{"contacts"in t&&e(0,a=t.contacts)},[a]}export default class extends t{constructor(t){super(),s(this,t,_,S,e,{contacts:0})}}export{P as load};
