import{s as re,v as Ye,f as p,a as V,g as k,h as M,c as z,d as g,j as m,i as O,z as h,C as le,w as Be,x as Fe,y as Ue,l as R,m as W,n as G,N as Pe,r as x,u as ie,G as ne,J as Je,o as Qe,B as be,D as Re,A as We,e as ee,I as Ge,O as Ke,E as $e}from"../chunks/scheduler.3f1532c0.js";import{S as oe,i as ce,a as Y,t as J,g as fe,c as ue,b as de,d as he,m as ge,f as De,e as ve}from"../chunks/index.bb2186ed.js";import{e as P}from"../chunks/each.33c78c84.js";import{q as pe,f as ke}from"../chunks/index.07969f4a.js";import{r as Xe}from"../chunks/index.b159e192.js";function ye(a){let t,n=a[0].length+"",e;return{c(){t=p("div"),e=R(n),this.h()},l(l){t=k(l,"DIV",{class:!0});var i=M(t);e=W(i,n),i.forEach(g),this.h()},h(){m(t,"class","calendar-day__event-count svelte-rfm32a")},m(l,i){O(l,t,i),h(t,e)},p(l,i){i&1&&n!==(n=l[0].length+"")&&G(e,n)},d(l){l&&g(t)}}}function Ze(a){let t,n,e,l,i,r,s=a[0]&&a[1]&&ye(a);const c=a[3].default,d=Ye(c,a,a[2],null);return{c(){t=p("button"),s&&s.c(),n=V(),d&&d.c(),this.h()},l(f){t=k(f,"BUTTON",{class:!0});var _=M(t);s&&s.l(_),n=z(_),d&&d.l(_),_.forEach(g),this.h()},h(){m(t,"class","calendar-day svelte-rfm32a"),t.disabled=e=!a[1]},m(f,_){O(f,t,_),s&&s.m(t,null),h(t,n),d&&d.m(t,null),l=!0,i||(r=le(t,"click",a[4]),i=!0)},p(f,[_]){f[0]&&f[1]?s?s.p(f,_):(s=ye(f),s.c(),s.m(t,n)):s&&(s.d(1),s=null),d&&d.p&&(!l||_&4)&&Be(d,c,f,f[2],l?Ue(c,f[2],_,null):Fe(f[2]),null),(!l||_&2&&e!==(e=!f[1]))&&(t.disabled=e)},i(f){l||(Y(d,f),l=!0)},o(f){J(d,f),l=!1},d(f){f&&g(t),s&&s.d(),d&&d.d(f),i=!1,r()}}}function xe(a,t,n){let{$$slots:e={},$$scope:l}=t,{events:i}=t,{clickable:r=!1}=t;function s(c){Pe.call(this,a,c)}return a.$$set=c=>{"events"in c&&n(0,i=c.events),"clickable"in c&&n(1,r=c.clickable),"$$scope"in c&&n(2,l=c.$$scope)},[i,r,l,e,s]}class et extends oe{constructor(t){super(),ce(this,t,xe,Ze,re,{events:0,clickable:1})}}function je(a,t,n){const e=a.slice();return e[4]=t[n],e}function we(a){let t,n=`No events on this day.\r
				`;return{c(){t=p("div"),t.textContent=n,this.h()},l(e){t=k(e,"DIV",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-1blygwu"&&(t.textContent=n),this.h()},h(){m(t,"class","calendar-detail__no-events svelte-bjzwgj")},m(e,l){O(e,t,l)},p:ie,d(e){e&&g(t)}}}function Ee(a){let t,n,e=a[4].name+"",l,i,r,s=a[4].description+"",c,d;return{c(){t=p("div"),n=p("h4"),l=R(e),i=V(),r=p("p"),c=R(s),d=V(),this.h()},l(f){t=k(f,"DIV",{class:!0});var _=M(t);n=k(_,"H4",{class:!0});var H=M(n);l=W(H,e),H.forEach(g),i=z(_),r=k(_,"P",{class:!0});var F=M(r);c=W(F,s),F.forEach(g),d=z(_),_.forEach(g),this.h()},h(){m(n,"class","svelte-bjzwgj"),m(r,"class","svelte-bjzwgj"),m(t,"class","calendar-detail__content__events__event svelte-bjzwgj")},m(f,_){O(f,t,_),h(t,n),h(n,l),h(t,i),h(t,r),h(r,c),h(t,d)},p(f,_){_&2&&e!==(e=f[4].name+"")&&G(l,e),_&2&&s!==(s=f[4].description+"")&&G(c,s)},d(f){f&&g(t)}}}function tt(a){let t,n,e,l,i="×",r,s,c=a[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"",d,f,_,H,F,N=P(a[1]),D=[];for(let j=0;j<N.length;j+=1)D[j]=Ee(je(a,N,j));let b=null;return N.length||(b=we()),{c(){t=p("div"),n=p("div"),e=p("div"),l=p("button"),l.textContent=i,r=V(),s=p("h3"),d=R(c),f=V(),_=p("div");for(let j=0;j<D.length;j+=1)D[j].c();b&&b.c(),this.h()},l(j){t=k(j,"DIV",{class:!0});var L=M(t);n=k(L,"DIV",{class:!0});var v=M(n);e=k(v,"DIV",{class:!0});var A=M(e);l=k(A,"BUTTON",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-1p9hkmf"&&(l.textContent=i),r=z(A),s=k(A,"H3",{class:!0});var T=M(s);d=W(T,c),T.forEach(g),A.forEach(g),f=z(v),_=k(v,"DIV",{class:!0});var w=M(_);for(let B=0;B<D.length;B+=1)D[B].l(w);b&&b.l(w),w.forEach(g),v.forEach(g),L.forEach(g),this.h()},h(){m(l,"class","svelte-bjzwgj"),m(s,"class","svelte-bjzwgj"),m(e,"class","calendar-detail__content__heading svelte-bjzwgj"),m(_,"class","calendar-detail__content__events svelte-bjzwgj"),m(n,"class","calendar-detail__content svelte-bjzwgj"),m(t,"class","calendar-detail svelte-bjzwgj")},m(j,L){O(j,t,L),h(t,n),h(n,e),h(e,l),h(e,r),h(e,s),h(s,d),h(n,f),h(n,_);for(let v=0;v<D.length;v+=1)D[v]&&D[v].m(_,null);b&&b.m(_,null),H||(F=le(l,"click",a[2]),H=!0)},p(j,[L]){if(L&1&&c!==(c=j[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"")&&G(d,c),L&2){N=P(j[1]);let v;for(v=0;v<N.length;v+=1){const A=je(j,N,v);D[v]?D[v].p(A,L):(D[v]=Ee(A),D[v].c(),D[v].m(_,null))}for(;v<D.length;v+=1)D[v].d(1);D.length=N.length,!N.length&&b?b.p(j,L):N.length?b&&(b.d(1),b=null):(b=we(),b.c(),b.m(_,null))}},i:ie,o:ie,d(j){j&&g(t),ne(D,j),b&&b.d(),H=!1,F()}}}function lt(a,t,n){let{date:e}=t,{events:l}=t;const i=Je();function r(){i("close")}return a.$$set=s=>{"date"in s&&n(0,e=s.date),"events"in s&&n(1,l=s.events)},[e,l,r]}class nt extends oe{constructor(t){super(),ce(this,t,lt,tt,re,{date:0,events:1})}}const Me="(prefers-reduced-motion: reduce)";let at=Xe(!1,a=>{Qe(()=>{const t=window.matchMedia(Me).matches;a(t);const n=l=>{a(l.matches)},e=window.matchMedia(Me);return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}})});function Te(a,t,n){const e=a.slice();return e[20]=t[n],e}function Ce(a,t,n){const e=a.slice();return e[23]=t[n],e[25]=n,e}function Ie(a,t,n){const e=a.slice();e[23]=t[n],e[30]=n;const l=e[25]*_e+e[30]-e[4]+1;e[26]=l;const i=new Date(e[5],e[2],e[26]);e[27]=i;const r=e[26]>0&&e[26]<=e[3][e[2]];return e[28]=r,e}function qe(a,t,n){const e=a.slice();return e[31]=t[n],e}function Se(a){let t,n=a[31]+"",e;return{c(){t=p("div"),e=R(n),this.h()},l(l){t=k(l,"DIV",{class:!0});var i=M(t);e=W(i,n),i.forEach(g),this.h()},h(){m(t,"class","svelte-13ijgqi")},m(l,i){O(l,t,i),h(t,e)},p:ie,d(l){l&&g(t)}}}function Ne(a){let t,n=a[26]+"",e;return{c(){t=p("span"),e=R(n),this.h()},l(l){t=k(l,"SPAN",{class:!0});var i=M(t);e=W(i,n),i.forEach(g),this.h()},h(){m(t,"class","calendar__body__day svelte-13ijgqi")},m(l,i){O(l,t,i),h(t,e)},p(l,i){i[0]&16&&n!==(n=l[26]+"")&&G(e,n)},d(l){l&&g(t)}}}function st(a){let t,n=a[28]&&Ne(a);return{c(){n&&n.c(),t=ee()},l(e){n&&n.l(e),t=ee()},m(e,l){n&&n.m(e,l),O(e,t,l)},p(e,l){e[28]?n?n.p(e,l):(n=Ne(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&g(t),n&&n.d(e)}}}function Ve(a){let t,n;return t=new et({props:{events:a[8].get(a[27].toDateString()),clickable:a[28],$$slots:{default:[st]},$$scope:{ctx:a}}}),t.$on("click",function(){Ke(a[12](a[27]))&&a[12](a[27]).apply(this,arguments)}),{c(){de(t.$$.fragment)},l(e){he(t.$$.fragment,e)},m(e,l){ge(t,e,l),n=!0},p(e,l){a=e;const i={};l[0]&308&&(i.events=a[8].get(a[27].toDateString())),l[0]&28&&(i.clickable=a[28]),l[0]&28|l[1]&8&&(i.$$scope={dirty:l,ctx:a}),t.$set(i)},i(e){n||(Y(t.$$.fragment,e),n=!0)},o(e){J(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function ze(a){let t,n,e=P({length:_e}),l=[];for(let r=0;r<e.length;r+=1)l[r]=Ve(Ie(a,e,r));const i=r=>J(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();t=ee()},l(r){for(let s=0;s<l.length;s+=1)l[s].l(r);t=ee()},m(r,s){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(r,s);O(r,t,s),n=!0},p(r,s){if(s[0]&4412){e=P({length:_e});let c;for(c=0;c<e.length;c+=1){const d=Ie(r,e,c);l[c]?(l[c].p(d,s),Y(l[c],1)):(l[c]=Ve(d),l[c].c(),Y(l[c],1),l[c].m(t.parentNode,t))}for(fe(),c=e.length;c<l.length;c+=1)i(c);ue()}},i(r){if(!n){for(let s=0;s<e.length;s+=1)Y(l[s]);n=!0}},o(r){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)J(l[s]);n=!1},d(r){r&&g(t),ne(l,r)}}}function Le(a){let t,n=a[20].name+"",e,l,i;return{c(){t=p("div"),e=R(n),l=V(),this.h()},l(r){t=k(r,"DIV",{class:!0,style:!0});var s=M(t);e=W(s,n),l=z(s),s.forEach(g),this.h()},h(){m(t,"class","calendar__body__event svelte-13ijgqi"),m(t,"style",i=`
						grid-row: ${Math.ceil((a[20].startDate.getDate()+a[4])/7)} / ${Math.ceil((a[20].endDate.getDate()+a[4])/7)};
						grid-column: ${a[20].startDate.getDay()} / ${a[20].endDate.getDay()+1};
					`)},m(r,s){O(r,t,s),h(t,e),h(t,l)},p(r,s){s[0]&2&&n!==(n=r[20].name+"")&&G(e,n),s[0]&18&&i!==(i=`
						grid-row: ${Math.ceil((r[20].startDate.getDate()+r[4])/7)} / ${Math.ceil((r[20].endDate.getDate()+r[4])/7)};
						grid-column: ${r[20].startDate.getDay()} / ${r[20].endDate.getDay()+1};
					`)&&m(t,"style",i)},d(r){r&&g(t)}}}function Oe(a){let t=a[20].startDate.getMonth()===a[2]&&a[20].startDate.getFullYear()===a[5],n,e=t&&Le(a);return{c(){e&&e.c(),n=ee()},l(l){e&&e.l(l),n=ee()},m(l,i){e&&e.m(l,i),O(l,n,i)},p(l,i){i[0]&38&&(t=l[20].startDate.getMonth()===l[2]&&l[20].startDate.getFullYear()===l[5]),t?e?e.p(l,i):(e=Le(l),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(l){l&&g(n),e&&e.d(l)}}}function He(a){let t,n,e,l;return n=new nt({props:{date:a[6],events:a[8].get(a[6].toDateString())||[]}}),n.$on("close",a[16]),{c(){t=p("div"),de(n.$$.fragment),this.h()},l(i){t=k(i,"DIV",{class:!0});var r=M(t);he(n.$$.fragment,r),r.forEach(g),this.h()},h(){m(t,"class","calendar-detail svelte-13ijgqi")},m(i,r){O(i,t,r),ge(n,t,null),l=!0},p(i,r){a=i;const s={};r[0]&64&&(s.date=a[6]),r[0]&320&&(s.events=a[8].get(a[6].toDateString())||[]),n.$set(s)},i(i){l||(Y(n.$$.fragment,i),i&&Ge(()=>{l&&(e||(e=De(t,ke,{x:250,opacity:1,duration:a[9]?0:250,easing:pe},!0)),e.run(1))}),l=!0)},o(i){J(n.$$.fragment,i),i&&(e||(e=De(t,ke,{x:250,opacity:1,duration:a[9]?0:250,easing:pe},!1)),e.run(0)),l=!1},d(i){i&&g(t),ve(n),i&&e&&e.end()}}}function it(a){let t,n,e,l,i='<i class="ri-arrow-left-double-line svelte-13ijgqi"></i>',r,s,c='<i class="ri-arrow-left-s-line svelte-13ijgqi"></i>',d,f,_=a[10][a[2]]+"",H,F,N,D,b,j='<i class="ri-arrow-right-s-line svelte-13ijgqi"></i>',L,v,A,T,w,B,Q,te,ae,K=P(a[11]),I=[];for(let u=0;u<K.length;u+=1)I[u]=Se(qe(a,K,u));let $=P({length:a[7]}),E=[];for(let u=0;u<$.length;u+=1)E[u]=ze(Ce(a,$,u));const Ae=u=>J(E[u],1,1,()=>{E[u]=null});let X=P(a[1]),q=[];for(let u=0;u<X.length;u+=1)q[u]=Oe(Te(a,X,u));let C=a[6]&&He(a);return{c(){t=p("div"),n=p("div"),e=p("div"),l=p("button"),l.innerHTML=i,r=V(),s=p("button"),s.innerHTML=c,d=V(),f=p("h2"),H=R(_),F=V(),N=R(a[5]),D=V(),b=p("button"),b.innerHTML=j,L=V(),v=p("div");for(let u=0;u<I.length;u+=1)I[u].c();A=V(),T=p("div");for(let u=0;u<E.length;u+=1)E[u].c();w=V();for(let u=0;u<q.length;u+=1)q[u].c();B=V(),C&&C.c(),this.h()},l(u){t=k(u,"DIV",{class:!0});var y=M(t);n=k(y,"DIV",{class:!0});var o=M(n);e=k(o,"DIV",{class:!0});var S=M(e);l=k(S,"BUTTON",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-1l8a0dv"&&(l.innerHTML=i),r=z(S),s=k(S,"BUTTON",{class:!0,"data-svelte-h":!0}),x(s)!=="svelte-1qk3zwx"&&(s.innerHTML=c),d=z(S),f=k(S,"H2",{class:!0});var se=M(f);H=W(se,_),F=z(se),N=W(se,a[5]),se.forEach(g),D=z(S),b=k(S,"BUTTON",{class:!0,"data-svelte-h":!0}),x(b)!=="svelte-r3u6hy"&&(b.innerHTML=j),S.forEach(g),L=z(o),v=k(o,"DIV",{class:!0});var me=M(v);for(let U=0;U<I.length;U+=1)I[U].l(me);me.forEach(g),o.forEach(g),A=z(y),T=k(y,"DIV",{class:!0});var Z=M(T);for(let U=0;U<E.length;U+=1)E[U].l(Z);w=z(Z);for(let U=0;U<q.length;U+=1)q[U].l(Z);B=z(Z),C&&C.l(Z),Z.forEach(g),y.forEach(g),this.h()},h(){m(l,"class","svelte-13ijgqi"),m(s,"class","svelte-13ijgqi"),m(f,"class","svelte-13ijgqi"),m(b,"class","svelte-13ijgqi"),m(e,"class","calendar__header__date svelte-13ijgqi"),m(v,"class","calendar__header__days svelte-13ijgqi"),m(n,"class","calendar__header svelte-13ijgqi"),m(T,"class","calendar__body svelte-13ijgqi"),be(T,"selected-date",a[6]),m(t,"class","calendar svelte-13ijgqi")},m(u,y){O(u,t,y),h(t,n),h(n,e),h(e,l),h(e,r),h(e,s),h(e,d),h(e,f),h(f,H),h(f,F),h(f,N),h(e,D),h(e,b),h(n,L),h(n,v);for(let o=0;o<I.length;o+=1)I[o]&&I[o].m(v,null);h(t,A),h(t,T);for(let o=0;o<E.length;o+=1)E[o]&&E[o].m(T,null);h(T,w);for(let o=0;o<q.length;o+=1)q[o]&&q[o].m(T,null);h(T,B),C&&C.m(T,null),Q=!0,te||(ae=[le(l,"click",a[13]),le(s,"click",a[14]),le(b,"click",a[15])],te=!0)},p(u,y){if((!Q||y[0]&4)&&_!==(_=u[10][u[2]]+"")&&G(H,_),(!Q||y[0]&32)&&G(N,u[5]),y[0]&2048){K=P(u[11]);let o;for(o=0;o<K.length;o+=1){const S=qe(u,K,o);I[o]?I[o].p(S,y):(I[o]=Se(S),I[o].c(),I[o].m(v,null))}for(;o<I.length;o+=1)I[o].d(1);I.length=K.length}if(y[0]&4540){$=P({length:u[7]});let o;for(o=0;o<$.length;o+=1){const S=Ce(u,$,o);E[o]?(E[o].p(S,y),Y(E[o],1)):(E[o]=ze(S),E[o].c(),Y(E[o],1),E[o].m(T,w))}for(fe(),o=$.length;o<E.length;o+=1)Ae(o);ue()}if(y[0]&54){X=P(u[1]);let o;for(o=0;o<X.length;o+=1){const S=Te(u,X,o);q[o]?q[o].p(S,y):(q[o]=Oe(S),q[o].c(),q[o].m(T,B))}for(;o<q.length;o+=1)q[o].d(1);q.length=X.length}u[6]?C?(C.p(u,y),y[0]&64&&Y(C,1)):(C=He(u),C.c(),Y(C,1),C.m(T,null)):C&&(fe(),J(C,1,1,()=>{C=null}),ue()),(!Q||y[0]&64)&&be(T,"selected-date",u[6])},i(u){if(!Q){for(let y=0;y<$.length;y+=1)Y(E[y]);Y(C),Q=!0}},o(u){E=E.filter(Boolean);for(let y=0;y<E.length;y+=1)J(E[y]);J(C),Q=!1},d(u){u&&g(t),ne(I,u),ne(E,u),ne(q,u),C&&C.d(),te=!1,Re(ae)}}}const _e=7;function rt(a,t){const n=new Map;return a.forEach(e=>{const l=t(e);for(const i of l){const r=n.get(i)||[];r.push(e),n.set(i,r)}}),n}function ot(a){return a%4===0&&a%100!==0&&a%400!==0||a%100===0&&a%400===0}function ct(a){return ot(a)?29:28}function ft(a,t,n){let e,l,i,r,s,c,d;We(a,at,w=>n(9,d=w));let{events:f}=t;const _=1e3*60*60*24;function H(w,B){return(B.getTime()-w.getTime())/_}const F=["January","February","March","April","May","June","July","August","September","October","November","December"],N=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];let{date:D=new Date}=t,b=null;const j=w=>()=>n(6,b=w),L=()=>n(0,D=new Date(i-1,l,1)),v=()=>n(0,D=new Date(i,l-1,1)),A=()=>n(0,D=new Date(i,l+1,1)),T=()=>n(6,b=null);return a.$$set=w=>{"events"in w&&n(1,f=w.events),"date"in w&&n(0,D=w.date)},a.$$.update=()=>{a.$$.dirty[0]&2&&n(8,e=rt(f,w=>{const B=Array(H(w.startDate,w.endDate)+1).fill(0),Q=w.startDate.getFullYear(),te=w.startDate.getMonth(),ae=w.startDate.getDate();return B.map((K,I)=>new Date(Q,te,ae+I).toDateString())})),a.$$.dirty[0]&1&&n(2,l=D.getMonth()),a.$$.dirty[0]&1&&n(5,i=D.getFullYear()),a.$$.dirty[0]&32&&n(3,r=[31,ct(i),31,30,31,30,31,31,30,31,30,31]),a.$$.dirty[0]&36&&n(4,s=(new Date(i,l,1).getDay()%7-1+7)%7),a.$$.dirty[0]&28&&n(7,c=Math.ceil((s+r[l])/7))},[D,f,l,r,s,i,b,c,e,d,F,N,j,L,v,A,T]}class ut extends oe{constructor(t){super(),ce(this,t,ft,it,re,{events:1,date:0},null,[-1,-1])}}function _t(a){let t,n,e,l,i="Events",r,s,c;return s=new ut({props:{events:a[0].events}}),{c(){t=p("meta"),n=V(),e=p("main"),l=p("h1"),l.textContent=i,r=V(),de(s.$$.fragment),this.h()},l(d){const f=$e("svelte-1sfebwo",document.head);t=k(f,"META",{name:!0,content:!0}),f.forEach(g),n=z(d),e=k(d,"MAIN",{class:!0});var _=M(e);l=k(_,"H1",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-xtcg81"&&(l.textContent=i),r=z(_),he(s.$$.fragment,_),_.forEach(g),this.h()},h(){document.title="Events",m(t,"name","description"),m(t,"content","Stay up to date on all school events here!"),m(l,"class","svelte-zd9xm"),m(e,"class","svelte-zd9xm")},m(d,f){h(document.head,t),O(d,n,f),O(d,e,f),h(e,l),h(e,r),ge(s,e,null),c=!0},p(d,[f]){const _={};f&1&&(_.events=d[0].events),s.$set(_)},i(d){c||(Y(s.$$.fragment,d),c=!0)},o(d){J(s.$$.fragment,d),c=!1},d(d){d&&(g(n),g(e)),g(t),ve(s)}}}function dt(a,t,n){let{data:e}=t;return a.$$set=l=>{"data"in l&&n(0,e=l.data)},[e]}class Dt extends oe{constructor(t){super(),ce(this,t,dt,_t,re,{data:0})}}export{Dt as component};