function g(){}function K(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function O(){return Object.create(null)}function x(t){t.forEach(z)}function S(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Q(t){return Object.keys(t).length===0}function L(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t){let e;return L(t,n=>e=n)(),e}function gt(t,e,n){t.$$.on_destroy.push(L(e,n))}function bt(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?K(n.ctx.slice(),t[1](i(e))):n.ctx}function xt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)c[u]=e.dirty[u]|r[u];return c}return e.dirty|r}return e.dirty}function $t(t,e,n,i,r,c){if(r){const s=W(e,n,i,c);t.p(s,r)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function vt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Et(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function kt(t){return t??""}function At(t){return t&&S(t.destroy)?t.destroy:g}let E=!1;function U(){E=!0}function V(){E=!1}function X(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=a?r+1:X(1,r,$=>e[n[$]].claim_order,a))-1;i[o]=n[f]+1;const l=f+1;n[l]=o,r=Math.max(l,r)}const c=[],s=[];let u=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);u>=o;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);c.reverse(),s.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<s.length;o++){for(;a<c.length&&s[o].claim_order>=c[a].claim_order;)a++;const f=a<c.length?c[a]:null;t.insertBefore(s[o],f)}}function Z(t,e){t.appendChild(e)}function tt(t,e){if(E){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){E&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function H(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function St(){return j(" ")}function jt(){return j("")}function M(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Tt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Dt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function q(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function nt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:q(t,i,e[i])}function it(t,e){Object.keys(e).forEach(n=>{rt(t,n,e[n])})}function rt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:q(t,e,n)}function Ot(t){return/-/.test(t)?it:nt}function st(t){return Array.from(t.childNodes)}function ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,e,n,i,r=!1){ot(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const o=n(u);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function I(t,e,n,i){return F(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||c.push(u.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Mt(t,e,n){return I(t,e,n,H)}function Pt(t,e,n){return I(t,e,n,et)}function ct(t,e){return F(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function zt(t){return ct(t," ")}function Lt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Wt(t,e){t.value=e??""}function Bt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let w;function ut(){if(w===void 0){w=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{w=!0}}return w}function Ht(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=H("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=ut();let c;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=M(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=M(i.contentWindow,"resize",e),e()}),Z(t,i),()=>{(r||c&&i.contentWindow)&&c(),B(i)}}function qt(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Ft(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function It(t,e){return new t(e)}let b;function y(t){b=t}function p(){if(!b)throw new Error("Function called outside component initialization");return b}function Rt(t){p().$$.on_mount.push(t)}function Gt(t){p().$$.after_update.push(t)}function Jt(t){p().$$.on_destroy.push(t)}function Kt(){const t=p();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const c=at(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,c)}),!c.defaultPrevented}return!0}}function Qt(t,e){return p().$$.context.set(t,e),e}function Ut(t){return p().$$.context.get(t)}function Vt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],P=[];let m=[];const A=[],R=Promise.resolve();let N=!1;function G(){N||(N=!0,R.then(J))}function Xt(){return G(),R}function C(t){m.push(t)}function Yt(t){A.push(t)}const k=new Set;let _=0;function J(){if(_!==0)return;const t=b;do{try{for(;_<h.length;){const e=h[_];_++,y(e),lt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(y(null),h.length=0,_=0;P.length;)P.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];k.has(n)||(k.add(n),n())}m.length=0}while(h.length);for(;A.length;)A.pop()();N=!1,k.clear(),y(t)}function lt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}function ft(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const v=new Set;let d;function Zt(){d={r:0,c:[],p:d}}function te(){d.r||x(d.c),d=d.p}function dt(t,e){t&&t.i&&(v.delete(t),t.i(e))}function ee(t,e,n,i){if(t&&t.o){if(v.has(t))return;v.add(t),d.c.push(()=>{v.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ne=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function ie(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=e[c];if(u){for(const o in s)o in u||(i[o]=1);for(const o in u)r[o]||(n[o]=u[o],r[o]=1);t[c]=u}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function re(t){return typeof t=="object"&&t!==null?t:{}}function se(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function oe(t){t&&t.c()}function ce(t,e){t&&t.l(e)}function _t(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||C(()=>{const s=t.$$.on_mount.map(z).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...s):x(s),t.$$.on_mount=[]}),c.forEach(C)}function ht(t,e){const n=t.$$;n.fragment!==null&&(ft(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(h.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,r,c,s,u=[-1]){const o=b;y(t);const a=t.$$={fragment:null,ctx:[],props:c,update:g,not_equal:r,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:O(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};s&&s(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(l,$,...T)=>{const D=T.length?T[0]:$;return a.ctx&&r(a.ctx[l],a.ctx[l]=D)&&(!a.skip_bound&&a.bound[l]&&a.bound[l](D),f&&mt(t,l)),$}):[],a.update(),f=!0,x(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){U();const l=st(e.target);a.fragment&&a.fragment.l(l),l.forEach(B)}else a.fragment&&a.fragment.c();e.intro&&dt(t.$$.fragment),_t(t,e.target,e.anchor,e.customElement),V(),J()}y(o)}class ae{$destroy(){ht(this,1),this.$destroy=g}$on(e,n){if(!S(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{nt as $,ce as A,_t as B,ht as C,Zt as D,It as E,L as F,x as G,S as H,Wt as I,M as J,yt as K,Gt as L,Rt as M,Bt as N,P as O,qt as P,Xt as Q,ie as R,ae as S,re as T,Et as U,p as V,Ut as W,Qt as X,Jt as Y,K as Z,vt as _,St as a,At as a0,C as a1,se as a2,Yt as a3,Vt as a4,Tt as a5,Dt as a6,Ot as a7,ne as a8,Ft as a9,et as aa,Pt as ab,Kt as ac,kt as ad,Ht as ae,st as b,Mt as c,ct as d,H as e,B as f,zt as g,Nt as h,ue as i,tt as j,Lt as k,gt as l,bt as m,g as n,wt as o,xt as p,dt as q,ee as r,pt as s,j as t,$t as u,q as v,jt as w,te as x,Ct as y,oe as z};