import{s as ne,n as re,e as ce}from"./scheduler.8746962a.js";import{S as he,i as ie,g as l,m as S,s as A,h as r,j as o,n as I,f as t,c as k,k as s,a as de,y as e,z as ve}from"./index.7fa94f9c.js";import{t as oe}from"./theme.store.ac210dea.js";import{b as C}from"./paths.a8c38f1a.js";function fe(f){let n,d,h,u,H,i,a,L,_,V,D,N,m,G,M,T,p,R,j,U,E,q,z,x,b,B,$,g,O,w,F;return{c(){n=l("nav"),d=l("div"),h=l("a"),u=S("RHHS STUCO"),H=A(),i=l("div"),a=l("ul"),L=l("li"),_=l("a"),V=S("Home"),D=A(),N=l("li"),m=l("a"),G=S("Events"),M=A(),T=l("li"),p=l("a"),R=S("Clubs"),j=A(),U=l("li"),E=l("a"),q=S("Gallery"),z=A(),x=l("li"),b=l("a"),B=S("Members"),$=A(),g=l("button"),this.h()},l(y){n=r(y,"NAV",{class:!0});var v=o(n);d=r(v,"DIV",{class:!0});var J=o(d);h=r(J,"A",{href:!0,class:!0});var K=o(h);u=I(K,"RHHS STUCO"),K.forEach(t),J.forEach(t),H=k(v),i=r(v,"DIV",{class:!0});var P=o(i);a=r(P,"UL",{class:!0});var c=o(a);L=r(c,"LI",{});var Q=o(L);_=r(Q,"A",{href:!0,class:!0});var W=o(_);V=I(W,"Home"),W.forEach(t),Q.forEach(t),D=k(c),N=r(c,"LI",{});var X=o(N);m=r(X,"A",{href:!0,class:!0});var Y=o(m);G=I(Y,"Events"),Y.forEach(t),X.forEach(t),M=k(c),T=r(c,"LI",{});var Z=o(T);p=r(Z,"A",{href:!0,class:!0});var ee=o(p);R=I(ee,"Clubs"),ee.forEach(t),Z.forEach(t),j=k(c),U=r(c,"LI",{});var se=o(U);E=r(se,"A",{href:!0,class:!0});var te=o(E);q=I(te,"Gallery"),te.forEach(t),se.forEach(t),z=k(c),x=r(c,"LI",{});var ae=o(x);b=r(ae,"A",{href:!0,class:!0});var le=o(b);B=I(le,"Members"),le.forEach(t),ae.forEach(t),$=k(c),g=r(c,"BUTTON",{class:!0}),o(g).forEach(t),c.forEach(t),P.forEach(t),v.forEach(t),this.h()},h(){s(h,"href",C+"/"),s(h,"class","svelte-11s5ohd"),s(d,"class","nav__logo svelte-11s5ohd"),s(_,"href",C+"/"),s(_,"class","svelte-11s5ohd"),s(m,"href",C+"/events"),s(m,"class","svelte-11s5ohd"),s(p,"href",C+"/clubs"),s(p,"class","svelte-11s5ohd"),s(E,"href",C+"/gallery"),s(E,"class","svelte-11s5ohd"),s(b,"href",C+"/members"),s(b,"class","svelte-11s5ohd"),s(g,"class",O=f[0]+" change-theme svelte-11s5ohd"),s(a,"class","svelte-11s5ohd"),s(i,"class","nav__links svelte-11s5ohd"),s(n,"class","svelte-11s5ohd")},m(y,v){de(y,n,v),e(n,d),e(d,h),e(h,u),e(n,H),e(n,i),e(i,a),e(a,L),e(L,_),e(_,V),e(a,D),e(a,N),e(N,m),e(m,G),e(a,M),e(a,T),e(T,p),e(p,R),e(a,j),e(a,U),e(U,E),e(E,q),e(a,z),e(a,x),e(x,b),e(b,B),e(a,$),e(a,g),w||(F=ve(g,"click",f[1]),w=!0)},p(y,[v]){v&1&&O!==(O=y[0]+" change-theme svelte-11s5ohd")&&s(g,"class",O)},i:re,o:re,d(y){y&&t(n),w=!1,F()}}}function ue(f,n,d){let h,u;ce(f,oe,i=>d(2,u=i));function H(){oe.update(i=>i==="dark"?"light":"dark")}return f.$$.update=()=>{f.$$.dirty&4&&d(0,h=u==="dark"?"ri-moon-fill":"ri-moon-line")},[h,H,u]}class be extends he{constructor(n){super(),ie(this,n,ue,fe,ne,{})}}export{be as N};
