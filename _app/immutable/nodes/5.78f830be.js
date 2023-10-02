import{s as se,v as Ye,f as y,a as L,g as w,h as I,c as O,d as m,j as g,i as A,z as _,G as ne,w as Be,x as Fe,y as Pe,l as R,m as W,n as G,O as Ue,r as te,u as ae,C as ee,L as Je,o as qe,H as $,K as Ke,A as ge,e as x,J as Qe,P as Re,E as We}from"../chunks/scheduler.e27ffd16.js";import{S as re,i as ie,a as F,t as K,g as ce,c as fe,b as he,d as de,m as _e,f as pe,e as me}from"../chunks/index.8be47cba.js";import{e as q}from"../chunks/each.e59479a4.js";import{q as De,f as be}from"../chunks/index.43040a2e.js";import{r as ze}from"../chunks/index.791f86a2.js";import{t as Ge}from"../chunks/theme.store.1805cbd4.js";function ke(a){let t,n=a[0].length+"",e;return{c(){t=y("div"),e=R(n),this.h()},l(l){t=w(l,"DIV",{class:!0});var r=I(t);e=W(r,n),r.forEach(m),this.h()},h(){g(t,"class","calendar-day__event-count svelte-1hgf1fj")},m(l,r){A(l,t,r),_(t,e)},p(l,r){r&1&&n!==(n=l[0].length+"")&&G(e,n)},d(l){l&&m(t)}}}function Xe(a){let t,n,e,l,r,i,s=a[0]&&a[1]&&ke(a);const c=a[3].default,d=Ye(c,a,a[2],null);return{c(){t=y("button"),s&&s.c(),n=L(),d&&d.c(),this.h()},l(h){t=w(h,"BUTTON",{class:!0});var u=I(t);s&&s.l(u),n=O(u),d&&d.l(u),u.forEach(m),this.h()},h(){g(t,"class","calendar-day svelte-1hgf1fj"),t.disabled=e=!a[1]},m(h,u){A(h,t,u),s&&s.m(t,null),_(t,n),d&&d.m(t,null),l=!0,r||(i=ne(t,"click",a[4]),r=!0)},p(h,[u]){h[0]&&h[1]?s?s.p(h,u):(s=ke(h),s.c(),s.m(t,n)):s&&(s.d(1),s=null),d&&d.p&&(!l||u&4)&&Be(d,c,h,h[2],l?Pe(c,h[2],u,null):Fe(h[2]),null),(!l||u&2&&e!==(e=!h[1]))&&(t.disabled=e)},i(h){l||(F(d,h),l=!0)},o(h){K(d,h),l=!1},d(h){h&&m(t),s&&s.d(),d&&d.d(h),r=!1,i()}}}function Ze(a,t,n){let{$$slots:e={},$$scope:l}=t,{events:r}=t,{clickable:i=!1}=t;function s(c){Ue.call(this,a,c)}return a.$$set=c=>{"events"in c&&n(0,r=c.events),"clickable"in c&&n(1,i=c.clickable),"$$scope"in c&&n(2,l=c.$$scope)},[r,i,l,e,s]}class $e extends re{constructor(t){super(),ie(this,t,Ze,Xe,se,{events:0,clickable:1})}}function ye(a,t,n){const e=a.slice();return e[4]=t[n],e}function we(a){let t,n=`No events on this day.\r
				`;return{c(){t=y("div"),t.textContent=n,this.h()},l(e){t=w(e,"DIV",{class:!0,"data-svelte-h":!0}),te(t)!=="svelte-1blygwu"&&(t.textContent=n),this.h()},h(){g(t,"class","calendar-detail__no-events svelte-1udmu1t")},m(e,l){A(e,t,l)},p:ae,d(e){e&&m(t)}}}function Ee(a){let t,n,e=a[4].name+"",l,r,i,s=a[4].description+"",c,d;return{c(){t=y("div"),n=y("h4"),l=R(e),r=L(),i=y("p"),c=R(s),d=L(),this.h()},l(h){t=w(h,"DIV",{class:!0});var u=I(t);n=w(u,"H4",{class:!0});var P=I(n);l=W(P,e),P.forEach(m),r=O(u),i=w(u,"P",{class:!0});var j=I(i);c=W(j,s),j.forEach(m),d=O(u),u.forEach(m),this.h()},h(){g(n,"class","svelte-1udmu1t"),g(i,"class","svelte-1udmu1t"),g(t,"class","calendar-detail__content__events__event svelte-1udmu1t")},m(h,u){A(h,t,u),_(t,n),_(n,l),_(t,r),_(t,i),_(i,c),_(t,d)},p(h,u){u&2&&e!==(e=h[4].name+"")&&G(l,e),u&2&&s!==(s=h[4].description+"")&&G(c,s)},d(h){h&&m(t)}}}function xe(a){let t,n,e,l,r="×",i,s,c=a[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"",d,h,u,P,j,H=q(a[1]),C=[];for(let b=0;b<H.length;b+=1)C[b]=Ee(ye(a,H,b));let v=null;return H.length||(v=we()),{c(){t=y("div"),n=y("div"),e=y("div"),l=y("button"),l.textContent=r,i=L(),s=y("h3"),d=R(c),h=L(),u=y("div");for(let b=0;b<C.length;b+=1)C[b].c();v&&v.c(),this.h()},l(b){t=w(b,"DIV",{class:!0});var p=I(t);n=w(p,"DIV",{class:!0});var D=I(n);e=w(D,"DIV",{class:!0});var Y=I(e);l=w(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),te(l)!=="svelte-1p9hkmf"&&(l.textContent=r),i=O(Y),s=w(Y,"H3",{class:!0});var B=I(s);d=W(B,c),B.forEach(m),Y.forEach(m),h=O(D),u=w(D,"DIV",{class:!0});var E=I(u);for(let J=0;J<C.length;J+=1)C[J].l(E);v&&v.l(E),E.forEach(m),D.forEach(m),p.forEach(m),this.h()},h(){g(l,"class","svelte-1udmu1t"),g(s,"class","svelte-1udmu1t"),g(e,"class","calendar-detail__content__heading svelte-1udmu1t"),g(u,"class","calendar-detail__content__events svelte-1udmu1t"),g(n,"class","calendar-detail__content svelte-1udmu1t"),g(t,"class","calendar-detail svelte-1udmu1t")},m(b,p){A(b,t,p),_(t,n),_(n,e),_(e,l),_(e,i),_(e,s),_(s,d),_(n,h),_(n,u);for(let D=0;D<C.length;D+=1)C[D]&&C[D].m(u,null);v&&v.m(u,null),P||(j=ne(l,"click",a[2]),P=!0)},p(b,[p]){if(p&1&&c!==(c=b[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"")&&G(d,c),p&2){H=q(b[1]);let D;for(D=0;D<H.length;D+=1){const Y=ye(b,H,D);C[D]?C[D].p(Y,p):(C[D]=Ee(Y),C[D].c(),C[D].m(u,null))}for(;D<C.length;D+=1)C[D].d(1);C.length=H.length,!H.length&&v?v.p(b,p):H.length?v&&(v.d(1),v=null):(v=we(),v.c(),v.m(u,null))}},i:ae,o:ae,d(b){b&&m(t),ee(C,b),v&&v.d(),P=!1,j()}}}function et(a,t,n){let{date:e}=t,{events:l}=t;const r=Je();function i(){r("close")}return a.$$set=s=>{"date"in s&&n(0,e=s.date),"events"in s&&n(1,l=s.events)},[e,l,i]}class tt extends re{constructor(t){super(),ie(this,t,et,xe,se,{date:0,events:1})}}const Me="(prefers-reduced-motion: reduce)";let lt=ze(!1,a=>{qe(()=>{const t=window.matchMedia(Me).matches;a(t);const n=l=>{a(l.matches)},e=window.matchMedia(Me);return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}})});function Ce(a,t,n){const e=a.slice();return e[20]=t[n],e}function Ie(a,t,n){const e=a.slice();return e[23]=t[n],e[25]=n,e}function Se(a,t,n){const e=a.slice();e[23]=t[n],e[30]=n;const l=e[25]*ue+e[30]-e[4]+1;e[26]=l;const r=new Date(e[5],e[2],e[26]);e[27]=r;const i=e[26]>0&&e[26]<=e[3][e[2]];return e[28]=i,e}function Te(a,t,n){const e=a.slice();return e[31]=t[n],e}function je(a){let t,n=a[31]+"",e;return{c(){t=y("div"),e=R(n),this.h()},l(l){t=w(l,"DIV",{class:!0});var r=I(t);e=W(r,n),r.forEach(m),this.h()},h(){g(t,"class","svelte-j1ewmh")},m(l,r){A(l,t,r),_(t,e)},p:ae,d(l){l&&m(t)}}}function Ne(a){let t,n=a[26]+"",e;return{c(){t=y("span"),e=R(n),this.h()},l(l){t=w(l,"SPAN",{class:!0});var r=I(t);e=W(r,n),r.forEach(m),this.h()},h(){g(t,"class","calendar__body__day svelte-j1ewmh")},m(l,r){A(l,t,r),_(t,e)},p(l,r){r[0]&16&&n!==(n=l[26]+"")&&G(e,n)},d(l){l&&m(t)}}}function nt(a){let t,n=a[28]&&Ne(a);return{c(){n&&n.c(),t=x()},l(e){n&&n.l(e),t=x()},m(e,l){n&&n.m(e,l),A(e,t,l)},p(e,l){e[28]?n?n.p(e,l):(n=Ne(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&m(t),n&&n.d(e)}}}function Ve(a){let t,n;return t=new $e({props:{events:a[8].get(a[27].toDateString()),clickable:a[28],$$slots:{default:[nt]},$$scope:{ctx:a}}}),t.$on("click",function(){Re(a[13](a[27]))&&a[13](a[27]).apply(this,arguments)}),{c(){he(t.$$.fragment)},l(e){de(t.$$.fragment,e)},m(e,l){_e(t,e,l),n=!0},p(e,l){a=e;const r={};l[0]&308&&(r.events=a[8].get(a[27].toDateString())),l[0]&28&&(r.clickable=a[28]),l[0]&28|l[1]&8&&(r.$$scope={dirty:l,ctx:a}),t.$set(r)},i(e){n||(F(t.$$.fragment,e),n=!0)},o(e){K(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Le(a){let t,n,e=q({length:ue}),l=[];for(let i=0;i<e.length;i+=1)l[i]=Ve(Se(a,e,i));const r=i=>K(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();t=x()},l(i){for(let s=0;s<l.length;s+=1)l[s].l(i);t=x()},m(i,s){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(i,s);A(i,t,s),n=!0},p(i,s){if(s[0]&8508){e=q({length:ue});let c;for(c=0;c<e.length;c+=1){const d=Se(i,e,c);l[c]?(l[c].p(d,s),F(l[c],1)):(l[c]=Ve(d),l[c].c(),F(l[c],1),l[c].m(t.parentNode,t))}for(ce(),c=e.length;c<l.length;c+=1)r(c);fe()}},i(i){if(!n){for(let s=0;s<e.length;s+=1)F(l[s]);n=!0}},o(i){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)K(l[s]);n=!1},d(i){i&&m(t),ee(l,i)}}}function Oe(a){let t,n=a[20].name+"",e,l,r;return{c(){t=y("div"),e=R(n),l=L(),this.h()},l(i){t=w(i,"DIV",{class:!0,style:!0});var s=I(t);e=W(s,n),l=O(s),s.forEach(m),this.h()},h(){g(t,"class","calendar__body__event svelte-j1ewmh"),g(t,"style",r=`
						grid-row: ${Math.ceil((a[20].startDate.getDate()+a[4])/7)} / ${Math.ceil((a[20].endDate.getDate()+a[4])/7)};
						grid-column: ${a[20].startDate.getDay()+1} / ${a[20].endDate.getDay()+2};
					`)},m(i,s){A(i,t,s),_(t,e),_(t,l)},p(i,s){s[0]&2&&n!==(n=i[20].name+"")&&G(e,n),s[0]&18&&r!==(r=`
						grid-row: ${Math.ceil((i[20].startDate.getDate()+i[4])/7)} / ${Math.ceil((i[20].endDate.getDate()+i[4])/7)};
						grid-column: ${i[20].startDate.getDay()+1} / ${i[20].endDate.getDay()+2};
					`)&&g(t,"style",r)},d(i){i&&m(t)}}}function Ae(a){let t=a[20].startDate.getMonth()===a[2]&&a[20].startDate.getFullYear()===a[5],n,e=t&&Oe(a);return{c(){e&&e.c(),n=x()},l(l){e&&e.l(l),n=x()},m(l,r){e&&e.m(l,r),A(l,n,r)},p(l,r){r[0]&38&&(t=l[20].startDate.getMonth()===l[2]&&l[20].startDate.getFullYear()===l[5]),t?e?e.p(l,r):(e=Oe(l),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(l){l&&m(n),e&&e.d(l)}}}function He(a){let t,n,e,l;return n=new tt({props:{date:a[6],events:a[8].get(a[6].toDateString())||[]}}),n.$on("close",a[16]),{c(){t=y("div"),he(n.$$.fragment),this.h()},l(r){t=w(r,"DIV",{class:!0});var i=I(t);de(n.$$.fragment,i),i.forEach(m),this.h()},h(){g(t,"class","calendar-detail svelte-j1ewmh")},m(r,i){A(r,t,i),_e(n,t,null),l=!0},p(r,i){a=r;const s={};i[0]&64&&(s.date=a[6]),i[0]&320&&(s.events=a[8].get(a[6].toDateString())||[]),n.$set(s)},i(r){l||(F(n.$$.fragment,r),r&&Qe(()=>{l&&(e||(e=pe(t,be,{x:250,opacity:1,duration:a[10]?0:250,easing:De},!0)),e.run(1))}),l=!0)},o(r){K(n.$$.fragment,r),r&&(e||(e=pe(t,be,{x:250,opacity:1,duration:a[10]?0:250,easing:De},!1)),e.run(0)),l=!1},d(r){r&&m(t),me(n),r&&e&&e.end()}}}function at(a){let t,n,e,l,r='<i class="ri-arrow-left-s-line svelte-j1ewmh"></i>',i,s,c=a[11][a[2]]+"",d,h,u,P,j,H='<i class="ri-arrow-right-s-line svelte-j1ewmh"></i>',C,v,b,p,D,Y,B,E,J,z=q(a[12]),T=[];for(let f=0;f<z.length;f+=1)T[f]=je(Te(a,z,f));let Q=q({length:a[7]}),M=[];for(let f=0;f<Q.length;f+=1)M[f]=Le(Ie(a,Q,f));const oe=f=>K(M[f],1,1,()=>{M[f]=null});let X=q(a[1]),N=[];for(let f=0;f<X.length;f+=1)N[f]=Ae(Ce(a,X,f));let S=a[6]&&He(a);return{c(){t=y("div"),n=y("div"),e=y("div"),l=y("button"),l.innerHTML=r,i=L(),s=y("h2"),d=R(c),h=L(),u=R(a[5]),P=L(),j=y("button"),j.innerHTML=H,C=L(),v=y("div");for(let f=0;f<T.length;f+=1)T[f].c();b=L(),p=y("div");for(let f=0;f<M.length;f+=1)M[f].c();D=L();for(let f=0;f<N.length;f+=1)N[f].c();Y=L(),S&&S.c(),this.h()},l(f){t=w(f,"DIV",{class:!0});var k=I(t);n=w(k,"DIV",{class:!0});var o=I(n);e=w(o,"DIV",{class:!0});var V=I(e);l=w(V,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),te(l)!=="svelte-106cb2h"&&(l.innerHTML=r),i=O(V),s=w(V,"H2",{class:!0});var le=I(s);d=W(le,c),h=O(le),u=W(le,a[5]),le.forEach(m),P=O(V),j=w(V,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),te(j)!=="svelte-1rojn32"&&(j.innerHTML=H),V.forEach(m),C=O(o),v=w(o,"DIV",{class:!0});var ve=I(v);for(let U=0;U<T.length;U+=1)T[U].l(ve);ve.forEach(m),o.forEach(m),b=O(k),p=w(k,"DIV",{class:!0});var Z=I(p);for(let U=0;U<M.length;U+=1)M[U].l(Z);D=O(Z);for(let U=0;U<N.length;U+=1)N[U].l(Z);Y=O(Z),S&&S.l(Z),Z.forEach(m),k.forEach(m),this.h()},h(){g(l,"aria-label","Previous month"),g(l,"class","svelte-j1ewmh"),g(s,"class","svelte-j1ewmh"),g(j,"aria-label","Next month"),g(j,"class","svelte-j1ewmh"),g(e,"class","calendar__header__date svelte-j1ewmh"),g(v,"class","calendar__header__days svelte-j1ewmh"),g(n,"class","calendar__header svelte-j1ewmh"),g(p,"class","calendar__body svelte-j1ewmh"),$(p,"selected-date",a[6]),$(p,"dark-mode",a[9]==="dark"),$(p,"light-mode",a[9]==="light"),g(t,"class","calendar svelte-j1ewmh")},m(f,k){A(f,t,k),_(t,n),_(n,e),_(e,l),_(e,i),_(e,s),_(s,d),_(s,h),_(s,u),_(e,P),_(e,j),_(n,C),_(n,v);for(let o=0;o<T.length;o+=1)T[o]&&T[o].m(v,null);_(t,b),_(t,p);for(let o=0;o<M.length;o+=1)M[o]&&M[o].m(p,null);_(p,D);for(let o=0;o<N.length;o+=1)N[o]&&N[o].m(p,null);_(p,Y),S&&S.m(p,null),B=!0,E||(J=[ne(l,"click",a[14]),ne(j,"click",a[15])],E=!0)},p(f,k){if((!B||k[0]&4)&&c!==(c=f[11][f[2]]+"")&&G(d,c),(!B||k[0]&32)&&G(u,f[5]),k[0]&4096){z=q(f[12]);let o;for(o=0;o<z.length;o+=1){const V=Te(f,z,o);T[o]?T[o].p(V,k):(T[o]=je(V),T[o].c(),T[o].m(v,null))}for(;o<T.length;o+=1)T[o].d(1);T.length=z.length}if(k[0]&8636){Q=q({length:f[7]});let o;for(o=0;o<Q.length;o+=1){const V=Ie(f,Q,o);M[o]?(M[o].p(V,k),F(M[o],1)):(M[o]=Le(V),M[o].c(),F(M[o],1),M[o].m(p,D))}for(ce(),o=Q.length;o<M.length;o+=1)oe(o);fe()}if(k[0]&54){X=q(f[1]);let o;for(o=0;o<X.length;o+=1){const V=Ce(f,X,o);N[o]?N[o].p(V,k):(N[o]=Ae(V),N[o].c(),N[o].m(p,Y))}for(;o<N.length;o+=1)N[o].d(1);N.length=X.length}f[6]?S?(S.p(f,k),k[0]&64&&F(S,1)):(S=He(f),S.c(),F(S,1),S.m(p,null)):S&&(ce(),K(S,1,1,()=>{S=null}),fe()),(!B||k[0]&64)&&$(p,"selected-date",f[6]),(!B||k[0]&512)&&$(p,"dark-mode",f[9]==="dark"),(!B||k[0]&512)&&$(p,"light-mode",f[9]==="light")},i(f){if(!B){for(let k=0;k<Q.length;k+=1)F(M[k]);F(S),B=!0}},o(f){M=M.filter(Boolean);for(let k=0;k<M.length;k+=1)K(M[k]);K(S),B=!1},d(f){f&&m(t),ee(T,f),ee(M,f),ee(N,f),S&&S.d(),E=!1,Ke(J)}}}const ue=7;function st(a,t){const n=new Map;return a.forEach(e=>{const l=t(e);for(const r of l){const i=n.get(r)||[];i.push(e),n.set(r,i)}}),n}function rt(a){return a%4===0&&a%100!==0&&a%400!==0||a%100===0&&a%400===0}function it(a){return rt(a)?29:28}function ot(a,t,n){let e,l,r,i,s,c,d,h;ge(a,Ge,E=>n(9,d=E)),ge(a,lt,E=>n(10,h=E));let{events:u}=t;const P=1e3*60*60*24;function j(E,J){return(J.getTime()-E.getTime())/P}const H=["January","February","March","April","May","June","July","August","September","October","November","December"],C=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let{date:v=new Date}=t,b=null;const p=E=>()=>n(6,b=E),D=()=>n(0,v=new Date(r,l-1,1)),Y=()=>n(0,v=new Date(r,l+1,1)),B=()=>n(6,b=null);return a.$$set=E=>{"events"in E&&n(1,u=E.events),"date"in E&&n(0,v=E.date)},a.$$.update=()=>{a.$$.dirty[0]&2&&n(8,e=st(u,E=>{const J=Array(j(E.startDate,E.endDate)+1).fill(0),z=E.startDate.getFullYear(),T=E.startDate.getMonth(),Q=E.startDate.getDate();return J.map((M,oe)=>new Date(z,T,Q+oe).toDateString())})),a.$$.dirty[0]&1&&n(2,l=v.getMonth()),a.$$.dirty[0]&1&&n(5,r=v.getFullYear()),a.$$.dirty[0]&32&&n(3,i=[31,it(r),31,30,31,30,31,31,30,31,30,31]),a.$$.dirty[0]&36&&n(4,s=(new Date(r,l,1).getDay()%7+1-1+7)%7),a.$$.dirty[0]&28&&n(7,c=Math.ceil((s+i[l])/7))},[v,u,l,i,s,r,b,c,e,d,h,H,C,p,D,Y,B]}class ct extends re{constructor(t){super(),ie(this,t,ot,at,se,{events:1,date:0},null,[-1,-1])}}function ft(a){let t,n,e,l,r="Events",i,s,c;return s=new ct({props:{events:a[0].events}}),{c(){t=y("meta"),n=L(),e=y("main"),l=y("h1"),l.textContent=r,i=L(),he(s.$$.fragment),this.h()},l(d){const h=We("svelte-1sfebwo",document.head);t=w(h,"META",{name:!0,content:!0}),h.forEach(m),n=O(d),e=w(d,"MAIN",{class:!0});var u=I(e);l=w(u,"H1",{class:!0,"data-svelte-h":!0}),te(l)!=="svelte-xtcg81"&&(l.textContent=r),i=O(u),de(s.$$.fragment,u),u.forEach(m),this.h()},h(){document.title="Events",g(t,"name","description"),g(t,"content","Stay up to date on all school events here!"),g(l,"class","svelte-f6e64m"),g(e,"class","svelte-f6e64m")},m(d,h){_(document.head,t),A(d,n,h),A(d,e,h),_(e,l),_(e,i),_e(s,e,null),c=!0},p(d,[h]){const u={};h&1&&(u.events=d[0].events),s.$set(u)},i(d){c||(F(s.$$.fragment,d),c=!0)},o(d){K(s.$$.fragment,d),c=!1},d(d){d&&(m(n),m(e)),m(t),me(s)}}}function ut(a,t,n){let{data:e}=t;return a.$$set=l=>{"data"in l&&n(0,e=l.data)},[e]}class pt extends re{constructor(t){super(),ie(this,t,ut,ft,se,{data:0})}}export{pt as component};
