import{S,i as $,s as z,e as d,b as g,g as a,v as O,f as U,d as u,a2 as j,h as _,y as k,z as p,A as w,B as C,k as E,l as L,m as q,n as y,q as D,r as F,u as G,U as A}from"./index.f02f8fef.js";import{b as B}from"./paths.8896b776.js";function I(s,t,n){const r=s.slice();return r[2]=t[n],r}function N(s){let t,n;return t=new X({props:{toc:s[2],base:s[0],counter:s[1]}}),{c(){k(t.$$.fragment)},l(r){p(t.$$.fragment,r)},m(r,e){w(t,r,e),n=!0},p(r,e){const l={};e&8&&(l.toc=r[2]),e&1&&(l.base=r[0]),e&2&&(l.counter=r[1]),t.$set(l)},i(r){n||(a(t.$$.fragment,r),n=!0)},o(r){u(t.$$.fragment,r),n=!1},d(r){C(t,r)}}}function H(s){let t,n,r=s[3],e=[];for(let o=0;o<r.length;o+=1)e[o]=N(I(s,r,o));const l=o=>u(e[o],1,1,()=>{e[o]=null});return{c(){for(let o=0;o<e.length;o+=1)e[o].c();t=d()},l(o){for(let f=0;f<e.length;f+=1)e[f].l(o);t=d()},m(o,f){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,f);g(o,t,f),n=!0},p(o,[f]){if(f&11){r=o[3];let c;for(c=0;c<r.length;c+=1){const i=I(o,r,c);e[c]?(e[c].p(i,f),a(e[c],1)):(e[c]=N(i),e[c].c(),a(e[c],1),e[c].m(t.parentNode,t))}for(O(),c=r.length;c<e.length;c+=1)l(c);U()}},i(o){if(!n){for(let f=0;f<r.length;f+=1)a(e[f]);n=!0}},o(o){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)u(e[f]);n=!1},d(o){j(e,o),o&&_(t)}}}function J(s,t,n){let r,{toc:e}=t,{base:l}=t,{newCounter:o}=t;return s.$$set=f=>{"toc"in f&&n(2,e=f.toc),"base"in f&&n(0,l=f.base),"newCounter"in f&&n(1,o=f.newCounter)},s.$$.update=()=>{s.$$.dirty&4&&n(3,r=e.children)},[l,o,e,r]}class T extends S{constructor(t){super(),$(this,t,J,H,z,{toc:2,base:0,newCounter:1})}}function K(s){let t,n;return t=new T({props:{toc:s[1],base:s[0],newCounter:s[6]}}),{c(){k(t.$$.fragment)},l(r){p(t.$$.fragment,r)},m(r,e){w(t,r,e),n=!0},p(r,e){const l={};e&2&&(l.toc=r[1]),e&1&&(l.base=r[0]),e&64&&(l.newCounter=r[6]),t.$set(l)},i(r){n||(a(t.$$.fragment,r),n=!0)},o(r){u(t.$$.fragment,r),n=!1},d(r){C(t,r)}}}function M(s){let t,n,r;return n=new T({props:{toc:s[1],base:s[0],newCounter:s[6]}}),{c(){t=E("ol"),k(n.$$.fragment),this.h()},l(e){t=L(e,"OL",{style:!0});var l=q(t);p(n.$$.fragment,l),l.forEach(_),this.h()},h(){y(t,"style",s[4])},m(e,l){g(e,t,l),w(n,t,null),r=!0},p(e,l){const o={};l&2&&(o.toc=e[1]),l&1&&(o.base=e[0]),l&64&&(o.newCounter=e[6]),n.$set(o),(!r||l&16)&&y(t,"style",e[4])},i(e){r||(a(n.$$.fragment,e),r=!0)},o(e){u(n.$$.fragment,e),r=!1},d(e){e&&_(t),C(n)}}}function P(s){let t,n,r;return n=new T({props:{toc:s[1],base:s[0],newCounter:s[6]}}),{c(){t=E("li"),k(n.$$.fragment)},l(e){t=L(e,"LI",{});var l=q(t);p(n.$$.fragment,l),l.forEach(_)},m(e,l){g(e,t,l),w(n,t,null),r=!0},p(e,l){const o={};l&2&&(o.toc=e[1]),l&1&&(o.base=e[0]),l&64&&(o.newCounter=e[6]),n.$set(o)},i(e){r||(a(n.$$.fragment,e),r=!0)},o(e){u(n.$$.fragment,e),r=!1},d(e){e&&_(t),C(n)}}}function Q(s){let t,n,r,e;return n=new T({props:{toc:s[1],base:s[0],newCounter:s[6]}}),{c(){t=E("a"),k(n.$$.fragment),this.h()},l(l){t=L(l,"A",{href:!0});var o=q(t);p(n.$$.fragment,o),o.forEach(_),this.h()},h(){y(t,"href",r=""+(B+(s[0]+s[2])))},m(l,o){g(l,t,o),w(n,t,null),e=!0},p(l,o){const f={};o&2&&(f.toc=l[1]),o&1&&(f.base=l[0]),o&64&&(f.newCounter=l[6]),n.$set(f),(!e||o&5&&r!==(r=""+(B+(l[0]+l[2]))))&&y(t,"href",r)},i(l){e||(a(n.$$.fragment,l),e=!0)},o(l){u(n.$$.fragment,l),e=!1},d(l){l&&_(t),C(n)}}}function R(s){let t;return{c(){t=D(s[3])},l(n){t=F(n,s[3])},m(n,r){g(n,t,r)},p(n,r){r&8&&G(t,n[3])},i:A,o:A,d(n){n&&_(t)}}}function V(s){let t,n,r,e;const l=[R,Q,P,M,K],o=[];function f(c,i){return c[5]==="text"?0:c[5]==="link"?1:c[5]==="listItem"?2:c[5]==="list"?3:4}return t=f(s),n=o[t]=l[t](s),{c(){n.c(),r=d()},l(c){n.l(c),r=d()},m(c,i){o[t].m(c,i),g(c,r,i),e=!0},p(c,[i]){let m=t;t=f(c),t===m?o[t].p(c,i):(O(),u(o[m],1,1,()=>{o[m]=null}),U(),n=o[t],n?n.p(c,i):(n=o[t]=l[t](c),n.c()),a(n,1),n.m(r.parentNode,r))},i(c){e||(a(n),e=!0)},o(c){u(n),e=!1},d(c){o[t].d(c),c&&_(r)}}}function W(s,t,n){let r,e,l,o,f,c,{toc:i}=t,{base:m}=t,{counter:h}=t;return s.$$set=b=>{"toc"in b&&n(7,i=b.toc),"base"in b&&n(0,m=b.base),"counter"in b&&n(8,h=b.counter)},s.$$.update=()=>{s.$$.dirty&384&&n(6,r={start:h.start,root:i.type==="list"?!1:h.root}),s.$$.dirty&128&&n(5,e=i?i.type:""),s.$$.dirty&256&&n(4,l=h.root?`counter-reset: item ${h.start} ;`:""),s.$$.dirty&128&&n(3,o=i.type==="text"?i.value:""),s.$$.dirty&128&&n(2,f=i.type==="link"?i.url:""),s.$$.dirty&128&&n(1,c=i)},[m,c,f,o,l,e,r,i,h]}class X extends S{constructor(t){super(),$(this,t,W,V,z,{toc:7,base:0,counter:8})}}export{X as T};