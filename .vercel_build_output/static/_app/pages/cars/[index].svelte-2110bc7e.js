import{S as G,i as J,s as K,e as h,t as q,k as I,c as f,a as g,g as A,d as y,n as E,b as i,f as O,G as l,Y as k,H as P,h as Y,I as C,J as z,K as F}from"../../chunks/vendor-911147da.js";import{a as T}from"../../chunks/store-cc46ed4c.js";function L(a){let u,e,s,n=a[1][a[0]].name+"",_,w,r,m,d,U,p,N,v,b,S,D,j;return{c(){u=h("div"),e=h("div"),s=h("h1"),_=q(n),w=I(),r=h("input"),m=I(),d=h("input"),U=I(),p=h("input"),N=I(),v=h("a"),b=h("button"),S=q("Save"),this.h()},l(t){u=f(t,"DIV",{class:!0});var c=g(u);e=f(c,"DIV",{class:!0});var o=g(e);s=f(o,"H1",{class:!0});var B=g(s);_=A(B,n),B.forEach(y),w=E(o),r=f(o,"INPUT",{class:!0,type:!0}),m=E(o),d=f(o,"INPUT",{class:!0,type:!0}),U=E(o),p=f(o,"INPUT",{class:!0,type:!0}),N=E(o),v=f(o,"A",{href:!0});var H=g(v);b=f(H,"BUTTON",{class:!0});var V=g(b);S=A(V,"Save"),V.forEach(y),H.forEach(y),o.forEach(y),c.forEach(y),this.h()},h(){i(s,"class","mb-5"),i(r,"class","block w-full rounded-md mb-3"),i(r,"type","text"),i(d,"class","block w-full rounded-md mb-3"),i(d,"type","text"),i(p,"class","block w-full rounded-md mb-3"),i(p,"type","text"),i(b,"class","py-2 px-4 bg-pink-700 rounded-md text-white text-sm "),i(v,"href","/cars/"),i(e,"class","max-w-md mx-auto p-5 bg-white rounded-lg"),i(u,"class","w-full h-full")},m(t,c){O(t,u,c),l(u,e),l(e,s),l(s,_),l(e,w),l(e,r),k(r,a[1][a[0]].name),l(e,m),l(e,d),k(d,a[1][a[0]].color),l(e,U),l(e,p),k(p,a[1][a[0]].year),l(e,N),l(e,v),l(v,b),l(b,S),D||(j=[P(r,"input",a[2]),P(d,"input",a[3]),P(p,"input",a[4])],D=!0)},p(t,[c]){c&3&&n!==(n=t[1][t[0]].name+"")&&Y(_,n),c&3&&r.value!==t[1][t[0]].name&&k(r,t[1][t[0]].name),c&3&&d.value!==t[1][t[0]].color&&k(d,t[1][t[0]].color),c&3&&p.value!==t[1][t[0]].year&&k(p,t[1][t[0]].year)},i:C,o:C,d(t){t&&y(u),D=!1,z(j)}}}async function W(a){return{props:{index:a.page.params.index}}}function M(a,u,e){let s;F(a,T,m=>e(1,s=m));let{index:n}=u;function _(){s[n].name=this.value,T.set(s),e(0,n)}function w(){s[n].color=this.value,T.set(s),e(0,n)}function r(){s[n].year=this.value,T.set(s),e(0,n)}return a.$$set=m=>{"index"in m&&e(0,n=m.index)},[n,s,_,w,r]}class X extends G{constructor(u){super();J(this,u,M,L,K,{index:0})}}export{X as default,W as load};