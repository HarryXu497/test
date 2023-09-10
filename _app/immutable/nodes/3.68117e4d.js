import{s as fe,f as v,a as T,g,h as I,r as R,c as E,d as w,j as p,B as K,i as W,z as m,C as ae,D as ge,e as le,E as pe,F as $e}from"../chunks/scheduler.cf876aff.js";import{S as me,i as he,g as de,c as _e,a as L,t as M,b as B,d as A,m as P,e as F}from"../chunks/index.c5ecbf8f.js";import{e as X,u as be,o as we}from"../chunks/each.1c53e2f0.js";import{I as ye}from"../chunks/Image.8d2b2308.js";import{H as Ce}from"../chunks/HomePageEvent.82fcb38a.js";import{N as He,M as Te}from"../chunks/Navbar.6010fa71.js";function re(o,t,s){const e=o.slice();return e[5]=t[s],e}function oe(o,t){let s,e,a;return e=new ye({props:{src:t[5]}}),{key:o,first:null,c(){s=le(),B(e.$$.fragment),this.h()},l(n){s=le(),A(e.$$.fragment,n),this.h()},h(){this.first=s},m(n,c){W(n,s,c),P(e,n,c),a=!0},p(n,c){t=n;const C={};c&5&&(C.src=t[5]),e.$set(C)},i(n){a||(L(e.$$.fragment,n),a=!0)},o(n){M(e.$$.fragment,n),a=!1},d(n){n&&w(s),F(e,n)}}}function Ee(o){let t,s,e='<i class="ri-arrow-left-s-line svelte-1hdzpvp"></i>',a,n,c=[],C=new Map,_,y,z='<i class="ri-arrow-right-s-line svelte-1hdzpvp"></i>',$,N,q,H=X([o[0][o[2]]]);const O=i=>i[2];for(let i=0;i<1;i+=1){let l=re(o,H,i),h=O(l);C.set(h,c[i]=oe(h,l))}return{c(){t=v("div"),s=v("button"),s.innerHTML=e,a=T(),n=v("div");for(let i=0;i<1;i+=1)c[i].c();_=T(),y=v("button"),y.innerHTML=z,this.h()},l(i){t=g(i,"DIV",{class:!0});var l=I(t);s=g(l,"BUTTON",{class:!0,"data-svelte-h":!0}),R(s)!=="svelte-12vqehk"&&(s.innerHTML=e),a=E(l),n=g(l,"DIV",{class:!0});var h=I(n);for(let x=0;x<1;x+=1)c[x].l(h);h.forEach(w),_=E(l),y=g(l,"BUTTON",{class:!0,"data-svelte-h":!0}),R(y)!=="svelte-zwlzwo"&&(y.innerHTML=z),l.forEach(w),this.h()},h(){p(s,"class","carousel__left-arrow svelte-1hdzpvp"),K(s,"inside",o[1]==="inside"),p(n,"class","carousel__image svelte-1hdzpvp"),p(y,"class","carousel__right-arrow svelte-1hdzpvp"),K(y,"inside",o[1]==="inside"),p(t,"class","carousel svelte-1hdzpvp")},m(i,l){W(i,t,l),m(t,s),m(t,a),m(t,n);for(let h=0;h<1;h+=1)c[h]&&c[h].m(n,null);m(t,_),m(t,y),$=!0,N||(q=[ae(s,"click",o[4]),ae(y,"click",o[3])],N=!0)},p(i,[l]){(!$||l&2)&&K(s,"inside",i[1]==="inside"),l&5&&(H=X([i[0][i[2]]]),de(),c=be(c,l,O,1,i,H,C,n,we,oe,null,re),_e()),(!$||l&2)&&K(y,"inside",i[1]==="inside")},i(i){if(!$){for(let l=0;l<1;l+=1)L(c[l]);$=!0}},o(i){for(let l=0;l<1;l+=1)M(c[l]);$=!1},d(i){i&&w(t);for(let l=0;l<1;l+=1)c[l].d();N=!1,ge(q)}}}function ie(o,t){return(o%t+t)%t}function Le(o,t,s){let{imageURLs:e}=t,{arrowStyling:a="outside"}=t,n=0;function c(){s(2,n=ie(n+1,e.length))}function C(){s(2,n=ie(n-1,e.length))}return o.$$set=_=>{"imageURLs"in _&&s(0,e=_.imageURLs),"arrowStyling"in _&&s(1,a=_.arrowStyling)},[e,a,n,c,C]}class ke extends me{constructor(t){super(),he(this,t,Le,Ee,fe,{imageURLs:0,arrowStyling:1})}}function ce(o,t,s){const e=o.slice();return e[2]=t[s],e}function ue(o){let t,s;return t=new Ce({props:{event:o[2]}}),{c(){B(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,a){P(t,e,a),s=!0},p(e,a){const n={};a&1&&(n.event=e[2]),t.$set(n)},i(e){s||(L(t.$$.fragment,e),s=!0)},o(e){M(t.$$.fragment,e),s=!1},d(e){F(t,e)}}}function Se(o){let t,s;return t=new ke({props:{imageURLs:o[0].imageURLs,arrowStyling:o[1]?"inside":"outside"}}),{c(){B(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,a){P(t,e,a),s=!0},p(e,a){const n={};a&1&&(n.imageURLs=e[0].imageURLs),a&2&&(n.arrowStyling=e[1]?"inside":"outside"),t.$set(n)},i(e){s||(L(t.$$.fragment,e),s=!0)},o(e){M(t.$$.fragment,e),s=!1},d(e){F(t,e)}}}function Ie(o){let t,s,e,a,n,c,C,_,y='<img class="vector svelte-8mb9jp" src="images/bg-vector.svg" alt=""/>',z,$,N='<img class="people-laptop svelte-8mb9jp" src="images/home-page-people-laptop.png" alt=""/>',q,H,O='<h1 class="svelte-8mb9jp">RHHS STUCO</h1>',i,l,h,x="Upcoming Events",Y,j,Z,k,D,se="Gallery",ee,S,G;c=new He({});let U=X(o[0].events),u=[];for(let r=0;r<U.length;r+=1)u[r]=ue(ce(o,U,r));const ve=r=>M(u[r],1,1,()=>{u[r]=null});return S=new Te({props:{query:"(max-width: 864px)",$$slots:{default:[Se,({matches:r})=>({1:r}),({matches:r})=>r?2:0]},$$scope:{ctx:o}}}),{c(){t=v("meta"),s=T(),e=v("main"),a=v("div"),n=v("header"),B(c.$$.fragment),C=T(),_=v("div"),_.innerHTML=y,z=T(),$=v("div"),$.innerHTML=N,q=T(),H=v("section"),H.innerHTML=O,i=T(),l=v("section"),h=v("h2"),h.textContent=x,Y=T(),j=v("div");for(let r=0;r<u.length;r+=1)u[r].c();Z=T(),k=v("section"),D=v("h2"),D.textContent=se,ee=T(),B(S.$$.fragment),this.h()},l(r){const d=pe("svelte-owf7p8",document.head);t=g(d,"META",{name:!0,content:!0}),d.forEach(w),s=E(r),e=g(r,"MAIN",{});var b=I(e);a=g(b,"DIV",{class:!0});var f=I(a);n=g(f,"HEADER",{class:!0});var V=I(n);A(c.$$.fragment,V),V.forEach(w),C=E(f),_=g(f,"DIV",{class:!0,"data-svelte-h":!0}),R(_)!=="svelte-1y80kh7"&&(_.innerHTML=y),z=E(f),$=g(f,"DIV",{class:!0,"data-svelte-h":!0}),R($)!=="svelte-qenoni"&&($.innerHTML=N),q=E(f),H=g(f,"SECTION",{class:!0,"data-svelte-h":!0}),R(H)!=="svelte-155rcf9"&&(H.innerHTML=O),f.forEach(w),i=E(b),l=g(b,"SECTION",{class:!0});var Q=I(l);h=g(Q,"H2",{class:!0,"data-svelte-h":!0}),R(h)!=="svelte-5y0elb"&&(h.textContent=x),Y=E(Q),j=g(Q,"DIV",{class:!0});var ne=I(j);for(let te=0;te<u.length;te+=1)u[te].l(ne);ne.forEach(w),Q.forEach(w),Z=E(b),k=g(b,"SECTION",{class:!0});var J=I(k);D=g(J,"H2",{class:!0,"data-svelte-h":!0}),R(D)!=="svelte-8pzo3s"&&(D.textContent=se),ee=E(J),A(S.$$.fragment,J),J.forEach(w),b.forEach(w),this.h()},h(){document.title="RHHS StuCo",p(t,"name","description"),p(t,"content","StuCo is a group of students who come together and act as the liason between admin and the student body."),p(n,"class","svelte-8mb9jp"),p(_,"class","vector-container svelte-8mb9jp"),p($,"class","hero-image-container svelte-8mb9jp"),p(H,"class","hero svelte-8mb9jp"),p(a,"class","hero__navbar svelte-8mb9jp"),p(h,"class","svelte-8mb9jp"),p(j,"class","events__list svelte-8mb9jp"),p(l,"class","events svelte-8mb9jp"),p(D,"class","svelte-8mb9jp"),p(k,"class","gallery svelte-8mb9jp")},m(r,d){m(document.head,t),W(r,s,d),W(r,e,d),m(e,a),m(a,n),P(c,n,null),m(a,C),m(a,_),m(a,z),m(a,$),m(a,q),m(a,H),m(e,i),m(e,l),m(l,h),m(l,Y),m(l,j);for(let b=0;b<u.length;b+=1)u[b]&&u[b].m(j,null);m(e,Z),m(e,k),m(k,D),m(k,ee),P(S,k,null),G=!0},p(r,[d]){if(d&1){U=X(r[0].events);let f;for(f=0;f<U.length;f+=1){const V=ce(r,U,f);u[f]?(u[f].p(V,d),L(u[f],1)):(u[f]=ue(V),u[f].c(),L(u[f],1),u[f].m(j,null))}for(de(),f=U.length;f<u.length;f+=1)ve(f);_e()}const b={};d&35&&(b.$$scope={dirty:d,ctx:r}),S.$set(b)},i(r){if(!G){L(c.$$.fragment,r);for(let d=0;d<U.length;d+=1)L(u[d]);L(S.$$.fragment,r),G=!0}},o(r){M(c.$$.fragment,r),u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)M(u[d]);M(S.$$.fragment,r),G=!1},d(r){r&&(w(s),w(e)),w(t),F(c),$e(u,r),F(S)}}}function Me(o,t,s){let{data:e}=t;return o.$$set=a=>{"data"in a&&s(0,e=a.data)},o.$$.update=()=>{o.$$.dirty&1&&s(0,e.events=e.events.map(a=>({...a,startDate:new Date(a.startDate),endDate:new Date(a.endDate)})),e)},[e]}class qe extends me{constructor(t){super(),he(this,t,Me,Ie,fe,{data:0})}}export{qe as component};
