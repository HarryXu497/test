import{s as ve,f as v,a as U,g as h,h as k,r as Z,c as q,d as m,j as _,B as re,i as W,z as c,C as ye,D as qe,e as ue,l as ne,m as ie,n as oe,u as we,E as Me,F as _e,G as Ee,A as Re}from"../chunks/scheduler.3f1532c0.js";import{S as he,i as me,g as He,c as Te,a as j,t as P,b as x,d as ee,m as te,e as se}from"../chunks/index.bb2186ed.js";import{e as J,u as Ne,o as Ve}from"../chunks/each.33c78c84.js";import{e as ce}from"../chunks/singletons.9c5a80a8.js";import{I as je}from"../chunks/Image.ee3a4e23.js";import{N as Ae,M as Oe}from"../chunks/Navbar.6304e560.js";import{t as Pe}from"../chunks/theme.store.b1102f0d.js";function be(r,e,s){const t=r.slice();return t[5]=e[s],t}function De(r,e){let s,t,l;return t=new je({props:{src:e[5]}}),{key:r,first:null,c(){s=ue(),x(t.$$.fragment),this.h()},l(a){s=ue(),ee(t.$$.fragment,a),this.h()},h(){this.first=s},m(a,o){W(a,s,o),te(t,a,o),l=!0},p(a,o){e=a;const g={};o&5&&(g.src=e[5]),t.$set(g)},i(a){l||(j(t.$$.fragment,a),l=!0)},o(a){P(t.$$.fragment,a),l=!1},d(a){a&&m(s),se(t,a)}}}function ze(r){let e,s,t='<i class="ri-arrow-left-s-line svelte-10w124d"></i>',l,a,o=[],g=new Map,b,p,C='<i class="ri-arrow-right-s-line svelte-10w124d"></i>',y,T,H,L=J([r[0][r[2]]]);const V=f=>f[2];for(let f=0;f<1;f+=1){let i=be(r,L,f),D=V(i);g.set(D,o[f]=De(D,i))}return{c(){e=v("div"),s=v("button"),s.innerHTML=t,l=U(),a=v("div");for(let f=0;f<1;f+=1)o[f].c();b=U(),p=v("button"),p.innerHTML=C,this.h()},l(f){e=h(f,"DIV",{class:!0});var i=k(e);s=h(i,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-12vqehk"&&(s.innerHTML=t),l=q(i),a=h(i,"DIV",{class:!0});var D=k(a);for(let S=0;S<1;S+=1)o[S].l(D);D.forEach(m),b=q(i),p=h(i,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(p)!=="svelte-zwlzwo"&&(p.innerHTML=C),i.forEach(m),this.h()},h(){_(s,"class","carousel__left-arrow svelte-10w124d"),re(s,"inside",r[1]==="inside"),_(a,"class","carousel__image svelte-10w124d"),_(p,"class","carousel__right-arrow svelte-10w124d"),re(p,"inside",r[1]==="inside"),_(e,"class","carousel svelte-10w124d")},m(f,i){W(f,e,i),c(e,s),c(e,l),c(e,a);for(let D=0;D<1;D+=1)o[D]&&o[D].m(a,null);c(e,b),c(e,p),y=!0,T||(H=[ye(s,"click",r[4]),ye(p,"click",r[3])],T=!0)},p(f,[i]){(!y||i&2)&&re(s,"inside",f[1]==="inside"),i&5&&(L=J([f[0][f[2]]]),He(),o=Ne(o,i,V,1,f,L,g,a,Ve,De,null,be),Te()),(!y||i&2)&&re(p,"inside",f[1]==="inside")},i(f){if(!y){for(let i=0;i<1;i+=1)j(o[i]);y=!0}},o(f){for(let i=0;i<1;i+=1)P(o[i]);y=!1},d(f){f&&m(e);for(let i=0;i<1;i+=1)o[i].d();T=!1,qe(H)}}}function Se(r,e){return(r%e+e)%e}function Be(r,e,s){let{imageURLs:t}=e,{arrowStyling:l="outside"}=e,a=0;function o(){s(2,a=Se(a+1,t.length))}function g(){s(2,a=Se(a-1,t.length))}return r.$$set=b=>{"imageURLs"in b&&s(0,t=b.imageURLs),"arrowStyling"in b&&s(1,l=b.arrowStyling)},[t,l,a,o,g]}class Ge extends he{constructor(e){super(),me(this,e,Be,ze,ve,{imageURLs:0,arrowStyling:1})}}function Fe(r){let e,s,t,l=r[0].startDate.getDate()+"",a,o,g,b=r[0].startDate.toLocaleString("default",{month:"short"})+"",p,C,y,T,H=r[0].name+"",L,V,f,i=r[0].description+"",D;return{c(){e=v("div"),s=v("div"),t=v("span"),a=ne(l),o=U(),g=v("span"),p=ne(b),C=U(),y=v("div"),T=v("h3"),L=ne(H),V=U(),f=v("p"),D=ne(i),this.h()},l(S){e=h(S,"DIV",{class:!0});var w=k(e);s=h(w,"DIV",{class:!0});var M=k(s);t=h(M,"SPAN",{class:!0});var X=k(t);a=ie(X,l),X.forEach(m),o=q(M),g=h(M,"SPAN",{class:!0});var F=k(g);p=ie(F,b),F.forEach(m),M.forEach(m),C=q(w),y=h(w,"DIV",{class:!0});var R=k(y);T=h(R,"H3",{class:!0});var K=k(T);L=ie(K,H),K.forEach(m),V=q(R),f=h(R,"P",{class:!0});var N=k(f);D=ie(N,i),N.forEach(m),R.forEach(m),w.forEach(m),this.h()},h(){_(t,"class","event__date__day svelte-1fm3qjr"),_(g,"class","event__date__month svelte-1fm3qjr"),_(s,"class","event__date svelte-1fm3qjr"),_(T,"class","event__info__title svelte-1fm3qjr"),_(f,"class","event__info__description svelte-1fm3qjr"),_(y,"class","event__info svelte-1fm3qjr"),_(e,"class","event svelte-1fm3qjr")},m(S,w){W(S,e,w),c(e,s),c(s,t),c(t,a),c(s,o),c(s,g),c(g,p),c(e,C),c(e,y),c(y,T),c(T,L),c(y,V),c(y,f),c(f,D)},p(S,[w]){w&1&&l!==(l=S[0].startDate.getDate()+"")&&oe(a,l),w&1&&b!==(b=S[0].startDate.toLocaleString("default",{month:"short"})+"")&&oe(p,b),w&1&&H!==(H=S[0].name+"")&&oe(L,H),w&1&&i!==(i=S[0].description+"")&&oe(D,i)},i:we,o:we,d(S){S&&m(e)}}}function Ke(r,e,s){let{event:t}=e;return r.$$set=l=>{"event"in l&&s(0,t=l.event)},[t]}class Qe extends he{constructor(e){super(),me(this,e,Ke,Fe,ve,{event:0})}}function Ie(r,e,s){const t=r.slice();return t[4]=e[s],t}function ke(r,e,s){const t=r.slice();return t[7]=e[s],t}function Ce(r){let e,s;return{c(){e=v("link"),this.h()},l(t){e=h(t,"LINK",{rel:!0,as:!0,href:!0}),this.h()},h(){_(e,"rel","preload"),_(e,"as","image"),_(e,"href",s=`${r[7]}.avif`)},m(t,l){W(t,e,l)},p(t,l){l&1&&s!==(s=`${t[7]}.avif`)&&_(e,"href",s)},d(t){t&&m(e)}}}function Le(r){let e,s;return e=new Qe({props:{event:r[4]}}),{c(){x(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,l){te(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.event=t[4]),e.$set(a)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){se(e,t)}}}function Je(r){let e,s;return e=new Ge({props:{imageURLs:r[0].imageURLs,arrowStyling:r[3]?"inside":"outside"}}),{c(){x(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,l){te(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.imageURLs=t[0].imageURLs),l&8&&(a.arrowStyling=t[3]?"inside":"outside"),e.$set(a)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){se(e,t)}}}function We(r){let e,s,t,l,a,o,g,b,p,C,y,T,H,L,V,f,i,D='<h1 class="svelte-rirvyi">RHHS STUCO</h1>',S,w,M,X="Upcoming Events",F,R,K,N,z,de="Gallery",fe,A,Y,Q=J(r[0].imageURLs.map(r[2])),I=[];for(let n=0;n<Q.length;n+=1)I[n]=Ce(ke(r,Q,n));g=new Ae({});let B=J(r[0].events),d=[];for(let n=0;n<B.length;n+=1)d[n]=Le(Ie(r,B,n));const Ue=n=>P(d[n],1,1,()=>{d[n]=null});return A=new Oe({props:{query:"(max-width: 864px)",$$slots:{default:[Je,({matches:n})=>({3:n}),({matches:n})=>n?8:0]},$$scope:{ctx:r}}}),{c(){e=v("meta");for(let n=0;n<I.length;n+=1)I[n].c();s=ue(),t=U(),l=v("main"),a=v("div"),o=v("header"),x(g.$$.fragment),b=U(),p=v("div"),C=v("img"),T=U(),H=v("div"),L=v("img"),f=U(),i=v("section"),i.innerHTML=D,S=U(),w=v("section"),M=v("h2"),M.textContent=X,F=U(),R=v("div");for(let n=0;n<d.length;n+=1)d[n].c();K=U(),N=v("section"),z=v("h2"),z.textContent=de,fe=U(),x(A.$$.fragment),this.h()},l(n){const $=Me("svelte-1brm7l1",document.head);e=h($,"META",{name:!0,content:!0});for(let G=0;G<I.length;G+=1)I[G].l($);s=ue(),$.forEach(m),t=q(n),l=h(n,"MAIN",{class:!0});var E=k(l);a=h(E,"DIV",{class:!0});var u=k(a);o=h(u,"HEADER",{class:!0});var O=k(o);ee(g.$$.fragment,O),O.forEach(m),b=q(u),p=h(u,"DIV",{class:!0});var ge=k(p);C=h(ge,"IMG",{class:!0,src:!0,alt:!0}),ge.forEach(m),T=q(u),H=h(u,"DIV",{class:!0});var pe=k(H);L=h(pe,"IMG",{class:!0,src:!0,alt:!0}),pe.forEach(m),f=q(u),i=h(u,"SECTION",{class:!0,"data-svelte-h":!0}),Z(i)!=="svelte-155rcf9"&&(i.innerHTML=D),u.forEach(m),S=q(E),w=h(E,"SECTION",{class:!0});var ae=k(w);M=h(ae,"H2",{class:!0,"data-svelte-h":!0}),Z(M)!=="svelte-5y0elb"&&(M.textContent=X),F=q(ae),R=h(ae,"DIV",{class:!0});var $e=k(R);for(let G=0;G<d.length;G+=1)d[G].l($e);$e.forEach(m),ae.forEach(m),K=q(E),N=h(E,"SECTION",{class:!0});var le=k(N);z=h(le,"H2",{class:!0,"data-svelte-h":!0}),Z(z)!=="svelte-8pzo3s"&&(z.textContent=de),fe=q(le),ee(A.$$.fragment,le),le.forEach(m),E.forEach(m),this.h()},h(){document.title="RHHS StuCo",_(e,"name","description"),_(e,"content","StuCo is a group of students who come together and act as the liason between admin and the student body."),_(o,"class","svelte-rirvyi"),_(C,"class","vector svelte-rirvyi"),_e(C.src,y=ce+"/images/bg-vector-"+r[1]+".svg")||_(C,"src",y),_(C,"alt",""),_(p,"class","vector-container svelte-rirvyi"),_(L,"class","people-laptop svelte-rirvyi"),_e(L.src,V=ce+"/images/home-page-people-laptop.png")||_(L,"src",V),_(L,"alt",""),_(H,"class","hero-image-container svelte-rirvyi"),_(i,"class","hero svelte-rirvyi"),_(a,"class","hero__navbar svelte-rirvyi"),_(M,"class","svelte-rirvyi"),_(R,"class","events__list svelte-rirvyi"),_(w,"class","events svelte-rirvyi"),_(z,"class","svelte-rirvyi"),_(N,"class","gallery svelte-rirvyi"),_(l,"class","svelte-rirvyi")},m(n,$){c(document.head,e);for(let E=0;E<I.length;E+=1)I[E]&&I[E].m(document.head,null);c(document.head,s),W(n,t,$),W(n,l,$),c(l,a),c(a,o),te(g,o,null),c(a,b),c(a,p),c(p,C),c(a,T),c(a,H),c(H,L),c(a,f),c(a,i),c(l,S),c(l,w),c(w,M),c(w,F),c(w,R);for(let E=0;E<d.length;E+=1)d[E]&&d[E].m(R,null);c(l,K),c(l,N),c(N,z),c(N,fe),te(A,N,null),Y=!0},p(n,[$]){if($&1){Q=J(n[0].imageURLs.map(n[2]));let u;for(u=0;u<Q.length;u+=1){const O=ke(n,Q,u);I[u]?I[u].p(O,$):(I[u]=Ce(O),I[u].c(),I[u].m(s.parentNode,s))}for(;u<I.length;u+=1)I[u].d(1);I.length=Q.length}if((!Y||$&2&&!_e(C.src,y=ce+"/images/bg-vector-"+n[1]+".svg"))&&_(C,"src",y),$&1){B=J(n[0].events);let u;for(u=0;u<B.length;u+=1){const O=Ie(n,B,u);d[u]?(d[u].p(O,$),j(d[u],1)):(d[u]=Le(O),d[u].c(),j(d[u],1),d[u].m(R,null))}for(He(),u=B.length;u<d.length;u+=1)Ue(u);Te()}const E={};$&1033&&(E.$$scope={dirty:$,ctx:n}),A.$set(E)},i(n){if(!Y){j(g.$$.fragment,n);for(let $=0;$<B.length;$+=1)j(d[$]);j(A.$$.fragment,n),Y=!0}},o(n){P(g.$$.fragment,n),d=d.filter(Boolean);for(let $=0;$<d.length;$+=1)P(d[$]);P(A.$$.fragment,n),Y=!1},d(n){n&&(m(t),m(l)),m(e),Ee(I,n),m(s),se(g),Ee(d,n),se(A)}}}function Xe(r,e,s){let t;Re(r,Pe,o=>s(1,t=o));let{data:l}=e;const a=o=>`${ce}/${o}`;return r.$$set=o=>{"data"in o&&s(0,l=o.data)},r.$$.update=()=>{r.$$.dirty&1&&s(0,l.events=l.events.map(o=>({...o,startDate:new Date(o.startDate),endDate:new Date(o.endDate)})),l)},[l,t,a]}class lt extends he{constructor(e){super(),me(this,e,Xe,We,ve,{data:0})}}export{lt as component};