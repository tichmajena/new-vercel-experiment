import{S as t,i as s,s as e,e as a,j as i,c as l,a as c,m as r,d as n,b as o,f as d,o as f,v as u,r as p,w as h,t as m,k as $,l as v,g,n as x,F as E,V as b,G as k,u as y,J as j,B,K as D}from"../../chunks/vendor-d62291b3.js";import{c as I,d as T}from"../../chunks/store-0291cfd6.js";import{B as U}from"../../chunks/index-130bfc23.js";function V(t){let s,e,m;return e=new U({props:{loading:N,color:"green",$$slots:{default:[w]},$$scope:{ctx:t}}}),e.$on("click",t[3]),{c(){s=a("div"),i(e.$$.fragment),this.h()},l(t){s=l(t,"DIV",{class:!0});var a=c(s);r(e.$$.fragment,a),a.forEach(n),this.h()},h(){o(s,"class","mt-2 mb-6")},m(t,a){d(t,s,a),f(e,s,null),m=!0},p(t,s){const a={};64&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){m||(u(e.$$.fragment,t),m=!0)},o(t){p(e.$$.fragment,t),m=!1},d(t){t&&n(s),h(e)}}}function w(t){let s;return{c(){s=m("Update")},l(t){s=g(t,"Update")},m(t,e){d(t,s,e)},d(t){t&&n(s)}}}function L(t){let s,e,i,r,f,h,j,D,I,T,U=t[2].edit&&V(t);return{c(){s=a("div"),e=a("label"),i=m("Title..."),r=$(),f=a("input"),h=$(),U&&U.c(),j=v(),this.h()},l(t){s=l(t,"DIV",{class:!0});var a=c(s);e=l(a,"LABEL",{class:!0,for:!0});var o=c(e);i=g(o,"Title..."),o.forEach(n),r=x(a),f=l(a,"INPUT",{class:!0,type:!0,id:!0}),a.forEach(n),h=x(t),U&&U.l(t),j=v(),this.h()},h(){o(e,"class",""),o(e,"for","input-title"),o(f,"class","title__input "),o(f,"type","text"),o(f,"id","input-title"),o(s,"class","flex flex-col")},m(a,l){d(a,s,l),E(s,e),E(e,i),E(s,r),E(s,f),b(f,t[1][t[0]].title),d(a,h,l),U&&U.m(a,l),d(a,j,l),D=!0,I||(T=k(f,"input",t[4]),I=!0)},p(t,[s]){3&s&&f.value!==t[1][t[0]].title&&b(f,t[1][t[0]].title),t[2].edit?U?(U.p(t,s),4&s&&u(U,1)):(U=V(t),U.c(),u(U,1),U.m(j.parentNode,j)):U&&(B(),p(U,1,1,(()=>{U=null})),y())},i(t){D||(u(U),D=!0)},o(t){p(U),D=!1},d(t){t&&n(s),t&&n(h),U&&U.d(t),t&&n(j),I=!1,T()}}}let N=!1;function _(t,s,e){let a,i;j(t,I,(t=>e(1,a=t))),j(t,T,(t=>e(2,i=t)));let{i:l}=s;return t.$$set=t=>{"i"in t&&e(0,l=t.i)},[l,a,i,()=>{a.forEach((t=>{t.edit=!1,t.ready=!1,t.steps.length>0&&t.steps.forEach((t=>{t.editDesc=!1,t.editCode=!1}))})),D(I,a[l].edit=!1,a),D(I,a[l].ready=!0,a)},function(){a[l].title=this.value,I.set(a),e(0,l)}]}export default class extends t{constructor(t){super(),s(this,t,_,L,e,{i:0})}}
