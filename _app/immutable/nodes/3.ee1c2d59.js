import{i as me,f as ge,h as q,j as pe,s as ue,k as se,n as $,r as ke}from"../chunks/scheduler.8746962a.js";import{p as he,t as j,b as _e,d as y,S as fe,i as ve,g as m,s as w,h as g,j as U,x as N,c as D,f as b,k as v,a as A,y as h,z as le,r as J,A as be,u as Q,v as W,w as X,B as Ce}from"../chunks/index.7fa94f9c.js";import{e as ne,H as $e}from"../chunks/HomePageEvent.5644fdef.js";import{b as ae}from"../chunks/paths.a8c38f1a.js";import{N as Ee}from"../chunks/Navbar.8fd88bab.js";function re(s,e){const n=e.token={};function t(l,a,i,C){if(e.token!==n)return;e.resolved=C;let _=e.ctx;i!==void 0&&(_=_.slice(),_[i]=C);const d=l&&(e.current=l)(_);let x=!1;e.block&&(e.blocks?e.blocks.forEach((p,T)=>{T!==a&&p&&(he(),j(p,1,1,()=>{e.blocks[T]===p&&(e.blocks[T]=null)}),_e())}):e.block.d(1),d.c(),y(d,1),d.m(e.mount(),e.anchor),x=!0),e.block=d,e.blocks&&(e.blocks[a]=d),x&&pe()}if(me(s)){const l=ge();if(s.then(a=>{q(l),t(e.then,1,e.value,a),q(null)},a=>{if(q(l),t(e.catch,2,e.error,a),q(null),!e.hasCatch)throw a}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,s),!0;e.resolved=s}}function Le(s,e,n){const t=e.slice(),{resolved:l}=s;s.current===s.then&&(t[s.value]=l),s.current===s.catch&&(t[s.error]=l),s.block.p(t,n)}function xe(s){let e,n,t='<i class="ri-arrow-left-s-line svelte-1kgjfs4"></i>',l,a,i,C,_,d,x='<i class="ri-arrow-right-s-line svelte-1kgjfs4"></i>',p,T;return{c(){e=m("div"),n=m("button"),n.innerHTML=t,l=w(),a=m("div"),i=m("img"),_=w(),d=m("button"),d.innerHTML=x,this.h()},l(E){e=g(E,"DIV",{class:!0});var f=U(e);n=g(f,"BUTTON",{class:!0,"data-svelte-h":!0}),N(n)!=="svelte-1e68g0r"&&(n.innerHTML=t),l=D(f),a=g(f,"DIV",{class:!0});var L=U(a);i=g(L,"IMG",{src:!0,alt:!0,class:!0}),L.forEach(b),_=D(f),d=g(f,"BUTTON",{class:!0,"data-svelte-h":!0}),N(d)!=="svelte-1iwf3u9"&&(d.innerHTML=x),f.forEach(b),this.h()},h(){v(n,"class","carousel__left-arrow svelte-1kgjfs4"),se(i.src,C=ae+"/"+s[0])||v(i,"src",C),v(i,"alt",""),v(i,"class","svelte-1kgjfs4"),v(a,"class","carousel__image svelte-1kgjfs4"),v(d,"class","carousel__right-arrow svelte-1kgjfs4"),v(e,"class","carousel svelte-1kgjfs4")},m(E,f){A(E,e,f),h(e,n),h(e,l),h(e,a),h(a,i),h(e,_),h(e,d),p||(T=[le(n,"click",s[2]),le(d,"click",s[1])],p=!0)},p(E,[f]){f&1&&!se(i.src,C=ae+"/"+E[0])&&v(i,"src",C)},i:$,o:$,d(E){E&&b(e),p=!1,ke(T)}}}function ce(s,e){return(s%e+e)%e}function Te(s,e,n){let t,{imageURLs:l}=e,a=0;function i(){n(4,a=ce(a+1,l.length))}function C(){n(4,a=ce(a-1,l.length)),console.log(a)}return s.$$set=_=>{"imageURLs"in _&&n(3,l=_.imageURLs)},s.$$.update=()=>{s.$$.dirty&24&&n(0,t=l[a])},[t,i,C,l,a]}class He extends fe{constructor(e){super(),ve(this,e,Te,xe,ue,{imageURLs:3})}}function oe(s,e,n){const t=s.slice();return t[2]=e[n],t}function ie(s){let e,n;return e=new $e({props:{event:s[2]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,l){W(e,t,l),n=!0},p(t,l){const a={};l&1&&(a.event=t[2]),e.$set(a)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Ie(s){return{c:$,l:$,m:$,p:$,i:$,o:$,d:$}}function we(s){let e,n;return e=new He({props:{imageURLs:s[1]}}),{c(){J(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,l){W(e,t,l),n=!0},p(t,l){const a={};l&1&&(a.imageURLs=t[1]),e.$set(a)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function De(s){let e,n="waiting...";return{c(){e=m("p"),e.textContent=n},l(t){e=g(t,"P",{"data-svelte-h":!0}),N(e)!=="svelte-ccu541"&&(e.textContent=n)},m(t,l){A(t,e,l)},p:$,i:$,o:$,d(t){t&&b(e)}}}function Ue(s){let e,n,t,l,a,i,C,_,d='<img src="images/bg-vector.svg"/>',x,p,T='<h1 class="svelte-8au01i">RHHS STUCO</h1>',E,f,L,Y="Upcoming Events",z,M,G,H,S,Z="Gallery",K,O,P;i=new Ee({});let R=ne(s[0].events),o=[];for(let c=0;c<R.length;c+=1)o[c]=ie(oe(s,R,c));const de=c=>j(o[c],1,1,()=>{o[c]=null});let k={ctx:s,current:null,token:null,hasCatch:!1,pending:De,then:we,catch:Ie,value:1,blocks:[,,,]};return re(O=Promise.all(s[0].imageURLs),k),{c(){e=m("link"),n=w(),t=m("main"),l=m("div"),a=m("header"),J(i.$$.fragment),C=w(),_=m("div"),_.innerHTML=d,x=w(),p=m("section"),p.innerHTML=T,E=w(),f=m("section"),L=m("h2"),L.textContent=Y,z=w(),M=m("div");for(let c=0;c<o.length;c+=1)o[c].c();G=w(),H=m("section"),S=m("h2"),S.textContent=Z,K=w(),k.block.c(),this.h()},l(c){const u=be("svelte-1fn41tl",document.head);e=g(u,"LINK",{rel:!0,href:!0}),u.forEach(b),n=D(c),t=g(c,"MAIN",{});var r=U(t);l=g(r,"DIV",{class:!0});var I=U(l);a=g(I,"HEADER",{class:!0});var ee=U(a);Q(i.$$.fragment,ee),ee.forEach(b),C=D(I),_=g(I,"DIV",{class:!0,"data-svelte-h":!0}),N(_)!=="svelte-19ltq75"&&(_.innerHTML=d),x=D(I),p=g(I,"SECTION",{class:!0,"data-svelte-h":!0}),N(p)!=="svelte-155rcf9"&&(p.innerHTML=T),I.forEach(b),E=D(r),f=g(r,"SECTION",{class:!0});var V=U(f);L=g(V,"H2",{class:!0,"data-svelte-h":!0}),N(L)!=="svelte-5y0elb"&&(L.textContent=Y),z=D(V),M=g(V,"DIV",{class:!0});var te=U(M);for(let F=0;F<o.length;F+=1)o[F].l(te);te.forEach(b),V.forEach(b),G=D(r),H=g(r,"SECTION",{class:!0});var B=U(H);S=g(B,"H2",{"data-svelte-h":!0}),N(S)!=="svelte-8pzo3s"&&(S.textContent=Z),K=D(B),k.block.l(B),B.forEach(b),r.forEach(b),this.h()},h(){v(e,"rel","preconnect"),v(e,"href","https://drive.google.com"),v(a,"class","svelte-8au01i"),v(_,"class","vector-container svelte-8au01i"),v(p,"class","hero svelte-8au01i"),v(l,"class","hero__navbar svelte-8au01i"),v(L,"class","svelte-8au01i"),v(M,"class","events__list svelte-8au01i"),v(f,"class","events svelte-8au01i"),v(H,"class","gallery svelte-8au01i")},m(c,u){h(document.head,e),A(c,n,u),A(c,t,u),h(t,l),h(l,a),W(i,a,null),h(l,C),h(l,_),h(l,x),h(l,p),h(t,E),h(t,f),h(f,L),h(f,z),h(f,M);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(M,null);h(t,G),h(t,H),h(H,S),h(H,K),k.block.m(H,k.anchor=null),k.mount=()=>H,k.anchor=null,P=!0},p(c,[u]){if(s=c,u&1){R=ne(s[0].events);let r;for(r=0;r<R.length;r+=1){const I=oe(s,R,r);o[r]?(o[r].p(I,u),y(o[r],1)):(o[r]=ie(I),o[r].c(),y(o[r],1),o[r].m(M,null))}for(he(),r=R.length;r<o.length;r+=1)de(r);_e()}k.ctx=s,u&1&&O!==(O=Promise.all(s[0].imageURLs))&&re(O,k)||Le(k,s,u)},i(c){if(!P){y(i.$$.fragment,c);for(let u=0;u<R.length;u+=1)y(o[u]);y(k.block),P=!0}},o(c){j(i.$$.fragment,c),o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)j(o[u]);for(let u=0;u<3;u+=1){const r=k.blocks[u];j(r)}P=!1},d(c){c&&(b(n),b(t)),b(e),X(i),Ce(o,c),k.block.d(),k.token=null,k=null}}}function ye(s,e,n){let{data:t}=e;return s.$$set=l=>{"data"in l&&n(0,t=l.data)},s.$$.update=()=>{s.$$.dirty&1&&n(0,t.events=t.events.map(l=>({...l,startDate:new Date(l.startDate),endDate:new Date(l.endDate)})),t),s.$$.dirty&1&&console.log(t)},[t]}class Oe extends fe{constructor(e){super(),ve(this,e,ye,Ue,ue,{data:0})}}export{Oe as component};
