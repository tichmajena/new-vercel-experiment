import{S as y,i as x,s as B,N as E,O as C,P,x as h,u as m,D as g,t as z,E as p,a as d,d as _,g as H,b as n,f as b,G as k,e as M,k as N,c as O,n as S,H as T,r as j,w as q,M as A,Z as D}from"./vendor-52b416c4.js";function v(o){let e;const i=o[3].default,t=A(i,o,o[2],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,r){t&&t.m(l,r),e=!0},p(l,r){t&&t.p&&(!e||r&4)&&E(t,i,l,l[2],e?P(i,l[2],r,null):C(l[2]),null)},i(l){e||(h(t,l),e=!0)},o(l){m(t,l),e=!1},d(l){t&&t.d(l)}}}function w(o){let e,i,t,l;return{c(){e=g("svg"),i=g("circle"),t=g("path"),l=z(`\r
    Processing`),this.h()},l(r){e=p(r,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0});var u=d(e);i=p(u,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0}),d(i).forEach(_),t=p(u,"path",{class:!0,fill:!0,d:!0}),d(t).forEach(_),u.forEach(_),l=H(r,`\r
    Processing`),this.h()},h(){n(i,"class","opacity-25"),n(i,"cx","12"),n(i,"cy","12"),n(i,"r","10"),n(i,"stroke","currentColor"),n(i,"stroke-width","4"),n(t,"class","opacity-75"),n(t,"fill","currentColor"),n(t,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),n(e,"class","animate-spin -ml-1 mr-3 h-5 w-5 text-white"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"fill","none"),n(e,"viewBox","0 0 24 24")},m(r,u){b(r,e,u),k(e,i),k(e,t),b(r,l,u)},d(r){r&&_(e),r&&_(l)}}}function G(o){let e,i,t,l,r,u,a=!o[1]&&v(o),s=o[1]&&w();return{c(){e=M("button"),a&&a.c(),i=N(),s&&s.c(),this.h()},l(c){e=O(c,"BUTTON",{type:!0,class:!0});var f=d(e);a&&a.l(f),i=S(f),s&&s.l(f),f.forEach(_),this.h()},h(){n(e,"type","button"),n(e,"class",t="px-6 py-2 text-white rounded bg-pink-700 hover:bg-"+o[0]+"-500 flex m-2")},m(c,f){b(c,e,f),a&&a.m(e,null),k(e,i),s&&s.m(e,null),l=!0,r||(u=T(e,"click",o[4]),r=!0)},p(c,[f]){c[1]?a&&(j(),m(a,1,1,()=>{a=null}),q()):a?(a.p(c,f),f&2&&h(a,1)):(a=v(c),a.c(),h(a,1),a.m(e,i)),c[1]?s||(s=w(),s.c(),s.m(e,null)):s&&(s.d(1),s=null),(!l||f&1&&t!==(t="px-6 py-2 text-white rounded bg-pink-700 hover:bg-"+c[0]+"-500 flex m-2"))&&n(e,"class",t)},i(c){l||(h(a),l=!0)},o(c){m(a),l=!1},d(c){c&&_(e),a&&a.d(),s&&s.d(),r=!1,u()}}}function U(o,e,i){let{$$slots:t={},$$scope:l}=e,{color:r="red"}=e,{loading:u=!1}=e;function a(s){D.call(this,o,s)}return o.$$set=s=>{"color"in s&&i(0,r=s.color),"loading"in s&&i(1,u=s.loading),"$$scope"in s&&i(2,l=s.$$scope)},[r,u,l,t,a]}class Z extends y{constructor(e){super();x(this,e,U,G,B,{color:0,loading:1})}}export{Z as B};
