import{s as y,P as d,f as _,a as I,g,h as S,c as C,d as h,Q as P,j as u,F as k,R as v,B as E,i as R,z as m,u as q,S as b,T as j}from"./scheduler.4d196315.js";import{S as p,i as T}from"./index.9898937f.js";function U(i,t){const a={},o={},f={$$scope:1};let s=i.length;for(;s--;){const n=i[s],c=t[s];if(c){for(const l in n)l in c||(o[l]=1);for(const l in c)f[l]||(a[l]=c[l],f[l]=1);i[s]=c}else for(const l in n)f[l]=1}for(const n in o)n in a||(a[n]=void 0);return a}function z(i){let t,a,o,f,s,n,c=[i[4]],l={};for(let e=0;e<c.length;e+=1)l=d(l,c[e]);return{c(){t=_("picture"),a=_("source"),f=I(),s=_("img"),this.h()},l(e){t=g(e,"PICTURE",{});var r=S(t);a=g(r,"SOURCE",{srcset:!0,type:!0,class:!0}),f=C(r),s=g(r,"IMG",{src:!0,alt:!0,loading:!0,class:!0}),r.forEach(h),this.h()},h(){P(a,o=i[0]+".avif")||u(a,"srcset",o),u(a,"type","image/avif"),u(a,"class","svelte-uf68q5"),k(s.src,n=i[0]+"."+i[2])||u(s,"src",n),u(s,"alt",i[1]),u(s,"loading",i[3]),u(s,"class","svelte-uf68q5"),v(t,l),E(t,"svelte-uf68q5",!0)},m(e,r){R(e,t,r),m(t,a),m(t,f),m(t,s)},p(e,[r]){r&1&&o!==(o=e[0]+".avif")&&u(a,"srcset",o),r&5&&!k(s.src,n=e[0]+"."+e[2])&&u(s,"src",n),r&2&&u(s,"alt",e[1]),r&8&&u(s,"loading",e[3]),v(t,l=U(c,[r&16&&e[4]])),E(t,"svelte-uf68q5",!0)},i:q,o:q,d(e){e&&h(t)}}}function B(i,t,a){const o=["src","alt","fallbackExtension","loading"];let f=b(t,o),{src:s}=t,{alt:n=""}=t,{fallbackExtension:c="jpg"}=t,{loading:l=void 0}=t;return i.$$set=e=>{t=d(d({},t),j(e)),a(4,f=b(t,o)),"src"in e&&a(0,s=e.src),"alt"in e&&a(1,n=e.alt),"fallbackExtension"in e&&a(2,c=e.fallbackExtension),"loading"in e&&a(3,l=e.loading)},[s,n,c,l,f]}class M extends p{constructor(t){super(),T(this,t,B,z,y,{src:0,alt:1,fallbackExtension:2,loading:3})}}export{M as I};