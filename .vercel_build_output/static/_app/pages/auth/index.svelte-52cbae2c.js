import{S as oe,i as ne,s as ie,e as w,k as V,c as y,n as R,b as f,F as h,f as _,Y as H,H as z,d as c,J as Z,t as L,a as E,g as P,G as p,D as G,E as W,_ as ue,h as ae,l as x,T as fe,al as ce,U as de,V as $,I as ee}from"../../chunks/vendor-52b416c4.js";function te(o){let e,t,r,i,u;return{c(){e=w("input"),t=V(),r=w("input"),this.h()},l(l){e=y(l,"INPUT",{class:!0,placeholder:!0,type:!0}),t=R(l),r=y(l,"INPUT",{class:!0,placeholder:!0,type:!0}),this.h()},h(){f(e,"class","w-full rounded mb-5"),f(e,"placeholder","Display Name"),f(e,"type","text"),h(e,"border-red-700",o[0]===!0),h(e,"bg-red-200",o[0]===!0),f(r,"class","w-full rounded mb-5"),f(r,"placeholder","Email"),f(r,"type","text"),h(r,"border-red-700",o[0]===!0),h(r,"bg-red-200",o[0]===!0)},m(l,s){_(l,e,s),H(e,o[6]),_(l,t,s),_(l,r,s),H(r,o[7]),i||(u=[z(e,"input",o[16]),z(r,"input",o[17])],i=!0)},p(l,s){s&64&&e.value!==l[6]&&H(e,l[6]),s&1&&h(e,"border-red-700",l[0]===!0),s&1&&h(e,"bg-red-200",l[0]===!0),s&128&&r.value!==l[7]&&H(r,l[7]),s&1&&h(r,"border-red-700",l[0]===!0),s&1&&h(r,"bg-red-200",l[0]===!0)},d(l){l&&c(e),l&&c(t),l&&c(r),i=!1,Z(u)}}}function le(o){let e,t;return{c(){e=w("span"),t=L("Error, I think pane zvaitika"),this.h()},l(r){e=y(r,"SPAN",{class:!0});var i=E(e);t=P(i,"Error, I think pane zvaitika"),i.forEach(c),this.h()},h(){f(e,"class","text-red-700 block mb-5")},m(r,i){_(r,e,i),p(e,t)},d(r){r&&c(e)}}}function pe(o){let e,t,r;function i(s,a){return s[3]?me:_e}let u=i(o),l=u(o);return{c(){e=w("button"),l.c(),this.h()},l(s){e=y(s,"BUTTON",{class:!0});var a=E(e);l.l(a),a.forEach(c),this.h()},h(){f(e,"class","px-6 py-2 text-white rounded hover:bg-pink-500"),h(e,"bg-pink-700",!o[3]),h(e,"bg-pink-300",o[3])},m(s,a){_(s,e,a),l.m(e,null),t||(r=z(e,"click",o[12]),t=!0)},p(s,a){u!==(u=i(s))&&(l.d(1),l=u(s),l&&(l.c(),l.m(e,null))),a&8&&h(e,"bg-pink-700",!s[3]),a&8&&h(e,"bg-pink-300",s[3])},d(s){s&&c(e),l.d(),t=!1,r()}}}function he(o){let e,t,r;function i(s,a){return s[3]?ke:be}let u=i(o),l=u(o);return{c(){e=w("button"),l.c(),this.h()},l(s){e=y(s,"BUTTON",{class:!0});var a=E(e);l.l(a),a.forEach(c),this.h()},h(){f(e,"class","px-6 py-2 text-white rounded hover:bg-pink-500"),h(e,"bg-pink-700",!o[3]),h(e,"bg-pink-300",o[3])},m(s,a){_(s,e,a),l.m(e,null),t||(r=z(e,"click",o[10]),t=!0)},p(s,a){u!==(u=i(s))&&(l.d(1),l=u(s),l&&(l.c(),l.m(e,null))),a&8&&h(e,"bg-pink-700",!s[3]),a&8&&h(e,"bg-pink-300",s[3])},d(s){s&&c(e),l.d(),t=!1,r()}}}function _e(o){let e;return{c(){e=L("Register")},l(t){e=P(t,"Register")},m(t,r){_(t,e,r)},d(t){t&&c(e)}}}function me(o){let e;return{c(){e=L("...")},l(t){e=P(t,"...")},m(t,r){_(t,e,r)},d(t){t&&c(e)}}}function be(o){let e;return{c(){e=L("Login")},l(t){e=P(t,"Login")},m(t,r){_(t,e,r)},d(t){t&&c(e)}}}function ke(o){let e;return{c(){e=L("...")},l(t){e=P(t,"...")},m(t,r){_(t,e,r)},d(t){t&&c(e)}}}function ve(o){let e,t,r,i,u;return{c(){e=L(`Already have an Account?\r
    `),t=w("a"),r=L("Login"),this.h()},l(l){e=P(l,`Already have an Account?\r
    `),t=y(l,"A",{href:!0});var s=E(t);r=P(s,"Login"),s.forEach(c),this.h()},h(){f(t,"href","")},m(l,s){_(l,e,s),_(l,t,s),p(t,r),i||(u=z(t,"click",o[14]),i=!0)},p:ee,d(l){l&&c(e),l&&c(t),i=!1,u()}}}function ge(o){let e,t,r,i,u;return{c(){e=L(`Don't have an Account?\r
    `),t=w("a"),r=L("Register"),this.h()},l(l){e=P(l,`Don't have an Account?\r
    `),t=y(l,"A",{href:!0});var s=E(t);r=P(s,"Register"),s.forEach(c),this.h()},h(){f(t,"href","")},m(l,s){_(l,e,s),_(l,t,s),p(t,r),i||(u=z(t,"click",o[13]),i=!0)},p:ee,d(l){l&&c(e),l&&c(t),i=!1,u()}}}function re(o){let e,t,r,i,u,l,s,a,b,m;return{c(){e=w("div"),t=w("div"),r=G("svg"),i=G("path"),u=V(),l=w("span"),s=L("Login successfull"),this.h()},l(A){e=y(A,"DIV",{class:!0});var v=E(e);t=y(v,"DIV",{class:!0});var T=E(t);r=W(T,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var j=E(r);i=W(j,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),E(i).forEach(c),j.forEach(c),T.forEach(c),u=R(v),l=y(v,"SPAN",{class:!0});var M=E(l);s=P(M,"Login successfull"),M.forEach(c),v.forEach(c),this.h()},h(){f(i,"stroke-linecap","round"),f(i,"stroke-linejoin","round"),f(i,"stroke-width","2"),f(i,"d","M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"),f(r,"xmlns","http://www.w3.org/2000/svg"),f(r,"class","h-8 w-8 "),f(r,"fill","none"),f(r,"viewBox","0 0 24 24"),f(r,"stroke","currentColor"),f(t,"class","p-2 border-green-700 border-2 mr-3 rounded-full flex justify-center items-center"),f(l,"class","text-xl"),f(e,"class","flex items-center justify-center mx-auto md:max-w-md w-full bg-green-100 rounded mb-16 shadow-lg text text-green-600 p-5")},m(A,v){_(A,e,v),p(e,t),p(t,r),p(r,i),p(e,u),p(e,l),p(l,s),b||(m=ue(a=o[11].call(null,e)),b=!0)},d(A){A&&c(e),b=!1,m()}}}function se(o){let e,t,r,i,u,l,s,a;return{c(){e=w("div"),t=w("div"),r=G("svg"),i=G("path"),u=V(),l=w("span"),s=L("An Error has occured: "),a=L(o[2]),this.h()},l(b){e=y(b,"DIV",{class:!0});var m=E(e);t=y(m,"DIV",{class:!0});var A=E(t);r=W(A,"svg",{xmlns:!0,class:!0,fill:!0,viewBox:!0,stroke:!0});var v=E(r);i=W(v,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),E(i).forEach(c),v.forEach(c),A.forEach(c),u=R(m),l=y(m,"SPAN",{class:!0});var T=E(l);s=P(T,"An Error has occured: "),a=P(T,o[2]),T.forEach(c),m.forEach(c),this.h()},h(){f(i,"stroke-linecap","round"),f(i,"stroke-linejoin","round"),f(i,"stroke-width","2"),f(i,"d","M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"),f(r,"xmlns","http://www.w3.org/2000/svg"),f(r,"class","h-8 w-8 "),f(r,"fill","none"),f(r,"viewBox","0 0 24 24"),f(r,"stroke","currentColor"),f(t,"class","p-2 border-red-700 border-2 mr-3 rounded-full flex justify-center items-center"),f(l,"class","text-xl"),f(e,"class","flex items-center justify-center mx-auto md:max-w-md w-full bg-red-100 rounded mb-16 shadow-lg text text-red-600 p-5")},m(b,m){_(b,e,m),p(e,t),p(t,r),p(r,i),p(e,u),p(e,l),p(l,s),p(l,a)},p(b,m){m&4&&ae(a,b[2])},d(b){b&&c(e)}}}function we(o){let e,t,r,i,u,l,s,a,b,m,A,v,T,j,M,C,O,J,Y,q,g=!o[8]&&te(o),k=o[0]===!0&&le();function S(n,d){return n[8]?he:pe}let B=S(o),D=B(o);function K(n,d){return n[8]?ge:ve}let F=K(o),U=F(o),N=o[1]&&re(o),I=o[0]&&se(o);return{c(){e=w("div"),t=w("h3"),r=L("Login"),i=V(),u=w("input"),l=V(),g&&g.c(),s=V(),a=w("input"),b=V(),k&&k.c(),m=V(),D.c(),T=V(),j=w("div"),U.c(),M=V(),N&&N.c(),C=V(),I&&I.c(),O=x(),this.h()},l(n){e=y(n,"DIV",{class:!0});var d=E(e);t=y(d,"H3",{class:!0});var Q=E(t);r=P(Q,"Login"),Q.forEach(c),i=R(d),u=y(d,"INPUT",{class:!0,placeholder:!0,type:!0}),l=R(d),g&&g.l(d),s=R(d),a=y(d,"INPUT",{class:!0,placeholder:!0,type:!0}),b=R(d),k&&k.l(d),m=R(d),D.l(d),d.forEach(c),T=R(n),j=y(n,"DIV",{class:!0});var X=E(j);U.l(X),X.forEach(c),M=R(n),N&&N.l(n),C=R(n),I&&I.l(n),O=x(),this.h()},h(){f(t,"class","text-center text-2xl mb-5"),f(u,"class","w-full rounded mb-5"),f(u,"placeholder",o[9]),f(u,"type","text"),h(u,"border-red-700",o[0]===!0),h(u,"bg-red-200",o[0]===!0),f(a,"class","w-full rounded mb-5"),f(a,"placeholder","Password"),f(a,"type","password"),h(a,"border-red-700",o[0]===!0),h(a,"bg-red-200",o[0]===!0),f(e,"class","mx-auto p-5 md:max-w-md w-full bg-gray-100 rounded mb-16 shadow-lg"),f(j,"class","text-center")},m(n,d){_(n,e,d),p(e,t),p(t,r),p(e,i),p(e,u),H(u,o[4]),p(e,l),g&&g.m(e,null),p(e,s),p(e,a),H(a,o[5]),p(e,b),k&&k.m(e,null),p(e,m),D.m(e,null),_(n,T,d),_(n,j,d),U.m(j,null),_(n,M,d),N&&N.m(n,d),_(n,C,d),I&&I.m(n,d),_(n,O,d),J=!0,Y||(q=[z(u,"input",o[15]),z(a,"input",o[18])],Y=!0)},p(n,[d]){(!J||d&512)&&f(u,"placeholder",n[9]),d&16&&u.value!==n[4]&&H(u,n[4]),d&1&&h(u,"border-red-700",n[0]===!0),d&1&&h(u,"bg-red-200",n[0]===!0),n[8]?g&&(g.d(1),g=null):g?g.p(n,d):(g=te(n),g.c(),g.m(e,s)),d&32&&a.value!==n[5]&&H(a,n[5]),d&1&&h(a,"border-red-700",n[0]===!0),d&1&&h(a,"bg-red-200",n[0]===!0),n[0]===!0?k||(k=le(),k.c(),k.m(e,m)):k&&(k.d(1),k=null),B===(B=S(n))&&D?D.p(n,d):(D.d(1),D=B(n),D&&(D.c(),D.m(e,null))),F===(F=K(n))&&U?U.p(n,d):(U.d(1),U=F(n),U&&(U.c(),U.m(j,null))),n[1]?N||(N=re(n),N.c(),N.m(C.parentNode,C)):N&&(N.d(1),N=null),n[0]?I?I.p(n,d):(I=se(n),I.c(),I.m(O.parentNode,O)):I&&(I.d(1),I=null)},i(n){J||(fe(()=>{v&&v.end(1),A=de(e,$,{}),A.start()}),J=!0)},o(n){A&&A.invalidate(),v=ce(e,$,{}),J=!1},d(n){n&&c(e),g&&g.d(),k&&k.d(),D.d(),n&&v&&v.end(),n&&c(T),n&&c(j),U.d(),n&&c(M),N&&N.d(n),n&&c(C),I&&I.d(n),n&&c(O),Y=!1,Z(q)}}}async function Ae({page:o,fetch:e,session:t,context:r}){return t?{status:302,redirect:"/"}:{}}function ye(o,e,t){let r=!1,i=!1,u="",l=!1,s="",a="",b="",m="",A=!0,v="Username or Email";async function T(){t(3,l=!0);let k={username:s,password:a};try{const S=await fetch("/auth/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)});console.log(S);const B=await S.json();S.status===200?(console.log(S),console.log("res is okay"),console.log(B),t(0,r=!1),t(3,l=!1),t(1,i=!0),setTimeout(()=>{window.location="/"},2001)):(t(0,r=!0),t(3,l=!1),t(2,u="Wabhaiza Email kana Password, hameno."))}catch(S){console.log("ERRRR"),console.error(S),t(0,r=!0),t(3,l=!1),t(2,u="Check Your Internet Connection")}}function j(){setTimeout(()=>{t(1,i=!1)},2e3)}async function M(){let k={username:s,email:m,password:a,role:"author"};const B=await(await fetch("/auth/register",{method:"POST",body:JSON.stringify(k)})).json();return console.log(B.body.message),{props:{data:B}}}function C(){t(8,A=!1),t(9,v="Username")}function O(){t(8,A=!0)}function J(){s=this.value,t(4,s)}function Y(){b=this.value,t(6,b)}function q(){m=this.value,t(7,m)}function g(){a=this.value,t(5,a)}return[r,i,u,l,s,a,b,m,A,v,T,j,M,C,O,J,Y,q,g]}class Ie extends oe{constructor(e){super();ne(this,e,ye,we,ie,{})}}export{Ie as default,Ae as load};
