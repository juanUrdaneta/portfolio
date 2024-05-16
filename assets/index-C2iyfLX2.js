var A1=Object.defineProperty;var C1=(n,e,t)=>e in n?A1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var vr=(n,e,t)=>(C1(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function R1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var lx={exports:{}},td={},ux={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=Symbol.for("react.element"),P1=Symbol.for("react.portal"),b1=Symbol.for("react.fragment"),L1=Symbol.for("react.strict_mode"),D1=Symbol.for("react.profiler"),N1=Symbol.for("react.provider"),U1=Symbol.for("react.context"),I1=Symbol.for("react.forward_ref"),O1=Symbol.for("react.suspense"),F1=Symbol.for("react.memo"),k1=Symbol.for("react.lazy"),$g=Symbol.iterator;function z1(n){return n===null||typeof n!="object"?null:(n=$g&&n[$g]||n["@@iterator"],typeof n=="function"?n:null)}var cx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fx=Object.assign,dx={};function nl(n,e,t){this.props=n,this.context=e,this.refs=dx,this.updater=t||cx}nl.prototype.isReactComponent={};nl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};nl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function hx(){}hx.prototype=nl.prototype;function Tm(n,e,t){this.props=n,this.context=e,this.refs=dx,this.updater=t||cx}var wm=Tm.prototype=new hx;wm.constructor=Tm;fx(wm,nl.prototype);wm.isPureReactComponent=!0;var qg=Array.isArray,px=Object.prototype.hasOwnProperty,Am={current:null},mx={key:!0,ref:!0,__self:!0,__source:!0};function gx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)px.call(e,i)&&!mx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Lu,type:n,key:s,ref:o,props:r,_owner:Am.current}}function B1(n,e){return{$$typeof:Lu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Cm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Lu}function H1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Kg=/\/+/g;function Pd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?H1(""+n.key):e.toString(36)}function Wc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Lu:case P1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Pd(o,0):i,qg(r)?(t="",n!=null&&(t=n.replace(Kg,"$&/")+"/"),Wc(r,e,t,"",function(u){return u})):r!=null&&(Cm(r)&&(r=B1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Kg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",qg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Pd(s,a);o+=Wc(s,e,t,l,r)}else if(l=z1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Pd(s,a++),o+=Wc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Vu(n,e,t){if(n==null)return n;var i=[],r=0;return Wc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function V1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Hn={current:null},Xc={transition:null},G1={ReactCurrentDispatcher:Hn,ReactCurrentBatchConfig:Xc,ReactCurrentOwner:Am};it.Children={map:Vu,forEach:function(n,e,t){Vu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Vu(n,function(){e++}),e},toArray:function(n){return Vu(n,function(e){return e})||[]},only:function(n){if(!Cm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};it.Component=nl;it.Fragment=b1;it.Profiler=D1;it.PureComponent=Tm;it.StrictMode=L1;it.Suspense=O1;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G1;it.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=fx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Am.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)px.call(e,l)&&!mx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Lu,type:n.type,key:r,ref:s,props:i,_owner:o}};it.createContext=function(n){return n={$$typeof:U1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:N1,_context:n},n.Consumer=n};it.createElement=gx;it.createFactory=function(n){var e=gx.bind(null,n);return e.type=n,e};it.createRef=function(){return{current:null}};it.forwardRef=function(n){return{$$typeof:I1,render:n}};it.isValidElement=Cm;it.lazy=function(n){return{$$typeof:k1,_payload:{_status:-1,_result:n},_init:V1}};it.memo=function(n,e){return{$$typeof:F1,type:n,compare:e===void 0?null:e}};it.startTransition=function(n){var e=Xc.transition;Xc.transition={};try{n()}finally{Xc.transition=e}};it.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};it.useCallback=function(n,e){return Hn.current.useCallback(n,e)};it.useContext=function(n){return Hn.current.useContext(n)};it.useDebugValue=function(){};it.useDeferredValue=function(n){return Hn.current.useDeferredValue(n)};it.useEffect=function(n,e){return Hn.current.useEffect(n,e)};it.useId=function(){return Hn.current.useId()};it.useImperativeHandle=function(n,e,t){return Hn.current.useImperativeHandle(n,e,t)};it.useInsertionEffect=function(n,e){return Hn.current.useInsertionEffect(n,e)};it.useLayoutEffect=function(n,e){return Hn.current.useLayoutEffect(n,e)};it.useMemo=function(n,e){return Hn.current.useMemo(n,e)};it.useReducer=function(n,e,t){return Hn.current.useReducer(n,e,t)};it.useRef=function(n){return Hn.current.useRef(n)};it.useState=function(n){return Hn.current.useState(n)};it.useSyncExternalStore=function(n,e,t){return Hn.current.useSyncExternalStore(n,e,t)};it.useTransition=function(){return Hn.current.useTransition()};it.version="18.2.0";ux.exports=it;var Mo=ux.exports;const co=R1(Mo);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1=Mo,X1=Symbol.for("react.element"),j1=Symbol.for("react.fragment"),Y1=Object.prototype.hasOwnProperty,$1=W1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q1={key:!0,ref:!0,__self:!0,__source:!0};function _x(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Y1.call(e,i)&&!q1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:X1,type:n,key:s,ref:o,props:r,_owner:$1.current}}td.Fragment=j1;td.jsx=_x;td.jsxs=_x;lx.exports=td;var J=lx.exports,Zh={},vx={exports:{}},xi={},xx={exports:{}},yx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,G){var R=L.length;L.push(G);e:for(;0<R;){var ie=R-1>>>1,te=L[ie];if(0<r(te,G))L[ie]=G,L[R]=te,R=ie;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var G=L[0],R=L.pop();if(R!==G){L[0]=R;e:for(var ie=0,te=L.length,Fe=te>>>1;ie<Fe;){var H=2*(ie+1)-1,ee=L[H],le=H+1,ne=L[le];if(0>r(ee,R))le<te&&0>r(ne,ee)?(L[ie]=ne,L[le]=R,ie=le):(L[ie]=ee,L[H]=R,ie=H);else if(le<te&&0>r(ne,R))L[ie]=ne,L[le]=R,ie=le;else break e}}return G}function r(L,G){var R=L.sortIndex-G.sortIndex;return R!==0?R:L.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=L)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function S(L){if(g=!1,x(L),!_)if(t(l)!==null)_=!0,K(C);else{var G=t(u);G!==null&&Y(S,G.startTime-L)}}function C(L,G){_=!1,g&&(g=!1,h(P),P=-1),p=!0;var R=f;try{for(x(G),d=t(l);d!==null&&(!(d.expirationTime>G)||L&&!N());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var te=ie(d.expirationTime<=G);G=n.unstable_now(),typeof te=="function"?d.callback=te:d===t(l)&&i(l),x(G)}else i(l);d=t(l)}if(d!==null)var Fe=!0;else{var H=t(u);H!==null&&Y(S,H.startTime-G),Fe=!1}return Fe}finally{d=null,f=R,p=!1}}var T=!1,E=null,P=-1,M=5,y=-1;function N(){return!(n.unstable_now()-y<M)}function U(){if(E!==null){var L=n.unstable_now();y=L;var G=!0;try{G=E(!0,L)}finally{G?D():(T=!1,E=null)}}else T=!1}var D;if(typeof v=="function")D=function(){v(U)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,j=X.port2;X.port1.onmessage=U,D=function(){j.postMessage(null)}}else D=function(){m(U,0)};function K(L){E=L,T||(T=!0,D())}function Y(L,G){P=m(function(){L(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,K(C))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var R=f;f=G;try{return L()}finally{f=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var R=f;f=L;try{return G()}finally{f=R}},n.unstable_scheduleCallback=function(L,G,R){var ie=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ie+R:ie):R=ie,L){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=R+te,L={id:c++,callback:G,priorityLevel:L,startTime:R,expirationTime:te,sortIndex:-1},R>ie?(L.sortIndex=R,e(u,L),t(l)===null&&L===t(u)&&(g?(h(P),P=-1):g=!0,Y(S,R-ie))):(L.sortIndex=te,e(l,L),_||p||(_=!0,K(C))),L},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(L){var G=f;return function(){var R=f;f=G;try{return L.apply(this,arguments)}finally{f=R}}}})(yx);xx.exports=yx;var K1=xx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx=Mo,_i=K1;function ae(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mx=new Set,ru={};function Uo(n,e){ka(n,e),ka(n+"Capture",e)}function ka(n,e){for(ru[n]=e,n=0;n<e.length;n++)Mx.add(e[n])}var Or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qh=Object.prototype.hasOwnProperty,Z1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zg={},Qg={};function Q1(n){return Qh.call(Qg,n)?!0:Qh.call(Zg,n)?!1:Z1.test(n)?Qg[n]=!0:(Zg[n]=!0,!1)}function J1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function eE(n,e,t,i){if(e===null||typeof e>"u"||J1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){mn[n]=new Vn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];mn[e]=new Vn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){mn[n]=new Vn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){mn[n]=new Vn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){mn[n]=new Vn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){mn[n]=new Vn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){mn[n]=new Vn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){mn[n]=new Vn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){mn[n]=new Vn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Rm=/[\-:]([a-z])/g;function Pm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Rm,Pm);mn[e]=new Vn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Rm,Pm);mn[e]=new Vn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Rm,Pm);mn[e]=new Vn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){mn[n]=new Vn(n,1,!1,n.toLowerCase(),null,!1,!1)});mn.xlinkHref=new Vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){mn[n]=new Vn(n,1,!1,n.toLowerCase(),null,!0,!0)});function bm(n,e,t,i){var r=mn.hasOwnProperty(e)?mn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eE(e,t,r,i)&&(t=null),i||r===null?Q1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Wr=Sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gu=Symbol.for("react.element"),aa=Symbol.for("react.portal"),la=Symbol.for("react.fragment"),Lm=Symbol.for("react.strict_mode"),Jh=Symbol.for("react.profiler"),Ex=Symbol.for("react.provider"),Tx=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),ep=Symbol.for("react.suspense"),tp=Symbol.for("react.suspense_list"),Nm=Symbol.for("react.memo"),ts=Symbol.for("react.lazy"),wx=Symbol.for("react.offscreen"),Jg=Symbol.iterator;function ll(n){return n===null||typeof n!="object"?null:(n=Jg&&n[Jg]||n["@@iterator"],typeof n=="function"?n:null)}var kt=Object.assign,bd;function Tl(n){if(bd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);bd=e&&e[1]||""}return`
`+bd+n}var Ld=!1;function Dd(n,e){if(!n||Ld)return"";Ld=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ld=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Tl(n):""}function tE(n){switch(n.tag){case 5:return Tl(n.type);case 16:return Tl("Lazy");case 13:return Tl("Suspense");case 19:return Tl("SuspenseList");case 0:case 2:case 15:return n=Dd(n.type,!1),n;case 11:return n=Dd(n.type.render,!1),n;case 1:return n=Dd(n.type,!0),n;default:return""}}function np(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case la:return"Fragment";case aa:return"Portal";case Jh:return"Profiler";case Lm:return"StrictMode";case ep:return"Suspense";case tp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Tx:return(n.displayName||"Context")+".Consumer";case Ex:return(n._context.displayName||"Context")+".Provider";case Dm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nm:return e=n.displayName||null,e!==null?e:np(n.type)||"Memo";case ts:e=n._payload,n=n._init;try{return np(n(e))}catch{}}return null}function nE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return np(e);case 8:return e===Lm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ax(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iE(n){var e=Ax(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Wu(n){n._valueTracker||(n._valueTracker=iE(n))}function Cx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Ax(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function hf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ip(n,e){var t=e.checked;return kt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function e_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Cs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rx(n,e){e=e.checked,e!=null&&bm(n,"checked",e,!1)}function rp(n,e){Rx(n,e);var t=Cs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?sp(n,e.type,t):e.hasOwnProperty("defaultValue")&&sp(n,e.type,Cs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function t_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function sp(n,e,t){(e!=="number"||hf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var wl=Array.isArray;function Ea(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Cs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function op(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return kt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function n_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ae(92));if(wl(t)){if(1<t.length)throw Error(ae(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Cs(t)}}function Px(n,e){var t=Cs(e.value),i=Cs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function i_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function bx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ap(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?bx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Xu,Lx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Xu=Xu||document.createElement("div"),Xu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function su(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ol={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rE=["Webkit","ms","Moz","O"];Object.keys(Ol).forEach(function(n){rE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ol[e]=Ol[n]})});function Dx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ol.hasOwnProperty(n)&&Ol[n]?(""+e).trim():e+"px"}function Nx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Dx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var sE=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lp(n,e){if(e){if(sE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function up(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cp=null;function Um(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fp=null,Ta=null,wa=null;function r_(n){if(n=Uu(n)){if(typeof fp!="function")throw Error(ae(280));var e=n.stateNode;e&&(e=od(e),fp(n.stateNode,n.type,e))}}function Ux(n){Ta?wa?wa.push(n):wa=[n]:Ta=n}function Ix(){if(Ta){var n=Ta,e=wa;if(wa=Ta=null,r_(n),e)for(n=0;n<e.length;n++)r_(e[n])}}function Ox(n,e){return n(e)}function Fx(){}var Nd=!1;function kx(n,e,t){if(Nd)return n(e,t);Nd=!0;try{return Ox(n,e,t)}finally{Nd=!1,(Ta!==null||wa!==null)&&(Fx(),Ix())}}function ou(n,e){var t=n.stateNode;if(t===null)return null;var i=od(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ae(231,e,typeof t));return t}var dp=!1;if(Or)try{var ul={};Object.defineProperty(ul,"passive",{get:function(){dp=!0}}),window.addEventListener("test",ul,ul),window.removeEventListener("test",ul,ul)}catch{dp=!1}function oE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Fl=!1,pf=null,mf=!1,hp=null,aE={onError:function(n){Fl=!0,pf=n}};function lE(n,e,t,i,r,s,o,a,l){Fl=!1,pf=null,oE.apply(aE,arguments)}function uE(n,e,t,i,r,s,o,a,l){if(lE.apply(this,arguments),Fl){if(Fl){var u=pf;Fl=!1,pf=null}else throw Error(ae(198));mf||(mf=!0,hp=u)}}function Io(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function zx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function s_(n){if(Io(n)!==n)throw Error(ae(188))}function cE(n){var e=n.alternate;if(!e){if(e=Io(n),e===null)throw Error(ae(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return s_(r),n;if(s===i)return s_(r),e;s=s.sibling}throw Error(ae(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(t.alternate!==i)throw Error(ae(190))}if(t.tag!==3)throw Error(ae(188));return t.stateNode.current===t?n:e}function Bx(n){return n=cE(n),n!==null?Hx(n):null}function Hx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Hx(n);if(e!==null)return e;n=n.sibling}return null}var Vx=_i.unstable_scheduleCallback,o_=_i.unstable_cancelCallback,fE=_i.unstable_shouldYield,dE=_i.unstable_requestPaint,Vt=_i.unstable_now,hE=_i.unstable_getCurrentPriorityLevel,Im=_i.unstable_ImmediatePriority,Gx=_i.unstable_UserBlockingPriority,gf=_i.unstable_NormalPriority,pE=_i.unstable_LowPriority,Wx=_i.unstable_IdlePriority,nd=null,dr=null;function mE(n){if(dr&&typeof dr.onCommitFiberRoot=="function")try{dr.onCommitFiberRoot(nd,n,void 0,(n.current.flags&128)===128)}catch{}}var $i=Math.clz32?Math.clz32:vE,gE=Math.log,_E=Math.LN2;function vE(n){return n>>>=0,n===0?32:31-(gE(n)/_E|0)|0}var ju=64,Yu=4194304;function Al(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function _f(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Al(a):(s&=o,s!==0&&(i=Al(s)))}else o=t&~r,o!==0?i=Al(o):s!==0&&(i=Al(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-$i(e),r=1<<t,i|=n[t],e&=~r;return i}function xE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-$i(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=xE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function pp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xx(){var n=ju;return ju<<=1,!(ju&4194240)&&(ju=64),n}function Ud(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Du(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-$i(e),n[e]=t}function SE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-$i(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Om(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-$i(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var mt=0;function jx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Yx,Fm,$x,qx,Kx,mp=!1,$u=[],ps=null,ms=null,gs=null,au=new Map,lu=new Map,is=[],ME="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function a_(n,e){switch(n){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":au.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lu.delete(e.pointerId)}}function cl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Uu(e),e!==null&&Fm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function EE(n,e,t,i,r){switch(e){case"focusin":return ps=cl(ps,n,e,t,i,r),!0;case"dragenter":return ms=cl(ms,n,e,t,i,r),!0;case"mouseover":return gs=cl(gs,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return au.set(s,cl(au.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,lu.set(s,cl(lu.get(s)||null,n,e,t,i,r)),!0}return!1}function Zx(n){var e=io(n.target);if(e!==null){var t=Io(e);if(t!==null){if(e=t.tag,e===13){if(e=zx(t),e!==null){n.blockedOn=e,Kx(n.priority,function(){$x(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=gp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);cp=i,t.target.dispatchEvent(i),cp=null}else return e=Uu(t),e!==null&&Fm(e),n.blockedOn=t,!1;e.shift()}return!0}function l_(n,e,t){jc(n)&&t.delete(e)}function TE(){mp=!1,ps!==null&&jc(ps)&&(ps=null),ms!==null&&jc(ms)&&(ms=null),gs!==null&&jc(gs)&&(gs=null),au.forEach(l_),lu.forEach(l_)}function fl(n,e){n.blockedOn===e&&(n.blockedOn=null,mp||(mp=!0,_i.unstable_scheduleCallback(_i.unstable_NormalPriority,TE)))}function uu(n){function e(r){return fl(r,n)}if(0<$u.length){fl($u[0],n);for(var t=1;t<$u.length;t++){var i=$u[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ps!==null&&fl(ps,n),ms!==null&&fl(ms,n),gs!==null&&fl(gs,n),au.forEach(e),lu.forEach(e),t=0;t<is.length;t++)i=is[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<is.length&&(t=is[0],t.blockedOn===null);)Zx(t),t.blockedOn===null&&is.shift()}var Aa=Wr.ReactCurrentBatchConfig,vf=!0;function wE(n,e,t,i){var r=mt,s=Aa.transition;Aa.transition=null;try{mt=1,km(n,e,t,i)}finally{mt=r,Aa.transition=s}}function AE(n,e,t,i){var r=mt,s=Aa.transition;Aa.transition=null;try{mt=4,km(n,e,t,i)}finally{mt=r,Aa.transition=s}}function km(n,e,t,i){if(vf){var r=gp(n,e,t,i);if(r===null)Wd(n,e,i,xf,t),a_(n,i);else if(EE(r,n,e,t,i))i.stopPropagation();else if(a_(n,i),e&4&&-1<ME.indexOf(n)){for(;r!==null;){var s=Uu(r);if(s!==null&&Yx(s),s=gp(n,e,t,i),s===null&&Wd(n,e,i,xf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wd(n,e,i,null,t)}}var xf=null;function gp(n,e,t,i){if(xf=null,n=Um(i),n=io(n),n!==null)if(e=Io(n),e===null)n=null;else if(t=e.tag,t===13){if(n=zx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return xf=n,null}function Qx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hE()){case Im:return 1;case Gx:return 4;case gf:case pE:return 16;case Wx:return 536870912;default:return 16}default:return 16}}var os=null,zm=null,Yc=null;function Jx(){if(Yc)return Yc;var n,e=zm,t=e.length,i,r="value"in os?os.value:os.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Yc=r.slice(n,1<i?1-i:void 0)}function $c(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function qu(){return!0}function u_(){return!1}function yi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qu:u_,this.isPropagationStopped=u_,this}return kt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),e}var il={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bm=yi(il),Nu=kt({},il,{view:0,detail:0}),CE=yi(Nu),Id,Od,dl,id=kt({},Nu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==dl&&(dl&&n.type==="mousemove"?(Id=n.screenX-dl.screenX,Od=n.screenY-dl.screenY):Od=Id=0,dl=n),Id)},movementY:function(n){return"movementY"in n?n.movementY:Od}}),c_=yi(id),RE=kt({},id,{dataTransfer:0}),PE=yi(RE),bE=kt({},Nu,{relatedTarget:0}),Fd=yi(bE),LE=kt({},il,{animationName:0,elapsedTime:0,pseudoElement:0}),DE=yi(LE),NE=kt({},il,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),UE=yi(NE),IE=kt({},il,{data:0}),f_=yi(IE),OE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=kE[n])?!!e[n]:!1}function Hm(){return zE}var BE=kt({},Nu,{key:function(n){if(n.key){var e=OE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=$c(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?FE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hm,charCode:function(n){return n.type==="keypress"?$c(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$c(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),HE=yi(BE),VE=kt({},id,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),d_=yi(VE),GE=kt({},Nu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hm}),WE=yi(GE),XE=kt({},il,{propertyName:0,elapsedTime:0,pseudoElement:0}),jE=yi(XE),YE=kt({},id,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$E=yi(YE),qE=[9,13,27,32],Vm=Or&&"CompositionEvent"in window,kl=null;Or&&"documentMode"in document&&(kl=document.documentMode);var KE=Or&&"TextEvent"in window&&!kl,ey=Or&&(!Vm||kl&&8<kl&&11>=kl),h_=" ",p_=!1;function ty(n,e){switch(n){case"keyup":return qE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ny(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ua=!1;function ZE(n,e){switch(n){case"compositionend":return ny(e);case"keypress":return e.which!==32?null:(p_=!0,h_);case"textInput":return n=e.data,n===h_&&p_?null:n;default:return null}}function QE(n,e){if(ua)return n==="compositionend"||!Vm&&ty(n,e)?(n=Jx(),Yc=zm=os=null,ua=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ey&&e.locale!=="ko"?null:e.data;default:return null}}var JE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function m_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!JE[n.type]:e==="textarea"}function iy(n,e,t,i){Ux(i),e=yf(e,"onChange"),0<e.length&&(t=new Bm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var zl=null,cu=null;function eT(n){py(n,0)}function rd(n){var e=da(n);if(Cx(e))return n}function tT(n,e){if(n==="change")return e}var ry=!1;if(Or){var kd;if(Or){var zd="oninput"in document;if(!zd){var g_=document.createElement("div");g_.setAttribute("oninput","return;"),zd=typeof g_.oninput=="function"}kd=zd}else kd=!1;ry=kd&&(!document.documentMode||9<document.documentMode)}function __(){zl&&(zl.detachEvent("onpropertychange",sy),cu=zl=null)}function sy(n){if(n.propertyName==="value"&&rd(cu)){var e=[];iy(e,cu,n,Um(n)),kx(eT,e)}}function nT(n,e,t){n==="focusin"?(__(),zl=e,cu=t,zl.attachEvent("onpropertychange",sy)):n==="focusout"&&__()}function iT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rd(cu)}function rT(n,e){if(n==="click")return rd(e)}function sT(n,e){if(n==="input"||n==="change")return rd(e)}function oT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ki=typeof Object.is=="function"?Object.is:oT;function fu(n,e){if(Ki(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Qh.call(e,r)||!Ki(n[r],e[r]))return!1}return!0}function v_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function x_(n,e){var t=v_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=v_(t)}}function oy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?oy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ay(){for(var n=window,e=hf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=hf(n.document)}return e}function Gm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function aT(n){var e=ay(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&oy(t.ownerDocument.documentElement,t)){if(i!==null&&Gm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=x_(t,s);var o=x_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lT=Or&&"documentMode"in document&&11>=document.documentMode,ca=null,_p=null,Bl=null,vp=!1;function y_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;vp||ca==null||ca!==hf(i)||(i=ca,"selectionStart"in i&&Gm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bl&&fu(Bl,i)||(Bl=i,i=yf(_p,"onSelect"),0<i.length&&(e=new Bm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ca)))}function Ku(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var fa={animationend:Ku("Animation","AnimationEnd"),animationiteration:Ku("Animation","AnimationIteration"),animationstart:Ku("Animation","AnimationStart"),transitionend:Ku("Transition","TransitionEnd")},Bd={},ly={};Or&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function sd(n){if(Bd[n])return Bd[n];if(!fa[n])return n;var e=fa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ly)return Bd[n]=e[t];return n}var uy=sd("animationend"),cy=sd("animationiteration"),fy=sd("animationstart"),dy=sd("transitionend"),hy=new Map,S_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Us(n,e){hy.set(n,e),Uo(e,[n])}for(var Hd=0;Hd<S_.length;Hd++){var Vd=S_[Hd],uT=Vd.toLowerCase(),cT=Vd[0].toUpperCase()+Vd.slice(1);Us(uT,"on"+cT)}Us(uy,"onAnimationEnd");Us(cy,"onAnimationIteration");Us(fy,"onAnimationStart");Us("dblclick","onDoubleClick");Us("focusin","onFocus");Us("focusout","onBlur");Us(dy,"onTransitionEnd");ka("onMouseEnter",["mouseout","mouseover"]);ka("onMouseLeave",["mouseout","mouseover"]);ka("onPointerEnter",["pointerout","pointerover"]);ka("onPointerLeave",["pointerout","pointerover"]);Uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cl));function M_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,uE(i,e,void 0,n),n.currentTarget=null}function py(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;M_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;M_(r,a,u),s=l}}}if(mf)throw n=hp,mf=!1,hp=null,n}function Et(n,e){var t=e[Ep];t===void 0&&(t=e[Ep]=new Set);var i=n+"__bubble";t.has(i)||(my(e,n,2,!1),t.add(i))}function Gd(n,e,t){var i=0;e&&(i|=4),my(t,n,i,e)}var Zu="_reactListening"+Math.random().toString(36).slice(2);function du(n){if(!n[Zu]){n[Zu]=!0,Mx.forEach(function(t){t!=="selectionchange"&&(fT.has(t)||Gd(t,!1,n),Gd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Zu]||(e[Zu]=!0,Gd("selectionchange",!1,e))}}function my(n,e,t,i){switch(Qx(e)){case 1:var r=wE;break;case 4:r=AE;break;default:r=km}t=r.bind(null,e,t,n),r=void 0,!dp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Wd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=io(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}kx(function(){var u=s,c=Um(t),d=[];e:{var f=hy.get(n);if(f!==void 0){var p=Bm,_=n;switch(n){case"keypress":if($c(t)===0)break e;case"keydown":case"keyup":p=HE;break;case"focusin":_="focus",p=Fd;break;case"focusout":_="blur",p=Fd;break;case"beforeblur":case"afterblur":p=Fd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=c_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=PE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=WE;break;case uy:case cy:case fy:p=DE;break;case dy:p=jE;break;case"scroll":p=CE;break;case"wheel":p=$E;break;case"copy":case"cut":case"paste":p=UE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=d_}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=ou(v,h),S!=null&&g.push(hu(v,S,x)))),m)break;v=v.return}0<g.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==cp&&(_=t.relatedTarget||t.fromElement)&&(io(_)||_[Fr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?io(_):null,_!==null&&(m=Io(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=c_,S="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=d_,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:da(p),x=_==null?f:da(_),f=new g(S,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,S=null,io(c)===u&&(g=new g(h,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,S=g),m=S,p&&_)t:{for(g=p,h=_,v=0,x=g;x;x=ko(x))v++;for(x=0,S=h;S;S=ko(S))x++;for(;0<v-x;)g=ko(g),v--;for(;0<x-v;)h=ko(h),x--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=ko(g),h=ko(h)}g=null}else g=null;p!==null&&E_(d,f,p,g,!1),_!==null&&m!==null&&E_(d,m,_,g,!0)}}e:{if(f=u?da(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=tT;else if(m_(f))if(ry)C=sT;else{C=iT;var T=nT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=rT);if(C&&(C=C(n,u))){iy(d,C,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&sp(f,"number",f.value)}switch(T=u?da(u):window,n){case"focusin":(m_(T)||T.contentEditable==="true")&&(ca=T,_p=u,Bl=null);break;case"focusout":Bl=_p=ca=null;break;case"mousedown":vp=!0;break;case"contextmenu":case"mouseup":case"dragend":vp=!1,y_(d,t,c);break;case"selectionchange":if(lT)break;case"keydown":case"keyup":y_(d,t,c)}var E;if(Vm)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ua?ty(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(ey&&t.locale!=="ko"&&(ua||P!=="onCompositionStart"?P==="onCompositionEnd"&&ua&&(E=Jx()):(os=c,zm="value"in os?os.value:os.textContent,ua=!0)),T=yf(u,P),0<T.length&&(P=new f_(P,n,null,t,c),d.push({event:P,listeners:T}),E?P.data=E:(E=ny(t),E!==null&&(P.data=E)))),(E=KE?ZE(n,t):QE(n,t))&&(u=yf(u,"onBeforeInput"),0<u.length&&(c=new f_("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=E))}py(d,e)})}function hu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function yf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ou(n,t),s!=null&&i.unshift(hu(n,s,r)),s=ou(n,e),s!=null&&i.push(hu(n,s,r))),n=n.return}return i}function ko(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function E_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ou(t,s),l!=null&&o.unshift(hu(t,l,a))):r||(l=ou(t,s),l!=null&&o.push(hu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var dT=/\r\n?/g,hT=/\u0000|\uFFFD/g;function T_(n){return(typeof n=="string"?n:""+n).replace(dT,`
`).replace(hT,"")}function Qu(n,e,t){if(e=T_(e),T_(n)!==e&&t)throw Error(ae(425))}function Sf(){}var xp=null,yp=null;function Sp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mp=typeof setTimeout=="function"?setTimeout:void 0,pT=typeof clearTimeout=="function"?clearTimeout:void 0,w_=typeof Promise=="function"?Promise:void 0,mT=typeof queueMicrotask=="function"?queueMicrotask:typeof w_<"u"?function(n){return w_.resolve(null).then(n).catch(gT)}:Mp;function gT(n){setTimeout(function(){throw n})}function Xd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),uu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);uu(e)}function _s(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function A_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var rl=Math.random().toString(36).slice(2),rr="__reactFiber$"+rl,pu="__reactProps$"+rl,Fr="__reactContainer$"+rl,Ep="__reactEvents$"+rl,_T="__reactListeners$"+rl,vT="__reactHandles$"+rl;function io(n){var e=n[rr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Fr]||t[rr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=A_(n);n!==null;){if(t=n[rr])return t;n=A_(n)}return e}n=t,t=n.parentNode}return null}function Uu(n){return n=n[rr]||n[Fr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function da(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ae(33))}function od(n){return n[pu]||null}var Tp=[],ha=-1;function Is(n){return{current:n}}function At(n){0>ha||(n.current=Tp[ha],Tp[ha]=null,ha--)}function Mt(n,e){ha++,Tp[ha]=n.current,n.current=e}var Rs={},Rn=Is(Rs),$n=Is(!1),Eo=Rs;function za(n,e){var t=n.type.contextTypes;if(!t)return Rs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function qn(n){return n=n.childContextTypes,n!=null}function Mf(){At($n),At(Rn)}function C_(n,e,t){if(Rn.current!==Rs)throw Error(ae(168));Mt(Rn,e),Mt($n,t)}function gy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,nE(n)||"Unknown",r));return kt({},t,i)}function Ef(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Rs,Eo=Rn.current,Mt(Rn,n),Mt($n,$n.current),!0}function R_(n,e,t){var i=n.stateNode;if(!i)throw Error(ae(169));t?(n=gy(n,e,Eo),i.__reactInternalMemoizedMergedChildContext=n,At($n),At(Rn),Mt(Rn,n)):At($n),Mt($n,t)}var Cr=null,ad=!1,jd=!1;function _y(n){Cr===null?Cr=[n]:Cr.push(n)}function xT(n){ad=!0,_y(n)}function Os(){if(!jd&&Cr!==null){jd=!0;var n=0,e=mt;try{var t=Cr;for(mt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Cr=null,ad=!1}catch(r){throw Cr!==null&&(Cr=Cr.slice(n+1)),Vx(Im,Os),r}finally{mt=e,jd=!1}}return null}var pa=[],ma=0,Tf=null,wf=0,Ti=[],wi=0,To=null,br=1,Lr="";function $s(n,e){pa[ma++]=wf,pa[ma++]=Tf,Tf=n,wf=e}function vy(n,e,t){Ti[wi++]=br,Ti[wi++]=Lr,Ti[wi++]=To,To=n;var i=br;n=Lr;var r=32-$i(i)-1;i&=~(1<<r),t+=1;var s=32-$i(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,br=1<<32-$i(e)+r|t<<r|i,Lr=s+n}else br=1<<s|t<<r|i,Lr=n}function Wm(n){n.return!==null&&($s(n,1),vy(n,1,0))}function Xm(n){for(;n===Tf;)Tf=pa[--ma],pa[ma]=null,wf=pa[--ma],pa[ma]=null;for(;n===To;)To=Ti[--wi],Ti[wi]=null,Lr=Ti[--wi],Ti[wi]=null,br=Ti[--wi],Ti[wi]=null}var pi=null,di=null,bt=!1,Wi=null;function xy(n,e){var t=Ri(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function P_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,pi=n,di=_s(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,pi=n,di=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=To!==null?{id:br,overflow:Lr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ri(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,pi=n,di=null,!0):!1;default:return!1}}function wp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ap(n){if(bt){var e=di;if(e){var t=e;if(!P_(n,e)){if(wp(n))throw Error(ae(418));e=_s(t.nextSibling);var i=pi;e&&P_(n,e)?xy(i,t):(n.flags=n.flags&-4097|2,bt=!1,pi=n)}}else{if(wp(n))throw Error(ae(418));n.flags=n.flags&-4097|2,bt=!1,pi=n}}}function b_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pi=n}function Ju(n){if(n!==pi)return!1;if(!bt)return b_(n),bt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Sp(n.type,n.memoizedProps)),e&&(e=di)){if(wp(n))throw yy(),Error(ae(418));for(;e;)xy(n,e),e=_s(e.nextSibling)}if(b_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ae(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){di=_s(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}di=null}}else di=pi?_s(n.stateNode.nextSibling):null;return!0}function yy(){for(var n=di;n;)n=_s(n.nextSibling)}function Ba(){di=pi=null,bt=!1}function jm(n){Wi===null?Wi=[n]:Wi.push(n)}var yT=Wr.ReactCurrentBatchConfig;function Vi(n,e){if(n&&n.defaultProps){e=kt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Af=Is(null),Cf=null,ga=null,Ym=null;function $m(){Ym=ga=Cf=null}function qm(n){var e=Af.current;At(Af),n._currentValue=e}function Cp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ca(n,e){Cf=n,Ym=ga=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Yn=!0),n.firstContext=null)}function Ui(n){var e=n._currentValue;if(Ym!==n)if(n={context:n,memoizedValue:e,next:null},ga===null){if(Cf===null)throw Error(ae(308));ga=n,Cf.dependencies={lanes:0,firstContext:n}}else ga=ga.next=n;return e}var ro=null;function Km(n){ro===null?ro=[n]:ro.push(n)}function Sy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Km(e)):(t.next=r.next,r.next=t),e.interleaved=t,kr(n,i)}function kr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ns=!1;function Zm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function My(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ur(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function vs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,kr(n,t)}return r=i.interleaved,r===null?(e.next=e,Km(i)):(e.next=r.next,r.next=e),i.interleaved=e,kr(n,t)}function qc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Om(n,t)}}function L_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Rf(n,e,t,i){var r=n.updateQueue;ns=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(f=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=kt({},d,f);break e;case 2:ns=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ao|=o,n.lanes=o,n.memoizedState=d}}function D_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Ey=new Sx.Component().refs;function Rp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:kt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ld={isMounted:function(n){return(n=n._reactInternals)?Io(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Bn(),r=ys(n),s=Ur(i,r);s.payload=e,t!=null&&(s.callback=t),e=vs(n,s,r),e!==null&&(qi(e,n,r,i),qc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Bn(),r=ys(n),s=Ur(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=vs(n,s,r),e!==null&&(qi(e,n,r,i),qc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Bn(),i=ys(n),r=Ur(t,i);r.tag=2,e!=null&&(r.callback=e),e=vs(n,r,i),e!==null&&(qi(e,n,i,t),qc(e,n,i))}};function N_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!fu(t,i)||!fu(r,s):!0}function Ty(n,e,t){var i=!1,r=Rs,s=e.contextType;return typeof s=="object"&&s!==null?s=Ui(s):(r=qn(e)?Eo:Rn.current,i=e.contextTypes,s=(i=i!=null)?za(n,r):Rs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ld,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function U_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ld.enqueueReplaceState(e,e.state,null)}function Pp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Ey,Zm(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ui(s):(s=qn(e)?Eo:Rn.current,r.context=za(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ld.enqueueReplaceState(r,r.state,null),Rf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function hl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ae(309));var i=t.stateNode}if(!i)throw Error(ae(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Ey&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ae(284));if(!t._owner)throw Error(ae(290,n))}return n}function ec(n,e){throw n=Object.prototype.toString.call(e),Error(ae(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function I_(n){var e=n._init;return e(n._payload)}function wy(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ss(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,S){return v===null||v.tag!==6?(v=Jd(x,h.mode,S),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,S){var C=x.type;return C===la?c(h,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ts&&I_(C)===v.type)?(S=r(v,x.props),S.ref=hl(h,v,x),S.return=h,S):(S=tf(x.type,x.key,x.props,null,h.mode,S),S.ref=hl(h,v,x),S.return=h,S)}function u(h,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=eh(x,h.mode,S),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,S,C){return v===null||v.tag!==7?(v=ho(x,h.mode,S,C),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Jd(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gu:return x=tf(v.type,v.key,v.props,null,h.mode,x),x.ref=hl(h,null,v),x.return=h,x;case aa:return v=eh(v,h.mode,x),v.return=h,v;case ts:var S=v._init;return d(h,S(v._payload),x)}if(wl(v)||ll(v))return v=ho(v,h.mode,x,null),v.return=h,v;ec(h,v)}return null}function f(h,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(h,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gu:return x.key===C?l(h,v,x,S):null;case aa:return x.key===C?u(h,v,x,S):null;case ts:return C=x._init,f(h,v,C(x._payload),S)}if(wl(x)||ll(x))return C!==null?null:c(h,v,x,S,null);ec(h,x)}return null}function p(h,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(v,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gu:return h=h.get(S.key===null?x:S.key)||null,l(v,h,S,C);case aa:return h=h.get(S.key===null?x:S.key)||null,u(v,h,S,C);case ts:var T=S._init;return p(h,v,x,T(S._payload),C)}if(wl(S)||ll(S))return h=h.get(x)||null,c(v,h,S,C,null);ec(v,S)}return null}function _(h,v,x,S){for(var C=null,T=null,E=v,P=v=0,M=null;E!==null&&P<x.length;P++){E.index>P?(M=E,E=null):M=E.sibling;var y=f(h,E,x[P],S);if(y===null){E===null&&(E=M);break}n&&E&&y.alternate===null&&e(h,E),v=s(y,v,P),T===null?C=y:T.sibling=y,T=y,E=M}if(P===x.length)return t(h,E),bt&&$s(h,P),C;if(E===null){for(;P<x.length;P++)E=d(h,x[P],S),E!==null&&(v=s(E,v,P),T===null?C=E:T.sibling=E,T=E);return bt&&$s(h,P),C}for(E=i(h,E);P<x.length;P++)M=p(E,h,P,x[P],S),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?P:M.key),v=s(M,v,P),T===null?C=M:T.sibling=M,T=M);return n&&E.forEach(function(N){return e(h,N)}),bt&&$s(h,P),C}function g(h,v,x,S){var C=ll(x);if(typeof C!="function")throw Error(ae(150));if(x=C.call(x),x==null)throw Error(ae(151));for(var T=C=null,E=v,P=v=0,M=null,y=x.next();E!==null&&!y.done;P++,y=x.next()){E.index>P?(M=E,E=null):M=E.sibling;var N=f(h,E,y.value,S);if(N===null){E===null&&(E=M);break}n&&E&&N.alternate===null&&e(h,E),v=s(N,v,P),T===null?C=N:T.sibling=N,T=N,E=M}if(y.done)return t(h,E),bt&&$s(h,P),C;if(E===null){for(;!y.done;P++,y=x.next())y=d(h,y.value,S),y!==null&&(v=s(y,v,P),T===null?C=y:T.sibling=y,T=y);return bt&&$s(h,P),C}for(E=i(h,E);!y.done;P++,y=x.next())y=p(E,h,P,y.value,S),y!==null&&(n&&y.alternate!==null&&E.delete(y.key===null?P:y.key),v=s(y,v,P),T===null?C=y:T.sibling=y,T=y);return n&&E.forEach(function(U){return e(h,U)}),bt&&$s(h,P),C}function m(h,v,x,S){if(typeof x=="object"&&x!==null&&x.type===la&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Gu:e:{for(var C=x.key,T=v;T!==null;){if(T.key===C){if(C=x.type,C===la){if(T.tag===7){t(h,T.sibling),v=r(T,x.props.children),v.return=h,h=v;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ts&&I_(C)===T.type){t(h,T.sibling),v=r(T,x.props),v.ref=hl(h,T,x),v.return=h,h=v;break e}t(h,T);break}else e(h,T);T=T.sibling}x.type===la?(v=ho(x.props.children,h.mode,S,x.key),v.return=h,h=v):(S=tf(x.type,x.key,x.props,null,h.mode,S),S.ref=hl(h,v,x),S.return=h,h=S)}return o(h);case aa:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=eh(x,h.mode,S),v.return=h,h=v}return o(h);case ts:return T=x._init,m(h,v,T(x._payload),S)}if(wl(x))return _(h,v,x,S);if(ll(x))return g(h,v,x,S);ec(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=Jd(x,h.mode,S),v.return=h,h=v),o(h)):t(h,v)}return m}var Ha=wy(!0),Ay=wy(!1),Iu={},hr=Is(Iu),mu=Is(Iu),gu=Is(Iu);function so(n){if(n===Iu)throw Error(ae(174));return n}function Qm(n,e){switch(Mt(gu,e),Mt(mu,n),Mt(hr,Iu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ap(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ap(e,n)}At(hr),Mt(hr,e)}function Va(){At(hr),At(mu),At(gu)}function Cy(n){so(gu.current);var e=so(hr.current),t=ap(e,n.type);e!==t&&(Mt(mu,n),Mt(hr,t))}function Jm(n){mu.current===n&&(At(hr),At(mu))}var Ut=Is(0);function Pf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yd=[];function eg(){for(var n=0;n<Yd.length;n++)Yd[n]._workInProgressVersionPrimary=null;Yd.length=0}var Kc=Wr.ReactCurrentDispatcher,$d=Wr.ReactCurrentBatchConfig,wo=0,Ft=null,Kt=null,an=null,bf=!1,Hl=!1,_u=0,ST=0;function vn(){throw Error(ae(321))}function tg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ki(n[t],e[t]))return!1;return!0}function ng(n,e,t,i,r,s){if(wo=s,Ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kc.current=n===null||n.memoizedState===null?wT:AT,n=t(i,r),Hl){s=0;do{if(Hl=!1,_u=0,25<=s)throw Error(ae(301));s+=1,an=Kt=null,e.updateQueue=null,Kc.current=CT,n=t(i,r)}while(Hl)}if(Kc.current=Lf,e=Kt!==null&&Kt.next!==null,wo=0,an=Kt=Ft=null,bf=!1,e)throw Error(ae(300));return n}function ig(){var n=_u!==0;return _u=0,n}function Ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Ft.memoizedState=an=n:an=an.next=n,an}function Ii(){if(Kt===null){var n=Ft.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var e=an===null?Ft.memoizedState:an.next;if(e!==null)an=e,Kt=n;else{if(n===null)throw Error(ae(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},an===null?Ft.memoizedState=an=n:an=an.next=n}return an}function vu(n,e){return typeof e=="function"?e(n):e}function qd(n){var e=Ii(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=Kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((wo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ft.lanes|=c,Ao|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Ki(i,e.memoizedState)||(Yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ft.lanes|=s,Ao|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Kd(n){var e=Ii(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Ki(s,e.memoizedState)||(Yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ry(){}function Py(n,e){var t=Ft,i=Ii(),r=e(),s=!Ki(i.memoizedState,r);if(s&&(i.memoizedState=r,Yn=!0),i=i.queue,rg(Dy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||an!==null&&an.memoizedState.tag&1){if(t.flags|=2048,xu(9,Ly.bind(null,t,i,r,e),void 0,null),un===null)throw Error(ae(349));wo&30||by(t,e,r)}return r}function by(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ft.updateQueue,e===null?(e={lastEffect:null,stores:null},Ft.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ly(n,e,t,i){e.value=t,e.getSnapshot=i,Ny(e)&&Uy(n)}function Dy(n,e,t){return t(function(){Ny(e)&&Uy(n)})}function Ny(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ki(n,t)}catch{return!0}}function Uy(n){var e=kr(n,1);e!==null&&qi(e,n,1,-1)}function O_(n){var e=Ji();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vu,lastRenderedState:n},e.queue=n,n=n.dispatch=TT.bind(null,Ft,n),[e.memoizedState,n]}function xu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ft.updateQueue,e===null?(e={lastEffect:null,stores:null},Ft.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Iy(){return Ii().memoizedState}function Zc(n,e,t,i){var r=Ji();Ft.flags|=n,r.memoizedState=xu(1|e,t,void 0,i===void 0?null:i)}function ud(n,e,t,i){var r=Ii();i=i===void 0?null:i;var s=void 0;if(Kt!==null){var o=Kt.memoizedState;if(s=o.destroy,i!==null&&tg(i,o.deps)){r.memoizedState=xu(e,t,s,i);return}}Ft.flags|=n,r.memoizedState=xu(1|e,t,s,i)}function F_(n,e){return Zc(8390656,8,n,e)}function rg(n,e){return ud(2048,8,n,e)}function Oy(n,e){return ud(4,2,n,e)}function Fy(n,e){return ud(4,4,n,e)}function ky(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function zy(n,e,t){return t=t!=null?t.concat([n]):null,ud(4,4,ky.bind(null,e,n),t)}function sg(){}function By(n,e){var t=Ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&tg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Hy(n,e){var t=Ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&tg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Vy(n,e,t){return wo&21?(Ki(t,e)||(t=Xx(),Ft.lanes|=t,Ao|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=t)}function MT(n,e){var t=mt;mt=t!==0&&4>t?t:4,n(!0);var i=$d.transition;$d.transition={};try{n(!1),e()}finally{mt=t,$d.transition=i}}function Gy(){return Ii().memoizedState}function ET(n,e,t){var i=ys(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Wy(n))Xy(e,t);else if(t=Sy(n,e,t,i),t!==null){var r=Bn();qi(t,n,i,r),jy(t,e,i)}}function TT(n,e,t){var i=ys(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Wy(n))Xy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Ki(a,o)){var l=e.interleaved;l===null?(r.next=r,Km(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Sy(n,e,r,i),t!==null&&(r=Bn(),qi(t,n,i,r),jy(t,e,i))}}function Wy(n){var e=n.alternate;return n===Ft||e!==null&&e===Ft}function Xy(n,e){Hl=bf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function jy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Om(n,t)}}var Lf={readContext:Ui,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},wT={readContext:Ui,useCallback:function(n,e){return Ji().memoizedState=[n,e===void 0?null:e],n},useContext:Ui,useEffect:F_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Zc(4194308,4,ky.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Zc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Zc(4,2,n,e)},useMemo:function(n,e){var t=Ji();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ji();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=ET.bind(null,Ft,n),[i.memoizedState,n]},useRef:function(n){var e=Ji();return n={current:n},e.memoizedState=n},useState:O_,useDebugValue:sg,useDeferredValue:function(n){return Ji().memoizedState=n},useTransition:function(){var n=O_(!1),e=n[0];return n=MT.bind(null,n[1]),Ji().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ft,r=Ji();if(bt){if(t===void 0)throw Error(ae(407));t=t()}else{if(t=e(),un===null)throw Error(ae(349));wo&30||by(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,F_(Dy.bind(null,i,s,n),[n]),i.flags|=2048,xu(9,Ly.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ji(),e=un.identifierPrefix;if(bt){var t=Lr,i=br;t=(i&~(1<<32-$i(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=_u++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ST++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},AT={readContext:Ui,useCallback:By,useContext:Ui,useEffect:rg,useImperativeHandle:zy,useInsertionEffect:Oy,useLayoutEffect:Fy,useMemo:Hy,useReducer:qd,useRef:Iy,useState:function(){return qd(vu)},useDebugValue:sg,useDeferredValue:function(n){var e=Ii();return Vy(e,Kt.memoizedState,n)},useTransition:function(){var n=qd(vu)[0],e=Ii().memoizedState;return[n,e]},useMutableSource:Ry,useSyncExternalStore:Py,useId:Gy,unstable_isNewReconciler:!1},CT={readContext:Ui,useCallback:By,useContext:Ui,useEffect:rg,useImperativeHandle:zy,useInsertionEffect:Oy,useLayoutEffect:Fy,useMemo:Hy,useReducer:Kd,useRef:Iy,useState:function(){return Kd(vu)},useDebugValue:sg,useDeferredValue:function(n){var e=Ii();return Kt===null?e.memoizedState=n:Vy(e,Kt.memoizedState,n)},useTransition:function(){var n=Kd(vu)[0],e=Ii().memoizedState;return[n,e]},useMutableSource:Ry,useSyncExternalStore:Py,useId:Gy,unstable_isNewReconciler:!1};function Ga(n,e){try{var t="",i=e;do t+=tE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Zd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function bp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var RT=typeof WeakMap=="function"?WeakMap:Map;function Yy(n,e,t){t=Ur(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Nf||(Nf=!0,Bp=i),bp(n,e)},t}function $y(n,e,t){t=Ur(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){bp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){bp(n,e),typeof i!="function"&&(xs===null?xs=new Set([this]):xs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function k_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new RT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=VT.bind(null,n,e,t),e.then(n,n))}function z_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function B_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ur(-1,1),e.tag=2,vs(t,e,1))),t.lanes|=1),n)}var PT=Wr.ReactCurrentOwner,Yn=!1;function Un(n,e,t,i){e.child=n===null?Ay(e,null,t,i):Ha(e,n.child,t,i)}function H_(n,e,t,i,r){t=t.render;var s=e.ref;return Ca(e,r),i=ng(n,e,t,i,s,r),t=ig(),n!==null&&!Yn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,zr(n,e,r)):(bt&&t&&Wm(e),e.flags|=1,Un(n,e,i,r),e.child)}function V_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!hg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,qy(n,e,s,i,r)):(n=tf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:fu,t(o,i)&&n.ref===e.ref)return zr(n,e,r)}return e.flags|=1,n=Ss(s,i),n.ref=e.ref,n.return=e,e.child=n}function qy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(fu(s,i)&&n.ref===e.ref)if(Yn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Yn=!0);else return e.lanes=n.lanes,zr(n,e,r)}return Lp(n,e,t,i,r)}function Ky(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(va,ai),ai|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Mt(va,ai),ai|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Mt(va,ai),ai|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Mt(va,ai),ai|=i;return Un(n,e,r,t),e.child}function Zy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Lp(n,e,t,i,r){var s=qn(t)?Eo:Rn.current;return s=za(e,s),Ca(e,r),t=ng(n,e,t,i,s,r),i=ig(),n!==null&&!Yn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,zr(n,e,r)):(bt&&i&&Wm(e),e.flags|=1,Un(n,e,t,r),e.child)}function G_(n,e,t,i,r){if(qn(t)){var s=!0;Ef(e)}else s=!1;if(Ca(e,r),e.stateNode===null)Qc(n,e),Ty(e,t,i),Pp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ui(u):(u=qn(t)?Eo:Rn.current,u=za(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&U_(e,o,i,u),ns=!1;var f=e.memoizedState;o.state=f,Rf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||$n.current||ns?(typeof c=="function"&&(Rp(e,t,c,i),l=e.memoizedState),(a=ns||N_(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,My(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vi(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ui(l):(l=qn(t)?Eo:Rn.current,l=za(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&U_(e,o,i,l),ns=!1,f=e.memoizedState,o.state=f,Rf(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||$n.current||ns?(typeof p=="function"&&(Rp(e,t,p,i),_=e.memoizedState),(u=ns||N_(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Dp(n,e,t,i,s,r)}function Dp(n,e,t,i,r,s){Zy(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&R_(e,t,!1),zr(n,e,s);i=e.stateNode,PT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ha(e,n.child,null,s),e.child=Ha(e,null,a,s)):Un(n,e,a,s),e.memoizedState=i.state,r&&R_(e,t,!0),e.child}function Qy(n){var e=n.stateNode;e.pendingContext?C_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&C_(n,e.context,!1),Qm(n,e.containerInfo)}function W_(n,e,t,i,r){return Ba(),jm(r),e.flags|=256,Un(n,e,t,i),e.child}var Np={dehydrated:null,treeContext:null,retryLane:0};function Up(n){return{baseLanes:n,cachePool:null,transitions:null}}function Jy(n,e,t){var i=e.pendingProps,r=Ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Mt(Ut,r&1),n===null)return Ap(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dd(o,i,0,null),n=ho(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Up(t),e.memoizedState=Np,n):og(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return bT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ss(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ss(a,s):(s=ho(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Up(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Np,i}return s=n.child,n=s.sibling,i=Ss(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function og(n,e){return e=dd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function tc(n,e,t,i){return i!==null&&jm(i),Ha(e,n.child,null,t),n=og(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function bT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Zd(Error(ae(422))),tc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=dd({mode:"visible",children:i.children},r,0,null),s=ho(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ha(e,n.child,null,o),e.child.memoizedState=Up(o),e.memoizedState=Np,s);if(!(e.mode&1))return tc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Zd(s,i,void 0),tc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Yn||a){if(i=un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,kr(n,r),qi(i,n,r,-1))}return dg(),i=Zd(Error(ae(421))),tc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=GT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,di=_s(r.nextSibling),pi=e,bt=!0,Wi=null,n!==null&&(Ti[wi++]=br,Ti[wi++]=Lr,Ti[wi++]=To,br=n.id,Lr=n.overflow,To=e),e=og(e,i.children),e.flags|=4096,e)}function X_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Cp(n.return,e,t)}function Qd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function eS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Un(n,e,i.children,t),i=Ut.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&X_(n,t,e);else if(n.tag===19)X_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Mt(Ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Pf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Qd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Pf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Qd(e,!0,t,null,s);break;case"together":Qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function zr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ao|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ae(153));if(e.child!==null){for(n=e.child,t=Ss(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ss(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function LT(n,e,t){switch(e.tag){case 3:Qy(e),Ba();break;case 5:Cy(e);break;case 1:qn(e.type)&&Ef(e);break;case 4:Qm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(Af,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Ut,Ut.current&1),e.flags|=128,null):t&e.child.childLanes?Jy(n,e,t):(Mt(Ut,Ut.current&1),n=zr(n,e,t),n!==null?n.sibling:null);Mt(Ut,Ut.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return eS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Ut,Ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Ky(n,e,t)}return zr(n,e,t)}var tS,Ip,nS,iS;tS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ip=function(){};nS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,so(hr.current);var s=null;switch(t){case"input":r=ip(n,r),i=ip(n,i),s=[];break;case"select":r=kt({},r,{value:void 0}),i=kt({},i,{value:void 0}),s=[];break;case"textarea":r=op(n,r),i=op(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Sf)}lp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ru.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ru.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Et("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};iS=function(n,e,t,i){t!==i&&(e.flags|=4)};function pl(n,e){if(!bt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function xn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function DT(n,e,t){var i=e.pendingProps;switch(Xm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(e),null;case 1:return qn(e.type)&&Mf(),xn(e),null;case 3:return i=e.stateNode,Va(),At($n),At(Rn),eg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ju(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wi!==null&&(Gp(Wi),Wi=null))),Ip(n,e),xn(e),null;case 5:Jm(e);var r=so(gu.current);if(t=e.type,n!==null&&e.stateNode!=null)nS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return xn(e),null}if(n=so(hr.current),Ju(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[rr]=e,i[pu]=s,n=(e.mode&1)!==0,t){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<Cl.length;r++)Et(Cl[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":e_(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":n_(i,s),Et("invalid",i)}lp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qu(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qu(i.textContent,a,n),r=["children",""+a]):ru.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Et("scroll",i)}switch(t){case"input":Wu(i),t_(i,s,!0);break;case"textarea":Wu(i),i_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=bx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[rr]=e,n[pu]=i,tS(n,e,!1,!1),e.stateNode=n;e:{switch(o=up(t,i),t){case"dialog":Et("cancel",n),Et("close",n),r=i;break;case"iframe":case"object":case"embed":Et("load",n),r=i;break;case"video":case"audio":for(r=0;r<Cl.length;r++)Et(Cl[r],n);r=i;break;case"source":Et("error",n),r=i;break;case"img":case"image":case"link":Et("error",n),Et("load",n),r=i;break;case"details":Et("toggle",n),r=i;break;case"input":e_(n,i),r=ip(n,i),Et("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=kt({},i,{value:void 0}),Et("invalid",n);break;case"textarea":n_(n,i),r=op(n,i),Et("invalid",n);break;default:r=i}lp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Nx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&su(n,l):typeof l=="number"&&su(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ru.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",n):l!=null&&bm(n,s,l,o))}switch(t){case"input":Wu(n),t_(n,i,!1);break;case"textarea":Wu(n),i_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Cs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ea(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ea(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Sf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xn(e),null;case 6:if(n&&e.stateNode!=null)iS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=so(gu.current),so(hr.current),Ju(e)){if(i=e.stateNode,t=e.memoizedProps,i[rr]=e,(s=i.nodeValue!==t)&&(n=pi,n!==null))switch(n.tag){case 3:Qu(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Qu(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[rr]=e,e.stateNode=i}return xn(e),null;case 13:if(At(Ut),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(bt&&di!==null&&e.mode&1&&!(e.flags&128))yy(),Ba(),e.flags|=98560,s=!1;else if(s=Ju(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[rr]=e}else Ba(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xn(e),s=!1}else Wi!==null&&(Gp(Wi),Wi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ut.current&1?Qt===0&&(Qt=3):dg())),e.updateQueue!==null&&(e.flags|=4),xn(e),null);case 4:return Va(),Ip(n,e),n===null&&du(e.stateNode.containerInfo),xn(e),null;case 10:return qm(e.type._context),xn(e),null;case 17:return qn(e.type)&&Mf(),xn(e),null;case 19:if(At(Ut),s=e.memoizedState,s===null)return xn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)pl(s,!1);else{if(Qt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Pf(n),o!==null){for(e.flags|=128,pl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Mt(Ut,Ut.current&1|2),e.child}n=n.sibling}s.tail!==null&&Vt()>Wa&&(e.flags|=128,i=!0,pl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Pf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),pl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!bt)return xn(e),null}else 2*Vt()-s.renderingStartTime>Wa&&t!==1073741824&&(e.flags|=128,i=!0,pl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Vt(),e.sibling=null,t=Ut.current,Mt(Ut,i?t&1|2:t&1),e):(xn(e),null);case 22:case 23:return fg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ai&1073741824&&(xn(e),e.subtreeFlags&6&&(e.flags|=8192)):xn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function NT(n,e){switch(Xm(e),e.tag){case 1:return qn(e.type)&&Mf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Va(),At($n),At(Rn),eg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Jm(e),null;case 13:if(At(Ut),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Ba()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return At(Ut),null;case 4:return Va(),null;case 10:return qm(e.type._context),null;case 22:case 23:return fg(),null;case 24:return null;default:return null}}var nc=!1,Tn=!1,UT=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function _a(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){zt(n,e,i)}else t.current=null}function Op(n,e,t){try{t()}catch(i){zt(n,e,i)}}var j_=!1;function IT(n,e){if(xp=vf,n=ay(),Gm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(yp={focusedElem:n,selectionRange:t},vf=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Vi(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){zt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return _=j_,j_=!1,_}function Vl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Op(e,t,s)}r=r.next}while(r!==i)}}function cd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Fp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function rS(n){var e=n.alternate;e!==null&&(n.alternate=null,rS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[rr],delete e[pu],delete e[Ep],delete e[_T],delete e[vT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sS(n){return n.tag===5||n.tag===3||n.tag===4}function Y_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Sf));else if(i!==4&&(n=n.child,n!==null))for(kp(n,e,t),n=n.sibling;n!==null;)kp(n,e,t),n=n.sibling}function zp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(zp(n,e,t),n=n.sibling;n!==null;)zp(n,e,t),n=n.sibling}var fn=null,Gi=!1;function Yr(n,e,t){for(t=t.child;t!==null;)oS(n,e,t),t=t.sibling}function oS(n,e,t){if(dr&&typeof dr.onCommitFiberUnmount=="function")try{dr.onCommitFiberUnmount(nd,t)}catch{}switch(t.tag){case 5:Tn||_a(t,e);case 6:var i=fn,r=Gi;fn=null,Yr(n,e,t),fn=i,Gi=r,fn!==null&&(Gi?(n=fn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):fn.removeChild(t.stateNode));break;case 18:fn!==null&&(Gi?(n=fn,t=t.stateNode,n.nodeType===8?Xd(n.parentNode,t):n.nodeType===1&&Xd(n,t),uu(n)):Xd(fn,t.stateNode));break;case 4:i=fn,r=Gi,fn=t.stateNode.containerInfo,Gi=!0,Yr(n,e,t),fn=i,Gi=r;break;case 0:case 11:case 14:case 15:if(!Tn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Op(t,e,o),r=r.next}while(r!==i)}Yr(n,e,t);break;case 1:if(!Tn&&(_a(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){zt(t,e,a)}Yr(n,e,t);break;case 21:Yr(n,e,t);break;case 22:t.mode&1?(Tn=(i=Tn)||t.memoizedState!==null,Yr(n,e,t),Tn=i):Yr(n,e,t);break;default:Yr(n,e,t)}}function $_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new UT),e.forEach(function(i){var r=WT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Fi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fn=a.stateNode,Gi=!1;break e;case 3:fn=a.stateNode.containerInfo,Gi=!0;break e;case 4:fn=a.stateNode.containerInfo,Gi=!0;break e}a=a.return}if(fn===null)throw Error(ae(160));oS(s,o,r),fn=null,Gi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){zt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aS(e,n),e=e.sibling}function aS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(e,n),Qi(n),i&4){try{Vl(3,n,n.return),cd(3,n)}catch(g){zt(n,n.return,g)}try{Vl(5,n,n.return)}catch(g){zt(n,n.return,g)}}break;case 1:Fi(e,n),Qi(n),i&512&&t!==null&&_a(t,t.return);break;case 5:if(Fi(e,n),Qi(n),i&512&&t!==null&&_a(t,t.return),n.flags&32){var r=n.stateNode;try{su(r,"")}catch(g){zt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Rx(r,s),up(a,o);var u=up(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Nx(r,d):c==="dangerouslySetInnerHTML"?Lx(r,d):c==="children"?su(r,d):bm(r,c,d,u)}switch(a){case"input":rp(r,s);break;case"textarea":Px(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ea(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ea(r,!!s.multiple,s.defaultValue,!0):Ea(r,!!s.multiple,s.multiple?[]:"",!1))}r[pu]=s}catch(g){zt(n,n.return,g)}}break;case 6:if(Fi(e,n),Qi(n),i&4){if(n.stateNode===null)throw Error(ae(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){zt(n,n.return,g)}}break;case 3:if(Fi(e,n),Qi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{uu(e.containerInfo)}catch(g){zt(n,n.return,g)}break;case 4:Fi(e,n),Qi(n);break;case 13:Fi(e,n),Qi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ug=Vt())),i&4&&$_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Tn=(u=Tn)||c,Fi(e,n),Tn=u):Fi(e,n),Qi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(d=Ee=c;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:Vl(4,f,f.return);break;case 1:_a(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){zt(i,t,g)}}break;case 5:_a(f,f.return);break;case 22:if(f.memoizedState!==null){K_(d);continue}}p!==null?(p.return=f,Ee=p):K_(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dx("display",o))}catch(g){zt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){zt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fi(e,n),Qi(n),i&4&&$_(n);break;case 21:break;default:Fi(e,n),Qi(n)}}function Qi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(sS(t)){var i=t;break e}t=t.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(su(r,""),i.flags&=-33);var s=Y_(n);zp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Y_(n);kp(n,a,o);break;default:throw Error(ae(161))}}catch(l){zt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function OT(n,e,t){Ee=n,lS(n)}function lS(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Tn;a=nc;var u=Tn;if(nc=o,(Tn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?Z_(r):l!==null?(l.return=o,Ee=l):Z_(r);for(;s!==null;)Ee=s,lS(s),s=s.sibling;Ee=r,nc=a,Tn=u}q_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):q_(n)}}function q_(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tn||cd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Tn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Vi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&D_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}D_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&uu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Tn||e.flags&512&&Fp(e)}catch(f){zt(e,e.return,f)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function K_(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function Z_(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{cd(4,e)}catch(l){zt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){zt(e,r,l)}}var s=e.return;try{Fp(e)}catch(l){zt(e,s,l)}break;case 5:var o=e.return;try{Fp(e)}catch(l){zt(e,o,l)}}}catch(l){zt(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var FT=Math.ceil,Df=Wr.ReactCurrentDispatcher,ag=Wr.ReactCurrentOwner,Di=Wr.ReactCurrentBatchConfig,ut=0,un=null,$t=null,pn=0,ai=0,va=Is(0),Qt=0,yu=null,Ao=0,fd=0,lg=0,Gl=null,Xn=null,ug=0,Wa=1/0,wr=null,Nf=!1,Bp=null,xs=null,ic=!1,as=null,Uf=0,Wl=0,Hp=null,Jc=-1,ef=0;function Bn(){return ut&6?Vt():Jc!==-1?Jc:Jc=Vt()}function ys(n){return n.mode&1?ut&2&&pn!==0?pn&-pn:yT.transition!==null?(ef===0&&(ef=Xx()),ef):(n=mt,n!==0||(n=window.event,n=n===void 0?16:Qx(n.type)),n):1}function qi(n,e,t,i){if(50<Wl)throw Wl=0,Hp=null,Error(ae(185));Du(n,t,i),(!(ut&2)||n!==un)&&(n===un&&(!(ut&2)&&(fd|=t),Qt===4&&rs(n,pn)),Kn(n,i),t===1&&ut===0&&!(e.mode&1)&&(Wa=Vt()+500,ad&&Os()))}function Kn(n,e){var t=n.callbackNode;yE(n,e);var i=_f(n,n===un?pn:0);if(i===0)t!==null&&o_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&o_(t),e===1)n.tag===0?xT(Q_.bind(null,n)):_y(Q_.bind(null,n)),mT(function(){!(ut&6)&&Os()}),t=null;else{switch(jx(i)){case 1:t=Im;break;case 4:t=Gx;break;case 16:t=gf;break;case 536870912:t=Wx;break;default:t=gf}t=gS(t,uS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function uS(n,e){if(Jc=-1,ef=0,ut&6)throw Error(ae(327));var t=n.callbackNode;if(Ra()&&n.callbackNode!==t)return null;var i=_f(n,n===un?pn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=If(n,i);else{e=i;var r=ut;ut|=2;var s=fS();(un!==n||pn!==e)&&(wr=null,Wa=Vt()+500,fo(n,e));do try{BT();break}catch(a){cS(n,a)}while(!0);$m(),Df.current=s,ut=r,$t!==null?e=0:(un=null,pn=0,e=Qt)}if(e!==0){if(e===2&&(r=pp(n),r!==0&&(i=r,e=Vp(n,r))),e===1)throw t=yu,fo(n,0),rs(n,i),Kn(n,Vt()),t;if(e===6)rs(n,i);else{if(r=n.current.alternate,!(i&30)&&!kT(r)&&(e=If(n,i),e===2&&(s=pp(n),s!==0&&(i=s,e=Vp(n,s))),e===1))throw t=yu,fo(n,0),rs(n,i),Kn(n,Vt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:qs(n,Xn,wr);break;case 3:if(rs(n,i),(i&130023424)===i&&(e=ug+500-Vt(),10<e)){if(_f(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Bn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Mp(qs.bind(null,n,Xn,wr),e);break}qs(n,Xn,wr);break;case 4:if(rs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-$i(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*FT(i/1960))-i,10<i){n.timeoutHandle=Mp(qs.bind(null,n,Xn,wr),i);break}qs(n,Xn,wr);break;case 5:qs(n,Xn,wr);break;default:throw Error(ae(329))}}}return Kn(n,Vt()),n.callbackNode===t?uS.bind(null,n):null}function Vp(n,e){var t=Gl;return n.current.memoizedState.isDehydrated&&(fo(n,e).flags|=256),n=If(n,e),n!==2&&(e=Xn,Xn=t,e!==null&&Gp(e)),n}function Gp(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function kT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ki(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rs(n,e){for(e&=~lg,e&=~fd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-$i(e),i=1<<t;n[t]=-1,e&=~i}}function Q_(n){if(ut&6)throw Error(ae(327));Ra();var e=_f(n,0);if(!(e&1))return Kn(n,Vt()),null;var t=If(n,e);if(n.tag!==0&&t===2){var i=pp(n);i!==0&&(e=i,t=Vp(n,i))}if(t===1)throw t=yu,fo(n,0),rs(n,e),Kn(n,Vt()),t;if(t===6)throw Error(ae(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,qs(n,Xn,wr),Kn(n,Vt()),null}function cg(n,e){var t=ut;ut|=1;try{return n(e)}finally{ut=t,ut===0&&(Wa=Vt()+500,ad&&Os())}}function Co(n){as!==null&&as.tag===0&&!(ut&6)&&Ra();var e=ut;ut|=1;var t=Di.transition,i=mt;try{if(Di.transition=null,mt=1,n)return n()}finally{mt=i,Di.transition=t,ut=e,!(ut&6)&&Os()}}function fg(){ai=va.current,At(va)}function fo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,pT(t)),$t!==null)for(t=$t.return;t!==null;){var i=t;switch(Xm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mf();break;case 3:Va(),At($n),At(Rn),eg();break;case 5:Jm(i);break;case 4:Va();break;case 13:At(Ut);break;case 19:At(Ut);break;case 10:qm(i.type._context);break;case 22:case 23:fg()}t=t.return}if(un=n,$t=n=Ss(n.current,null),pn=ai=e,Qt=0,yu=null,lg=fd=Ao=0,Xn=Gl=null,ro!==null){for(e=0;e<ro.length;e++)if(t=ro[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ro=null}return n}function cS(n,e){do{var t=$t;try{if($m(),Kc.current=Lf,bf){for(var i=Ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}bf=!1}if(wo=0,an=Kt=Ft=null,Hl=!1,_u=0,ag.current=null,t===null||t.return===null){Qt=1,yu=e,$t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=pn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=z_(o);if(p!==null){p.flags&=-257,B_(p,o,a,s,e),p.mode&1&&k_(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){k_(s,u,e),dg();break e}l=Error(ae(426))}}else if(bt&&a.mode&1){var m=z_(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),B_(m,o,a,s,e),jm(Ga(l,a));break e}}s=l=Ga(l,a),Qt!==4&&(Qt=2),Gl===null?Gl=[s]:Gl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Yy(s,l,e);L_(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(xs===null||!xs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=$y(s,a,e);L_(s,S);break e}}s=s.return}while(s!==null)}hS(t)}catch(C){e=C,$t===t&&t!==null&&($t=t=t.return);continue}break}while(!0)}function fS(){var n=Df.current;return Df.current=Lf,n===null?Lf:n}function dg(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),un===null||!(Ao&268435455)&&!(fd&268435455)||rs(un,pn)}function If(n,e){var t=ut;ut|=2;var i=fS();(un!==n||pn!==e)&&(wr=null,fo(n,e));do try{zT();break}catch(r){cS(n,r)}while(!0);if($m(),ut=t,Df.current=i,$t!==null)throw Error(ae(261));return un=null,pn=0,Qt}function zT(){for(;$t!==null;)dS($t)}function BT(){for(;$t!==null&&!fE();)dS($t)}function dS(n){var e=mS(n.alternate,n,ai);n.memoizedProps=n.pendingProps,e===null?hS(n):$t=e,ag.current=null}function hS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=NT(t,e),t!==null){t.flags&=32767,$t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,$t=null;return}}else if(t=DT(t,e,ai),t!==null){$t=t;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=n}while(e!==null);Qt===0&&(Qt=5)}function qs(n,e,t){var i=mt,r=Di.transition;try{Di.transition=null,mt=1,HT(n,e,t,i)}finally{Di.transition=r,mt=i}return null}function HT(n,e,t,i){do Ra();while(as!==null);if(ut&6)throw Error(ae(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ae(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(SE(n,s),n===un&&($t=un=null,pn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ic||(ic=!0,gS(gf,function(){return Ra(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Di.transition,Di.transition=null;var o=mt;mt=1;var a=ut;ut|=4,ag.current=null,IT(n,t),aS(t,n),aT(yp),vf=!!xp,yp=xp=null,n.current=t,OT(t),dE(),ut=a,mt=o,Di.transition=s}else n.current=t;if(ic&&(ic=!1,as=n,Uf=r),s=n.pendingLanes,s===0&&(xs=null),mE(t.stateNode),Kn(n,Vt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nf)throw Nf=!1,n=Bp,Bp=null,n;return Uf&1&&n.tag!==0&&Ra(),s=n.pendingLanes,s&1?n===Hp?Wl++:(Wl=0,Hp=n):Wl=0,Os(),null}function Ra(){if(as!==null){var n=jx(Uf),e=Di.transition,t=mt;try{if(Di.transition=null,mt=16>n?16:n,as===null)var i=!1;else{if(n=as,as=null,Uf=0,ut&6)throw Error(ae(331));var r=ut;for(ut|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Vl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ee=d;else for(;Ee!==null;){c=Ee;var f=c.sibling,p=c.return;if(rS(c),c===u){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var v=n.current;for(Ee=v;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cd(9,a)}}catch(C){zt(a,a.return,C)}if(a===o){Ee=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ee=S;break e}Ee=a.return}}if(ut=r,Os(),dr&&typeof dr.onPostCommitFiberRoot=="function")try{dr.onPostCommitFiberRoot(nd,n)}catch{}i=!0}return i}finally{mt=t,Di.transition=e}}return!1}function J_(n,e,t){e=Ga(t,e),e=Yy(n,e,1),n=vs(n,e,1),e=Bn(),n!==null&&(Du(n,1,e),Kn(n,e))}function zt(n,e,t){if(n.tag===3)J_(n,n,t);else for(;e!==null;){if(e.tag===3){J_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xs===null||!xs.has(i))){n=Ga(t,n),n=$y(e,n,1),e=vs(e,n,1),n=Bn(),e!==null&&(Du(e,1,n),Kn(e,n));break}}e=e.return}}function VT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Bn(),n.pingedLanes|=n.suspendedLanes&t,un===n&&(pn&t)===t&&(Qt===4||Qt===3&&(pn&130023424)===pn&&500>Vt()-ug?fo(n,0):lg|=t),Kn(n,e)}function pS(n,e){e===0&&(n.mode&1?(e=Yu,Yu<<=1,!(Yu&130023424)&&(Yu=4194304)):e=1);var t=Bn();n=kr(n,e),n!==null&&(Du(n,e,t),Kn(n,t))}function GT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),pS(n,t)}function WT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),pS(n,t)}var mS;mS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||$n.current)Yn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Yn=!1,LT(n,e,t);Yn=!!(n.flags&131072)}else Yn=!1,bt&&e.flags&1048576&&vy(e,wf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Qc(n,e),n=e.pendingProps;var r=za(e,Rn.current);Ca(e,t),r=ng(null,e,i,n,r,t);var s=ig();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qn(i)?(s=!0,Ef(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zm(e),r.updater=ld,e.stateNode=r,r._reactInternals=e,Pp(e,i,n,t),e=Dp(null,e,i,!0,s,t)):(e.tag=0,bt&&s&&Wm(e),Un(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Qc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jT(i),n=Vi(i,n),r){case 0:e=Lp(null,e,i,n,t);break e;case 1:e=G_(null,e,i,n,t);break e;case 11:e=H_(null,e,i,n,t);break e;case 14:e=V_(null,e,i,Vi(i.type,n),t);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),Lp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),G_(n,e,i,r,t);case 3:e:{if(Qy(e),n===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,My(n,e),Rf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ga(Error(ae(423)),e),e=W_(n,e,i,t,r);break e}else if(i!==r){r=Ga(Error(ae(424)),e),e=W_(n,e,i,t,r);break e}else for(di=_s(e.stateNode.containerInfo.firstChild),pi=e,bt=!0,Wi=null,t=Ay(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ba(),i===r){e=zr(n,e,t);break e}Un(n,e,i,t)}e=e.child}return e;case 5:return Cy(e),n===null&&Ap(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Sp(i,r)?o=null:s!==null&&Sp(i,s)&&(e.flags|=32),Zy(n,e),Un(n,e,o,t),e.child;case 6:return n===null&&Ap(e),null;case 13:return Jy(n,e,t);case 4:return Qm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ha(e,null,i,t):Un(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),H_(n,e,i,r,t);case 7:return Un(n,e,e.pendingProps,t),e.child;case 8:return Un(n,e,e.pendingProps.children,t),e.child;case 12:return Un(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Mt(Af,i._currentValue),i._currentValue=o,s!==null)if(Ki(s.value,o)){if(s.children===r.children&&!$n.current){e=zr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ur(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Cp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Cp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Un(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ca(e,t),r=Ui(r),i=i(r),e.flags|=1,Un(n,e,i,t),e.child;case 14:return i=e.type,r=Vi(i,e.pendingProps),r=Vi(i.type,r),V_(n,e,i,r,t);case 15:return qy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),Qc(n,e),e.tag=1,qn(i)?(n=!0,Ef(e)):n=!1,Ca(e,t),Ty(e,i,r),Pp(e,i,r,t),Dp(null,e,i,!0,n,t);case 19:return eS(n,e,t);case 22:return Ky(n,e,t)}throw Error(ae(156,e.tag))};function gS(n,e){return Vx(n,e)}function XT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(n,e,t,i){return new XT(n,e,t,i)}function hg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jT(n){if(typeof n=="function")return hg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Dm)return 11;if(n===Nm)return 14}return 2}function Ss(n,e){var t=n.alternate;return t===null?(t=Ri(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function tf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")hg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case la:return ho(t.children,r,s,e);case Lm:o=8,r|=8;break;case Jh:return n=Ri(12,t,e,r|2),n.elementType=Jh,n.lanes=s,n;case ep:return n=Ri(13,t,e,r),n.elementType=ep,n.lanes=s,n;case tp:return n=Ri(19,t,e,r),n.elementType=tp,n.lanes=s,n;case wx:return dd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ex:o=10;break e;case Tx:o=9;break e;case Dm:o=11;break e;case Nm:o=14;break e;case ts:o=16,i=null;break e}throw Error(ae(130,n==null?n:typeof n,""))}return e=Ri(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ho(n,e,t,i){return n=Ri(7,n,i,e),n.lanes=t,n}function dd(n,e,t,i){return n=Ri(22,n,i,e),n.elementType=wx,n.lanes=t,n.stateNode={isHidden:!1},n}function Jd(n,e,t){return n=Ri(6,n,null,e),n.lanes=t,n}function eh(n,e,t){return e=Ri(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function YT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ud(0),this.expirationTimes=Ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pg(n,e,t,i,r,s,o,a,l){return n=new YT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ri(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zm(s),n}function $T(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:aa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function _S(n){if(!n)return Rs;n=n._reactInternals;e:{if(Io(n)!==n||n.tag!==1)throw Error(ae(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(n.tag===1){var t=n.type;if(qn(t))return gy(n,t,e)}return e}function vS(n,e,t,i,r,s,o,a,l){return n=pg(t,i,!0,n,r,s,o,a,l),n.context=_S(null),t=n.current,i=Bn(),r=ys(t),s=Ur(i,r),s.callback=e??null,vs(t,s,r),n.current.lanes=r,Du(n,r,i),Kn(n,i),n}function hd(n,e,t,i){var r=e.current,s=Bn(),o=ys(r);return t=_S(t),e.context===null?e.context=t:e.pendingContext=t,e=Ur(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=vs(r,e,o),n!==null&&(qi(n,r,o,s),qc(n,r,o)),o}function Of(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function e0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function mg(n,e){e0(n,e),(n=n.alternate)&&e0(n,e)}function qT(){return null}var xS=typeof reportError=="function"?reportError:function(n){console.error(n)};function gg(n){this._internalRoot=n}pd.prototype.render=gg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ae(409));hd(n,e,null,null)};pd.prototype.unmount=gg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Co(function(){hd(null,n,null,null)}),e[Fr]=null}};function pd(n){this._internalRoot=n}pd.prototype.unstable_scheduleHydration=function(n){if(n){var e=qx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<is.length&&e!==0&&e<is[t].priority;t++);is.splice(t,0,n),t===0&&Zx(n)}};function _g(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function md(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function t0(){}function KT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Of(o);s.call(u)}}var o=vS(e,i,n,0,null,!1,!1,"",t0);return n._reactRootContainer=o,n[Fr]=o.current,du(n.nodeType===8?n.parentNode:n),Co(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Of(l);a.call(u)}}var l=pg(n,0,!1,null,null,!1,!1,"",t0);return n._reactRootContainer=l,n[Fr]=l.current,du(n.nodeType===8?n.parentNode:n),Co(function(){hd(e,l,t,i)}),l}function gd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Of(o);a.call(l)}}hd(e,o,n,r)}else o=KT(t,e,n,r,i);return Of(o)}Yx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Al(e.pendingLanes);t!==0&&(Om(e,t|1),Kn(e,Vt()),!(ut&6)&&(Wa=Vt()+500,Os()))}break;case 13:Co(function(){var i=kr(n,1);if(i!==null){var r=Bn();qi(i,n,1,r)}}),mg(n,1)}};Fm=function(n){if(n.tag===13){var e=kr(n,134217728);if(e!==null){var t=Bn();qi(e,n,134217728,t)}mg(n,134217728)}};$x=function(n){if(n.tag===13){var e=ys(n),t=kr(n,e);if(t!==null){var i=Bn();qi(t,n,e,i)}mg(n,e)}};qx=function(){return mt};Kx=function(n,e){var t=mt;try{return mt=n,e()}finally{mt=t}};fp=function(n,e,t){switch(e){case"input":if(rp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=od(i);if(!r)throw Error(ae(90));Cx(i),rp(i,r)}}}break;case"textarea":Px(n,t);break;case"select":e=t.value,e!=null&&Ea(n,!!t.multiple,e,!1)}};Ox=cg;Fx=Co;var ZT={usingClientEntryPoint:!1,Events:[Uu,da,od,Ux,Ix,cg]},ml={findFiberByHostInstance:io,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},QT={bundleType:ml.bundleType,version:ml.version,rendererPackageName:ml.rendererPackageName,rendererConfig:ml.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bx(n),n===null?null:n.stateNode},findFiberByHostInstance:ml.findFiberByHostInstance||qT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{nd=rc.inject(QT),dr=rc}catch{}}xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZT;xi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_g(e))throw Error(ae(200));return $T(n,e,null,t)};xi.createRoot=function(n,e){if(!_g(n))throw Error(ae(299));var t=!1,i="",r=xS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pg(n,1,!1,null,null,t,!1,i,r),n[Fr]=e.current,du(n.nodeType===8?n.parentNode:n),new gg(e)};xi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ae(188)):(n=Object.keys(n).join(","),Error(ae(268,n)));return n=Bx(e),n=n===null?null:n.stateNode,n};xi.flushSync=function(n){return Co(n)};xi.hydrate=function(n,e,t){if(!md(e))throw Error(ae(200));return gd(null,n,e,!0,t)};xi.hydrateRoot=function(n,e,t){if(!_g(n))throw Error(ae(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=xS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=vS(e,null,n,1,t??null,r,!1,s,o),n[Fr]=e.current,du(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new pd(e)};xi.render=function(n,e,t){if(!md(e))throw Error(ae(200));return gd(null,n,e,!1,t)};xi.unmountComponentAtNode=function(n){if(!md(n))throw Error(ae(40));return n._reactRootContainer?(Co(function(){gd(null,null,n,!1,function(){n._reactRootContainer=null,n[Fr]=null})}),!0):!1};xi.unstable_batchedUpdates=cg;xi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!md(t))throw Error(ae(200));if(n==null||n._reactInternals===void 0)throw Error(ae(38));return gd(n,e,t,!1,i)};xi.version="18.2.0-next-9e3b772b8-20220608";function yS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yS)}catch(n){console.error(n)}}yS(),vx.exports=xi;var JT=vx.exports,n0=JT;Zh.createRoot=n0.createRoot,Zh.hydrateRoot=n0.hydrateRoot;function Ar(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function SS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xa={duration:.5,overwrite:!1,delay:0},vg,An,Lt,Pi=1e8,St=1/Pi,Wp=Math.PI*2,ew=Wp/4,tw=0,MS=Math.sqrt,nw=Math.cos,iw=Math.sin,cn=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},Br=function(e){return typeof e=="number"},xg=function(e){return typeof e>"u"},_r=function(e){return typeof e=="object"},Zn=function(e){return e!==!1},yg=function(){return typeof window<"u"},sc=function(e){return Bt(e)||cn(e)},ES=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,Xp=/(?:-?\.?\d|\.)+/gi,TS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,th=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wS=/[+-]=-?[.\d]+/,AS=/[^,'"\[\]\s]+/gi,rw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,er,jp,Sg,vi={},Ff={},CS,RS=function(e){return(Ff=Ro(e,vi))&&ii},Mg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Su=function(e,t){return!t&&console.warn(e)},PS=function(e,t){return e&&(vi[e]=t)&&Ff&&(Ff[e]=t)||vi},Mu=function(){return 0},sw={suppressEvents:!0,isStart:!0,kill:!1},nf={suppressEvents:!0,kill:!1},ow={suppressEvents:!0},Eg={},Ms=[],Yp={},bS,ui={},nh={},i0=30,rf=[],Tg="",wg=function(e){var t=e[0],i,r;if(_r(t)||Bt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=rf.length;r--&&!rf[r].targetTest(t););i=rf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new eM(e[r],i)))||e.splice(r,1);return e},po=function(e){return e._gsap||wg(bi(e))[0]._gsap},LS=function(e,t,i){return(i=e[t])&&Bt(i)?e[t]():xg(i)&&e.getAttribute&&e.getAttribute(t)||i},Qn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},ln=function(e){return Math.round(e*1e7)/1e7||0},Pa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},aw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},kf=function(){var e=Ms.length,t=Ms.slice(0),i,r;for(Yp={},Ms.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},DS=function(e,t,i,r){Ms.length&&!An&&kf(),e.render(t,i,r||An&&t<0&&(e._initted||e._startAt)),Ms.length&&!An&&kf()},NS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(AS).length<2?t:cn(e)?e.trim():e},US=function(e){return e},Oi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},lw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ro=function(e,t){for(var i in t)e[i]=t[i];return e},r0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=_r(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},zf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Xl=function(e){var t=e.parent||It,i=e.keyframes?lw(Cn(e.keyframes)):Oi;if(Zn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},uw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},IS=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},_d=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ps=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},mo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},cw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$p=function(e,t,i,r){return e._startAt&&(An?e._startAt.revert(nf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},fw=function n(e){return!e||e._ts&&n(e.parent)},s0=function(e){return e._repeat?ja(e._tTime,e=e.duration()+e._rDelay)*e:0},ja=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Bf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vd=function(e){return e._end=ln(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},xd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ln(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vd(e),i._dirty||mo(i,e)),e},OS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Bf(e.rawTime(),t),(!t._dur||Ou(0,t.totalDuration(),i)-t._tTime>St)&&t.render(i,!0)),mo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-St}},sr=function(e,t,i,r){return t.parent&&Ps(t),t._start=ln((Br(i)?i:i||e!==It?Ei(e,i,t):e._time)+t._delay),t._end=ln(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),IS(e,t,"_first","_last",e._sort?"_start":0),qp(t)||(e._recent=t),r||OS(e,t),e._ts<0&&xd(e,e._tTime),e},FS=function(e,t){return(vi.ScrollTrigger||Mg("scrollTrigger",t))&&vi.ScrollTrigger.create(t,e)},kS=function(e,t,i,r,s){if(Cg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&bS!==ci.frame)return Ms.push(e),e._lazy=[s,r],1},dw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},qp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&dw(e)&&!(!e._initted&&qp(e))||(e._ts<0||e._dp._ts<0)&&!qp(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Ou(0,e._tDur,t),c=ja(l,a),e._yoyo&&c&1&&(o=1-o),c!==ja(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||An||r||e._zTime===St||!t&&e._zTime){if(!e._initted&&kS(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?St:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&$p(e,t,i,!0),e._onUpdate&&!i&&hi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&hi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ps(e,1),!i&&!An&&(hi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},pw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ya=function(e,t,i,r){var s=e._repeat,o=ln(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ln(o*(s+1)+e._rDelay*s):o,a>0&&!r&&xd(e,e._tTime=e._tDur*a),e.parent&&vd(e),i||mo(e.parent,e),e},o0=function(e){return e instanceof Fn?mo(e):Ya(e,e._dur)},mw={_start:0,endTime:Mu,totalDuration:Mu},Ei=function n(e,t,i){var r=e.labels,s=e._recent||mw,o=e.duration()>=Pi?s.endTime(!1):e._dur,a,l,u;return cn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Cn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},jl=function(e,t,i){var r=Br(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Yt(t[0],o,t[s+1])},Fs=function(e,t){return e||e===0?t(e):t},Ou=function(e,t,i){return i<e?e:i>t?t:i},wn=function(e,t){return!cn(e)||!(t=rw.exec(e))?"":t[1]},gw=function(e,t,i){return Fs(i,function(r){return Ou(e,t,r)})},Kp=[].slice,zS=function(e,t){return e&&_r(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_r(e[0]))&&!e.nodeType&&e!==er},_w=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return cn(r)&&!t||zS(r,1)?(s=i).push.apply(s,bi(r)):i.push(r)})||i},bi=function(e,t,i){return Lt&&!t&&Lt.selector?Lt.selector(e):cn(e)&&!i&&(jp||!$a())?Kp.call((t||Sg).querySelectorAll(e),0):Cn(e)?_w(e,i):zS(e)?Kp.call(e,0):e?[e]:[]},Zp=function(e){return e=bi(e)[0]||Su("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return bi(t,i.querySelectorAll?i:i===e?Su("Invalid scope")||Sg.createElement("div"):e)}},BS=function(e){return e.sort(function(){return .5-Math.random()})},HS=function(e){if(Bt(e))return e;var t=_r(e)?e:{each:e},i=go(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return cn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,_){var g=(_||t).length,m=o[g],h,v,x,S,C,T,E,P,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Pi])[1],!M){for(E=-Pi;E<(E=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],h=l?Math.min(M,g)*c-.5:r%M,v=M===Pi?0:l?g*d/M-.5:r/M|0,E=0,P=Pi,T=0;T<g;T++)x=T%M-h,S=v-(T/M|0),m[T]=C=u?Math.abs(u==="y"?S:x):MS(x*x+S*S),C>E&&(E=C),C<P&&(P=C);r==="random"&&BS(m),m.max=E-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=wn(t.amount||t.each)||0,i=i&&g<0?ZS(i):i}return g=(m[f]-m.min)/m.max||0,ln(m.b+(i?i(g):g)*m.v)+m.u}},Qp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ln(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Br(i)?0:wn(i))}},VS=function(e,t){var i=Cn(e),r,s;return!i&&_r(e)&&(r=i=e.radius||Pi,e.values?(e=bi(e.values),(s=!Br(e[0]))&&(r*=r)):e=Qp(e.increment)),Fs(t,i?Bt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Pi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Br(o)?c:c+wn(o)}:Qp(e))},GS=function(e,t,i,r){return Fs(Cn(e)?!t:i===!0?!!(i=0):!r,function(){return Cn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},vw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},xw=function(e,t){return function(i){return e(parseFloat(i))+(t||wn(i))}},yw=function(e,t,i){return XS(e,t,0,1,i)},WS=function(e,t,i){return Fs(i,function(r){return e[~~t(r)]})},Sw=function n(e,t,i){var r=t-e;return Cn(e)?WS(e,n(0,e.length),t):Fs(i,function(s){return(r+(s-e)%r)%r+e})},Mw=function n(e,t,i){var r=t-e,s=r*2;return Cn(e)?WS(e,n(0,e.length-1),t):Fs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Eu=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?AS:Xp),i+=e.substr(t,r-t)+GS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},XS=function(e,t,i,r,s){var o=t-e,a=r-i;return Fs(s,function(l){return i+((l-e)/o*a||0)})},Ew=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=cn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Cn(e)&&!Cn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return c[g](_-g)},i=t}else r||(e=Ro(Cn(e)?[]:{},e));if(!c){for(l in t)Ag.call(a,e,l,"get",t[l]);s=function(_){return bg(_,a)||(o?e.p:e)}}}return Fs(i,s)},a0=function(e,t,i){var r=e.labels,s=Pi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},hi=function(e,t,i){var r=e.vars,s=r[t],o=Lt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ms.length&&kf(),a&&(Lt=a),c=l?s.apply(u,l):s.call(u),Lt=o,c},Rl=function(e){return Ps(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&hi(e,"onInterrupt"),e},ya,jS=[],YS=function(e){if(e)if(e=!e.name&&e.default||e,yg()||e.headless){var t=e.name,i=Bt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Mu,render:bg,add:Ag,kill:zw,modifier:kw,rawVars:0},o={targetTest:0,get:0,getSetter:Pg,aliases:{},register:0};if($a(),e!==r){if(ui[t])return;Oi(r,Oi(zf(e,s),o)),Ro(r.prototype,Ro(s,zf(e,o))),ui[r.prop=t]=r,e.targetTest&&(rf.push(r),Eg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}PS(t,r),e.register&&e.register(ii,r,Jn)}else jS.push(e)},vt=255,Pl={aqua:[0,vt,vt],lime:[0,vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vt],navy:[0,0,128],white:[vt,vt,vt],olive:[128,128,0],yellow:[vt,vt,0],orange:[vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vt,0,0],pink:[vt,192,203],cyan:[0,vt,vt],transparent:[vt,vt,vt,0]},ih=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*vt+.5|0},$S=function(e,t,i){var r=e?Br(e)?[e>>16,e>>8&vt,e&vt]:0:Pl.black,s,o,a,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pl[e])r=Pl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&vt,r&vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&vt,e&vt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Xp),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=ih(l+1/3,s,o),r[1]=ih(l,s,o),r[2]=ih(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(TS),i&&r.length<4&&(r[3]=1),r}else r=e.match(Xp)||Pl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/vt,o=r[1]/vt,a=r[2]/vt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},qS=function(e){var t=[],i=[],r=-1;return e.split(Es).forEach(function(s){var o=s.match(xa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},l0=function(e,t,i){var r="",s=(e+r).match(Es),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=$S(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=qS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Es,"1").split(xa),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Es),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Es=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Tw=/hsl[a]?\(/,KS=function(e){var t=e.join(" "),i;if(Es.lastIndex=0,Es.test(t))return i=Tw.test(t),e[1]=l0(e[1],i),e[0]=l0(e[0],i,qS(e[1])),!0},Tu,ci=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,_=function g(m){var h=n()-r,v=m===!0,x,S,C,T;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,x=C-o,(x>0||v)&&(T=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(g)),S)for(p=0;p<a.length;p++)a[p](C,f,T,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){CS&&(!jp&&yg()&&(er=jp=window,Sg=er.document||{},vi.gsap=ii,(er.gsapVersions||(er.gsapVersions=[])).push(ii.version),RS(Ff||er.GreenSockGlobals||!er.gsap&&er||{}),jS.forEach(YS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Tu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Tu=0,u=Mu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,v){var x=h?function(S,C,T,E){m(S,C,T,E),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),$a(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),$a=function(){return!Tu&&ci.wake()},ot={},ww=/^[\d.\-M][\d.\-,\s]/,Aw=/["']/g,Cw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(Aw,"").trim():+u,r=l.substr(a+1).trim();return t},Rw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Pw=function(e){var t=(e+"").split("("),i=ot[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Cw(t[1])]:Rw(e).split(",").map(NS)):ot._CE&&ww.test(e)?ot._CE("",e):i},ZS=function(e){return function(t){return 1-e(1-t)}},QS=function n(e,t){for(var i=e._first,r;i;)i instanceof Fn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},go=function(e,t){return e&&(Bt(e)?e:ot[e]||Pw(e))||t},Oo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Qn(e,function(a){ot[a]=vi[a]=s,ot[o=a.toLowerCase()]=i;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},JS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Wp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*iw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:JS(a);return s=Wp/s,l.config=function(u,c){return n(e,u,c)},l},sh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:JS(i);return r.config=function(s){return n(e,s)},r};Qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Oo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Oo("Elastic",rh("in"),rh("out"),rh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Oo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Oo("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Oo("Circ",function(n){return-(MS(1-n*n)-1)});Oo("Sine",function(n){return n===1?1:-nw(n*ew)+1});Oo("Back",sh("in"),sh("out"),sh());ot.SteppedEase=ot.steps=vi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-St;return function(a){return((r*Ou(0,o,a)|0)+s)*i}}};Xa.ease=ot["quad.out"];Qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Tg+=n+","+n+"Params,"});var eM=function(e,t){this.id=tw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:LS,this.set=t?t.getSetter:Pg},wu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ya(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),Tu||ci.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ya(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if($a(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xd(this,i),!s._dp||s.parent||OS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&sr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===St||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),DS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+s0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+s0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ja(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Bf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-St?0:this._rts,this.totalTime(Ou(-Math.abs(this._delay),this._tDur,s),r!==!1),vd(this),cw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($a(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&sr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Zn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=ow);var r=An;return An=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),An=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,o0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,o0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ei(this,i),Zn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Zn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-St)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Bt(i)?i:US,a=function(){var u=r.then;r.then=null,Bt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Rl(this)},n}();Oi(wu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Fn=function(n){SS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Zn(i.sortChildren),It&&sr(i.parent||It,Ar(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&FS(Ar(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return jl(0,arguments,this),this},t.from=function(r,s,o){return jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Xl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(r,s,Ei(this,o),1),this},t.call=function(r,s,o){return sr(this,Yt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Yt(r,o,Ei(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Xl(o).immediateRender=Zn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Xl(a).immediateRender=Zn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:ln(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,g,m,h,v,x,S,C,T,E;if(this!==It&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=ln(c%m),c===l?(g=this._repeat,f=u):(g=~~(c/m),g&&g===c/m&&(f=u,g--),f>u&&(f=u)),C=ja(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),T&&g&1&&(f=u-f,E=1),g!==C&&!this._lock){var P=T&&C&1,M=P===(T&&g&1);if(g<C&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(E?0:ln(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;QS(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=pw(this,ln(a),ln(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!g&&(hi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-St);break}}p=_}else{p=this._last;for(var y=r<0?r:f;p;){if(_=p._prev,(p._act||y<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,s,o||An&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=y?-St:St);break}}p=_}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-St)._zTime=f>=a?1:-1,this._ts))return this._start=S,vd(this),this.render(r,s,o);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ps(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(hi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Br(s)||(s=Ei(this,s,r)),!(r instanceof wu)){if(Cn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(cn(r))return this.addLabel(r,s);if(Bt(r))r=Yt.delayedCall(0,r);else return this}return this!==r?sr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Yt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return cn(r)?this.removeLabel(r):Bt(r)?this.killTweensOf(r):(_d(this,r),r===this._recent&&(this._recent=this._last),mo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ln(ci.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ei(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Yt.delayedCall(0,s||Mu,o);return a.data="isPause",this._hasPause=1,sr(this,a,Ei(this,r))},t.removePause=function(r){var s=this._first;for(r=Ei(this,r);s;)s._start===r&&s.data==="isPause"&&Ps(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ls!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=bi(r),l=this._first,u=Br(s),c;l;)l instanceof Yt?aw(l._targets,a)&&(u?(!ls||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ei(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Yt.to(o,Oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||St,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&Ya(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Oi({startAt:{time:Ei(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),a0(this,Ei(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),a0(this,Ei(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return mo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),mo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Pi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,sr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ya(o,o===It&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(It._ts&&(DS(It,Bf(r,It)),bS=ci.frame),ci.frame>=i0){i0+=mi.autoSleep||120;var s=It._first;if((!s||!s._ts)&&mi.autoSleep&&ci._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ci.sleep()}}},e}(wu);Oi(Fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var bw=function(e,t,i,r,s,o,a){var l=new Jn(this._pt,e,t,0,1,oM,null,s),u=0,c=0,d,f,p,_,g,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Eu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(th)||[];d=th.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Pa(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=th.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(wS.test(r)||h)&&(l.e=0),this._pt=l,l},Ag=function(e,t,i,r,s,o,a,l,u,c){Bt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Bt(d)?u?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Bt(d)?u?Iw:rM:Rg,_;if(cn(r)&&(~r.indexOf("random(")&&(r=Eu(r)),r.charAt(1)==="="&&(_=Pa(f,r)+(wn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||Jp)return!isNaN(f*r)&&r!==""?(_=new Jn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?Fw:sM,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&Mg(t,r),bw.call(this,e,t,f,r,p,l||mi.stringFilter,u))},Lw=function(e,t,i,r,s){if(Bt(e)&&(e=Yl(e,s,t,i,r)),!_r(e)||e.style&&e.nodeType||Cn(e)||ES(e))return cn(e)?Yl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Yl(e[a],s,t,i,r);return o},tM=function(e,t,i,r,s,o){var a,l,u,c;if(ui[e]&&(a=new ui[e]).init(s,a.rawVars?t[e]:Lw(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Jn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ya))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ls,Jp,Cg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!vg,S=e.timeline,C,T,E,P,M,y,N,U,D,X,j,K,Y;if(S&&(!f||!s)&&(s="none"),e._ease=go(s,Xa.ease),e._yEase=d?ZS(go(d===!0?s:d,Xa.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(U=m[0]?po(m[0]).harness:0,K=U&&r[U.prop],C=zf(r,Eg),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?nf:sw),g._lazy=0),o){if(Ps(e._startAt=Yt.set(m,Oi({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&Zn(l),startAt:null,delay:0,onUpdate:u&&function(){return hi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!p)&&e._startAt.revert(nf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),E=Oi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Zn(l),immediateRender:a,stagger:0,parent:h},C),K&&(E[U.prop]=K),Ps(e._startAt=Yt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(nf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Zn(l)||l&&!_,T=0;T<m.length;T++){if(M=m[T],N=M._gsap||wg(m)[T]._gsap,e._ptLookup[T]=X={},Yp[N.id]&&Ms.length&&kf(),j=v===m?T:v.indexOf(M),U&&(D=new U).init(M,K||C,e,j,v)!==!1&&(e._pt=P=new Jn(e._pt,M,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(L){X[L]=P}),D.priority&&(y=1)),!U||K)for(E in C)ui[E]&&(D=tM(E,C,e,j,M,v))?D.priority&&(y=1):X[E]=P=Ag.call(e,M,E,"get",C[E],j,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(M,e._op[T]),x&&e._pt&&(ls=e,It.killTweensOf(M,X,e.globalTime(t)),Y=!e.parent,ls=0),e._pt&&l&&(Yp[N.id]=1)}y&&aM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&S.render(Pi,!0,!0)},Dw=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Jp=1,e.vars[t]="+=0",Cg(e,a),Jp=0,l?Su(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Ht(i)+wn(d.e)),d.b&&(d.b=c.s+wn(d.b))},Nw=function(e,t){var i=e[0]?po(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ro({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Uw=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Cn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Yl=function(e,t,i,r,s){return Bt(e)?e.call(t,i,r,s):cn(e)&&~e.indexOf("random(")?Eu(e):e},nM=Tg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",iM={};Qn(nM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return iM[n]=1});var Yt=function(n){SS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Xl(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,v=r.parent||It,x=(Cn(i)||ES(i)?Br(i[0]):"length"in r)?[i]:bi(i),S,C,T,E,P,M,y,N;if(a._targets=x.length?wg(x):Su("GSAP target "+i+" not found. https://gsap.com",!mi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||sc(u)||sc(c)){if(r=a.vars,S=a.timeline=new Fn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),S.kill(),S.parent=S._dp=Ar(a),S._start=0,f||sc(u)||sc(c)){if(E=x.length,y=f&&HS(f),_r(f))for(P in f)~nM.indexOf(P)&&(N||(N={}),N[P]=f[P]);for(C=0;C<E;C++)T=zf(r,iM),T.stagger=0,h&&(T.yoyoEase=h),N&&Ro(T,N),M=x[C],T.duration=+Yl(u,Ar(a),C,M,x),T.delay=(+Yl(c,Ar(a),C,M,x)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),S.to(M,T,y?y(C,M,x):0),S._ease=ot.none;S.duration()?u=c=0:a.timeline=0}else if(_){Xl(Oi(S.vars.defaults,{ease:"none"})),S._ease=go(_.ease||r.ease||"none");var U=0,D,X,j;if(Cn(_))_.forEach(function(K){return S.to(x,K,">")}),S.duration();else{T={};for(P in _)P==="ease"||P==="easeEach"||Uw(P,_[P],T,_.easeEach);for(P in T)for(D=T[P].sort(function(K,Y){return K.t-Y.t}),U=0,C=0;C<D.length;C++)X=D[C],j={ease:X.e,duration:(X.t-(C?D[C-1].t:0))/100*u},j[P]=X.v,S.to(x,j,U),U+=j.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return p===!0&&!vg&&(ls=Ar(a),It.killTweensOf(x),ls=0),sr(v,Ar(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===ln(v._time)&&Zn(d)&&fw(Ar(a))&&v.data!=="nested")&&(a._tTime=-St,a.render(Math.max(0,-c)||0)),m&&FS(Ar(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-St&&!c?l:r<St?0:r,f,p,_,g,m,h,v,x,S;if(!u)hw(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=d,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(f=ln(d%g),d===l?(_=this._repeat,f=u):(_=~~(d/g),_&&_===ln(d/g)&&(f=u,_--),f>u&&(f=u)),h=this._yoyo&&_&1,h&&(S=this._yEase,f=u-f),m=ja(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&(x&&this._yEase&&QS(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(ln(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(kS(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(f/u),this._from&&(this.ratio=v=1-v),f&&!a&&!s&&!_&&(hi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&$p(this,r,s,o),hi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&$p(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ps(this,1),!s&&!(c&&!a)&&(d||a||h)&&(hi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Tu||ci.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Cg(this,u),c=this._ease(u/this._dur),Dw(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(xd(this,0),this.parent||IS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Rl(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ls&&ls.vars.overwrite!==!0)._first||Rl(this),this.parent&&o!==this.timeline.totalDuration()&&Ya(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?bi(r):a,u=this._ptLookup,c=this._pt,d,f,p,_,g,m,h;if((!s||s==="all")&&uw(a,l))return s==="all"&&(this._pt=0),Rl(this);for(d=this._op=this._op||[],s!=="all"&&(cn(s)&&(g={},Qn(s,function(v){return g[v]=1}),s=g),s=Nw(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&_d(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Rl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return It.killTweensOf(r,s,o)},e}(wu);Oi(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qn("staggerTo,staggerFrom,staggerFromTo",function(n){Yt[n]=function(){var e=new Fn,t=Kp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Rg=function(e,t,i){return e[t]=i},rM=function(e,t,i){return e[t](i)},Iw=function(e,t,i,r){return e[t](r.fp,i)},Ow=function(e,t,i){return e.setAttribute(t,i)},Pg=function(e,t){return Bt(e[t])?rM:xg(e[t])&&e.setAttribute?Ow:Rg},sM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Fw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},oM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},bg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},kw=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},zw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?_d(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Bw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},aM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Jn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||sM,this.d=l||this,this.set=u||Rg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Bw,this.m=i,this.mt=s,this.tween=r},n}();Qn(Tg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Eg[n]=1});vi.TweenMax=vi.TweenLite=Yt;vi.TimelineLite=vi.TimelineMax=Fn;It=new Fn({sortChildren:!1,defaults:Xa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mi.stringFilter=KS;var _o=[],sf={},Hw=[],u0=0,Vw=0,oh=function(e){return(sf[e]||Hw).map(function(t){return t()})},em=function(){var e=Date.now(),t=[];e-u0>2&&(oh("matchMediaInit"),_o.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=er.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),oh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),u0=e,oh("matchMedia"))},lM=function(){function n(t,i){this.selector=i&&Zp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Vw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Bt(i)&&(s=r,r=i,i=Bt);var o=this,a=function(){var u=Lt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Zp(s)),Lt=o,d=r.apply(o,arguments),Bt(d)&&o._r.push(d),Lt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Bt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Lt;Lt=null,i(this),Lt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Yt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Fn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Yt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=_o.length;o--;)_o[o].id===this.id&&_o.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),Gw=function(){function n(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){_r(i)||(i={matches:i});var o=new lM(0,s||this.scope),a=o.conditions={},l,u,c;Lt&&!o.selector&&(o.selector=Lt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=er.matchMedia(i[u]),l&&(_o.indexOf(o)<0&&_o.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(em):l.addEventListener("change",em)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Hf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return YS(r)})},timeline:function(e){return new Fn(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,i,r){cn(e)&&(e=bi(e)[0]);var s=po(e||{}).get,o=i?US:NS;return i==="native"&&(i=""),e&&(t?o((ui[t]&&ui[t].get||s)(e,t,i,r)):function(a,l,u){return o((ui[a]&&ui[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=bi(e),e.length>1){var r=e.map(function(c){return ii.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=ui[t],a=po(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;ya._pt=0,d.init(e,i?c+i:c,ya,0,[e]),d.render(1,d),ya._pt&&bg(1,ya)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ii.to(e,Ro((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=go(e.ease,Xa.ease)),r0(Xa,e||{})},config:function(e){return r0(mi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ui[a]&&!vi[a]&&Su(t+" effect requires "+a+" plugin.")}),nh[t]=function(a,l,u){return i(bi(a),Oi(l||{},s),u)},o&&(Fn.prototype[t]=function(a,l,u){return this.add(nh[t](a,_r(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ot[e]=go(t)},parseEase:function(e,t){return arguments.length?go(e,t):ot},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Fn(e),r,s;for(i.smoothChildTiming=Zn(e.smoothChildTiming),It.remove(i),i._dp=0,i._time=i._tTime=It._time,r=It._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Yt&&r.vars.onComplete===r._targets[0]))&&sr(i,r,r._start-r._delay),r=s;return sr(It,i,0),i},context:function(e,t){return e?new lM(e,t):Lt},matchMedia:function(e){return new Gw(e)},matchMediaRefresh:function(){return _o.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||em()},addEventListener:function(e,t){var i=sf[e]||(sf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=sf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Sw,wrapYoyo:Mw,distribute:HS,random:GS,snap:VS,normalize:yw,getUnit:wn,clamp:gw,splitColor:$S,toArray:bi,selector:Zp,mapRange:XS,pipe:vw,unitize:xw,interpolate:Ew,shuffle:BS},install:RS,effects:nh,ticker:ci,updateRoot:Fn.updateRoot,plugins:ui,globalTimeline:It,core:{PropTween:Jn,globals:PS,Tween:Yt,Timeline:Fn,Animation:wu,getCache:po,_removeLinkedListItem:_d,reverting:function(){return An},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return vg=e}}};Qn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Hf[n]=Yt[n]});ci.add(Fn.updateRoot);ya=Hf.to({},{duration:0});var Ww=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Xw=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Ww(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},ah=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(cn(s)&&(l={},Qn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Xw(a,s)}}}},ii=Hf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)An?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ah("roundProps",Qp),ah("modifiers"),ah("snap",VS))||Hf;Yt.version=Fn.version=ii.version="3.12.5";CS=1;yg()&&$a();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var c0,us,ba,Lg,oo,f0,Dg,jw=function(){return typeof window<"u"},Hr={},Ks=180/Math.PI,La=Math.PI/180,zo=Math.atan2,d0=1e8,Ng=/([A-Z])/g,Yw=/(left|right|width|margin|padding|x)/i,$w=/[\s,\(]\S/,lr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},tm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Kw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Zw=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},uM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},cM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Qw=function(e,t,i){return e.style[t]=i},Jw=function(e,t,i){return e.style.setProperty(t,i)},eA=function(e,t,i){return e._gsap[t]=i},tA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},nA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},iA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ot="transform",ei=Ot+"Origin",rA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Hr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=lr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Rr(r,a)}):this.tfm[e]=o.x?o[e]:Rr(r,e),e===ei&&(this.tfm.zOrigin=o.zOrigin);else return lr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ei,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},fM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ng,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Dg(),(!s||!s.isStart)&&!i[Ot]&&(fM(i),r.zOrigin&&i[ei]&&(i[ei]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},dM=function(e,t){var i={target:e,props:[],revert:sA,save:rA};return e._gsap||ii.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},hM,nm=function(e,t){var i=us.createElementNS?us.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):us.createElement(e);return i&&i.style?i:us.createElement(e)},pr=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ng,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,qa(t)||t,1)||""},h0="O,Moz,ms,Ms,Webkit".split(","),qa=function(e,t,i){var r=t||oo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(h0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?h0[o]:"")+e},im=function(){jw()&&window.document&&(c0=window,us=c0.document,ba=us.documentElement,oo=nm("div")||{style:{}},nm("div"),Ot=qa(Ot),ei=Ot+"Origin",oo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hM=!!qa("perspective"),Dg=ii.core.reverting,Lg=1)},lh=function n(e){var t=nm("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(ba.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),ba.removeChild(t),this.style.cssText=s,o},p0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},pM=function(e){var t;try{t=e.getBBox()}catch{t=lh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===lh||(t=lh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+p0(e,["x","cx","x1"])||0,y:+p0(e,["y","cy","y1"])||0,width:0,height:0}:t},mM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&pM(e))},Po=function(e,t){if(t){var i=e.style,r;t in Hr&&t!==ei&&(t=Ot),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Ng,"-$1").toLowerCase())):i.removeAttribute(t)}},cs=function(e,t,i,r,s,o){var a=new Jn(e._pt,t,i,0,1,o?cM:uM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},m0={deg:1,rad:1,turn:1},oA={grid:1,flex:1},bs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=oo.style,l=Yw.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,g,m,h;if(r===o||!s||m0[r]||m0[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&mM(e),(p||o==="%")&&(Hr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Ht(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===us||!g.appendChild)&&(g=us.body),m=g._gsap,m&&p&&m.width&&l&&m.time===ci.time&&!m.uncache)return Ht(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,_=e[c],v?e.style[t]=v:Po(e,t)}else(p||o==="%")&&!oA[pr(g,"display")]&&(a.position=pr(e,"position")),g===e&&(a.position="static"),g.appendChild(oo),_=oo[c],g.removeChild(oo),a.position="absolute";return l&&p&&(m=po(g),m.time=ci.time,m.width=g[c]),Ht(f?_*s/d:_&&s?d/_*s:0)},Rr=function(e,t,i,r){var s;return Lg||im(),t in lr&&t!=="transform"&&(t=lr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hr[t]&&t!=="transform"?(s=Cu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Gf(pr(e,ei))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Vf[t]&&Vf[t](e,t,i)||pr(e,t)||LS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?bs(e,t,s,i)+i:s},aA=function(e,t,i,r){if(!i||i==="none"){var s=qa(t,e,1),o=s&&pr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=pr(e,"borderTopColor"))}var a=new Jn(this._pt,e.style,t,0,1,oM),l=0,u=0,c,d,f,p,_,g,m,h,v,x,S,C;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=pr(e,t)||r,g?e.style[t]=g:Po(e,t)),c=[i,r],KS(c),i=c[0],r=c[1],f=i.match(xa)||[],C=r.match(xa)||[],C.length){for(;d=xa.exec(r);)m=d[0],v=r.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,S=g.substr((p+"").length),m.charAt(1)==="="&&(m=Pa(p,m)+S),h=parseFloat(m),x=m.substr((h+"").length),l=xa.lastIndex-x.length,x||(x=x||mi.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=bs(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?cM:uM;return wS.test(r)&&(a.e=0),this._pt=a,a},g0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=g0[i]||i,t[1]=g0[r]||r,t.join(" ")},uA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Hr[a]&&(l=1,a=a==="transformOrigin"?ei:Ot),Po(i,a);l&&(Po(i,Ot),o&&(o.svg&&i.removeAttribute("transform"),Cu(i,1),o.uncache=1,fM(r)))}},Vf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Jn(e._pt,t,i,0,0,uA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Au=[1,0,0,1,0,0],gM={},_M=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_0=function(e){var t=pr(e,Ot);return _M(t)?Au:t.substr(7).match(TS).map(Ht)},Ug=function(e,t){var i=e._gsap||po(e),r=e.style,s=_0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Au:s):(s===Au&&!e.offsetParent&&e!==ba&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,ba.appendChild(e)),s=_0(e),l?r.display=l:Po(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ba.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rm=function(e,t,i,r,s,o){var a=e._gsap,l=s||Ug(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,T,E,P,M;i?l!==Au&&(E=p*m-_*g)&&(P=S*(m/E)+C*(-g/E)+(g*v-m*h)/E,M=S*(-_/E)+C*(p/E)-(p*v-_*h)/E,S=P,C=M):(T=pM(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),C=T.y+(~(x[1]||x[0]).indexOf("%")?C/100*T.height:C)),r||r!==!1&&a.smooth?(h=S-u,v=C-c,a.xOffset=d+(h*p+v*g)-h,a.yOffset=f+(h*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ei]="0px 0px",o&&(cs(o,a,"xOrigin",u,S),cs(o,a,"yOrigin",c,C),cs(o,a,"xOffset",d,a.xOffset),cs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},Cu=function(e,t){var i=e._gsap||new eM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=pr(e,ei)||"0",c,d,f,p,_,g,m,h,v,x,S,C,T,E,P,M,y,N,U,D,X,j,K,Y,L,G,R,ie,te,Fe,H,ee;return c=d=f=g=m=h=v=x=S=0,p=_=1,i.svg=!!(e.getCTM&&mM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),r.scale=r.rotate=r.translate="none"),E=Ug(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),rm(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,E)),C=i.xOrigin||0,T=i.yOrigin||0,E!==Au&&(N=E[0],U=E[1],D=E[2],X=E[3],c=j=E[4],d=K=E[5],E.length===6?(p=Math.sqrt(N*N+U*U),_=Math.sqrt(X*X+D*D),g=N||U?zo(U,N)*Ks:0,v=D||X?zo(D,X)*Ks+g:0,v&&(_*=Math.abs(Math.cos(v*La))),i.svg&&(c-=C-(C*N+T*D),d-=T-(C*U+T*X))):(ee=E[6],Fe=E[7],R=E[8],ie=E[9],te=E[10],H=E[11],c=E[12],d=E[13],f=E[14],P=zo(ee,te),m=P*Ks,P&&(M=Math.cos(-P),y=Math.sin(-P),Y=j*M+R*y,L=K*M+ie*y,G=ee*M+te*y,R=j*-y+R*M,ie=K*-y+ie*M,te=ee*-y+te*M,H=Fe*-y+H*M,j=Y,K=L,ee=G),P=zo(-D,te),h=P*Ks,P&&(M=Math.cos(-P),y=Math.sin(-P),Y=N*M-R*y,L=U*M-ie*y,G=D*M-te*y,H=X*y+H*M,N=Y,U=L,D=G),P=zo(U,N),g=P*Ks,P&&(M=Math.cos(P),y=Math.sin(P),Y=N*M+U*y,L=j*M+K*y,U=U*M-N*y,K=K*M-j*y,N=Y,j=L),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Ht(Math.sqrt(N*N+U*U+D*D)),_=Ht(Math.sqrt(K*K+ee*ee)),P=zo(j,K),v=Math.abs(P)>2e-4?P*Ks:0,S=H?1/(H<0?-H:H):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!_M(pr(e,Ot)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Ht(p),i.scaleY=Ht(_),i.rotation=Ht(g)+a,i.rotationX=Ht(m)+a,i.rotationY=Ht(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ei]=Gf(u)),i.xOffset=i.yOffset=0,i.force3D=mi.force3D,i.renderTransform=i.svg?fA:hM?vM:cA,i.uncache=0,i},Gf=function(e){return(e=e.split(" "))[0]+" "+e[1]},uh=function(e,t,i){var r=wn(t);return Ht(parseFloat(t)+parseFloat(bs(e,"x",i+"px",r)))+r},cA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,vM(e,t)},Bs="0deg",gl="0px",Hs=") ",vM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,S="",C=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==Bs||c!==Bs)){var T=parseFloat(c)*La,E=Math.sin(T),P=Math.cos(T),M;T=parseFloat(d)*La,M=Math.cos(T),o=uh(v,o,E*M*-x),a=uh(v,a,-Math.sin(T)*-x),l=uh(v,l,P*M*-x+x)}m!==gl&&(S+="perspective("+m+Hs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||o!==gl||a!==gl||l!==gl)&&(S+=l!==gl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Hs),u!==Bs&&(S+="rotate("+u+Hs),c!==Bs&&(S+="rotateY("+c+Hs),d!==Bs&&(S+="rotateX("+d+Hs),(f!==Bs||p!==Bs)&&(S+="skew("+f+", "+p+Hs),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Hs),v.style[Ot]=S||"translate(0, 0)"},fA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),C,T,E,P,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=La,u*=La,C=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-u)*-f,P=Math.cos(l-u)*f,u&&(c*=La,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,P*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),C*=M,T*=M)),C=Ht(C),T=Ht(T),E=Ht(E),P=Ht(P)):(C=d,P=f,T=E=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=bs(p,"x",o,"px"),S=bs(p,"y",a,"px")),(_||g||m||h)&&(x=Ht(x+_-(_*C+g*E)+m),S=Ht(S+g-(_*T+g*P)+h)),(r||s)&&(M=p.getBBox(),x=Ht(x+r/100*M.width),S=Ht(S+s/100*M.height)),M="matrix("+C+","+T+","+E+","+P+","+x+","+S+")",p.setAttribute("transform",M),v&&(p.style[Ot]=M)},dA=function(e,t,i,r,s){var o=360,a=cn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ks:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*d0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*d0)%o-~~(u/o)*o)),e._pt=f=new Jn(e._pt,t,i,r,u,qw),f.e=c,f.u="deg",e._props.push(i),f},v0=function(e,t){for(var i in t)e[i]=t[i];return e},hA=function(e,t,i){var r=v0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ot]=t,a=Cu(i,1),Po(i,Ot),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ot],o[Ot]=t,a=Cu(i,1),o[Ot]=u);for(l in Hr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=wn(u),_=wn(c),d=p!==_?bs(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new Jn(e._pt,a,l,d,f-d,tm),e._pt.u=_||0,e._props.push(l));v0(a,r)};Qn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Vf[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(_){return Rr(a,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,d)}});var xM={name:"css",register:im,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,_,g,m,h,v,x,S,C,T,E,P;Lg||im(),this.styles=this.styles||dM(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(ui[g]&&tM(g,t,i,r,e,s)))){if(p=typeof c,_=Vf[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Eu(c)),_)_(this,e,g,c,i)&&(E=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Es.lastIndex=0,Es.test(u)||(m=wn(u),h=wn(c)),h?m!==h&&(u=bs(e,g,u,h)+h):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],cn(u)&&~u.indexOf("random(")&&(u=Eu(u)),wn(u+"")||u==="auto"||(u+=mi.units[g]||wn(Rr(e,g))||""),(u+"").charAt(1)==="="&&(u=Rr(e,g))):u=Rr(e,g),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),g in lr&&(g==="autoAlpha"&&(f===1&&Rr(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),cs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=lr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Hr,x){if(this.styles.save(g),S||(C=e._gsap,C.renderTransform&&!t.parseTransform||Cu(e,t.parseTransform),T=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new Jn(this._pt,a,Ot,0,1,C.renderTransform,C,0,-1),S.dep=1),g==="scale")this._pt=new Jn(this._pt,C,"scaleY",C.scaleY,(v?Pa(C.scaleY,v+d):d)-C.scaleY||0,tm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(ei,0,a[ei]),c=lA(c),C.svg?rm(e,c,0,T,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==C.zOrigin&&cs(this,C,"zOrigin",C.zOrigin,h),cs(this,a,g,Gf(u),Gf(c)));continue}else if(g==="svgOrigin"){rm(e,c,1,T,0,this);continue}else if(g in gM){dA(this,C,g,f,v?Pa(f,v+c):c);continue}else if(g==="smoothOrigin"){cs(this,C,"smooth",C.smooth,c);continue}else if(g==="force3D"){C[g]=c;continue}else if(g==="transform"){hA(this,c,e);continue}}else g in a||(g=qa(g)||g);if(x||(d||d===0)&&(f||f===0)&&!$w.test(c)&&g in a)m=(u+"").substr((f+"").length),d||(d=0),h=wn(c)||(g in mi.units?mi.units[g]:m),m!==h&&(f=bs(e,g,u,h)),this._pt=new Jn(this._pt,x?C:a,g,f,(v?Pa(f,v+d):d)-f,!x&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?Zw:tm),this._pt.u=h||0,m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=Kw);else if(g in a)aA.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){Mg(g,c);continue}x||(g in a?P.push(g,0,a[g]):P.push(g,1,u||e[g])),o.push(g)}}E&&aM(this)},render:function(e,t){if(t.tween._time||!Dg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Rr,aliases:lr,getSetter:function(e,t,i){var r=lr[t];return r&&r.indexOf(",")<0&&(t=r),t in Hr&&t!==ei&&(e._gsap.x||Rr(e,"x"))?i&&f0===i?t==="scale"?tA:eA:(f0=i||{})&&(t==="scale"?nA:iA):e.style&&!xg(e.style[t])?Qw:~t.indexOf("-")?Jw:Pg(e,t)},core:{_removeProperty:Po,_getMatrix:Ug}};ii.utils.checkPrefix=qa;ii.core.getStyleSaver=dM;(function(n,e,t,i){var r=Qn(n+","+e+","+t,function(s){Hr[s]=1});Qn(e,function(s){mi.units[s]="deg",gM[s]=1}),lr[r[13]]=n+","+e,Qn(i,function(s){var o=s.split(":");lr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){mi.units[n]="px"});ii.registerPlugin(xM);var Pt=ii.registerPlugin(xM)||ii;Pt.core.Tween;/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let x0=typeof window<"u"?Mo.useLayoutEffect:Mo.useEffect,y0=n=>n&&!Array.isArray(n)&&typeof n=="object",oc=[],pA={},yM=Pt;const Xr=(n,e=oc)=>{let t=pA;y0(n)?(t=n,n=null,e="dependencies"in t?t.dependencies:oc):y0(e)&&(t=e,e="dependencies"in t?t.dependencies:oc);let{scope:i,revertOnUpdate:r}=t,[s,o]=Mo.useState(!1);n&&typeof n!="function"&&console.warn("First parameter must be a function or config object");const a=yM.context(()=>{},i),l=d=>a.add(null,d),u=()=>a.revert(),c=e&&e.length&&!r;return x0(()=>{if(n&&a.add(n,i),!c||!s)return u},e),c&&x0(()=>(o(!0),u),oc),{context:a,contextSafe:l}};Xr.register=n=>{yM=n};Xr.headless=!0;const mA=({scrollTo:n})=>(Xr(()=>{Pt.to("#header-content",{y:"80vh",opacity:.4,scale:.9,ease:"linear",scrollTrigger:{trigger:"#header",start:"top top",scrub:!0}})},[]),J.jsx("div",{id:"header",className:"relative w-screen h-screen max-h-[1600px] flex flex-col justify-start overflow-hidden z-10  bg-black-soft max-[1600px]:px-8",children:J.jsxs("div",{id:"header-content",className:"w-full h-full flex justify-center items-center flex-col",children:[J.jsx("section",{className:"w-full flex flex-col md:flex-row justify-center md:items-center ",children:J.jsx("div",{className:"w-full",id:"name-box",children:J.jsx("p",{className:"text-white-bone text-xl md:text-center md:text-lg font-inter font-thin select-none mt-56 ",children:"Software Engineer and creative developer"})})}),J.jsx("div",{className:"w-full max-w-[1600px] ",children:J.jsx("h2",{className:"text-white-bone  font-interText font-bold  mb-4 text-md uppercase",children:"My recent Projects"})}),J.jsxs("section",{id:"cta",className:"flex flex-grow w-full max-w-[1600px] justify-center pb-2 gap-5",children:[J.jsx(ch,{onClick:()=>n("#shortbread-selector"),name:"Shortbread AI",pic:"shortbread.jpeg"}),J.jsx(ch,{onClick:()=>n("#climatika-selector"),name:"Climatika",pic:"climatika.png",cn:"hidden min-[800px]:flex"}),J.jsx(ch,{onClick:()=>n("#dvinum-selector"),name:"Dvinum",pic:"dvinum.jpeg",cn:"hidden min-[1000px]:flex"})]}),J.jsx("div",{className:"flex justify-center items-start h-16 ",children:J.jsx("a",{href:"mailto:urdntjuan@gmail.com",children:J.jsx("button",{className:"w-64 h-12 text-black-soft transition-all duration-500 rounded-xl bg-white-bone hover:bg-white-bone/80 ",children:"Let's work together!"})})})]})})),ch=({name:n,pic:e,cn:t,onClick:i})=>{const[r,s]=co.useState(!1);return J.jsxs("div",{onClick:i,className:`relative h-full w-full flex flex-col ${t}`,children:[J.jsx("div",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),className:"relative  h-full max-w-full rounded-lg  overflow-hidden ",children:J.jsx("img",{src:e,alt:n,className:`w-full h-full object-cover ${r?"grayscale-0 scale-105":"grayscale-0 "} transition-all duration-300`})}),J.jsx("p",{className:"text-white-bone w-full h-22 font-inter   font-semibold uppercase text-center py-4",children:n})]})},gA=["shortbread","incept","climatika","dvinum"],_A=()=>(Xr(()=>{Pt.fromTo("#recent-title",{y:200},{y:0,ease:"power2.out",duration:.6,scrollTrigger:{trigger:"#projects",start:"top 90%"}}),gA.forEach((n,e)=>{Pt.fromTo(`#${n}-selector-name`,{x:e%2?420:-420},{x:0,ease:"power2.out",duration:.6,scrollTrigger:{trigger:`#${n}-selector`,start:"top 70%"}})})},[]),J.jsx(J.Fragment,{children:J.jsxs("div",{id:"projects",className:"relative z-20 flex min-h-screen w-screen flex-col items-center justify-center bg-transparent max-[1600px]:px-8 mt-10 md:mt-0",children:[J.jsx("div",{className:"w-full h-48 flex justify-start items-center max-w-[1600px] overflow-hidden  mb-10 md:mb-24",children:J.jsxs("h2",{id:"recent-title",className:"font-inter font-semibold text-3xl md:text-8xl  text-left select-none uppercase",children:["Recent ",J.jsx("br",{}),J.jsx("span",{className:"pl-24",children:"Projects"})]})}),J.jsx("div",{className:"hidden lg:flex w-full justify-center ",children:J.jsxs("article",{className:"w-full max-w-[1600px] ",children:[J.jsx(lc,{stack:["React","Nextjs","Tailwind"],img:"shortbread.jpeg",url:"https://create.shortbread.ai",selectorId:"shortbread",name:"Shortbread.ai Engine",text:"Developed a Webtoon / Webcomics editing experience from scratch that enables users to create and edit webcomics  working closely with the product designer to create a scalable and robust architecture that would guarantee the product to grow without compromising core features. Worked on integrating backend APIs that generated / enhanced / edited images with AI generative models."}),J.jsx("div",{className:"trigger-0"}),J.jsx("div",{className:"trigger-1"}),J.jsx(lc,{stack:["React","Nextjs","Tailwind"],name:"Incept Landing Page",left:!0,url:"https://incept-landing-git-main-anemolo.vercel.app/",img:"incept.webp",selectorId:"incept",text:"Developed a responsive pixel-perfect website, assisted a webgl developer to ensure the component structure to fit the needs for three.js to run and adjust properly to the end design."}),J.jsx("div",{className:"trigger-2"}),J.jsx(lc,{stack:["React","Nextjs","Firebase"],name:"Climatika App",url:"https://config.glassbygaviota.com/climatika",selectorId:"climatika",img:"climatika.png",text:"Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well."}),J.jsx("div",{className:"trigger-3"}),J.jsx(lc,{stack:["Angular","Firebase"],name:"Dvinum",url:"https://app.dvinum.es/id/Sv6raUSulwRS3DN5MgBAnMHUhex2",selectorId:"dvinum",left:!0,img:"dvinum.jpeg",text:"Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Diagnosed and refactored most of the data fetching pipeline and improved load times and app responsiveness overall."}),J.jsx("div",{className:"trigger-4"})]})}),J.jsxs("article",{className:"mb-2 w-full max-w-[1200px] block lg:hidden ",children:[J.jsx(ac,{name:"Shortbread.ai Engine",text:"Developed a Webtoon / Webcomics editing experience from scratch that enables users to create and edit webcomics  working closely with the product designer to create a scalable and robust architecture that would guarantee the product to grow without compromising core features. Worked on integrating backend APIs that generated / enhanced / edited images with AI generative models.",imgSrc:"shortbread.jpeg",order:1}),J.jsx(ac,{name:"Incept Landing Page",text:"Developed a responsive pixel-perfect website, assisted a webgl developer to ensure the component structure to fit the needs for three.js to run and adjust properly to the end design.",imgSrc:"incept.webp",order:3}),J.jsx(ac,{name:"Climatika App",text:"Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well.",imgSrc:"climatika.png",order:4}),J.jsx(ac,{name:"Dvinum",text:"Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Diagnosed and refactored most of the data fetching pipeline and improved load times and app responsiveness overall.",imgSrc:"dvinum.jpeg",order:5})]})]})})),ac=n=>J.jsxs("div",{className:`flex w-full h-full flex-col justify-center items-center mb-10 z-[${n.order}] `,children:[J.jsx("div",{className:"rounded overflow-hidden h-fit w-fit shadow-xl mx-4 mb-2 z-20 ",children:n.grocer?J.jsxs("div",{className:"bg-[#659952] w-[92vw] h-full flex justify-center items-center flex-col",children:[J.jsx("img",{src:"grocer.svg",alt:"img",className:"w-[200px] h-auto"}),J.jsx("p",{className:"text-black-soft font-archivo text-2xl text-left",children:"Grocersave"})]}):J.jsx("img",{src:n.imgSrc,className:" max-w-3/4 h-auto w-[600px]  transition-all duration-300 "})}),J.jsxs("div",{className:"flex w-full flex-col items-center justify-center z-10",children:[J.jsx("p",{className:"text-black-soft font-inter text-3xl text-center ",children:n.name}),J.jsx("div",{className:"p-6",children:J.jsx("p",{className:"text-black-soft max-w-[500px] font-inter text-center text-sm",children:n.text})})]}),J.jsx("hr",{className:"border-black-soft mx-4 opacity-20"})]}),lc=n=>J.jsxs("div",{id:n.selectorId+"-selector",className:`desktop-project flex justify-center w-full h-[75vh] max-h-[800px] ${n.left?"flex-row-reverse":""}`,children:[J.jsxs("div",{className:"relative w-7/12 h-full z-20",children:[J.jsx("div",{className:"relative overflow-hidden shadow-xl mb-4 rounded h-[60%]",children:J.jsx("img",{src:n.img,alt:"img",className:"w-full h-full object-cover  hover:scale-105 transition-all duration-500"})}),J.jsx("p",{className:"text-black-soft font-inter font-light text-left max-w-[90%] text-md ",children:n.text})]}),J.jsxs("div",{id:`${n.selectorId}-selector-name`,className:`px-14 w-5/12 z-10 h-[60%] flex justify-end  ${n.left?"items-end":" items-start"} flex-col`,children:[J.jsx("p",{className:"text-black-soft/70 mb-6 font-inter select-none",children:n.stack.join(" - ")}),J.jsx("p",{className:`text-black-soft mb-8 font-inter font-light max-[1400px]:text-6xl text-8xl ${n.left?"text-right":"text-left"} name-trigger`,children:n.name}),n.url?J.jsx("a",{target:"_blank",href:n.url,children:J.jsx("button",{className:"w-44 h-12 bg-black-soft hover:bg-black-soft/80 transition-all rounded-xl text-white-bone",children:"See live"})}):J.jsx("a",{href:"mailto:urdntjuan@gmail.com",children:J.jsx("button",{className:"w-64 h-12 text-white-bone transition-all duration-500 rounded-xl bg-black-soft hover:bg-black-soft/80 ",children:"Let's work together!"})})]})]}),vA=()=>{const n=co.useRef(null);return Xr(()=>{Pt.fromTo("#lets-talk",{y:200},{y:0,ease:"power2.out",duration:.6,scrollTrigger:{trigger:"#resume-content",start:"10% 20%",markers:!0}})},[]),J.jsx("div",{id:"resume",className:"relative w-screen z-30 flex justify-center ",children:J.jsxs("div",{id:"resume-content",className:"w-4/6 max-w-[1600px] flex flex-col h-full ",children:[J.jsxs("div",{className:"w-full z-10 h-[800px] flex flex-col md:flex-row items-center mb-12 ",children:[J.jsx("p",{className:"w-full md:w-1/2 py-8 md:py-0 text-md md:text-2xl leading-2 md:leading-10 text-left font-inter font-light",children:"During my journey as a web developer, I have worked on various products from the drawing board stage to full production. By collaborating with both product owners and graphic designers, I’ve gained knowledge that allows me to approach technical solutions from a comprehensive perspective."}),J.jsx("div",{className:"w-full md:w-1/2 flex justify-center items-center",children:J.jsx("div",{ref:n,id:"cat-pic",className:"rounded-md overflow-hidden shadow-lg hover:scale-105 transition-all duration-300",children:J.jsx("img",{src:"mulata.jpg",className:"w-[320px] h-[560px] object-cover"})})})]}),J.jsxs("div",{id:"lets-talk",className:"w-full h-full flex flex-col lg:flex-row justify-start items-center gap-12 mb-24 ",children:[J.jsxs("h2",{className:"font-inter font-semibold text-3xl md:text-8xl  mb-12 text-left select-none uppercase",children:["Let's get ",J.jsx("br",{}),J.jsx("span",{className:"pl-20",children:"Talking!"})]}),J.jsxs("div",{className:"w-full lg:w-1/2 flex flex-col ",children:[J.jsx("p",{className:"text-xl text-left font-inter font-light mb-12",children:"Want to work together or looking for an engenieer to join the team? Let’s talk."}),J.jsx("div",{className:"flex justify-center lg:justify-start items-start h-16",children:J.jsx("a",{href:"mailto:urdntjuan@gmail.com",children:J.jsx("button",{className:"w-56 h-12 text-white-bone transition-all duration-500 rounded-xl bg-black-soft hover:bg-black-soft/80 ",children:"Let's work together!"})})})]})]})]})})};function S0(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function xA(n,e,t){return e&&S0(n.prototype,e),t&&S0(n,t),n}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn,of,fi,fs,ds,Da,SM,Zs,$l,MM,Dr,Hi,EM,TM=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},wM=1,Sa=[],tt=[],mr=[],ql=Date.now,sm=function(e,t){return t},yA=function(){var e=$l.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,tt),r.push.apply(r,mr),tt=i,mr=r,sm=function(o,a){return t[o](a)}},Ts=function(e,t){return~mr.indexOf(e)&&mr[mr.indexOf(e)+1][t]},Kl=function(e){return!!~MM.indexOf(e)},Ln=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},bn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},uc="scrollLeft",cc="scrollTop",om=function(){return Dr&&Dr.isPressed||tt.cache++},Wf=function(e,t){var i=function r(s){if(s||s===0){wM&&(fi.history.scrollRestoration="manual");var o=Dr&&Dr.isPressed;s=r.v=Math.round(s)||(Dr&&Dr.iOS?1:0),e(s),r.cacheID=tt.cache,o&&sm("ss",s)}else(t||tt.cache!==r.cacheID||sm("ref"))&&(r.cacheID=tt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},kn={s:uc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wf(function(n){return arguments.length?fi.scrollTo(n,Zt.sc()):fi.pageXOffset||fs[uc]||ds[uc]||Da[uc]||0})},Zt={s:cc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:kn,sc:Wf(function(n){return arguments.length?fi.scrollTo(kn.sc(),n):fi.pageYOffset||fs[cc]||ds[cc]||Da[cc]||0})},Wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ls=function(e,t){var i=t.s,r=t.sc;Kl(e)&&(e=fs.scrollingElement||ds);var s=tt.indexOf(e),o=r===Zt.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+o]||Ln(e,"scroll",om);var a=tt[s+o],l=a||(tt[s+o]=Wf(Ts(e,i),!0)||(Kl(e)?r:Wf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=dn.getProperty(e,"scrollBehavior")==="smooth"),l},am=function(e,t,i){var r=e,s=e,o=ql(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=ql();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(_){var g=a,m=s,h=ql();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-g)*1e3};return{update:c,reset:d,getVelocity:f}},_l=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},M0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},AM=function(){$l=dn.core.globals().ScrollTrigger,$l&&$l.core&&yA()},CM=function(e){return dn=e||TM(),!of&&dn&&typeof document<"u"&&document.body&&(fi=window,fs=document,ds=fs.documentElement,Da=fs.body,MM=[fi,fs,ds,Da],dn.utils.clamp,EM=dn.core.context||function(){},Zs="onpointerenter"in Da?"pointer":"mouse",SM=Gt.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Hi=Gt.eventTypes=("ontouchstart"in ds?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ds?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return wM=0},500),AM(),of=1),of};kn.op=Zt;tt.cache=0;var Gt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){of||CM(dn)||console.warn("Please gsap.registerPlugin(Observer)"),$l||AM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,S=i.onRelease,C=i.onRight,T=i.onLeft,E=i.onUp,P=i.onDown,M=i.onChangeX,y=i.onChangeY,N=i.onChange,U=i.onToggleX,D=i.onToggleY,X=i.onHover,j=i.onHoverEnd,K=i.onMove,Y=i.ignoreCheck,L=i.isNormalizer,G=i.onGestureStart,R=i.onGestureEnd,ie=i.onWheel,te=i.onEnable,Fe=i.onDisable,H=i.onClick,ee=i.scrollSpeed,le=i.capture,ne=i.allowClicks,Ue=i.lockAxis,Ie=i.onLockAxis;this.target=a=Wn(a)||ds,this.vars=i,p&&(p=dn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,ee=ee||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(fi.getComputedStyle(Da).lineHeight)||22);var k,We,Me,Ce,ve,Re,Le,F=this,qe=0,b=0,w=i.passive||!c,W=Ls(a,kn),Q=Ls(a,Zt),re=W(),se=Q(),xe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Hi[0]==="pointerdown",de=Kl(a),oe=a.ownerDocument||fs,ke=[0,0,0],ue=[0,0,0],Ae=0,Qe=function(){return Ae=ql()},ye=function(Te,at){return(F.event=Te)&&p&&~p.indexOf(Te.target)||at&&xe&&Te.pointerType!=="touch"||Y&&Y(Te,at)},Se=function(){F._vx.reset(),F._vy.reset(),We.pause(),d&&d(F)},ze=function(){var Te=F.deltaX=M0(ke),at=F.deltaY=M0(ue),pe=Math.abs(Te)>=r,Xe=Math.abs(at)>=r;N&&(pe||Xe)&&N(F,Te,at,ke,ue),pe&&(C&&F.deltaX>0&&C(F),T&&F.deltaX<0&&T(F),M&&M(F),U&&F.deltaX<0!=qe<0&&U(F),qe=F.deltaX,ke[0]=ke[1]=ke[2]=0),Xe&&(P&&F.deltaY>0&&P(F),E&&F.deltaY<0&&E(F),y&&y(F),D&&F.deltaY<0!=b<0&&D(F),b=F.deltaY,ue[0]=ue[1]=ue[2]=0),(Ce||Me)&&(K&&K(F),Me&&(v(F),Me=!1),Ce=!1),Re&&!(Re=!1)&&Ie&&Ie(F),ve&&(ie(F),ve=!1),k=0},Ye=function(Te,at,pe){ke[pe]+=Te,ue[pe]+=at,F._vx.update(Te),F._vy.update(at),u?k||(k=requestAnimationFrame(ze)):ze()},gt=function(Te,at){Ue&&!Le&&(F.axis=Le=Math.abs(Te)>Math.abs(at)?"x":"y",Re=!0),Le!=="y"&&(ke[2]+=Te,F._vx.update(Te,!0)),Le!=="x"&&(ue[2]+=at,F._vy.update(at,!0)),u?k||(k=requestAnimationFrame(ze)):ze()},Be=function(Te){if(!ye(Te,1)){Te=_l(Te,c);var at=Te.clientX,pe=Te.clientY,Xe=at-F.x,De=pe-F.y,Ge=F.isDragging;F.x=at,F.y=pe,(Ge||Math.abs(F.startX-at)>=s||Math.abs(F.startY-pe)>=s)&&(v&&(Me=!0),Ge||(F.isDragging=!0),gt(Xe,De),Ge||m&&m(F))}},I=F.onPress=function(Oe){ye(Oe,1)||Oe&&Oe.button||(F.axis=Le=null,We.pause(),F.isPressed=!0,Oe=_l(Oe),qe=b=0,F.startX=F.x=Oe.clientX,F.startY=F.y=Oe.clientY,F._vx.reset(),F._vy.reset(),Ln(L?a:oe,Hi[1],Be,w,!0),F.deltaX=F.deltaY=0,x&&x(F))},$=F.onRelease=function(Oe){if(!ye(Oe,1)){bn(L?a:oe,Hi[1],Be,!0);var Te=!isNaN(F.y-F.startY),at=F.isDragging,pe=at&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Xe=_l(Oe);!pe&&Te&&(F._vx.reset(),F._vy.reset(),c&&ne&&dn.delayedCall(.08,function(){if(ql()-Ae>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(oe.createEvent){var De=oe.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,fi,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(De)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,d&&at&&!L&&We.restart(!0),h&&at&&h(F),S&&S(F,pe)}},Z=function(Te){return Te.touches&&Te.touches.length>1&&(F.isGesturing=!0)&&G(Te,F.isDragging)},fe=function(){return(F.isGesturing=!1)||R(F)},he=function(Te){if(!ye(Te)){var at=W(),pe=Q();Ye((at-re)*ee,(pe-se)*ee,1),re=at,se=pe,d&&We.restart(!0)}},je=function(Te){if(!ye(Te)){Te=_l(Te,c),ie&&(ve=!0);var at=(Te.deltaMode===1?l:Te.deltaMode===2?fi.innerHeight:1)*_;Ye(Te.deltaX*at,Te.deltaY*at,0),d&&!L&&We.restart(!0)}},lt=function(Te){if(!ye(Te)){var at=Te.clientX,pe=Te.clientY,Xe=at-F.x,De=pe-F.y;F.x=at,F.y=pe,Ce=!0,d&&We.restart(!0),(Xe||De)&&gt(Xe,De)}},pt=function(Te){F.event=Te,X(F)},xt=function(Te){F.event=Te,j(F)},rt=function(Te){return ye(Te)||_l(Te,c)&&H(F)};We=F._dc=dn.delayedCall(f||.25,Se).pause(),F.deltaX=F.deltaY=0,F._vx=am(0,50,!0),F._vy=am(0,50,!0),F.scrollX=W,F.scrollY=Q,F.isDragging=F.isGesturing=F.isPressed=!1,EM(this),F.enable=function(Oe){return F.isEnabled||(Ln(de?oe:a,"scroll",om),o.indexOf("scroll")>=0&&Ln(de?oe:a,"scroll",he,w,le),o.indexOf("wheel")>=0&&Ln(a,"wheel",je,w,le),(o.indexOf("touch")>=0&&SM||o.indexOf("pointer")>=0)&&(Ln(a,Hi[0],I,w,le),Ln(oe,Hi[2],$),Ln(oe,Hi[3],$),ne&&Ln(a,"click",Qe,!0,!0),H&&Ln(a,"click",rt),G&&Ln(oe,"gesturestart",Z),R&&Ln(oe,"gestureend",fe),X&&Ln(a,Zs+"enter",pt),j&&Ln(a,Zs+"leave",xt),K&&Ln(a,Zs+"move",lt)),F.isEnabled=!0,Oe&&Oe.type&&I(Oe),te&&te(F)),F},F.disable=function(){F.isEnabled&&(Sa.filter(function(Oe){return Oe!==F&&Kl(Oe.target)}).length||bn(de?oe:a,"scroll",om),F.isPressed&&(F._vx.reset(),F._vy.reset(),bn(L?a:oe,Hi[1],Be,!0)),bn(de?oe:a,"scroll",he,le),bn(a,"wheel",je,le),bn(a,Hi[0],I,le),bn(oe,Hi[2],$),bn(oe,Hi[3],$),bn(a,"click",Qe,!0),bn(a,"click",rt),bn(oe,"gesturestart",Z),bn(oe,"gestureend",fe),bn(a,Zs+"enter",pt),bn(a,Zs+"leave",xt),bn(a,Zs+"move",lt),F.isEnabled=F.isPressed=F.isDragging=!1,Fe&&Fe(F))},F.kill=F.revert=function(){F.disable();var Oe=Sa.indexOf(F);Oe>=0&&Sa.splice(Oe,1),Dr===F&&(Dr=0)},Sa.push(F),L&&Kl(a)&&(Dr=F),F.enable(g)},xA(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Gt.version="3.12.5";Gt.create=function(n){return new Gt(n)};Gt.register=CM;Gt.getAll=function(){return Sa.slice()};Gt.getById=function(n){return Sa.filter(function(e){return e.vars.id===n})[0]};TM()&&dn.registerPlugin(Gt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var we,sa,st,Nt,Xi,wt,RM,Xf,Ru,Zl,bl,fc,Mn,yd,lm,In,E0,T0,oa,PM,fh,bM,Nn,um,LM,DM,es,cm,Ig,Na,Og,jf,fm,dh,dc=1,En=Date.now,hh=En(),Ni=0,Ll=0,w0=function(e,t,i){var r=li(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},A0=function(e,t){return t&&(!li(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},SA=function n(){return Ll&&requestAnimationFrame(n)},C0=function(){return yd=1},R0=function(){return yd=0},tr=function(e){return e},Dl=function(e){return Math.round(e*1e5)/1e5||0},NM=function(){return typeof window<"u"},UM=function(){return we||NM()&&(we=window.gsap)&&we.registerPlugin&&we},bo=function(e){return!!~RM.indexOf(e)},IM=function(e){return(e==="Height"?Og:st["inner"+e])||Xi["client"+e]||wt["client"+e]},OM=function(e){return Ts(e,"getBoundingClientRect")||(bo(e)?function(){return ff.width=st.innerWidth,ff.height=Og,ff}:function(){return Pr(e)})},MA=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ts(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?IM(s):e["client"+s])||0}},EA=function(e,t){return!t||~mr.indexOf(e)?OM(e):function(){return ff}},ur=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ts(e,i))?o()-OM(e)()[s]:bo(e)?(Xi[i]||wt[i])-IM(r):e[i]-e["offset"+r])},hc=function(e,t){for(var i=0;i<oa.length;i+=3)(!t||~t.indexOf(oa[i+1]))&&e(oa[i],oa[i+1],oa[i+2])},li=function(e){return typeof e=="string"},zn=function(e){return typeof e=="function"},Nl=function(e){return typeof e=="number"},Qs=function(e){return typeof e=="object"},vl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ph=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Bo=Math.abs,FM="left",kM="top",Fg="right",kg="bottom",vo="width",xo="height",Ql="Right",Jl="Left",eu="Top",tu="Bottom",jt="padding",Ai="margin",Ka="Width",zg="Height",qt="px",Ci=function(e){return st.getComputedStyle(e)},TA=function(e){var t=Ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},P0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Pr=function(e,t){var i=t&&Ci(e)[lm]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Yf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},zM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},wA=function(e){return function(t){return we.utils.snap(zM(e),t)}},Bg=function(e){var t=we.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},AA=function(e){return function(t,i){return Bg(zM(e))(t,i.direction)}},pc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},on=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},sn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},mc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},b0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},gc={toggleActions:"play",anticipatePin:0},$f={top:0,left:0,center:.5,bottom:1,right:1},af=function(e,t){if(li(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in $f?$f[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},_c=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,_=Nt.createElement("div"),g=bo(i)||Ts(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=g?wt:i,v=e.indexOf("start")!==-1,x=v?u:c,S="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(S+=(r===Zt?Fg:kg)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(_,h.children[0]):h.appendChild(_),_._offset=_["offset"+r.op.d2],lf(_,0,r,v),_},lf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ka]=1,s["border"+a+Ka]=0,s[i.p]=t+"px",we.set(e,s)},et=[],dm={},Pu,L0=function(){return En()-Ni>34&&(Pu||(Pu=requestAnimationFrame(Ir)))},Ho=function(){(!Nn||!Nn.isPressed||Nn.startX>wt.clientWidth)&&(tt.cache++,Nn?Pu||(Pu=requestAnimationFrame(Ir)):Ir(),Ni||Do("scrollStart"),Ni=En())},mh=function(){DM=st.innerWidth,LM=st.innerHeight},Ul=function(){tt.cache++,!Mn&&!bM&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!um||DM!==st.innerWidth||Math.abs(st.innerHeight-LM)>st.innerHeight*.25)&&Xf.restart(!0)},Lo={},CA=[],BM=function n(){return sn(nt,"scrollEnd",n)||ao(!0)},Do=function(e){return Lo[e]&&Lo[e].map(function(t){return t()})||CA},oi=[],HM=function(e){for(var t=0;t<oi.length;t+=5)(!e||oi[t+4]&&oi[t+4].query===e)&&(oi[t].style.cssText=oi[t+1],oi[t].getBBox&&oi[t].setAttribute("transform",oi[t+2]||""),oi[t+3].uncache=1)},Hg=function(e,t){var i;for(In=0;In<et.length;In++)i=et[In],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));jf=!0,t&&HM(t),t||Do("revert")},VM=function(e,t){tt.cache++,(t||!On)&&tt.forEach(function(i){return zn(i)&&i.cacheID++&&(i.rec=0)}),li(e)&&(st.history.scrollRestoration=Ig=e)},On,yo=0,D0,RA=function(){if(D0!==yo){var e=D0=yo;requestAnimationFrame(function(){return e===yo&&ao(!0)})}},GM=function(){wt.appendChild(Na),Og=!Nn&&Na.offsetHeight||st.innerHeight,wt.removeChild(Na)},N0=function(e){return Ru(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ao=function(e,t){if(Ni&&!e&&!jf){on(nt,"scrollEnd",BM);return}GM(),On=nt.isRefreshing=!0,tt.forEach(function(r){return zn(r)&&++r.cacheID&&(r.rec=r())});var i=Do("refreshInit");PM&&nt.sort(),t||Hg(),tt.forEach(function(r){zn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),jf=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),fm=1,N0(!0),et.forEach(function(r){var s=ur(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),N0(!1),fm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),tt.forEach(function(r){zn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),VM(Ig,1),Xf.pause(),yo++,On=2,Ir(2),et.forEach(function(r){return zn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),On=nt.isRefreshing=!1,Do("refresh")},hm=0,uf=1,nu,Ir=function(e){if(e===2||!On&&!jf){nt.isUpdating=!0,nu&&nu.update(0);var t=et.length,i=En(),r=i-hh>=50,s=t&&et[0].scroll();if(uf=hm>s?-1:1,On||(hm=s),r&&(Ni&&!yd&&i-Ni>200&&(Ni=0,Do("scrollEnd")),bl=hh,hh=i),uf<0){for(In=t;In-- >0;)et[In]&&et[In].update(0,r);uf=1}else for(In=0;In<t;In++)et[In]&&et[In].update(0,r);nt.isUpdating=!1}Pu=0},pm=[FM,kM,kg,Fg,Ai+tu,Ai+Ql,Ai+eu,Ai+Jl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],cf=pm.concat([vo,xo,"boxSizing","max"+Ka,"max"+zg,"position",Ai,jt,jt+eu,jt+Ql,jt+tu,jt+Jl]),PA=function(e,t,i){Ua(i);var r=e._gsap;if(r.spacerIsNative)Ua(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},gh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=pm.length,o=t.style,a=e.style,l;s--;)l=pm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[kg]=a[Fg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[vo]=Yf(e,kn)+qt,o[xo]=Yf(e,Zt)+qt,o[jt]=a[Ai]=a[kM]=a[FM]="0",Ua(r),a[vo]=a["max"+Ka]=i[vo],a[xo]=a["max"+zg]=i[xo],a[jt]=i[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},bA=/([A-Z])/g,Ua=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(bA,"-$1").toLowerCase())}},vc=function(e){for(var t=cf.length,i=e.style,r=[],s=0;s<t;s++)r.push(cf[s],i[cf[s]]);return r.t=e,r},LA=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},ff={left:0,top:0},U0=function(e,t,i,r,s,o,a,l,u,c,d,f,p,_){zn(e)&&(e=e(l)),li(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?af("0"+e.substr(3),i):0));var g=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Nl(e))p&&(e=we.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&lf(a,i,r,!0);else{zn(t)&&(t=t(l));var x=(e||"0").split(" "),S,C,T,E;v=Wn(t,l)||wt,S=Pr(v)||{},(!S||!S.left&&!S.top)&&Ci(v).display==="none"&&(E=v.style.display,v.style.display="block",S=Pr(v),E?v.style.display=E:v.style.removeProperty("display")),C=af(x[0],S[r.d]),T=af(x[1]||"0",i),e=S[r.p]-u[r.p]-c+C+s-T,a&&lf(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+i,M=o._isStart;m="scroll"+r.d2,lf(o,P,r,M&&P>20||!M&&(d?Math.max(wt[m],Xi[m]):o.parentNode[m])<=P+1),d&&(u=Pr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+qt))}return p&&v&&(m=Pr(v),p.seek(f),h=Pr(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},DA=/(webkit|moz|length|cssText|inset)/i,I0=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=Ci(e);for(o in a)!+o&&!DA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},WM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},xc=function(e,t,i){var r={};r[t.p]="+="+i,we.set(e,r)},O0=function(e,t){var i=Ls(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,_={};u=u||i();var g=WM(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){tt.cache++,o.tween&&Ir()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=we.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",i.wheelHandler),nt.isTouch&&on(e,"touchmove",i.wheelHandler),s},nt=function(){function n(t,i){sa||n.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),cm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ll){this.update=this.refresh=this.kill=tr;return}i=P0(li(i)||Nl(i)||i.nodeType?{trigger:i}:i,gc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,S=s.snap,C=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,M=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?kn:Zt,N=!d&&d!==0,U=Wn(i.scroller||st),D=we.core.getCache(U),X=bo(U),j=("pinType"in i?i.pinType:Ts(U,"pinType")||X&&"fixed")==="fixed",K=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=N&&i.toggleActions.split(" "),L="markers"in i?i.markers:gc.markers,G=X?0:parseFloat(Ci(U)["border"+y.p2+Ka])||0,R=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(R)},te=MA(U,X,y),Fe=EA(U,X),H=0,ee=0,le=0,ne=Ls(U,y),Ue,Ie,k,We,Me,Ce,ve,Re,Le,F,qe,b,w,W,Q,re,se,xe,de,oe,ke,ue,Ae,Qe,ye,Se,ze,Ye,gt,Be,I,$,Z,fe,he,je,lt,pt,xt;if(R._startClamp=R._endClamp=!1,R._dir=y,m*=45,R.scroller=U,R.scroll=E?E.time.bind(E):ne,We=ne(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(PM=1,i.refreshPriority===-9999&&(nu=R)),D.tweenScroll=D.tweenScroll||{top:O0(U,Zt),left:O0(U,kn)},R.tweenTo=Ue=D.tweenScroll[y.p],R.scrubDuration=function(pe){Z=Nl(pe)&&pe,Z?$?$.duration(pe):$=we.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Z,paused:!0,onComplete:function(){return h&&h(R)}}):($&&$.progress(1).kill(),$=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),Be=0,l||(l=r.vars.id)),S&&((!Qs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in wt.style&&we.set(X?[wt,Xi]:U,{scrollBehavior:"auto"}),tt.forEach(function(pe){return zn(pe)&&pe.target===(X?Nt.scrollingElement||Xi:U)&&(pe.smooth=!1)}),k=zn(S.snapTo)?S.snapTo:S.snapTo==="labels"?wA(r):S.snapTo==="labelsDirectional"?AA(r):S.directional!==!1?function(pe,Xe){return Bg(S.snapTo)(pe,En()-ee<500?0:Xe.direction)}:we.utils.snap(S.snapTo),fe=S.duration||{min:.1,max:2},fe=Qs(fe)?Zl(fe.min,fe.max):Zl(fe,fe),he=we.delayedCall(S.delay||Z/2||.1,function(){var pe=ne(),Xe=En()-ee<500,De=Ue.tween;if((Xe||Math.abs(R.getVelocity())<10)&&!De&&!yd&&H!==pe){var Ge=(pe-Ce)/W,Dt=r&&!N?r.totalProgress():Ge,Je=Xe?0:(Dt-I)/(En()-bl)*1e3||0,Ct=we.utils.clamp(-Ge,1-Ge,Bo(Je/2)*Je/.185),nn=Ge+(S.inertia===!1?0:Ct),Rt,yt,A=S,O=A.onStart,z=A.onInterrupt,B=A.onComplete;if(Rt=k(nn,R),Nl(Rt)||(Rt=nn),yt=Math.round(Ce+Rt*W),pe<=ve&&pe>=Ce&&yt!==pe){if(De&&!De._initted&&De.data<=Bo(yt-pe))return;S.inertia===!1&&(Ct=Rt-Ge),Ue(yt,{duration:fe(Bo(Math.max(Bo(nn-Dt),Bo(Rt-Dt))*.185/Je/.05||0)),ease:S.ease||"power3",data:Bo(yt-pe),onInterrupt:function(){return he.restart(!0)&&z&&z(R)},onComplete:function(){R.update(),H=ne(),r&&($?$.resetTo("totalProgress",Rt,r._tTime/r._tDur):r.progress(Rt)),Be=I=r&&!N?r.totalProgress():R.progress,v&&v(R),B&&B(R)}},pe,Ct*W,yt-pe-Ct*W),O&&O(R,Ue.tween)}}else R.isActive&&H!==pe&&he.restart(!0)}).pause()),l&&(dm[l]=R),f=R.trigger=Wn(f||p!==!0&&p),xt=f&&f._gsap&&f._gsap.stRevert,xt&&(xt=xt(R)),p=p===!0?f:Wn(p),li(a)&&(a={targets:f,className:a}),p&&(_===!1||_===Ai||(_=!_&&p.parentNode&&p.parentNode.style&&Ci(p.parentNode).display==="flex"?!1:jt),R.pin=p,Ie=we.core.getCache(p),Ie.spacer?Q=Ie.pinState:(T&&(T=Wn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ie.spacerIsNative=!!T,T&&(Ie.spacerState=vc(T))),Ie.spacer=xe=T||Nt.createElement("div"),xe.classList.add("pin-spacer"),l&&xe.classList.add("pin-spacer-"+l),Ie.pinState=Q=vc(p)),i.force3D!==!1&&we.set(p,{force3D:!0}),R.spacer=xe=Ie.spacer,gt=Ci(p),Qe=gt[_+y.os2],oe=we.getProperty(p),ke=we.quickSetter(p,y.a,qt),gh(p,xe,gt),se=vc(p)),L){b=Qs(L)?P0(L,b0):b0,F=_c("scroller-start",l,U,y,b,0),qe=_c("scroller-end",l,U,y,b,0,F),de=F["offset"+y.op.d2];var rt=Wn(Ts(U,"content")||U);Re=this.markerStart=_c("start",l,rt,y,b,de,0,E),Le=this.markerEnd=_c("end",l,rt,y,b,de,0,E),E&&(pt=we.quickSetter([Re,Le],y.a,qt)),!j&&!(mr.length&&Ts(U,"fixedMarkers")===!0)&&(TA(X?wt:U),we.set([F,qe],{force3D:!0}),Se=we.quickSetter(F,y.a,qt),Ye=we.quickSetter(qe,y.a,qt))}if(E){var Oe=E.vars.onUpdate,Te=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),Oe&&Oe.apply(E,Te||[])})}if(R.previous=function(){return et[et.indexOf(R)-1]},R.next=function(){return et[et.indexOf(R)+1]},R.revert=function(pe,Xe){if(!Xe)return R.kill(!0);var De=pe!==!1||!R.enabled,Ge=Mn;De!==R.isReverted&&(De&&(je=Math.max(ne(),R.scroll.rec||0),le=R.progress,lt=r&&r.progress()),Re&&[Re,Le,F,qe].forEach(function(Dt){return Dt.style.display=De?"none":"block"}),De&&(Mn=R,R.update(De)),p&&(!C||!R.isActive)&&(De?PA(p,xe,Q):gh(p,xe,Ci(p),ye)),De||R.update(De),Mn=Ge,R.isReverted=De)},R.refresh=function(pe,Xe,De,Ge){if(!((Mn||!R.enabled)&&!Xe)){if(p&&pe&&Ni){on(n,"scrollEnd",BM);return}!On&&ie&&ie(R),Mn=R,Ue.tween&&!De&&(Ue.tween.kill(),Ue.tween=0),$&&$.pause(),g&&r&&r.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Dt=te(),Je=Fe(),Ct=E?E.duration():ur(U,y),nn=W<=.01,Rt=0,yt=Ge||0,A=Qs(De)?De.end:i.end,O=i.endTrigger||f,z=Qs(De)?De.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),B=R.pinnedContainer=i.pinnedContainer&&Wn(i.pinnedContainer,R),V=f&&Math.max(0,et.indexOf(R))||0,ce=V,me,_e,Ne,Ve,be,Pe,ct,Wt,gn,Pn,$e,He,Zi;for(L&&Qs(De)&&(He=we.getProperty(F,y.p),Zi=we.getProperty(qe,y.p));ce--;)Pe=et[ce],Pe.end||Pe.refresh(0,1)||(Mn=R),ct=Pe.pin,ct&&(ct===f||ct===p||ct===B)&&!Pe.isReverted&&(Pn||(Pn=[]),Pn.unshift(Pe),Pe.revert(!0,!0)),Pe!==et[ce]&&(V--,ce--);for(zn(z)&&(z=z(R)),z=w0(z,"start",R),Ce=U0(z,f,Dt,y,ne(),Re,F,R,Je,G,j,Ct,E,R._startClamp&&"_startClamp")||(p?-.001:0),zn(A)&&(A=A(R)),li(A)&&!A.indexOf("+=")&&(~A.indexOf(" ")?A=(li(z)?z.split(" ")[0]:"")+A:(Rt=af(A.substr(2),Dt),A=li(z)?z:(E?we.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ce):Ce)+Rt,O=f)),A=w0(A,"end",R),ve=Math.max(Ce,U0(A||(O?"100% 0":Ct),O,Dt,y,ne()+Rt,Le,qe,R,Je,G,j,Ct,E,R._endClamp&&"_endClamp"))||-.001,Rt=0,ce=V;ce--;)Pe=et[ce],ct=Pe.pin,ct&&Pe.start-Pe._pinPush<=Ce&&!E&&Pe.end>0&&(me=Pe.end-(R._startClamp?Math.max(0,Pe.start):Pe.start),(ct===f&&Pe.start-Pe._pinPush<Ce||ct===B)&&isNaN(z)&&(Rt+=me*(1-Pe.progress)),ct===p&&(yt+=me));if(Ce+=Rt,ve+=Rt,R._startClamp&&(R._startClamp+=Rt),R._endClamp&&!On&&(R._endClamp=ve||-.001,ve=Math.min(ve,ur(U,y))),W=ve-Ce||(Ce-=.01)&&.001,nn&&(le=we.utils.clamp(0,1,we.utils.normalize(Ce,ve,je))),R._pinPush=yt,Re&&Rt&&(me={},me[y.a]="+="+Rt,B&&(me[y.p]="-="+ne()),we.set([Re,Le],me)),p&&!(fm&&R.end>=ur(U,y)))me=Ci(p),Ve=y===Zt,Ne=ne(),ue=parseFloat(oe(y.a))+yt,!Ct&&ve>1&&($e=(X?Nt.scrollingElement||Xi:U).style,$e={style:$e,value:$e["overflow"+y.a.toUpperCase()]},X&&Ci(wt)["overflow"+y.a.toUpperCase()]!=="scroll"&&($e.style["overflow"+y.a.toUpperCase()]="scroll")),gh(p,xe,me),se=vc(p),_e=Pr(p,!0),Wt=j&&Ls(U,Ve?kn:Zt)(),_?(ye=[_+y.os2,W+yt+qt],ye.t=xe,ce=_===jt?Yf(p,y)+W+yt:0,ce&&(ye.push(y.d,ce+qt),xe.style.flexBasis!=="auto"&&(xe.style.flexBasis=ce+qt)),Ua(ye),B&&et.forEach(function(dt){dt.pin===B&&dt.vars.pinSpacing!==!1&&(dt._subPinOffset=!0)}),j&&ne(je)):(ce=Yf(p,y),ce&&xe.style.flexBasis!=="auto"&&(xe.style.flexBasis=ce+qt)),j&&(be={top:_e.top+(Ve?Ne-Ce:Wt)+qt,left:_e.left+(Ve?Wt:Ne-Ce)+qt,boxSizing:"border-box",position:"fixed"},be[vo]=be["max"+Ka]=Math.ceil(_e.width)+qt,be[xo]=be["max"+zg]=Math.ceil(_e.height)+qt,be[Ai]=be[Ai+eu]=be[Ai+Ql]=be[Ai+tu]=be[Ai+Jl]="0",be[jt]=me[jt],be[jt+eu]=me[jt+eu],be[jt+Ql]=me[jt+Ql],be[jt+tu]=me[jt+tu],be[jt+Jl]=me[jt+Jl],re=LA(Q,be,C),On&&ne(0)),r?(gn=r._initted,fh(1),r.render(r.duration(),!0,!0),Ae=oe(y.a)-ue+W+yt,ze=Math.abs(W-Ae)>1,j&&ze&&re.splice(re.length-2,2),r.render(0,!0,!0),gn||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),fh(0)):Ae=W,$e&&($e.value?$e.style["overflow"+y.a.toUpperCase()]=$e.value:$e.style.removeProperty("overflow-"+y.a));else if(f&&ne()&&!E)for(_e=f.parentNode;_e&&_e!==wt;)_e._pinOffset&&(Ce-=_e._pinOffset,ve-=_e._pinOffset),_e=_e.parentNode;Pn&&Pn.forEach(function(dt){return dt.revert(!1,!0)}),R.start=Ce,R.end=ve,We=Me=On?je:ne(),!E&&!On&&(We<je&&ne(je),R.scroll.rec=0),R.revert(!1,!0),ee=En(),he&&(H=-1,he.restart(!0)),Mn=0,r&&N&&(r._initted||lt)&&r.progress()!==lt&&r.progress(lt||0,!0).render(r.time(),!0,!0),(nn||le!==R.progress||E||g)&&(r&&!N&&r.totalProgress(E&&Ce<-.001&&!le?we.utils.normalize(Ce,ve,0):le,!0),R.progress=nn||(We-Ce)/W===le?0:le),p&&_&&(xe._pinOffset=Math.round(R.progress*Ae)),$&&$.invalidate(),isNaN(He)||(He-=we.getProperty(F,y.p),Zi-=we.getProperty(qe,y.p),xc(F,y,He),xc(Re,y,He-(Ge||0)),xc(qe,y,Zi),xc(Le,y,Zi-(Ge||0))),nn&&!On&&R.update(),c&&!On&&!w&&(w=!0,c(R),w=!1)}},R.getVelocity=function(){return(ne()-Me)/(En()-bl)*1e3||0},R.endAnimation=function(){vl(R.callbackAnimation),r&&($?$.progress(1):r.paused()?N||vl(r,R.direction<0,1):vl(r,r.reversed()))},R.labelToScroll=function(pe){return r&&r.labels&&(Ce||R.refresh()||Ce)+r.labels[pe]/r.duration()*W||0},R.getTrailing=function(pe){var Xe=et.indexOf(R),De=R.direction>0?et.slice(0,Xe).reverse():et.slice(Xe+1);return(li(pe)?De.filter(function(Ge){return Ge.vars.preventOverlaps===pe}):De).filter(function(Ge){return R.direction>0?Ge.end<=Ce:Ge.start>=ve})},R.update=function(pe,Xe,De){if(!(E&&!De&&!pe)){var Ge=On===!0?je:R.scroll(),Dt=pe?0:(Ge-Ce)/W,Je=Dt<0?0:Dt>1?1:Dt||0,Ct=R.progress,nn,Rt,yt,A,O,z,B,V;if(Xe&&(Me=We,We=E?ne():Ge,S&&(I=Be,Be=r&&!N?r.totalProgress():Je)),m&&p&&!Mn&&!dc&&Ni&&(!Je&&Ce<Ge+(Ge-Me)/(En()-bl)*m?Je=1e-4:Je===1&&ve>Ge+(Ge-Me)/(En()-bl)*m&&(Je=.9999)),Je!==Ct&&R.enabled){if(nn=R.isActive=!!Je&&Je<1,Rt=!!Ct&&Ct<1,z=nn!==Rt,O=z||!!Je!=!!Ct,R.direction=Je>Ct?1:-1,R.progress=Je,O&&!Mn&&(yt=Je&&!Ct?0:Je===1?1:Ct===1?2:3,N&&(A=!z&&Y[yt+1]!=="none"&&Y[yt+1]||Y[yt],V=r&&(A==="complete"||A==="reset"||A in r))),M&&(z||V)&&(V||d||!r)&&(zn(M)?M(R):R.getTrailing(M).forEach(function(Ne){return Ne.endAnimation()})),N||($&&!Mn&&!dc?($._dp._time-$._start!==$._time&&$.render($._dp._time-$._start),$.resetTo?$.resetTo("totalProgress",Je,r._tTime/r._tDur):($.vars.totalProgress=Je,$.invalidate().restart())):r&&r.totalProgress(Je,!!(Mn&&(ee||pe)))),p){if(pe&&_&&(xe.style[_+y.os2]=Qe),!j)ke(Dl(ue+Ae*Je));else if(O){if(B=!pe&&Je>Ct&&ve+1>Ge&&Ge+1>=ur(U,y),C)if(!pe&&(nn||B)){var ce=Pr(p,!0),me=Ge-Ce;I0(p,wt,ce.top+(y===Zt?me:0)+qt,ce.left+(y===Zt?0:me)+qt)}else I0(p,xe);Ua(nn||B?re:se),ze&&Je<1&&nn||ke(ue+(Je===1&&!B?Ae:0))}}S&&!Ue.tween&&!Mn&&!dc&&he.restart(!0),a&&(z||x&&Je&&(Je<1||!dh))&&Ru(a.targets).forEach(function(Ne){return Ne.classList[nn||x?"add":"remove"](a.className)}),o&&!N&&!pe&&o(R),O&&!Mn?(N&&(V&&(A==="complete"?r.pause().totalProgress(1):A==="reset"?r.restart(!0).pause():A==="restart"?r.restart(!0):r[A]()),o&&o(R)),(z||!dh)&&(u&&z&&ph(R,u),K[yt]&&ph(R,K[yt]),x&&(Je===1?R.kill(!1,1):K[yt]=0),z||(yt=Je===1?1:3,K[yt]&&ph(R,K[yt]))),P&&!nn&&Math.abs(R.getVelocity())>(Nl(P)?P:2500)&&(vl(R.callbackAnimation),$?$.progress(1):vl(r,A==="reverse"?1:!Je,1))):N&&o&&!Mn&&o(R)}if(Ye){var _e=E?Ge/E.duration()*(E._caScrollDist||0):Ge;Se(_e+(F._isFlipped?1:0)),Ye(_e)}pt&&pt(-Ge/E.duration()*(E._caScrollDist||0))}},R.enable=function(pe,Xe){R.enabled||(R.enabled=!0,on(U,"resize",Ul),X||on(U,"scroll",Ho),ie&&on(n,"refreshInit",ie),pe!==!1&&(R.progress=le=0,We=Me=H=ne()),Xe!==!1&&R.refresh())},R.getTween=function(pe){return pe&&Ue?Ue.tween:$},R.setPositions=function(pe,Xe,De,Ge){if(E){var Dt=E.scrollTrigger,Je=E.duration(),Ct=Dt.end-Dt.start;pe=Dt.start+Ct*pe/Je,Xe=Dt.start+Ct*Xe/Je}R.refresh(!1,!1,{start:A0(pe,De&&!!R._startClamp),end:A0(Xe,De&&!!R._endClamp)},Ge),R.update()},R.adjustPinSpacing=function(pe){if(ye&&pe){var Xe=ye.indexOf(y.d)+1;ye[Xe]=parseFloat(ye[Xe])+pe+qt,ye[1]=parseFloat(ye[1])+pe+qt,Ua(ye)}},R.disable=function(pe,Xe){if(R.enabled&&(pe!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Xe||$&&$.pause(),je=0,Ie&&(Ie.uncache=1),ie&&sn(n,"refreshInit",ie),he&&(he.pause(),Ue.tween&&Ue.tween.kill()&&(Ue.tween=0)),!X)){for(var De=et.length;De--;)if(et[De].scroller===U&&et[De]!==R)return;sn(U,"resize",Ul),X||sn(U,"scroll",Ho)}},R.kill=function(pe,Xe){R.disable(pe,Xe),$&&!Xe&&$.kill(),l&&delete dm[l];var De=et.indexOf(R);De>=0&&et.splice(De,1),De===In&&uf>0&&In--,De=0,et.forEach(function(Ge){return Ge.scroller===R.scroller&&(De=1)}),De||On||(R.scroll.rec=0),r&&(r.scrollTrigger=null,pe&&r.revert({kill:!1}),Xe||r.kill()),Re&&[Re,Le,F,qe].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),nu===R&&(nu=0),p&&(Ie&&(Ie.uncache=1),De=0,et.forEach(function(Ge){return Ge.pin===p&&De++}),De||(Ie.spacer=0)),i.onKill&&i.onKill(R)},et.push(R),R.enable(!1,!1),xt&&xt(R),r&&r.add&&!W){var at=R.update;R.update=function(){R.update=at,Ce||ve||R.refresh()},we.delayedCall(.01,R.update),W=.01,Ce=ve=0}else R.refresh();p&&RA()},n.register=function(i){return sa||(we=i||UM(),NM()&&window.document&&n.enable(),sa=Ll),sa},n.defaults=function(i){if(i)for(var r in i)gc[r]=i[r];return gc},n.disable=function(i,r){Ll=0,et.forEach(function(o){return o[r?"kill":"disable"](i)}),sn(st,"wheel",Ho),sn(Nt,"scroll",Ho),clearInterval(fc),sn(Nt,"touchcancel",tr),sn(wt,"touchstart",tr),pc(sn,Nt,"pointerdown,touchstart,mousedown",C0),pc(sn,Nt,"pointerup,touchend,mouseup",R0),Xf.kill(),hc(sn);for(var s=0;s<tt.length;s+=3)mc(sn,tt[s],tt[s+1]),mc(sn,tt[s],tt[s+2])},n.enable=function(){if(st=window,Nt=document,Xi=Nt.documentElement,wt=Nt.body,we&&(Ru=we.utils.toArray,Zl=we.utils.clamp,cm=we.core.context||tr,fh=we.core.suppressOverwrites||tr,Ig=st.history.scrollRestoration||"auto",hm=st.pageYOffset,we.core.globals("ScrollTrigger",n),wt)){Ll=1,Na=document.createElement("div"),Na.style.height="100vh",Na.style.position="absolute",GM(),SA(),Gt.register(we),n.isTouch=Gt.isTouch,es=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),um=Gt.isTouch===1,on(st,"wheel",Ho),RM=[st,Nt,Xi,wt],we.matchMedia?(n.matchMedia=function(l){var u=we.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},we.addEventListener("matchMediaInit",function(){return Hg()}),we.addEventListener("matchMediaRevert",function(){return HM()}),we.addEventListener("matchMedia",function(){ao(0,1),Do("matchMedia")}),we.matchMedia("(orientation: portrait)",function(){return mh(),mh})):console.warn("Requires GSAP 3.11.0 or later"),mh(),on(Nt,"scroll",Ho);var i=wt.style,r=i.borderTopStyle,s=we.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Pr(wt),Zt.m=Math.round(o.top+Zt.sc())||0,kn.m=Math.round(o.left+kn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),fc=setInterval(L0,250),we.delayedCall(.5,function(){return dc=0}),on(Nt,"touchcancel",tr),on(wt,"touchstart",tr),pc(on,Nt,"pointerdown,touchstart,mousedown",C0),pc(on,Nt,"pointerup,touchend,mouseup",R0),lm=we.utils.checkPrefix("transform"),cf.push(lm),sa=En(),Xf=we.delayedCall(.2,ao).pause(),oa=[Nt,"visibilitychange",function(){var l=st.innerWidth,u=st.innerHeight;Nt.hidden?(E0=l,T0=u):(E0!==l||T0!==u)&&Ul()},Nt,"DOMContentLoaded",ao,st,"load",ao,st,"resize",Ul],hc(on),et.forEach(function(l){return l.enable(0,1)}),a=0;a<tt.length;a+=3)mc(sn,tt[a],tt[a+1]),mc(sn,tt[a],tt[a+2])}},n.config=function(i){"limitCallbacks"in i&&(dh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(fc)||(fc=r)&&setInterval(L0,r),"ignoreMobileResize"in i&&(um=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(hc(sn)||hc(on,i.autoRefreshEvents||"none"),bM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Wn(i),o=tt.indexOf(s),a=bo(s);~o&&tt.splice(o,a?6:2),r&&(a?mr.unshift(st,r,wt,r,Xi,r):mr.unshift(s,r))},n.clearMatchMedia=function(i){et.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(li(i)?Wn(i):i).getBoundingClientRect(),a=o[s?vo:xo]*r||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},n.positionInViewport=function(i,r,s){li(i)&&(i=Wn(i));var o=i.getBoundingClientRect(),a=o[s?vo:xo],l=r==null?a/2:r in $f?$f[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},n.killAll=function(i){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Lo.killAll||[];Lo={},r.forEach(function(s){return s()})}},n}();nt.version="3.12.5";nt.saveStyles=function(n){return n?Ru(n).forEach(function(e){if(e&&e.style){var t=oi.indexOf(e);t>=0&&oi.splice(t,5),oi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),cm())}}):oi};nt.revert=function(n,e){return Hg(!n,e)};nt.create=function(n,e){return new nt(n,e)};nt.refresh=function(n){return n?Ul():(sa||nt.register())&&ao(!0)};nt.update=function(n){return++tt.cache&&Ir(n===!0?2:0)};nt.clearScrollMemory=VM;nt.maxScroll=function(n,e){return ur(n,e?kn:Zt)};nt.getScrollFunc=function(n,e){return Ls(Wn(n),e?kn:Zt)};nt.getById=function(n){return dm[n]};nt.getAll=function(){return et.filter(function(n){return n.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Ni};nt.snapDirectional=Bg;nt.addEventListener=function(n,e){var t=Lo[n]||(Lo[n]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(n,e){var t=Lo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};nt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=we.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&zn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return zn(s)&&(s=s(),on(nt,"refresh",function(){return s=e.batchMax()})),Ru(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(nt.create(u))}),t};var F0=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},_h=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===Xi&&n(wt,t)},yc={auto:1,scroll:1},NA=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=En(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(yc[(l=Ci(s)).overflowY]||yc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!bo(s)&&(yc[(l=Ci(s)).overflowY]||yc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},XM=function(e,t,i,r){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&NA,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&on(Nt,Gt.eventTypes[0],z0,!1,!0)},onDisable:function(){return sn(Nt,Gt.eventTypes[0],z0,!0)}})},UA=/(input|label|select|textarea)/i,k0,z0=function(e){var t=UA.test(e.target.tagName);(t||k0)&&(e._gsapAllow=!0,k0=t)},IA=function(e){Qs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Wn(e.target)||Xi,c=we.core.globals().ScrollSmoother,d=c&&c.get(),f=es&&(e.content&&Wn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Ls(u,Zt),_=Ls(u,kn),g=1,m=(Gt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,h=0,v=zn(r)?function(){return r(a)}:function(){return r||2.8},x,S,C=XM(u,e.type,!0,s),T=function(){return S=!1},E=tr,P=tr,M=function(){l=ur(u,Zt),P=Zl(es?1:0,l),i&&(E=Zl(0,ur(u,kn))),x=yo},y=function(){f._gsap.y=Dl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},N=function(){if(S){requestAnimationFrame(T);var L=Dl(a.deltaY/2),G=P(p.v-L);if(f&&G!==p.v+p.offset){p.offset=G-p.v;var R=Dl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",p.cacheID=tt.cache,Ir()}return!0}p.offset&&y(),S=!0},U,D,X,j,K=function(){M(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return es&&Y.type==="touchmove"&&N()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=g;g=Dl((st.visualViewport&&st.visualViewport.scale||1)/m),U.pause(),Y!==g&&_h(u,g>1.01?!0:i?!1:"x"),D=_(),X=p(),M(),x=yo},e.onRelease=e.onGestureStart=function(Y,L){if(p.offset&&y(),!L)j.restart(!0);else{tt.cache++;var G=v(),R,ie;i&&(R=_(),ie=R+G*.05*-Y.velocityX/.227,G*=F0(_,R,ie,ur(u,kn)),U.vars.scrollX=E(ie)),R=p(),ie=R+G*.05*-Y.velocityY/.227,G*=F0(p,R,ie,ur(u,Zt)),U.vars.scrollY=P(ie),U.invalidate().duration(G).play(.01),(es&&U.vars.scrollY>=l||R>=l-1)&&we.to({},{onUpdate:K,duration:G})}o&&o(Y)},e.onWheel=function(){U._ts&&U.pause(),En()-h>1e3&&(x=0,h=En())},e.onChange=function(Y,L,G,R,ie){if(yo!==x&&M(),L&&i&&_(E(R[2]===L?D+(Y.startX-Y.x):_()+L-R[1])),G){p.offset&&y();var te=ie[2]===G,Fe=te?X+Y.startY-Y.y:p()+G-ie[1],H=P(Fe);te&&Fe!==H&&(X+=H-Fe),p(H)}(G||L)&&Ir()},e.onEnable=function(){_h(u,i?!1:"x"),nt.addEventListener("refresh",K),on(st,"resize",K),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){_h(u,!0),sn(st,"resize",K),nt.removeEventListener("refresh",K),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=es,es&&!p()&&p(1),es&&we.ticker.add(tr),j=a._dc,U=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:WM(p,p(),function(){return U.pause()})},onUpdate:Ir,onComplete:j.vars.onComplete}),a};nt.sort=function(n){return et.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};nt.observe=function(n){return new Gt(n)};nt.normalizeScroll=function(n){if(typeof n>"u")return Nn;if(n===!0&&Nn)return Nn.enable();if(n===!1){Nn&&Nn.kill(),Nn=n;return}var e=n instanceof Gt?n:IA(n);return Nn&&Nn.target===e.target&&Nn.kill(),bo(e.target)&&(Nn=e),e};nt.core={_getVelocityProp:am,_inputObserver:XM,_scrollers:tt,_proxies:mr,bridge:{ss:function(){Ni||Do("scrollStart"),Ni=En()},ref:function(){return Mn}}};UM()&&we.registerPlugin(nt);var mm=function(){return mm=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},mm.apply(this,arguments)};function jM(n,e,t){return Math.max(n,Math.min(e,t))}class OA{advance(e){var a;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(i=this.value,r=this.to,s=60*this.lerp,o=e,function(l,u,c){return(1-c)*l+c*u}(i,r,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=jM(0,this.currentTime/this.duration,1);t=l>=1;const u=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*u}var i,r,s,o;(a=this.onUpdate)==null||a.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i=.1,duration:r=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class FA{constructor({wrapper:e,content:t,autoResize:i=!0,debounce:r=250}={}){vr(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});vr(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});vr(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,i&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,u=this;clearTimeout(a),a=setTimeout(function(){s.apply(u,l)},o)}}(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class YM{constructor(){this.events={}}emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)}on(e,t){var i;return(i=this.events[e])!=null&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(s=>t!==s)}}off(e,t){var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(r=>t!==r)}destroy(){this.events={}}}const B0=100/6;class kA{constructor(e,{wheelMultiplier:t=1,touchMultiplier:i=1}){vr(this,"onTouchStart",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});vr(this,"onTouchMove",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:e})});vr(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});vr(this,"onWheel",e=>{let{deltaX:t,deltaY:i,deltaMode:r}=e;t*=r===1?B0:r===2?this.windowWidth:1,i*=r===1?B0:r===2?this.windowHeight:1,t*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})});vr(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new YM,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}var zA=function(){function n(e){var t=e===void 0?{}:e,i=t.wrapper,r=i===void 0?window:i,s=t.content,o=s===void 0?document.documentElement:s,a=t.wheelEventsTarget,l=a===void 0?r:a,u=t.eventsTarget,c=u===void 0?l:u,d=t.smoothWheel,f=d===void 0||d,p=t.syncTouch,_=p!==void 0&&p,g=t.syncTouchLerp,m=g===void 0?.075:g,h=t.touchInertiaMultiplier,v=h===void 0?35:h,x=t.duration,S=t.easing,C=S===void 0?function(Fe){return Math.min(1,1.001-Math.pow(2,-10*Fe))}:S,T=t.lerp,E=T===void 0?!x&&.1:T,P=t.infinite,M=P!==void 0&&P,y=t.orientation,N=y===void 0?"vertical":y,U=t.gestureOrientation,D=U===void 0?"vertical":U,X=t.touchMultiplier,j=X===void 0?1:X,K=t.wheelMultiplier,Y=K===void 0?1:K,L=t.autoResize,G=L===void 0||L,R=t.__experimental__naiveDimensions,ie=R!==void 0&&R,te=this;this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=function(Fe){var H=Fe.deltaX,ee=Fe.deltaY,le=Fe.event;if(!le.ctrlKey){var ne=le.type.includes("touch"),Ue=le.type.includes("wheel");if(te.options.syncTouch&&ne&&le.type==="touchstart"&&!te.isStopped&&!te.isLocked)te.reset();else{var Ie=H===0&&ee===0,k=te.options.gestureOrientation==="vertical"&&ee===0||te.options.gestureOrientation==="horizontal"&&H===0;if(!Ie&&!k){var We=le.composedPath();if(!(We=We.slice(0,We.indexOf(te.rootElement))).find(function(Re){var Le,F,qe,b,w;return((Le=Re.hasAttribute)===null||Le===void 0?void 0:Le.call(Re,"data-lenis-prevent"))||ne&&((F=Re.hasAttribute)===null||F===void 0?void 0:F.call(Re,"data-lenis-prevent-touch"))||Ue&&((qe=Re.hasAttribute)===null||qe===void 0?void 0:qe.call(Re,"data-lenis-prevent-wheel"))||((b=Re.classList)===null||b===void 0?void 0:b.contains("lenis"))&&!(!((w=Re.classList)===null||w===void 0)&&w.contains("lenis-stopped"))}))if(te.isStopped||te.isLocked)le.preventDefault();else{if(te.isSmooth=te.options.syncTouch&&ne||te.options.smoothWheel&&Ue,!te.isSmooth)return te.isScrolling=!1,void te.animate.stop();le.preventDefault();var Me=ee;te.options.gestureOrientation==="both"?Me=Math.abs(ee)>Math.abs(H)?ee:H:te.options.gestureOrientation==="horizontal"&&(Me=H);var Ce=ne&&te.options.syncTouch,ve=ne&&le.type==="touchend"&&Math.abs(Me)>5;ve&&(Me=te.velocity*te.options.touchInertiaMultiplier),te.scrollTo(te.targetScroll+Me,mm({programmatic:!1},Ce?{lerp:ve?te.options.syncTouchLerp:1}:{lerp:te.options.lerp,duration:te.options.duration,easing:te.options.easing}))}}}}},this.onNativeScroll=function(){if(!te.__preventNextScrollEvent&&!te.isScrolling){var Fe=te.animatedScroll;te.animatedScroll=te.targetScroll=te.actualScroll,te.velocity=0,te.direction=Math.sign(te.animatedScroll-Fe),te.emit()}},window.lenisVersion="1.0.44",r!==document.documentElement&&r!==document.body||(r=window),this.options={wrapper:r,content:o,wheelEventsTarget:l,eventsTarget:c,smoothWheel:f,syncTouch:_,syncTouchLerp:m,touchInertiaMultiplier:v,duration:x,easing:C,lerp:E,infinite:M,gestureOrientation:D,orientation:N,touchMultiplier:j,wheelMultiplier:Y,autoResize:G,__experimental__naiveDimensions:ie},this.animate=new OA,this.emitter=new YM,this.dimensions=new FA({wrapper:r,content:o,autoResize:G}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=_||f,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new kA(c,{touchMultiplier:j,wheelMultiplier:Y}),this.virtualScroll.on("scroll",this.onVirtualScroll)}return n.prototype.destroy=function(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)},n.prototype.on=function(e,t){return this.emitter.on(e,t)},n.prototype.off=function(e,t){return this.emitter.off(e,t)},n.prototype.setScroll=function(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e},n.prototype.resize=function(){this.dimensions.resize()},n.prototype.emit=function(){this.emitter.emit("scroll",this)},n.prototype.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()},n.prototype.start=function(){this.isStopped&&(this.isStopped=!1,this.reset())},n.prototype.stop=function(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())},n.prototype.raf=function(e){var t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)},n.prototype.scrollTo=function(e,t){var i=this,r=t===void 0?{}:t,s=r.offset,o=s===void 0?0:s,a=r.immediate,l=a!==void 0&&a,u=r.lock,c=u!==void 0&&u,d=r.duration,f=d===void 0?this.options.duration:d,p=r.easing,_=p===void 0?this.options.easing:p,g=r.lerp,m=g===void 0?!f&&this.options.lerp:g,h=r.onComplete,v=r.force,x=v!==void 0&&v,S=r.programmatic,C=S===void 0||S;if(!this.isStopped&&!this.isLocked||x){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{var T=void 0;if(typeof e=="string"?T=document.querySelector(e):e!=null&&e.nodeType&&(T=e),T){if(this.options.wrapper!==window){var E=this.options.wrapper.getBoundingClientRect();o-=this.isHorizontal?E.left:E.top}var P=T.getBoundingClientRect();e=(this.isHorizontal?P.left:P.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=o,e=Math.round(e),this.options.infinite?C&&(this.targetScroll=this.animatedScroll=this.scroll):e=jM(0,e,this.limit),l)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(h==null||h(this));if(!C){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:f,easing:_,lerp:m,onStart:function(){c&&(i.isLocked=!0),i.isScrolling=!0},onUpdate:function(M,y){i.isScrolling=!0,i.velocity=M-i.animatedScroll,i.direction=Math.sign(i.velocity),i.animatedScroll=M,i.setScroll(i.scroll),C&&(i.targetScroll=M),y||i.emit(),y&&(i.reset(),i.emit(),h==null||h(i),i.__preventNextScrollEvent=!0,requestAnimationFrame(function(){delete i.__preventNextScrollEvent}))}})}}},Object.defineProperty(n.prototype,"rootElement",{get:function(){return this.options.wrapper===window?document.documentElement:this.options.wrapper},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"limit",{get:function(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isHorizontal",{get:function(){return this.options.orientation==="horizontal"},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"actualScroll",{get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"scroll",{get:function(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"progress",{get:function(){return this.limit===0?1:this.scroll/this.limit},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isSmooth",{get:function(){return this.__isSmooth},set:function(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isScrolling",{get:function(){return this.__isScrolling},set:function(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isStopped",{get:function(){return this.__isStopped},set:function(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isLocked",{get:function(){return this.__isLocked},set:function(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"className",{get:function(){var e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e},enumerable:!1,configurable:!0}),n.prototype.toggleClassName=function(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)},n}();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vg="164",BA=0,H0=1,HA=2,$M=1,VA=2,Tr=3,Ds=0,ti=1,or=2,ws=0,Ia=1,V0=2,G0=3,W0=4,GA=5,to=100,WA=101,XA=102,jA=103,YA=104,$A=200,qA=201,KA=202,ZA=203,gm=204,_m=205,QA=206,JA=207,eC=208,tC=209,nC=210,iC=211,rC=212,sC=213,oC=214,aC=0,lC=1,uC=2,qf=3,cC=4,fC=5,dC=6,hC=7,qM=0,pC=1,mC=2,As=0,gC=1,_C=2,vC=3,xC=4,yC=5,SC=6,MC=7,KM=300,Za=301,Qa=302,vm=303,xm=304,Sd=306,ym=1e3,lo=1001,Sm=1002,Li=1003,EC=1004,Sc=1005,Yi=1006,vh=1007,uo=1008,Ns=1009,TC=1010,wC=1011,ZM=1012,QM=1013,Ja=1014,hs=1015,Md=1016,JM=1017,e1=1018,Fu=1020,AC=35902,CC=1021,RC=1022,cr=1023,PC=1024,bC=1025,Oa=1026,bu=1027,LC=1028,t1=1029,DC=1030,n1=1031,i1=1033,xh=33776,yh=33777,Sh=33778,Mh=33779,X0=35840,j0=35841,Y0=35842,$0=35843,q0=36196,K0=37492,Z0=37496,Q0=37808,J0=37809,ev=37810,tv=37811,nv=37812,iv=37813,rv=37814,sv=37815,ov=37816,av=37817,lv=37818,uv=37819,cv=37820,fv=37821,Eh=36492,dv=36494,hv=36495,NC=36283,pv=36284,mv=36285,gv=36286,UC=3200,IC=3201,OC=0,FC=1,ss="",nr="srgb",ks="srgb-linear",Gg="display-p3",Ed="display-p3-linear",Kf="linear",Tt="srgb",Zf="rec709",Qf="p3",Vo=7680,_v=519,kC=512,zC=513,BC=514,r1=515,HC=516,VC=517,GC=518,WC=519,vv=35044,xv="300 es",Nr=2e3,Jf=2001;class sl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Th=Math.PI/180,Mm=180/Math.PI;function ku(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function jn(n,e,t){return Math.max(e,Math.min(t,n))}function XC(n,e){return(n%e+e)%e}function wh(n,e,t){return(1-t)*n+t*e}function xl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,u){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],v=r[1],x=r[4],S=r[7],C=r[2],T=r[5],E=r[8];return s[0]=o*g+a*v+l*C,s[3]=o*m+a*x+l*T,s[6]=o*h+a*S+l*E,s[1]=u*g+c*v+d*C,s[4]=u*m+c*x+d*T,s[7]=u*h+c*S+d*E,s[2]=f*g+p*v+_*C,s[5]=f*m+p*x+_*T,s[8]=f*h+p*S+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new Ze;function s1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ed(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jC(){const n=ed("canvas");return n.style.display="block",n}const yv={};function YC(n){n in yv||(yv[n]=!0,console.warn(n))}const Sv=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mv=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mc={[ks]:{transfer:Kf,primaries:Zf,toReference:n=>n,fromReference:n=>n},[nr]:{transfer:Tt,primaries:Zf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ed]:{transfer:Kf,primaries:Qf,toReference:n=>n.applyMatrix3(Mv),fromReference:n=>n.applyMatrix3(Sv)},[Gg]:{transfer:Tt,primaries:Qf,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Mv),fromReference:n=>n.applyMatrix3(Sv).convertLinearToSRGB()}},$C=new Set([ks,Ed]),_t={enabled:!0,_workingColorSpace:ks,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$C.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Mc[e].toReference,r=Mc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Mc[n].primaries},getTransfer:function(n){return n===ss?Kf:Mc[n].transfer}};function Fa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ch(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Go;class qC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Go===void 0&&(Go=ed("canvas")),Go.width=e.width,Go.height=e.height;const i=Go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Go}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ed("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fa(t[i]/255)*255):t[i]=Fa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KC=0;class o1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KC++}),this.uuid=ku(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rh(r[o].image)):s.push(Rh(r[o]))}else s=Rh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Rh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZC=0;class ni extends sl{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,i=lo,r=lo,s=Yi,o=uo,a=cr,l=Ns,u=ni.DEFAULT_ANISOTROPY,c=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZC++}),this.uuid=ku(),this.name="",this.source=new o1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==KM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ym:e.x=e.x-Math.floor(e.x);break;case lo:e.x=e.x<0?0:1;break;case Sm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ym:e.y=e.y-Math.floor(e.y);break;case lo:e.y=e.y<0?0:1;break;case Sm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=KM;ni.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,i=0,r=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,C=(h+1)/2,T=(c+f)/4,E=(d+g)/4,P=(_+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=E/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=E/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QC extends sl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ni(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new o1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class No extends QC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class a1 extends ni{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Li,this.minFilter=Li,this.wrapR=lo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JC extends ni{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Li,this.minFilter=Li,this.wrapR=lo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||u!==p||c!==_){let m=1-a;const h=l*f+u*p+c*_+d*g,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,h*v);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*v;if(l=l*m+f*S,u=u*m+p*S,c=c*m+_*S,d=d*m+g*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-a*p,e[t+2]=u*_+c*p+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ev.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ev.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ph.copy(this).projectOnVector(e),this.sub(Ph)}reflect(e){return this.sub(Ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ph=new q,Ev=new zu;class Bu{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ki):ki.fromBufferAttribute(s,o),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ec.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ec.copy(i.boundingBox)),Ec.applyMatrix4(e.matrixWorld),this.union(Ec)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yl),Tc.subVectors(this.max,yl),Wo.subVectors(e.a,yl),Xo.subVectors(e.b,yl),jo.subVectors(e.c,yl),$r.subVectors(Xo,Wo),qr.subVectors(jo,Xo),Vs.subVectors(Wo,jo);let t=[0,-$r.z,$r.y,0,-qr.z,qr.y,0,-Vs.z,Vs.y,$r.z,0,-$r.x,qr.z,0,-qr.x,Vs.z,0,-Vs.x,-$r.y,$r.x,0,-qr.y,qr.x,0,-Vs.y,Vs.x,0];return!bh(t,Wo,Xo,jo,Tc)||(t=[1,0,0,0,1,0,0,0,1],!bh(t,Wo,Xo,jo,Tc))?!1:(wc.crossVectors($r,qr),t=[wc.x,wc.y,wc.z],bh(t,Wo,Xo,jo,Tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new q,new q,new q,new q,new q,new q,new q,new q],ki=new q,Ec=new Bu,Wo=new q,Xo=new q,jo=new q,$r=new q,qr=new q,Vs=new q,yl=new q,Tc=new q,wc=new q,Gs=new q;function bh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Gs.fromArray(n,s);const a=r.x*Math.abs(Gs.x)+r.y*Math.abs(Gs.y)+r.z*Math.abs(Gs.z),l=e.dot(Gs),u=t.dot(Gs),c=i.dot(Gs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const eR=new Bu,Sl=new q,Lh=new q;class Wg{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):eR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sl.subVectors(e,this.center);const t=Sl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sl.copy(e.center).add(Lh)),this.expandByPoint(Sl.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yr=new q,Dh=new q,Ac=new q,Kr=new q,Nh=new q,Cc=new q,Uh=new q;class tR{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Dh.copy(e).add(t).multiplyScalar(.5),Ac.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(Dh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ac),a=Kr.dot(this.direction),l=-Kr.dot(Ac),u=Kr.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const g=1/c;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Dh).addScaledVector(Ac,f),p}intersectSphere(e,t){yr.subVectors(e.center,this.origin);const i=yr.dot(this.direction),r=yr.dot(yr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,i,r,s){Nh.subVectors(t,e),Cc.subVectors(i,e),Uh.crossVectors(Nh,Cc);let o=this.direction.dot(Uh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kr.subVectors(this.origin,e);const l=a*this.direction.dot(Cc.crossVectors(Kr,Cc));if(l<0)return null;const u=a*this.direction.dot(Nh.cross(Kr));if(u<0||l+u>o)return null;const c=-a*Kr.dot(Uh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yo.setFromMatrixColumn(e,0).length(),s=1/Yo.setFromMatrixColumn(e,1).length(),o=1/Yo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-g*u,t[9]=-a*l,t[2]=g-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+g,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nR,e,iR)}lookAt(e,t,i){const r=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Zr.crossVectors(i,ri),Zr.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Zr.crossVectors(i,ri)),Zr.normalize(),Rc.crossVectors(ri,Zr),r[0]=Zr.x,r[4]=Rc.x,r[8]=ri.x,r[1]=Zr.y,r[5]=Rc.y,r[9]=ri.y,r[2]=Zr.z,r[6]=Rc.z,r[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],v=i[3],x=i[7],S=i[11],C=i[15],T=r[0],E=r[4],P=r[8],M=r[12],y=r[1],N=r[5],U=r[9],D=r[13],X=r[2],j=r[6],K=r[10],Y=r[14],L=r[3],G=r[7],R=r[11],ie=r[15];return s[0]=o*T+a*y+l*X+u*L,s[4]=o*E+a*N+l*j+u*G,s[8]=o*P+a*U+l*K+u*R,s[12]=o*M+a*D+l*Y+u*ie,s[1]=c*T+d*y+f*X+p*L,s[5]=c*E+d*N+f*j+p*G,s[9]=c*P+d*U+f*K+p*R,s[13]=c*M+d*D+f*Y+p*ie,s[2]=_*T+g*y+m*X+h*L,s[6]=_*E+g*N+m*j+h*G,s[10]=_*P+g*U+m*K+h*R,s[14]=_*M+g*D+m*Y+h*ie,s[3]=v*T+x*y+S*X+C*L,s[7]=v*E+x*N+S*j+C*G,s[11]=v*P+x*U+S*K+C*R,s[15]=v*M+x*D+S*Y+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+g*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],v=d*m*u-g*f*u+g*l*p-a*m*p-d*l*h+a*f*h,x=_*f*u-c*m*u-_*l*p+o*m*p+c*l*h-o*f*h,S=c*g*u-_*d*u+_*a*p-o*g*p-c*a*h+o*d*h,C=_*d*l-c*g*l-_*a*f+o*g*f+c*a*m-o*d*m,T=t*v+i*x+r*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(g*f*s-d*m*s-g*r*p+i*m*p+d*r*h-i*f*h)*E,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*E,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(c*m*s-_*f*s+_*r*p-t*m*p-c*r*h+t*f*h)*E,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*E,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*E,e[8]=S*E,e[9]=(_*d*s-c*g*s-_*i*p+t*g*p+c*i*h-t*d*h)*E,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*h+t*a*h)*E,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*E,e[12]=C*E,e[13]=(c*g*r-_*d*r+_*i*f-t*g*f-c*i*m+t*d*m)*E,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*E,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,g=o*c,m=o*d,h=a*d,v=l*u,x=l*c,S=l*d,C=i.x,T=i.y,E=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+S)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+x)*E,r[9]=(m-v)*E,r[10]=(1-(f+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yo.set(r[0],r[1],r[2]).length();const o=Yo.set(r[4],r[5],r[6]).length(),a=Yo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zi.copy(this);const u=1/s,c=1/o,d=1/a;return zi.elements[0]*=u,zi.elements[1]*=u,zi.elements[2]*=u,zi.elements[4]*=c,zi.elements[5]*=c,zi.elements[6]*=c,zi.elements[8]*=d,zi.elements[9]*=d,zi.elements[10]*=d,t.setFromRotationMatrix(zi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Nr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===Nr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Jf)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Nr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let _,g;if(a===Nr)_=(o+s)*d,g=-2*d;else if(a===Jf)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yo=new q,zi=new Jt,nR=new q(0,0,0),iR=new q(1,1,1),Zr=new q,Rc=new q,ri=new q,Tv=new Jt,wv=new zu;class Vr{constructor(e=0,t=0,i=0,r=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(jn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(jn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(jn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wv.setFromEuler(this),this.setFromQuaternion(wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class l1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rR=0;const Av=new q,$o=new zu,Sr=new Jt,Pc=new q,Ml=new q,sR=new q,oR=new zu,Cv=new q(1,0,0),Rv=new q(0,1,0),Pv=new q(0,0,1),bv={type:"added"},aR={type:"removed"},qo={type:"childadded",child:null},Ih={type:"childremoved",child:null};class gi extends sl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rR++}),this.uuid=ku(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const e=new q,t=new Vr,i=new zu,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ze}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.multiply($o),this}rotateOnWorldAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.premultiply($o),this}rotateX(e){return this.rotateOnAxis(Cv,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(Pv,e)}translateOnAxis(e,t){return Av.copy(e).applyQuaternion(this.quaternion),this.position.add(Av.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cv,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(Pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pc.copy(e):Pc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(Ml,Pc,this.up):Sr.lookAt(Pc,Ml,this.up),this.quaternion.setFromRotationMatrix(Sr),r&&(Sr.extractRotation(r.matrixWorld),$o.setFromRotationMatrix(Sr),this.quaternion.premultiply($o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bv),qo.child=e,this.dispatchEvent(qo),qo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aR),Ih.child=e,this.dispatchEvent(Ih),Ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bv),qo.child=e,this.dispatchEvent(qo),qo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,sR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,oR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gi.DEFAULT_UP=new q(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new q,Mr=new q,Oh=new q,Er=new q,Ko=new q,Zo=new q,Lv=new q,Fh=new q,kh=new q,zh=new q;class ar{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bi.subVectors(e,t),r.cross(Bi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bi.subVectors(r,t),Mr.subVectors(i,t),Oh.subVectors(e,t);const o=Bi.dot(Bi),a=Bi.dot(Mr),l=Bi.dot(Oh),u=Mr.dot(Mr),c=Mr.dot(Oh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Er.x),l.addScaledVector(o,Er.y),l.addScaledVector(a,Er.z),l)}static isFrontFacing(e,t,i,r){return Bi.subVectors(i,t),Mr.subVectors(e,t),Bi.cross(Mr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),Bi.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ko.subVectors(r,i),Zo.subVectors(s,i),Fh.subVectors(e,i);const l=Ko.dot(Fh),u=Zo.dot(Fh);if(l<=0&&u<=0)return t.copy(i);kh.subVectors(e,r);const c=Ko.dot(kh),d=Zo.dot(kh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ko,o);zh.subVectors(e,s);const p=Ko.dot(zh),_=Zo.dot(zh);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Zo,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return Lv.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(Lv,a);const h=1/(m+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(Ko,o).addScaledVector(Zo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const u1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Bh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=XC(e,1),t=jn(t,0,1),i=jn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Bh(o,s,e+1/3),this.g=Bh(o,s,e),this.b=Bh(o,s,e-1/3)}return _t.toWorkingColorSpace(this,r),this}setStyle(e,t=nr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nr){const i=u1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}copyLinearToSRGB(e){return this.r=Ch(e.r),this.g=Ch(e.g),this.b=Ch(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nr){return _t.fromWorkingColorSpace(Sn.copy(this),e),Math.round(jn(Sn.r*255,0,255))*65536+Math.round(jn(Sn.g*255,0,255))*256+Math.round(jn(Sn.b*255,0,255))}getHexString(e=nr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(Sn.copy(this),t);const i=Sn.r,r=Sn.g,s=Sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=nr){_t.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,i=Sn.g,r=Sn.b;return e!==nr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(bc);const i=wh(Qr.h,bc.h,t),r=wh(Qr.s,bc.s,t),s=wh(Qr.l,bc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new ft;ft.NAMES=u1;let lR=0;class Td extends sl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=ku(),this.name="",this.type="Material",this.blending=Ia,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gm,this.blendDst=_m,this.blendEquation=to,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=qf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ia&&(i.blending=this.blending),this.side!==Ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gm&&(i.blendSrc=this.blendSrc),this.blendDst!==_m&&(i.blendDst=this.blendDst),this.blendEquation!==to&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_v&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class c1 extends Td{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=qM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new q,Lc=new ht;class gr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return YC("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lc.fromBufferAttribute(this,t),Lc.applyMatrix3(e),this.setXY(t,Lc.x,Lc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),r=Gn(r,this.array),s=Gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vv&&(e.usage=this.usage),e}}class f1 extends gr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class d1 extends gr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class So extends gr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uR=0;const Mi=new Jt,Hh=new gi,Qo=new q,si=new Bu,El=new Bu,rn=new q;class Fo extends sl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uR++}),this.uuid=ku(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s1(e)?d1:f1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,i){return Mi.makeTranslation(e,t,i),this.applyMatrix4(Mi),this}scale(e,t,i){return Mi.makeScale(e,t,i),this.applyMatrix4(Mi),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new So(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];si.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wg);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];El.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(si.min,El.min),si.expandByPoint(rn),rn.addVectors(si.max,El.max),si.expandByPoint(rn)):(si.expandByPoint(El.min),si.expandByPoint(El.max))}si.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)rn.fromBufferAttribute(a,u),l&&(Qo.fromBufferAttribute(e,u),rn.add(Qo)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new q,l[P]=new q;const u=new q,c=new q,d=new q,f=new ht,p=new ht,_=new ht,g=new q,m=new q;function h(P,M,y){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,y),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(N),a[P].add(g),a[M].add(g),a[y].add(g),l[P].add(m),l[M].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,M=v.length;P<M;++P){const y=v[P],N=y.start,U=y.count;for(let D=N,X=N+U;D<X;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new q,S=new q,C=new q,T=new q;function E(P){C.fromBufferAttribute(r,P),T.copy(C);const M=a[P];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(T,M);const N=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,N)}for(let P=0,M=v.length;P<M;++P){const y=v[P],N=y.start,U=y.count;for(let D=N,X=N+U;D<X;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,u=new q,c=new q,d=new q;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new gr(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fo,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dv=new Jt,Ws=new tR,Dc=new Wg,Nv=new q,Jo=new q,ea=new q,ta=new q,Vh=new q,Nc=new q,Uc=new ht,Ic=new ht,Oc=new ht,Uv=new q,Iv=new q,Ov=new q,Fc=new q,kc=new q;class fr extends gi{constructor(e=new Fo,t=new c1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Nc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Vh.fromBufferAttribute(d,e),o?Nc.addScaledVector(Vh,c):Nc.addScaledVector(Vh.sub(t),c))}t.add(Nc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dc.copy(i.boundingSphere),Dc.applyMatrix4(s),Ws.copy(e.ray).recast(e.near),!(Dc.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(Dc,Nv)===null||Ws.origin.distanceToSquared(Nv)>(e.far-e.near)**2))&&(Dv.copy(s).invert(),Ws.copy(e.ray).applyMatrix4(Dv),!(i.boundingBox!==null&&Ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ws)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=x;S<C;S+=3){const T=a.getX(S),E=a.getX(S+1),P=a.getX(S+2);r=zc(this,h,e,i,u,c,d,T,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=zc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=x;S<C;S+=3){const T=S,E=S+1,P=S+2;r=zc(this,h,e,i,u,c,d,T,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=m,x=m+1,S=m+2;r=zc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cR(n,e,t,i,r,s,o,a){let l;if(e.side===ti?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ds,a),l===null)return null;kc.copy(a),kc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(kc);return u<t.near||u>t.far?null:{distance:u,point:kc.clone(),object:n}}function zc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Jo),n.getVertexPosition(l,ea),n.getVertexPosition(u,ta);const c=cR(n,e,t,i,Jo,ea,ta,Fc);if(c){r&&(Uc.fromBufferAttribute(r,a),Ic.fromBufferAttribute(r,l),Oc.fromBufferAttribute(r,u),c.uv=ar.getInterpolation(Fc,Jo,ea,ta,Uc,Ic,Oc,new ht)),s&&(Uc.fromBufferAttribute(s,a),Ic.fromBufferAttribute(s,l),Oc.fromBufferAttribute(s,u),c.uv1=ar.getInterpolation(Fc,Jo,ea,ta,Uc,Ic,Oc,new ht)),o&&(Uv.fromBufferAttribute(o,a),Iv.fromBufferAttribute(o,l),Ov.fromBufferAttribute(o,u),c.normal=ar.getInterpolation(Fc,Jo,ea,ta,Uv,Iv,Ov,new q),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new q,materialIndex:0};ar.getNormal(Jo,ea,ta,d.normal),c.face=d}return c}class Hu extends Fo{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new So(u,3)),this.setAttribute("normal",new So(c,3)),this.setAttribute("uv",new So(d,2));function _(g,m,h,v,x,S,C,T,E,P,M){const y=S/E,N=C/P,U=S/2,D=C/2,X=T/2,j=E+1,K=P+1;let Y=0,L=0;const G=new q;for(let R=0;R<K;R++){const ie=R*N-D;for(let te=0;te<j;te++){const Fe=te*y-U;G[g]=Fe*v,G[m]=ie*x,G[h]=X,u.push(G.x,G.y,G.z),G[g]=0,G[m]=0,G[h]=T>0?1:-1,c.push(G.x,G.y,G.z),d.push(te/E),d.push(1-R/P),Y+=1}}for(let R=0;R<P;R++)for(let ie=0;ie<E;ie++){const te=f+ie+j*R,Fe=f+ie+j*(R+1),H=f+(ie+1)+j*(R+1),ee=f+(ie+1)+j*R;l.push(te,Fe,ee),l.push(Fe,H,ee),L+=6}a.addGroup(p,L,M),p+=L,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function el(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dn(n){const e={};for(let t=0;t<n.length;t++){const i=el(n[t]);for(const r in i)e[r]=i[r]}return e}function fR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function h1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const dR={clone:el,merge:Dn};var hR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends Td{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hR,this.fragmentShader=pR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=el(e.uniforms),this.uniformsGroups=fR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class p1 extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new q,Fv=new ht,kv=new ht;class ji extends p1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mm*2*Math.atan(Math.tan(Th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,Fv,kv),t.subVectors(kv,Fv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Th*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const na=-90,ia=1;class mR extends gi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ji(na,ia,e,t);r.layers=this.layers,this.add(r);const s=new ji(na,ia,e,t);s.layers=this.layers,this.add(s);const o=new ji(na,ia,e,t);o.layers=this.layers,this.add(o);const a=new ji(na,ia,e,t);a.layers=this.layers,this.add(a);const l=new ji(na,ia,e,t);l.layers=this.layers,this.add(l);const u=new ji(na,ia,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Nr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class m1 extends ni{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Za,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gR extends No{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new m1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hu(5,5,5),s=new Gr({name:"CubemapFromEquirect",uniforms:el(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:ws});s.uniforms.tEquirect.value=t;const o=new fr(r,s),a=t.minFilter;return t.minFilter===uo&&(t.minFilter=Yi),new mR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Gh=new q,_R=new q,vR=new Ze;class Js{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Gh.subVectors(i,t).cross(_R.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vR.getNormalMatrix(e),r=this.coplanarPoint(Gh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new Wg,Bc=new q;class g1{constructor(e=new Js,t=new Js,i=new Js,r=new Js,s=new Js,o=new Js){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-p,S-h).normalize(),i[1].setComponents(l+s,f+u,m+p,S+h).normalize(),i[2].setComponents(l+o,f+c,m+_,S+v).normalize(),i[3].setComponents(l-o,f-c,m-_,S-v).normalize(),i[4].setComponents(l-a,f-d,m-g,S-x).normalize(),t===Nr)i[5].setComponents(l+a,f+d,m+g,S+x).normalize();else if(t===Jf)i[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){return Xs.center.set(0,0,0),Xs.radius=.7071067811865476,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Bc.x=r.normal.x>0?e.max.x:e.min.x,Bc.y=r.normal.y>0?e.max.y:e.min.y,Bc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xR(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,_=f.length;p<_;p++){const g=f[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class tl extends Fo{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let x=0;x<u;x++){const S=x*d-s;_.push(S,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,S=v+u*(h+1),C=v+1+u*(h+1),T=v+1+u*h;p.push(x,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new So(_,3)),this.setAttribute("normal",new So(g,3)),this.setAttribute("uv",new So(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.widthSegments,e.heightSegments)}}var yR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ER=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,UR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,VR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$R=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KR="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,QR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_P=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,IP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,OP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,FP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$P=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ib=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ob=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,db=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ab=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ob=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:yR,alphahash_pars_fragment:SR,alphamap_fragment:MR,alphamap_pars_fragment:ER,alphatest_fragment:TR,alphatest_pars_fragment:wR,aomap_fragment:AR,aomap_pars_fragment:CR,batching_pars_vertex:RR,batching_vertex:PR,begin_vertex:bR,beginnormal_vertex:LR,bsdfs:DR,iridescence_fragment:NR,bumpmap_pars_fragment:UR,clipping_planes_fragment:IR,clipping_planes_pars_fragment:OR,clipping_planes_pars_vertex:FR,clipping_planes_vertex:kR,color_fragment:zR,color_pars_fragment:BR,color_pars_vertex:HR,color_vertex:VR,common:GR,cube_uv_reflection_fragment:WR,defaultnormal_vertex:XR,displacementmap_pars_vertex:jR,displacementmap_vertex:YR,emissivemap_fragment:$R,emissivemap_pars_fragment:qR,colorspace_fragment:KR,colorspace_pars_fragment:ZR,envmap_fragment:QR,envmap_common_pars_fragment:JR,envmap_pars_fragment:eP,envmap_pars_vertex:tP,envmap_physical_pars_fragment:dP,envmap_vertex:nP,fog_vertex:iP,fog_pars_vertex:rP,fog_fragment:sP,fog_pars_fragment:oP,gradientmap_pars_fragment:aP,lightmap_pars_fragment:lP,lights_lambert_fragment:uP,lights_lambert_pars_fragment:cP,lights_pars_begin:fP,lights_toon_fragment:hP,lights_toon_pars_fragment:pP,lights_phong_fragment:mP,lights_phong_pars_fragment:gP,lights_physical_fragment:_P,lights_physical_pars_fragment:vP,lights_fragment_begin:xP,lights_fragment_maps:yP,lights_fragment_end:SP,logdepthbuf_fragment:MP,logdepthbuf_pars_fragment:EP,logdepthbuf_pars_vertex:TP,logdepthbuf_vertex:wP,map_fragment:AP,map_pars_fragment:CP,map_particle_fragment:RP,map_particle_pars_fragment:PP,metalnessmap_fragment:bP,metalnessmap_pars_fragment:LP,morphinstance_vertex:DP,morphcolor_vertex:NP,morphnormal_vertex:UP,morphtarget_pars_vertex:IP,morphtarget_vertex:OP,normal_fragment_begin:FP,normal_fragment_maps:kP,normal_pars_fragment:zP,normal_pars_vertex:BP,normal_vertex:HP,normalmap_pars_fragment:VP,clearcoat_normal_fragment_begin:GP,clearcoat_normal_fragment_maps:WP,clearcoat_pars_fragment:XP,iridescence_pars_fragment:jP,opaque_fragment:YP,packing:$P,premultiplied_alpha_fragment:qP,project_vertex:KP,dithering_fragment:ZP,dithering_pars_fragment:QP,roughnessmap_fragment:JP,roughnessmap_pars_fragment:eb,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:nb,shadowmap_vertex:ib,shadowmask_pars_fragment:rb,skinbase_vertex:sb,skinning_pars_vertex:ob,skinning_vertex:ab,skinnormal_vertex:lb,specularmap_fragment:ub,specularmap_pars_fragment:cb,tonemapping_fragment:fb,tonemapping_pars_fragment:db,transmission_fragment:hb,transmission_pars_fragment:pb,uv_pars_fragment:mb,uv_pars_vertex:gb,uv_vertex:_b,worldpos_vertex:vb,background_vert:xb,background_frag:yb,backgroundCube_vert:Sb,backgroundCube_frag:Mb,cube_vert:Eb,cube_frag:Tb,depth_vert:wb,depth_frag:Ab,distanceRGBA_vert:Cb,distanceRGBA_frag:Rb,equirect_vert:Pb,equirect_frag:bb,linedashed_vert:Lb,linedashed_frag:Db,meshbasic_vert:Nb,meshbasic_frag:Ub,meshlambert_vert:Ib,meshlambert_frag:Ob,meshmatcap_vert:Fb,meshmatcap_frag:kb,meshnormal_vert:zb,meshnormal_frag:Bb,meshphong_vert:Hb,meshphong_frag:Vb,meshphysical_vert:Gb,meshphysical_frag:Wb,meshtoon_vert:Xb,meshtoon_frag:jb,points_vert:Yb,points_frag:$b,shadow_vert:qb,shadow_frag:Kb,sprite_vert:Zb,sprite_frag:Qb},ge={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ir={basic:{uniforms:Dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Dn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Dn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ft(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Dn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Dn([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Dn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Dn([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Dn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Dn([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Dn([ge.common,ge.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Dn([ge.lights,ge.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ir.physical={uniforms:Dn([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Hc={r:0,b:0,g:0},js=new Vr,Jb=new Jt;function e2(n,e,t,i,r,s,o){const a=new ft(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function g(v){let x=!1;const S=_(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(v,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Sd)?(c===void 0&&(c=new fr(new Hu(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:el(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),js.copy(x.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(js)),c.material.toneMapped=_t.getTransfer(S.colorSpace)!==Tt,(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new fr(new tl(2,2),new Gr({name:"BackgroundMaterial",uniforms:el(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=_t.getTransfer(S.colorSpace)!==Tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Hc,h1(n)),i.buffers.color.setClear(Hc.r,Hc.g,Hc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:g,addToRenderList:m}}function t2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,N,U,D,X){let j=!1;const K=d(D,U,N);s!==K&&(s=K,u(s.object)),j=p(y,D,U,X),j&&_(y,D,U,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(y,N,U,D),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function d(y,N,U){const D=U.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let j=X[N.id];j===void 0&&(j={},X[N.id]=j);let K=j[D];return K===void 0&&(K=f(l()),j[D]=K),K}function f(y){const N=[],U=[],D=[];for(let X=0;X<t;X++)N[X]=0,U[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:D,object:y,attributes:{},index:null}}function p(y,N,U,D){const X=s.attributes,j=N.attributes;let K=0;const Y=U.getAttributes();for(const L in Y)if(Y[L].location>=0){const R=X[L];let ie=j[L];if(ie===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),R===void 0||R.attribute!==ie||ie&&R.data!==ie.data)return!0;K++}return s.attributesNum!==K||s.index!==D}function _(y,N,U,D){const X={},j=N.attributes;let K=0;const Y=U.getAttributes();for(const L in Y)if(Y[L].location>=0){let R=j[L];R===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(R=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(R=y.instanceColor));const ie={};ie.attribute=R,R&&R.data&&(ie.data=R.data),X[L]=ie,K++}s.attributes=X,s.attributesNum=K,s.index=D}function g(){const y=s.newAttributes;for(let N=0,U=y.length;N<U;N++)y[N]=0}function m(y){h(y,0)}function h(y,N){const U=s.newAttributes,D=s.enabledAttributes,X=s.attributeDivisors;U[y]=1,D[y]===0&&(n.enableVertexAttribArray(y),D[y]=1),X[y]!==N&&(n.vertexAttribDivisor(y,N),X[y]=N)}function v(){const y=s.newAttributes,N=s.enabledAttributes;for(let U=0,D=N.length;U<D;U++)N[U]!==y[U]&&(n.disableVertexAttribArray(U),N[U]=0)}function x(y,N,U,D,X,j,K){K===!0?n.vertexAttribIPointer(y,N,U,X,j):n.vertexAttribPointer(y,N,U,D,X,j)}function S(y,N,U,D){g();const X=D.attributes,j=U.getAttributes(),K=N.defaultAttributeValues;for(const Y in j){const L=j[Y];if(L.location>=0){let G=X[Y];if(G===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(G=y.instanceColor)),G!==void 0){const R=G.normalized,ie=G.itemSize,te=e.get(G);if(te===void 0)continue;const Fe=te.buffer,H=te.type,ee=te.bytesPerElement,le=H===n.INT||H===n.UNSIGNED_INT||G.gpuType===QM;if(G.isInterleavedBufferAttribute){const ne=G.data,Ue=ne.stride,Ie=G.offset;if(ne.isInstancedInterleavedBuffer){for(let k=0;k<L.locationSize;k++)h(L.location+k,ne.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let k=0;k<L.locationSize;k++)m(L.location+k);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let k=0;k<L.locationSize;k++)x(L.location+k,ie/L.locationSize,H,R,Ue*ee,(Ie+ie/L.locationSize*k)*ee,le)}else{if(G.isInstancedBufferAttribute){for(let ne=0;ne<L.locationSize;ne++)h(L.location+ne,G.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ne=0;ne<L.locationSize;ne++)m(L.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ne=0;ne<L.locationSize;ne++)x(L.location+ne,ie/L.locationSize,H,R,ie*ee,ie/L.locationSize*ne*ee,le)}}else if(K!==void 0){const R=K[Y];if(R!==void 0)switch(R.length){case 2:n.vertexAttrib2fv(L.location,R);break;case 3:n.vertexAttrib3fv(L.location,R);break;case 4:n.vertexAttrib4fv(L.location,R);break;default:n.vertexAttrib1fv(L.location,R)}}}}v()}function C(){P();for(const y in i){const N=i[y];for(const U in N){const D=N[U];for(const X in D)c(D[X].object),delete D[X];delete N[U]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const N=i[y.id];for(const U in N){const D=N[U];for(const X in D)c(D[X].object),delete D[X];delete N[U]}delete i[y.id]}function E(y){for(const N in i){const U=i[N];if(U[y.id]===void 0)continue;const D=U[y.id];for(const X in D)c(D[X].object),delete D[X];delete U[y.id]}}function P(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function n2(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(u[p],c[p]);else{f.multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let _=0;_<d;_++)p+=c[_];t.update(p,i,1)}}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=c[g];for(let g=0;g<f.length;g++)t.update(_,i,f[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function i2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==cr&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const E=T===Md&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ns&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==hs&&!E)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:S,maxSamples:C}}function r2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Js,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=h.clippingState||null;l.value=S,S=c(_,f,x,p);for(let C=0;C!==x;++C)S[C]=t[C];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==g;++x,S+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function s2(n){let e=new WeakMap;function t(o,a){return a===vm?o.mapping=Za:a===xm&&(o.mapping=Qa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vm||a===xm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new gR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class v1 extends p1{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ma=4,zv=[.125,.215,.35,.446,.526,.582],no=20,Wh=new v1,Bv=new ft;let Xh=null,jh=0,Yh=0,$h=!1;const eo=(1+Math.sqrt(5))/2,ra=1/eo,Hv=[new q(-eo,ra,0),new q(eo,ra,0),new q(-ra,0,eo),new q(ra,0,eo),new q(0,eo,-ra),new q(0,eo,ra),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,jh,Yh),this._renderer.xr.enabled=$h,e.scissorTest=!1,Vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Za||e.mapping===Qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:Md,format:cr,colorSpace:ks,depthBuffer:!1},r=Gv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o2(s)),this._blurMaterial=a2(s,e,t)}return r}_compileMaterial(e){const t=new fr(this._lodPlanes[0],e);this._renderer.compile(t,Wh)}_sceneToCubeUV(e,t,i,r){const a=new ji(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Bv),c.toneMapping=As,c.autoClear=!1;const p=new c1({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),_=new fr(new Hu,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Bv),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Vc(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Za||e.mapping===Qa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Hv[(r-s-1)%Hv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new fr(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*no-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):no;m>no&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${no}`);const h=[];let v=0;for(let E=0;E<no;++E){const P=E/g,M=Math.exp(-P*P/2);h.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-Ma?r-x+Ma:0),T=4*(this._cubeSize-S);Vc(t,C,T,3*S,2*S),l.setRenderTarget(t),l.render(d,Wh)}}function o2(n){const e=[],t=[],i=[];let r=n;const s=n-Ma+1+zv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ma?l=zv[o-n+Ma-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,h=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,P=T>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(M,g*_*T),x.set(f,m*_*T);const y=[T,T,T,T,T,T];S.set(y,h*_*T)}const C=new Fo;C.setAttribute("position",new gr(v,g)),C.setAttribute("uv",new gr(x,m)),C.setAttribute("faceIndex",new gr(S,h)),e.push(C),r>Ma&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Gv(n,e,t){const i=new No(n,e,t);return i.texture.mapping=Sd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function a2(n,e,t){const i=new Float32Array(no),r=new q(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:no,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function Wv(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function Xv(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function Xg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function l2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===vm||l===xm,c=l===Za||l===Qa;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Vv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Vv(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function u2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function c2(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,S=v.length;x<S;x+=3){const C=v[x+0],T=v[x+1],E=v[x+2];f.push(C,T,T,E,E,C)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const C=x+0,T=x+1,E=x+2;f.push(C,T,T,E,E,C)}}else return;const m=new(s1(f)?d1:f1)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function f2(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*o,_),t.update(p,i,_))}function c(f,p,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<_;m++)this.render(f[m]/o,p[m]);else{g.multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}}function d(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,_);let h=0;for(let v=0;v<_;v++)h+=p[v];for(let v=0;v<g.length;v++)t.update(h,i,g[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function d2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function h2(n,e,t){const i=new WeakMap,r=new hn;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*T*4*d),P=new a1(E,C,T,d);P.type=hs,P.needsUpdate=!0;const M=S*4;for(let N=0;N<d;N++){const U=h[N],D=v[N],X=x[N],j=C*T*4*N;for(let K=0;K<U.count;K++){const Y=K*M;_===!0&&(r.fromBufferAttribute(U,K),E[j+Y+0]=r.x,E[j+Y+1]=r.y,E[j+Y+2]=r.z,E[j+Y+3]=0),g===!0&&(r.fromBufferAttribute(D,K),E[j+Y+4]=r.x,E[j+Y+5]=r.y,E[j+Y+6]=r.z,E[j+Y+7]=0),m===!0&&(r.fromBufferAttribute(X,K),E[j+Y+8]=r.x,E[j+Y+9]=r.y,E[j+Y+10]=r.z,E[j+Y+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new ht(C,T)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function p2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class x1 extends ni{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Oa,c!==Oa&&c!==bu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Oa&&(i=Ja),i===void 0&&c===bu&&(i=Fu),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Li,this.minFilter=l!==void 0?l:Li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const y1=new ni,S1=new x1(1,1);S1.compareFunction=r1;const M1=new a1,E1=new JC,T1=new m1,jv=[],Yv=[],$v=new Float32Array(16),qv=new Float32Array(9),Kv=new Float32Array(4);function ol(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=jv[r];if(s===void 0&&(s=new Float32Array(r),jv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wd(n,e){let t=Yv[e];t===void 0&&(t=new Int32Array(e),Yv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function m2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function g2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function v2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function x2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Kv.set(i),n.uniformMatrix2fv(this.addr,!1,Kv),tn(t,i)}}function y2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;qv.set(i),n.uniformMatrix3fv(this.addr,!1,qv),tn(t,i)}}function S2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;$v.set(i),n.uniformMatrix4fv(this.addr,!1,$v),tn(t,i)}}function M2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function A2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function C2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function P2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function b2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?S1:y1;t.setTexture2D(e||s,r)}function L2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||E1,r)}function D2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||T1,r)}function N2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||M1,r)}function U2(n){switch(n){case 5126:return m2;case 35664:return g2;case 35665:return _2;case 35666:return v2;case 35674:return x2;case 35675:return y2;case 35676:return S2;case 5124:case 35670:return M2;case 35667:case 35671:return E2;case 35668:case 35672:return T2;case 35669:case 35673:return w2;case 5125:return A2;case 36294:return C2;case 36295:return R2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return b2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return D2;case 36289:case 36303:case 36311:case 36292:return N2}}function I2(n,e){n.uniform1fv(this.addr,e)}function O2(n,e){const t=ol(e,this.size,2);n.uniform2fv(this.addr,t)}function F2(n,e){const t=ol(e,this.size,3);n.uniform3fv(this.addr,t)}function k2(n,e){const t=ol(e,this.size,4);n.uniform4fv(this.addr,t)}function z2(n,e){const t=ol(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function B2(n,e){const t=ol(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H2(n,e){const t=ol(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function V2(n,e){n.uniform1iv(this.addr,e)}function G2(n,e){n.uniform2iv(this.addr,e)}function W2(n,e){n.uniform3iv(this.addr,e)}function X2(n,e){n.uniform4iv(this.addr,e)}function j2(n,e){n.uniform1uiv(this.addr,e)}function Y2(n,e){n.uniform2uiv(this.addr,e)}function $2(n,e){n.uniform3uiv(this.addr,e)}function q2(n,e){n.uniform4uiv(this.addr,e)}function K2(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||y1,s[o])}function Z2(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||E1,s[o])}function Q2(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||T1,s[o])}function J2(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||M1,s[o])}function eL(n){switch(n){case 5126:return I2;case 35664:return O2;case 35665:return F2;case 35666:return k2;case 35674:return z2;case 35675:return B2;case 35676:return H2;case 5124:case 35670:return V2;case 35667:case 35671:return G2;case 35668:case 35672:return W2;case 35669:case 35673:return X2;case 5125:return j2;case 36294:return Y2;case 36295:return $2;case 36296:return q2;case 35678:case 36198:case 36298:case 36306:case 35682:return K2;case 35679:case 36299:case 36307:return Z2;case 35680:case 36300:case 36308:case 36293:return Q2;case 36289:case 36303:case 36311:case 36292:return J2}}class tL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U2(t.type)}}class nL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eL(t.type)}}class iL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function Zv(n,e){n.seq.push(e),n.map[e.id]=e}function rL(n,e,t){const i=n.name,r=i.length;for(qh.lastIndex=0;;){const s=qh.exec(i),o=qh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Zv(t,u===void 0?new tL(a,n,e):new nL(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new iL(a),Zv(t,d)),t=d}}}class df{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Qv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sL=37297;let oL=0;function aL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function lL(n){const e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(n);let i;switch(e===t?i="":e===Qf&&t===Zf?i="LinearDisplayP3ToLinearSRGB":e===Zf&&t===Qf&&(i="LinearSRGBToLinearDisplayP3"),n){case ks:case Ed:return[i,"LinearTransferOETF"];case nr:case Gg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Jv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aL(n.getShaderSource(e),o)}else return r}function uL(n,e){const t=lL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cL(n,e){let t;switch(e){case gC:t="Linear";break;case _C:t="Reinhard";break;case vC:t="OptimizedCineon";break;case xC:t="ACESFilmic";break;case SC:t="AgX";break;case MC:t="Neutral";break;case yC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function dL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Il(n){return n!==""}function ex(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Em(n){return n.replace(pL,gL)}const mL=new Map;function gL(n,e){let t=Ke[e];if(t===void 0){const i=mL.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Em(t)}const _L=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nx(n){return n.replace(_L,vL)}function vL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ix(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$M?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===VA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tr&&(e="SHADOWMAP_TYPE_VSM"),e}function yL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Za:case Qa:e="ENVMAP_TYPE_CUBE";break;case Sd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qa:e="ENVMAP_MODE_REFRACTION";break}return e}function ML(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qM:e="ENVMAP_BLENDING_MULTIPLY";break;case pC:e="ENVMAP_BLENDING_MIX";break;case mC:e="ENVMAP_BLENDING_ADD";break}return e}function EL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function TL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xL(t),u=yL(t),c=SL(t),d=ML(t),f=EL(t),p=fL(t),_=dL(s),g=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Il).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Il).join(`
`),h.length>0&&(h+=`
`)):(m=[ix(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),h=[ix(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==As?"#define TONE_MAPPING":"",t.toneMapping!==As?Ke.tonemapping_pars_fragment:"",t.toneMapping!==As?cL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,uL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Il).join(`
`)),o=Em(o),o=ex(o,t),o=tx(o,t),a=Em(a),a=ex(a,t),a=tx(a,t),o=nx(o),a=nx(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,S=v+h+a,C=Qv(r,r.VERTEX_SHADER,x),T=Qv(r,r.FRAGMENT_SHADER,S);r.attachShader(g,C),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function E(N){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(g).trim(),D=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(T).trim();let j=!0,K=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,T);else{const Y=Jv(r,C,"vertex"),L=Jv(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+U+`
`+Y+`
`+L)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||X==="")&&(K=!1);K&&(N.diagnostics={runnable:j,programLog:U,vertexShader:{log:D,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(C),r.deleteShader(T),P=new df(r,g),M=hL(r,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,sL)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oL++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}let wL=0;class AL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CL(e),t.set(e,i)),i}}class CL{constructor(e){this.id=wL++,this.code=e,this.usedTimes=0}}function RL(n,e,t,i,r,s,o){const a=new l1,l=new AL,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,y,N,U,D){const X=U.fog,j=D.geometry,K=M.isMeshStandardMaterial?U.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),L=Y&&Y.mapping===Sd?Y.image.height:null,G=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const R=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ie=R!==void 0?R.length:0;let te=0;j.morphAttributes.position!==void 0&&(te=1),j.morphAttributes.normal!==void 0&&(te=2),j.morphAttributes.color!==void 0&&(te=3);let Fe,H,ee,le;if(G){const rt=ir[G];Fe=rt.vertexShader,H=rt.fragmentShader}else Fe=M.vertexShader,H=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const ne=n.getRenderTarget(),Ue=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,k=!!M.map,We=!!M.matcap,Me=!!Y,Ce=!!M.aoMap,ve=!!M.lightMap,Re=!!M.bumpMap,Le=!!M.normalMap,F=!!M.displacementMap,qe=!!M.emissiveMap,b=!!M.metalnessMap,w=!!M.roughnessMap,W=M.anisotropy>0,Q=M.clearcoat>0,re=M.dispersion>0,se=M.iridescence>0,xe=M.sheen>0,de=M.transmission>0,oe=W&&!!M.anisotropyMap,ke=Q&&!!M.clearcoatMap,ue=Q&&!!M.clearcoatNormalMap,Ae=Q&&!!M.clearcoatRoughnessMap,Qe=se&&!!M.iridescenceMap,ye=se&&!!M.iridescenceThicknessMap,Se=xe&&!!M.sheenColorMap,ze=xe&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,gt=!!M.specularColorMap,Be=!!M.specularIntensityMap,I=de&&!!M.transmissionMap,$=de&&!!M.thicknessMap,Z=!!M.gradientMap,fe=!!M.alphaMap,he=M.alphaTest>0,je=!!M.alphaHash,lt=!!M.extensions;let pt=As;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(pt=n.toneMapping);const xt={shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:Fe,fragmentShader:H,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ie,instancing:Ue,instancingColor:Ue&&D.instanceColor!==null,instancingMorph:Ue&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ks,alphaToCoverage:!!M.alphaToCoverage,map:k,matcap:We,envMap:Me,envMapMode:Me&&Y.mapping,envMapCubeUVHeight:L,aoMap:Ce,lightMap:ve,bumpMap:Re,normalMap:Le,displacementMap:f&&F,emissiveMap:qe,normalMapObjectSpace:Le&&M.normalMapType===FC,normalMapTangentSpace:Le&&M.normalMapType===OC,metalnessMap:b,roughnessMap:w,anisotropy:W,anisotropyMap:oe,clearcoat:Q,clearcoatMap:ke,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ae,dispersion:re,iridescence:se,iridescenceMap:Qe,iridescenceThicknessMap:ye,sheen:xe,sheenColorMap:Se,sheenRoughnessMap:ze,specularMap:Ye,specularColorMap:gt,specularIntensityMap:Be,transmission:de,transmissionMap:I,thicknessMap:$,gradientMap:Z,opaque:M.transparent===!1&&M.blending===Ia&&M.alphaToCoverage===!1,alphaMap:fe,alphaTest:he,alphaHash:je,combine:M.combine,mapUv:k&&g(M.map.channel),aoMapUv:Ce&&g(M.aoMap.channel),lightMapUv:ve&&g(M.lightMap.channel),bumpMapUv:Re&&g(M.bumpMap.channel),normalMapUv:Le&&g(M.normalMap.channel),displacementMapUv:F&&g(M.displacementMap.channel),emissiveMapUv:qe&&g(M.emissiveMap.channel),metalnessMapUv:b&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:oe&&g(M.anisotropyMap.channel),clearcoatMapUv:ke&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(M.sheenRoughnessMap.channel),specularMapUv:Ye&&g(M.specularMap.channel),specularColorMapUv:gt&&g(M.specularColorMap.channel),specularIntensityMapUv:Be&&g(M.specularIntensityMap.channel),transmissionMapUv:I&&g(M.transmissionMap.channel),thicknessMapUv:$&&g(M.thicknessMap.channel),alphaMapUv:fe&&g(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Le||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!j.attributes.uv&&(k||fe),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:k&&M.map.isVideoTexture===!0&&_t.getTransfer(M.map.colorSpace)===Tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===or,flipSided:M.side===ti,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:lt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:lt&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return xt.vertexUv1s=u.has(1),xt.vertexUv2s=u.has(2),xt.vertexUv3s=u.has(3),u.clear(),xt}function h(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)y.push(N),y.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(y,M),x(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function v(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),M.push(a.mask)}function S(M){const y=_[M.type];let N;if(y){const U=ir[y];N=dR.clone(U.uniforms)}else N=M.uniforms;return N}function C(M,y){let N;for(let U=0,D=c.length;U<D;U++){const X=c[U];if(X.cacheKey===y){N=X,++N.usedTimes;break}}return N===void 0&&(N=new TL(n,y,M,s),c.push(N)),N}function T(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:P}}function PL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function bL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,g,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||bL),i.length>1&&i.sort(f||rx),r.length>1&&r.sort(f||rx)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function LL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new sx,n.set(i,[o])):r>=s.length?(o=new sx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function DL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ft};break;case"SpotLight":t={position:new q,direction:new q,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function NL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UL=0;function IL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OL(n){const e=new DL,t=NL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new q);const r=new q,s=new Jt,o=new Jt;function a(u,c){let d=0,f=0,p=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,g=0,m=0,h=0,v=0,x=0,S=0,C=0,T=0,E=0,P=0;u.sort(IL);const M=c===!0?Math.PI:1;for(let N=0,U=u.length;N<U;N++){const D=u[N],X=D.color,j=D.intensity,K=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=X.r*j*M,f+=X.g*j*M,p+=X.b*j*M;else if(D.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(D.sh.coefficients[L],j);P++}else if(D.isDirectionalLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const G=D.shadow,R=t.get(D);R.shadowBias=G.bias,R.shadowNormalBias=G.normalBias,R.shadowRadius=G.radius,R.shadowMapSize=G.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=D.shadow.matrix,x++}i.directional[_]=L,_++}else if(D.isSpotLight){const L=e.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(X).multiplyScalar(j*M),L.distance=K,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,i.spot[m]=L;const G=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,G.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[m]=G.matrix,D.castShadow){const R=t.get(D);R.shadowBias=G.bias,R.shadowNormalBias=G.normalBias,R.shadowRadius=G.radius,R.shadowMapSize=G.mapSize,i.spotShadow[m]=R,i.spotShadowMap[m]=Y,C++}m++}else if(D.isRectAreaLight){const L=e.get(D);L.color.copy(X).multiplyScalar(j),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),i.rectArea[h]=L,h++}else if(D.isPointLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*M),L.distance=D.distance,L.decay=D.decay,D.castShadow){const G=D.shadow,R=t.get(D);R.shadowBias=G.bias,R.shadowNormalBias=G.normalBias,R.shadowRadius=G.radius,R.shadowMapSize=G.mapSize,R.shadowCameraNear=G.camera.near,R.shadowCameraFar=G.camera.far,i.pointShadow[g]=R,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=L,g++}else if(D.isHemisphereLight){const L=e.get(D);L.skyColor.copy(D.color).multiplyScalar(j*M),L.groundColor.copy(D.groundColor).multiplyScalar(j*M),i.hemi[v]=L,v++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==_||y.pointLength!==g||y.spotLength!==m||y.rectAreaLength!==h||y.hemiLength!==v||y.numDirectionalShadows!==x||y.numPointShadows!==S||y.numSpotShadows!==C||y.numSpotMaps!==T||y.numLightProbes!==P)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=h,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,y.directionalLength=_,y.pointLength=g,y.spotLength=m,y.rectAreaLength=h,y.hemiLength=v,y.numDirectionalShadows=x,y.numPointShadows=S,y.numSpotShadows=C,y.numSpotMaps=T,y.numLightProbes=P,i.version=UL++)}function l(u,c){let d=0,f=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function ox(n){const e=new OL(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(c){e.setup(t,c)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function FL(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ox(n),e.set(r,[a])):s>=o.length?(a=new ox(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class kL extends Td{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zL extends Td{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const BL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VL(n,e,t){let i=new g1;const r=new ht,s=new ht,o=new hn,a=new kL({depthPacking:IC}),l=new zL,u={},c=t.maxTextureSize,d={[Ds]:ti,[ti]:Ds,[or]:or},f=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:BL,fragmentShader:HL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Fo;_.setAttribute("position",new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fr(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$M;let h=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ws),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=h!==Tr&&this.type===Tr,X=h===Tr&&this.type!==Tr;for(let j=0,K=T.length;j<K;j++){const Y=T[j],L=Y.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const G=L.getFrameExtents();if(r.multiply(G),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/G.x),r.x=s.x*G.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/G.y),r.y=s.y*G.y,L.mapSize.y=s.y)),L.map===null||D===!0||X===!0){const ie=this.type!==Tr?{minFilter:Li,magFilter:Li}:{};L.map!==null&&L.map.dispose(),L.map=new No(r.x,r.y,ie),L.map.texture.name=Y.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const R=L.getViewportCount();for(let ie=0;ie<R;ie++){const te=L.getViewport(ie);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),U.viewport(o),L.updateMatrices(Y,ie),i=L.getFrustum(),S(E,P,L.camera,Y,this.type)}L.isPointLightShadow!==!0&&this.type===Tr&&v(L,P),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,y,N)};function v(T,E){const P=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new No(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,P,f,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,P,p,g,null)}function x(T,E,P,M){let y=null;const N=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)y=N;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=y.uuid,D=E.uuid;let X=u[U];X===void 0&&(X={},u[U]=X);let j=X[D];j===void 0&&(j=y.clone(),X[D]=j,E.addEventListener("dispose",C)),y=j}if(y.visible=E.visible,y.wireframe=E.wireframe,M===Tr?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=P}return y}function S(T,E,P,M,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Tr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const D=e.update(T),X=T.material;if(Array.isArray(X)){const j=D.groups;for(let K=0,Y=j.length;K<Y;K++){const L=j[K],G=X[L.materialIndex];if(G&&G.visible){const R=x(T,G,M,y);T.onBeforeShadow(n,T,E,P,D,R,L),n.renderBufferDirect(P,null,D,R,T,L),T.onAfterShadow(n,T,E,P,D,R,L)}}}else if(X.visible){const j=x(T,X,M,y);T.onBeforeShadow(n,T,E,P,D,j,null),n.renderBufferDirect(P,null,D,j,T,null),T.onAfterShadow(n,T,E,P,D,j,null)}}const U=T.children;for(let D=0,X=U.length;D<X;D++)S(U[D],E,P,M,y)}function C(T){T.target.removeEventListener("dispose",C);for(const P in u){const M=u[P],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function GL(n){function e(){let I=!1;const $=new hn;let Z=null;const fe=new hn(0,0,0,0);return{setMask:function(he){Z!==he&&!I&&(n.colorMask(he,he,he,he),Z=he)},setLocked:function(he){I=he},setClear:function(he,je,lt,pt,xt){xt===!0&&(he*=pt,je*=pt,lt*=pt),$.set(he,je,lt,pt),fe.equals($)===!1&&(n.clearColor(he,je,lt,pt),fe.copy($))},reset:function(){I=!1,Z=null,fe.set(-1,0,0,0)}}}function t(){let I=!1,$=null,Z=null,fe=null;return{setTest:function(he){he?le(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(he){$!==he&&!I&&(n.depthMask(he),$=he)},setFunc:function(he){if(Z!==he){switch(he){case aC:n.depthFunc(n.NEVER);break;case lC:n.depthFunc(n.ALWAYS);break;case uC:n.depthFunc(n.LESS);break;case qf:n.depthFunc(n.LEQUAL);break;case cC:n.depthFunc(n.EQUAL);break;case fC:n.depthFunc(n.GEQUAL);break;case dC:n.depthFunc(n.GREATER);break;case hC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=he}},setLocked:function(he){I=he},setClear:function(he){fe!==he&&(n.clearDepth(he),fe=he)},reset:function(){I=!1,$=null,Z=null,fe=null}}}function i(){let I=!1,$=null,Z=null,fe=null,he=null,je=null,lt=null,pt=null,xt=null;return{setTest:function(rt){I||(rt?le(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(rt){$!==rt&&!I&&(n.stencilMask(rt),$=rt)},setFunc:function(rt,Oe,Te){(Z!==rt||fe!==Oe||he!==Te)&&(n.stencilFunc(rt,Oe,Te),Z=rt,fe=Oe,he=Te)},setOp:function(rt,Oe,Te){(je!==rt||lt!==Oe||pt!==Te)&&(n.stencilOp(rt,Oe,Te),je=rt,lt=Oe,pt=Te)},setLocked:function(rt){I=rt},setClear:function(rt){xt!==rt&&(n.clearStencil(rt),xt=rt)},reset:function(){I=!1,$=null,Z=null,fe=null,he=null,je=null,lt=null,pt=null,xt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,S=null,C=null,T=new ft(0,0,0),E=0,P=!1,M=null,y=null,N=null,U=null,D=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=K>=2);let L=null,G={};const R=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),te=new hn().fromArray(R),Fe=new hn().fromArray(ie);function H(I,$,Z,fe){const he=new Uint8Array(4),je=n.createTexture();n.bindTexture(I,je),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<Z;lt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D($,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D($+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return je}const ee={};ee[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(n.DEPTH_TEST),s.setFunc(qf),Re(!1),Le(H0),le(n.CULL_FACE),Ce(ws);function le(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function ne(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ue(I,$){return c[I]!==$?(n.bindFramebuffer(I,$),c[I]=$,I===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=$),I===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=$),!0):!1}function Ie(I,$){let Z=f,fe=!1;if(I){Z=d.get($),Z===void 0&&(Z=[],d.set($,Z));const he=I.textures;if(Z.length!==he.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let je=0,lt=he.length;je<lt;je++)Z[je]=n.COLOR_ATTACHMENT0+je;Z.length=he.length,fe=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,fe=!0);fe&&n.drawBuffers(Z)}function k(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const We={[to]:n.FUNC_ADD,[WA]:n.FUNC_SUBTRACT,[XA]:n.FUNC_REVERSE_SUBTRACT};We[jA]=n.MIN,We[YA]=n.MAX;const Me={[$A]:n.ZERO,[qA]:n.ONE,[KA]:n.SRC_COLOR,[gm]:n.SRC_ALPHA,[nC]:n.SRC_ALPHA_SATURATE,[eC]:n.DST_COLOR,[QA]:n.DST_ALPHA,[ZA]:n.ONE_MINUS_SRC_COLOR,[_m]:n.ONE_MINUS_SRC_ALPHA,[tC]:n.ONE_MINUS_DST_COLOR,[JA]:n.ONE_MINUS_DST_ALPHA,[iC]:n.CONSTANT_COLOR,[rC]:n.ONE_MINUS_CONSTANT_COLOR,[sC]:n.CONSTANT_ALPHA,[oC]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(I,$,Z,fe,he,je,lt,pt,xt,rt){if(I===ws){_===!0&&(ne(n.BLEND),_=!1);return}if(_===!1&&(le(n.BLEND),_=!0),I!==GA){if(I!==g||rt!==P){if((m!==to||x!==to)&&(n.blendEquation(n.FUNC_ADD),m=to,x=to),rt)switch(I){case Ia:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case V0:n.blendFunc(n.ONE,n.ONE);break;case G0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case W0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case V0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case G0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case W0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,v=null,S=null,C=null,T.set(0,0,0),E=0,g=I,P=rt}return}he=he||$,je=je||Z,lt=lt||fe,($!==m||he!==x)&&(n.blendEquationSeparate(We[$],We[he]),m=$,x=he),(Z!==h||fe!==v||je!==S||lt!==C)&&(n.blendFuncSeparate(Me[Z],Me[fe],Me[je],Me[lt]),h=Z,v=fe,S=je,C=lt),(pt.equals(T)===!1||xt!==E)&&(n.blendColor(pt.r,pt.g,pt.b,xt),T.copy(pt),E=xt),g=I,P=!1}function ve(I,$){I.side===or?ne(n.CULL_FACE):le(n.CULL_FACE);let Z=I.side===ti;$&&(Z=!Z),Re(Z),I.blending===Ia&&I.transparent===!1?Ce(ws):Ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const fe=I.stencilWrite;o.setTest(fe),fe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),qe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Le(I){I!==BA?(le(n.CULL_FACE),I!==y&&(I===H0?n.cullFace(n.BACK):I===HA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),y=I}function F(I){I!==N&&(j&&n.lineWidth(I),N=I)}function qe(I,$,Z){I?(le(n.POLYGON_OFFSET_FILL),(U!==$||D!==Z)&&(n.polygonOffset($,Z),U=$,D=Z)):ne(n.POLYGON_OFFSET_FILL)}function b(I){I?le(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function w(I){I===void 0&&(I=n.TEXTURE0+X-1),L!==I&&(n.activeTexture(I),L=I)}function W(I,$,Z){Z===void 0&&(L===null?Z=n.TEXTURE0+X-1:Z=L);let fe=G[Z];fe===void 0&&(fe={type:void 0,texture:void 0},G[Z]=fe),(fe.type!==I||fe.texture!==$)&&(L!==Z&&(n.activeTexture(Z),L=Z),n.bindTexture(I,$||ee[I]),fe.type=I,fe.texture=$)}function Q(){const I=G[L];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(I){te.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function ze(I){Fe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function Ye(I,$){let Z=l.get($);Z===void 0&&(Z=new WeakMap,l.set($,Z));let fe=Z.get(I);fe===void 0&&(fe=n.getUniformBlockIndex($,I.name),Z.set(I,fe))}function gt(I,$){const fe=l.get($).get(I);a.get($)!==fe&&(n.uniformBlockBinding($,fe,I.__bindingPointIndex),a.set($,fe))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},L=null,G={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,S=null,C=null,T=new ft(0,0,0),E=0,P=!1,M=null,y=null,N=null,U=null,D=null,te.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ne,bindFramebuffer:Ue,drawBuffers:Ie,useProgram:k,setBlending:Ce,setMaterial:ve,setFlipSided:Re,setCullFace:Le,setLineWidth:F,setPolygonOffset:qe,setScissorTest:b,activeTexture:w,bindTexture:W,unbindTexture:Q,compressedTexImage2D:re,compressedTexImage3D:se,texImage2D:Qe,texImage3D:ye,updateUBOMapping:Ye,uniformBlockBinding:gt,texStorage2D:ue,texStorage3D:Ae,texSubImage2D:xe,texSubImage3D:de,compressedTexSubImage2D:oe,compressedTexSubImage3D:ke,scissor:Se,viewport:ze,reset:Be}}function WL(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ht,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,w){return p?new OffscreenCanvas(b,w):ed("canvas")}function g(b,w,W){let Q=1;const re=qe(b);if((re.width>W||re.height>W)&&(Q=W/Math.max(re.width,re.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const se=Math.floor(Q*re.width),xe=Math.floor(Q*re.height);d===void 0&&(d=_(se,xe));const de=w?_(se,xe):d;return de.width=se,de.height=xe,de.getContext("2d").drawImage(b,0,0,se,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+se+"x"+xe+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Li&&b.minFilter!==Yi}function h(b){n.generateMipmap(b)}function v(b,w,W,Q,re=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=w;if(w===n.RED&&(W===n.FLOAT&&(se=n.R32F),W===n.HALF_FLOAT&&(se=n.R16F),W===n.UNSIGNED_BYTE&&(se=n.R8)),w===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.R8UI),W===n.UNSIGNED_SHORT&&(se=n.R16UI),W===n.UNSIGNED_INT&&(se=n.R32UI),W===n.BYTE&&(se=n.R8I),W===n.SHORT&&(se=n.R16I),W===n.INT&&(se=n.R32I)),w===n.RG&&(W===n.FLOAT&&(se=n.RG32F),W===n.HALF_FLOAT&&(se=n.RG16F),W===n.UNSIGNED_BYTE&&(se=n.RG8)),w===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.RG8UI),W===n.UNSIGNED_SHORT&&(se=n.RG16UI),W===n.UNSIGNED_INT&&(se=n.RG32UI),W===n.BYTE&&(se=n.RG8I),W===n.SHORT&&(se=n.RG16I),W===n.INT&&(se=n.RG32I)),w===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),w===n.RGBA){const xe=re?Kf:_t.getTransfer(Q);W===n.FLOAT&&(se=n.RGBA32F),W===n.HALF_FLOAT&&(se=n.RGBA16F),W===n.UNSIGNED_BYTE&&(se=xe===Tt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(b,w){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Li&&b.minFilter!==Yi?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function S(b){const w=b.target;w.removeEventListener("dispose",S),T(w),w.isVideoTexture&&c.delete(w)}function C(b){const w=b.target;w.removeEventListener("dispose",C),P(w)}function T(b){const w=i.get(b);if(w.__webglInit===void 0)return;const W=b.source,Q=f.get(W);if(Q){const re=Q[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(b),Object.keys(Q).length===0&&f.delete(W)}i.remove(b)}function E(b){const w=i.get(b);n.deleteTexture(w.__webglTexture);const W=b.source,Q=f.get(W);delete Q[w.__cacheKey],o.memory.textures--}function P(b){const w=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let re=0;re<w.__webglFramebuffer[Q].length;re++)n.deleteFramebuffer(w.__webglFramebuffer[Q][re]);else n.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)n.deleteFramebuffer(w.__webglFramebuffer[Q]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=b.textures;for(let Q=0,re=W.length;Q<re;Q++){const se=i.get(W[Q]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(W[Q])}i.remove(b)}let M=0;function y(){M=0}function N(){const b=M;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),M+=1,b}function U(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function D(b,w){const W=i.get(b);if(b.isVideoTexture&&Le(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,b,w);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+w)}function X(b,w){const W=i.get(b);if(b.version>0&&W.__version!==b.version){te(W,b,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+w)}function j(b,w){const W=i.get(b);if(b.version>0&&W.__version!==b.version){te(W,b,w);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+w)}function K(b,w){const W=i.get(b);if(b.version>0&&W.__version!==b.version){Fe(W,b,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+w)}const Y={[ym]:n.REPEAT,[lo]:n.CLAMP_TO_EDGE,[Sm]:n.MIRRORED_REPEAT},L={[Li]:n.NEAREST,[EC]:n.NEAREST_MIPMAP_NEAREST,[Sc]:n.NEAREST_MIPMAP_LINEAR,[Yi]:n.LINEAR,[vh]:n.LINEAR_MIPMAP_NEAREST,[uo]:n.LINEAR_MIPMAP_LINEAR},G={[kC]:n.NEVER,[WC]:n.ALWAYS,[zC]:n.LESS,[r1]:n.LEQUAL,[BC]:n.EQUAL,[GC]:n.GEQUAL,[HC]:n.GREATER,[VC]:n.NOTEQUAL};function R(b,w){if(w.type===hs&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Yi||w.magFilter===vh||w.magFilter===Sc||w.magFilter===uo||w.minFilter===Yi||w.minFilter===vh||w.minFilter===Sc||w.minFilter===uo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Y[w.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Y[w.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Y[w.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,L[w.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,L[w.minFilter]),w.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,G[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Li||w.minFilter!==Sc&&w.minFilter!==uo||w.type===hs&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ie(b,w){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",S));const Q=w.source;let re=f.get(Q);re===void 0&&(re={},f.set(Q,re));const se=U(w);if(se!==b.__cacheKey){re[se]===void 0&&(re[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[se].usedTimes++;const xe=re[b.__cacheKey];xe!==void 0&&(re[b.__cacheKey].usedTimes--,xe.usedTimes===0&&E(w)),b.__cacheKey=se,b.__webglTexture=re[se].texture}return W}function te(b,w,W){let Q=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=n.TEXTURE_3D);const re=ie(b,w),se=w.source;t.bindTexture(Q,b.__webglTexture,n.TEXTURE0+W);const xe=i.get(se);if(se.version!==xe.__version||re===!0){t.activeTexture(n.TEXTURE0+W);const de=_t.getPrimaries(_t.workingColorSpace),oe=w.colorSpace===ss?null:_t.getPrimaries(w.colorSpace),ke=w.colorSpace===ss||de===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ue=g(w.image,!1,r.maxTextureSize);ue=F(w,ue);const Ae=s.convert(w.format,w.colorSpace),Qe=s.convert(w.type);let ye=v(w.internalFormat,Ae,Qe,w.colorSpace,w.isVideoTexture);R(Q,w);let Se;const ze=w.mipmaps,Ye=w.isVideoTexture!==!0,gt=xe.__version===void 0||re===!0,Be=se.dataReady,I=x(w,ue);if(w.isDepthTexture)ye=n.DEPTH_COMPONENT16,w.type===hs?ye=n.DEPTH_COMPONENT32F:w.type===Ja?ye=n.DEPTH_COMPONENT24:w.type===Fu&&(ye=n.DEPTH24_STENCIL8),gt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,ye,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,ye,ue.width,ue.height,0,Ae,Qe,null));else if(w.isDataTexture)if(ze.length>0){Ye&&gt&&t.texStorage2D(n.TEXTURE_2D,I,ye,ze[0].width,ze[0].height);for(let $=0,Z=ze.length;$<Z;$++)Se=ze[$],Ye?Be&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Se.width,Se.height,Ae,Qe,Se.data):t.texImage2D(n.TEXTURE_2D,$,ye,Se.width,Se.height,0,Ae,Qe,Se.data);w.generateMipmaps=!1}else Ye?(gt&&t.texStorage2D(n.TEXTURE_2D,I,ye,ue.width,ue.height),Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Ae,Qe,ue.data)):t.texImage2D(n.TEXTURE_2D,0,ye,ue.width,ue.height,0,Ae,Qe,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ye&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,I,ye,ze[0].width,ze[0].height,ue.depth);for(let $=0,Z=ze.length;$<Z;$++)Se=ze[$],w.format!==cr?Ae!==null?Ye?Be&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Se.width,Se.height,ue.depth,Ae,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ye,Se.width,Se.height,ue.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Se.width,Se.height,ue.depth,Ae,Qe,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,ye,Se.width,Se.height,ue.depth,0,Ae,Qe,Se.data)}else{Ye&&gt&&t.texStorage2D(n.TEXTURE_2D,I,ye,ze[0].width,ze[0].height);for(let $=0,Z=ze.length;$<Z;$++)Se=ze[$],w.format!==cr?Ae!==null?Ye?Be&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,$,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Be&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Se.width,Se.height,Ae,Qe,Se.data):t.texImage2D(n.TEXTURE_2D,$,ye,Se.width,Se.height,0,Ae,Qe,Se.data)}else if(w.isDataArrayTexture)Ye?(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,I,ye,ue.width,ue.height,ue.depth),Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Qe,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ue.width,ue.height,ue.depth,0,Ae,Qe,ue.data);else if(w.isData3DTexture)Ye?(gt&&t.texStorage3D(n.TEXTURE_3D,I,ye,ue.width,ue.height,ue.depth),Be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Qe,ue.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ue.width,ue.height,ue.depth,0,Ae,Qe,ue.data);else if(w.isFramebufferTexture){if(gt)if(Ye)t.texStorage2D(n.TEXTURE_2D,I,ye,ue.width,ue.height);else{let $=ue.width,Z=ue.height;for(let fe=0;fe<I;fe++)t.texImage2D(n.TEXTURE_2D,fe,ye,$,Z,0,Ae,Qe,null),$>>=1,Z>>=1}}else if(ze.length>0){if(Ye&&gt){const $=qe(ze[0]);t.texStorage2D(n.TEXTURE_2D,I,ye,$.width,$.height)}for(let $=0,Z=ze.length;$<Z;$++)Se=ze[$],Ye?Be&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ae,Qe,Se):t.texImage2D(n.TEXTURE_2D,$,ye,Ae,Qe,Se);w.generateMipmaps=!1}else if(Ye){if(gt){const $=qe(ue);t.texStorage2D(n.TEXTURE_2D,I,ye,$.width,$.height)}Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Qe,ue)}else t.texImage2D(n.TEXTURE_2D,0,ye,Ae,Qe,ue);m(w)&&h(Q),xe.__version=se.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Fe(b,w,W){if(w.image.length!==6)return;const Q=ie(b,w),re=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+W);const se=i.get(re);if(re.version!==se.__version||Q===!0){t.activeTexture(n.TEXTURE0+W);const xe=_t.getPrimaries(_t.workingColorSpace),de=w.colorSpace===ss?null:_t.getPrimaries(w.colorSpace),oe=w.colorSpace===ss||xe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ke=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let Z=0;Z<6;Z++)!ke&&!ue?Ae[Z]=g(w.image[Z],!0,r.maxCubemapSize):Ae[Z]=ue?w.image[Z].image:w.image[Z],Ae[Z]=F(w,Ae[Z]);const Qe=Ae[0],ye=s.convert(w.format,w.colorSpace),Se=s.convert(w.type),ze=v(w.internalFormat,ye,Se,w.colorSpace),Ye=w.isVideoTexture!==!0,gt=se.__version===void 0||Q===!0,Be=re.dataReady;let I=x(w,Qe);R(n.TEXTURE_CUBE_MAP,w);let $;if(ke){Ye&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,ze,Qe.width,Qe.height);for(let Z=0;Z<6;Z++){$=Ae[Z].mipmaps;for(let fe=0;fe<$.length;fe++){const he=$[fe];w.format!==cr?ye!==null?Ye?Be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,he.width,he.height,ye,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,ze,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?Be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,he.width,he.height,ye,Se,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,ze,he.width,he.height,0,ye,Se,he.data)}}}else{if($=w.mipmaps,Ye&&gt){$.length>0&&I++;const Z=qe(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,I,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ue){Ye?Be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae[Z].width,Ae[Z].height,ye,Se,Ae[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Ae[Z].width,Ae[Z].height,0,ye,Se,Ae[Z].data);for(let fe=0;fe<$.length;fe++){const je=$[fe].image[Z].image;Ye?Be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,je.width,je.height,ye,Se,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,ze,je.width,je.height,0,ye,Se,je.data)}}else{Ye?Be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ye,Se,Ae[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,ye,Se,Ae[Z]);for(let fe=0;fe<$.length;fe++){const he=$[fe];Ye?Be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,ye,Se,he.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,ze,ye,Se,he.image[Z])}}}m(w)&&h(n.TEXTURE_CUBE_MAP),se.__version=re.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function H(b,w,W,Q,re,se){const xe=s.convert(W.format,W.colorSpace),de=s.convert(W.type),oe=v(W.internalFormat,xe,de,W.colorSpace);if(!i.get(w).__hasExternalTextures){const ue=Math.max(1,w.width>>se),Ae=Math.max(1,w.height>>se);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,se,oe,ue,Ae,w.depth,0,xe,de,null):t.texImage2D(re,se,oe,ue,Ae,0,xe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Re(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,re,i.get(W).__webglTexture,0,ve(w)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,re,i.get(W).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(b,w,W){if(n.bindRenderbuffer(n.RENDERBUFFER,b),w.depthBuffer&&!w.stencilBuffer){let Q=n.DEPTH_COMPONENT24;if(W||Re(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===hs?Q=n.DEPTH_COMPONENT32F:re.type===Ja&&(Q=n.DEPTH_COMPONENT24));const se=ve(w);Re(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,Q,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,Q,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(w.depthBuffer&&w.stencilBuffer){const Q=ve(w);W&&Re(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,w.width,w.height):Re(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const Q=w.textures;for(let re=0;re<Q.length;re++){const se=Q[re],xe=s.convert(se.format,se.colorSpace),de=s.convert(se.type),oe=v(se.internalFormat,xe,de,se.colorSpace),ke=ve(w);W&&Re(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,oe,w.width,w.height):Re(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,oe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,oe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,re=ve(w);if(w.depthTexture.format===Oa)Re(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(w.depthTexture.format===bu)Re(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ne(b){const w=i.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,b)}else if(W){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=n.createRenderbuffer(),ee(w.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),ee(w.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(b,w,W){const Q=i.get(b);w!==void 0&&H(Q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ne(b)}function Ie(b){const w=b.texture,W=i.get(b),Q=i.get(w);b.addEventListener("dispose",C);const re=b.textures,se=b.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=w.version,o.memory.textures++),se){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let oe=0;oe<w.mipmaps.length;oe++)W.__webglFramebuffer[de][oe]=n.createFramebuffer()}else W.__webglFramebuffer[de]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)W.__webglFramebuffer[de]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(xe)for(let de=0,oe=re.length;de<oe;de++){const ke=i.get(re[de]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Re(b)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let de=0;de<re.length;de++){const oe=re[de];W.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[de]);const ke=s.convert(oe.format,oe.colorSpace),ue=s.convert(oe.type),Ae=v(oe.internalFormat,ke,ue,oe.colorSpace,b.isXRRenderTarget===!0),Qe=ve(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,Ae,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,W.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(W.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),R(n.TEXTURE_CUBE_MAP,w);for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)H(W.__webglFramebuffer[de][oe],b,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,oe);else H(W.__webglFramebuffer[de],b,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(w)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let de=0,oe=re.length;de<oe;de++){const ke=re[de],ue=i.get(ke);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),R(n.TEXTURE_2D,ke),H(W.__webglFramebuffer,b,ke,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(ke)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),R(de,w),w.mipmaps&&w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)H(W.__webglFramebuffer[oe],b,w,n.COLOR_ATTACHMENT0,de,oe);else H(W.__webglFramebuffer,b,w,n.COLOR_ATTACHMENT0,de,0);m(w)&&h(de),t.unbindTexture()}b.depthBuffer&&ne(b)}function k(b){const w=b.textures;for(let W=0,Q=w.length;W<Q;W++){const re=w[W];if(m(re)){const se=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(re).__webglTexture;t.bindTexture(se,xe),h(se),t.unbindTexture()}}}const We=[],Me=[];function Ce(b){if(b.samples>0){if(Re(b)===!1){const w=b.textures,W=b.width,Q=b.height;let re=n.COLOR_BUFFER_BIT;const se=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(b),de=w.length>1;if(de)for(let oe=0;oe<w.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let oe=0;oe<w.length;oe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[oe]);const ke=i.get(w[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,W,Q,0,0,W,Q,re,n.NEAREST),l===!0&&(We.length=0,Me.length=0,We.push(n.COLOR_ATTACHMENT0+oe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(We.push(se),Me.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Me)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let oe=0;oe<w.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[oe]);const ke=i.get(w[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const w=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function ve(b){return Math.min(r.maxSamples,b.samples)}function Re(b){const w=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Le(b){const w=o.render.frame;c.get(b)!==w&&(c.set(b,w),b.update())}function F(b,w){const W=b.colorSpace,Q=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||W!==ks&&W!==ss&&(_t.getTransfer(W)===Tt?(Q!==cr||re!==Ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=y,this.setTexture2D=D,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=Ue,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Re}function XL(n,e){function t(i,r=ss){let s;const o=_t.getTransfer(r);if(i===Ns)return n.UNSIGNED_BYTE;if(i===JM)return n.UNSIGNED_SHORT_4_4_4_4;if(i===e1)return n.UNSIGNED_SHORT_5_5_5_1;if(i===AC)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===TC)return n.BYTE;if(i===wC)return n.SHORT;if(i===ZM)return n.UNSIGNED_SHORT;if(i===QM)return n.INT;if(i===Ja)return n.UNSIGNED_INT;if(i===hs)return n.FLOAT;if(i===Md)return n.HALF_FLOAT;if(i===CC)return n.ALPHA;if(i===RC)return n.RGB;if(i===cr)return n.RGBA;if(i===PC)return n.LUMINANCE;if(i===bC)return n.LUMINANCE_ALPHA;if(i===Oa)return n.DEPTH_COMPONENT;if(i===bu)return n.DEPTH_STENCIL;if(i===LC)return n.RED;if(i===t1)return n.RED_INTEGER;if(i===DC)return n.RG;if(i===n1)return n.RG_INTEGER;if(i===i1)return n.RGBA_INTEGER;if(i===xh||i===yh||i===Sh||i===Mh)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xh)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xh)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yh)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sh)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===X0||i===j0||i===Y0||i===$0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===X0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===j0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Y0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===q0||i===K0||i===Z0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===q0||i===K0)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Z0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Q0||i===J0||i===ev||i===tv||i===nv||i===iv||i===rv||i===sv||i===ov||i===av||i===lv||i===uv||i===cv||i===fv)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Q0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===J0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ev)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===iv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ov)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===av)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eh||i===dv||i===hv)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eh)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dv)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hv)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===NC||i===pv||i===mv||i===gv)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pv)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mv)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gv)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fu?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class jL extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gc extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YL={type:"move"};class Kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const $L=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ni,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Gr({vertexShader:$L,fragmentShader:qL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fr(new tl(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class ZL extends sl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const g=new KL,m=t.getContextAttributes();let h=null,v=null;const x=[],S=[],C=new ht;let T=null;const E=new ji;E.layers.enable(1),E.viewport=new hn;const P=new ji;P.layers.enable(2),P.viewport=new hn;const M=[E,P],y=new jL;y.layers.enable(1),y.layers.enable(2);let N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=x[H];return ee===void 0&&(ee=new Kh,x[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=x[H];return ee===void 0&&(ee=new Kh,x[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=x[H];return ee===void 0&&(ee=new Kh,x[H]=ee),ee.getHandSpace()};function D(H){const ee=S.indexOf(H.inputSource);if(ee===-1)return;const le=x[ee];le!==void 0&&(le.update(H.inputSource,H.frame,u||o),le.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",j);for(let H=0;H<x.length;H++){const ee=S[H];ee!==null&&(S[H]=null,x[H].disconnect(ee))}N=null,U=null,g.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",X),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new No(p.framebufferWidth,p.framebufferHeight,{format:cr,type:Ns,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,le=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?bu:Oa,le=m.stencil?Fu:Ja);const Ue={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new No(f.textureWidth,f.textureHeight,{format:cr,type:Ns,depthTexture:new x1(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(H){for(let ee=0;ee<H.removed.length;ee++){const le=H.removed[ee],ne=S.indexOf(le);ne>=0&&(S[ne]=null,x[ne].disconnect(le))}for(let ee=0;ee<H.added.length;ee++){const le=H.added[ee];let ne=S.indexOf(le);if(ne===-1){for(let Ie=0;Ie<x.length;Ie++)if(Ie>=S.length){S.push(le),ne=Ie;break}else if(S[Ie]===null){S[Ie]=le,ne=Ie;break}if(ne===-1)break}const Ue=x[ne];Ue&&Ue.connect(le)}}const K=new q,Y=new q;function L(H,ee,le){K.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const ne=K.distanceTo(Y),Ue=ee.projectionMatrix.elements,Ie=le.projectionMatrix.elements,k=Ue[14]/(Ue[10]-1),We=Ue[14]/(Ue[10]+1),Me=(Ue[9]+1)/Ue[5],Ce=(Ue[9]-1)/Ue[5],ve=(Ue[8]-1)/Ue[0],Re=(Ie[8]+1)/Ie[0],Le=k*ve,F=k*Re,qe=ne/(-ve+Re),b=qe*-ve;ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(b),H.translateZ(qe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const w=k+qe,W=We+qe,Q=Le-b,re=F+(ne-b),se=Me*We/W*w,xe=Ce*We/W*w;H.projectionMatrix.makePerspective(Q,re,se,xe,w,W),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function G(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;g.texture!==null&&(H.near=g.depthNear,H.far=g.depthFar),y.near=P.near=E.near=H.near,y.far=P.far=E.far=H.far,(N!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,U=y.far,E.near=N,E.far=U,P.near=N,P.far=U,E.updateProjectionMatrix(),P.updateProjectionMatrix(),H.updateProjectionMatrix());const ee=H.parent,le=y.cameras;G(y,ee);for(let ne=0;ne<le.length;ne++)G(le[ne],ee);le.length===2?L(y,E,P):y.projectionMatrix.copy(E.projectionMatrix),R(H,y,ee)};function R(H,ee,le){le===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Mm*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null};let ie=null;function te(H,ee){if(c=ee.getViewerPose(u||o),_=ee,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ne=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ne=!0);for(let Ie=0;Ie<le.length;Ie++){const k=le[Ie];let We=null;if(p!==null)We=p.getViewport(k);else{const Ce=d.getViewSubImage(f,k);We=Ce.viewport,Ie===0&&(e.setRenderTargetTextures(v,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(v))}let Me=M[Ie];Me===void 0&&(Me=new ji,Me.layers.enable(Ie),Me.viewport=new hn,M[Ie]=Me),Me.matrix.fromArray(k.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(k.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(We.x,We.y,We.width,We.height),Ie===0&&(y.matrix.copy(Me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ne===!0&&y.cameras.push(Me)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Ie=d.getDepthInformation(le[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,r.renderState)}}for(let le=0;le<x.length;le++){const ne=S[le],Ue=x[le];ne!==null&&Ue!==void 0&&Ue.update(ne,ee,u||o)}g.render(e,y),ie&&ie(H,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Fe=new _1;Fe.setAnimationLoop(te),this.setAnimationLoop=function(H){ie=H},this.dispose=function(){}}}const Ys=new Vr,QL=new Jt;function JL(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,h1(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ti&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ti&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,S=v.envMapRotation;if(x&&(m.envMap.value=x,Ys.copy(S),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),m.envMapRotation.value.setFromMatrix4(QL.makeRotationFromEuler(Ys)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const C=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*C,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ti&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function c(v){const x=d();v.__bindingPointIndex=x;const S=n.createBuffer(),C=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,E=S.length;T<E;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,y=P.length;M<y;M++){const N=P[M];if(p(N,T,M,C)===!0){const U=N.__offset,D=Array.isArray(N.value)?N.value:[N.value];let X=0;for(let j=0;j<D.length;j++){const K=D[j],Y=g(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,U+X,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,S,C){const T=v.value,E=x+"_"+S;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{const P=C[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(v){const x=v.uniforms;let S=0;const C=16;for(let E=0,P=x.length;E<P;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,N=M.length;y<N;y++){const U=M[y],D=Array.isArray(U.value)?U.value:[U.value];for(let X=0,j=D.length;X<j;X++){const K=D[X],Y=g(K),L=S%C;L!==0&&C-L<Y.boundary&&(S+=C-L),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Y.storage}}}const T=S%C;return T>0&&(S+=C-T),v.__size=S,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class tD{constructor(e={}){const{canvas:t=jC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nr,this._useLegacyLights=!1,this.toneMapping=As,this.toneMappingExposure=1;const x=this;let S=!1,C=0,T=0,E=null,P=-1,M=null;const y=new hn,N=new hn;let U=null;const D=new ft(0);let X=0,j=t.width,K=t.height,Y=1,L=null,G=null;const R=new hn(0,0,j,K),ie=new hn(0,0,j,K);let te=!1;const Fe=new g1;let H=!1,ee=!1;const le=new Jt,ne=new q,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return E===null?Y:1}let k=i;function We(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vg}`),t.addEventListener("webglcontextlost",I,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",Z,!1),k===null){const O="webgl2";if(k=We(O,A),k===null)throw We(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,Ce,ve,Re,Le,F,qe,b,w,W,Q,re,se,xe,de,oe,ke,ue,Ae,Qe,ye,Se,ze,Ye;function gt(){Me=new u2(k),Me.init(),Se=new XL(k,Me),Ce=new i2(k,Me,e,Se),ve=new GL(k),Re=new d2(k),Le=new PL,F=new WL(k,Me,ve,Le,Ce,Se,Re),qe=new s2(x),b=new l2(x),w=new xR(k),ze=new t2(k,w),W=new c2(k,w,Re,ze),Q=new p2(k,W,w,Re),Ae=new h2(k,Ce,F),oe=new r2(Le),re=new RL(x,qe,b,Me,Ce,ze,oe),se=new JL(x,Le),xe=new LL,de=new FL(Me),ue=new e2(x,qe,b,ve,Q,f,l),ke=new VL(x,Q,Ce),Ye=new eD(k,Re,Ce,ve),Qe=new n2(k,Me,Re),ye=new f2(k,Me,Re),Re.programs=re.programs,x.capabilities=Ce,x.extensions=Me,x.properties=Le,x.renderLists=xe,x.shadowMap=ke,x.state=ve,x.info=Re}gt();const Be=new ZL(x,k);this.xr=Be,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(j,K,!1))},this.getSize=function(A){return A.set(j,K)},this.setSize=function(A,O,z=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,K=O,t.width=Math.floor(A*Y),t.height=Math.floor(O*Y),z===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(j*Y,K*Y).floor()},this.setDrawingBufferSize=function(A,O,z){j=A,K=O,Y=z,t.width=Math.floor(A*z),t.height=Math.floor(O*z),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,O,z,B){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,O,z,B),ve.viewport(y.copy(R).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,O,z,B){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,O,z,B),ve.scissor(N.copy(ie).multiplyScalar(Y).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){ve.setScissorTest(te=A)},this.setOpaqueSort=function(A){L=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(A=!0,O=!0,z=!0){let B=0;if(A){let V=!1;if(E!==null){const ce=E.texture.format;V=ce===i1||ce===n1||ce===t1}if(V){const ce=E.texture.type,me=ce===Ns||ce===Ja||ce===ZM||ce===Fu||ce===JM||ce===e1,_e=ue.getClearColor(),Ne=ue.getClearAlpha(),Ve=_e.r,be=_e.g,Pe=_e.b;me?(p[0]=Ve,p[1]=be,p[2]=Pe,p[3]=Ne,k.clearBufferuiv(k.COLOR,0,p)):(_[0]=Ve,_[1]=be,_[2]=Pe,_[3]=Ne,k.clearBufferiv(k.COLOR,0,_))}else B|=k.COLOR_BUFFER_BIT}O&&(B|=k.DEPTH_BUFFER_BIT),z&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),xe.dispose(),de.dispose(),Le.dispose(),qe.dispose(),b.dispose(),Q.dispose(),ze.dispose(),Ye.dispose(),re.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",rt),Be.removeEventListener("sessionend",Oe),Te.stop()};function I(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Re.autoReset,O=ke.enabled,z=ke.autoUpdate,B=ke.needsUpdate,V=ke.type;gt(),Re.autoReset=A,ke.enabled=O,ke.autoUpdate=z,ke.needsUpdate=B,ke.type=V}function Z(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const O=A.target;O.removeEventListener("dispose",fe),he(O)}function he(A){je(A),Le.remove(A)}function je(A){const O=Le.get(A).programs;O!==void 0&&(O.forEach(function(z){re.releaseProgram(z)}),A.isShaderMaterial&&re.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,z,B,V,ce){O===null&&(O=Ue);const me=V.isMesh&&V.matrixWorld.determinant()<0,_e=nn(A,O,z,B,V);ve.setMaterial(B,me);let Ne=z.index,Ve=1;if(B.wireframe===!0){if(Ne=W.getWireframeAttribute(z),Ne===void 0)return;Ve=2}const be=z.drawRange,Pe=z.attributes.position;let ct=be.start*Ve,Wt=(be.start+be.count)*Ve;ce!==null&&(ct=Math.max(ct,ce.start*Ve),Wt=Math.min(Wt,(ce.start+ce.count)*Ve)),Ne!==null?(ct=Math.max(ct,0),Wt=Math.min(Wt,Ne.count)):Pe!=null&&(ct=Math.max(ct,0),Wt=Math.min(Wt,Pe.count));const gn=Wt-ct;if(gn<0||gn===1/0)return;ze.setup(V,B,_e,z,Ne);let Pn,$e=Qe;if(Ne!==null&&(Pn=w.get(Ne),$e=ye,$e.setIndex(Pn)),V.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*Ie()),$e.setMode(k.LINES)):$e.setMode(k.TRIANGLES);else if(V.isLine){let He=B.linewidth;He===void 0&&(He=1),ve.setLineWidth(He*Ie()),V.isLineSegments?$e.setMode(k.LINES):V.isLineLoop?$e.setMode(k.LINE_LOOP):$e.setMode(k.LINE_STRIP)}else V.isPoints?$e.setMode(k.POINTS):V.isSprite&&$e.setMode(k.TRIANGLES);if(V.isBatchedMesh)V._multiDrawInstances!==null?$e.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances):$e.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)$e.renderInstances(ct,gn,V.count);else if(z.isInstancedBufferGeometry){const He=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Zi=Math.min(z.instanceCount,He);$e.renderInstances(ct,gn,Zi)}else $e.render(ct,gn)};function lt(A,O,z){A.transparent===!0&&A.side===or&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Dt(A,O,z),A.side=Ds,A.needsUpdate=!0,Dt(A,O,z),A.side=or):Dt(A,O,z)}this.compile=function(A,O,z=null){z===null&&(z=A),m=de.get(z),m.init(O),v.push(m),z.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==z&&A.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const B=new Set;return A.traverse(function(V){const ce=V.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const _e=ce[me];lt(_e,z,V),B.add(_e)}else lt(ce,z,V),B.add(ce)}),v.pop(),m=null,B},this.compileAsync=function(A,O,z=null){const B=this.compile(A,O,z);return new Promise(V=>{function ce(){if(B.forEach(function(me){Le.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){V(A);return}setTimeout(ce,10)}Me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let pt=null;function xt(A){pt&&pt(A)}function rt(){Te.stop()}function Oe(){Te.start()}const Te=new _1;Te.setAnimationLoop(xt),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(A){pt=A,Be.setAnimationLoop(A),A===null?Te.stop():Te.start()},Be.addEventListener("sessionstart",rt),Be.addEventListener("sessionend",Oe),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(O),O=Be.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,E),m=de.get(A,v.length),m.init(O),v.push(m),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Fe.setFromProjectionMatrix(le),ee=this.localClippingEnabled,H=oe.init(this.clippingPlanes,ee),g=xe.get(A,h.length),g.init(),h.push(g),at(A,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(L,G);const z=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1;z&&ue.addToRenderList(g,A),this.info.render.frame++,H===!0&&oe.beginShadows();const B=m.state.shadowsArray;ke.render(B,A,O),H===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,ce=g.transmissive;if(m.setupLights(x._useLegacyLights),O.isArrayCamera){const me=O.cameras;if(ce.length>0)for(let _e=0,Ne=me.length;_e<Ne;_e++){const Ve=me[_e];Xe(V,ce,A,Ve)}z&&ue.render(A);for(let _e=0,Ne=me.length;_e<Ne;_e++){const Ve=me[_e];pe(g,A,Ve,Ve.viewport)}}else ce.length>0&&Xe(V,ce,A,O),z&&ue.render(A),pe(g,A,O);E!==null&&(F.updateMultisampleRenderTarget(E),F.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,O),ze.resetDefaultState(),P=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],H===!0&&oe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function at(A,O,z,B){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Fe.intersectsSprite(A)){B&&ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const me=Q.update(A),_e=A.material;_e.visible&&g.push(A,me,_e,z,ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Fe.intersectsObject(A))){const me=Q.update(A),_e=A.material;if(B&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ne.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ne.copy(me.boundingSphere.center)),ne.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(_e)){const Ne=me.groups;for(let Ve=0,be=Ne.length;Ve<be;Ve++){const Pe=Ne[Ve],ct=_e[Pe.materialIndex];ct&&ct.visible&&g.push(A,me,ct,z,ne.z,Pe)}}else _e.visible&&g.push(A,me,_e,z,ne.z,null)}}const ce=A.children;for(let me=0,_e=ce.length;me<_e;me++)at(ce[me],O,z,B)}function pe(A,O,z,B){const V=A.opaque,ce=A.transmissive,me=A.transparent;m.setupLightsView(z),H===!0&&oe.setGlobalState(x.clippingPlanes,z),B&&ve.viewport(y.copy(B)),V.length>0&&De(V,O,z),ce.length>0&&De(ce,O,z),me.length>0&&De(me,O,z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Xe(A,O,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new No(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Md:Ns,minFilter:uo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ce=m.state.transmissionRenderTarget[B.id],me=B.viewport||y;ce.setSize(me.z,me.w);const _e=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(D),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear();const Ne=x.toneMapping;x.toneMapping=As;const Ve=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),H===!0&&oe.setGlobalState(x.clippingPlanes,B),De(A,z,B),F.updateMultisampleRenderTarget(ce),F.updateRenderTargetMipmap(ce),Me.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Pe=0,ct=O.length;Pe<ct;Pe++){const Wt=O[Pe],gn=Wt.object,Pn=Wt.geometry,$e=Wt.material,He=Wt.group;if($e.side===or&&gn.layers.test(B.layers)){const Zi=$e.side;$e.side=ti,$e.needsUpdate=!0,Ge(gn,z,B,Pn,$e,He),$e.side=Zi,$e.needsUpdate=!0,be=!0}}be===!0&&(F.updateMultisampleRenderTarget(ce),F.updateRenderTargetMipmap(ce))}x.setRenderTarget(_e),x.setClearColor(D,X),Ve!==void 0&&(B.viewport=Ve),x.toneMapping=Ne}function De(A,O,z){const B=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ce=A.length;V<ce;V++){const me=A[V],_e=me.object,Ne=me.geometry,Ve=B===null?me.material:B,be=me.group;_e.layers.test(z.layers)&&Ge(_e,O,z,Ne,Ve,be)}}function Ge(A,O,z,B,V,ce){A.onBeforeRender(x,O,z,B,V,ce),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,O,z,B,A,ce),V.transparent===!0&&V.side===or&&V.forceSinglePass===!1?(V.side=ti,V.needsUpdate=!0,x.renderBufferDirect(z,O,B,V,A,ce),V.side=Ds,V.needsUpdate=!0,x.renderBufferDirect(z,O,B,V,A,ce),V.side=or):x.renderBufferDirect(z,O,B,V,A,ce),A.onAfterRender(x,O,z,B,V,ce)}function Dt(A,O,z){O.isScene!==!0&&(O=Ue);const B=Le.get(A),V=m.state.lights,ce=m.state.shadowsArray,me=V.state.version,_e=re.getParameters(A,V.state,ce,O,z),Ne=re.getProgramCacheKey(_e);let Ve=B.programs;B.environment=A.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(A.isMeshStandardMaterial?b:qe).get(A.envMap||B.environment),B.envMapRotation=B.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",fe),Ve=new Map,B.programs=Ve);let be=Ve.get(Ne);if(be!==void 0){if(B.currentProgram===be&&B.lightsStateVersion===me)return Ct(A,_e),be}else _e.uniforms=re.getUniforms(A),A.onBuild(z,_e,x),A.onBeforeCompile(_e,x),be=re.acquireProgram(_e,Ne),Ve.set(Ne,be),B.uniforms=_e.uniforms;const Pe=B.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),Ct(A,_e),B.needsLights=yt(A),B.lightsStateVersion=me,B.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMap.value=V.state.directionalShadowMap,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotShadowMap.value=V.state.spotShadowMap,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMap.value=V.state.pointShadowMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),B.currentProgram=be,B.uniformsList=null,be}function Je(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=df.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Ct(A,O){const z=Le.get(A);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function nn(A,O,z,B,V){O.isScene!==!0&&(O=Ue),F.resetTextureUnits();const ce=O.fog,me=B.isMeshStandardMaterial?O.environment:null,_e=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ks,Ne=(B.isMeshStandardMaterial?b:qe).get(B.envMap||me),Ve=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,be=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!z.morphAttributes.position,ct=!!z.morphAttributes.normal,Wt=!!z.morphAttributes.color;let gn=As;B.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(gn=x.toneMapping);const Pn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$e=Pn!==void 0?Pn.length:0,He=Le.get(B),Zi=m.state.lights;if(H===!0&&(ee===!0||A!==M)){const Si=A===M&&B.id===P;oe.setState(B,A,Si)}let dt=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Zi.state.version||He.outputColorSpace!==_e||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&He.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&He.instancingMorph===!1&&V.morphTexture!==null||He.envMap!==Ne||B.fog===!0&&He.fog!==ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==oe.numPlanes||He.numIntersection!==oe.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==be||He.morphTargets!==Pe||He.morphNormals!==ct||He.morphColors!==Wt||He.toneMapping!==gn||He.morphTargetsCount!==$e)&&(dt=!0):(dt=!0,He.__version=B.version);let zs=He.currentProgram;dt===!0&&(zs=Dt(B,O,V));let jg=!1,al=!1,Ad=!1;const _n=zs.getUniforms(),jr=He.uniforms;if(ve.useProgram(zs.program)&&(jg=!0,al=!0,Ad=!0),B.id!==P&&(P=B.id,al=!0),jg||M!==A){_n.setValue(k,"projectionMatrix",A.projectionMatrix),_n.setValue(k,"viewMatrix",A.matrixWorldInverse);const Si=_n.map.cameraPosition;Si!==void 0&&Si.setValue(k,ne.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&_n.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_n.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,al=!0,Ad=!0)}if(V.isSkinnedMesh){_n.setOptional(k,V,"bindMatrix"),_n.setOptional(k,V,"bindMatrixInverse");const Si=V.skeleton;Si&&(Si.boneTexture===null&&Si.computeBoneTexture(),_n.setValue(k,"boneTexture",Si.boneTexture,F))}V.isBatchedMesh&&(_n.setOptional(k,V,"batchingTexture"),_n.setValue(k,"batchingTexture",V._matricesTexture,F));const Cd=z.morphAttributes;if((Cd.position!==void 0||Cd.normal!==void 0||Cd.color!==void 0)&&Ae.update(V,z,zs),(al||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,_n.setValue(k,"receiveShadow",V.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(jr.envMap.value=Ne,jr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&O.environment!==null&&(jr.envMapIntensity.value=O.environmentIntensity),al&&(_n.setValue(k,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Rt(jr,Ad),ce&&B.fog===!0&&se.refreshFogUniforms(jr,ce),se.refreshMaterialUniforms(jr,B,Y,K,m.state.transmissionRenderTarget[A.id]),df.upload(k,Je(He),jr,F)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(df.upload(k,Je(He),jr,F),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_n.setValue(k,"center",V.center),_n.setValue(k,"modelViewMatrix",V.modelViewMatrix),_n.setValue(k,"normalMatrix",V.normalMatrix),_n.setValue(k,"modelMatrix",V.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Si=B.uniformsGroups;for(let Rd=0,w1=Si.length;Rd<w1;Rd++){const Yg=Si[Rd];Ye.update(Yg,zs),Ye.bind(Yg,zs)}}return zs}function Rt(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function yt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,O,z){Le.get(A.texture).__webglTexture=O,Le.get(A.depthTexture).__webglTexture=z;const B=Le.get(A);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const z=Le.get(A);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,z=0){E=A,C=O,T=z;let B=!0,V=null,ce=!1,me=!1;if(A){const Ne=Le.get(A);Ne.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(k.FRAMEBUFFER,null),B=!1):Ne.__webglFramebuffer===void 0?F.setupRenderTarget(A):Ne.__hasExternalTextures&&F.rebindTextures(A,Le.get(A.texture).__webglTexture,Le.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(me=!0);const be=Le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(be[O])?V=be[O][z]:V=be[O],ce=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?V=Le.get(A).__webglMultisampledFramebuffer:Array.isArray(be)?V=be[z]:V=be,y.copy(A.viewport),N.copy(A.scissor),U=A.scissorTest}else y.copy(R).multiplyScalar(Y).floor(),N.copy(ie).multiplyScalar(Y).floor(),U=te;if(ve.bindFramebuffer(k.FRAMEBUFFER,V)&&B&&ve.drawBuffers(A,V),ve.viewport(y),ve.scissor(N),ve.setScissorTest(U),ce){const Ne=Le.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,z)}else if(me){const Ne=Le.get(A.texture),Ve=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.__webglTexture,z||0,Ve)}P=-1},this.readRenderTargetPixels=function(A,O,z,B,V,ce,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){ve.bindFramebuffer(k.FRAMEBUFFER,_e);try{const Ne=A.texture,Ve=Ne.format,be=Ne.type;if(!Ce.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-B&&z>=0&&z<=A.height-V&&k.readPixels(O,z,B,V,Se.convert(Ve),Se.convert(be),ce)}finally{const Ne=E!==null?Le.get(E).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(A,O,z=0){const B=Math.pow(2,-z),V=Math.floor(O.image.width*B),ce=Math.floor(O.image.height*B);F.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,z,0,0,A.x,A.y,V,ce),ve.unbindTexture()},this.copyTextureToTexture=function(A,O,z,B=0){const V=O.image.width,ce=O.image.height,me=Se.convert(z.format),_e=Se.convert(z.type);F.setTexture2D(z,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,B,A.x,A.y,V,ce,me,_e,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,B,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,me,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,B,A.x,A.y,me,_e,O.image),B===0&&z.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,O,z,B,V=0){const ce=A.max.x-A.min.x,me=A.max.y-A.min.y,_e=A.max.z-A.min.z,Ne=Se.convert(B.format),Ve=Se.convert(B.type);let be;if(B.isData3DTexture)F.setTexture3D(B,0),be=k.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)F.setTexture2DArray(B,0),be=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);const Pe=k.getParameter(k.UNPACK_ROW_LENGTH),ct=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Wt=k.getParameter(k.UNPACK_SKIP_PIXELS),gn=k.getParameter(k.UNPACK_SKIP_ROWS),Pn=k.getParameter(k.UNPACK_SKIP_IMAGES),$e=z.isCompressedTexture?z.mipmaps[V]:z.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,$e.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$e.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),z.isDataTexture||z.isData3DTexture?k.texSubImage3D(be,V,O.x,O.y,O.z,ce,me,_e,Ne,Ve,$e.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(be,V,O.x,O.y,O.z,ce,me,_e,Ne,$e.data):k.texSubImage3D(be,V,O.x,O.y,O.z,ce,me,_e,Ne,Ve,$e),k.pixelStorei(k.UNPACK_ROW_LENGTH,Pe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Wt),k.pixelStorei(k.UNPACK_SKIP_ROWS,gn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pn),V===0&&B.generateMipmaps&&k.generateMipmap(be),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){C=0,T=0,E=null,ve.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gg?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===Ed?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nD extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class iD{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ax(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ax();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ax(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vg);var rD=`uniform float uTime;
uniform float uScrollPos;
uniform vec3 uColor;

varying float vTime;
varying vec3 vColor;
varying float vScrollPos;
varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
    vTime = uTime;
    vScrollPos = uScrollPos;
    vColor = uColor;
}`,sD=`varying vec2 vUv;
varying float vTime;
varying float vScrollPos;
varying vec3 vColor;

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}

vec2 fade(vec2 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec2 P)
{
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, 289.0); 
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;
    vec4 i = permute(permute(ix) + iy);
    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; 
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;
    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);
    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;
    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));
    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

void main()
{   

    
    float cnoise_multiplier = 10. + (vScrollPos * 40.);
    vec2 vUv_multiplier = vUv * 1.;
    float strength = smoothstep(0.0, 0.05,cos(cnoise(vUv_multiplier)* cnoise_multiplier));

    
    
    

    
    
    

    vec3 whiteBone = vec3(0.976,0.965,0.933);
    vec3 opaqueWhiteBone = vec3(0.956,0.945,0.913);
    vec3 mixedColor = mix(opaqueWhiteBone, whiteBone, strength);

    gl_FragColor = vec4(mixedColor, 1.0);
}`;const iu={x:"#DFDEDE",y:"#8B9357",z:"#2B352E"},oD=()=>{const n=co.useRef(null);return Xr(()=>{if(n.current){const e={width:window.innerWidth,height:window.innerHeight},t=new nD,i=window.innerWidth/window.innerHeight,r=new v1(-i,i,1,-1,0,1);r.position.z=1,t.add(r);const s=new tl(2*i,2,32,32),o=new Gr({vertexShader:rD,fragmentShader:sD,side:or});o.uniforms={uTime:{value:0},uScrollPos:{value:0},uColor:{value:[new ft(iu.x),new ft(iu.y),new ft(iu.z)]}};const a=new fr(s,o);t.add(a);const l=new tD({canvas:n.current});l.setSize(e.width,e.height),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(window.innerWidth,window.innerHeight);const u=new iD,c=()=>{window.requestAnimationFrame(()=>{const d=u.getElapsedTime();o.uniforms.uTime.value=d,l.render(t,r)})};c(),Pt.to("#main-box",{scrollTrigger:{trigger:"#main-box",start:"top top",end:"bottom bottom",onUpdate:d=>{const f=d.progress.toFixed(3);o.uniforms.uScrollPos.value=f,c()},scrub:!0,markers:!1}}),window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight;const d=window.innerWidth,f=window.innerHeight,p=d/f;r.left=-p,r.right=p,r.top=1,r.bottom=-1,r.updateProjectionMatrix(),r.updateProjectionMatrix(),a.geometry.dispose(),a.geometry=new tl(2*p,2,32,32),l.setSize(d,f),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),c()})}},[]),J.jsx("div",{className:"sticky top-0 z-0 hidden md:flex w-screen h-0 bg-transparent  ",children:J.jsx("canvas",{style:{width:"100%",height:"100%"},ref:n})})},aD=Mo.createContext({activeColor:iu,setColor:()=>console.error("NOT IMPLEMENTED")}),lD=()=>(Xr(()=>{Pt.to("#about-me-one",{opacity:1,ease:"sine.out",duration:.8,scrollTrigger:{trigger:"#header",start:"bottom center"}}),Pt.to("#about-me-one",{y:0,ease:"power4.out",duration:1.2,scrollTrigger:{trigger:"#header",start:"bottom center"}})},[]),J.jsx("div",{className:" relative h-[90vh] max-h-[1400px] w-screen flex",children:J.jsx("div",{className:"w-full flex",children:J.jsx("div",{id:"about-me-one",className:"w-full h-full flex justify-center translate-y-[25vh] opacity-0  ",children:J.jsxs("div",{className:"w-7/12 h-full flex flex-col justify-center items-center px-12 ",children:[J.jsx("h3",{className:"text-lg md:text-5xl font-inter font-extrabold mb-10",children:"Hi there!"}),J.jsxs("p",{className:"text-md md:text-4xl text-center font-inter font-thin mb-8 md:mb-16",children:[J.jsx("span",{className:"fo nt-bold",children:"Pixel perfect"})," software engineer based in Buenos Aires."]}),J.jsx("p",{className:"text-md md:text-4xl text-center font-inter font-thin mb-8 md:mb-16",children:"Experienced in React, Next.js, AWS and a bunch of cool tech."}),J.jsx("p",{className:"text-md md:text-4xl text-center font-inter font-thin mb-8 md:mb-16",children:"Passionate about turning great ideas into great products."}),J.jsx("p",{className:"text-md md:text-4xl text-center font-inter font-thin mb-8 md:mb-16",children:"Problem-solving oriented, naturally curious, continually growing."})]})})})})),uD=()=>(Xr(()=>{Pt.fromTo("#header-nav-name",{y:"7rem"},{y:0,fontSize:"2rem",scrollTrigger:{trigger:"#header",start:"top top",scrub:!0,onUpdate:n=>{n.progress>.9?(Pt.to("#header-career",{color:"#141516"}),Pt.to("#header-email",{color:"#141516"}),Pt.to("#header-nav-name",{color:"#141516"}),Pt.to("#navbar",{backgroundColor:"rgba(249,246,238,0.6)"})):(Pt.to("#header-career",{color:"#f9f6ee"}),Pt.to("#header-email",{color:"#f9f6ee"}),Pt.to("#header-nav-name",{color:"#f9f6ee"}),Pt.to("#navbar",{backgroundColor:"#141516"}))}}})},[]),J.jsx("div",{id:"navbar",className:"w-screen h-20 fixed top-0 z-50 mt-[-1px] flex justify-center backdrop-blur-md max-[1600px]:px-8 ",children:J.jsxs("nav",{className:"relative flex flex-row-reverse justify-between items-center w-[1600px] max-w-screen",children:[J.jsx("p",{id:"header-email",className:"font-interText text-white-bone hidden md:flex ",children:J.jsx("a",{className:"decoration",href:"mailto:urdntjuan@gmail.com",children:"urdntjuan@gmail.com"})}),J.jsx("p",{id:"header-nav-name",className:"absolute w-full font-interText font-extrabold max-[600px]:text-5xl max-[930px]:text-7xl max-[1210px]:text-8xl text-9xl tracking-wide uppercase select-none text-white-bone text-left md:text-center ",children:"Juan Urdaneta"}),J.jsx("p",{id:"header-career",className:"uppercase font-interText text-white-bone hidden min-[1100px]:flex",children:"Software engineer / Creative Developer"})]})}));Pt.registerPlugin(nt);function cD(){const[n,e]=co.useState(iu),[t,i]=co.useState(null);return co.useEffect(()=>{const r=new zA({lerp:.1});r.on("scroll",nt.update),i(r),Pt.ticker.add(s=>{r.raf(s*1e3)}),Pt.ticker.lagSmoothing(0)},[]),Xr(()=>{Pt.to("#box-effect",{bottom:"100vh",ease:"power4.inOut",duration:2.5,delay:.5,onComplete:()=>{Pt.to("#box-effect",{opacity:0,visibility:"hidden"})}}),Pt.fromTo("#name-box",{opacity:0},{opacity:1,delay:.6,duration:2,ease:"sine.out"})},[]),J.jsx(J.Fragment,{children:J.jsx(aD.Provider,{value:{activeColor:n,setColor:e},children:J.jsxs("main",{id:"main-box",className:"relative",children:[J.jsx(uD,{}),J.jsx(oD,{}),J.jsx(mA,{scrollTo:r=>{t==null||t.scrollTo(r)}}),J.jsx(lD,{}),J.jsx(_A,{}),J.jsx("div",{className:" relative w-full h-72 backdrop-invert bg-[#949596]/20"}),J.jsx(vA,{})]})})})}Zh.createRoot(document.getElementById("root")).render(J.jsx(co.StrictMode,{children:J.jsx(cD,{})}));
