import{s as ne,f as y,a as V,l as X,g as k,h as T,d as _,c as P,m as Y,j as f,i as z,z as g,n as Z,e as D,E as ue,r as fe,A as _e}from"../chunks/scheduler.06d40262.js";import{S as se,i as oe,b as q,d as B,m as F,a as A,t as L,e as G,c as W,g as j}from"../chunks/index.8e79e426.js";import{e as N,u as ie,o as me}from"../chunks/each.2916032d.js";import{P as he}from"../chunks/Picture.c8c40595.js";import{s as de}from"../chunks/screenWidth.store.142931be.js";function pe(n){let r,e,a,o,t,s,l=n[0].name+"",i,h,v,M=n[0].position+"",S,C;return a=new he({props:{meta:n[0].imageURL,alt:n[0].name,sizes:"(max-width: 800px) 400px, 1200px",loading:n[1]}}),{c(){r=y("div"),e=y("div"),q(a.$$.fragment),o=V(),t=y("div"),s=y("h2"),i=X(l),h=V(),v=y("h3"),S=X(M),this.h()},l(u){r=k(u,"DIV",{class:!0});var b=T(r);e=k(b,"DIV",{class:!0});var E=T(e);B(a.$$.fragment,E),E.forEach(_),o=P(b),t=k(b,"DIV",{class:!0});var d=T(t);s=k(d,"H2",{class:!0});var R=T(s);i=Y(R,l),R.forEach(_),h=P(d),v=k(d,"H3",{class:!0});var I=T(v);S=Y(I,M),I.forEach(_),d.forEach(_),b.forEach(_),this.h()},h(){f(e,"class","member-card__photo svelte-12gfih0"),f(s,"class","member-card__text__name svelte-12gfih0"),f(v,"class","member-card__text__position svelte-12gfih0"),f(t,"class","member-card__text svelte-12gfih0"),f(r,"class","member-card svelte-12gfih0")},m(u,b){z(u,r,b),g(r,e),F(a,e,null),g(r,o),g(r,t),g(t,s),g(s,i),g(t,h),g(t,v),g(v,S),C=!0},p(u,[b]){const E={};b&1&&(E.meta=u[0].imageURL),b&1&&(E.alt=u[0].name),b&2&&(E.loading=u[1]),a.$set(E),(!C||b&1)&&l!==(l=u[0].name+"")&&Z(i,l),(!C||b&1)&&M!==(M=u[0].position+"")&&Z(S,M)},i(u){C||(A(a.$$.fragment,u),C=!0)},o(u){L(a.$$.fragment,u),C=!1},d(u){u&&_(r),G(a)}}}function ge(n,r,e){let{member:a}=r,{loading:o="eager"}=r;return n.$$set=t=>{"member"in t&&e(0,a=t.member),"loading"in t&&e(1,o=t.loading)},[a,o]}class ce extends se{constructor(r){super(),oe(this,r,ge,pe,ne,{member:0,loading:1})}}const be=n=>de(0,n),ve=be(1024);function x(n,r,e){const a=n.slice();return a[3]=r[e],a[5]=e,a}function ee(n,r,e){const a=n.slice();return a[3]=r[e],a}function ye(n){let r;return{c(){r=y("meta"),this.h()},l(e){r=k(e,"META",{property:!0,content:!0}),this.h()},h(){f(r,"property","og:url"),f(r,"content","https://rhhsstuco.ca/members")},m(e,a){z(e,r,a)},d(e){e&&_(r)}}}function te(n){let r,e=[],a=new Map,o,t=N(n[0].members.slice(0,3));const s=l=>l[3].name;for(let l=0;l<t.length;l+=1){let i=ee(n,t,l),h=s(i);a.set(h,e[l]=re(h,i))}return{c(){r=y("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){r=k(l,"DIV",{class:!0});var i=T(r);for(let h=0;h<e.length;h+=1)e[h].l(i);i.forEach(_),this.h()},h(){f(r,"class","members__display__row svelte-5pbp8m")},m(l,i){z(l,r,i);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(r,null);o=!0},p(l,i){i&1&&(t=N(l[0].members.slice(0,3)),j(),e=ie(e,i,s,1,l,t,a,r,me,re,null,ee),W())},i(l){if(!o){for(let i=0;i<t.length;i+=1)A(e[i]);o=!0}},o(l){for(let i=0;i<e.length;i+=1)L(e[i]);o=!1},d(l){l&&_(r);for(let i=0;i<e.length;i+=1)e[i].d()}}}function re(n,r){let e,a,o;return a=new ce({props:{member:r[3]}}),{key:n,first:null,c(){e=D(),q(a.$$.fragment),this.h()},l(t){e=D(),B(a.$$.fragment,t),this.h()},h(){this.first=e},m(t,s){z(t,e,s),F(a,t,s),o=!0},p(t,s){r=t;const l={};s&1&&(l.member=r[3]),a.$set(l)},i(t){o||(A(a.$$.fragment,t),o=!0)},o(t){L(a.$$.fragment,t),o=!1},d(t){t&&_(e),G(a,t)}}}function ae(n,r){let e,a,o;return a=new ce({props:{member:r[3],loading:r[1]&&r[5]<3?"eager":"lazy"}}),{key:n,first:null,c(){e=D(),q(a.$$.fragment),this.h()},l(t){e=D(),B(a.$$.fragment,t),this.h()},h(){this.first=e},m(t,s){z(t,e,s),F(a,t,s),o=!0},p(t,s){r=t;const l={};s&5&&(l.member=r[3]),s&7&&(l.loading=r[1]&&r[5]<3?"eager":"lazy"),a.$set(l)},i(t){o||(A(a.$$.fragment,t),o=!0)},o(t){L(a.$$.fragment,t),o=!1},d(t){t&&_(e),G(a,t)}}}function ke(n){let r,e,a,o,t,s,l,i,h,v,M,S="Members",C,u,b,E,d=[],R=new Map,I;document.title=r=Q;let w=ye(),p=!n[1]&&te(n),H=N(n[0].members.slice(n[2]));const J=c=>c[3].name;for(let c=0;c<H.length;c+=1){let m=x(n,H,c),$=J(m);R.set($,d[c]=ae($,m))}return{c(){e=y("meta"),a=y("meta"),o=y("meta"),t=y("meta"),s=y("meta"),w&&w.c(),i=D(),h=V(),v=y("main"),M=y("h1"),M.textContent=S,C=V(),u=y("section"),p&&p.c(),b=V(),E=y("div");for(let c=0;c<d.length;c+=1)d[c].c();this.h()},l(c){const m=ue("svelte-1d5ahuz",document.head);e=k(m,"META",{name:!0,content:!0}),a=k(m,"META",{property:!0,content:!0}),o=k(m,"META",{property:!0,content:!0}),t=k(m,"META",{property:!0,content:!0}),s=k(m,"META",{property:!0,content:!0}),w&&w.l(m),i=D(),m.forEach(_),h=P(c),v=k(c,"MAIN",{class:!0});var $=T(v);M=k($,"H1",{class:!0,"data-svelte-h":!0}),fe(M)!=="svelte-1u0fzm3"&&(M.textContent=S),C=P($),u=k($,"SECTION",{class:!0});var U=T(u);p&&p.l(U),b=P(U),E=k(U,"DIV",{class:!0});var K=T(E);for(let O=0;O<d.length;O+=1)d[O].l(K);K.forEach(_),U.forEach(_),$.forEach(_),this.h()},h(){f(e,"name","description"),f(e,"content",le),f(a,"property","og:title"),f(a,"content",Q),f(o,"property","og:description"),f(o,"content",le),f(t,"property","og:type"),f(t,"content","website"),f(s,"property","og:image"),f(s,"content",l=n[0].members[1].imageURL.img.src),f(M,"class","svelte-5pbp8m"),f(E,"class","members__display__grid svelte-5pbp8m"),f(u,"class","members__display svelte-5pbp8m"),f(v,"class","members svelte-5pbp8m")},m(c,m){g(document.head,e),g(document.head,a),g(document.head,o),g(document.head,t),g(document.head,s),w&&w.m(document.head,null),g(document.head,i),z(c,h,m),z(c,v,m),g(v,M),g(v,C),g(v,u),p&&p.m(u,null),g(u,b),g(u,E);for(let $=0;$<d.length;$+=1)d[$]&&d[$].m(E,null);I=!0},p(c,[m]){(!I||m&0)&&r!==(r=Q)&&(document.title=r),(!I||m&1&&l!==(l=c[0].members[1].imageURL.img.src))&&f(s,"content",l),c[1]?p&&(j(),L(p,1,1,()=>{p=null}),W()):p?(p.p(c,m),m&2&&A(p,1)):(p=te(c),p.c(),A(p,1),p.m(u,b)),m&7&&(H=N(c[0].members.slice(c[2])),j(),d=ie(d,m,J,1,c,H,R,E,me,ae,null,x),W())},i(c){if(!I){A(p);for(let m=0;m<H.length;m+=1)A(d[m]);I=!0}},o(c){L(p);for(let m=0;m<d.length;m+=1)L(d[m]);I=!1},d(c){c&&(_(h),_(v)),_(e),_(a),_(o),_(t),_(s),w&&w.d(c),_(i),p&&p.d();for(let m=0;m<d.length;m+=1)d[m].d()}}}const Q="Members | RHHS StuCo",le="Meet the members of our the 2023-2024 Student Council!";function Ee(n,r,e){let a,o;_e(n,ve,s=>e(1,o=s));let{data:t}=r;return n.$$set=s=>{"data"in s&&e(0,t=s.data)},n.$$.update=()=>{n.$$.dirty&2&&e(2,a=o?0:3)},[t,o,a]}class we extends se{constructor(r){super(),oe(this,r,Ee,ke,ne,{data:0})}}export{we as component};
