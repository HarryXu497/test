import{s as _e,f as m,a as U,g as v,h as k,r as Z,c as q,d,j as h,B as re,i as W,z as i,C as $e,D as qe,e as ue,l as oe,m as ie,n as ce,u as be,E as Me,F as he,G as we,A as Re}from"../chunks/scheduler.f7f270fa.js";import{S as me,i as ve,g as He,c as Te,a as j,t as P,b as ee,d as te,m as se,e as ae}from"../chunks/index.1550c679.js";import{e as J,u as Ne,o as Ve}from"../chunks/each.df28e1f8.js";import{b as x}from"../chunks/paths.f73b9679.js";import{I as je}from"../chunks/Image.01d2590c.js";import{N as Ae,M as Oe}from"../chunks/Navbar.2227acc8.js";import{t as Pe}from"../chunks/theme.store.141eacc2.js";function Ee(n,e,s){const t=n.slice();return t[5]=e[s],t}function De(n,e){let s,t,l;return t=new je({props:{src:e[5]}}),{key:n,first:null,c(){s=ue(),ee(t.$$.fragment),this.h()},l(a){s=ue(),te(t.$$.fragment,a),this.h()},h(){this.first=s},m(a,_){W(a,s,_),se(t,a,_),l=!0},p(a,_){e=a;const u={};_&5&&(u.src=e[5]),t.$set(u)},i(a){l||(j(t.$$.fragment,a),l=!0)},o(a){P(t.$$.fragment,a),l=!1},d(a){a&&d(s),ae(t,a)}}}function ze(n){let e,s,t='<i class="ri-arrow-left-s-line svelte-gn8bw0"></i>',l,a,_=[],u=new Map,E,p,C='<i class="ri-arrow-right-s-line svelte-gn8bw0"></i>',$,T,H,L=J([n[0][n[2]]]);const V=f=>f[2];for(let f=0;f<1;f+=1){let o=Ee(n,L,f),D=V(o);u.set(D,_[f]=De(D,o))}return{c(){e=m("div"),s=m("button"),s.innerHTML=t,l=U(),a=m("div");for(let f=0;f<1;f+=1)_[f].c();E=U(),p=m("button"),p.innerHTML=C,this.h()},l(f){e=v(f,"DIV",{class:!0});var o=k(e);s=v(o,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-12vqehk"&&(s.innerHTML=t),l=q(o),a=v(o,"DIV",{class:!0});var D=k(a);for(let S=0;S<1;S+=1)_[S].l(D);D.forEach(d),E=q(o),p=v(o,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(p)!=="svelte-zwlzwo"&&(p.innerHTML=C),o.forEach(d),this.h()},h(){h(s,"class","carousel__left-arrow svelte-gn8bw0"),re(s,"inside",n[1]==="inside"),h(a,"class","carousel__image svelte-gn8bw0"),h(p,"class","carousel__right-arrow svelte-gn8bw0"),re(p,"inside",n[1]==="inside"),h(e,"class","carousel svelte-gn8bw0")},m(f,o){W(f,e,o),i(e,s),i(e,l),i(e,a);for(let D=0;D<1;D+=1)_[D]&&_[D].m(a,null);i(e,E),i(e,p),$=!0,T||(H=[$e(s,"click",n[4]),$e(p,"click",n[3])],T=!0)},p(f,[o]){(!$||o&2)&&re(s,"inside",f[1]==="inside"),o&5&&(L=J([f[0][f[2]]]),He(),_=Ne(_,o,V,1,f,L,u,a,Ve,De,null,Ee),Te()),(!$||o&2)&&re(p,"inside",f[1]==="inside")},i(f){if(!$){for(let o=0;o<1;o+=1)j(_[o]);$=!0}},o(f){for(let o=0;o<1;o+=1)P(_[o]);$=!1},d(f){f&&d(e);for(let o=0;o<1;o+=1)_[o].d();T=!1,qe(H)}}}function Se(n,e){return(n%e+e)%e}function Be(n,e,s){let{imageURLs:t}=e,{arrowStyling:l="outside"}=e,a=0;function _(){s(2,a=Se(a+1,t.length))}function u(){s(2,a=Se(a-1,t.length))}return n.$$set=E=>{"imageURLs"in E&&s(0,t=E.imageURLs),"arrowStyling"in E&&s(1,l=E.arrowStyling)},[t,l,a,_,u]}class Ge extends me{constructor(e){super(),ve(this,e,Be,ze,_e,{imageURLs:0,arrowStyling:1})}}function Fe(n){let e,s,t,l=n[0].startDate.getDate()+"",a,_,u,E=n[0].startDate.toLocaleString("default",{month:"short"})+"",p,C,$,T,H=n[0].name+"",L,V,f,o=n[0].description+"",D;return{c(){e=m("div"),s=m("div"),t=m("span"),a=oe(l),_=U(),u=m("span"),p=oe(E),C=U(),$=m("div"),T=m("h3"),L=oe(H),V=U(),f=m("p"),D=oe(o),this.h()},l(S){e=v(S,"DIV",{class:!0});var b=k(e);s=v(b,"DIV",{class:!0});var M=k(s);t=v(M,"SPAN",{class:!0});var X=k(t);a=ie(X,l),X.forEach(d),_=q(M),u=v(M,"SPAN",{class:!0});var F=k(u);p=ie(F,E),F.forEach(d),M.forEach(d),C=q(b),$=v(b,"DIV",{class:!0});var R=k($);T=v(R,"H3",{class:!0});var K=k(T);L=ie(K,H),K.forEach(d),V=q(R),f=v(R,"P",{class:!0});var N=k(f);D=ie(N,o),N.forEach(d),R.forEach(d),b.forEach(d),this.h()},h(){h(t,"class","event__date__day svelte-1fm3qjr"),h(u,"class","event__date__month svelte-1fm3qjr"),h(s,"class","event__date svelte-1fm3qjr"),h(T,"class","event__info__title svelte-1fm3qjr"),h(f,"class","event__info__description svelte-1fm3qjr"),h($,"class","event__info svelte-1fm3qjr"),h(e,"class","event svelte-1fm3qjr")},m(S,b){W(S,e,b),i(e,s),i(s,t),i(t,a),i(s,_),i(s,u),i(u,p),i(e,C),i(e,$),i($,T),i(T,L),i($,V),i($,f),i(f,D)},p(S,[b]){b&1&&l!==(l=S[0].startDate.getDate()+"")&&ce(a,l),b&1&&E!==(E=S[0].startDate.toLocaleString("default",{month:"short"})+"")&&ce(p,E),b&1&&H!==(H=S[0].name+"")&&ce(L,H),b&1&&o!==(o=S[0].description+"")&&ce(D,o)},i:be,o:be,d(S){S&&d(e)}}}function Ke(n,e,s){let{event:t}=e;return n.$$set=l=>{"event"in l&&s(0,t=l.event)},[t]}class Qe extends me{constructor(e){super(),ve(this,e,Ke,Fe,_e,{event:0})}}function Ie(n,e,s){const t=n.slice();return t[5]=e[s],t}function ke(n,e,s){const t=n.slice();return t[8]=e[s],t}function Ce(n){let e,s;return{c(){e=m("link"),this.h()},l(t){e=v(t,"LINK",{rel:!0,as:!0,href:!0}),this.h()},h(){h(e,"rel","preload"),h(e,"as","image"),h(e,"href",s=`${n[8]}.avif`)},m(t,l){W(t,e,l)},p(t,l){l&1&&s!==(s=`${t[8]}.avif`)&&h(e,"href",s)},d(t){t&&d(e)}}}function Le(n){let e,s;return e=new Qe({props:{event:n[5]}}),{c(){ee(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,l){se(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.event=t[5]),e.$set(a)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function Je(n){let e,s;return e=new Ge({props:{imageURLs:n[0].imageURLs.map(n[3]),arrowStyling:n[4]?"inside":"outside"}}),{c(){ee(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,l){se(e,t,l),s=!0},p(t,l){const a={};l&1&&(a.imageURLs=t[0].imageURLs.map(t[3])),l&16&&(a.arrowStyling=t[4]?"inside":"outside"),e.$set(a)},i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){ae(e,t)}}}function We(n){let e,s,t,l,a,_,u,E,p,C,$,T,H,L,V,f,o,D='<h1 class="svelte-1yhityo">RHHS STUCO</h1>',S,b,M,X="Upcoming Events",F,R,K,N,z,de="Gallery",fe,A,Y,Q=J(n[0].imageURLs.map(n[2])),I=[];for(let r=0;r<Q.length;r+=1)I[r]=Ce(ke(n,Q,r));u=new Ae({});let B=J(n[0].events),g=[];for(let r=0;r<B.length;r+=1)g[r]=Le(Ie(n,B,r));const Ue=r=>P(g[r],1,1,()=>{g[r]=null});return A=new Oe({props:{query:"(max-width: 864px)",$$slots:{default:[Je,({matches:r})=>({4:r}),({matches:r})=>r?16:0]},$$scope:{ctx:n}}}),{c(){e=m("meta");for(let r=0;r<I.length;r+=1)I[r].c();s=ue(),t=U(),l=m("main"),a=m("div"),_=m("header"),ee(u.$$.fragment),E=U(),p=m("div"),C=m("img"),T=U(),H=m("div"),L=m("img"),f=U(),o=m("section"),o.innerHTML=D,S=U(),b=m("section"),M=m("h2"),M.textContent=X,F=U(),R=m("div");for(let r=0;r<g.length;r+=1)g[r].c();K=U(),N=m("section"),z=m("h2"),z.textContent=de,fe=U(),ee(A.$$.fragment),this.h()},l(r){const y=Me("svelte-1brm7l1",document.head);e=v(y,"META",{name:!0,content:!0});for(let G=0;G<I.length;G+=1)I[G].l(y);s=ue(),y.forEach(d),t=q(r),l=v(r,"MAIN",{class:!0});var w=k(l);a=v(w,"DIV",{class:!0});var c=k(a);_=v(c,"HEADER",{class:!0});var O=k(_);te(u.$$.fragment,O),O.forEach(d),E=q(c),p=v(c,"DIV",{class:!0});var ge=k(p);C=v(ge,"IMG",{class:!0,src:!0,alt:!0}),ge.forEach(d),T=q(c),H=v(c,"DIV",{class:!0});var pe=k(H);L=v(pe,"IMG",{class:!0,src:!0,alt:!0}),pe.forEach(d),f=q(c),o=v(c,"SECTION",{class:!0,"data-svelte-h":!0}),Z(o)!=="svelte-155rcf9"&&(o.innerHTML=D),c.forEach(d),S=q(w),b=v(w,"SECTION",{class:!0});var le=k(b);M=v(le,"H2",{class:!0,"data-svelte-h":!0}),Z(M)!=="svelte-5y0elb"&&(M.textContent=X),F=q(le),R=v(le,"DIV",{class:!0});var ye=k(R);for(let G=0;G<g.length;G+=1)g[G].l(ye);ye.forEach(d),le.forEach(d),K=q(w),N=v(w,"SECTION",{class:!0});var ne=k(N);z=v(ne,"H2",{class:!0,"data-svelte-h":!0}),Z(z)!=="svelte-8pzo3s"&&(z.textContent=de),fe=q(ne),te(A.$$.fragment,ne),ne.forEach(d),w.forEach(d),this.h()},h(){document.title="RHHS StuCo",h(e,"name","description"),h(e,"content","StuCo is a group of students who come together and act as the liason between admin and the student body."),h(_,"class","svelte-1yhityo"),h(C,"class","vector svelte-1yhityo"),he(C.src,$=x+"/images/bg-vector-"+n[1]+".svg")||h(C,"src",$),h(C,"alt",""),h(p,"class","vector-container svelte-1yhityo"),h(L,"class","people-laptop svelte-1yhityo"),he(L.src,V=x+"/images/home-page-people-laptop.png")||h(L,"src",V),h(L,"alt",""),h(H,"class","hero-image-container svelte-1yhityo"),h(o,"class","hero svelte-1yhityo"),h(a,"class","hero__navbar svelte-1yhityo"),h(M,"class","svelte-1yhityo"),h(R,"class","events__list svelte-1yhityo"),h(b,"class","events svelte-1yhityo"),h(z,"class","svelte-1yhityo"),h(N,"class","gallery svelte-1yhityo"),h(l,"class","svelte-1yhityo")},m(r,y){i(document.head,e);for(let w=0;w<I.length;w+=1)I[w]&&I[w].m(document.head,null);i(document.head,s),W(r,t,y),W(r,l,y),i(l,a),i(a,_),se(u,_,null),i(a,E),i(a,p),i(p,C),i(a,T),i(a,H),i(H,L),i(a,f),i(a,o),i(l,S),i(l,b),i(b,M),i(b,F),i(b,R);for(let w=0;w<g.length;w+=1)g[w]&&g[w].m(R,null);i(l,K),i(l,N),i(N,z),i(N,fe),se(A,N,null),Y=!0},p(r,[y]){if(y&1){Q=J(r[0].imageURLs.map(r[2]));let c;for(c=0;c<Q.length;c+=1){const O=ke(r,Q,c);I[c]?I[c].p(O,y):(I[c]=Ce(O),I[c].c(),I[c].m(s.parentNode,s))}for(;c<I.length;c+=1)I[c].d(1);I.length=Q.length}if((!Y||y&2&&!he(C.src,$=x+"/images/bg-vector-"+r[1]+".svg"))&&h(C,"src",$),y&1){B=J(r[0].events);let c;for(c=0;c<B.length;c+=1){const O=Ie(r,B,c);g[c]?(g[c].p(O,y),j(g[c],1)):(g[c]=Le(O),g[c].c(),j(g[c],1),g[c].m(R,null))}for(He(),c=B.length;c<g.length;c+=1)Ue(c);Te()}const w={};y&2065&&(w.$$scope={dirty:y,ctx:r}),A.$set(w)},i(r){if(!Y){j(u.$$.fragment,r);for(let y=0;y<B.length;y+=1)j(g[y]);j(A.$$.fragment,r),Y=!0}},o(r){P(u.$$.fragment,r),g=g.filter(Boolean);for(let y=0;y<g.length;y+=1)P(g[y]);P(A.$$.fragment,r),Y=!1},d(r){r&&(d(t),d(l)),d(e),we(I,r),d(s),ae(u),we(g,r),ae(A)}}}function Xe(n,e,s){let t;Re(n,Pe,u=>s(1,t=u));let{data:l}=e;const a=u=>`${x}/${u}`,_=u=>`${x}/${u}`;return n.$$set=u=>{"data"in u&&s(0,l=u.data)},n.$$.update=()=>{n.$$.dirty&1&&s(0,l.events=l.events.map(u=>({...u,startDate:new Date(u.startDate),endDate:new Date(u.endDate)})),l)},[l,t,a,_]}class lt extends me{constructor(e){super(),ve(this,e,Xe,We,_e,{data:0})}}export{lt as component};
