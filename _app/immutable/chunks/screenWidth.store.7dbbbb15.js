import{o as c}from"./scheduler.4493c153.js";import{r}from"./index.1fcf42e3.js";const a=(n,m)=>r(!1,e=>{const t=`(max-width: ${m}px) and (min-width: ${n}px) `;c(()=>{const o=window.matchMedia(t).matches;e(o);const s=d=>{e(d.matches)},i=window.matchMedia(t);return i.addEventListener("change",s),()=>{i.removeEventListener("change",s)}})}),u=a(0,480),M=a(480,640),g=a(640,768),p=a(0,768),w=a(768,1024),L=a(1024,1152),x=a(1152,1280),f=a(1280,1e14);export{f as a,x as b,L as c,w as d,g as e,M as f,u as g,p as m};
