import{S as t,i as s,s as a,e,t as n,k as r,c as o,a as c,g as l,d as h,n as f,b as i,V as p,f as u,F as m,h as d,l as g,H as v,W as E}from"../../chunks/vendor-3cb4ad3c.js";function b(t,s,a){const e=t.slice();return e[5]=s[a],e[7]=a,e}function N(t,s,a){const e=t.slice();return e[8]=s[a],e[7]=a,e}function w(t){let s,a,e=t[5].phone_numbers,r=[];for(let n=0;n<e.length;n+=1)r[n]=k(N(t,e,n));return{c(){s=n("Not a string\r\n            ");for(let t=0;t<r.length;t+=1)r[t].c();a=g()},l(t){s=l(t,"Not a string\r\n            ");for(let s=0;s<r.length;s+=1)r[s].l(t);a=g()},m(t,e){u(t,s,e);for(let s=0;s<r.length;s+=1)r[s].m(t,e);u(t,a,e)},p(t,s){if(1&s){let n;for(e=t[5].phone_numbers,n=0;n<e.length;n+=1){const o=N(t,e,n);r[n]?r[n].p(o,s):(r[n]=k(o),r[n].c(),r[n].m(a.parentNode,a))}for(;n<r.length;n+=1)r[n].d(1);r.length=e.length}},d(t){t&&h(s),E(r,t),t&&h(a)}}}function x(t){let s,a,p,g,v,E=t[5].phone_numbers+"";return{c(){s=e("span"),a=e("span"),p=n("phone"),g=r(),v=n(E),this.h()},l(t){s=o(t,"SPAN",{class:!0});var e=c(s);a=o(e,"SPAN",{class:!0});var n=c(a);p=l(n,"phone"),n.forEach(h),g=f(e),v=l(e,E),e.forEach(h),this.h()},h(){i(a,"class","ml-5"),i(s,"class","block")},m(t,e){u(t,s,e),m(s,a),m(a,p),m(s,g),m(s,v)},p(t,s){1&s&&E!==(E=t[5].phone_numbers+"")&&d(v,E)},d(t){t&&h(s)}}}function k(t){let s,a,p,g,v,E,b=t[8]+"";return{c(){s=e("span"),a=e("span"),p=n("phone"),g=r(),v=n(b),E=r(),this.h()},l(t){s=o(t,"SPAN",{class:!0});var e=c(s);a=o(e,"SPAN",{class:!0});var n=c(a);p=l(n,"phone"),n.forEach(h),g=f(e),v=l(e,b),E=f(e),e.forEach(h),this.h()},h(){i(a,"class","ml-5"),i(s,"class","block")},m(t,e){u(t,s,e),m(s,a),m(a,p),m(s,g),m(s,v),m(s,E)},p(t,s){1&s&&b!==(b=t[8]+"")&&d(v,b)},d(t){t&&h(s)}}}function A(t){let s,a,g,v,E,b,N,k,A,S,P,_,y,I,V,j,D,H,B,C,T,$=t[5].full_name+"",z=t[5].email+"";function F(t,s){return"string"==typeof t[5].phone_numbers?x:w}let L=F(t),O=L(t);return{c(){s=e("li"),a=e("div"),g=e("div"),v=n("icon"),E=r(),b=e("div"),N=e("a"),k=e("h5"),A=n($),P=r(),_=e("span"),y=n("edit"),I=r(),V=e("span"),O.c(),j=r(),D=e("span"),H=n("email"),B=n(z),C=e("br"),T=r(),this.h()},l(t){s=o(t,"LI",{});var e=c(s);a=o(e,"DIV",{style:!0,class:!0});var n=c(a);g=o(n,"DIV",{});var r=c(g);v=l(r,"icon"),r.forEach(h),E=f(n),b=o(n,"DIV",{});var i=c(b);N=o(i,"A",{"sveltekit:prefetch":!0,href:!0});var p=c(N);k=o(p,"H5",{});var u=c(k);A=l(u,$),u.forEach(h),p.forEach(h),P=f(i),_=o(i,"SPAN",{});var m=c(_);y=l(m,"edit"),m.forEach(h),I=f(i),V=o(i,"SPAN",{});var d=c(V);O.l(d),j=f(d),D=o(d,"SPAN",{class:!0});var w=c(D);H=l(w,"email"),w.forEach(h),B=l(d,z),C=o(d,"BR",{}),d.forEach(h),i.forEach(h),n.forEach(h),T=f(e),e.forEach(h),this.h()},h(){i(N,"sveltekit:prefetch",""),i(N,"href",S="/contacts/"+t[5].slug),i(D,"class","ml-5"),p(a,"border-bottom","2px solid gray"),i(a,"class","d-flex flex-row mb-8")},m(t,e){u(t,s,e),m(s,a),m(a,g),m(g,v),m(a,E),m(a,b),m(b,N),m(N,k),m(k,A),m(b,P),m(b,_),m(_,y),m(b,I),m(b,V),O.m(V,null),m(V,j),m(V,D),m(D,H),m(V,B),m(V,C),m(s,T)},p(t,s){1&s&&$!==($=t[5].full_name+"")&&d(A,$),1&s&&S!==(S="/contacts/"+t[5].slug)&&i(N,"href",S),L===(L=F(t))&&O?O.p(t,s):(O.d(1),O=L(t),O&&(O.c(),O.m(V,j))),1&s&&z!==(z=t[5].email+"")&&d(B,z)},d(t){t&&h(s),O.d()}}}function S(t){let s,a,p,d,N,w,x,k,S,P=t[0],_=[];for(let e=0;e<P.length;e+=1)_[e]=A(b(t,P,e));return{c(){s=e("div"),a=e("h3"),p=n("Contacts"),d=r(),N=e("a"),w=e("button"),x=n("New"),k=r();for(let t=0;t<_.length;t+=1)_[t].c();S=g(),this.h()},l(t){s=o(t,"DIV",{class:!0});var e=c(s);a=o(e,"H3",{class:!0});var n=c(a);p=l(n,"Contacts"),n.forEach(h),e.forEach(h),d=f(t),N=o(t,"A",{href:!0});var r=c(N);w=o(r,"BUTTON",{class:!0});var i=c(w);x=l(i,"New"),i.forEach(h),r.forEach(h),k=f(t);for(let s=0;s<_.length;s+=1)_[s].l(t);S=g(),this.h()},h(){i(a,"class","ml-10"),i(s,"class","fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"),i(w,"class","px-6 py-2 text-white rounded bg-pink-700 hover:bg-pink-500"),i(N,"href","/contacts/new")},m(t,e){u(t,s,e),m(s,a),m(a,p),u(t,d,e),u(t,N,e),m(N,w),m(w,x),u(t,k,e);for(let s=0;s<_.length;s+=1)_[s].m(t,e);u(t,S,e)},p(t,[s]){if(1&s){let a;for(P=t[0],a=0;a<P.length;a+=1){const e=b(t,P,a);_[a]?_[a].p(e,s):(_[a]=A(e),_[a].c(),_[a].m(S.parentNode,S))}for(;a<_.length;a+=1)_[a].d(1);_.length=P.length}},i:v,o:v,d(t){t&&h(s),t&&h(d),t&&h(N),t&&h(k),E(_,t),t&&h(S)}}}const P=async({fetch:t})=>{const s=await t("/contacts.json");if(console.log(s),s.ok){const t=await s.json();return{props:{contacts:await t}}}const{message:a}=await s.json();return{error:new Error(a)}};function _(t,s,a){let{contacts:e}=s;return console.log(e),t.$$set=t=>{"contacts"in t&&a(0,e=t.contacts)},[e]}class y extends t{constructor(t){super(),s(this,t,_,S,a,{contacts:0})}}export{y as default,P as load};
