import{S as t,i as e,s,e as l,t as a,k as n,c as o,a as r,g as c,d as i,n as h,b as u,T as f,f as p,G as d,O as m,H as g,E as v,I as b,h as w,U as x,J as y}from"../../chunks/vendor-66f8d0bb.js";function E(t,e,s){const l=t.slice();return l[12]=e[s],l[13]=e,l[14]=s,l}function k(t){let e,s,n,h;function f(){return t[9](t[14])}return{c(){e=l("button"),s=a("-"),this.h()},l(t){e=o(t,"BUTTON",{fab:!0,size:!0,class:!0});var l=r(e);s=c(l,"-"),l.forEach(i),this.h()},h(){u(e,"fab",""),u(e,"size",""),u(e,"class","red white-text text-white bg-green-600 grid place-items-center rounded-full h-12 w-12  items-center justify-center text-2xl")},m(t,l){p(t,e,l),d(e,s),n||(h=g(e,"click",f),n=!0)},p(e,s){t=e},d(t){t&&i(e),n=!1,h()}}}function N(t){let e,s,a,n,c;return{c(){e=l("button"),s=v("svg"),a=v("path"),this.h()},l(t){e=o(t,"BUTTON",{class:!0});var l=r(e);s=o(l,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var n=r(s);a=o(n,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),r(a).forEach(i),n.forEach(i),l.forEach(i),this.h()},h(){u(a,"stroke-linecap","round-full"),u(a,"stroke-linejoin","round-full"),u(a,"stroke-width","2"),u(a,"d","M12 6v6m0 0v6m0-6h6m-6 0H6"),u(s,"xmlns","http://www.w3.org/2000/svg"),u(s,"class","h-6 w-6"),u(s,"fill","none"),u(s,"viewBox","0 0 24 24"),u(s,"stroke","currentColor"),u(e,"class","text-white   bg-pink-700 grid place-items-center rounded-full h-12 w-12  items-center justify-center")},m(l,o){p(l,e,o),d(e,s),d(s,a),n||(c=g(e,"click",t[4]),n=!0)},p:b,d(t){t&&i(e),n=!1,c()}}}function j(t){let e,s,v,b,w,x,y,E,j,T,I;function B(){t[8].call(x,t[13],t[14])}let _=t[14]!==t[2].length-1&&k(t),U=t[14]===t[2].length-1&&N(t);return{c(){e=l("div"),s=l("div"),v=l("label"),b=a("Phone Number..."),w=n(),x=l("input"),y=n(),E=l("div"),_&&_.c(),j=n(),U&&U.c(),this.h()},l(t){e=o(t,"DIV",{class:!0});var l=r(e);s=o(l,"DIV",{style:!0,class:!0});var a=r(s);v=o(a,"LABEL",{class:!0,for:!0});var n=r(v);b=c(n,"Phone Number..."),n.forEach(i),w=h(a),x=o(a,"INPUT",{class:!0,type:!0}),a.forEach(i),y=h(l),E=o(l,"DIV",{class:!0});var u=r(E);_&&_.l(u),j=h(u),U&&U.l(u),u.forEach(i),l.forEach(i),this.h()},h(){u(v,"class",""),u(v,"for","input-phoneNumber"),u(x,"class","bg-gray-300  hover:bg-red-400 flex flex-col"),u(x,"type","text"),f(s,"width","100%"),u(s,"class","pr-2"),u(E,"class","add-btn svelte-t3afc3"),u(e,"class","flex flex-row")},m(l,a){p(l,e,a),d(e,s),d(s,v),d(v,b),d(s,w),d(s,x),m(x,t[12]),d(e,y),d(e,E),_&&_.m(E,null),d(E,j),U&&U.m(E,null),T||(I=g(x,"input",B),T=!0)},p(e,s){t=e,4&s&&x.value!==t[12]&&m(x,t[12]),t[14]!==t[2].length-1?_?_.p(t,s):(_=k(t),_.c(),_.m(E,j)):_&&(_.d(1),_=null),t[14]===t[2].length-1?U?U.p(t,s):(U=N(t),U.c(),U.m(E,null)):U&&(U.d(1),U=null)},d(t){t&&i(e),_&&_.d(),U&&U.d(),T=!1,I()}}}function T(t){let e,s,f,v,k,N,T,I,B,_,U,$,O,L,P,S,z,D,V,A,C,H=t[0].full_name+"",J=t[2],R=[];for(let l=0;l<J.length;l+=1)R[l]=j(E(t,J,l));return{c(){e=l("div"),s=l("h3"),f=a("Contacts: "),v=a(H),k=n(),N=l("div"),T=l("label"),I=a("Name..."),B=n(),_=l("input"),U=n();for(let t=0;t<R.length;t+=1)R[t].c();$=n(),O=l("label"),L=a("Email..."),P=n(),S=l("input"),z=n(),D=l("button"),V=a("Save"),this.h()},l(t){e=o(t,"DIV",{class:!0});var l=r(e);s=o(l,"H3",{class:!0});var a=r(s);f=c(a,"Contacts: "),v=c(a,H),a.forEach(i),l.forEach(i),k=h(t),N=o(t,"DIV",{class:!0});var n=r(N);T=o(n,"LABEL",{class:!0,for:!0});var u=r(T);I=c(u,"Name..."),u.forEach(i),B=h(n),_=o(n,"INPUT",{class:!0,type:!0}),U=h(n);for(let e=0;e<R.length;e+=1)R[e].l(n);$=h(n),O=o(n,"LABEL",{class:!0,for:!0});var p=r(O);L=c(p,"Email..."),p.forEach(i),P=h(n),S=o(n,"INPUT",{class:!0,type:!0}),z=h(n),D=o(n,"BUTTON",{class:!0});var d=r(D);V=c(d,"Save"),d.forEach(i),n.forEach(i),this.h()},h(){u(s,"class","ml-10"),u(e,"class","fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"),u(T,"class",""),u(T,"for","input-name"),u(_,"class","bg-gray-300  hover:bg-red-400 flex flex-col"),u(_,"type","text"),u(O,"class",""),u(O,"for","input-email"),u(S,"class","bg-gray-300  hover:bg-red-400 flex flex-col"),u(S,"type","text"),u(D,"class","red white-text bg-blue-600 hover:text-red-600 m-2 w-16"),u(N,"class","section md:mt-32 mt-20")},m(l,a){p(l,e,a),d(e,s),d(s,f),d(s,v),p(l,k,a),p(l,N,a),d(N,T),d(T,I),d(N,B),d(N,_),m(_,t[1]),d(N,U);for(let t=0;t<R.length;t+=1)R[t].m(N,null);d(N,$),d(N,O),d(O,L),d(N,P),d(N,S),m(S,t[3]),d(N,z),d(N,D),d(D,V),A||(C=[g(_,"input",t[7]),g(S,"input",t[10]),g(D,"click",t[6])],A=!0)},p(t,[e]){if(1&e&&H!==(H=t[0].full_name+"")&&w(v,H),2&e&&_.value!==t[1]&&m(_,t[1]),52&e){let s;for(J=t[2],s=0;s<J.length;s+=1){const l=E(t,J,s);R[s]?R[s].p(l,e):(R[s]=j(l),R[s].c(),R[s].m(N,$))}for(;s<R.length;s+=1)R[s].d(1);R.length=J.length}8&e&&S.value!==t[3]&&m(S,t[3])},i:b,o:b,d(t){t&&i(e),t&&i(k),t&&i(N),x(R,t),A=!1,y(C)}}}const I=async t=>{const e=await fetch(`/contacts/${t.page.params.slug}.json`);if(console.log(e),e.ok){const t=await e.json();return{props:{post:await t[0]}}}const{message:s}=await e.json();return{error:new Error(s)}};function B(t,e,s){let l,{post:a}=e;if(console.log(a),"string"==typeof a.phone_numbers){let t=a.phone_numbers.split();a.phone_numbers=t}let n=a.full_name,o=a.phone_numbers,r=a.email;function c(t){o.splice(t,1),s(2,o)}return t.$$set=t=>{"post"in t&&s(0,a=t.post)},t.$$.update=()=>{14&t.$$.dirty&&(l={title:n,full_name:n,phone_numbers:o,email:r,status:"publish"})},[a,n,o,r,function(){s(2,o=[o,""])},c,async function(){let t=l,e=localStorage.getItem("token");console.log(e),e=JSON.parse(e);try{const s=await fetch(`https://www.imajenation.co.zw/mydiary/wp-json/wp/v2/contact/${a.id}`,{method:"PUT",credentials:"include",headers:{"Content-type":"application/json",Authorization:"Bearer "+e},body:JSON.stringify(t)}),l=await s.json();console.log(l),s.ok?(console.log("res is okay"),console.log(l),edit=!1):console.log("res has an error")}catch(s){console.log("ERROR!!!: ",s)}},function(){n=this.value,s(1,n)},function(t,e){t[e]=this.value,s(2,o)},t=>{c(t)},function(){r=this.value,s(3,r)}]}export default class extends t{constructor(t){super(),e(this,t,B,T,s,{post:0})}}export{I as load};