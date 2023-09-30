import{s as N,v as Z,f as y,g as $,h as E,d as _,j as v,i as k,C as S,w as x,x as ee,y as te,M as se,p as F,a as q,c as j,k as z,z as I,K as le,G as J,N as X,e as B,P as ne,D as ae,o as ie,E as oe,r as re,H as ce}from"../chunks/scheduler.f7f270fa.js";import{S as A,i as O,a as d,t as p,h as ue,b as M,d as U,m as D,g as P,c as T,e as R}from"../chunks/index.1550c679.js";import{b as fe}from"../chunks/paths.cf3aa12f.js";import{e as C}from"../chunks/each.df28e1f8.js";import{I as Y}from"../chunks/Image.01d2590c.js";import{r as me}from"../chunks/index.b30f2e15.js";function ge(o){const t=i=>{o&&!o.contains(i.target)&&!i.defaultPrevented&&o.dispatchEvent(new CustomEvent("click_outside"))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function _e(o){let t,i,l,n;const r=o[2].default,e=Z(r,o,o[1],null);return{c(){t=y("dialog"),e&&e.c(),this.h()},l(s){t=$(s,"DIALOG",{class:!0});var a=E(t);e&&e.l(a),a.forEach(_),this.h()},h(){v(t,"class","svelte-muq4si")},m(s,a){k(s,t,a),e&&e.m(t,null),o[4](t),i=!0,l||(n=S(t,"close",o[3]),l=!0)},p(s,[a]){e&&e.p&&(!i||a&2)&&x(e,r,s,s[1],i?te(r,s[1],a,null):ee(s[1]),null)},i(s){i||(d(e,s),i=!0)},o(s){p(e,s),i=!1},d(s){s&&_(t),e&&e.d(s),o[4](null),l=!1,n()}}}function he(o,t,i){let{$$slots:l={},$$scope:n}=t,{dialog:r}=t;function e(a){se.call(this,o,a)}function s(a){F[a?"unshift":"push"](()=>{r=a,i(0,r)})}return o.$$set=a=>{"dialog"in a&&i(0,r=a.dialog),"$$scope"in a&&i(1,n=a.$$scope)},[r,n,l,e,s]}class de extends A{constructor(t){super(),O(this,t,he,_e,N,{dialog:0})}}function V(o,t,i){const l=o.slice();return l[9]=t[i],l}function H(o,t,i){const l=o.slice();return l[12]=t[i],l}function Q(o){let t,i,l,n,r;return i=new Y({props:{src:o[12],loading:"lazy"}}),{c(){t=y("button"),M(i.$$.fragment),this.h()},l(e){t=$(e,"BUTTON",{class:!0});var s=E(t);U(i.$$.fragment,s),s.forEach(_),this.h()},h(){v(t,"class","gallery__column__image svelte-25ebsg")},m(e,s){k(e,t,s),D(i,t,null),l=!0,n||(r=S(t,"click",function(){X(o[4](o[12]))&&o[4](o[12]).apply(this,arguments)}),n=!0)},p(e,s){o=e;const a={};s&8&&(a.src=o[12]),i.$set(a)},i(e){l||(d(i.$$.fragment,e),l=!0)},o(e){p(i.$$.fragment,e),l=!1},d(e){e&&_(t),R(i),n=!1,r()}}}function K(o){let t,i,l=C(o[9]),n=[];for(let e=0;e<l.length;e+=1)n[e]=Q(H(o,l,e));const r=e=>p(n[e],1,1,()=>{n[e]=null});return{c(){t=y("div");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=$(e,"DIV",{class:!0});var s=E(t);for(let a=0;a<n.length;a+=1)n[a].l(s);s.forEach(_),this.h()},h(){v(t,"class","gallery__column svelte-25ebsg")},m(e,s){k(e,t,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(t,null);i=!0},p(e,s){if(s&24){l=C(e[9]);let a;for(a=0;a<l.length;a+=1){const h=H(e,l,a);n[a]?(n[a].p(h,s),d(n[a],1)):(n[a]=Q(h),n[a].c(),d(n[a],1),n[a].m(t,null))}for(P(),a=l.length;a<n.length;a+=1)r(a);T()}},i(e){if(!i){for(let s=0;s<l.length;s+=1)d(n[s]);i=!0}},o(e){n=n.filter(Boolean);for(let s=0;s<n.length;s+=1)p(n[s]);i=!1},d(e){e&&_(t),J(n,e)}}}function W(o){let t,i,l,n,r;return i=new Y({props:{src:o[1]}}),{c(){t=y("div"),M(i.$$.fragment),this.h()},l(e){t=$(e,"DIV",{class:!0});var s=E(t);U(i.$$.fragment,s),s.forEach(_),this.h()},h(){v(t,"class","dialog__image svelte-25ebsg")},m(e,s){k(e,t,s),D(i,t,null),l=!0,n||(r=[ne(ge.call(null,t)),S(t,"click_outside",function(){X(o[2].close())&&o[2].close().apply(this,arguments)})],n=!0)},p(e,s){o=e;const a={};s&2&&(a.src=o[1]),i.$set(a)},i(e){l||(d(i.$$.fragment,e),l=!0)},o(e){p(i.$$.fragment,e),l=!1},d(e){e&&_(t),R(i),n=!1,ae(r)}}}function pe(o){let t,i,l=o[1]&&W(o);return{c(){l&&l.c(),t=B()},l(n){l&&l.l(n),t=B()},m(n,r){l&&l.m(n,r),k(n,t,r),i=!0},p(n,r){n[1]?l?(l.p(n,r),r&2&&d(l,1)):(l=W(n),l.c(),d(l,1),l.m(t.parentNode,t)):l&&(P(),p(l,1,1,()=>{l=null}),T())},i(n){i||(d(l),i=!0)},o(n){p(l),i=!1},d(n){n&&_(t),l&&l.d(n)}}}function be(o){let t,i,l,n,r,e=C(o[3]),s=[];for(let u=0;u<e.length;u+=1)s[u]=K(V(o,e,u));const a=u=>p(s[u],1,1,()=>{s[u]=null});function h(u){o[6](u)}let m={$$slots:{default:[pe]},$$scope:{ctx:o}};return o[2]!==void 0&&(m.dialog=o[2]),l=new de({props:m}),F.push(()=>ue(l,"dialog",h)),{c(){t=y("section");for(let u=0;u<s.length;u+=1)s[u].c();i=q(),M(l.$$.fragment),this.h()},l(u){t=$(u,"SECTION",{class:!0});var c=E(t);for(let f=0;f<s.length;f+=1)s[f].l(c);i=j(c),U(l.$$.fragment,c),c.forEach(_),this.h()},h(){v(t,"class","gallery svelte-25ebsg"),z(t,"--columns",o[0])},m(u,c){k(u,t,c);for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(t,null);I(t,i),D(l,t,null),r=!0},p(u,[c]){if(c&24){e=C(u[3]);let g;for(g=0;g<e.length;g+=1){const w=V(u,e,g);s[g]?(s[g].p(w,c),d(s[g],1)):(s[g]=K(w),s[g].c(),d(s[g],1),s[g].m(t,i))}for(P(),g=e.length;g<s.length;g+=1)a(g);T()}const f={};c&32774&&(f.$$scope={dirty:c,ctx:u}),!n&&c&4&&(n=!0,f.dialog=u[2],le(()=>n=!1)),l.$set(f),c&1&&z(t,"--columns",u[0])},i(u){if(!r){for(let c=0;c<e.length;c+=1)d(s[c]);d(l.$$.fragment,u),r=!0}},o(u){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)p(s[c]);p(l.$$.fragment,u),r=!1},d(u){u&&_(t),J(s,u),R(l)}}}function ve(o,t,i){let l,n,{imageURLs:r}=t,{columns:e=5}=t;const s=(c,f)=>{const g=Math.floor(l/f),w=l%f,G=[];for(let b=0;b<f;b++)G[b]=c.slice(b*g,(b+1)*g);for(let b=0;b<w;b++)G[b].push(c[g*f+b]);return G};let a,h;function m(c){return i(1,a=c),f=>h.showModal()}function u(c){h=c,i(2,h)}return o.$$set=c=>{"imageURLs"in c&&i(5,r=c.imageURLs),"columns"in c&&i(0,e=c.columns)},o.$$.update=()=>{o.$$.dirty&32&&(l=r.length),o.$$.dirty&33&&i(3,n=s(r,e))},[e,a,h,n,m,r,u]}class ye extends A{constructor(t){super(),O(this,t,ve,be,N,{imageURLs:5,columns:0})}}const L=(o,t)=>me(!1,i=>{const l=`(max-width: ${t}px) and (min-width: ${o}px) `;ie(()=>{const n=window.matchMedia(l).matches;i(n);const r=s=>{i(s.matches)},e=window.matchMedia(l);return e.addEventListener("change",r),()=>{e.removeEventListener("change",r)}})}),$e=L(0,480),ke=L(480,640),Ee=L(640,768),Le=L(768,1024),Ie=L(1024,1152),we=L(1152,1280),Ce=L(1280,1e14);function Me(o){let t,i,l,n,r="Gallery",e,s,a,h;return a=new ye({props:{imageURLs:o[0].imageURLs.map(o[2]),columns:o[1]}}),{c(){t=y("meta"),i=q(),l=y("main"),n=y("h1"),n.textContent=r,e=q(),s=y("div"),M(a.$$.fragment),this.h()},l(m){const u=oe("svelte-jyhfh7",document.head);t=$(u,"META",{name:!0,content:!0}),u.forEach(_),i=j(m),l=$(m,"MAIN",{class:!0});var c=E(l);n=$(c,"H1",{class:!0,"data-svelte-h":!0}),re(n)!=="svelte-14azyx4"&&(n.textContent=r),e=j(c),s=$(c,"DIV",{class:!0});var f=E(s);U(a.$$.fragment,f),f.forEach(_),c.forEach(_),this.h()},h(){document.title="Gallery",v(t,"name","description"),v(t,"content","A look into our 2022-2023 school year."),v(n,"class","svelte-qjm7hy"),v(s,"class","gallery__image-grid svelte-qjm7hy"),v(l,"class","gallery svelte-qjm7hy")},m(m,u){I(document.head,t),k(m,i,u),k(m,l,u),I(l,n),I(l,e),I(l,s),D(a,s,null),h=!0},p(m,[u]){const c={};u&1&&(c.imageURLs=m[0].imageURLs.map(m[2])),u&2&&(c.columns=m[1]),a.$set(c)},i(m){h||(d(a.$$.fragment,m),h=!0)},o(m){p(a.$$.fragment,m),h=!1},d(m){m&&(_(i),_(l)),_(t),R(a)}}}function Ue(o,t,i){let{data:l}=t,n=5;function r(a){return h=>{h&&i(1,n=a)}}const e=[];e.push(Ce.subscribe(r(4))),e.push(we.subscribe(r(4))),e.push(Ie.subscribe(r(3))),e.push(Le.subscribe(r(3))),e.push(Ee.subscribe(r(2))),e.push(ke.subscribe(r(2))),e.push($e.subscribe(r(1))),ce(()=>{e.forEach(a=>a())});const s=a=>`${fe}/${a}`;return o.$$set=a=>{"data"in a&&i(0,l=a.data)},[l,n,s]}class Se extends A{constructor(t){super(),O(this,t,Ue,Me,N,{data:0})}}export{Se as component};
