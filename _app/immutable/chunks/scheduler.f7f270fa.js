function D(){}const tt=t=>t;function q(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function et(){return Object.create(null)}function B(t){t.forEach(P)}function H(t){return typeof t=="function"}function nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function k(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function N(t){return t.split(",").map(e=>e.trim().split(" ").filter(Boolean))}function rt(t,e){const n=N(t.srcset),r=N(e||"");return r.length===n.length&&r.every(([i,l],c)=>l===n[c][1]&&(k(n[c][0],i)||k(i,n[c][0])))}function it(t){return Object.keys(t).length===0}function L(t,...e){if(t==null){for(const r of e)r(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ct(t,e,n){t.$$.on_destroy.push(L(e,n))}function st(t,e,n,r){if(t){const i=j(t,e,n,r);return t[0](i)}}function j(t,e,n,r){return t[1]&&r?q(n.ctx.slice(),t[1](r(e))):n.ctx}function lt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],c=Math.max(e.dirty.length,i.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function ot(t,e,n,r,i,l){if(i){const c=j(e,n,r,l);t.p(c,i)}}function ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function at(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ft(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function _t(t){return t&&H(t.destroy)?t.destroy:D}function dt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let m=!1;function ht(){m=!0}function pt(){m=!1}function M(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(i>0&&e[n[i]].claim_order<=u?i+1:M(1,i,O=>e[n[O]].claim_order,u))-1;r[s]=n[a]+1;const E=a+1;n[E]=s,i=Math.max(E,i)}const l=[],c=[];let o=e.length-1;for(let s=n[i]+1;s!=0;s=r[s-1]){for(l.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[s],a)}}function F(t,e){t.appendChild(e)}function z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=C("style");return e.textContent="/* empty */",W(z(t),e),e.sheet}function W(t,e){return F(t.head||t,e),e.sheet}function G(t,e){if(m){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){m&&!n?G(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bt(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function xt(){return w(" ")}function vt(){return w("")}function wt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function I(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const J=["width","height"];function Et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&J.indexOf(r)===-1?t[r]=e[r]:I(t,r,e[r])}function kt(t){return t.dataset.svelteH}function Nt(t){return Array.from(t.childNodes)}function K(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,r,i=!1){K(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,i||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,i?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Q(t,e,n,r){return S(t,i=>i.nodeName===e,i=>{const l=[];for(let c=0;c<i.attributes.length;c++){const o=i.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>i.removeAttribute(c))},()=>r(e))}function At(t,e,n){return Q(t,e,n,C)}function U(t,e){return S(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>w(e),!0)}function Dt(t){return U(t," ")}function jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ct(t,e){t.value=e??""}function St(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Tt(t,e,n){t.classList.toggle(e,!!n)}function V(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Ot(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const l=i.textContent.trim();l===`HEAD_${t}_END`?(r-=1,n.push(i)):l===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function qt(t,e){return new t(e)}let p;function b(t){p=t}function y(){if(!p)throw new Error("Function called outside component initialization");return p}function Pt(t){y().$$.on_mount.push(t)}function Bt(t){y().$$.after_update.push(t)}function Ht(t){y().$$.on_destroy.push(t)}function Lt(){const t=y();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=V(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function Mt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const d=[],A=[];let _=[];const x=[],T=Promise.resolve();let v=!1;function X(){v||(v=!0,T.then(Z))}function Rt(){return X(),T}function Y(t){_.push(t)}function Ft(t){x.push(t)}const g=new Set;let f=0;function Z(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),$(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;A.length;)A.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;x.length;)x.pop()();v=!1,g.clear(),b(t)}function $(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}function zt(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}export{it as $,ct as A,Tt as B,wt as C,B as D,Ot as E,k as F,gt as G,Ht as H,Y as I,Lt as J,Ft as K,Ct as L,Mt as M,H as N,dt as O,_t as P,q as Q,rt as R,Et as S,ft as T,at as U,z as V,mt as W,V as X,tt as Y,et as Z,Z as _,xt as a,zt as a0,p as a1,b as a2,P as a3,d as a4,X as a5,ht as a6,pt as a7,Bt as b,Dt as c,bt as d,vt as e,C as f,At as g,Nt as h,yt as i,I as j,St as k,w as l,U as m,jt as n,Pt as o,A as p,qt as q,kt as r,nt as s,Rt as t,D as u,st as v,ot as w,ut as x,lt as y,G as z};