import{S as t,i as e,s as a,e as o,k as s,c as n,a as l,n as r,d,b as c,E as i,f as u,F as h,X as f,Y as p,Z as m,_ as v,$ as b,P as g,a0 as x,I as E,t as j,O as w,g as y,a1 as T,u as q,v as O,r as k,a2 as M,R as _,B as F,a3 as I,H as N}from"../../chunks/vendor-d62291b3.js";function R(t,{pending:e,error:a,result:o}){let s;async function n(n){const l=s={};n.preventDefault();const r=new FormData(t);e&&e(r,t);try{const e=await fetch(t.action,{method:t.method,headers:{accept:"application/json"},body:r});if(l!==s)return;e.ok?o(e,t):a?a(e,null,t):console.error(await e.text())}catch(d){if(!a)throw d;a(null,d,t)}}return t.addEventListener("submit",n),{destroy(){t.removeEventListener("submit",n)}}}function U(t,e,a){const o=t.slice();return o[5]=e[a],o[6]=e,o[7]=a,o}function B(t,e){let a,j,w,y,T,q,O,k,F,I,U,B,D,P,$,H,L,S,V,A,C,X,Y,Z,z,G,J,K=N;function Q(...t){return e[3](e[5],e[6],e[7],...t)}function W(){return e[4](e[5])}return{key:t,first:null,c(){a=o("div"),j=o("form"),w=o("input"),T=s(),q=o("button"),I=s(),U=o("form"),B=o("input"),P=s(),$=o("button"),L=s(),S=o("form"),V=o("button"),X=s(),this.h()},l(t){a=n(t,"DIV",{class:!0});var e=l(a);j=n(e,"FORM",{action:!0,method:!0});var o=l(j);w=n(o,"INPUT",{type:!0,name:!0,class:!0}),T=r(o),q=n(o,"BUTTON",{class:!0,"aria-label":!0}),l(q).forEach(d),o.forEach(d),I=r(e),U=n(e,"FORM",{class:!0,action:!0,method:!0});var s=l(U);B=n(s,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),P=r(s),$=n(s,"BUTTON",{class:!0,"aria-label":!0}),l($).forEach(d),s.forEach(d),L=r(e),S=n(e,"FORM",{action:!0,method:!0});var c=l(S);V=n(c,"BUTTON",{class:!0,"aria-label":!0}),l(V).forEach(d),c.forEach(d),X=r(e),e.forEach(d),this.h()},h(){c(w,"type","hidden"),c(w,"name","done"),w.value=y=e[5].done?"":"true",c(w,"class","svelte-2qlxbn"),c(q,"class","toggle svelte-2qlxbn"),c(q,"aria-label",O="Mark todo as "+(e[5].done?"not done":"done")),c(j,"action",k="/todos/"+e[5].uid+".json?_method=patch"),c(j,"method","post"),c(B,"aria-label","Edit todo"),c(B,"type","text"),c(B,"name","text"),B.value=D=e[5].text,c(B,"class","svelte-2qlxbn"),c($,"class","save svelte-2qlxbn"),c($,"aria-label","Save todo"),c(U,"class","text svelte-2qlxbn"),c(U,"action",H="/todos/"+e[5].uid+".json?_method=patch"),c(U,"method","post"),c(V,"class","delete svelte-2qlxbn"),c(V,"aria-label","Delete todo"),c(S,"action",A="/todos/"+e[5].uid+".json?_method=delete"),c(S,"method","post"),c(a,"class","todo svelte-2qlxbn"),i(a,"done",e[5].done),this.first=a},m(t,o){u(t,a,o),h(a,j),h(j,w),h(j,T),h(j,q),h(a,I),h(a,U),h(U,B),h(U,P),h(U,$),h(a,L),h(a,S),h(S,V),h(a,X),z=!0,G||(J=[f(F=R.call(null,j,{pending:Q,result:e[1]})),f(R.call(null,U,{result:e[1]})),f(C=R.call(null,S,{result:W}))],G=!0)},p(t,o){e=t,(!z||1&o&&y!==(y=e[5].done?"":"true"))&&(w.value=y),(!z||1&o&&O!==(O="Mark todo as "+(e[5].done?"not done":"done")))&&c(q,"aria-label",O),(!z||1&o&&k!==(k="/todos/"+e[5].uid+".json?_method=patch"))&&c(j,"action",k),F&&p(F.update)&&1&o&&F.update.call(null,{pending:Q,result:e[1]}),(!z||1&o&&D!==(D=e[5].text)&&B.value!==D)&&(B.value=D),(!z||1&o&&H!==(H="/todos/"+e[5].uid+".json?_method=patch"))&&c(U,"action",H),(!z||1&o&&A!==(A="/todos/"+e[5].uid+".json?_method=delete"))&&c(S,"action",A),C&&p(C.update)&&1&o&&C.update.call(null,{result:W}),1&o&&i(a,"done",e[5].done)},r(){Z=a.getBoundingClientRect()},f(){m(a),K(),v(a,Z)},a(){K(),K=b(a,Z,M,{duration:200})},i(t){z||(t&&g((()=>{Y||(Y=x(a,_,{start:.7},!0)),Y.run(1)})),z=!0)},o(t){t&&(Y||(Y=x(a,_,{start:.7},!1)),Y.run(0)),z=!1},d(t){t&&d(a),t&&Y&&Y.end(),G=!1,E(J)}}}function D(t){let e,a,i,m,v,b,g,x,E,M,_,N,D=[],P=new Map,$=t[0];const H=t=>t[5].uid;for(let o=0;o<$.length;o+=1){let e=U(t,$,o),a=H(e);P.set(a,D[o]=B(a,e))}return{c(){e=s(),a=o("div"),i=o("h1"),m=j("Todos"),v=s(),b=o("form"),g=o("input"),E=s();for(let t=0;t<D.length;t+=1)D[t].c();this.h()},l(t){w('[data-svelte="svelte-181o7gf"]',document.head).forEach(d),e=r(t),a=n(t,"DIV",{class:!0});var o=l(a);i=n(o,"H1",{});var s=l(i);m=y(s,"Todos"),s.forEach(d),v=r(o),b=n(o,"FORM",{class:!0,action:!0,method:!0});var c=l(b);g=n(c,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),c.forEach(d),E=r(o);for(let e=0;e<D.length;e+=1)D[e].l(o);o.forEach(d),this.h()},h(){document.title="Todos",c(g,"name","text"),c(g,"aria-label","Add todo"),c(g,"placeholder","+ tap to add a todo"),c(g,"class","svelte-2qlxbn"),c(b,"class","new svelte-2qlxbn"),c(b,"action","/todos.json"),c(b,"method","post"),c(a,"class","todos svelte-2qlxbn")},m(o,s){u(o,e,s),u(o,a,s),h(a,i),h(i,m),h(a,v),h(a,b),h(b,g),h(a,E);for(let t=0;t<D.length;t+=1)D[t].m(a,null);M=!0,_||(N=f(x=R.call(null,b,{result:t[2]})),_=!0)},p(t,[e]){if(x&&p(x.update)&&1&e&&x.update.call(null,{result:t[2]}),3&e){$=t[0],F();for(let t=0;t<D.length;t+=1)D[t].r();D=T(D,e,H,1,t,$,P,a,I,B,null,U);for(let t=0;t<D.length;t+=1)D[t].a();q()}},i(t){if(!M){for(let t=0;t<$.length;t+=1)O(D[t]);M=!0}},o(t){for(let e=0;e<D.length;e+=1)k(D[e]);M=!1},d(t){t&&d(e),t&&d(a);for(let e=0;e<D.length;e+=1)D[e].d();_=!1,N()}}}const P=async({fetch:t})=>{const e=await t("/todos.json");if(e.ok){return{props:{todos:await e.json()}}}const{message:a}=await e.json();return{error:new Error(a)}};function $(t,e,a){let{todos:o}=e;return t.$$set=t=>{"todos"in t&&a(0,o=t.todos)},[o,async function(t){const e=await t.json();a(0,o=o.map((t=>t.uid===e.uid?e:t)))},async(t,e)=>{const s=await t.json();a(0,o=[...o,s]),e.reset()},(t,e,s,n)=>{a(0,e[s].done=!!n.get("done"),o)},t=>{a(0,o=o.filter((e=>e.uid!==t.uid)))}]}export default class extends t{constructor(t){super(),e(this,t,$,D,a,{todos:0})}}export{P as load};
