import{s as v,f as u,a as E,g as _,h as d,c as I,d as m,M as b,j as r,F as g,i as k,z as o,u as h}from"./scheduler.3f1532c0.js";import{S as p,i as y}from"./index.984e7e29.js";function q(n){let e,t,i,f,s,a;return{c(){e=u("picture"),t=u("source"),f=E(),s=u("img"),this.h()},l(l){e=_(l,"PICTURE",{class:!0});var c=d(e);t=_(c,"SOURCE",{srcset:!0,type:!0,class:!0}),f=I(c),s=_(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(m),this.h()},h(){b(t,i=n[0]+".avif")||r(t,"srcset",i),r(t,"type","image/avif"),r(t,"class","svelte-1fg1407"),g(s.src,a=n[0]+"."+n[2])||r(s,"src",a),r(s,"alt",n[1]),r(s,"class","svelte-1fg1407"),r(e,"class","svelte-1fg1407")},m(l,c){k(l,e,c),o(e,t),o(e,f),o(e,s)},p(l,[c]){c&1&&i!==(i=l[0]+".avif")&&r(t,"srcset",i),c&5&&!g(s.src,a=l[0]+"."+l[2])&&r(s,"src",a),c&2&&r(s,"alt",l[1])},i:h,o:h,d(l){l&&m(e)}}}function C(n,e,t){let{src:i}=e,{alt:f=""}=e,{fallbackExtension:s="jpg"}=e;return n.$$set=a=>{"src"in a&&t(0,i=a.src),"alt"in a&&t(1,f=a.alt),"fallbackExtension"in a&&t(2,s=a.fallbackExtension)},[i,f,s]}class M extends p{constructor(e){super(),y(this,e,C,q,v,{src:0,alt:1,fallbackExtension:2})}}export{M as I};
