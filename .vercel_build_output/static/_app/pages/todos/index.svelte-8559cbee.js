import{S as t,i as e,s as a,e as o,k as s,c as l,a as n,n as r,d,b as c,F as i,f as u,G as h,V as f,W as p,X as m,Y as v,Z as b,_ as g,J as x,t as E,N as j,g as w,$ as y,u as T,v as q,r as k,a0 as M,P as N,a1 as O,B as _,a2 as F,I}from"../../chunks/vendor-66f8d0bb.js";function U(t,{pending:e,error:a,result:o}){let s;async function l(l){const n=s={};l.preventDefault();const r=new FormData(t);e&&e(r,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:r});if(n!==s)return;e.ok?o(e,t):a?a(e,null,t):console.error(await e.text())}catch(d){if(!a)throw d;a(null,d,t)}}return t.addEventListener("submit",l),{destroy(){t.removeEventListener("submit",l)}}}function B(t,e,a){const o=t.slice();return o[5]=e[a],o[6]=e,o[7]=a,o}function D(t,e){let a,E,j,w,y,T,q,k,_,F,B,D,R,P,V,$,L,S,A,C,G,H,J,W,X,Y,Z,z=I;function K(...t){return e[3](e[5],e[6],e[7],...t)}function Q(){return e[4](e[5])}return{key:t,first:null,c(){a=o("div"),E=o("form"),j=o("input"),y=s(),T=o("button"),F=s(),B=o("form"),D=o("input"),P=s(),V=o("button"),L=s(),S=o("form"),A=o("button"),H=s(),this.h()},l(t){a=l(t,"DIV",{class:!0});var e=n(a);E=l(e,"FORM",{action:!0,method:!0});var o=n(E);j=l(o,"INPUT",{type:!0,name:!0,value:!0,class:!0}),y=r(o),T=l(o,"BUTTON",{class:!0,"aria-label":!0}),n(T).forEach(d),o.forEach(d),F=r(e),B=l(e,"FORM",{class:!0,action:!0,method:!0});var s=n(B);D=l(s,"INPUT",{"aria-label":!0,type:!0,name:!0,value:!0,class:!0}),P=r(s),V=l(s,"BUTTON",{class:!0,"aria-label":!0}),n(V).forEach(d),s.forEach(d),L=r(e),S=l(e,"FORM",{action:!0,method:!0});var c=n(S);A=l(c,"BUTTON",{class:!0,"aria-label":!0}),n(A).forEach(d),c.forEach(d),H=r(e),e.forEach(d),this.h()},h(){c(j,"type","hidden"),c(j,"name","done"),j.value=w=e[5].done?"":"true",c(j,"class","svelte-2qlxbn"),c(T,"class","toggle svelte-2qlxbn"),c(T,"aria-label",q="Mark todo as "+(e[5].done?"not done":"done")),c(E,"action",k="/todos/"+e[5].uid+".json?_method=patch"),c(E,"method","post"),c(D,"aria-label","Edit todo"),c(D,"type","text"),c(D,"name","text"),D.value=R=e[5].text,c(D,"class","svelte-2qlxbn"),c(V,"class","save svelte-2qlxbn"),c(V,"aria-label","Save todo"),c(B,"class","text svelte-2qlxbn"),c(B,"action",$="/todos/"+e[5].uid+".json?_method=patch"),c(B,"method","post"),c(A,"class","delete svelte-2qlxbn"),c(A,"aria-label","Delete todo"),c(S,"action",C="/todos/"+e[5].uid+".json?_method=delete"),c(S,"method","post"),c(a,"class","todo svelte-2qlxbn"),i(a,"done",e[5].done),this.first=a},m(t,o){u(t,a,o),h(a,E),h(E,j),h(E,y),h(E,T),h(a,F),h(a,B),h(B,D),h(B,P),h(B,V),h(a,L),h(a,S),h(S,A),h(a,H),X=!0,Y||(Z=[f(_=U.call(null,E,{pending:K,result:e[1]})),f(U.call(null,B,{result:e[1]})),f(G=U.call(null,S,{result:Q}))],Y=!0)},p(t,o){e=t,(!X||1&o&&w!==(w=e[5].done?"":"true"))&&(j.value=w),(!X||1&o&&q!==(q="Mark todo as "+(e[5].done?"not done":"done")))&&c(T,"aria-label",q),(!X||1&o&&k!==(k="/todos/"+e[5].uid+".json?_method=patch"))&&c(E,"action",k),_&&p(_.update)&&1&o&&_.update.call(null,{pending:K,result:e[1]}),(!X||1&o&&R!==(R=e[5].text)&&D.value!==R)&&(D.value=R),(!X||1&o&&$!==($="/todos/"+e[5].uid+".json?_method=patch"))&&c(B,"action",$),(!X||1&o&&C!==(C="/todos/"+e[5].uid+".json?_method=delete"))&&c(S,"action",C),G&&p(G.update)&&1&o&&G.update.call(null,{result:Q}),1&o&&i(a,"done",e[5].done)},r(){W=a.getBoundingClientRect()},f(){m(a),z(),v(a,W)},a(){z(),z=b(a,W,M,{duration:200})},i(t){X||(t&&N((()=>{J||(J=g(a,O,{start:.7},!0)),J.run(1)})),X=!0)},o(t){t&&(J||(J=g(a,O,{start:.7},!1)),J.run(0)),X=!1},d(t){t&&d(a),t&&J&&J.end(),Y=!1,x(Z)}}}function R(t){let e,a,i,m,v,b,g,x,M,N,O,I,R=[],P=new Map,V=t[0];const $=t=>t[5].uid;for(let o=0;o<V.length;o+=1){let e=B(t,V,o),a=$(e);P.set(a,R[o]=D(a,e))}return{c(){e=s(),a=o("div"),i=o("h1"),m=E("Todos"),v=s(),b=o("form"),g=o("input"),M=s();for(let t=0;t<R.length;t+=1)R[t].c();this.h()},l(t){j('[data-svelte="svelte-181o7gf"]',document.head).forEach(d),e=r(t),a=l(t,"DIV",{class:!0});var o=n(a);i=l(o,"H1",{});var s=n(i);m=w(s,"Todos"),s.forEach(d),v=r(o),b=l(o,"FORM",{class:!0,action:!0,method:!0});var c=n(b);g=l(c,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),c.forEach(d),M=r(o);for(let e=0;e<R.length;e+=1)R[e].l(o);o.forEach(d),this.h()},h(){document.title="Todos",c(g,"name","text"),c(g,"aria-label","Add todo"),c(g,"placeholder","+ tap to add a todo"),c(g,"class","svelte-2qlxbn"),c(b,"class","new svelte-2qlxbn"),c(b,"action","/todos.json"),c(b,"method","post"),c(a,"class","todos svelte-2qlxbn")},m(o,s){u(o,e,s),u(o,a,s),h(a,i),h(i,m),h(a,v),h(a,b),h(b,g),h(a,M);for(let t=0;t<R.length;t+=1)R[t].m(a,null);N=!0,O||(I=f(x=U.call(null,b,{result:t[2]})),O=!0)},p(t,[e]){if(x&&p(x.update)&&1&e&&x.update.call(null,{result:t[2]}),3&e){V=t[0],_();for(let t=0;t<R.length;t+=1)R[t].r();R=y(R,e,$,1,t,V,P,a,F,D,null,B);for(let t=0;t<R.length;t+=1)R[t].a();T()}},i(t){if(!N){for(let t=0;t<V.length;t+=1)q(R[t]);N=!0}},o(t){for(let e=0;e<R.length;e+=1)k(R[e]);N=!1},d(t){t&&d(e),t&&d(a);for(let e=0;e<R.length;e+=1)R[e].d();O=!1,I()}}}const P=async({fetch:t})=>{const e=await t("/todos.json");if(e.ok){return{props:{todos:await e.json()}}}const{message:a}=await e.json();return{error:new Error(a)}};function V(t,e,a){let{todos:o}=e;return t.$$set=t=>{"todos"in t&&a(0,o=t.todos)},[o,async function(t){const e=await t.json();a(0,o=o.map((t=>t.uid===e.uid?e:t)))},async(t,e)=>{const s=await t.json();a(0,o=[...o,s]),e.reset()},(t,e,s,l)=>{a(0,e[s].done=!!l.get("done"),o)},t=>{a(0,o=o.filter((e=>e.uid!==t.uid)))}]}export default class extends t{constructor(t){super(),e(this,t,V,R,a,{todos:0})}}export{P as load};
