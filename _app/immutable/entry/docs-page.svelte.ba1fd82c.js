import{S as k,i as y,s as v,k as q,q as B,a as D,e as d,l as S,m as T,r as w,h as f,c as z,b as _,X as A,g as m,f as C,d as h,a2 as E,y as H,z as N,A as P,B as X,v as j}from"../chunks/index.f02f8fef.js";import{T as F}from"../chunks/Toc.16c3121c.js";function g(l,a,i){const e=l.slice();return e[2]=a[i],e}function $(l){let a,i;return a=new F({props:{toc:l[2].toc,counter:l[2].counter,base:"/docs/"+l[2].slug}}),{c(){H(a.$$.fragment)},l(e){N(a.$$.fragment,e)},m(e,r){P(a,e,r),i=!0},p(e,r){const s={};r&1&&(s.toc=e[2].toc),r&1&&(s.counter=e[2].counter),r&1&&(s.base="/docs/"+e[2].slug),a.$set(s)},i(e){i||(m(a.$$.fragment,e),i=!0)},o(e){h(a.$$.fragment,e),i=!1},d(e){X(a,e)}}}function G(l){let a,i,e,r,s,u=l[0],o=[];for(let t=0;t<u.length;t+=1)o[t]=$(g(l,u,t));const b=t=>h(o[t],1,1,()=>{o[t]=null});return{c(){a=q("h1"),i=B("Docs docs docccccsss!!"),e=D();for(let t=0;t<o.length;t+=1)o[t].c();r=d()},l(t){a=S(t,"H1",{});var n=T(a);i=w(n,"Docs docs docccccsss!!"),n.forEach(f),e=z(t);for(let c=0;c<o.length;c+=1)o[c].l(t);r=d()},m(t,n){_(t,a,n),A(a,i),_(t,e,n);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(t,n);_(t,r,n),s=!0},p(t,[n]){if(n&1){u=t[0];let c;for(c=0;c<u.length;c+=1){const p=g(t,u,c);o[c]?(o[c].p(p,n),m(o[c],1)):(o[c]=$(p),o[c].c(),m(o[c],1),o[c].m(r.parentNode,r))}for(j(),c=u.length;c<o.length;c+=1)b(c);C()}},i(t){if(!s){for(let n=0;n<u.length;n+=1)m(o[n]);s=!0}},o(t){o=o.filter(Boolean);for(let n=0;n<o.length;n+=1)h(o[n]);s=!1},d(t){t&&f(a),t&&f(e),E(o,t),t&&f(r)}}}function I(l,a,i){let e,{data:r}=a;return l.$$set=s=>{"data"in s&&i(1,r=s.data)},l.$$.update=()=>{l.$$.dirty&2&&i(0,e=r.posts.filter(s=>!!s.toc&&!!s.toc.map).map((s,u)=>({toc:s.toc.map,slug:s.slug,counter:{root:!0,start:u}})))},[e,r]}class L extends k{constructor(a){super(),y(this,a,I,G,v,{data:1})}}export{L as default};