import{S as s,i as a,s as e,e as t,t as n,k as r,c,a as l,g as o,d as u,n as i,b as d,f as p,G as f,O as m,H as h,h as x,I as v,J as b,K as y}from"../../chunks/vendor-66f8d0bb.js";import{c as k}from"../../chunks/store-8cdc886f.js";function w(s){let a,e,y,k,w,I,g,E,T,N,U,P,S,j,D,H,O=s[1][s[0]].name+"";return{c(){a=t("div"),e=t("div"),y=t("h1"),k=n(O),w=r(),I=t("input"),g=r(),E=t("input"),T=r(),N=t("input"),U=r(),P=t("a"),S=t("button"),j=n("Save"),this.h()},l(s){a=c(s,"DIV",{class:!0});var t=l(a);e=c(t,"DIV",{class:!0});var n=l(e);y=c(n,"H1",{class:!0});var r=l(y);k=o(r,O),r.forEach(u),w=i(n),I=c(n,"INPUT",{class:!0,type:!0}),g=i(n),E=c(n,"INPUT",{class:!0,type:!0}),T=i(n),N=c(n,"INPUT",{class:!0,type:!0}),U=i(n),P=c(n,"A",{href:!0});var d=l(P);S=c(d,"BUTTON",{class:!0});var p=l(S);j=o(p,"Save"),p.forEach(u),d.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){d(y,"class","mb-5"),d(I,"class","block w-full rounded-md mb-3"),d(I,"type","text"),d(E,"class","block w-full rounded-md mb-3"),d(E,"type","text"),d(N,"class","block w-full rounded-md mb-3"),d(N,"type","text"),d(S,"class","py-2 px-4 bg-pink-700 rounded-md text-white text-sm "),d(P,"href","/cars/"),d(e,"class","max-w-md mx-auto p-5 bg-white rounded-lg"),d(a,"class","w-full h-full")},m(t,n){p(t,a,n),f(a,e),f(e,y),f(y,k),f(e,w),f(e,I),m(I,s[1][s[0]].name),f(e,g),f(e,E),m(E,s[1][s[0]].color),f(e,T),f(e,N),m(N,s[1][s[0]].year),f(e,U),f(e,P),f(P,S),f(S,j),D||(H=[h(I,"input",s[2]),h(E,"input",s[3]),h(N,"input",s[4])],D=!0)},p(s,[a]){3&a&&O!==(O=s[1][s[0]].name+"")&&x(k,O),3&a&&I.value!==s[1][s[0]].name&&m(I,s[1][s[0]].name),3&a&&E.value!==s[1][s[0]].color&&m(E,s[1][s[0]].color),3&a&&N.value!==s[1][s[0]].year&&m(N,s[1][s[0]].year)},i:v,o:v,d(s){s&&u(a),D=!1,b(H)}}}async function I(s){return{props:{index:s.page.params.index}}}function g(s,a,e){let t;y(s,k,(s=>e(1,t=s)));let{index:n}=a;return s.$$set=s=>{"index"in s&&e(0,n=s.index)},[n,t,function(){t[n].name=this.value,k.set(t),e(0,n)},function(){t[n].color=this.value,k.set(t),e(0,n)},function(){t[n].year=this.value,k.set(t),e(0,n)}]}export default class extends s{constructor(s){super(),a(this,s,g,w,e,{index:0})}}export{I as load};
