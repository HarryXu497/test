import{s as p}from"../chunks/scheduler.8746962a.js";import{S as d,i as v,g as $,h as k,j as b,f as m,a as x,d as i,b as y,t as f,B as w,r as B,u as E,v as H,w as P,p as S}from"../chunks/index.7fa94f9c.js";import{e as _,H as j}from"../chunks/HomePageEvent.5644fdef.js";function h(s,o,l){const t=s.slice();return t[1]=o[l],t}function g(s){let o,l;return o=new j({props:{event:s[1]}}),{c(){B(o.$$.fragment)},l(t){E(o.$$.fragment,t)},m(t,e){H(o,t,e),l=!0},p(t,e){const c={};e&1&&(c.event=t[1]),o.$set(c)},i(t){l||(i(o.$$.fragment,t),l=!0)},o(t){f(o.$$.fragment,t),l=!1},d(t){P(o,t)}}}function q(s){let o,l,t=_(s[0].events),e=[];for(let a=0;a<t.length;a+=1)e[a]=g(h(s,t,a));const c=a=>f(e[a],1,1,()=>{e[a]=null});return{c(){o=$("div");for(let a=0;a<e.length;a+=1)e[a].c()},l(a){o=k(a,"DIV",{});var r=b(o);for(let n=0;n<e.length;n+=1)e[n].l(r);r.forEach(m)},m(a,r){x(a,o,r);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(o,null);l=!0},p(a,[r]){if(r&1){t=_(a[0].events);let n;for(n=0;n<t.length;n+=1){const u=h(a,t,n);e[n]?(e[n].p(u,r),i(e[n],1)):(e[n]=g(u),e[n].c(),i(e[n],1),e[n].m(o,null))}for(S(),n=t.length;n<e.length;n+=1)c(n);y()}},i(a){if(!l){for(let r=0;r<t.length;r+=1)i(e[r]);l=!0}},o(a){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)f(e[r]);l=!1},d(a){a&&m(o),w(e,a)}}}function C(s,o,l){let{data:t}=o;return s.$$set=e=>{"data"in e&&l(0,t=e.data)},[t]}class z extends d{constructor(o){super(),v(this,o,C,q,p,{data:0})}}export{z as component};