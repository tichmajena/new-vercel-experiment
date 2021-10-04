const p="[A-Za-z$_][0-9A-Za-z$_]*",G=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Z=["true","false","null","undefined","NaN","Infinity"],v=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],C=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],M=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],z=["arguments","this","super","console","window","document","localStorage","module","global"],K=[].concat(M,v,C);function H(e){return e?typeof e=="string"?e:e.source:null}function u(e){return a("(?=",e,")")}function a(...e){return e.map(n=>H(n)).join("")}function X(e){const _=(t,{after:l})=>{const E="</"+t[0].slice(1);return t.input.indexOf(E,l)!==-1},n=p,N={begin:"<>",end:"</>"},c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(t,l)=>{const E=t[0].length+t.index,d=t.input[E];if(d==="<"){l.ignoreMatch();return}d===">"&&(_(t,{after:E})||l.ignoreMatch())}},s={$pattern:p,keyword:G,literal:Z,built_in:K,"variable.language":z},A="[0-9](_?[0-9])*",o=`\\.(${A})`,T="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",S={className:"number",variants:[{begin:`(\\b(${T})((${o})|\\.)?|(${o}))[eE][+-]?(${A})\\b`},{begin:`\\b(${T})\\b((${o})\\b|\\.)?|(${o})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,r],subLanguage:"xml"}},f={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,r],subLanguage:"css"}},R={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]},w=e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),b={className:"comment",variants:[w,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},I=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,f,R,S,e.REGEXP_MODE];r.contains=I.concat({begin:/\{/,end:/\}/,keywords:s,contains:["self"].concat(I)});const y=[].concat(b,r.contains),g=y.concat([{begin:/\(/,end:/\)/,keywords:s,contains:["self"].concat(y)}]),i={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:g},L={variants:[{match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}},{match:[/extends/,/\s+/,a(n,"(",a(/\./,n),")*")],scope:{1:"keyword",3:"title.class.inherited"}}]},U={relevance:0,match:/\b[A-Z][a-z]+([A-Z][a-z]+)*/,className:"title.class",keywords:{_:[...v,...C]}},B={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},D={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[i],illegal:/%/},x={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function k(t){return a("(?!",t.join("|"),")")}const P={match:a(/\b/,k([...M,"super"]),n,u(/\(/)),className:"title.function",relevance:0},$={begin:a(/\./,u(a(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},h={match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},i]},O="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",F={match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,u(O)],className:{1:"keyword",3:"title.function"},contains:[i]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:s,exports:{PARAMS_CONTAINS:g},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),B,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,f,R,b,S,U,{className:"attr",begin:n+u(":"),relevance:0},F,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[b,e.REGEXP_MODE,{className:"function",begin:O,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:g}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:N.begin,end:N.end},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}]},D,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[i,e.inherit(e.TITLE_MODE,{begin:n,className:"title.function"})]},{match:/\.\.\./,relevance:0},$,{match:"\\$"+n,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[i]},P,x,L,h,{match:/\$[(.]/}]}}const Y={name:"javascript",register:X};export{Y as default,Y as javascript};
