import{s as ne,n as re,e as ce}from"./scheduler.e108d1fd.js";import{S as ie,i as ue,g as l,m as g,s as A,h as r,j as o,n as S,f as a,c as I,k as t,a as he,x as e,A as ve}from"./index.5ed8cc18.js";import{t as oe}from"./theme.store.8735a582.js";import{b as k}from"./paths.b9741811.js";function fe(d){let n,h,i,_,C,u,s,H,m,O,V,L,p,w,B,N,y,D,G,T,E,M,R,x,b,q,$,v,U,z,F;return{c(){n=l("nav"),h=l("div"),i=l("a"),_=g("RHHS STUCO"),C=A(),u=l("div"),s=l("ul"),H=l("li"),m=l("a"),O=g("Home"),V=A(),L=l("li"),p=l("a"),w=g("Events"),B=A(),N=l("li"),y=l("a"),D=g("Clubs"),G=A(),T=l("li"),E=l("a"),M=g("Gallery"),R=A(),x=l("li"),b=l("a"),q=g("Members"),$=A(),v=l("button"),this.h()},l(j){n=r(j,"NAV",{class:!0});var f=o(n);h=r(f,"DIV",{class:!0});var J=o(h);i=r(J,"A",{href:!0,class:!0});var K=o(i);_=S(K,"RHHS STUCO"),K.forEach(a),J.forEach(a),C=I(f),u=r(f,"DIV",{class:!0});var P=o(u);s=r(P,"UL",{class:!0});var c=o(s);H=r(c,"LI",{});var Q=o(H);m=r(Q,"A",{href:!0,class:!0});var W=o(m);O=S(W,"Home"),W.forEach(a),Q.forEach(a),V=I(c),L=r(c,"LI",{});var X=o(L);p=r(X,"A",{href:!0,class:!0});var Y=o(p);w=S(Y,"Events"),Y.forEach(a),X.forEach(a),B=I(c),N=r(c,"LI",{});var Z=o(N);y=r(Z,"A",{href:!0,class:!0});var ee=o(y);D=S(ee,"Clubs"),ee.forEach(a),Z.forEach(a),G=I(c),T=r(c,"LI",{});var te=o(T);E=r(te,"A",{href:!0,class:!0});var ae=o(E);M=S(ae,"Gallery"),ae.forEach(a),te.forEach(a),R=I(c),x=r(c,"LI",{});var se=o(x);b=r(se,"A",{href:!0,class:!0});var le=o(b);q=S(le,"Members"),le.forEach(a),se.forEach(a),$=I(c),v=r(c,"BUTTON",{class:!0,"aria-roledescription":!0}),o(v).forEach(a),c.forEach(a),P.forEach(a),f.forEach(a),this.h()},h(){t(i,"href",k+"/"),t(i,"class","svelte-1uljy59"),t(h,"class","nav__logo svelte-1uljy59"),t(m,"href",k+"/"),t(m,"class","svelte-1uljy59"),t(p,"href",k+"/events"),t(p,"class","svelte-1uljy59"),t(y,"href",k+"/clubs"),t(y,"class","svelte-1uljy59"),t(E,"href",k+"/gallery"),t(E,"class","svelte-1uljy59"),t(b,"href",k+"/members"),t(b,"class","svelte-1uljy59"),t(v,"class",U=d[0]+" change-theme svelte-1uljy59"),t(v,"aria-roledescription","Button which toggles the theme of the website"),t(s,"class","svelte-1uljy59"),t(u,"class","nav__links svelte-1uljy59"),t(n,"class","svelte-1uljy59")},m(j,f){he(j,n,f),e(n,h),e(h,i),e(i,_),e(n,C),e(n,u),e(u,s),e(s,H),e(H,m),e(m,O),e(s,V),e(s,L),e(L,p),e(p,w),e(s,B),e(s,N),e(N,y),e(y,D),e(s,G),e(s,T),e(T,E),e(E,M),e(s,R),e(s,x),e(x,b),e(b,q),e(s,$),e(s,v),z||(F=ve(v,"click",d[1]),z=!0)},p(j,[f]){f&1&&U!==(U=j[0]+" change-theme svelte-1uljy59")&&t(v,"class",U)},i:re,o:re,d(j){j&&a(n),z=!1,F()}}}function de(d,n,h){let i,_;ce(d,oe,u=>h(2,_=u));function C(){oe.update(u=>u==="dark"?"light":"dark")}return d.$$.update=()=>{d.$$.dirty&4&&h(0,i=_==="dark"?"ri-moon-fill":"ri-moon-line")},[i,C,_]}class Ee extends ie{constructor(n){super(),ue(this,n,de,fe,ne,{})}}export{Ee as N};
