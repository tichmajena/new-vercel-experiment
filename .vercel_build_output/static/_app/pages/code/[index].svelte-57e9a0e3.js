import{S as t,i as s,s as e,e as l,k as o,j as r,c as n,a as i,d as a,n as c,m as h,b as d,f as u,F as f,o as m,x as p,u as v,v as g,w,D as x,G as k,H as $,W as b,t as E,g as j,J as y,A as C,r as B,K as D}from"../../chunks/vendor-233f8ef4.js";import{c as V,d as I}from"../../chunks/store-098d49d4.js";import N from"./NoteBody.svelte-da7c7618.js";import T from"./TitleForm.svelte-e7bc9094.js";import O from"./TitleContent.svelte-afee34b6.js";import S from"./OurButtons.svelte-8312a9cc.js";import{g as z}from"../../chunks/navigation-e6c17f3a.js";import{p as _}from"../../chunks/offline-45ec2525.js";import"./CodeContent.svelte-1bfb35c5.js";import"../../chunks/preload-helper-08cc8e69.js";import"./CodeForm.svelte-fa8e9a3c.js";import"./DescriptionForm.svelte-659dc395.js";import"./DescriptionContent.svelte-ab27bb23.js";import"../../chunks/index-a7651b31.js";/* empty css                                                           */import"../../chunks/singletons-ff603286.js";function H(t,s,e){const l=t.slice();return l[15]=s[e],l[17]=e,l}function J(t){let s,e,x,k,$,E,j,y,C,D,V,I,N,T,O,z,_,J,G,P,W=t[4][t[0]].edit&&L(t),q=!t[4][t[0]].edit&&M(t),R=t[4][t[0]].steps,X=[];for(let l=0;l<R.length;l+=1)X[l]=U(H(t,R,l));const Z=t=>v(X[t],1,1,(()=>{X[t]=null}));let tt=!Y;N=new S({props:{i:t[0]}});let st=!t[3].save&&!t[3].update&&F(t),et=t[3].save&&"draft"===t[4][t[0]].mode&&A(t),lt=t[3].save&&"publish"===t[4][t[0]].mode&&K(),ot=t[3].update&&"publish"===t[4][t[0]].mode&&Q(t);return{c(){s=l("div"),e=l("div"),x=l("div"),k=l("div"),W&&W.c(),$=o(),E=l("div"),q&&q.c(),j=o(),y=l("div"),C=l("ol");for(let t=0;t<X.length;t+=1)X[t].c();D=o(),tt&&tt.c(),V=o(),I=l("div"),r(N.$$.fragment),T=o(),O=l("div"),z=l("div"),st&&st.c(),_=o(),et&&et.c(),J=o(),lt&&lt.c(),G=o(),ot&&ot.c(),this.h()},l(t){s=n(t,"DIV",{class:!0});var l=i(s);e=n(l,"DIV",{class:!0});var o=i(e);x=n(o,"DIV",{class:!0});var r=i(x);k=n(r,"DIV",{class:!0});var d=i(k);W&&W.l(d),d.forEach(a),$=c(r),E=n(r,"DIV",{class:!0});var u=i(E);q&&q.l(u),u.forEach(a),r.forEach(a),o.forEach(a),j=c(l),y=n(l,"DIV",{class:!0});var f=i(y);C=n(f,"OL",{class:!0});var m=i(C);for(let s=0;s<X.length;s+=1)X[s].l(m);m.forEach(a),D=c(f),tt&&tt.l(f),f.forEach(a),V=c(l),I=n(l,"DIV",{class:!0});var p=i(I);h(N.$$.fragment,p),p.forEach(a),T=c(l),O=n(l,"DIV",{class:!0});var v=i(O);z=n(v,"DIV",{id:!0});var g=i(z);st&&st.l(g),_=c(g),et&&et.l(g),J=c(g),lt&&lt.l(g),G=c(g),ot&&ot.l(g),g.forEach(a),v.forEach(a),l.forEach(a),this.h()},h(){d(k,"class","title__form-div"),d(E,"class","title__content-div"),d(x,"class","note-title__title"),d(e,"class","note-title"),d(C,"class","list-decimal"),d(y,"class","note-body"),d(I,"class","note-footer"),d(z,"id","add-btn"),d(O,"class","bottom-bar md:pl-64"),d(s,"class","app-wrapper svelte-18ehxgn")},m(t,l){u(t,s,l),f(s,e),f(e,x),f(x,k),W&&W.m(k,null),f(x,$),f(x,E),q&&q.m(E,null),f(s,j),f(s,y),f(y,C);for(let s=0;s<X.length;s+=1)X[s].m(C,null);f(y,D),tt&&tt.m(y,null),f(s,V),f(s,I),m(N,I,null),f(s,T),f(s,O),f(O,z),st&&st.m(z,null),f(z,_),et&&et.m(z,null),f(z,J),lt&&lt.m(z,null),f(z,G),ot&&ot.m(z,null),P=!0},p(t,s){if(t[4][t[0]].edit?W?(W.p(t,s),17&s&&p(W,1)):(W=L(t),W.c(),p(W,1),W.m(k,null)):W&&(B(),v(W,1,1,(()=>{W=null})),w()),t[4][t[0]].edit?q&&(B(),v(q,1,1,(()=>{q=null})),w()):q?(q.p(t,s),17&s&&p(q,1)):(q=M(t),q.c(),p(q,1),q.m(E,null)),17&s){let e;for(R=t[4][t[0]].steps,e=0;e<R.length;e+=1){const l=H(t,R,e);X[e]?(X[e].p(l,s),p(X[e],1)):(X[e]=U(l),X[e].c(),p(X[e],1),X[e].m(C,null))}for(B(),e=R.length;e<X.length;e+=1)Z(e);w()}const e={};1&s&&(e.i=t[0]),N.$set(e),t[3].save||t[3].update?st&&(st.d(1),st=null):st?st.p(t,s):(st=F(t),st.c(),st.m(z,_)),t[3].save&&"draft"===t[4][t[0]].mode?et?et.p(t,s):(et=A(t),et.c(),et.m(z,J)):et&&(et.d(1),et=null),t[3].save&&"publish"===t[4][t[0]].mode?lt||(lt=K(),lt.c(),lt.m(z,G)):lt&&(lt.d(1),lt=null),t[3].update&&"publish"===t[4][t[0]].mode?ot?ot.p(t,s):(ot=Q(t),ot.c(),ot.m(z,null)):ot&&(ot.d(1),ot=null)},i(t){if(!P){p(W),p(q);for(let t=0;t<R.length;t+=1)p(X[t]);p(tt),p(N.$$.fragment,t),P=!0}},o(t){v(W),v(q),X=X.filter(Boolean);for(let s=0;s<X.length;s+=1)v(X[s]);v(tt),v(N.$$.fragment,t),P=!1},d(t){t&&a(s),W&&W.d(),q&&q.d(),b(X,t),tt&&tt.d(),g(N),st&&st.d(),et&&et.d(),lt&&lt.d(),ot&&ot.d()}}}function L(t){let s,e;return s=new T({props:{i:t[0]}}),{c(){r(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,l){m(s,t,l),e=!0},p(t,e){const l={};1&e&&(l.i=t[0]),s.$set(l)},i(t){e||(p(s.$$.fragment,t),e=!0)},o(t){v(s.$$.fragment,t),e=!1},d(t){g(s,t)}}}function M(t){let s,e;return s=new O({props:{i:t[0]}}),{c(){r(s.$$.fragment)},l(t){h(s.$$.fragment,t)},m(t,l){m(s,t,l),e=!0},p(t,e){const l={};1&e&&(l.i=t[0]),s.$set(l)},i(t){e||(p(s.$$.fragment,t),e=!0)},o(t){v(s.$$.fragment,t),e=!1},d(t){g(s,t)}}}function U(t){let s,e,w,x;return e=new N({props:{i:t[0],ii:t[17]}}),{c(){s=l("li"),r(e.$$.fragment),w=o(),this.h()},l(t){s=n(t,"LI",{class:!0});var l=i(s);h(e.$$.fragment,l),w=c(l),l.forEach(a),this.h()},h(){d(s,"class","mb-5")},m(t,l){u(t,s,l),m(e,s,null),f(s,w),x=!0},p(t,s){const l={};1&s&&(l.i=t[0]),e.$set(l)},i(t){x||(p(e.$$.fragment,t),x=!0)},o(t){v(e.$$.fragment,t),x=!1},d(t){t&&a(s),g(e)}}}function F(t){let s,e,o,r,c;return{c(){s=l("button"),e=x("svg"),o=x("path"),this.h()},l(t){s=n(t,"BUTTON",{class:!0});var l=i(s);e=n(l,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var r=i(e);o=n(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),i(o).forEach(a),r.forEach(a),l.forEach(a),this.h()},h(){d(o,"stroke-linecap","round"),d(o,"stroke-linejoin","round"),d(o,"stroke-width","2"),d(o,"d","M12 6v6m0 0v6m0-6h6m-6 0H6"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"class","h-8 w-8"),d(e,"fill","none"),d(e,"viewBox","0 0 24 24"),d(e,"stroke","currentColor"),d(s,"class","text-white rounded-full h-14 w-14 bg-pink-700 grid place-items-center")},m(l,n){u(l,s,n),f(s,e),f(e,o),r||(c=k(s,"click",t[5]),r=!0)},p:$,d(t){t&&a(s),r=!1,c()}}}function A(t){let s,e,o;function r(t,s){return t[1]?P:G}let c=r(t),h=c(t);return{c(){s=l("button"),h.c(),this.h()},l(t){s=n(t,"BUTTON",{class:!0});var e=i(s);h.l(e),e.forEach(a),this.h()},h(){d(s,"class","text-white rounded-full h-14 w-14 bg-green-700 flex items-center justify-center")},m(l,r){u(l,s,r),h.m(s,null),e||(o=k(s,"click",t[6]),e=!0)},p(t,e){c!==(c=r(t))&&(h.d(1),h=c(t),h&&(h.c(),h.m(s,null)))},d(t){t&&a(s),h.d(),e=!1,o()}}}function G(t){let s,e;return{c(){s=x("svg"),e=x("path"),this.h()},l(t){s=n(t,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var l=i(s);e=n(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),i(e).forEach(a),l.forEach(a),this.h()},h(){d(e,"stroke-linecap","round"),d(e,"stroke-linejoin","round"),d(e,"stroke-width","2"),d(e,"d","M5 13l4 4L19 7"),d(s,"xmlns","http://www.w3.org/2000/svg"),d(s,"class","h-8 w-8"),d(s,"fill","none"),d(s,"viewBox","0 0 24 24"),d(s,"stroke","currentColor")},m(t,l){u(t,s,l),f(s,e)},d(t){t&&a(s)}}}function P(t){let s,e,l;return{c(){s=x("svg"),e=x("circle"),l=x("path"),this.h()},l(t){s=n(t,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0},1);var o=i(s);e=n(o,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0},1),i(e).forEach(a),l=n(o,"path",{class:!0,fill:!0,d:!0},1),i(l).forEach(a),o.forEach(a),this.h()},h(){d(e,"class","opacity-25"),d(e,"cx","12"),d(e,"cy","12"),d(e,"r","10"),d(e,"stroke","currentColor"),d(e,"stroke-width","4"),d(l,"class","opacity-75"),d(l,"fill","currentColor"),d(l,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),d(s,"class","animate-spin mx-auro h-8 w-8 text-white text-center"),d(s,"xmlns","http://www.w3.org/2000/svg"),d(s,"fill","none"),d(s,"viewBox","0 0 24 24")},m(t,o){u(t,s,o),f(s,e),f(s,l)},d(t){t&&a(s)}}}function K(t){let s,e,o,r;return{c(){s=l("button"),e=x("svg"),o=x("circle"),r=x("path"),this.h()},l(t){s=n(t,"BUTTON",{class:!0});var l=i(s);e=n(l,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0},1);var c=i(e);o=n(c,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0},1),i(o).forEach(a),r=n(c,"path",{class:!0,fill:!0,d:!0},1),i(r).forEach(a),c.forEach(a),l.forEach(a),this.h()},h(){d(o,"class","opacity-25"),d(o,"cx","12"),d(o,"cy","12"),d(o,"r","10"),d(o,"stroke","currentColor"),d(o,"stroke-width","4"),d(r,"class","opacity-75"),d(r,"fill","currentColor"),d(r,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),d(e,"class","animate-spin mx-auro h-8 w-8 text-white text-center"),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"fill","none"),d(e,"viewBox","0 0 24 24"),d(s,"class","text-white rounded-full h-14 w-14 bg-green-700 flex items-center justify-center")},m(t,l){u(t,s,l),f(s,e),f(e,o),f(e,r)},d(t){t&&a(s)}}}function Q(t){let s,e,o;function r(t,s){return t[2]?q:W}let c=r(t),h=c(t);return{c(){s=l("button"),h.c(),this.h()},l(t){s=n(t,"BUTTON",{class:!0});var e=i(s);h.l(e),e.forEach(a),this.h()},h(){d(s,"class","text-white rounded-full h-14 w-14 bg-blue-700 grid place-items-center")},m(l,r){u(l,s,r),h.m(s,null),e||(o=k(s,"click",t[7]),e=!0)},p(t,e){c!==(c=r(t))&&(h.d(1),h=c(t),h&&(h.c(),h.m(s,null)))},d(t){t&&a(s),h.d(),e=!1,o()}}}function W(t){let s,e;return{c(){s=x("svg"),e=x("path"),this.h()},l(t){s=n(t,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var l=i(s);e=n(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),i(e).forEach(a),l.forEach(a),this.h()},h(){d(e,"stroke-linecap","round"),d(e,"stroke-linejoin","round"),d(e,"stroke-width","2"),d(e,"d","M5 13l4 4L19 7"),d(s,"xmlns","http://www.w3.org/2000/svg"),d(s,"class","h-8 w-8"),d(s,"fill","none"),d(s,"viewBox","0 0 24 24"),d(s,"stroke","currentColor")},m(t,l){u(t,s,l),f(s,e)},d(t){t&&a(s)}}}function q(t){let s,e,l;return{c(){s=x("svg"),e=x("circle"),l=x("path"),this.h()},l(t){s=n(t,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0},1);var o=i(s);e=n(o,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0},1),i(e).forEach(a),l=n(o,"path",{class:!0,fill:!0,d:!0},1),i(l).forEach(a),o.forEach(a),this.h()},h(){d(e,"class","opacity-25"),d(e,"cx","12"),d(e,"cy","12"),d(e,"r","10"),d(e,"stroke","currentColor"),d(e,"stroke-width","4"),d(l,"class","opacity-75"),d(l,"fill","currentColor"),d(l,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),d(s,"class","animate-spin mx-auro h-8 w-8 text-white text-center"),d(s,"xmlns","http://www.w3.org/2000/svg"),d(s,"fill","none"),d(s,"viewBox","0 0 24 24")},m(t,o){u(t,s,o),f(s,e),f(s,l)},d(t){t&&a(s)}}}function R(t){let s,e,r,h,m,g,x,k=t[4][t[0]]&&J(t);return{c(){s=l("div"),e=l("h3"),r=E("Code Notes"),h=o(),m=l("div"),g=l("div"),k&&k.c(),this.h()},l(t){s=n(t,"DIV",{class:!0});var l=i(s);e=n(l,"H3",{class:!0});var o=i(e);r=j(o,"Code Notes"),o.forEach(a),l.forEach(a),h=c(t),m=n(t,"DIV",{class:!0});var d=i(m);g=n(d,"DIV",{class:!0});var u=i(g);k&&k.l(u),u.forEach(a),d.forEach(a),this.h()},h(){d(e,"class","ml-10"),d(s,"class","fixed inset-x-0 p-2 md:p-4 bg-gray-700 md:top-0 top-14 text-white text-lg md:pl-64 z-10"),d(g,"class","container mx-auto max-w-screen-md "),d(m,"class","section md:mt-8 mt-12")},m(t,l){u(t,s,l),f(s,e),f(e,r),u(t,h,l),u(t,m,l),f(m,g),k&&k.m(g,null),x=!0},p(t,[s]){t[4][t[0]]?k?(k.p(t,s),17&s&&p(k,1)):(k=J(t),k.c(),p(k,1),k.m(g,null)):k&&(B(),v(k,1,1,(()=>{k=null})),w())},i(t){x||(p(k),x=!0)},o(t){v(k),x=!1},d(t){t&&a(s),t&&a(h),t&&a(m),k&&k.d()}}}async function X({page:t,fetch:s,session:e}){if(!e)return{status:302,redirect:"/auth"};let l,o=t.params.index,r=o.split("-"),n=+r[0];if(r[1],r.length>1){const t=await s(`/code/${o}.json`),e=await t.json();l=JSON.parse(e.string),t.status}return{props:{i:n,session:e,post:l,slug:o}}}let Y=!0;function Z(t,s,e){let l,o;y(t,I,(t=>e(3,l=t))),y(t,V,(t=>e(4,o=t)));let{i:r=0}=s,{post:n}=s,{slug:i}=s,a=!1,c=!1,{session:h}=s;function d(){D(I,l.update=!1,l),o.forEach((t=>{t.edit=!1,t.steps.length>0&&t.steps.forEach((t=>{t.editDesc=!1,t.editCode=!1}))}))}return C((()=>{console.log("SLUG: ",i),"caches"in window&&_(n,i).then((t=>e(8,n=t)))})),void 0===o[r]&&void 0!==n?D(V,o[r]=n,o):o[r]?console.log("new"):(console.log("ELSING"),browser&&z("/code",{invalidate:!0})),l.save||d(),t.$$set=t=>{"i"in t&&e(0,r=t.i),"post"in t&&e(8,n=t.post),"slug"in t&&e(9,i=t.slug),"session"in t&&e(10,h=t.session)},[r,a,c,l,o,function(){D(V,o=[...o,{title:"",steps:[],edit:!0,ready:!0,mode:"draft"}],o),D(I,l.showFabs=!0,l),D(I,l.save=!0,l),D(I,l.edit=!1,l);let t=o.length-1;z("/code/"+t)},async function(){e(1,a=!0),D(I,l.update=!1,l),D(V,o[r].mode="publish",o);let t=o[r],s={title:o[r].title,string:JSON.stringify(t),status:"publish",author:h.id};const n=await fetch(`/code/${i}}.json`,{method:"POST",body:JSON.stringify(s)}),c=await n.json();setTimeout((()=>{d(),D(V,o.ready=!0,o),D(I,l.save=!1,l),D(I,l.update=!1,l),z(`/code/${r}-${c.body.id}`,{replaceState:!0})}),2001)},async function(){e(2,c=!0),D(V,o[r].mode="publish",o);let t=o[r],s={title:o[r].title,string:JSON.stringify(t),status:"publish",author:h.id};console.log(o[r].id);const n=await fetch(`/code/${o[r].id}.json`,{method:"PUT",body:JSON.stringify(s)});await n.json(),e(2,c=!1),D(I,l.update=!1,l)},n,i,h]}class tt extends t{constructor(t){super(),s(this,t,Z,R,e,{i:0,post:8,slug:9,session:10})}}export{tt as default,X as load};