import{s as ve,f as _,a as T,g as d,h as S,r as Y,c as U,d as h,j as u,B as ne,i as W,z as i,C as $e,D as Ue,e as ce,l as re,m as oe,n as ie,u as Ee,E as Me,F as we,G as De}from"../chunks/scheduler.3f1532c0.js";import{S as _e,i as de,g as He,c as je,a as V,t as P,b as Z,d as x,m as ee,e as te}from"../chunks/index.bb2186ed.js";import{e as J,u as Re,o as Ne}from"../chunks/each.33c78c84.js";import{e as ue}from"../chunks/singletons.37f246cf.js";import{I as ze}from"../chunks/Image.ee3a4e23.js";import{N as Ve,M as qe}from"../chunks/Navbar.0f96777d.js";function be(l,e,s){const t=l.slice();return t[5]=e[s],t}function ye(l,e){let s,t,n;return t=new ze({props:{src:e[5]}}),{key:l,first:null,c(){s=ce(),Z(t.$$.fragment),this.h()},l(a){s=ce(),x(t.$$.fragment,a),this.h()},h(){this.first=s},m(a,v){W(a,s,v),ee(t,a,v),n=!0},p(a,v){e=a;const g={};v&5&&(g.src=e[5]),t.$set(g)},i(a){n||(V(t.$$.fragment,a),n=!0)},o(a){P(t.$$.fragment,a),n=!1},d(a){a&&h(s),te(t,a)}}}function Oe(l){let e,s,t='<i class="ri-arrow-left-s-line svelte-1hdzpvp"></i>',n,a,v=[],g=new Map,D,p,H='<i class="ri-arrow-right-s-line svelte-1hdzpvp"></i>',b,j,L,C=J([l[0][l[2]]]);const z=f=>f[2];for(let f=0;f<1;f+=1){let o=be(l,C,f),y=z(o);g.set(y,v[f]=ye(y,o))}return{c(){e=_("div"),s=_("button"),s.innerHTML=t,n=T(),a=_("div");for(let f=0;f<1;f+=1)v[f].c();D=T(),p=_("button"),p.innerHTML=H,this.h()},l(f){e=d(f,"DIV",{class:!0});var o=S(e);s=d(o,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(s)!=="svelte-12vqehk"&&(s.innerHTML=t),n=U(o),a=d(o,"DIV",{class:!0});var y=S(a);for(let I=0;I<1;I+=1)v[I].l(y);y.forEach(h),D=U(o),p=d(o,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(p)!=="svelte-zwlzwo"&&(p.innerHTML=H),o.forEach(h),this.h()},h(){u(s,"class","carousel__left-arrow svelte-1hdzpvp"),ne(s,"inside",l[1]==="inside"),u(a,"class","carousel__image svelte-1hdzpvp"),u(p,"class","carousel__right-arrow svelte-1hdzpvp"),ne(p,"inside",l[1]==="inside"),u(e,"class","carousel svelte-1hdzpvp")},m(f,o){W(f,e,o),i(e,s),i(e,n),i(e,a);for(let y=0;y<1;y+=1)v[y]&&v[y].m(a,null);i(e,D),i(e,p),b=!0,j||(L=[$e(s,"click",l[4]),$e(p,"click",l[3])],j=!0)},p(f,[o]){(!b||o&2)&&ne(s,"inside",f[1]==="inside"),o&5&&(C=J([f[0][f[2]]]),He(),v=Re(v,o,z,1,f,C,g,a,Ne,ye,null,be),je()),(!b||o&2)&&ne(p,"inside",f[1]==="inside")},i(f){if(!b){for(let o=0;o<1;o+=1)V(v[o]);b=!0}},o(f){for(let o=0;o<1;o+=1)P(v[o]);b=!1},d(f){f&&h(e);for(let o=0;o<1;o+=1)v[o].d();j=!1,Ue(L)}}}function Ie(l,e){return(l%e+e)%e}function Pe(l,e,s){let{imageURLs:t}=e,{arrowStyling:n="outside"}=e,a=0;function v(){s(2,a=Ie(a+1,t.length))}function g(){s(2,a=Ie(a-1,t.length))}return l.$$set=D=>{"imageURLs"in D&&s(0,t=D.imageURLs),"arrowStyling"in D&&s(1,n=D.arrowStyling)},[t,n,a,v,g]}class Ae extends _e{constructor(e){super(),de(this,e,Pe,Oe,ve,{imageURLs:0,arrowStyling:1})}}function Be(l){let e,s,t,n=l[0].startDate.getDate()+"",a,v,g,D=l[0].startDate.toLocaleString("default",{month:"short"})+"",p,H,b,j,L=l[0].name+"",C,z,f,o=l[0].description+"",y;return{c(){e=_("div"),s=_("div"),t=_("span"),a=re(n),v=T(),g=_("span"),p=re(D),H=T(),b=_("div"),j=_("h3"),C=re(L),z=T(),f=_("p"),y=re(o),this.h()},l(I){e=d(I,"DIV",{class:!0});var E=S(e);s=d(E,"DIV",{class:!0});var M=S(s);t=d(M,"SPAN",{class:!0});var X=S(t);a=oe(X,n),X.forEach(h),v=U(M),g=d(M,"SPAN",{class:!0});var F=S(g);p=oe(F,D),F.forEach(h),M.forEach(h),H=U(E),b=d(E,"DIV",{class:!0});var R=S(b);j=d(R,"H3",{class:!0});var K=S(j);C=oe(K,L),K.forEach(h),z=U(R),f=d(R,"P",{class:!0});var N=S(f);y=oe(N,o),N.forEach(h),R.forEach(h),E.forEach(h),this.h()},h(){u(t,"class","event__date__day svelte-1r41se1"),u(g,"class","event__date__month svelte-1r41se1"),u(s,"class","event__date svelte-1r41se1"),u(j,"class","event__info__title svelte-1r41se1"),u(f,"class","event__info__description svelte-1r41se1"),u(b,"class","event__info svelte-1r41se1"),u(e,"class","event svelte-1r41se1")},m(I,E){W(I,e,E),i(e,s),i(s,t),i(t,a),i(s,v),i(s,g),i(g,p),i(e,H),i(e,b),i(b,j),i(j,C),i(b,z),i(b,f),i(f,y)},p(I,[E]){E&1&&n!==(n=I[0].startDate.getDate()+"")&&ie(a,n),E&1&&D!==(D=I[0].startDate.toLocaleString("default",{month:"short"})+"")&&ie(p,D),E&1&&L!==(L=I[0].name+"")&&ie(C,L),E&1&&o!==(o=I[0].description+"")&&ie(y,o)},i:Ee,o:Ee,d(I){I&&h(e)}}}function Ge(l,e,s){let{event:t}=e;return l.$$set=n=>{"event"in n&&s(0,t=n.event)},[t]}class Fe extends _e{constructor(e){super(),de(this,e,Ge,Be,ve,{event:0})}}function ke(l,e,s){const t=l.slice();return t[3]=e[s],t}function Se(l,e,s){const t=l.slice();return t[6]=e[s],t}function Ce(l){let e,s;return{c(){e=_("link"),this.h()},l(t){e=d(t,"LINK",{rel:!0,as:!0,href:!0}),this.h()},h(){u(e,"rel","preload"),u(e,"as","image"),u(e,"href",s=`${l[6]}.avif`)},m(t,n){W(t,e,n)},p(t,n){n&1&&s!==(s=`${t[6]}.avif`)&&u(e,"href",s)},d(t){t&&h(e)}}}function Le(l){let e,s;return e=new Fe({props:{event:l[3]}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,n){ee(e,t,n),s=!0},p(t,n){const a={};n&1&&(a.event=t[3]),e.$set(a)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function Ke(l){let e,s;return e=new Ae({props:{imageURLs:l[0].imageURLs,arrowStyling:l[2]?"inside":"outside"}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,n){ee(e,t,n),s=!0},p(t,n){const a={};n&1&&(a.imageURLs=t[0].imageURLs),n&4&&(a.arrowStyling=t[2]?"inside":"outside"),e.$set(a)},i(t){s||(V(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){te(e,t)}}}function Qe(l){let e,s,t,n,a,v,g,D,p,H,b,j,L,C,z,f,o,y='<h1 class="svelte-1ndfv3j">RHHS STUCO</h1>',I,E,M,X="Upcoming Events",F,R,K,N,A,he="Gallery",fe,q,se,Q=J(l[0].imageURLs.map(l[1])),k=[];for(let r=0;r<Q.length;r+=1)k[r]=Ce(Se(l,Q,r));g=new Ve({});let B=J(l[0].events),m=[];for(let r=0;r<B.length;r+=1)m[r]=Le(ke(l,B,r));const Te=r=>P(m[r],1,1,()=>{m[r]=null});return q=new qe({props:{query:"(max-width: 864px)",$$slots:{default:[Ke,({matches:r})=>({2:r}),({matches:r})=>r?4:0]},$$scope:{ctx:l}}}),{c(){e=_("meta");for(let r=0;r<k.length;r+=1)k[r].c();s=ce(),t=T(),n=_("main"),a=_("div"),v=_("header"),Z(g.$$.fragment),D=T(),p=_("div"),H=_("img"),j=T(),L=_("div"),C=_("img"),f=T(),o=_("section"),o.innerHTML=y,I=T(),E=_("section"),M=_("h2"),M.textContent=X,F=T(),R=_("div");for(let r=0;r<m.length;r+=1)m[r].c();K=T(),N=_("section"),A=_("h2"),A.textContent=he,fe=T(),Z(q.$$.fragment),this.h()},l(r){const $=Me("svelte-1brm7l1",document.head);e=d($,"META",{name:!0,content:!0});for(let G=0;G<k.length;G+=1)k[G].l($);s=ce(),$.forEach(h),t=U(r),n=d(r,"MAIN",{class:!0});var w=S(n);a=d(w,"DIV",{class:!0});var c=S(a);v=d(c,"HEADER",{class:!0});var O=S(v);x(g.$$.fragment,O),O.forEach(h),D=U(c),p=d(c,"DIV",{class:!0});var me=S(p);H=d(me,"IMG",{class:!0,src:!0,alt:!0}),me.forEach(h),j=U(c),L=d(c,"DIV",{class:!0});var ge=S(L);C=d(ge,"IMG",{class:!0,src:!0,alt:!0}),ge.forEach(h),f=U(c),o=d(c,"SECTION",{class:!0,"data-svelte-h":!0}),Y(o)!=="svelte-155rcf9"&&(o.innerHTML=y),c.forEach(h),I=U(w),E=d(w,"SECTION",{class:!0});var ae=S(E);M=d(ae,"H2",{class:!0,"data-svelte-h":!0}),Y(M)!=="svelte-5y0elb"&&(M.textContent=X),F=U(ae),R=d(ae,"DIV",{class:!0});var pe=S(R);for(let G=0;G<m.length;G+=1)m[G].l(pe);pe.forEach(h),ae.forEach(h),K=U(w),N=d(w,"SECTION",{class:!0});var le=S(N);A=d(le,"H2",{class:!0,"data-svelte-h":!0}),Y(A)!=="svelte-8pzo3s"&&(A.textContent=he),fe=U(le),x(q.$$.fragment,le),le.forEach(h),w.forEach(h),this.h()},h(){document.title="RHHS StuCo",u(e,"name","description"),u(e,"content","StuCo is a group of students who come together and act as the liason between admin and the student body."),u(v,"class","svelte-1ndfv3j"),u(H,"class","vector svelte-1ndfv3j"),we(H.src,b=ue+"/images/bg-vector.svg")||u(H,"src",b),u(H,"alt",""),u(p,"class","vector-container svelte-1ndfv3j"),u(C,"class","people-laptop svelte-1ndfv3j"),we(C.src,z=ue+"/images/home-page-people-laptop.png")||u(C,"src",z),u(C,"alt",""),u(L,"class","hero-image-container svelte-1ndfv3j"),u(o,"class","hero svelte-1ndfv3j"),u(a,"class","hero__navbar svelte-1ndfv3j"),u(M,"class","svelte-1ndfv3j"),u(R,"class","events__list svelte-1ndfv3j"),u(E,"class","events svelte-1ndfv3j"),u(A,"class","svelte-1ndfv3j"),u(N,"class","gallery svelte-1ndfv3j"),u(n,"class","svelte-1ndfv3j")},m(r,$){i(document.head,e);for(let w=0;w<k.length;w+=1)k[w]&&k[w].m(document.head,null);i(document.head,s),W(r,t,$),W(r,n,$),i(n,a),i(a,v),ee(g,v,null),i(a,D),i(a,p),i(p,H),i(a,j),i(a,L),i(L,C),i(a,f),i(a,o),i(n,I),i(n,E),i(E,M),i(E,F),i(E,R);for(let w=0;w<m.length;w+=1)m[w]&&m[w].m(R,null);i(n,K),i(n,N),i(N,A),i(N,fe),ee(q,N,null),se=!0},p(r,[$]){if($&1){Q=J(r[0].imageURLs.map(r[1]));let c;for(c=0;c<Q.length;c+=1){const O=Se(r,Q,c);k[c]?k[c].p(O,$):(k[c]=Ce(O),k[c].c(),k[c].m(s.parentNode,s))}for(;c<k.length;c+=1)k[c].d(1);k.length=Q.length}if($&1){B=J(r[0].events);let c;for(c=0;c<B.length;c+=1){const O=ke(r,B,c);m[c]?(m[c].p(O,$),V(m[c],1)):(m[c]=Le(O),m[c].c(),V(m[c],1),m[c].m(R,null))}for(He(),c=B.length;c<m.length;c+=1)Te(c);je()}const w={};$&517&&(w.$$scope={dirty:$,ctx:r}),q.$set(w)},i(r){if(!se){V(g.$$.fragment,r);for(let $=0;$<B.length;$+=1)V(m[$]);V(q.$$.fragment,r),se=!0}},o(r){P(g.$$.fragment,r),m=m.filter(Boolean);for(let $=0;$<m.length;$+=1)P(m[$]);P(q.$$.fragment,r),se=!1},d(r){r&&(h(t),h(n)),h(e),De(k,r),h(s),te(g),De(m,r),te(q)}}}function Je(l,e,s){let{data:t}=e;const n=a=>`${ue}/${a}`;return l.$$set=a=>{"data"in a&&s(0,t=a.data)},l.$$.update=()=>{l.$$.dirty&1&&s(0,t.events=t.events.map(a=>({...a,startDate:new Date(a.startDate),endDate:new Date(a.endDate)})),t)},[t,n]}class tt extends _e{constructor(e){super(),de(this,e,Je,Qe,ve,{data:0})}}export{tt as component};
