import{F as Se,a3 as We,a4 as Ve,a5 as Ze,S as te,i as ne,s as X,x as E,y as G,e as M,z as Ae,A as I,b as H,K,T as L,v as ae,d as D,B as j,f as ie,g as R,h as S,N as O,O as se,Z as V,D as F,P as Z,w as J,C as re,H as oe,I as le,J as ue,U as we,k as ce,l as fe,m as de,a6 as $,G as ee,L as Oe,M as Be,R as _e,_ as Je,a as Ke,c as Qe,n as Ee}from"./index.f02f8fef.js";var ye=function(a,e){return ye=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])},ye(a,e)};function Ne(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ye(a,e);function t(){this.constructor=a}a.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var W=function(){return W=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},W.apply(this,arguments)};function N(a){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&a[e],n=0;if(t)return t.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Te=function(){function a(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ye(a){return a===void 0&&(a=window),xe(a)?{passive:!0}:!1}function xe(a){a===void 0&&(a=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};a.document.addEventListener("test",n,t),a.document.removeEventListener("test",n,t)}catch{e=!1}return e}const $e=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Ye},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function et(a,e){if(a.closest)return a.closest(e);for(var t=a;t;){if(Ge(t,e))return t;t=t.parentElement}return null}function Ge(a,e){var t=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return t.call(a,e)}function tt(a){var e=a;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}const nt=Object.freeze(Object.defineProperty({__proto__:null,closest:et,estimateScrollWidth:tt,matches:Ge},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var at={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},it={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Me={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},T;function st(a,e){e===void 0&&(e=!1);var t=a.CSS,n=T;if(typeof T=="boolean"&&!e)return T;var s=t&&typeof t.supports=="function";if(!s)return!1;var r=t.supports("--css-vars","yes"),l=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=r||l,e||(T=n),n}function rt(a,e,t){if(!a)return{x:0,y:0};var n=e.x,s=e.y,r=n+t.left,l=s+t.top,i,o;if(a.type==="touchstart"){var u=a;i=u.changedTouches[0].pageX-r,o=u.changedTouches[0].pageY-l}else{var c=a;i=c.pageX-r,o=c.pageY-l}return{x:i,y:o}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var De=["touchstart","pointerdown","mousedown","keydown"],Re=["touchend","pointerup","mouseup","contextmenu"],Y=[],ot=function(a){Ne(e,a);function e(t){var n=a.call(this,W(W({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(s){n.activateImpl(s)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return it},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Me},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var s=e.cssClasses,r=s.ROOT,l=s.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(l),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,s=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(s),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,s;if(t){try{for(var r=N(De),l=r.next();!l.done;l=r.next()){var i=l.value;this.adapter.registerInteractionHandler(i,this.activateHandler)}}catch(o){n={error:o}}finally{try{l&&!l.done&&(s=r.return)&&s.call(r)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,s;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=N(Re),l=r.next();!l.done;l=r.next()){var i=l.value;this.adapter.registerDocumentInteractionHandler(i,this.deactivateHandler)}}catch(o){n={error:o}}finally{try{l&&!l.done&&(s=r.return)&&s.call(r)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var s=N(De),r=s.next();!r.done;r=s.next()){var l=r.value;this.adapter.deregisterInteractionHandler(l,this.activateHandler)}}catch(i){t={error:i}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var s=N(Re),r=s.next();!r.done;r=s.next()){var l=r.value;this.adapter.deregisterDocumentInteractionHandler(l,this.deactivateHandler)}}catch(i){t={error:i}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,s=Object.keys(n);s.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[r],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var s=this.activationState;if(!s.isActivated){var r=this.previousActivationEvent,l=r&&t!==void 0&&r.type!==t.type;if(!l){s.isActivated=!0,s.isProgrammatic=t===void 0,s.activationEvent=t,s.wasActivatedByPointer=s.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var i=t!==void 0&&Y.length>0&&Y.some(function(o){return n.adapter.containsEventTarget(o)});if(i){this.resetActivationState();return}t!==void 0&&(Y.push(t.target),this.registerDeactivationHandlers(t)),s.wasElementMadeActive=this.checkElementMadeActive(t),s.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Y=[],!s.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(s.wasElementMadeActive=n.checkElementMadeActive(t),s.wasElementMadeActive&&n.animateActivation()),s.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,s=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,l=e.cssClasses,i=l.FG_DEACTIVATION,o=l.FG_ACTIVATION,u=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",f="";if(!this.adapter.isUnbounded()){var _=this.getFgTranslationCoordinates(),y=_.startPoint,m=_.endPoint;c=y.x+"px, "+y.y+"px",f=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(s,c),this.adapter.updateCssVariable(r,f),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(i),this.adapter.computeBoundingRect(),this.adapter.addClass(o),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},u)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,s=t.wasActivatedByPointer,r;s?r=rt(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var l={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:l}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,s=this.activationState,r=s.hasDeactivationUXRun,l=s.isActivated,i=r||!l;i&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},Me.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var s=W({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(s)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(s),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,s=t.wasElementMadeActive;(n||s)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),s=function(){var l=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return l+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:s();var r=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!==0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,s=t.VAR_LEFT,r=t.VAR_TOP,l=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(l,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(s,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(Te);function z(a){return Object.entries(a).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function lt(a,e,t,n={bubbles:!0},s=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!a)throw new Error("Tried to dipatch event without element.");const r=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:t}));if(a==null||a.dispatchEvent(r),s&&e.startsWith("SMUI")){const l=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:t}));a==null||a.dispatchEvent(l),l.defaultPrevented&&r.preventDefault()}return r}const Fe=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,ut=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function me(a){let e,t=[];a.$on=(s,r)=>{let l=s,i=()=>{};return e?i=e(l,r):t.push([l,r]),l.match(Fe)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',l),()=>{i()}};function n(s){We(a,s)}return s=>{const r=[],l={};e=(i,o)=>{let u=i,c=o,f=!1;const _=u.match(Fe),y=u.match(ut),m=_||y;if(u.match(/^SMUI:\w+:/)){const h=u.split(":");let A="";for(let C=0;C<h.length;C++)A+=C===h.length-1?":"+h[C]:h[C].split("-").map(p=>p.slice(0,1).toUpperCase()+p.slice(1)).join("");console.warn(`The event ${u.split("$")[0]} has been renamed to ${A.split("$")[0]}.`),u=A}if(m){const h=u.split(_?":":"$");u=h[0];const A=h.slice(1).reduce((C,p)=>(C[p]=!0,C),{});A.passive&&(f=f||{},f.passive=!0),A.nonpassive&&(f=f||{},f.passive=!1),A.capture&&(f=f||{},f.capture=!0),A.once&&(f=f||{},f.once=!0),A.preventDefault&&(c=Ve(c)),A.stopPropagation&&(c=Ze(c))}const v=Se(s,u,c,f),w=()=>{v();const h=r.indexOf(w);h>-1&&r.splice(h,1)};return r.push(w),u in l||(l[u]=Se(s,u,n)),w};for(let i=0;i<t.length;i++)e(t[i][0],t[i][1]);return{destroy:()=>{for(let i=0;i<r.length;i++)r[i]();for(let i of Object.entries(l))i[1]()}}}}function Ie(a,e){let t=[];if(e)for(let n=0;n<e.length;n++){const s=e[n],r=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?t.push(r(a,s[1])):t.push(r(a))}return{update(n){if((n&&n.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(n)for(let s=0;s<n.length;s++){const r=t[s];if(r&&r.update){const l=n[s];Array.isArray(l)&&l.length>1?r.update(l[1]):r.update()}}},destroy(){for(let n=0;n<t.length;n++){const s=t[n];s&&s.destroy&&s.destroy()}}}}function ct(a){let e;const t=a[10].default,n=re(t,a,a[12],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&4096)&&oe(n,t,s,s[12],e?ue(t,s[12],r,null):le(s[12]),null)},i(s){e||(R(n,s),e=!0)},o(s){D(n,s),e=!1},d(s){n&&n.d(s)}}}function ft(a){let e,t,n;const s=[{tag:a[3]},{use:[a[5],...a[0]]},{class:z({[a[1]]:!0,"mdc-button__label":a[6]==="button","mdc-fab__label":a[6]==="fab","mdc-tab__text-label":a[6]==="tab","mdc-image-list__label":a[6]==="image-list","mdc-snackbar__label":a[6]==="snackbar","mdc-banner__text":a[6]==="banner","mdc-segmented-button__label":a[6]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":a[6]==="data-table:pagination","mdc-data-table__header-cell-label":a[6]==="data-table:sortable-header-cell"})},a[6]==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:a[7]},a[8]];var r=a[2];function l(i){let o={$$slots:{default:[ct]},$$scope:{ctx:i}};for(let u=0;u<s.length;u+=1)o=F(o,s[u]);return{props:o}}return r&&(e=E(r,l(a)),a[11](e)),{c(){e&&G(e.$$.fragment),t=M()},l(i){e&&Ae(e.$$.fragment,i),t=M()},m(i,o){e&&I(e,i,o),H(i,t,o),n=!0},p(i,[o]){const u=o&491?K(s,[o&8&&{tag:i[3]},o&33&&{use:[i[5],...i[0]]},o&66&&{class:z({[i[1]]:!0,"mdc-button__label":i[6]==="button","mdc-fab__label":i[6]==="fab","mdc-tab__text-label":i[6]==="tab","mdc-image-list__label":i[6]==="image-list","mdc-snackbar__label":i[6]==="snackbar","mdc-banner__text":i[6]==="banner","mdc-segmented-button__label":i[6]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":i[6]==="data-table:pagination","mdc-data-table__header-cell-label":i[6]==="data-table:sortable-header-cell"})},o&64&&L(i[6]==="snackbar"?{"aria-atomic":"false"}:{}),o&128&&{tabindex:i[7]},o&256&&L(i[8])]):{};if(o&4096&&(u.$$scope={dirty:o,ctx:i}),o&4&&r!==(r=i[2])){if(e){ae();const c=e;D(c.$$.fragment,1,0,()=>{j(c,1)}),ie()}r?(e=E(r,l(i)),i[11](e),G(e.$$.fragment),R(e.$$.fragment,1),I(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(i){n||(e&&R(e.$$.fragment,i),n=!0)},o(i){e&&D(e.$$.fragment,i),n=!1},d(i){a[11](null),i&&S(t),e&&j(e,i)}}}function dt(a,e,t){const n=["use","class","component","tag","getElement"];let s=O(e,n),{$$slots:r={},$$scope:l}=e;const i=me(se());let{use:o=[]}=e,{class:u=""}=e,c,{component:f=P}=e,{tag:_=f===P?"span":void 0}=e;const y=V("SMUI:label:context"),m=V("SMUI:label:tabindex");function v(){return c.getElement()}function w(h){J[h?"unshift":"push"](()=>{c=h,t(4,c)})}return a.$$set=h=>{e=F(F({},e),Z(h)),t(8,s=O(e,n)),"use"in h&&t(0,o=h.use),"class"in h&&t(1,u=h.class),"component"in h&&t(2,f=h.component),"tag"in h&&t(3,_=h.tag),"$$scope"in h&&t(12,l=h.$$scope)},[o,u,f,_,c,i,y,m,s,v,r,w,l]}class Dt extends te{constructor(e){super(),ne(this,e,dt,ft,X,{use:0,class:1,component:2,tag:3,getElement:9})}get getElement(){return this.$$.ctx[9]}}function mt(a){let e=a[1],t,n,s=a[1]&&ge(a);return{c(){s&&s.c(),t=M()},l(r){s&&s.l(r),t=M()},m(r,l){s&&s.m(r,l),H(r,t,l),n=!0},p(r,l){r[1]?e?X(e,r[1])?(s.d(1),s=ge(r),e=r[1],s.c(),s.m(t.parentNode,t)):s.p(r,l):(s=ge(r),e=r[1],s.c(),s.m(t.parentNode,t)):e&&(s.d(1),s=null,e=r[1])},i(r){n||(R(s),n=!0)},o(r){D(s),n=!1},d(r){r&&S(t),s&&s.d(r)}}}function pt(a){let e=a[1],t,n=a[1]&&be(a);return{c(){n&&n.c(),t=M()},l(s){n&&n.l(s),t=M()},m(s,r){n&&n.m(s,r),H(s,t,r)},p(s,r){s[1]?e?X(e,s[1])?(n.d(1),n=be(s),e=s[1],n.c(),n.m(t.parentNode,t)):n.p(s,r):(n=be(s),e=s[1],n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=s[1])},i:we,o:we,d(s){s&&S(t),n&&n.d(s)}}}function ge(a){let e,t,n,s,r;const l=a[8].default,i=re(l,a,a[7],null);let o=[a[5]],u={};for(let c=0;c<o.length;c+=1)u=F(u,o[c]);return{c(){e=ce(a[1]),i&&i.c(),this.h()},l(c){e=fe(c,(a[1]||"null").toUpperCase(),{});var f=de(e);i&&i.l(f),f.forEach(S),this.h()},h(){$(a[1])(e,u)},m(c,f){H(c,e,f),i&&i.m(e,null),a[10](e),n=!0,s||(r=[ee(t=Ie.call(null,e,a[0])),ee(a[4].call(null,e))],s=!0)},p(c,f){i&&i.p&&(!n||f&128)&&oe(i,l,c,c[7],n?ue(l,c[7],f,null):le(c[7]),null),$(c[1])(e,u=K(o,[f&32&&c[5]])),t&&Oe(t.update)&&f&1&&t.update.call(null,c[0])},i(c){n||(R(i,c),n=!0)},o(c){D(i,c),n=!1},d(c){c&&S(e),i&&i.d(c),a[10](null),s=!1,Be(r)}}}function be(a){let e,t,n,s,r=[a[5]],l={};for(let i=0;i<r.length;i+=1)l=F(l,r[i]);return{c(){e=ce(a[1]),this.h()},l(i){e=fe(i,(a[1]||"null").toUpperCase(),{}),de(e).forEach(S),this.h()},h(){$(a[1])(e,l)},m(i,o){H(i,e,o),a[9](e),n||(s=[ee(t=Ie.call(null,e,a[0])),ee(a[4].call(null,e))],n=!0)},p(i,o){$(i[1])(e,l=K(r,[o&32&&i[5]])),t&&Oe(t.update)&&o&1&&t.update.call(null,i[0])},d(i){i&&S(e),a[9](null),n=!1,Be(s)}}}function ht(a){let e,t,n,s;const r=[pt,mt],l=[];function i(o,u){return o[3]?0:1}return e=i(a),t=l[e]=r[e](a),{c(){t.c(),n=M()},l(o){t.l(o),n=M()},m(o,u){l[e].m(o,u),H(o,n,u),s=!0},p(o,[u]){let c=e;e=i(o),e===c?l[e].p(o,u):(ae(),D(l[c],1,1,()=>{l[c]=null}),ie(),t=l[e],t?t.p(o,u):(t=l[e]=r[e](o),t.c()),R(t,1),t.m(n.parentNode,n))},i(o){s||(R(t),s=!0)},o(o){D(t),s=!1},d(o){l[e].d(o),o&&S(n)}}}function vt(a,e,t){let n;const s=["use","tag","getElement"];let r=O(e,s),{$$slots:l={},$$scope:i}=e,{use:o=[]}=e,{tag:u}=e;const c=me(se());let f;function _(){return f}function y(v){J[v?"unshift":"push"](()=>{f=v,t(2,f)})}function m(v){J[v?"unshift":"push"](()=>{f=v,t(2,f)})}return a.$$set=v=>{e=F(F({},e),Z(v)),t(5,r=O(e,s)),"use"in v&&t(0,o=v.use),"tag"in v&&t(1,u=v.tag),"$$scope"in v&&t(7,i=v.$$scope)},a.$$.update=()=>{a.$$.dirty&2&&t(3,n=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(u)>-1)},[o,u,f,n,c,r,_,i,l,y,m]}class P extends te{constructor(e){super(),ne(this,e,vt,ht,X,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function gt(a){let e;const t=a[11].default,n=re(t,a,a[13],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,r){n&&n.m(s,r),e=!0},p(s,r){n&&n.p&&(!e||r&8192)&&oe(n,t,s,s[13],e?ue(t,s[13],r,null):le(s[13]),null)},i(s){e||(R(n,s),e=!0)},o(s){D(n,s),e=!1},d(s){n&&n.d(s)}}}function bt(a){let e,t,n;const s=[{tag:a[3]},{use:[a[8],...a[0]]},{class:z({[a[1]]:!0,[a[6]]:!0,...a[5]})},a[7],a[9]];var r=a[2];function l(i){let o={$$slots:{default:[gt]},$$scope:{ctx:i}};for(let u=0;u<s.length;u+=1)o=F(o,s[u]);return{props:o}}return r&&(e=E(r,l(a)),a[12](e)),{c(){e&&G(e.$$.fragment),t=M()},l(i){e&&Ae(e.$$.fragment,i),t=M()},m(i,o){e&&I(e,i,o),H(i,t,o),n=!0},p(i,[o]){const u=o&1003?K(s,[o&8&&{tag:i[3]},o&257&&{use:[i[8],...i[0]]},o&98&&{class:z({[i[1]]:!0,[i[6]]:!0,...i[5]})},o&128&&L(i[7]),o&512&&L(i[9])]):{};if(o&8192&&(u.$$scope={dirty:o,ctx:i}),o&4&&r!==(r=i[2])){if(e){ae();const c=e;D(c.$$.fragment,1,0,()=>{j(c,1)}),ie()}r?(e=E(r,l(i)),i[12](e),G(e.$$.fragment),R(e.$$.fragment,1),I(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(i){n||(e&&R(e.$$.fragment,i),n=!0)},o(i){e&&D(e.$$.fragment,i),n=!1},d(i){a[12](null),i&&S(t),e&&j(e,i)}}}const U={component:P,tag:"div",class:"",classMap:{},contexts:{},props:{}};function _t(a,e,t){const n=["use","class","component","tag","getElement"];let s=O(e,n),{$$slots:r={},$$scope:l}=e,{use:i=[]}=e,{class:o=""}=e,u;const c=U.class,f={},_=[],y=U.contexts,m=U.props;let{component:v=U.component}=e,{tag:w=v===P?U.tag:void 0}=e;Object.entries(U.classMap).forEach(([p,B])=>{const g=V(B);g&&"subscribe"in g&&_.push(g.subscribe(b=>{t(5,f[p]=b,f)}))});const h=me(se());for(let p in y)y.hasOwnProperty(p)&&_e(p,y[p]);Je(()=>{for(const p of _)p()});function A(){return u.getElement()}function C(p){J[p?"unshift":"push"](()=>{u=p,t(4,u)})}return a.$$set=p=>{e=F(F({},e),Z(p)),t(9,s=O(e,n)),"use"in p&&t(0,i=p.use),"class"in p&&t(1,o=p.class),"component"in p&&t(2,v=p.component),"tag"in p&&t(3,w=p.tag),"$$scope"in p&&t(13,l=p.$$scope)},[i,o,v,w,u,f,c,m,h,s,A,r,C,l]}class yt extends te{constructor(e){super(),ne(this,e,_t,bt,X,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const He=Object.assign({},U);function Rt(a){return new Proxy(yt,{construct:function(e,t){return Object.assign(U,He,a),new e(...t)},get:function(e,t){return Object.assign(U,He,a),e[t]}})}const{applyPassive:x}=$e,{matches:At}=nt;function Ue(a,{ripple:e=!0,surface:t=!1,unbounded:n=!1,disabled:s=!1,color:r,active:l,rippleElement:i,eventTarget:o,activeTarget:u,addClass:c=m=>a.classList.add(m),removeClass:f=m=>a.classList.remove(m),addStyle:_=(m,v)=>a.style.setProperty(m,v),initPromise:y=Promise.resolve()}={}){let m,v=V("SMUI:addLayoutListener"),w,h=l,A=o,C=u;function p(){t?(c("mdc-ripple-surface"),r==="primary"?(c("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):r==="secondary"?(f("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):(f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary"))):(f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),m&&h!==l&&(h=l,l?m.activate():l===!1&&m.deactivate()),e&&!m?(m=new ot({addClass:c,browserSupportsCssVars:()=>st(window),computeBoundingRect:()=>(i||a).getBoundingClientRect(),containsEventTarget:g=>a.contains(g),deregisterDocumentInteractionHandler:(g,b)=>document.documentElement.removeEventListener(g,b,x()),deregisterInteractionHandler:(g,b)=>(o||a).removeEventListener(g,b,x()),deregisterResizeHandler:g=>window.removeEventListener("resize",g),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>l??At(u||a,":active"),isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(g,b)=>document.documentElement.addEventListener(g,b,x()),registerInteractionHandler:(g,b)=>(o||a).addEventListener(g,b,x()),registerResizeHandler:g=>window.addEventListener("resize",g),removeClass:f,updateCssVariable:_}),y.then(()=>{m&&(m.init(),m.setUnbounded(n))})):m&&!e&&y.then(()=>{m&&(m.destroy(),m=void 0)}),m&&(A!==o||C!==u)&&(A=o,C=u,m.destroy(),requestAnimationFrame(()=>{m&&(m.init(),m.setUnbounded(n))})),!e&&n&&c("mdc-ripple-upgraded--unbounded")}p(),v&&(w=v(B));function B(){m&&m.layout()}return{update(g){({ripple:e,surface:t,unbounded:n,disabled:s,color:r,active:l,rippleElement:i,eventTarget:o,activeTarget:u,addClass:c,removeClass:f,addStyle:_,initPromise:y}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:b=>a.classList.add(b),removeClass:b=>a.classList.remove(b),addStyle:(b,k)=>a.style.setProperty(b,k),initPromise:Promise.resolve()},g)),p()},destroy(){m&&(m.destroy(),m=void 0,f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),w&&w()}}}function ke(a){let e;return{c(){e=ce("div"),this.h()},l(t){e=fe(t,"DIV",{class:!0}),de(e).forEach(S),this.h()},h(){Ee(e,"class","mdc-button__touch")},m(t,n){H(t,e,n)},d(t){t&&S(e)}}}function Ct(a){let e,t,n,s;const r=a[28].default,l=re(r,a,a[30],null);let i=a[6]&&ke();return{c(){e=ce("div"),t=Ke(),l&&l.c(),i&&i.c(),n=M(),this.h()},l(o){e=fe(o,"DIV",{class:!0}),de(e).forEach(S),t=Qe(o),l&&l.l(o),i&&i.l(o),n=M(),this.h()},h(){Ee(e,"class","mdc-button__ripple")},m(o,u){H(o,e,u),H(o,t,u),l&&l.m(o,u),i&&i.m(o,u),H(o,n,u),s=!0},p(o,u){l&&l.p&&(!s||u[0]&1073741824)&&oe(l,r,o,o[30],s?ue(r,o[30],u,null):le(o[30]),null),o[6]?i||(i=ke(),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i(o){s||(R(l,o),s=!0)},o(o){D(l,o),s=!1},d(o){o&&S(e),o&&S(t),l&&l.d(o),i&&i.d(o),o&&S(n)}}}function St(a){let e,t,n;const s=[{tag:a[10]},{use:[[Ue,{ripple:a[3],unbounded:!1,color:a[4],disabled:!!a[23].disabled,addClass:a[19],removeClass:a[20],addStyle:a[21]}],a[17],...a[0]]},{class:z({[a[1]]:!0,"mdc-button":!0,"mdc-button--raised":a[5]==="raised","mdc-button--unelevated":a[5]==="unelevated","mdc-button--outlined":a[5]==="outlined","smui-button--color-secondary":a[4]==="secondary","mdc-button--touch":a[6],"mdc-card__action":a[18]==="card:action","mdc-card__action--button":a[18]==="card:action","mdc-dialog__button":a[18]==="dialog:action","mdc-top-app-bar__navigation-icon":a[18]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[18]==="top-app-bar:action","mdc-snackbar__action":a[18]==="snackbar:actions","mdc-banner__secondary-action":a[18]==="banner"&&a[8],"mdc-banner__primary-action":a[18]==="banner"&&!a[8],"mdc-tooltip__action":a[18]==="tooltip:rich-actions",...a[12]})},{style:Object.entries(a[13]).map(Le).concat([a[2]]).join(" ")},a[16],a[15],a[14],{href:a[7]},a[23]];var r=a[9];function l(i){let o={$$slots:{default:[Ct]},$$scope:{ctx:i}};for(let u=0;u<s.length;u+=1)o=F(o,s[u]);return{props:o}}return r&&(e=E(r,l(a)),a[29](e),e.$on("click",a[22])),{c(){e&&G(e.$$.fragment),t=M()},l(i){e&&Ae(e.$$.fragment,i),t=M()},m(i,o){e&&I(e,i,o),H(i,t,o),n=!0},p(i,o){const u=o[0]&12580351?K(s,[o[0]&1024&&{tag:i[10]},o[0]&12189721&&{use:[[Ue,{ripple:i[3],unbounded:!1,color:i[4],disabled:!!i[23].disabled,addClass:i[19],removeClass:i[20],addStyle:i[21]}],i[17],...i[0]]},o[0]&266610&&{class:z({[i[1]]:!0,"mdc-button":!0,"mdc-button--raised":i[5]==="raised","mdc-button--unelevated":i[5]==="unelevated","mdc-button--outlined":i[5]==="outlined","smui-button--color-secondary":i[4]==="secondary","mdc-button--touch":i[6],"mdc-card__action":i[18]==="card:action","mdc-card__action--button":i[18]==="card:action","mdc-dialog__button":i[18]==="dialog:action","mdc-top-app-bar__navigation-icon":i[18]==="top-app-bar:navigation","mdc-top-app-bar__action-item":i[18]==="top-app-bar:action","mdc-snackbar__action":i[18]==="snackbar:actions","mdc-banner__secondary-action":i[18]==="banner"&&i[8],"mdc-banner__primary-action":i[18]==="banner"&&!i[8],"mdc-tooltip__action":i[18]==="tooltip:rich-actions",...i[12]})},o[0]&8196&&{style:Object.entries(i[13]).map(Le).concat([i[2]]).join(" ")},o[0]&65536&&L(i[16]),o[0]&32768&&L(i[15]),o[0]&16384&&L(i[14]),o[0]&128&&{href:i[7]},o[0]&8388608&&L(i[23])]):{};if(o[0]&1073741888&&(u.$$scope={dirty:o,ctx:i}),o[0]&512&&r!==(r=i[9])){if(e){ae();const c=e;D(c.$$.fragment,1,0,()=>{j(c,1)}),ie()}r?(e=E(r,l(i)),i[29](e),e.$on("click",i[22]),G(e.$$.fragment),R(e.$$.fragment,1),I(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(i){n||(e&&R(e.$$.fragment,i),n=!0)},o(i){e&&D(e.$$.fragment,i),n=!1},d(i){a[29](null),i&&S(t),e&&j(e,i)}}}const Le=([a,e])=>`${a}: ${e};`;function wt(a,e,t){let n,s,r;const l=["use","class","style","ripple","color","variant","touch","href","action","defaultAction","secondary","component","tag","getElement"];let i=O(e,l),{$$slots:o={},$$scope:u}=e;const c=me(se());let{use:f=[]}=e,{class:_=""}=e,{style:y=""}=e,{ripple:m=!0}=e,{color:v="primary"}=e,{variant:w="text"}=e,{touch:h=!1}=e,{href:A=void 0}=e,{action:C="close"}=e,{defaultAction:p=!1}=e,{secondary:B=!1}=e,g,b={},k={},q=V("SMUI:button:context"),{component:pe=P}=e,{tag:Ce=pe===P?A==null?"button":"a":void 0}=e,he=i.disabled;_e("SMUI:label:context","button"),_e("SMUI:icon:context","button");function je(d){b[d]||t(12,b[d]=!0,b)}function ze(d){(!(d in b)||b[d])&&t(12,b[d]=!1,b)}function Pe(d,Q){k[d]!=Q&&(Q===""||Q==null?(delete k[d],t(13,k)):t(13,k[d]=Q,k))}function Xe(){q==="banner"&&lt(ve(),B?"SMUIBannerButton:secondaryActionClick":"SMUIBannerButton:primaryActionClick")}function ve(){return g.getElement()}function qe(d){J[d?"unshift":"push"](()=>{g=d,t(11,g)})}return a.$$set=d=>{t(31,e=F(F({},e),Z(d))),t(23,i=O(e,l)),"use"in d&&t(0,f=d.use),"class"in d&&t(1,_=d.class),"style"in d&&t(2,y=d.style),"ripple"in d&&t(3,m=d.ripple),"color"in d&&t(4,v=d.color),"variant"in d&&t(5,w=d.variant),"touch"in d&&t(6,h=d.touch),"href"in d&&t(7,A=d.href),"action"in d&&t(24,C=d.action),"defaultAction"in d&&t(25,p=d.defaultAction),"secondary"in d&&t(8,B=d.secondary),"component"in d&&t(9,pe=d.component),"tag"in d&&t(10,Ce=d.tag),"$$scope"in d&&t(30,u=d.$$scope)},a.$$.update=()=>{if(t(16,n=q==="dialog:action"&&C!=null?{"data-mdc-dialog-action":C}:{action:e.action}),t(15,s=q==="dialog:action"&&p?{"data-mdc-dialog-button-default":""}:{default:e.default}),t(14,r=q==="banner"?{}:{secondary:e.secondary}),he!==i.disabled){const d=ve();"blur"in d&&d.blur(),t(27,he=i.disabled)}},e=Z(e),[f,_,y,m,v,w,h,A,B,pe,Ce,g,b,k,r,s,n,c,q,je,ze,Pe,Xe,i,C,p,ve,he,o,qe,u]}class Ft extends te{constructor(e){super(),ne(this,e,wt,St,X,{use:0,class:1,style:2,ripple:3,color:4,variant:5,touch:6,href:7,action:24,defaultAction:25,secondary:8,component:9,tag:10,getElement:26},null,[-1,-1])}get getElement(){return this.$$.ctx[26]}}export{Ft as B,Dt as C,Te as M,Ue as R,P as S,Ne as _,W as a,Rt as b,z as c,lt as d,me as f,Ie as u};
