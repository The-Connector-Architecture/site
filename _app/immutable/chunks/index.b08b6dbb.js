import{n as f,F as y,G as m,s as q,H as w}from"./index.32e53c61.js";const o=[];function z(e,u){return{subscribe:A(e,u).subscribe}}function A(e,u=f){let r;const t=new Set;function a(n){if(q(e,n)&&(e=n,r)){const i=!o.length;for(const s of t)s[1](),o.push(s,e);if(i){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0}}}function l(n){a(n(e))}function b(n,i=f){const s=[n,i];return t.add(s),t.size===1&&(r=u(a)||f),n(e),()=>{t.delete(s),t.size===0&&r&&(r(),r=null)}}return{set:a,update:l,subscribe:b}}function F(e,u,r){const t=!Array.isArray(e),a=t?[e]:e,l=u.length<2;return z(r,b=>{let n=!1;const i=[];let s=0,d=f;const g=()=>{if(s)return;d();const c=u(t?i[0]:i,b);l?b(c):d=w(c)?c:f},_=a.map((c,p)=>y(c,h=>{i[p]=h,s&=~(1<<p),n&&g()},()=>{s|=1<<p}));return n=!0,g(),function(){m(_),d(),n=!1}})}export{F as d,z as r,A as w};