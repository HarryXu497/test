import{s as ie,v as Fe,f as p,a as O,g as b,h as T,c as H,d as v,j as D,i as A,z as h,C as le,w as Ue,x as qe,y as Pe,l as R,m as W,n as G,N as ze,r as x,u as re,G as ne,J as Je,o as Qe,B as De,D as Re,A as We,e as ee,I as Ge,O as Ke,E as $e}from"../chunks/scheduler.3f1532c0.js";import{S as oe,i as ce,a as F,t as J,g as fe,c as ue,b as de,d as he,m as ve,f as ke,e as me}from"../chunks/index.bb2186ed.js";import{e as z}from"../chunks/each.33c78c84.js";import{q as pe,f as be}from"../chunks/index.07969f4a.js";import{r as Xe}from"../chunks/index.b159e192.js";function ye(a){let t,n=a[0].length+"",e;return{c(){t=p("div"),e=R(n),this.h()},l(l){t=b(l,"DIV",{class:!0});var r=T(t);e=W(r,n),r.forEach(v),this.h()},h(){D(t,"class","calendar-day__event-count svelte-rfm32a")},m(l,r){A(l,t,r),h(t,e)},p(l,r){r&1&&n!==(n=l[0].length+"")&&G(e,n)},d(l){l&&v(t)}}}function Ze(a){let t,n,e,l,r,i,s=a[0]&&a[1]&&ye(a);const c=a[3].default,d=Fe(c,a,a[2],null);return{c(){t=p("button"),s&&s.c(),n=O(),d&&d.c(),this.h()},l(f){t=b(f,"BUTTON",{class:!0});var _=T(t);s&&s.l(_),n=H(_),d&&d.l(_),_.forEach(v),this.h()},h(){D(t,"class","calendar-day svelte-rfm32a"),t.disabled=e=!a[1]},m(f,_){A(f,t,_),s&&s.m(t,null),h(t,n),d&&d.m(t,null),l=!0,r||(i=le(t,"click",a[4]),r=!0)},p(f,[_]){f[0]&&f[1]?s?s.p(f,_):(s=ye(f),s.c(),s.m(t,n)):s&&(s.d(1),s=null),d&&d.p&&(!l||_&4)&&Ue(d,c,f,f[2],l?Pe(c,f[2],_,null):qe(f[2]),null),(!l||_&2&&e!==(e=!f[1]))&&(t.disabled=e)},i(f){l||(F(d,f),l=!0)},o(f){J(d,f),l=!1},d(f){f&&v(t),s&&s.d(),d&&d.d(f),r=!1,i()}}}function xe(a,t,n){let{$$slots:e={},$$scope:l}=t,{events:r}=t,{clickable:i=!1}=t;function s(c){ze.call(this,a,c)}return a.$$set=c=>{"events"in c&&n(0,r=c.events),"clickable"in c&&n(1,i=c.clickable),"$$scope"in c&&n(2,l=c.$$scope)},[r,i,l,e,s]}class et extends oe{constructor(t){super(),ce(this,t,xe,Ze,ie,{events:0,clickable:1})}}function Ee(a,t,n){const e=a.slice();return e[4]=t[n],e}function Me(a){let t,n=`No events on this day.\r
				`;return{c(){t=p("div"),t.textContent=n},l(e){t=b(e,"DIV",{"data-svelte-h":!0}),x(t)!=="svelte-1nqcxxk"&&(t.textContent=n)},m(e,l){A(e,t,l)},p:re,d(e){e&&v(t)}}}function we(a){let t,n,e=a[4].name+"",l,r,i,s=a[4].description+"",c,d;return{c(){t=p("div"),n=p("h4"),l=R(e),r=O(),i=p("p"),c=R(s),d=O(),this.h()},l(f){t=b(f,"DIV",{class:!0});var _=T(t);n=b(_,"H4",{class:!0});var Y=T(n);l=W(Y,e),Y.forEach(v),r=H(_),i=b(_,"P",{class:!0});var q=T(i);c=W(q,s),q.forEach(v),d=H(_),_.forEach(v),this.h()},h(){D(n,"class","svelte-8746jk"),D(i,"class","svelte-8746jk"),D(t,"class","calendar-detail__content__events__event svelte-8746jk")},m(f,_){A(f,t,_),h(t,n),h(n,l),h(t,r),h(t,i),h(i,c),h(t,d)},p(f,_){_&2&&e!==(e=f[4].name+"")&&G(l,e),_&2&&s!==(s=f[4].description+"")&&G(c,s)},d(f){f&&v(t)}}}function tt(a){let t,n,e,l,r="×",i,s,c=a[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"",d,f,_,Y,q,L=z(a[1]),k=[];for(let E=0;E<L.length;E+=1)k[E]=we(Ee(a,L,E));let g=null;return L.length||(g=Me()),{c(){t=p("div"),n=p("div"),e=p("div"),l=p("button"),l.textContent=r,i=O(),s=p("h3"),d=R(c),f=O(),_=p("div");for(let E=0;E<k.length;E+=1)k[E].c();g&&g.c(),this.h()},l(E){t=b(E,"DIV",{class:!0});var j=T(t);n=b(j,"DIV",{class:!0});var m=T(n);e=b(m,"DIV",{class:!0});var B=T(e);l=b(B,"BUTTON",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-1p9hkmf"&&(l.textContent=r),i=H(B),s=b(B,"H3",{class:!0});var C=T(s);d=W(C,c),C.forEach(v),B.forEach(v),f=H(m),_=b(m,"DIV",{class:!0});var M=T(_);for(let U=0;U<k.length;U+=1)k[U].l(M);g&&g.l(M),M.forEach(v),m.forEach(v),j.forEach(v),this.h()},h(){D(l,"class","svelte-8746jk"),D(s,"class","svelte-8746jk"),D(e,"class","calendar-detail__content__heading svelte-8746jk"),D(_,"class","calendar-detail__content__events svelte-8746jk"),D(n,"class","calendar-detail__content svelte-8746jk"),D(t,"class","calendar-detail svelte-8746jk")},m(E,j){A(E,t,j),h(t,n),h(n,e),h(e,l),h(e,i),h(e,s),h(s,d),h(n,f),h(n,_);for(let m=0;m<k.length;m+=1)k[m]&&k[m].m(_,null);g&&g.m(_,null),Y||(q=le(l,"click",a[2]),Y=!0)},p(E,[j]){if(j&1&&c!==(c=E[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"")&&G(d,c),j&2){L=z(E[1]);let m;for(m=0;m<L.length;m+=1){const B=Ee(E,L,m);k[m]?k[m].p(B,j):(k[m]=we(B),k[m].c(),k[m].m(_,null))}for(;m<k.length;m+=1)k[m].d(1);k.length=L.length,!L.length&&g?g.p(E,j):L.length?g&&(g.d(1),g=null):(g=Me(),g.c(),g.m(_,null))}},i:re,o:re,d(E){E&&v(t),ne(k,E),g&&g.d(),Y=!1,q()}}}function lt(a,t,n){let{date:e}=t,{events:l}=t;const r=Je();function i(){r("close")}return a.$$set=s=>{"date"in s&&n(0,e=s.date),"events"in s&&n(1,l=s.events)},[e,l,i]}class nt extends oe{constructor(t){super(),ce(this,t,lt,tt,ie,{date:0,events:1})}}const Te="(prefers-reduced-motion: reduce)";let at=Xe(!1,a=>{Qe(()=>{const t=window.matchMedia(Te).matches;a(t);const n=l=>{a(l.matches)},e=window.matchMedia(Te);return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}})});function Ce(a,t,n){const e=a.slice();return e[19]=t[n],e}function Ie(a,t,n){const e=a.slice();return e[22]=t[n],e[24]=n,e}function Se(a,t,n){const e=a.slice();e[22]=t[n],e[29]=n;const l=e[24]*_e+e[29]-e[4]+1;e[25]=l;const r=new Date(e[5],e[2],e[25]);e[26]=r;const i=e[25]>0&&e[25]<=e[3][e[2]];return e[27]=i,e}function Ne(a,t,n){const e=a.slice();return e[30]=t[n],e}function Ve(a){let t,n=a[30]+"",e;return{c(){t=p("div"),e=R(n),this.h()},l(l){t=b(l,"DIV",{class:!0});var r=T(t);e=W(r,n),r.forEach(v),this.h()},h(){D(t,"class","svelte-10nfc1k")},m(l,r){A(l,t,r),h(t,e)},p:re,d(l){l&&v(t)}}}function Le(a){let t,n=a[25]+"",e;return{c(){t=p("span"),e=R(n),this.h()},l(l){t=b(l,"SPAN",{class:!0});var r=T(t);e=W(r,n),r.forEach(v),this.h()},h(){D(t,"class","calendar__body__day svelte-10nfc1k")},m(l,r){A(l,t,r),h(t,e)},p(l,r){r[0]&16&&n!==(n=l[25]+"")&&G(e,n)},d(l){l&&v(t)}}}function st(a){let t,n=a[27]&&Le(a);return{c(){n&&n.c(),t=ee()},l(e){n&&n.l(e),t=ee()},m(e,l){n&&n.m(e,l),A(e,t,l)},p(e,l){e[27]?n?n.p(e,l):(n=Le(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&v(t),n&&n.d(e)}}}function Oe(a){let t,n;return t=new et({props:{events:a[8].get(a[26].toDateString()),clickable:a[27],$$slots:{default:[st]},$$scope:{ctx:a}}}),t.$on("click",function(){Ke(a[12](a[26]))&&a[12](a[26]).apply(this,arguments)}),{c(){de(t.$$.fragment)},l(e){he(t.$$.fragment,e)},m(e,l){ve(t,e,l),n=!0},p(e,l){a=e;const r={};l[0]&308&&(r.events=a[8].get(a[26].toDateString())),l[0]&28&&(r.clickable=a[27]),l[0]&28|l[1]&4&&(r.$$scope={dirty:l,ctx:a}),t.$set(r)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){J(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function He(a){let t,n,e=z({length:_e}),l=[];for(let i=0;i<e.length;i+=1)l[i]=Oe(Se(a,e,i));const r=i=>J(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();t=ee()},l(i){for(let s=0;s<l.length;s+=1)l[s].l(i);t=ee()},m(i,s){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(i,s);A(i,t,s),n=!0},p(i,s){if(s[0]&4412){e=z({length:_e});let c;for(c=0;c<e.length;c+=1){const d=Se(i,e,c);l[c]?(l[c].p(d,s),F(l[c],1)):(l[c]=Oe(d),l[c].c(),F(l[c],1),l[c].m(t.parentNode,t))}for(fe(),c=e.length;c<l.length;c+=1)r(c);ue()}},i(i){if(!n){for(let s=0;s<e.length;s+=1)F(l[s]);n=!0}},o(i){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)J(l[s]);n=!1},d(i){i&&v(t),ne(l,i)}}}function je(a){let t,n=a[19].name+"",e,l,r;return{c(){t=p("div"),e=R(n),l=O(),this.h()},l(i){t=b(i,"DIV",{class:!0,style:!0});var s=T(t);e=W(s,n),l=H(s),s.forEach(v),this.h()},h(){D(t,"class","calendar__body__event svelte-10nfc1k"),D(t,"style",r=`
						grid-row: ${Math.ceil((a[19].startDate.getDate()+a[4])/7)} / ${Math.ceil((a[19].endDate.getDate()+a[4])/7)};
						grid-column: ${a[19].startDate.getDay()} / ${a[19].endDate.getDay()+1};
					`)},m(i,s){A(i,t,s),h(t,e),h(t,l)},p(i,s){s[0]&2&&n!==(n=i[19].name+"")&&G(e,n),s[0]&18&&r!==(r=`
						grid-row: ${Math.ceil((i[19].startDate.getDate()+i[4])/7)} / ${Math.ceil((i[19].endDate.getDate()+i[4])/7)};
						grid-column: ${i[19].startDate.getDay()} / ${i[19].endDate.getDay()+1};
					`)&&D(t,"style",r)},d(i){i&&v(t)}}}function Ae(a){let t=a[19].startDate.getMonth()===a[2]&&a[19].startDate.getFullYear()===a[5],n,e=t&&je(a);return{c(){e&&e.c(),n=ee()},l(l){e&&e.l(l),n=ee()},m(l,r){e&&e.m(l,r),A(l,n,r)},p(l,r){r[0]&38&&(t=l[19].startDate.getMonth()===l[2]&&l[19].startDate.getFullYear()===l[5]),t?e?e.p(l,r):(e=je(l),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(l){l&&v(n),e&&e.d(l)}}}function Ye(a){let t,n,e,l;return n=new nt({props:{date:a[6],events:a[8].get(a[6].toDateString())||[]}}),n.$on("close",a[16]),{c(){t=p("div"),de(n.$$.fragment),this.h()},l(r){t=b(r,"DIV",{class:!0});var i=T(t);he(n.$$.fragment,i),i.forEach(v),this.h()},h(){D(t,"class","calendar-detail svelte-10nfc1k")},m(r,i){A(r,t,i),ve(n,t,null),l=!0},p(r,i){a=r;const s={};i[0]&64&&(s.date=a[6]),i[0]&320&&(s.events=a[8].get(a[6].toDateString())||[]),n.$set(s)},i(r){l||(F(n.$$.fragment,r),r&&Ge(()=>{l&&(e||(e=ke(t,be,{x:150,duration:a[9]?0:250,easing:pe},!0)),e.run(1))}),l=!0)},o(r){J(n.$$.fragment,r),r&&(e||(e=ke(t,be,{x:150,duration:a[9]?0:250,easing:pe},!1)),e.run(0)),l=!1},d(r){r&&v(t),me(n),r&&e&&e.end()}}}function rt(a){let t,n,e,l,r='<i class="ri-arrow-left-double-line svelte-10nfc1k"></i>',i,s,c='<i class="ri-arrow-left-s-line svelte-10nfc1k"></i>',d,f,_=a[10][a[2]]+"",Y,q,L,k,g,E='<i class="ri-arrow-right-s-line svelte-10nfc1k"></i>',j,m,B,C,M,U,Q,te,ae,K=z(a[11]),S=[];for(let u=0;u<K.length;u+=1)S[u]=Ve(Ne(a,K,u));let $=z({length:a[7]}),w=[];for(let u=0;u<$.length;u+=1)w[u]=He(Ie(a,$,u));const Be=u=>J(w[u],1,1,()=>{w[u]=null});let X=z(a[1]),N=[];for(let u=0;u<X.length;u+=1)N[u]=Ae(Ce(a,X,u));let I=a[6]&&Ye(a);return{c(){t=p("div"),n=p("div"),e=p("div"),l=p("button"),l.innerHTML=r,i=O(),s=p("button"),s.innerHTML=c,d=O(),f=p("h2"),Y=R(_),q=O(),L=R(a[5]),k=O(),g=p("button"),g.innerHTML=E,j=O(),m=p("div");for(let u=0;u<S.length;u+=1)S[u].c();B=O(),C=p("div");for(let u=0;u<w.length;u+=1)w[u].c();M=O();for(let u=0;u<N.length;u+=1)N[u].c();U=O(),I&&I.c(),this.h()},l(u){t=b(u,"DIV",{class:!0});var y=T(t);n=b(y,"DIV",{class:!0});var o=T(n);e=b(o,"DIV",{class:!0});var V=T(e);l=b(V,"BUTTON",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-1l8a0dv"&&(l.innerHTML=r),i=H(V),s=b(V,"BUTTON",{class:!0,"data-svelte-h":!0}),x(s)!=="svelte-1qk3zwx"&&(s.innerHTML=c),d=H(V),f=b(V,"H2",{class:!0});var se=T(f);Y=W(se,_),q=H(se),L=W(se,a[5]),se.forEach(v),k=H(V),g=b(V,"BUTTON",{class:!0,"data-svelte-h":!0}),x(g)!=="svelte-r3u6hy"&&(g.innerHTML=E),V.forEach(v),j=H(o),m=b(o,"DIV",{class:!0});var ge=T(m);for(let P=0;P<S.length;P+=1)S[P].l(ge);ge.forEach(v),o.forEach(v),B=H(y),C=b(y,"DIV",{class:!0});var Z=T(C);for(let P=0;P<w.length;P+=1)w[P].l(Z);M=H(Z);for(let P=0;P<N.length;P+=1)N[P].l(Z);U=H(Z),I&&I.l(Z),Z.forEach(v),y.forEach(v),this.h()},h(){D(l,"class","svelte-10nfc1k"),D(s,"class","svelte-10nfc1k"),D(f,"class","svelte-10nfc1k"),D(g,"class","svelte-10nfc1k"),D(e,"class","calendar__header__date svelte-10nfc1k"),D(m,"class","calendar__header__days svelte-10nfc1k"),D(n,"class","calendar__header svelte-10nfc1k"),D(C,"class","calendar__body svelte-10nfc1k"),De(C,"selected-date",a[6]),D(t,"class","calendar svelte-10nfc1k")},m(u,y){A(u,t,y),h(t,n),h(n,e),h(e,l),h(e,i),h(e,s),h(e,d),h(e,f),h(f,Y),h(f,q),h(f,L),h(e,k),h(e,g),h(n,j),h(n,m);for(let o=0;o<S.length;o+=1)S[o]&&S[o].m(m,null);h(t,B),h(t,C);for(let o=0;o<w.length;o+=1)w[o]&&w[o].m(C,null);h(C,M);for(let o=0;o<N.length;o+=1)N[o]&&N[o].m(C,null);h(C,U),I&&I.m(C,null),Q=!0,te||(ae=[le(l,"click",a[13]),le(s,"click",a[14]),le(g,"click",a[15])],te=!0)},p(u,y){if((!Q||y[0]&4)&&_!==(_=u[10][u[2]]+"")&&G(Y,_),(!Q||y[0]&32)&&G(L,u[5]),y[0]&2048){K=z(u[11]);let o;for(o=0;o<K.length;o+=1){const V=Ne(u,K,o);S[o]?S[o].p(V,y):(S[o]=Ve(V),S[o].c(),S[o].m(m,null))}for(;o<S.length;o+=1)S[o].d(1);S.length=K.length}if(y[0]&4540){$=z({length:u[7]});let o;for(o=0;o<$.length;o+=1){const V=Ie(u,$,o);w[o]?(w[o].p(V,y),F(w[o],1)):(w[o]=He(V),w[o].c(),F(w[o],1),w[o].m(C,M))}for(fe(),o=$.length;o<w.length;o+=1)Be(o);ue()}if(y[0]&54){X=z(u[1]);let o;for(o=0;o<X.length;o+=1){const V=Ce(u,X,o);N[o]?N[o].p(V,y):(N[o]=Ae(V),N[o].c(),N[o].m(C,U))}for(;o<N.length;o+=1)N[o].d(1);N.length=X.length}u[6]?I?(I.p(u,y),y[0]&64&&F(I,1)):(I=Ye(u),I.c(),F(I,1),I.m(C,null)):I&&(fe(),J(I,1,1,()=>{I=null}),ue()),(!Q||y[0]&64)&&De(C,"selected-date",u[6])},i(u){if(!Q){for(let y=0;y<$.length;y+=1)F(w[y]);F(I),Q=!0}},o(u){w=w.filter(Boolean);for(let y=0;y<w.length;y+=1)J(w[y]);J(I),Q=!1},d(u){u&&v(t),ne(S,u),ne(w,u),ne(N,u),I&&I.d(),te=!1,Re(ae)}}}const _e=7;function it(a,t){const n=new Map;return a.forEach(e=>{const l=t(e);for(const r of l){const i=n.get(r)||[];i.push(e),n.set(r,i)}}),n}function ot(a){return a%4===0&&a%100!==0&&a%400!==0||a%100===0&&a%400===0}function ct(a){return ot(a)?29:28}function ft(a,t,n){let e,l,r,i,s,c,d;We(a,at,M=>n(9,d=M));let{events:f}=t;const _=1e3*60*60*24;function Y(M,U){return(U.getTime()-M.getTime())/_}const q=["January","February","March","April","May","June","July","August","September","October","November","December"],L=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];let{date:k=new Date}=t,g=null;const E=M=>()=>n(6,g=M),j=()=>n(0,k=new Date(r-1,l,1)),m=()=>n(0,k=new Date(r,l-1,1)),B=()=>n(0,k=new Date(r,l+1,1)),C=()=>n(6,g=null);return a.$$set=M=>{"events"in M&&n(1,f=M.events),"date"in M&&n(0,k=M.date)},a.$$.update=()=>{a.$$.dirty[0]&2&&n(8,e=it(f,M=>{const U=Array(Y(M.startDate,M.endDate)+1).fill(0),Q=M.startDate.getFullYear(),te=M.startDate.getMonth(),ae=M.startDate.getDate();return U.map((K,S)=>new Date(Q,te,ae+S).toDateString())})),a.$$.dirty[0]&1&&n(2,l=k.getMonth()),a.$$.dirty[0]&1&&n(5,r=k.getFullYear()),a.$$.dirty[0]&32&&n(3,i=[31,ct(r),31,30,31,30,31,31,30,31,30,31]),a.$$.dirty[0]&36&&n(4,s=(new Date(r,l,1).getDay()%7-1+7)%7),a.$$.dirty[0]&28&&n(7,c=Math.ceil((s+i[l])/7))},[k,f,l,i,s,r,g,c,e,d,q,L,E,j,m,B,C]}class ut extends oe{constructor(t){super(),ce(this,t,ft,rt,ie,{events:1,date:0},null,[-1,-1])}}function _t(a){let t,n,e,l,r="Events",i,s,c;return s=new ut({props:{events:a[0].events}}),{c(){t=p("meta"),n=O(),e=p("main"),l=p("h1"),l.textContent=r,i=O(),de(s.$$.fragment),this.h()},l(d){const f=$e("svelte-1sfebwo",document.head);t=b(f,"META",{name:!0,content:!0}),f.forEach(v),n=H(d),e=b(d,"MAIN",{class:!0});var _=T(e);l=b(_,"H1",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-xtcg81"&&(l.textContent=r),i=H(_),he(s.$$.fragment,_),_.forEach(v),this.h()},h(){document.title="Events",D(t,"name","description"),D(t,"content","Stay up to date on all school events here!"),D(l,"class","svelte-zd9xm"),D(e,"class","svelte-zd9xm")},m(d,f){h(document.head,t),A(d,n,f),A(d,e,f),h(e,l),h(e,i),ve(s,e,null),c=!0},p(d,[f]){const _={};f&1&&(_.events=d[0].events),s.$set(_)},i(d){c||(F(s.$$.fragment,d),c=!0)},o(d){J(s.$$.fragment,d),c=!1},d(d){d&&(v(n),v(e)),v(t),me(s)}}}function dt(a,t,n){let{data:e}=t;return a.$$set=l=>{"data"in l&&n(0,e=l.data)},[e]}class kt extends oe{constructor(t){super(),ce(this,t,dt,_t,ie,{data:0})}}export{kt as component};
