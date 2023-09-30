import{s as oe,v as Pe,f as b,a as H,g as k,h as C,c as O,d as v,j as D,i as Y,z as h,C as ne,w as qe,x as ze,y as Je,l as W,m as G,n as X,M as je,r as ee,u as ie,G as ae,J as Qe,o as Re,B as x,D as We,A as pe,e as te,I as Ge,N as Ke,E as Xe}from"../chunks/scheduler.f7f270fa.js";import{S as ce,i as fe,a as P,t as Q,g as ue,c as de,b as he,d as ve,m as ge,f as be,e as me}from"../chunks/index.1550c679.js";import{e as j}from"../chunks/each.df28e1f8.js";import{q as ke,f as ye}from"../chunks/index.9a39fded.js";import{r as Ze}from"../chunks/index.b30f2e15.js";import{t as $e}from"../chunks/theme.store.141eacc2.js";function Ee(a){let t,n=a[0].length+"",e;return{c(){t=b("div"),e=W(n),this.h()},l(l){t=k(l,"DIV",{class:!0});var r=C(t);e=G(r,n),r.forEach(v),this.h()},h(){D(t,"class","calendar-day__event-count svelte-1hgf1fj")},m(l,r){Y(l,t,r),h(t,e)},p(l,r){r&1&&n!==(n=l[0].length+"")&&X(e,n)},d(l){l&&v(t)}}}function xe(a){let t,n,e,l,r,i,s=a[0]&&a[1]&&Ee(a);const f=a[3].default,_=Pe(f,a,a[2],null);return{c(){t=b("button"),s&&s.c(),n=H(),_&&_.c(),this.h()},l(u){t=k(u,"BUTTON",{class:!0});var d=C(t);s&&s.l(d),n=O(d),_&&_.l(d),d.forEach(v),this.h()},h(){D(t,"class","calendar-day svelte-1hgf1fj"),t.disabled=e=!a[1]},m(u,d){Y(u,t,d),s&&s.m(t,null),h(t,n),_&&_.m(t,null),l=!0,r||(i=ne(t,"click",a[4]),r=!0)},p(u,[d]){u[0]&&u[1]?s?s.p(u,d):(s=Ee(u),s.c(),s.m(t,n)):s&&(s.d(1),s=null),_&&_.p&&(!l||d&4)&&qe(_,f,u,u[2],l?Je(f,u[2],d,null):ze(u[2]),null),(!l||d&2&&e!==(e=!u[1]))&&(t.disabled=e)},i(u){l||(P(_,u),l=!0)},o(u){Q(_,u),l=!1},d(u){u&&v(t),s&&s.d(),_&&_.d(u),r=!1,i()}}}function et(a,t,n){let{$$slots:e={},$$scope:l}=t,{events:r}=t,{clickable:i=!1}=t;function s(f){je.call(this,a,f)}return a.$$set=f=>{"events"in f&&n(0,r=f.events),"clickable"in f&&n(1,i=f.clickable),"$$scope"in f&&n(2,l=f.$$scope)},[r,i,l,e,s]}class tt extends ce{constructor(t){super(),fe(this,t,et,xe,oe,{events:0,clickable:1})}}function Me(a,t,n){const e=a.slice();return e[4]=t[n],e}function we(a){let t,n=`No events on this day.\r
				`;return{c(){t=b("div"),t.textContent=n,this.h()},l(e){t=k(e,"DIV",{class:!0,"data-svelte-h":!0}),ee(t)!=="svelte-1blygwu"&&(t.textContent=n),this.h()},h(){D(t,"class","calendar-detail__no-events svelte-1udmu1t")},m(e,l){Y(e,t,l)},p:ie,d(e){e&&v(t)}}}function Te(a){let t,n,e=a[4].name+"",l,r,i,s=a[4].description+"",f,_;return{c(){t=b("div"),n=b("h4"),l=W(e),r=H(),i=b("p"),f=W(s),_=H(),this.h()},l(u){t=k(u,"DIV",{class:!0});var d=C(t);n=k(d,"H4",{class:!0});var B=C(n);l=G(B,e),B.forEach(v),r=O(d),i=k(d,"P",{class:!0});var q=C(i);f=G(q,s),q.forEach(v),_=O(d),d.forEach(v),this.h()},h(){D(n,"class","svelte-1udmu1t"),D(i,"class","svelte-1udmu1t"),D(t,"class","calendar-detail__content__events__event svelte-1udmu1t")},m(u,d){Y(u,t,d),h(t,n),h(n,l),h(t,r),h(t,i),h(i,f),h(t,_)},p(u,d){d&2&&e!==(e=u[4].name+"")&&X(l,e),d&2&&s!==(s=u[4].description+"")&&X(f,s)},d(u){u&&v(t)}}}function lt(a){let t,n,e,l,r="×",i,s,f=a[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"",_,u,d,B,q,L=j(a[1]),T=[];for(let y=0;y<L.length;y+=1)T[y]=Te(Me(a,L,y));let g=null;return L.length||(g=we()),{c(){t=b("div"),n=b("div"),e=b("div"),l=b("button"),l.textContent=r,i=H(),s=b("h3"),_=W(f),u=H(),d=b("div");for(let y=0;y<T.length;y+=1)T[y].c();g&&g.c(),this.h()},l(y){t=k(y,"DIV",{class:!0});var A=C(t);n=k(A,"DIV",{class:!0});var m=C(n);e=k(m,"DIV",{class:!0});var F=C(e);l=k(F,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(l)!=="svelte-1p9hkmf"&&(l.textContent=r),i=O(F),s=k(F,"H3",{class:!0});var M=C(s);_=G(M,f),M.forEach(v),F.forEach(v),u=O(m),d=k(m,"DIV",{class:!0});var J=C(d);for(let E=0;E<T.length;E+=1)T[E].l(J);g&&g.l(J),J.forEach(v),m.forEach(v),A.forEach(v),this.h()},h(){D(l,"class","svelte-1udmu1t"),D(s,"class","svelte-1udmu1t"),D(e,"class","calendar-detail__content__heading svelte-1udmu1t"),D(d,"class","calendar-detail__content__events svelte-1udmu1t"),D(n,"class","calendar-detail__content svelte-1udmu1t"),D(t,"class","calendar-detail svelte-1udmu1t")},m(y,A){Y(y,t,A),h(t,n),h(n,e),h(e,l),h(e,i),h(e,s),h(s,_),h(n,u),h(n,d);for(let m=0;m<T.length;m+=1)T[m]&&T[m].m(d,null);g&&g.m(d,null),B||(q=ne(l,"click",a[2]),B=!0)},p(y,[A]){if(A&1&&f!==(f=y[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"")&&X(_,f),A&2){L=j(y[1]);let m;for(m=0;m<L.length;m+=1){const F=Me(y,L,m);T[m]?T[m].p(F,A):(T[m]=Te(F),T[m].c(),T[m].m(d,null))}for(;m<T.length;m+=1)T[m].d(1);T.length=L.length,!L.length&&g?g.p(y,A):L.length?g&&(g.d(1),g=null):(g=we(),g.c(),g.m(d,null))}},i:ie,o:ie,d(y){y&&v(t),ae(T,y),g&&g.d(),B=!1,q()}}}function nt(a,t,n){let{date:e}=t,{events:l}=t;const r=Qe();function i(){r("close")}return a.$$set=s=>{"date"in s&&n(0,e=s.date),"events"in s&&n(1,l=s.events)},[e,l,i]}class at extends ce{constructor(t){super(),fe(this,t,nt,lt,oe,{date:0,events:1})}}const Ce="(prefers-reduced-motion: reduce)";let st=Ze(!1,a=>{Re(()=>{const t=window.matchMedia(Ce).matches;a(t);const n=l=>{a(l.matches)},e=window.matchMedia(Ce);return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}})});function Ie(a,t,n){const e=a.slice();return e[21]=t[n],e}function Se(a,t,n){const e=a.slice();return e[24]=t[n],e[26]=n,e}function Ne(a,t,n){const e=a.slice();e[24]=t[n],e[31]=n;const l=e[26]*_e+e[31]-e[4]+1;e[27]=l;const r=new Date(e[5],e[2],e[27]);e[28]=r;const i=e[27]>0&&e[27]<=e[3][e[2]];return e[29]=i,e}function Ve(a,t,n){const e=a.slice();return e[32]=t[n],e}function Le(a){let t,n=a[32]+"",e;return{c(){t=b("div"),e=W(n),this.h()},l(l){t=k(l,"DIV",{class:!0});var r=C(t);e=G(r,n),r.forEach(v),this.h()},h(){D(t,"class","svelte-t51t0g")},m(l,r){Y(l,t,r),h(t,e)},p:ie,d(l){l&&v(t)}}}function He(a){let t,n=a[27]+"",e;return{c(){t=b("span"),e=W(n),this.h()},l(l){t=k(l,"SPAN",{class:!0});var r=C(t);e=G(r,n),r.forEach(v),this.h()},h(){D(t,"class","calendar__body__day svelte-t51t0g")},m(l,r){Y(l,t,r),h(t,e)},p(l,r){r[0]&16&&n!==(n=l[27]+"")&&X(e,n)},d(l){l&&v(t)}}}function rt(a){let t,n=a[29]&&He(a);return{c(){n&&n.c(),t=te()},l(e){n&&n.l(e),t=te()},m(e,l){n&&n.m(e,l),Y(e,t,l)},p(e,l){e[29]?n?n.p(e,l):(n=He(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&v(t),n&&n.d(e)}}}function Oe(a){let t,n;return t=new tt({props:{events:a[8].get(a[28].toDateString()),clickable:a[29],$$slots:{default:[rt]},$$scope:{ctx:a}}}),t.$on("click",function(){Ke(a[13](a[28]))&&a[13](a[28]).apply(this,arguments)}),{c(){he(t.$$.fragment)},l(e){ve(t.$$.fragment,e)},m(e,l){ge(t,e,l),n=!0},p(e,l){a=e;const r={};l[0]&308&&(r.events=a[8].get(a[28].toDateString())),l[0]&28&&(r.clickable=a[29]),l[0]&28|l[1]&16&&(r.$$scope={dirty:l,ctx:a}),t.$set(r)},i(e){n||(P(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Ae(a){let t,n,e=j({length:_e}),l=[];for(let i=0;i<e.length;i+=1)l[i]=Oe(Ne(a,e,i));const r=i=>Q(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();t=te()},l(i){for(let s=0;s<l.length;s+=1)l[s].l(i);t=te()},m(i,s){for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(i,s);Y(i,t,s),n=!0},p(i,s){if(s[0]&8508){e=j({length:_e});let f;for(f=0;f<e.length;f+=1){const _=Ne(i,e,f);l[f]?(l[f].p(_,s),P(l[f],1)):(l[f]=Oe(_),l[f].c(),P(l[f],1),l[f].m(t.parentNode,t))}for(ue(),f=e.length;f<l.length;f+=1)r(f);de()}},i(i){if(!n){for(let s=0;s<e.length;s+=1)P(l[s]);n=!0}},o(i){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)Q(l[s]);n=!1},d(i){i&&v(t),ae(l,i)}}}function Ye(a){let t,n=a[21].name+"",e,l,r;return{c(){t=b("div"),e=W(n),l=H(),this.h()},l(i){t=k(i,"DIV",{class:!0,style:!0});var s=C(t);e=G(s,n),l=O(s),s.forEach(v),this.h()},h(){D(t,"class","calendar__body__event svelte-t51t0g"),D(t,"style",r=`
						grid-row: ${Math.ceil((a[21].startDate.getDate()+a[4])/7)} / ${Math.ceil((a[21].endDate.getDate()+a[4])/7)};
						grid-column: ${a[21].startDate.getDay()+1} / ${a[21].endDate.getDay()+2};
					`)},m(i,s){Y(i,t,s),h(t,e),h(t,l)},p(i,s){s[0]&2&&n!==(n=i[21].name+"")&&X(e,n),s[0]&18&&r!==(r=`
						grid-row: ${Math.ceil((i[21].startDate.getDate()+i[4])/7)} / ${Math.ceil((i[21].endDate.getDate()+i[4])/7)};
						grid-column: ${i[21].startDate.getDay()+1} / ${i[21].endDate.getDay()+2};
					`)&&D(t,"style",r)},d(i){i&&v(t)}}}function Be(a){let t=a[21].startDate.getMonth()===a[2]&&a[21].startDate.getFullYear()===a[5],n,e=t&&Ye(a);return{c(){e&&e.c(),n=te()},l(l){e&&e.l(l),n=te()},m(l,r){e&&e.m(l,r),Y(l,n,r)},p(l,r){r[0]&38&&(t=l[21].startDate.getMonth()===l[2]&&l[21].startDate.getFullYear()===l[5]),t?e?e.p(l,r):(e=Ye(l),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(l){l&&v(n),e&&e.d(l)}}}function Fe(a){let t,n,e,l;return n=new at({props:{date:a[6],events:a[8].get(a[6].toDateString())||[]}}),n.$on("close",a[17]),{c(){t=b("div"),he(n.$$.fragment),this.h()},l(r){t=k(r,"DIV",{class:!0});var i=C(t);ve(n.$$.fragment,i),i.forEach(v),this.h()},h(){D(t,"class","calendar-detail svelte-t51t0g")},m(r,i){Y(r,t,i),ge(n,t,null),l=!0},p(r,i){a=r;const s={};i[0]&64&&(s.date=a[6]),i[0]&320&&(s.events=a[8].get(a[6].toDateString())||[]),n.$set(s)},i(r){l||(P(n.$$.fragment,r),r&&Ge(()=>{l&&(e||(e=be(t,ye,{x:250,opacity:1,duration:a[10]?0:250,easing:ke},!0)),e.run(1))}),l=!0)},o(r){Q(n.$$.fragment,r),r&&(e||(e=be(t,ye,{x:250,opacity:1,duration:a[10]?0:250,easing:ke},!1)),e.run(0)),l=!1},d(r){r&&v(t),me(n),r&&e&&e.end()}}}function it(a){let t,n,e,l,r='<i class="ri-arrow-left-double-line svelte-t51t0g"></i>',i,s,f='<i class="ri-arrow-left-s-line svelte-t51t0g"></i>',_,u,d=a[11][a[2]]+"",B,q,L,T,g,y='<i class="ri-arrow-right-s-line svelte-t51t0g"></i>',A,m,F,M,J,E,U,le,se,K=j(a[12]),S=[];for(let c=0;c<K.length;c+=1)S[c]=Le(Ve(a,K,c));let R=j({length:a[7]}),w=[];for(let c=0;c<R.length;c+=1)w[c]=Ae(Se(a,R,c));const Ue=c=>Q(w[c],1,1,()=>{w[c]=null});let Z=j(a[1]),N=[];for(let c=0;c<Z.length;c+=1)N[c]=Be(Ie(a,Z,c));let I=a[6]&&Fe(a);return{c(){t=b("div"),n=b("div"),e=b("div"),l=b("button"),l.innerHTML=r,i=H(),s=b("button"),s.innerHTML=f,_=H(),u=b("h2"),B=W(d),q=H(),L=W(a[5]),T=H(),g=b("button"),g.innerHTML=y,A=H(),m=b("div");for(let c=0;c<S.length;c+=1)S[c].c();F=H(),M=b("div");for(let c=0;c<w.length;c+=1)w[c].c();J=H();for(let c=0;c<N.length;c+=1)N[c].c();E=H(),I&&I.c(),this.h()},l(c){t=k(c,"DIV",{class:!0});var p=C(t);n=k(p,"DIV",{class:!0});var o=C(n);e=k(o,"DIV",{class:!0});var V=C(e);l=k(V,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(l)!=="svelte-1l8a0dv"&&(l.innerHTML=r),i=O(V),s=k(V,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(s)!=="svelte-1qk3zwx"&&(s.innerHTML=f),_=O(V),u=k(V,"H2",{class:!0});var re=C(u);B=G(re,d),q=O(re),L=G(re,a[5]),re.forEach(v),T=O(V),g=k(V,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(g)!=="svelte-r3u6hy"&&(g.innerHTML=y),V.forEach(v),A=O(o),m=k(o,"DIV",{class:!0});var De=C(m);for(let z=0;z<S.length;z+=1)S[z].l(De);De.forEach(v),o.forEach(v),F=O(p),M=k(p,"DIV",{class:!0});var $=C(M);for(let z=0;z<w.length;z+=1)w[z].l($);J=O($);for(let z=0;z<N.length;z+=1)N[z].l($);E=O($),I&&I.l($),$.forEach(v),p.forEach(v),this.h()},h(){D(l,"class","svelte-t51t0g"),D(s,"class","svelte-t51t0g"),D(u,"class","svelte-t51t0g"),D(g,"class","svelte-t51t0g"),D(e,"class","calendar__header__date svelte-t51t0g"),D(m,"class","calendar__header__days svelte-t51t0g"),D(n,"class","calendar__header svelte-t51t0g"),D(M,"class","calendar__body svelte-t51t0g"),x(M,"selected-date",a[6]),x(M,"dark-mode",a[9]==="dark"),x(M,"light-mode",a[9]==="light"),D(t,"class","calendar svelte-t51t0g")},m(c,p){Y(c,t,p),h(t,n),h(n,e),h(e,l),h(e,i),h(e,s),h(e,_),h(e,u),h(u,B),h(u,q),h(u,L),h(e,T),h(e,g),h(n,A),h(n,m);for(let o=0;o<S.length;o+=1)S[o]&&S[o].m(m,null);h(t,F),h(t,M);for(let o=0;o<w.length;o+=1)w[o]&&w[o].m(M,null);h(M,J);for(let o=0;o<N.length;o+=1)N[o]&&N[o].m(M,null);h(M,E),I&&I.m(M,null),U=!0,le||(se=[ne(l,"click",a[14]),ne(s,"click",a[15]),ne(g,"click",a[16])],le=!0)},p(c,p){if((!U||p[0]&4)&&d!==(d=c[11][c[2]]+"")&&X(B,d),(!U||p[0]&32)&&X(L,c[5]),p[0]&4096){K=j(c[12]);let o;for(o=0;o<K.length;o+=1){const V=Ve(c,K,o);S[o]?S[o].p(V,p):(S[o]=Le(V),S[o].c(),S[o].m(m,null))}for(;o<S.length;o+=1)S[o].d(1);S.length=K.length}if(p[0]&8636){R=j({length:c[7]});let o;for(o=0;o<R.length;o+=1){const V=Se(c,R,o);w[o]?(w[o].p(V,p),P(w[o],1)):(w[o]=Ae(V),w[o].c(),P(w[o],1),w[o].m(M,J))}for(ue(),o=R.length;o<w.length;o+=1)Ue(o);de()}if(p[0]&54){Z=j(c[1]);let o;for(o=0;o<Z.length;o+=1){const V=Ie(c,Z,o);N[o]?N[o].p(V,p):(N[o]=Be(V),N[o].c(),N[o].m(M,E))}for(;o<N.length;o+=1)N[o].d(1);N.length=Z.length}c[6]?I?(I.p(c,p),p[0]&64&&P(I,1)):(I=Fe(c),I.c(),P(I,1),I.m(M,null)):I&&(ue(),Q(I,1,1,()=>{I=null}),de()),(!U||p[0]&64)&&x(M,"selected-date",c[6]),(!U||p[0]&512)&&x(M,"dark-mode",c[9]==="dark"),(!U||p[0]&512)&&x(M,"light-mode",c[9]==="light")},i(c){if(!U){for(let p=0;p<R.length;p+=1)P(w[p]);P(I),U=!0}},o(c){w=w.filter(Boolean);for(let p=0;p<w.length;p+=1)Q(w[p]);Q(I),U=!1},d(c){c&&v(t),ae(S,c),ae(w,c),ae(N,c),I&&I.d(),le=!1,We(se)}}}const _e=7;function ot(a,t){const n=new Map;return a.forEach(e=>{const l=t(e);for(const r of l){const i=n.get(r)||[];i.push(e),n.set(r,i)}}),n}function ct(a){return a%4===0&&a%100!==0&&a%400!==0||a%100===0&&a%400===0}function ft(a){return ct(a)?29:28}function ut(a,t,n){let e,l,r,i,s,f,_,u;pe(a,$e,E=>n(9,_=E)),pe(a,st,E=>n(10,u=E));let{events:d}=t;const B=1e3*60*60*24;function q(E,U){return(U.getTime()-E.getTime())/B}const L=["January","February","March","April","May","June","July","August","September","October","November","December"],T=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let{date:g=new Date}=t,y=null;const A=E=>()=>n(6,y=E),m=()=>n(0,g=new Date(r-1,l,1)),F=()=>n(0,g=new Date(r,l-1,1)),M=()=>n(0,g=new Date(r,l+1,1)),J=()=>n(6,y=null);return a.$$set=E=>{"events"in E&&n(1,d=E.events),"date"in E&&n(0,g=E.date)},a.$$.update=()=>{a.$$.dirty[0]&2&&n(8,e=ot(d,E=>{const U=Array(q(E.startDate,E.endDate)+1).fill(0),le=E.startDate.getFullYear(),se=E.startDate.getMonth(),K=E.startDate.getDate();return U.map((S,R)=>new Date(le,se,K+R).toDateString())})),a.$$.dirty[0]&1&&n(2,l=g.getMonth()),a.$$.dirty[0]&1&&n(5,r=g.getFullYear()),a.$$.dirty[0]&32&&n(3,i=[31,ft(r),31,30,31,30,31,31,30,31,30,31]),a.$$.dirty[0]&36&&n(4,s=(new Date(r,l,1).getDay()%7+1-1+7)%7),a.$$.dirty[0]&28&&n(7,f=Math.ceil((s+i[l])/7))},[g,d,l,i,s,r,y,f,e,_,u,L,T,A,m,F,M,J]}class dt extends ce{constructor(t){super(),fe(this,t,ut,it,oe,{events:1,date:0},null,[-1,-1])}}function _t(a){let t,n,e,l,r="Events",i,s,f;return s=new dt({props:{events:a[0].events}}),{c(){t=b("meta"),n=H(),e=b("main"),l=b("h1"),l.textContent=r,i=H(),he(s.$$.fragment),this.h()},l(_){const u=Xe("svelte-1sfebwo",document.head);t=k(u,"META",{name:!0,content:!0}),u.forEach(v),n=O(_),e=k(_,"MAIN",{class:!0});var d=C(e);l=k(d,"H1",{class:!0,"data-svelte-h":!0}),ee(l)!=="svelte-xtcg81"&&(l.textContent=r),i=O(d),ve(s.$$.fragment,d),d.forEach(v),this.h()},h(){document.title="Events",D(t,"name","description"),D(t,"content","Stay up to date on all school events here!"),D(l,"class","svelte-zd9xm"),D(e,"class","svelte-zd9xm")},m(_,u){h(document.head,t),Y(_,n,u),Y(_,e,u),h(e,l),h(e,i),ge(s,e,null),f=!0},p(_,[u]){const d={};u&1&&(d.events=_[0].events),s.$set(d)},i(_){f||(P(s.$$.fragment,_),f=!0)},o(_){Q(s.$$.fragment,_),f=!1},d(_){_&&(v(n),v(e)),v(t),me(s)}}}function ht(a,t,n){let{data:e}=t;return a.$$set=l=>{"data"in l&&n(0,e=l.data)},[e]}class kt extends ce{constructor(t){super(),fe(this,t,ht,_t,oe,{data:0})}}export{kt as component};
