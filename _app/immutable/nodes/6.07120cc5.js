import{s as S,v as Y,f as $,g as y,h as I,d as g,j as p,i as k,G as O,w as Z,x,y as ee,O as te,p as J,a as w,c as M,k as B,z as L,M as le,C as Q,P as W,e as V,I as se,K as ae,E as ne,r as ie,D as oe}from"../chunks/scheduler.bada1be8.js";import{S as P,i as A,a as d,t as b,h as re,b as C,d as D,m as R,g as N,c as T,e as G}from"../chunks/index.907cf1c1.js";import"../chunks/paths.a406331b.js";import{e as U}from"../chunks/each.e59479a4.js";/* empty css                                                    */import{c as ce}from"../chunks/clickOutside.3b964304.js";import{P as X}from"../chunks/Picture.5e2faf87.js";import{a as ue,b as fe,c as me,d as _e,e as ge,f as he,g as de}from"../chunks/screenWidth.store.974bf542.js";function pe(o){let l,i,s,a;const r=o[2].default,e=Y(r,o,o[1],null);return{c(){l=$("dialog"),e&&e.c(),this.h()},l(t){l=y(t,"DIALOG",{class:!0});var n=I(l);e&&e.l(n),n.forEach(g),this.h()},h(){p(l,"class","svelte-muq4si")},m(t,n){k(t,l,n),e&&e.m(l,null),o[4](l),i=!0,s||(a=O(l,"close",o[3]),s=!0)},p(t,[n]){e&&e.p&&(!i||n&2)&&Z(e,r,t,t[1],i?ee(r,t[1],n,null):x(t[1]),null)},i(t){i||(d(e,t),i=!0)},o(t){b(e,t),i=!1},d(t){t&&g(l),e&&e.d(t),o[4](null),s=!1,a()}}}function be(o,l,i){let{$$slots:s={},$$scope:a}=l,{dialog:r}=l;function e(n){te.call(this,o,n)}function t(n){J[n?"unshift":"push"](()=>{r=n,i(0,r)})}return o.$$set=n=>{"dialog"in n&&i(0,r=n.dialog),"$$scope"in n&&i(1,a=n.$$scope)},[r,a,s,e,t]}class ve extends P{constructor(l){super(),A(this,l,be,pe,S,{dialog:0})}}function j(o,l,i){const s=o.slice();return s[9]=l[i],s}function z(o,l,i){const s=o.slice();return s[12]=l[i],s[14]=i,s}function H(o){let l,i,s,a,r;return i=new X({props:{meta:o[12]}}),{c(){l=$("button"),C(i.$$.fragment),this.h()},l(e){l=y(e,"BUTTON",{class:!0,"aria-label":!0});var t=I(l);D(i.$$.fragment,t),t.forEach(g),this.h()},h(){p(l,"class","gallery__column__image svelte-1akq6lf"),p(l,"aria-label","Select this image")},m(e,t){k(e,l,t),R(i,l,null),s=!0,a||(r=O(l,"click",function(){W(o[4](o[12]))&&o[4](o[12]).apply(this,arguments)}),a=!0)},p(e,t){o=e;const n={};t&8&&(n.meta=o[12]),i.$set(n)},i(e){s||(d(i.$$.fragment,e),s=!0)},o(e){b(i.$$.fragment,e),s=!1},d(e){e&&g(l),G(i),a=!1,r()}}}function K(o){let l,i,s=U(o[9]),a=[];for(let e=0;e<s.length;e+=1)a[e]=H(z(o,s,e));const r=e=>b(a[e],1,1,()=>{a[e]=null});return{c(){l=$("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){l=y(e,"DIV",{class:!0});var t=I(l);for(let n=0;n<a.length;n+=1)a[n].l(t);t.forEach(g),this.h()},h(){p(l,"class","gallery__column svelte-1akq6lf")},m(e,t){k(e,l,t);for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(l,null);i=!0},p(e,t){if(t&24){s=U(e[9]);let n;for(n=0;n<s.length;n+=1){const h=z(e,s,n);a[n]?(a[n].p(h,t),d(a[n],1)):(a[n]=H(h),a[n].c(),d(a[n],1),a[n].m(l,null))}for(N(),n=s.length;n<a.length;n+=1)r(n);T()}},i(e){if(!i){for(let t=0;t<s.length;t+=1)d(a[t]);i=!0}},o(e){a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)b(a[t]);i=!1},d(e){e&&g(l),Q(a,e)}}}function F(o){let l,i,s,a,r;return i=new X({props:{meta:o[1]}}),{c(){l=$("div"),C(i.$$.fragment),this.h()},l(e){l=y(e,"DIV",{class:!0});var t=I(l);D(i.$$.fragment,t),t.forEach(g),this.h()},h(){p(l,"class","dialog__image svelte-1akq6lf")},m(e,t){k(e,l,t),R(i,l,null),s=!0,a||(r=[se(ce.call(null,l)),O(l,"click_outside",function(){W(o[2].close())&&o[2].close().apply(this,arguments)})],a=!0)},p(e,t){o=e;const n={};t&2&&(n.meta=o[1]),i.$set(n)},i(e){s||(d(i.$$.fragment,e),s=!0)},o(e){b(i.$$.fragment,e),s=!1},d(e){e&&g(l),G(i),a=!1,ae(r)}}}function $e(o){let l,i,s=o[1]&&F(o);return{c(){s&&s.c(),l=V()},l(a){s&&s.l(a),l=V()},m(a,r){s&&s.m(a,r),k(a,l,r),i=!0},p(a,r){a[1]?s?(s.p(a,r),r&2&&d(s,1)):(s=F(a),s.c(),d(s,1),s.m(l.parentNode,l)):s&&(N(),b(s,1,1,()=>{s=null}),T())},i(a){i||(d(s),i=!0)},o(a){b(s),i=!1},d(a){a&&g(l),s&&s.d(a)}}}function ye(o){let l,i,s,a,r,e=U(o[3]),t=[];for(let u=0;u<e.length;u+=1)t[u]=K(j(o,e,u));const n=u=>b(t[u],1,1,()=>{t[u]=null});function h(u){o[6](u)}let m={$$slots:{default:[$e]},$$scope:{ctx:o}};return o[2]!==void 0&&(m.dialog=o[2]),s=new ve({props:m}),J.push(()=>re(s,"dialog",h)),{c(){l=$("section");for(let u=0;u<t.length;u+=1)t[u].c();i=w(),C(s.$$.fragment),this.h()},l(u){l=y(u,"SECTION",{class:!0});var c=I(l);for(let f=0;f<t.length;f+=1)t[f].l(c);i=M(c),D(s.$$.fragment,c),c.forEach(g),this.h()},h(){p(l,"class","gallery svelte-1akq6lf"),B(l,"--columns",o[0])},m(u,c){k(u,l,c);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(l,null);L(l,i),R(s,l,null),r=!0},p(u,[c]){if(c&24){e=U(u[3]);let _;for(_=0;_<e.length;_+=1){const E=j(u,e,_);t[_]?(t[_].p(E,c),d(t[_],1)):(t[_]=K(E),t[_].c(),d(t[_],1),t[_].m(l,i))}for(N(),_=e.length;_<t.length;_+=1)n(_);T()}const f={};c&32774&&(f.$$scope={dirty:c,ctx:u}),!a&&c&4&&(a=!0,f.dialog=u[2],le(()=>a=!1)),s.$set(f),c&1&&B(l,"--columns",u[0])},i(u){if(!r){for(let c=0;c<e.length;c+=1)d(t[c]);d(s.$$.fragment,u),r=!0}},o(u){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)b(t[c]);b(s.$$.fragment,u),r=!1},d(u){u&&g(l),Q(t,u),G(s)}}}function ke(o,l,i){let s,a,{imageURLs:r}=l,{columns:e=5}=l;const t=(c,f)=>{const _=Math.floor(s/f),E=s%f,q=[];for(let v=0;v<f;v++)q[v]=c.slice(v*_,(v+1)*_);for(let v=0;v<E;v++)q[v].push(c[_*f+v]);return q};let n,h;function m(c){return i(1,n=c),f=>h.showModal()}function u(c){h=c,i(2,h)}return o.$$set=c=>{"imageURLs"in c&&i(5,r=c.imageURLs),"columns"in c&&i(0,e=c.columns)},o.$$.update=()=>{o.$$.dirty&32&&(s=r.length),o.$$.dirty&33&&i(3,a=t(r,e))},[e,n,h,a,m,r,u]}class Ie extends P{constructor(l){super(),A(this,l,ke,ye,S,{imageURLs:5,columns:0})}}function Le(o){let l,i,s,a,r="Gallery",e,t,n,h;return n=new Ie({props:{imageURLs:o[0].imageURLs,columns:o[1]}}),{c(){l=$("meta"),i=w(),s=$("main"),a=$("h1"),a.textContent=r,e=w(),t=$("div"),C(n.$$.fragment),this.h()},l(m){const u=ne("svelte-jyhfh7",document.head);l=y(u,"META",{name:!0,content:!0}),u.forEach(g),i=M(m),s=y(m,"MAIN",{class:!0});var c=I(s);a=y(c,"H1",{class:!0,"data-svelte-h":!0}),ie(a)!=="svelte-14azyx4"&&(a.textContent=r),e=M(c),t=y(c,"DIV",{class:!0});var f=I(t);D(n.$$.fragment,f),f.forEach(g),c.forEach(g),this.h()},h(){document.title="Gallery",p(l,"name","description"),p(l,"content","A look into our 2022-2023 school year."),p(a,"class","svelte-182lo6f"),p(t,"class","gallery__image-grid svelte-182lo6f"),p(s,"class","gallery svelte-182lo6f")},m(m,u){L(document.head,l),k(m,i,u),k(m,s,u),L(s,a),L(s,e),L(s,t),R(n,t,null),h=!0},p(m,[u]){const c={};u&1&&(c.imageURLs=m[0].imageURLs),u&2&&(c.columns=m[1]),n.$set(c)},i(m){h||(d(n.$$.fragment,m),h=!0)},o(m){b(n.$$.fragment,m),h=!1},d(m){m&&(g(i),g(s)),g(l),G(n)}}}function Ee(o,l,i){let{data:s}=l,a=5;function r(t){return n=>{n&&i(1,a=t)}}const e=[];return e.push(ue.subscribe(r(4))),e.push(fe.subscribe(r(4))),e.push(me.subscribe(r(3))),e.push(_e.subscribe(r(3))),e.push(ge.subscribe(r(2))),e.push(he.subscribe(r(2))),e.push(de.subscribe(r(1))),oe(()=>{e.forEach(t=>t())}),o.$$set=t=>{"data"in t&&i(0,s=t.data)},[s,a]}class Se extends P{constructor(l){super(),A(this,l,Ee,Le,S,{data:0})}}export{Se as component};
