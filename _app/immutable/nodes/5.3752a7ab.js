import{s as ie,v as Ue,f as b,a as O,g as k,h as T,c as H,d as m,j as g,i as Y,z as h,C as le,w as Pe,x as qe,y as ze,l as W,m as j,n as G,N as Je,r as x,u as re,G as ne,J as Qe,o as Re,B as pe,D as We,A as je,e as ee,I as Ge,O as Ke,E as $e}from"../chunks/scheduler.3f1532c0.js";import{S as oe,i as ce,a as U,t as Q,g as ue,c as fe,b as _e,d as he,m as me,f as De,e as ve}from"../chunks/index.bb2186ed.js";import{e as J}from"../chunks/each.33c78c84.js";import{q as be,f as ke}from"../chunks/index.07969f4a.js";import{r as Xe}from"../chunks/index.b159e192.js";function ye(a){let t,n=a[0].length+"",e;return{c(){t=b("div"),e=W(n),this.h()},l(l){t=k(l,"DIV",{class:!0});var r=T(t);e=j(r,n),r.forEach(m),this.h()},h(){g(t,"class","calendar-day__event-count svelte-rfm32a")},m(l,r){Y(l,t,r),h(t,e)},p(l,r){r&1&&n!==(n=l[0].length+"")&&G(e,n)},d(l){l&&m(t)}}}function Ze(a){let t,n,e,l,r,i,s=a[0]&&a[1]&&ye(a);const c=a[3].default,_=Ue(c,a,a[2],null);return{c(){t=b("button"),s&&s.c(),n=O(),_&&_.c(),this.h()},l(u){t=k(u,"BUTTON",{class:!0});var d=T(t);s&&s.l(d),n=H(d),_&&_.l(d),d.forEach(m),this.h()},h(){g(t,"class","calendar-day svelte-rfm32a"),t.disabled=e=!a[1]},m(u,d){Y(u,t,d),s&&s.m(t,null),h(t,n),_&&_.m(t,null),l=!0,r||(i=le(t,"click",a[4]),r=!0)},p(u,[d]){u[0]&&u[1]?s?s.p(u,d):(s=ye(u),s.c(),s.m(t,n)):s&&(s.d(1),s=null),_&&_.p&&(!l||d&4)&&Pe(_,c,u,u[2],l?ze(c,u[2],d,null):qe(u[2]),null),(!l||d&2&&e!==(e=!u[1]))&&(t.disabled=e)},i(u){l||(U(_,u),l=!0)},o(u){Q(_,u),l=!1},d(u){u&&m(t),s&&s.d(),_&&_.d(u),r=!1,i()}}}function xe(a,t,n){let{$$slots:e={},$$scope:l}=t,{events:r}=t,{clickable:i=!1}=t;function s(c){Je.call(this,a,c)}return a.$$set=c=>{"events"in c&&n(0,r=c.events),"clickable"in c&&n(1,i=c.clickable),"$$scope"in c&&n(2,l=c.$$scope)},[r,i,l,e,s]}class et extends oe{constructor(t){super(),ce(this,t,xe,Ze,ie,{events:0,clickable:1})}}function Ee(a,t,n){const e=a.slice();return e[4]=t[n],e}function Me(a){let t,n=`No events on this day.\r
				`;return{c(){t=b("div"),t.textContent=n,this.h()},l(e){t=k(e,"DIV",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-1blygwu"&&(t.textContent=n),this.h()},h(){g(t,"class","calendar-detail__no-events svelte-1udmu1t")},m(e,l){Y(e,t,l)},p:re,d(e){e&&m(t)}}}function we(a){let t,n,e=a[4].name+"",l,r,i,s=a[4].description+"",c,_;return{c(){t=b("div"),n=b("h4"),l=W(e),r=O(),i=b("p"),c=W(s),_=O(),this.h()},l(u){t=k(u,"DIV",{class:!0});var d=T(t);n=k(d,"H4",{class:!0});var B=T(n);l=j(B,e),B.forEach(m),r=H(d),i=k(d,"P",{class:!0});var q=T(i);c=j(q,s),q.forEach(m),_=H(d),d.forEach(m),this.h()},h(){g(n,"class","svelte-1udmu1t"),g(i,"class","svelte-1udmu1t"),g(t,"class","calendar-detail__content__events__event svelte-1udmu1t")},m(u,d){Y(u,t,d),h(t,n),h(n,l),h(t,r),h(t,i),h(i,c),h(t,_)},p(u,d){d&2&&e!==(e=u[4].name+"")&&G(l,e),d&2&&s!==(s=u[4].description+"")&&G(c,s)},d(u){u&&m(t)}}}function tt(a){let t,n,e,l,r="×",i,s,c=a[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"",_,u,d,B,q,L=J(a[1]),D=[];for(let E=0;E<L.length;E+=1)D[E]=we(Ee(a,L,E));let p=null;return L.length||(p=Me()),{c(){t=b("div"),n=b("div"),e=b("div"),l=b("button"),l.textContent=r,i=O(),s=b("h3"),_=W(c),u=O(),d=b("div");for(let E=0;E<D.length;E+=1)D[E].c();p&&p.c(),this.h()},l(E){t=k(E,"DIV",{class:!0});var A=T(t);n=k(A,"DIV",{class:!0});var v=T(n);e=k(v,"DIV",{class:!0});var F=T(e);l=k(F,"BUTTON",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-1p9hkmf"&&(l.textContent=r),i=H(F),s=k(F,"H3",{class:!0});var C=T(s);_=j(C,c),C.forEach(m),F.forEach(m),u=H(v),d=k(v,"DIV",{class:!0});var M=T(d);for(let P=0;P<D.length;P+=1)D[P].l(M);p&&p.l(M),M.forEach(m),v.forEach(m),A.forEach(m),this.h()},h(){g(l,"class","svelte-1udmu1t"),g(s,"class","svelte-1udmu1t"),g(e,"class","calendar-detail__content__heading svelte-1udmu1t"),g(d,"class","calendar-detail__content__events svelte-1udmu1t"),g(n,"class","calendar-detail__content svelte-1udmu1t"),g(t,"class","calendar-detail svelte-1udmu1t")},m(E,A){Y(E,t,A),h(t,n),h(n,e),h(e,l),h(e,i),h(e,s),h(s,_),h(n,u),h(n,d);for(let v=0;v<D.length;v+=1)D[v]&&D[v].m(d,null);p&&p.m(d,null),B||(q=le(l,"click",a[2]),B=!0)},p(E,[A]){if(A&1&&c!==(c=E[0].toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})+"")&&G(_,c),A&2){L=J(E[1]);let v;for(v=0;v<L.length;v+=1){const F=Ee(E,L,v);D[v]?D[v].p(F,A):(D[v]=we(F),D[v].c(),D[v].m(d,null))}for(;v<D.length;v+=1)D[v].d(1);D.length=L.length,!L.length&&p?p.p(E,A):L.length?p&&(p.d(1),p=null):(p=Me(),p.c(),p.m(d,null))}},i:re,o:re,d(E){E&&m(t),ne(D,E),p&&p.d(),B=!1,q()}}}function lt(a,t,n){let{date:e}=t,{events:l}=t;const r=Qe();function i(){r("close")}return a.$$set=s=>{"date"in s&&n(0,e=s.date),"events"in s&&n(1,l=s.events)},[e,l,i]}class nt extends oe{constructor(t){super(),ce(this,t,lt,tt,ie,{date:0,events:1})}}const Te="(prefers-reduced-motion: reduce)";let at=Xe(!1,a=>{Re(()=>{const t=window.matchMedia(Te).matches;a(t);const n=l=>{a(l.matches)},e=window.matchMedia(Te);return e.addEventListener("change",n),()=>{e.removeEventListener("change",n)}})});function Ce(a,t,n){const e=a.slice();return e[20]=t[n],e}function Ie(a,t,n){const e=a.slice();return e[23]=t[n],e[25]=n,e}function Se(a,t,n){const e=a.slice();e[23]=t[n],e[30]=n;const l=e[25]*de+e[30]-e[4]+1;e[26]=l;const r=new Date(e[5],e[2],e[26]);e[27]=r;const i=e[26]>0&&e[26]<=e[3][e[2]];return e[28]=i,e}function Ne(a,t,n){const e=a.slice();return e[31]=t[n],e}function Ve(a){let t,n=a[31]+"",e;return{c(){t=b("div"),e=W(n),this.h()},l(l){t=k(l,"DIV",{class:!0});var r=T(t);e=j(r,n),r.forEach(m),this.h()},h(){g(t,"class","svelte-1mllr3p")},m(l,r){Y(l,t,r),h(t,e)},p:re,d(l){l&&m(t)}}}function Le(a){let t,n=a[26]+"",e;return{c(){t=b("span"),e=W(n),this.h()},l(l){t=k(l,"SPAN",{class:!0});var r=T(t);e=j(r,n),r.forEach(m),this.h()},h(){g(t,"class","calendar__body__day svelte-1mllr3p")},m(l,r){Y(l,t,r),h(t,e)},p(l,r){r[0]&16&&n!==(n=l[26]+"")&&G(e,n)},d(l){l&&m(t)}}}function st(a){let t,n=a[28]&&Le(a);return{c(){n&&n.c(),t=ee()},l(e){n&&n.l(e),t=ee()},m(e,l){n&&n.m(e,l),Y(e,t,l)},p(e,l){e[28]?n?n.p(e,l):(n=Le(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){e&&m(t),n&&n.d(e)}}}function Oe(a){let t,n;return t=new et({props:{events:a[8].get(a[27].toDateString()),clickable:a[28],$$slots:{default:[st]},$$scope:{ctx:a}}}),t.$on("click",function(){Ke(a[12](a[27]))&&a[12](a[27]).apply(this,arguments)}),{c(){_e(t.$$.fragment)},l(e){he(t.$$.fragment,e)},m(e,l){me(t,e,l),n=!0},p(e,l){a=e;const r={};l[0]&308&&(r.events=a[8].get(a[27].toDateString())),l[0]&28&&(r.clickable=a[28]),l[0]&28|l[1]&8&&(r.$$scope={dirty:l,ctx:a}),t.$set(r)},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){Q(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function He(a){let t,n,e=J({length:de}),l=[];for(let i=0;i<e.length;i+=1)l[i]=Oe(Se(a,e,i));const r=i=>Q(l[i],1,1,()=>{l[i]=null});return{c(){for(let i=0;i<l.length;i+=1)l[i].c();t=ee()},l(i){for(let s=0;s<l.length;s+=1)l[s].l(i);t=ee()},m(i,s){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(i,s);Y(i,t,s),n=!0},p(i,s){if(s[0]&4412){e=J({length:de});let c;for(c=0;c<e.length;c+=1){const _=Se(i,e,c);l[c]?(l[c].p(_,s),U(l[c],1)):(l[c]=Oe(_),l[c].c(),U(l[c],1),l[c].m(t.parentNode,t))}for(ue(),c=e.length;c<l.length;c+=1)r(c);fe()}},i(i){if(!n){for(let s=0;s<e.length;s+=1)U(l[s]);n=!0}},o(i){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)Q(l[s]);n=!1},d(i){i&&m(t),ne(l,i)}}}function Ae(a){let t,n=a[20].name+"",e,l,r;return{c(){t=b("div"),e=W(n),l=O(),this.h()},l(i){t=k(i,"DIV",{class:!0,style:!0});var s=T(t);e=j(s,n),l=H(s),s.forEach(m),this.h()},h(){g(t,"class","calendar__body__event svelte-1mllr3p"),g(t,"style",r=`
						grid-row: ${Math.ceil((a[20].startDate.getDate()+a[4])/7)} / ${Math.ceil((a[20].endDate.getDate()+a[4])/7)};
						grid-column: ${a[20].startDate.getDay()+1} / ${a[20].endDate.getDay()+2};
					`)},m(i,s){Y(i,t,s),h(t,e),h(t,l)},p(i,s){s[0]&2&&n!==(n=i[20].name+"")&&G(e,n),s[0]&18&&r!==(r=`
						grid-row: ${Math.ceil((i[20].startDate.getDate()+i[4])/7)} / ${Math.ceil((i[20].endDate.getDate()+i[4])/7)};
						grid-column: ${i[20].startDate.getDay()+1} / ${i[20].endDate.getDay()+2};
					`)&&g(t,"style",r)},d(i){i&&m(t)}}}function Ye(a){let t=a[20].startDate.getMonth()===a[2]&&a[20].startDate.getFullYear()===a[5],n,e=t&&Ae(a);return{c(){e&&e.c(),n=ee()},l(l){e&&e.l(l),n=ee()},m(l,r){e&&e.m(l,r),Y(l,n,r)},p(l,r){r[0]&38&&(t=l[20].startDate.getMonth()===l[2]&&l[20].startDate.getFullYear()===l[5]),t?e?e.p(l,r):(e=Ae(l),e.c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d(l){l&&m(n),e&&e.d(l)}}}function Be(a){let t,n,e,l;return n=new nt({props:{date:a[6],events:a[8].get(a[6].toDateString())||[]}}),n.$on("close",a[16]),{c(){t=b("div"),_e(n.$$.fragment),this.h()},l(r){t=k(r,"DIV",{class:!0});var i=T(t);he(n.$$.fragment,i),i.forEach(m),this.h()},h(){g(t,"class","calendar-detail svelte-1mllr3p")},m(r,i){Y(r,t,i),me(n,t,null),l=!0},p(r,i){a=r;const s={};i[0]&64&&(s.date=a[6]),i[0]&320&&(s.events=a[8].get(a[6].toDateString())||[]),n.$set(s)},i(r){l||(U(n.$$.fragment,r),r&&Ge(()=>{l&&(e||(e=De(t,ke,{x:250,opacity:1,duration:a[9]?0:250,easing:be},!0)),e.run(1))}),l=!0)},o(r){Q(n.$$.fragment,r),r&&(e||(e=De(t,ke,{x:250,opacity:1,duration:a[9]?0:250,easing:be},!1)),e.run(0)),l=!1},d(r){r&&m(t),ve(n),r&&e&&e.end()}}}function rt(a){let t,n,e,l,r='<i class="ri-arrow-left-double-line svelte-1mllr3p"></i>',i,s,c='<i class="ri-arrow-left-s-line svelte-1mllr3p"></i>',_,u,d=a[10][a[2]]+"",B,q,L,D,p,E='<i class="ri-arrow-right-s-line svelte-1mllr3p"></i>',A,v,F,C,M,P,R,te,ae,K=J(a[11]),S=[];for(let f=0;f<K.length;f+=1)S[f]=Ve(Ne(a,K,f));let $=J({length:a[7]}),w=[];for(let f=0;f<$.length;f+=1)w[f]=He(Ie(a,$,f));const Fe=f=>Q(w[f],1,1,()=>{w[f]=null});let X=J(a[1]),N=[];for(let f=0;f<X.length;f+=1)N[f]=Ye(Ce(a,X,f));let I=a[6]&&Be(a);return{c(){t=b("div"),n=b("div"),e=b("div"),l=b("button"),l.innerHTML=r,i=O(),s=b("button"),s.innerHTML=c,_=O(),u=b("h2"),B=W(d),q=O(),L=W(a[5]),D=O(),p=b("button"),p.innerHTML=E,A=O(),v=b("div");for(let f=0;f<S.length;f+=1)S[f].c();F=O(),C=b("div");for(let f=0;f<w.length;f+=1)w[f].c();M=O();for(let f=0;f<N.length;f+=1)N[f].c();P=O(),I&&I.c(),this.h()},l(f){t=k(f,"DIV",{class:!0});var y=T(t);n=k(y,"DIV",{class:!0});var o=T(n);e=k(o,"DIV",{class:!0});var V=T(e);l=k(V,"BUTTON",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-1l8a0dv"&&(l.innerHTML=r),i=H(V),s=k(V,"BUTTON",{class:!0,"data-svelte-h":!0}),x(s)!=="svelte-1qk3zwx"&&(s.innerHTML=c),_=H(V),u=k(V,"H2",{class:!0});var se=T(u);B=j(se,d),q=H(se),L=j(se,a[5]),se.forEach(m),D=H(V),p=k(V,"BUTTON",{class:!0,"data-svelte-h":!0}),x(p)!=="svelte-r3u6hy"&&(p.innerHTML=E),V.forEach(m),A=H(o),v=k(o,"DIV",{class:!0});var ge=T(v);for(let z=0;z<S.length;z+=1)S[z].l(ge);ge.forEach(m),o.forEach(m),F=H(y),C=k(y,"DIV",{class:!0});var Z=T(C);for(let z=0;z<w.length;z+=1)w[z].l(Z);M=H(Z);for(let z=0;z<N.length;z+=1)N[z].l(Z);P=H(Z),I&&I.l(Z),Z.forEach(m),y.forEach(m),this.h()},h(){g(l,"class","svelte-1mllr3p"),g(s,"class","svelte-1mllr3p"),g(u,"class","svelte-1mllr3p"),g(p,"class","svelte-1mllr3p"),g(e,"class","calendar__header__date svelte-1mllr3p"),g(v,"class","calendar__header__days svelte-1mllr3p"),g(n,"class","calendar__header svelte-1mllr3p"),g(C,"class","calendar__body svelte-1mllr3p"),pe(C,"selected-date",a[6]),g(t,"class","calendar svelte-1mllr3p")},m(f,y){Y(f,t,y),h(t,n),h(n,e),h(e,l),h(e,i),h(e,s),h(e,_),h(e,u),h(u,B),h(u,q),h(u,L),h(e,D),h(e,p),h(n,A),h(n,v);for(let o=0;o<S.length;o+=1)S[o]&&S[o].m(v,null);h(t,F),h(t,C);for(let o=0;o<w.length;o+=1)w[o]&&w[o].m(C,null);h(C,M);for(let o=0;o<N.length;o+=1)N[o]&&N[o].m(C,null);h(C,P),I&&I.m(C,null),R=!0,te||(ae=[le(l,"click",a[13]),le(s,"click",a[14]),le(p,"click",a[15])],te=!0)},p(f,y){if((!R||y[0]&4)&&d!==(d=f[10][f[2]]+"")&&G(B,d),(!R||y[0]&32)&&G(L,f[5]),y[0]&2048){K=J(f[11]);let o;for(o=0;o<K.length;o+=1){const V=Ne(f,K,o);S[o]?S[o].p(V,y):(S[o]=Ve(V),S[o].c(),S[o].m(v,null))}for(;o<S.length;o+=1)S[o].d(1);S.length=K.length}if(y[0]&4540){$=J({length:f[7]});let o;for(o=0;o<$.length;o+=1){const V=Ie(f,$,o);w[o]?(w[o].p(V,y),U(w[o],1)):(w[o]=He(V),w[o].c(),U(w[o],1),w[o].m(C,M))}for(ue(),o=$.length;o<w.length;o+=1)Fe(o);fe()}if(y[0]&54){X=J(f[1]);let o;for(o=0;o<X.length;o+=1){const V=Ce(f,X,o);N[o]?N[o].p(V,y):(N[o]=Ye(V),N[o].c(),N[o].m(C,P))}for(;o<N.length;o+=1)N[o].d(1);N.length=X.length}f[6]?I?(I.p(f,y),y[0]&64&&U(I,1)):(I=Be(f),I.c(),U(I,1),I.m(C,null)):I&&(ue(),Q(I,1,1,()=>{I=null}),fe()),(!R||y[0]&64)&&pe(C,"selected-date",f[6])},i(f){if(!R){for(let y=0;y<$.length;y+=1)U(w[y]);U(I),R=!0}},o(f){w=w.filter(Boolean);for(let y=0;y<w.length;y+=1)Q(w[y]);Q(I),R=!1},d(f){f&&m(t),ne(S,f),ne(w,f),ne(N,f),I&&I.d(),te=!1,We(ae)}}}const de=7;function it(a,t){const n=new Map;return a.forEach(e=>{const l=t(e);for(const r of l){const i=n.get(r)||[];i.push(e),n.set(r,i)}}),n}function ot(a){return a%4===0&&a%100!==0&&a%400!==0||a%100===0&&a%400===0}function ct(a){return ot(a)?29:28}function ut(a,t,n){let e,l,r,i,s,c,_;je(a,at,M=>n(9,_=M));let{events:u}=t;const d=1e3*60*60*24;function B(M,P){return(P.getTime()-M.getTime())/d}const q=["January","February","March","April","May","June","July","August","September","October","November","December"],L=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];let{date:D=new Date}=t,p=null;const E=M=>()=>n(6,p=M),A=()=>n(0,D=new Date(r-1,l,1)),v=()=>n(0,D=new Date(r,l-1,1)),F=()=>n(0,D=new Date(r,l+1,1)),C=()=>n(6,p=null);return a.$$set=M=>{"events"in M&&n(1,u=M.events),"date"in M&&n(0,D=M.date)},a.$$.update=()=>{a.$$.dirty[0]&2&&n(8,e=it(u,M=>{const P=Array(B(M.startDate,M.endDate)+1).fill(0),R=M.startDate.getFullYear(),te=M.startDate.getMonth(),ae=M.startDate.getDate();return P.map((K,S)=>new Date(R,te,ae+S).toDateString())})),a.$$.dirty[0]&1&&n(2,l=D.getMonth()),a.$$.dirty[0]&1&&n(5,r=D.getFullYear()),a.$$.dirty[0]&32&&n(3,i=[31,ct(r),31,30,31,30,31,31,30,31,30,31]),a.$$.dirty[0]&36&&n(4,s=(new Date(r,l,1).getDay()%7+1-1+7)%7),a.$$.dirty[0]&28&&n(7,c=Math.ceil((s+i[l])/7))},[D,u,l,i,s,r,p,c,e,_,q,L,E,A,v,F,C]}class ft extends oe{constructor(t){super(),ce(this,t,ut,rt,ie,{events:1,date:0},null,[-1,-1])}}function dt(a){let t,n,e,l,r="Events",i,s,c;return s=new ft({props:{events:a[0].events}}),{c(){t=b("meta"),n=O(),e=b("main"),l=b("h1"),l.textContent=r,i=O(),_e(s.$$.fragment),this.h()},l(_){const u=$e("svelte-1sfebwo",document.head);t=k(u,"META",{name:!0,content:!0}),u.forEach(m),n=H(_),e=k(_,"MAIN",{class:!0});var d=T(e);l=k(d,"H1",{class:!0,"data-svelte-h":!0}),x(l)!=="svelte-xtcg81"&&(l.textContent=r),i=H(d),he(s.$$.fragment,d),d.forEach(m),this.h()},h(){document.title="Events",g(t,"name","description"),g(t,"content","Stay up to date on all school events here!"),g(l,"class","svelte-zd9xm"),g(e,"class","svelte-zd9xm")},m(_,u){h(document.head,t),Y(_,n,u),Y(_,e,u),h(e,l),h(e,i),me(s,e,null),c=!0},p(_,[u]){const d={};u&1&&(d.events=_[0].events),s.$set(d)},i(_){c||(U(s.$$.fragment,_),c=!0)},o(_){Q(s.$$.fragment,_),c=!1},d(_){_&&(m(n),m(e)),m(t),ve(s)}}}function _t(a,t,n){let{data:e}=t;return a.$$set=l=>{"data"in l&&n(0,e=l.data)},[e]}class Dt extends oe{constructor(t){super(),ce(this,t,_t,dt,ie,{data:0})}}export{Dt as component};
