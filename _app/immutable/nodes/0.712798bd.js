import{s as _,f as v,g,r as w,j as $,i as p,u as c,d as f,v as S,a as y,c as b,w as H,x as M,y as T,o as C}from"../chunks/scheduler.06d40262.js";import{S as d,i as h,b as O,d as k,m as F,a as r,t as m,e as L}from"../chunks/index.8e79e426.js";import{h as R}from"../chunks/singletons.d44d25ff.js";import{t as u}from"../chunks/theme.store.667e6622.js";const j=!0,U=Object.freeze(Object.defineProperty({__proto__:null,prerender:j},Symbol.toStringTag,{value:"Module"}));const I=R("on_navigate");function q(l){let s,a='<section class="footer__content svelte-1uc2p5m"><div class="footer__content__info svelte-1uc2p5m"><h2 class="svelte-1uc2p5m">School Info</h2> <ul class="svelte-1uc2p5m"><li class="svelte-1uc2p5m">Richmond Hill - Ontario - Canada</li> <li class="svelte-1uc2p5m">201 Yorkland Street - L4S 1A2</li> <li class="svelte-1uc2p5m">(905) 884-2131</li></ul></div> <div class="footer__content__links svelte-1uc2p5m"><h2 class="svelte-1uc2p5m">Follow Us</h2> <ul class="svelte-1uc2p5m"><li class="svelte-1uc2p5m"><a href="https://www.instagram.com/rhhs_stuco/" class="svelte-1uc2p5m"><i class="ri-instagram-line svelte-1uc2p5m"></i> — rhhs_stuco</a></li> <li class="svelte-1uc2p5m"><a href="https://twitter.com/RHHS_StuCo/" class="svelte-1uc2p5m"><i class="ri-twitter-line svelte-1uc2p5m"></i> — RHHS_StuCo</a></li></ul></div></section>';return{c(){s=v("footer"),s.innerHTML=a,this.h()},l(o){s=g(o,"FOOTER",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-4wreuq"&&(s.innerHTML=a),this.h()},h(){$(s,"class","footer svelte-1uc2p5m")},m(o,n){p(o,s,n)},p:c,i:c,o:c,d(o){o&&f(s)}}}class A extends d{constructor(s){super(),h(this,s,null,q,_,{})}}function E(l){let s,a,o;const n=l[1].default,t=S(n,l,l[0],null);return a=new A({}),{c(){t&&t.c(),s=y(),O(a.$$.fragment)},l(e){t&&t.l(e),s=b(e),k(a.$$.fragment,e)},m(e,i){t&&t.m(e,i),p(e,s,i),F(a,e,i),o=!0},p(e,[i]){t&&t.p&&(!o||i&1)&&H(t,n,e,e[0],o?T(n,e[0],i,null):M(e[0]),null)},i(e){o||(r(t,e),r(a.$$.fragment,e),o=!0)},o(e){m(t,e),m(a.$$.fragment,e),o=!1},d(e){e&&f(s),t&&t.d(e),L(a,e)}}}function P(l,s,a){let{$$slots:o={},$$scope:n}=s;return C(()=>{let t=localStorage.getItem("theme")??"light";"matchMedia"in window&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(t="dark"),u.set(t),u.subscribe(e=>{localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e)})}),I(t=>{if(document.startViewTransition)return new Promise(e=>{document.startViewTransition(async()=>{e(),await t.complete})})}),l.$$set=t=>{"$$scope"in t&&a(0,n=t.$$scope)},[n,o]}class Y extends d{constructor(s){super(),h(this,s,P,E,_,{})}}export{Y as component,U as universal};
