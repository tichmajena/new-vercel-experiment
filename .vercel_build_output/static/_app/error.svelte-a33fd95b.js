import{S as s,i as r,s as a,e as t,t as e,c as o,a as n,g as c,d as u,f as p,G as f,h as l,k as d,l as i,n as m,I as h}from"./chunks/vendor-66f8d0bb.js";function k(s){let r,a,d=s[1].stack+"";return{c(){r=t("pre"),a=e(d)},l(s){r=o(s,"PRE",{});var t=n(r);a=c(t,d),t.forEach(u)},m(s,t){p(s,r,t),f(r,a)},p(s,r){2&r&&d!==(d=s[1].stack+"")&&l(a,d)},d(s){s&&u(r)}}}function v(s){let r,a,v,E,g,x,b,P=s[1].message+"",$=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),v=d(),E=t("p"),g=e(P),x=d(),$&&$.c(),b=i()},l(t){r=o(t,"H1",{});var e=n(r);a=c(e,s[0]),e.forEach(u),v=m(t),E=o(t,"P",{});var p=n(E);g=c(p,P),p.forEach(u),x=m(t),$&&$.l(t),b=i()},m(s,t){p(s,r,t),f(r,a),p(s,v,t),p(s,E,t),f(E,g),p(s,x,t),$&&$.m(s,t),p(s,b,t)},p(s,[r]){1&r&&l(a,s[0]),2&r&&P!==(P=s[1].message+"")&&l(g,P),s[1].stack?$?$.p(s,r):($=k(s),$.c(),$.m(b.parentNode,b)):$&&($.d(1),$=null)},i:h,o:h,d(s){s&&u(r),s&&u(v),s&&u(E),s&&u(x),$&&$.d(s),s&&u(b)}}}function E({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,v,a,{status:0,error:1})}}export{E as load};
