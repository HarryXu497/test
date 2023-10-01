import{s as F,f as y,a as S,l as Q,g as C,h as M,d,c as V,m as R,j as b,i as w,z as v,n as T,E as Y,r as Z,C as G,A as ee}from"../chunks/scheduler.4493c153.js";import{S as J,i as K,b as H,d as B,m as N,a as $,t as k,e as O,c as z,g as A}from"../chunks/index.7c64038e.js";import{e as L}from"../chunks/each.e59479a4.js";import{I as te}from"../chunks/Image.b2e5d108.js";import{s as re}from"../chunks/screenWidth.store.f6e7999b.js";function se(o){let t,l,e,r,u,a,i=o[0].name+"",n,g,E,f=o[0].position+"",p,c;return e=new te({props:{src:o[0].imageURL,alt:o[0].name,loading:"lazy"}}),{c(){t=y("div"),l=y("div"),H(e.$$.fragment),r=S(),u=y("div"),a=y("h2"),n=Q(i),g=S(),E=y("h3"),p=Q(f),this.h()},l(h){t=C(h,"DIV",{class:!0});var s=M(t);l=C(s,"DIV",{class:!0});var _=M(l);B(e.$$.fragment,_),_.forEach(d),r=V(s),u=C(s,"DIV",{class:!0});var m=M(u);a=C(m,"H2",{class:!0});var I=M(a);n=R(I,i),I.forEach(d),g=V(m),E=C(m,"H3",{class:!0});var D=M(E);p=R(D,f),D.forEach(d),m.forEach(d),s.forEach(d),this.h()},h(){b(l,"class","member-card__photo svelte-12gfih0"),b(a,"class","member-card__text__name svelte-12gfih0"),b(E,"class","member-card__text__position svelte-12gfih0"),b(u,"class","member-card__text svelte-12gfih0"),b(t,"class","member-card svelte-12gfih0")},m(h,s){w(h,t,s),v(t,l),N(e,l,null),v(t,r),v(t,u),v(u,a),v(a,n),v(u,g),v(u,E),v(E,p),c=!0},p(h,[s]){const _={};s&1&&(_.src=h[0].imageURL),s&1&&(_.alt=h[0].name),e.$set(_),(!c||s&1)&&i!==(i=h[0].name+"")&&T(n,i),(!c||s&1)&&f!==(f=h[0].position+"")&&T(p,f)},i(h){c||($(e.$$.fragment,h),c=!0)},o(h){k(e.$$.fragment,h),c=!1},d(h){h&&d(t),O(e)}}}function ae(o,t,l){let{member:e}=t;return o.$$set=r=>{"member"in r&&l(0,e=r.member)},[e]}class X extends J{constructor(t){super(),K(this,t,ae,se,F,{member:0})}}const le=o=>re(0,o),ne=le(1024);function U(o,t,l){const e=o.slice();return e[3]=t[l],e}function W(o,t,l){const e=o.slice();return e[3]=t[l],e}function j(o){let t,l,e=L(o[0].members.slice(0,3)),r=[];for(let a=0;a<e.length;a+=1)r[a]=q(W(o,e,a));const u=a=>k(r[a],1,1,()=>{r[a]=null});return{c(){t=y("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){t=C(a,"DIV",{class:!0});var i=M(t);for(let n=0;n<r.length;n+=1)r[n].l(i);i.forEach(d),this.h()},h(){b(t,"class","members__display__row svelte-1r4g82d")},m(a,i){w(a,t,i);for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(t,null);l=!0},p(a,i){if(i&1){e=L(a[0].members.slice(0,3));let n;for(n=0;n<e.length;n+=1){const g=W(a,e,n);r[n]?(r[n].p(g,i),$(r[n],1)):(r[n]=q(g),r[n].c(),$(r[n],1),r[n].m(t,null))}for(A(),n=e.length;n<r.length;n+=1)u(n);z()}},i(a){if(!l){for(let i=0;i<e.length;i+=1)$(r[i]);l=!0}},o(a){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)k(r[i]);l=!1},d(a){a&&d(t),G(r,a)}}}function q(o){let t,l;return t=new X({props:{member:o[3]}}),{c(){H(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){N(t,e,r),l=!0},p(e,r){const u={};r&1&&(u.member=e[3]),t.$set(u)},i(e){l||($(t.$$.fragment,e),l=!0)},o(e){k(t.$$.fragment,e),l=!1},d(e){O(t,e)}}}function P(o){let t,l;return t=new X({props:{member:o[3]}}),{c(){H(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){N(t,e,r),l=!0},p(e,r){const u={};r&5&&(u.member=e[3]),t.$set(u)},i(e){l||($(t.$$.fragment,e),l=!0)},o(e){k(t.$$.fragment,e),l=!1},d(e){O(t,e)}}}function oe(o){let t,l,e,r,u="Members",a,i,n,g,E,f=!o[1]&&j(o),p=L(o[0].members.slice(o[2])),c=[];for(let s=0;s<p.length;s+=1)c[s]=P(U(o,p,s));const h=s=>k(c[s],1,1,()=>{c[s]=null});return{c(){t=y("meta"),l=S(),e=y("main"),r=y("h1"),r.textContent=u,a=S(),i=y("section"),f&&f.c(),n=S(),g=y("div");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){const _=Y("svelte-1gm43n5",document.head);t=C(_,"META",{name:!0,content:!0}),_.forEach(d),l=V(s),e=C(s,"MAIN",{class:!0});var m=M(e);r=C(m,"H1",{class:!0,"data-svelte-h":!0}),Z(r)!=="svelte-1u0fzm3"&&(r.textContent=u),a=V(m),i=C(m,"SECTION",{class:!0});var I=M(i);f&&f.l(I),n=V(I),g=C(I,"DIV",{class:!0});var D=M(g);for(let x=0;x<c.length;x+=1)c[x].l(D);D.forEach(d),I.forEach(d),m.forEach(d),this.h()},h(){document.title="Members",b(t,"name","description"),b(t,"content","Meet the members of our the 2023-2024 Student Council!"),b(r,"class","svelte-1r4g82d"),b(g,"class","members__display__grid svelte-1r4g82d"),b(i,"class","members__display svelte-1r4g82d"),b(e,"class","members svelte-1r4g82d")},m(s,_){v(document.head,t),w(s,l,_),w(s,e,_),v(e,r),v(e,a),v(e,i),f&&f.m(i,null),v(i,n),v(i,g);for(let m=0;m<c.length;m+=1)c[m]&&c[m].m(g,null);E=!0},p(s,[_]){if(s[1]?f&&(A(),k(f,1,1,()=>{f=null}),z()):f?(f.p(s,_),_&2&&$(f,1)):(f=j(s),f.c(),$(f,1),f.m(i,n)),_&5){p=L(s[0].members.slice(s[2]));let m;for(m=0;m<p.length;m+=1){const I=U(s,p,m);c[m]?(c[m].p(I,_),$(c[m],1)):(c[m]=P(I),c[m].c(),$(c[m],1),c[m].m(g,null))}for(A(),m=p.length;m<c.length;m+=1)h(m);z()}},i(s){if(!E){$(f);for(let _=0;_<p.length;_+=1)$(c[_]);E=!0}},o(s){k(f),c=c.filter(Boolean);for(let _=0;_<c.length;_+=1)k(c[_]);E=!1},d(s){s&&(d(l),d(e)),d(t),f&&f.d(),G(c,s)}}}function ie(o,t,l){let e,r;ee(o,ne,a=>l(1,r=a));let{data:u}=t;return o.$$set=a=>{"data"in a&&l(0,u=a.data)},o.$$.update=()=>{o.$$.dirty&2&&l(2,e=r?0:3)},[u,r,e]}class he extends J{constructor(t){super(),K(this,t,ie,oe,F,{data:0})}}export{he as component};
