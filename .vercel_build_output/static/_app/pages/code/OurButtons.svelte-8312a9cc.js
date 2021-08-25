import{S as e,i as s,s as t,e as l,k as a,c as r,a as o,n as i,d as n,b as c,f as d,F as h,D as u,G as p,H as f,l as v,J as m,K as w}from"../../chunks/vendor-233f8ef4.js";import{c as g,d as k}from"../../chunks/store-098d49d4.js";function x(e){let s,t,u=e[3][e[0]].ready&&b(e),p=e[3][e[0]].steps.length>0&&E(e);return{c(){s=l("div"),u&&u.c(),t=a(),p&&p.c(),this.h()},l(e){s=r(e,"DIV",{class:!0});var l=o(s);u&&u.l(l),t=i(l),p&&p.l(l),l.forEach(n),this.h()},h(){c(s,"class","fab")},m(e,l){d(e,s,l),u&&u.m(s,null),h(s,t),p&&p.m(s,null)},p(e,l){e[3][e[0]].ready?u?u.p(e,l):(u=b(e),u.c(),u.m(s,t)):u&&(u.d(1),u=null),e[3][e[0]].steps.length>0?p?p.p(e,l):(p=E(e),p.c(),p.m(s,null)):p&&(p.d(1),p=null)},d(e){e&&n(s),u&&u.d(),p&&p.d()}}}function b(e){let s,t,a,i,v,m;return{c(){s=l("div"),t=l("button"),a=u("svg"),i=u("path"),this.h()},l(e){s=r(e,"DIV",{id:!0});var l=o(s);t=r(l,"BUTTON",{class:!0});var c=o(t);a=r(c,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0},1);var d=o(a);i=r(d,"path",{"fill-rule":!0,d:!0,"clip-rule":!0},1),o(i).forEach(n),d.forEach(n),c.forEach(n),l.forEach(n),this.h()},h(){c(i,"fill-rule","evenodd"),c(i,"d","M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"),c(i,"clip-rule","evenodd"),c(a,"xmlns","http://www.w3.org/2000/svg"),c(a,"class","h-8 w-8"),c(a,"viewBox","0 0 20 20"),c(a,"fill","currentColor"),c(t,"class","text-white bg-purple-700 rounded-full w-14 h-14 grid place-items-center"),c(s,"id","subject-btn")},m(l,r){d(l,s,r),h(s,t),h(t,a),h(a,i),v||(m=p(t,"click",e[4]),v=!0)},p:f,d(e){e&&n(s),v=!1,m()}}}function E(e){let s,t,l=e[3][e[0]].steps[e[1]].editDesc&&D(e),r=e[3][e[0]].steps[e[1]].editCode&&B(e);return{c(){l&&l.c(),s=a(),r&&r.c(),t=v()},l(e){l&&l.l(e),s=i(e),r&&r.l(e),t=v()},m(e,a){l&&l.m(e,a),d(e,s,a),r&&r.m(e,a),d(e,t,a)},p(e,a){e[3][e[0]].steps[e[1]].editDesc?l?l.p(e,a):(l=D(e),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null),e[3][e[0]].steps[e[1]].editCode?r?r.p(e,a):(r=B(e),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},d(e){l&&l.d(e),e&&n(s),r&&r.d(e),e&&n(t)}}}function D(e){let s,t,a,i,v,m;return{c(){s=l("div"),t=l("button"),a=u("svg"),i=u("path"),this.h()},l(e){s=r(e,"DIV",{id:!0});var l=o(s);t=r(l,"BUTTON",{class:!0});var c=o(t);a=r(c,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var d=o(a);i=r(d,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),o(i).forEach(n),d.forEach(n),c.forEach(n),l.forEach(n),this.h()},h(){c(i,"stroke-linecap","round"),c(i,"stroke-linejoin","round"),c(i,"stroke-width","2"),c(i,"d","M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"),c(a,"xmlns","http://www.w3.org/2000/svg"),c(a,"class","h-8 w-8"),c(a,"fill","none"),c(a,"viewBox","0 0 24 24"),c(a,"stroke","currentColor"),c(t,"class","text-white bg-purple-700 rounded-full w-14 h-14 grid place-items-center"),c(s,"id","code-btn")},m(l,r){d(l,s,r),h(s,t),h(t,a),h(a,i),v||(m=p(t,"click",e[5]),v=!0)},p:f,d(e){e&&n(s),v=!1,m()}}}function B(e){let s,t,a,i,v,m;return{c(){s=l("div"),t=l("button"),a=u("svg"),i=u("path"),this.h()},l(e){s=r(e,"DIV",{id:!0});var l=o(s);t=r(l,"BUTTON",{class:!0});var c=o(t);a=r(c,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0},1);var d=o(a);i=r(d,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),o(i).forEach(n),d.forEach(n),c.forEach(n),l.forEach(n),this.h()},h(){c(i,"stroke-linecap","round"),c(i,"stroke-linejoin","round"),c(i,"stroke-width","2"),c(i,"d","M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"),c(a,"xmlns","http://www.w3.org/2000/svg"),c(a,"class","h-8 w-8"),c(a,"fill","none"),c(a,"viewBox","0 0 24 24"),c(a,"stroke","currentColor"),c(t,"class","text-white bg-purple-700 rounded-full w-14 h-14 grid place-items-center"),c(s,"id","save-btn")},m(l,r){d(l,s,r),h(s,t),h(t,a),h(a,i),v||(m=p(t,"click",e[6]),v=!0)},p:f,d(e){e&&n(s),v=!1,m()}}}function C(e){let s,t=e[2].showFabs&&x(e);return{c(){t&&t.c(),s=v()},l(e){t&&t.l(e),s=v()},m(e,l){t&&t.m(e,l),d(e,s,l)},p(e,[l]){e[2].showFabs?t?t.p(e,l):(t=x(e),t.c(),t.m(s.parentNode,s)):t&&(t.d(1),t=null)},i:f,o:f,d(e){t&&t.d(e),e&&n(s)}}}function j(e,s,t){let l,a,r;m(e,k,(e=>t(2,a=e))),m(e,g,(e=>t(3,r=e)));let{i:o=0}=s;function i(){r.forEach((e=>{e.edit=!1,e.ready=!1,w(k,a.edit=!1,a),e.steps.length>0&&e.steps.forEach((e=>{e.editDesc=!1,e.editCode=!1}))}))}return e.$$set=e=>{"i"in e&&t(0,o=e.i)},t(1,l=0),[o,l,a,r,function(e){i(),w(g,r[o].steps=[...r[o].steps,{subtitle:"",desc:"",code:"",codeDOM:"",codeLang:"",editDesc:!0,editCode:!1}],r),t(1,l=r[o].steps.length-1),w(k,a.update=!0,a)},function(){i(),w(g,r[o].steps[l].editCode=!0,r),w(k,a.update=!0,a)},function(){i(),w(g,r[o].steps[l].editCode=!1,r),w(g,r[o].ready=!0,r),w(k,a.update=!0,a)}]}class M extends e{constructor(e){super(),s(this,e,j,C,t,{i:0})}}export{M as default};