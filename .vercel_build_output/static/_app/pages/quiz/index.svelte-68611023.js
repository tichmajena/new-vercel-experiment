import{S as ne,i as re,s as oe,e as b,t as P,c as g,a as w,g as H,d as o,b as _,f as Q,G as r,h as x,I as Z,k as z,j as ie,n as S,m as ue,W as $,Y as ce,o as de,H as Y,x as ee,u as te,v as fe,J as _e,ab as ge,$ as he,av as ve,X as ye}from"../../chunks/vendor-52b416c4.js";function we(t){let s,e;return{c(){s=b("div"),e=P(t[0]),this.h()},l(n){s=g(n,"DIV",{class:!0});var a=w(s);e=H(a,t[0]),a.forEach(o),this.h()},h(){_(s,"class","block mb-10")},m(n,a){Q(n,s,a),r(s,e)},p(n,[a]){a&1&&x(e,n[0])},i:Z,o:Z,d(n){n&&o(s)}}}function Te(t,s,e){let n,a,i,f,u,{elapsedTime:v}=s;const h=m=>`00${m}`.slice(-2),D=m=>`000${m}`.slice(-3);return t.$$set=m=>{"elapsedTime"in m&&e(1,v=m.elapsedTime)},t.$$.update=()=>{t.$$.dirty&2&&e(5,n=h(Math.floor(v/1e3/60/60)%60)),t.$$.dirty&2&&e(4,a=h(Math.floor(v/1e3/60)%60)),t.$$.dirty&2&&e(3,i=h(Math.floor(v/1e3)%60)),t.$$.dirty&2&&e(2,f=D(v%1e3)),t.$$.dirty&60&&e(0,u=`${n}:${a}:${i}.${f}`)},[u,v,f,i,a,n]}class me extends ne{constructor(s){super();re(this,s,Te,we,oe,{elapsedTime:1})}}function pe(t,s,e){const n=t.slice();return n[29]=s[e],n[31]=e,n}function Ee(t){let s,e,n,a=t[6]()+"",i,f,u,v,h,D;return{c(){s=b("div"),e=b("h1"),n=P("Your score:"),i=P(a),f=z(),u=b("button"),v=P("Restar Quiz"),this.h()},l(m){s=g(m,"DIV",{class:!0});var y=w(s);e=g(y,"H1",{class:!0});var d=w(e);n=H(d,"Your score:"),i=H(d,a),d.forEach(o),f=S(y),u=g(y,"BUTTON",{class:!0});var c=w(u);v=H(c,"Restar Quiz"),c.forEach(o),y.forEach(o),this.h()},h(){_(e,"class","svelte-d6u9ys"),_(u,"class","svelte-d6u9ys"),_(s,"class","score-screen svelte-d6u9ys")},m(m,y){Q(m,s,y),r(s,e),r(e,n),r(e,i),r(s,f),r(s,u),r(u,v),h||(D=Y(u,"click",t[7]),h=!0)},p:Z,d(m){m&&o(s),h=!1,D()}}}function ke(t){let s,e,n,a=t[0][t[5]].question_title+"",i,f,u,v,h,D,m,y,d,c,G,N,C,U,j,R,J,I=t[0][t[5]].question_answers,T=[];for(let p=0;p<I.length;p+=1)T[p]=be(pe(t,I,p));return{c(){s=b("div"),e=b("div"),n=b("h2"),i=P(a),f=z(),u=b("div");for(let p=0;p<T.length;p+=1)T[p].c();v=z(),h=b("div"),D=b("div"),m=b("div"),y=z(),d=b("div"),c=b("button"),G=P("<"),C=z(),U=b("button"),j=P(">"),this.h()},l(p){s=g(p,"DIV",{class:!0});var k=w(s);e=g(k,"DIV",{class:!0});var E=w(e);n=g(E,"H2",{});var B=w(n);i=H(B,a),B.forEach(o),f=S(E),u=g(E,"DIV",{class:!0});var K=w(u);for(let l=0;l<T.length;l+=1)T[l].l(K);K.forEach(o),E.forEach(o),v=S(k),h=g(k,"DIV",{class:!0});var q=w(h);D=g(q,"DIV",{class:!0});var M=w(D);m=g(M,"DIV",{style:!0,class:!0}),w(m).forEach(o),M.forEach(o),y=S(q),d=g(q,"DIV",{class:!0});var A=w(d);c=g(A,"BUTTON",{class:!0});var W=w(c);G=H(W,"<"),W.forEach(o),C=S(A),U=g(A,"BUTTON",{class:!0});var O=w(U);j=H(O,">"),O.forEach(o),A.forEach(o),q.forEach(o),k.forEach(o),this.h()},h(){_(u,"class","options svelte-d6u9ys"),_(e,"class","main svelte-d6u9ys"),$(m,"width",t[5]/t[0].length*100+"%"),_(m,"class","svelte-d6u9ys"),_(D,"class","progress-bar svelte-d6u9ys"),c.disabled=N=t[5]===0,_(c,"class","svelte-d6u9ys"),_(U,"class","svelte-d6u9ys"),_(d,"class","buttons svelte-d6u9ys"),_(h,"class","footer svelte-d6u9ys"),_(s,"class","quiz-screen svelte-d6u9ys")},m(p,k){Q(p,s,k),r(s,e),r(e,n),r(n,i),r(e,f),r(e,u);for(let E=0;E<T.length;E+=1)T[E].m(u,null);r(s,v),r(s,h),r(h,D),r(D,m),r(h,y),r(h,d),r(d,c),r(c,G),r(d,C),r(d,U),r(U,j),R||(J=[Y(c,"click",t[17]),Y(U,"click",t[18])],R=!0)},p(p,k){if(k[0]&33&&a!==(a=p[0][p[5]].question_title+"")&&x(i,a),k[0]&817){I=p[0][p[5]].question_answers;let E;for(E=0;E<I.length;E+=1){const B=pe(p,I,E);T[E]?T[E].p(B,k):(T[E]=be(B),T[E].c(),T[E].m(u,null))}for(;E<T.length;E+=1)T[E].d(1);T.length=I.length}k[0]&33&&$(m,"width",p[5]/p[0].length*100+"%"),k[0]&32&&N!==(N=p[5]===0)&&(c.disabled=N)},d(p){p&&o(s),ye(T,p),R=!1,_e(J)}}}function De(t){let s,e,n,a,i;return{c(){s=b("div"),e=b("button"),n=P("Start Quiz"),this.h()},l(f){s=g(f,"DIV",{class:!0});var u=w(s);e=g(u,"BUTTON",{class:!0});var v=w(e);n=H(v,"Start Quiz"),v.forEach(o),u.forEach(o),this.h()},h(){_(e,"class","svelte-d6u9ys"),_(s,"class","start-screen svelte-d6u9ys")},m(f,u){Q(f,s,u),r(s,e),r(e,n),a||(i=Y(e,"click",t[10]),a=!0)},p:Z,d(f){f&&o(s),a=!1,i()}}}function be(t){let s,e,n,a,i,f=t[8](t[29])+"",u,v,h,D,m;function y(){return t[16](t[31])}return{c(){s=b("div"),e=b("img"),a=z(),i=b("button"),u=P(f),h=z(),this.h()},l(d){s=g(d,"DIV",{class:!0});var c=w(s);e=g(c,"IMG",{src:!0,alt:!0}),a=S(c),i=g(c,"BUTTON",{class:!0});var G=w(i);u=H(G,f),G.forEach(o),h=S(c),c.forEach(o),this.h()},h(){he(e.src,n=t[9](t[29]))||_(e,"src",n),_(e,"alt",""),_(i,"class",v=""+(ve(t[4][t[5]]==t[31]?"selected":"")+" svelte-d6u9ys")),_(s,"class","w-24  svelte-d6u9ys")},m(d,c){Q(d,s,c),r(s,e),r(s,a),r(s,i),r(i,u),r(s,h),D||(m=Y(i,"click",y),D=!0)},p(d,c){t=d,c[0]&33&&!he(e.src,n=t[9](t[29]))&&_(e,"src",n),c[0]&33&&f!==(f=t[8](t[29])+"")&&x(u,f),c[0]&48&&v!==(v=""+(ve(t[4][t[5]]==t[31]?"selected":"")+" svelte-d6u9ys"))&&_(i,"class",v)},d(d){d&&o(s),D=!1,m()}}}function Ie(t){let s,e,n,a,i,f,u,v,h,D,m,y,d,c,G,N,C,U,j,R,J,I,T,p,k,E,B,K,q,M=qe;T=new me({props:{elapsedTime:t[1]}}),k=new me({props:{elapsedTime:t[2]}});function A(l,V){return l[5]==-1?De:l[5]>l[4].length-1?Ee:ke}let W=A(t),O=W(t);return{c(){s=b("div"),e=b("input"),n=z(),a=b("div"),i=b("div"),f=z(),u=b("div"),v=z(),h=b("div"),D=z(),m=z(),y=b("div"),d=b("button"),c=P("Start"),G=z(),N=b("button"),C=P("Pause"),U=z(),j=b("button"),R=P("Stop"),J=z(),I=b("div"),ie(T.$$.fragment),p=z(),ie(k.$$.fragment),E=z(),O.c(),this.h()},l(l){s=g(l,"DIV",{});var V=w(s);e=g(V,"INPUT",{type:!0,start:!0,end:!0}),V.forEach(o),n=S(l),a=g(l,"DIV",{class:!0});var X=w(a);i=g(X,"DIV",{class:!0}),w(i).forEach(o),f=S(X),u=g(X,"DIV",{class:!0}),w(u).forEach(o),v=S(X),h=g(X,"DIV",{style:!0,class:!0}),w(h).forEach(o),X.forEach(o),D=S(l),m=S(l),y=g(l,"DIV",{class:!0});var F=w(y);d=g(F,"BUTTON",{class:!0});var se=w(d);c=H(se,"Start"),se.forEach(o),G=S(F),N=g(F,"BUTTON",{class:!0});var le=w(N);C=H(le,"Pause"),le.forEach(o),U=S(F),j=g(F,"BUTTON",{class:!0});var ae=w(j);R=H(ae,"Stop"),ae.forEach(o),F.forEach(o),J=S(l),I=g(l,"DIV",{class:!0});var L=w(I);ue(T.$$.fragment,L),p=S(L),ue(k.$$.fragment,L),E=S(L),O.l(L),L.forEach(o),this.h()},h(){_(e,"type","range"),_(e,"start","0"),_(e,"end","100"),_(i,"class","circle bg-gray-200 h-full w-full rounded-full absolute top-0 left-0 z-20"),_(u,"class","pointer-container"),$(h,"background","conic-gradient(#55b7a4 0%, #4ca493 "+t[3]+"%, #aaa "+t[3]+"%, #aaa 100%)"),_(h,"class","gradient-circle h-64 w-64 z-10 rounded-full absolute -top-4 -left-4 svelte-d6u9ys"),_(a,"class","l-container flex justify-center overflow-visible items-center mx-auto h-56 w-56 relative pt-8"),_(d,"class","px-2 py-1 mb-3 ml-20 text-white bg-yellow-500"),_(N,"class","px-2 py-1 mb-3 text-white bg-yellow-700"),_(j,"class","px-2 py-1 mb-3 text-white bg-yellow-900"),_(y,"class","hidden"),_(I,"class","app svelte-d6u9ys")},m(l,V){Q(l,s,V),r(s,e),ce(e,t[3]),Q(l,n,V),Q(l,a,V),r(a,i),r(a,f),r(a,u),r(a,v),r(a,h),Q(l,D,V),Q(l,m,V),Q(l,y,V),r(y,d),r(d,c),r(y,G),r(y,N),r(N,C),r(y,U),r(y,j),r(j,R),Q(l,J,V),Q(l,I,V),de(T,I,null),r(I,p),de(k,I,null),r(I,E),O.m(I,null),B=!0,K||(q=[Y(e,"change",t[15]),Y(e,"input",t[15]),Y(d,"click",t[11]),Y(N,"click",t[12]),Y(j,"click",t[13])],K=!0)},p(l,V){V[0]&8&&ce(e,l[3]),(!B||V[0]&8)&&$(h,"background","conic-gradient(#55b7a4 0%, #4ca493 "+l[3]+"%, #aaa "+l[3]+"%, #aaa 100%)");const X={};V[0]&2&&(X.elapsedTime=l[1]),T.$set(X);const F={};V[0]&4&&(F.elapsedTime=l[2]),k.$set(F),W===(W=A(l))&&O?O.p(l,V):(O.d(1),O=W(l),O&&(O.c(),O.m(I,null)))},i(l){B||(ee(M),ee(T.$$.fragment,l),ee(k.$$.fragment,l),B=!0)},o(l){te(M),te(T.$$.fragment,l),te(k.$$.fragment,l),B=!1},d(l){l&&o(s),l&&o(n),l&&o(a),l&&o(D),l&&o(m),l&&o(y),l&&o(J),l&&o(I),fe(T),fe(k),O.d(),K=!1,_e(q)}}}const Ne=async({fetch:t})=>{const s=await t("/quiz.json");if(s.ok)return{props:{quiz:await(await s.json()).data}};const{message:e}=await s.json();return{error:new Error(e)}};let qe=!1;function Ve(t){clearInterval(t)}function ze(t,s,e){let{quiz:n}=s;console.log(n);let a=n,i=0,f=0,u=0,v=null,h=0,D=5,m=15,y=0,d=new Array(a.length).fill("answer"),c=-1;function G(){return d.reduce((M,A,W)=>a[W].question_answers[A].is_correct==1?M+1:M,0)/a.length*100+"%"}function N(){e(4,d=new Array(a.length).fill(null)),e(5,c=0)}let C=q=>q.answer_title.split("$")[0],U=q=>q.answer_title.split("$")[1];function j(){e(0,a=n),e(5,c=0),I()}function R(){let q=D*1e3,M=m*1e3,A=Date.now();e(1,i=u+q-A+h),e(2,f=u+M-A+h),i<=0&&f>0?(console.log("Adding"),e(1,i+=q)):f<=0&&i<=0&&(console.log("Game Over"),Ve(v),e(2,f=0),e(1,i=0))}function J(){v=setInterval(R)}function I(){u=Date.now(),J()}function T(){clearInterval(v),h=i}function p(){e(1,i=0),clearInterval(v)}function k(){y=ge(this.value),e(3,y)}const E=q=>{e(4,d[c]=q,d),console.log(d)},B=()=>{e(5,c--,c)},K=()=>{e(5,c++,c)};return t.$$set=q=>{"quiz"in q&&e(14,n=q.quiz)},[a,i,f,y,d,c,G,N,C,U,j,I,T,p,n,k,E,B,K]}class Oe extends ne{constructor(s){super();re(this,s,ze,Ie,oe,{quiz:14},null,[-1,-1])}}export{Oe as default,Ne as load};
