import{s as q,v as Y,f as y,g as $,h as E,d as g,j as v,i as k,G as N,w as Z,x,y as ee,M as te,p as F,a as M,c as j,k as z,z as L,K as le,C as J,O as W,e as B,Q as se,N as ae,E as ne,r as ie,D as oe}from"../chunks/scheduler.4493c153.js";import{S as O,i as S,a as d,t as p,h as re,b as C,d as U,m as D,g as A,c as T,e as R}from"../chunks/index.7c64038e.js";import{b as ce}from"../chunks/paths.930e264b.js";import{e as w}from"../chunks/each.e59479a4.js";import{I as X}from"../chunks/Image.d44f24eb.js";import{a as ue,b as fe,c as me,d as _e,e as ge,f as he,g as de}from"../chunks/screenWidth.store.7dbbbb15.js";function pe(o){const t=i=>{o&&!o.contains(i.target)&&!i.defaultPrevented&&o.dispatchEvent(new CustomEvent("click_outside"))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function be(o){let t,i,s,n;const r=o[2].default,e=Y(r,o,o[1],null);return{c(){t=y("dialog"),e&&e.c(),this.h()},l(l){t=$(l,"DIALOG",{class:!0});var a=E(t);e&&e.l(a),a.forEach(g),this.h()},h(){v(t,"class","svelte-muq4si")},m(l,a){k(l,t,a),e&&e.m(t,null),o[4](t),i=!0,s||(n=N(t,"close",o[3]),s=!0)},p(l,[a]){e&&e.p&&(!i||a&2)&&Z(e,r,l,l[1],i?ee(r,l[1],a,null):x(l[1]),null)},i(l){i||(d(e,l),i=!0)},o(l){p(e,l),i=!1},d(l){l&&g(t),e&&e.d(l),o[4](null),s=!1,n()}}}function ve(o,t,i){let{$$slots:s={},$$scope:n}=t,{dialog:r}=t;function e(a){te.call(this,o,a)}function l(a){F[a?"unshift":"push"](()=>{r=a,i(0,r)})}return o.$$set=a=>{"dialog"in a&&i(0,r=a.dialog),"$$scope"in a&&i(1,n=a.$$scope)},[r,n,s,e,l]}class ye extends O{constructor(t){super(),S(this,t,ve,be,q,{dialog:0})}}function P(o,t,i){const s=o.slice();return s[9]=t[i],s}function V(o,t,i){const s=o.slice();return s[12]=t[i],s}function H(o){let t,i,s,n,r;return i=new X({props:{src:o[12],loading:"lazy"}}),{c(){t=y("button"),C(i.$$.fragment),this.h()},l(e){t=$(e,"BUTTON",{class:!0});var l=E(t);U(i.$$.fragment,l),l.forEach(g),this.h()},h(){v(t,"class","gallery__column__image svelte-uvwftf")},m(e,l){k(e,t,l),D(i,t,null),s=!0,n||(r=N(t,"click",function(){W(o[4](o[12]))&&o[4](o[12]).apply(this,arguments)}),n=!0)},p(e,l){o=e;const a={};l&8&&(a.src=o[12]),i.$set(a)},i(e){s||(d(i.$$.fragment,e),s=!0)},o(e){p(i.$$.fragment,e),s=!1},d(e){e&&g(t),R(i),n=!1,r()}}}function K(o){let t,i,s=w(o[9]),n=[];for(let e=0;e<s.length;e+=1)n[e]=H(V(o,s,e));const r=e=>p(n[e],1,1,()=>{n[e]=null});return{c(){t=y("div");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=$(e,"DIV",{class:!0});var l=E(t);for(let a=0;a<n.length;a+=1)n[a].l(l);l.forEach(g),this.h()},h(){v(t,"class","gallery__column svelte-uvwftf")},m(e,l){k(e,t,l);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,null);i=!0},p(e,l){if(l&24){s=w(e[9]);let a;for(a=0;a<s.length;a+=1){const h=V(e,s,a);n[a]?(n[a].p(h,l),d(n[a],1)):(n[a]=H(h),n[a].c(),d(n[a],1),n[a].m(t,null))}for(A(),a=s.length;a<n.length;a+=1)r(a);T()}},i(e){if(!i){for(let l=0;l<s.length;l+=1)d(n[l]);i=!0}},o(e){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)p(n[l]);i=!1},d(e){e&&g(t),J(n,e)}}}function Q(o){let t,i,s,n,r;return i=new X({props:{src:o[1]}}),{c(){t=y("div"),C(i.$$.fragment),this.h()},l(e){t=$(e,"DIV",{class:!0});var l=E(t);U(i.$$.fragment,l),l.forEach(g),this.h()},h(){v(t,"class","dialog__image svelte-uvwftf")},m(e,l){k(e,t,l),D(i,t,null),s=!0,n||(r=[se(pe.call(null,t)),N(t,"click_outside",function(){W(o[2].close())&&o[2].close().apply(this,arguments)})],n=!0)},p(e,l){o=e;const a={};l&2&&(a.src=o[1]),i.$set(a)},i(e){s||(d(i.$$.fragment,e),s=!0)},o(e){p(i.$$.fragment,e),s=!1},d(e){e&&g(t),R(i),n=!1,ae(r)}}}function $e(o){let t,i,s=o[1]&&Q(o);return{c(){s&&s.c(),t=B()},l(n){s&&s.l(n),t=B()},m(n,r){s&&s.m(n,r),k(n,t,r),i=!0},p(n,r){n[1]?s?(s.p(n,r),r&2&&d(s,1)):(s=Q(n),s.c(),d(s,1),s.m(t.parentNode,t)):s&&(A(),p(s,1,1,()=>{s=null}),T())},i(n){i||(d(s),i=!0)},o(n){p(s),i=!1},d(n){n&&g(t),s&&s.d(n)}}}function ke(o){let t,i,s,n,r,e=w(o[3]),l=[];for(let u=0;u<e.length;u+=1)l[u]=K(P(o,e,u));const a=u=>p(l[u],1,1,()=>{l[u]=null});function h(u){o[6](u)}let m={$$slots:{default:[$e]},$$scope:{ctx:o}};return o[2]!==void 0&&(m.dialog=o[2]),s=new ye({props:m}),F.push(()=>re(s,"dialog",h)),{c(){t=y("section");for(let u=0;u<l.length;u+=1)l[u].c();i=M(),C(s.$$.fragment),this.h()},l(u){t=$(u,"SECTION",{class:!0});var c=E(t);for(let f=0;f<l.length;f+=1)l[f].l(c);i=j(c),U(s.$$.fragment,c),c.forEach(g),this.h()},h(){v(t,"class","gallery svelte-uvwftf"),z(t,"--columns",o[0])},m(u,c){k(u,t,c);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(t,null);L(t,i),D(s,t,null),r=!0},p(u,[c]){if(c&24){e=w(u[3]);let _;for(_=0;_<e.length;_+=1){const I=P(u,e,_);l[_]?(l[_].p(I,c),d(l[_],1)):(l[_]=K(I),l[_].c(),d(l[_],1),l[_].m(t,i))}for(A(),_=e.length;_<l.length;_+=1)a(_);T()}const f={};c&32774&&(f.$$scope={dirty:c,ctx:u}),!n&&c&4&&(n=!0,f.dialog=u[2],le(()=>n=!1)),s.$set(f),c&1&&z(t,"--columns",u[0])},i(u){if(!r){for(let c=0;c<e.length;c+=1)d(l[c]);d(s.$$.fragment,u),r=!0}},o(u){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)p(l[c]);p(s.$$.fragment,u),r=!1},d(u){u&&g(t),J(l,u),R(s)}}}function Ee(o,t,i){let s,n,{imageURLs:r}=t,{columns:e=5}=t;const l=(c,f)=>{const _=Math.floor(s/f),I=s%f,G=[];for(let b=0;b<f;b++)G[b]=c.slice(b*_,(b+1)*_);for(let b=0;b<I;b++)G[b].push(c[_*f+b]);return G};let a,h;function m(c){return i(1,a=c),f=>h.showModal()}function u(c){h=c,i(2,h)}return o.$$set=c=>{"imageURLs"in c&&i(5,r=c.imageURLs),"columns"in c&&i(0,e=c.columns)},o.$$.update=()=>{o.$$.dirty&32&&(s=r.length),o.$$.dirty&33&&i(3,n=l(r,e))},[e,a,h,n,m,r,u]}class Le extends O{constructor(t){super(),S(this,t,Ee,ke,q,{imageURLs:5,columns:0})}}function Ie(o){let t,i,s,n,r="Gallery",e,l,a,h;return a=new Le({props:{imageURLs:o[0].imageURLs.map(o[2]),columns:o[1]}}),{c(){t=y("meta"),i=M(),s=y("main"),n=y("h1"),n.textContent=r,e=M(),l=y("div"),C(a.$$.fragment),this.h()},l(m){const u=ne("svelte-jyhfh7",document.head);t=$(u,"META",{name:!0,content:!0}),u.forEach(g),i=j(m),s=$(m,"MAIN",{class:!0});var c=E(s);n=$(c,"H1",{class:!0,"data-svelte-h":!0}),ie(n)!=="svelte-14azyx4"&&(n.textContent=r),e=j(c),l=$(c,"DIV",{class:!0});var f=E(l);U(a.$$.fragment,f),f.forEach(g),c.forEach(g),this.h()},h(){document.title="Gallery",v(t,"name","description"),v(t,"content","A look into our 2022-2023 school year."),v(n,"class","svelte-qjm7hy"),v(l,"class","gallery__image-grid svelte-qjm7hy"),v(s,"class","gallery svelte-qjm7hy")},m(m,u){L(document.head,t),k(m,i,u),k(m,s,u),L(s,n),L(s,e),L(s,l),D(a,l,null),h=!0},p(m,[u]){const c={};u&1&&(c.imageURLs=m[0].imageURLs.map(m[2])),u&2&&(c.columns=m[1]),a.$set(c)},i(m){h||(d(a.$$.fragment,m),h=!0)},o(m){p(a.$$.fragment,m),h=!1},d(m){m&&(g(i),g(s)),g(t),R(a)}}}function we(o,t,i){let{data:s}=t,n=5;function r(a){return h=>{h&&i(1,n=a)}}const e=[];e.push(ue.subscribe(r(4))),e.push(fe.subscribe(r(4))),e.push(me.subscribe(r(3))),e.push(_e.subscribe(r(3))),e.push(ge.subscribe(r(2))),e.push(he.subscribe(r(2))),e.push(de.subscribe(r(1))),oe(()=>{e.forEach(a=>a())});const l=a=>`${ce}/${a}`;return o.$$set=a=>{"data"in a&&i(0,s=a.data)},[s,n,l]}class je extends O{constructor(t){super(),S(this,t,we,Ie,q,{data:0})}}export{je as component};
