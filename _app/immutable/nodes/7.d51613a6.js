import{s as F,f as C,a as S,l as R,g as I,h as k,d,c as V,m as T,j as p,i as w,z as v,n as U,E as Y,r as Z,C as G,A as ee}from"../chunks/scheduler.e27ffd16.js";import{S as J,i as K,b as B,d as N,m as O,a as $,t as y,e as Q,c as A,g as H}from"../chunks/index.8be47cba.js";import{e as L}from"../chunks/each.e59479a4.js";import{I as te}from"../chunks/Image.acce2e57.js";import{s as le}from"../chunks/screenWidth.store.1847e62a.js";function ae(o){let t,s,e,l,f,r,i=o[0].name+"",n,g,E,_=o[0].position+"",b,c;return e=new te({props:{src:o[0].imageURL,alt:o[0].name,loading:o[1]}}),{c(){t=C("div"),s=C("div"),B(e.$$.fragment),l=S(),f=C("div"),r=C("h2"),n=R(i),g=S(),E=C("h3"),b=R(_),this.h()},l(h){t=I(h,"DIV",{class:!0});var a=k(t);s=I(a,"DIV",{class:!0});var u=k(s);N(e.$$.fragment,u),u.forEach(d),l=V(a),f=I(a,"DIV",{class:!0});var m=k(f);r=I(m,"H2",{class:!0});var M=k(r);n=T(M,i),M.forEach(d),g=V(m),E=I(m,"H3",{class:!0});var D=k(E);b=T(D,_),D.forEach(d),m.forEach(d),a.forEach(d),this.h()},h(){p(s,"class","member-card__photo svelte-12gfih0"),p(r,"class","member-card__text__name svelte-12gfih0"),p(E,"class","member-card__text__position svelte-12gfih0"),p(f,"class","member-card__text svelte-12gfih0"),p(t,"class","member-card svelte-12gfih0")},m(h,a){w(h,t,a),v(t,s),O(e,s,null),v(t,l),v(t,f),v(f,r),v(r,n),v(f,g),v(f,E),v(E,b),c=!0},p(h,[a]){const u={};a&1&&(u.src=h[0].imageURL),a&1&&(u.alt=h[0].name),a&2&&(u.loading=h[1]),e.$set(u),(!c||a&1)&&i!==(i=h[0].name+"")&&U(n,i),(!c||a&1)&&_!==(_=h[0].position+"")&&U(b,_)},i(h){c||($(e.$$.fragment,h),c=!0)},o(h){y(e.$$.fragment,h),c=!1},d(h){h&&d(t),Q(e)}}}function re(o,t,s){let{member:e}=t,{loading:l="eager"}=t;return o.$$set=f=>{"member"in f&&s(0,e=f.member),"loading"in f&&s(1,l=f.loading)},[e,l]}class X extends J{constructor(t){super(),K(this,t,re,ae,F,{member:0,loading:1})}}const se=o=>le(0,o),ne=se(1024);function W(o,t,s){const e=o.slice();return e[3]=t[s],e}function j(o,t,s){const e=o.slice();return e[3]=t[s],e}function q(o){let t,s,e=L(o[0].members.slice(0,3)),l=[];for(let r=0;r<e.length;r+=1)l[r]=x(j(o,e,r));const f=r=>y(l[r],1,1,()=>{l[r]=null});return{c(){t=C("div");for(let r=0;r<l.length;r+=1)l[r].c();this.h()},l(r){t=I(r,"DIV",{class:!0});var i=k(t);for(let n=0;n<l.length;n+=1)l[n].l(i);i.forEach(d),this.h()},h(){p(t,"class","members__display__row svelte-1r4g82d")},m(r,i){w(r,t,i);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(t,null);s=!0},p(r,i){if(i&1){e=L(r[0].members.slice(0,3));let n;for(n=0;n<e.length;n+=1){const g=j(r,e,n);l[n]?(l[n].p(g,i),$(l[n],1)):(l[n]=x(g),l[n].c(),$(l[n],1),l[n].m(t,null))}for(H(),n=e.length;n<l.length;n+=1)f(n);A()}},i(r){if(!s){for(let i=0;i<e.length;i+=1)$(l[i]);s=!0}},o(r){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)y(l[i]);s=!1},d(r){r&&d(t),G(l,r)}}}function x(o){let t,s;return t=new X({props:{member:o[3]}}),{c(){B(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,l){O(t,e,l),s=!0},p(e,l){const f={};l&1&&(f.member=e[3]),t.$set(f)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){Q(t,e)}}}function P(o){let t,s;return t=new X({props:{member:o[3],loading:"lazy"}}),{c(){B(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,l){O(t,e,l),s=!0},p(e,l){const f={};l&5&&(f.member=e[3]),t.$set(f)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){Q(t,e)}}}function oe(o){let t,s,e,l,f="Members",r,i,n,g,E,_=!o[1]&&q(o),b=L(o[0].members.slice(o[2])),c=[];for(let a=0;a<b.length;a+=1)c[a]=P(W(o,b,a));const h=a=>y(c[a],1,1,()=>{c[a]=null});return{c(){t=C("meta"),s=S(),e=C("main"),l=C("h1"),l.textContent=f,r=S(),i=C("section"),_&&_.c(),n=S(),g=C("div");for(let a=0;a<c.length;a+=1)c[a].c();this.h()},l(a){const u=Y("svelte-1gm43n5",document.head);t=I(u,"META",{name:!0,content:!0}),u.forEach(d),s=V(a),e=I(a,"MAIN",{class:!0});var m=k(e);l=I(m,"H1",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-1u0fzm3"&&(l.textContent=f),r=V(m),i=I(m,"SECTION",{class:!0});var M=k(i);_&&_.l(M),n=V(M),g=I(M,"DIV",{class:!0});var D=k(g);for(let z=0;z<c.length;z+=1)c[z].l(D);D.forEach(d),M.forEach(d),m.forEach(d),this.h()},h(){document.title="Members",p(t,"name","description"),p(t,"content","Meet the members of our the 2023-2024 Student Council!"),p(l,"class","svelte-1r4g82d"),p(g,"class","members__display__grid svelte-1r4g82d"),p(i,"class","members__display svelte-1r4g82d"),p(e,"class","members svelte-1r4g82d")},m(a,u){v(document.head,t),w(a,s,u),w(a,e,u),v(e,l),v(e,r),v(e,i),_&&_.m(i,null),v(i,n),v(i,g);for(let m=0;m<c.length;m+=1)c[m]&&c[m].m(g,null);E=!0},p(a,[u]){if(a[1]?_&&(H(),y(_,1,1,()=>{_=null}),A()):_?(_.p(a,u),u&2&&$(_,1)):(_=q(a),_.c(),$(_,1),_.m(i,n)),u&5){b=L(a[0].members.slice(a[2]));let m;for(m=0;m<b.length;m+=1){const M=W(a,b,m);c[m]?(c[m].p(M,u),$(c[m],1)):(c[m]=P(M),c[m].c(),$(c[m],1),c[m].m(g,null))}for(H(),m=b.length;m<c.length;m+=1)h(m);A()}},i(a){if(!E){$(_);for(let u=0;u<b.length;u+=1)$(c[u]);E=!0}},o(a){y(_),c=c.filter(Boolean);for(let u=0;u<c.length;u+=1)y(c[u]);E=!1},d(a){a&&(d(s),d(e)),d(t),_&&_.d(),G(c,a)}}}function ie(o,t,s){let e,l;ee(o,ne,r=>s(1,l=r));let{data:f}=t;return o.$$set=r=>{"data"in r&&s(0,f=r.data)},o.$$.update=()=>{o.$$.dirty&2&&s(2,e=l?0:3)},[f,l,e]}class he extends J{constructor(t){super(),K(this,t,ie,oe,F,{data:0})}}export{he as component};