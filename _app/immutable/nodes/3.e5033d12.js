import{s as U}from"../chunks/scheduler.e108d1fd.js";import{S as F,i as G,g as m,r as P,s as b,h as u,j as y,u as R,f as x,c as z,y as M,k as $,a as J,x as i,v as V,d as E,b as K,t as T,w as j,z as Q,p as W}from"../chunks/index.5ed8cc18.js";import{e as O,H as X}from"../chunks/HomePageEvent.9dee9353.js";import{N as Y}from"../chunks/Navbar.7aaece88.js";function q(c,s,r){const e=c.slice();return e[1]=s[r],e}function A(c){let s,r;return s=new X({props:{event:c[1]}}),{c(){P(s.$$.fragment)},l(e){R(s.$$.fragment,e)},m(e,l){V(s,e,l),r=!0},p(e,l){const d={};l&1&&(d.event=e[1]),s.$set(d)},i(e){r||(E(s.$$.fragment,e),r=!0)},o(e){T(s.$$.fragment,e),r=!1},d(e){j(s,e)}}}function Z(c){let s,r,e,l,d,f,N='<img src="images/bg-vector.svg"/>',S,v,D='<h1 class="svelte-120z6xd">RHHS STUCO</h1>',k,h,g,L="Events",w,H;l=new Y({});let _=O(c[0].events),a=[];for(let n=0;n<_.length;n+=1)a[n]=A(q(c,_,n));const B=n=>T(a[n],1,1,()=>{a[n]=null});return{c(){s=m("main"),r=m("div"),e=m("header"),P(l.$$.fragment),d=b(),f=m("div"),f.innerHTML=N,S=b(),v=m("section"),v.innerHTML=D,k=b(),h=m("section"),g=m("h2"),g.textContent=L,w=b();for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){s=u(n,"MAIN",{});var o=y(s);r=u(o,"DIV",{class:!0});var t=y(r);e=u(t,"HEADER",{class:!0});var p=y(e);R(l.$$.fragment,p),p.forEach(x),d=z(t),f=u(t,"DIV",{class:!0,"data-svelte-h":!0}),M(f)!=="svelte-19ltq75"&&(f.innerHTML=N),S=z(t),v=u(t,"SECTION",{class:!0,"data-svelte-h":!0}),M(v)!=="svelte-155rcf9"&&(v.innerHTML=D),t.forEach(x),k=z(o),h=u(o,"SECTION",{class:!0});var C=y(h);g=u(C,"H2",{"data-svelte-h":!0}),M(g)!=="svelte-1b7vw6v"&&(g.textContent=L),w=z(C);for(let I=0;I<a.length;I+=1)a[I].l(C);C.forEach(x),o.forEach(x),this.h()},h(){$(e,"class","svelte-120z6xd"),$(f,"class","vector-container svelte-120z6xd"),$(v,"class","hero svelte-120z6xd"),$(r,"class","hero__navbar svelte-120z6xd"),$(h,"class","events svelte-120z6xd")},m(n,o){J(n,s,o),i(s,r),i(r,e),V(l,e,null),i(r,d),i(r,f),i(r,S),i(r,v),i(s,k),i(s,h),i(h,g),i(h,w);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(h,null);H=!0},p(n,[o]){if(o&1){_=O(n[0].events);let t;for(t=0;t<_.length;t+=1){const p=q(n,_,t);a[t]?(a[t].p(p,o),E(a[t],1)):(a[t]=A(p),a[t].c(),E(a[t],1),a[t].m(h,null))}for(W(),t=_.length;t<a.length;t+=1)B(t);K()}},i(n){if(!H){E(l.$$.fragment,n);for(let o=0;o<_.length;o+=1)E(a[o]);H=!0}},o(n){T(l.$$.fragment,n),a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)T(a[o]);H=!1},d(n){n&&x(s),j(l),Q(a,n)}}}function ee(c,s,r){let{data:e}=s;return c.$$set=l=>{"data"in l&&r(0,e=l.data)},c.$$.update=()=>{c.$$.dirty&1&&r(0,e.events=e.events.map(l=>({...l,date:new Date(l.date)})),e)},[e]}class re extends F{constructor(s){super(),G(this,s,ee,Z,U,{data:0})}}export{re as component};
