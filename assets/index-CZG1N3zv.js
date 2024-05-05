var w1=Object.defineProperty;var A1=(n,e,t)=>e in n?w1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var vr=(n,e,t)=>(A1(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function C1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ax={exports:{}},ed={},lx={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=Symbol.for("react.element"),R1=Symbol.for("react.portal"),P1=Symbol.for("react.fragment"),b1=Symbol.for("react.strict_mode"),L1=Symbol.for("react.profiler"),D1=Symbol.for("react.provider"),N1=Symbol.for("react.context"),U1=Symbol.for("react.forward_ref"),I1=Symbol.for("react.suspense"),O1=Symbol.for("react.memo"),F1=Symbol.for("react.lazy"),Yg=Symbol.iterator;function k1(n){return n===null||typeof n!="object"?null:(n=Yg&&n[Yg]||n["@@iterator"],typeof n=="function"?n:null)}var ux={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cx=Object.assign,fx={};function rl(n,e,t){this.props=n,this.context=e,this.refs=fx,this.updater=t||ux}rl.prototype.isReactComponent={};rl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};rl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function dx(){}dx.prototype=rl.prototype;function Em(n,e,t){this.props=n,this.context=e,this.refs=fx,this.updater=t||ux}var Tm=Em.prototype=new dx;Tm.constructor=Em;cx(Tm,rl.prototype);Tm.isPureReactComponent=!0;var qg=Array.isArray,hx=Object.prototype.hasOwnProperty,wm={current:null},px={key:!0,ref:!0,__self:!0,__source:!0};function mx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hx.call(e,i)&&!px.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Du,type:n,key:s,ref:o,props:r,_owner:wm.current}}function z1(n,e){return{$$typeof:Du,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Am(n){return typeof n=="object"&&n!==null&&n.$$typeof===Du}function B1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var $g=/\/+/g;function Pd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?B1(""+n.key):e.toString(36)}function Gc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Du:case R1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Pd(o,0):i,qg(r)?(t="",n!=null&&(t=n.replace($g,"$&/")+"/"),Gc(r,e,t,"",function(u){return u})):r!=null&&(Am(r)&&(r=z1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace($g,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",qg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Pd(s,a);o+=Gc(s,e,t,l,r)}else if(l=k1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Pd(s,a++),o+=Gc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gu(n,e,t){if(n==null)return n;var i=[],r=0;return Gc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function H1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Hn={current:null},Wc={transition:null},V1={ReactCurrentDispatcher:Hn,ReactCurrentBatchConfig:Wc,ReactCurrentOwner:wm};it.Children={map:Gu,forEach:function(n,e,t){Gu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Gu(n,function(){e++}),e},toArray:function(n){return Gu(n,function(e){return e})||[]},only:function(n){if(!Am(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};it.Component=rl;it.Fragment=P1;it.Profiler=L1;it.PureComponent=Em;it.StrictMode=b1;it.Suspense=I1;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V1;it.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=cx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)hx.call(e,l)&&!px.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Du,type:n.type,key:r,ref:s,props:i,_owner:o}};it.createContext=function(n){return n={$$typeof:N1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:D1,_context:n},n.Consumer=n};it.createElement=mx;it.createFactory=function(n){var e=mx.bind(null,n);return e.type=n,e};it.createRef=function(){return{current:null}};it.forwardRef=function(n){return{$$typeof:U1,render:n}};it.isValidElement=Am;it.lazy=function(n){return{$$typeof:F1,_payload:{_status:-1,_result:n},_init:H1}};it.memo=function(n,e){return{$$typeof:O1,type:n,compare:e===void 0?null:e}};it.startTransition=function(n){var e=Wc.transition;Wc.transition={};try{n()}finally{Wc.transition=e}};it.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};it.useCallback=function(n,e){return Hn.current.useCallback(n,e)};it.useContext=function(n){return Hn.current.useContext(n)};it.useDebugValue=function(){};it.useDeferredValue=function(n){return Hn.current.useDeferredValue(n)};it.useEffect=function(n,e){return Hn.current.useEffect(n,e)};it.useId=function(){return Hn.current.useId()};it.useImperativeHandle=function(n,e,t){return Hn.current.useImperativeHandle(n,e,t)};it.useInsertionEffect=function(n,e){return Hn.current.useInsertionEffect(n,e)};it.useLayoutEffect=function(n,e){return Hn.current.useLayoutEffect(n,e)};it.useMemo=function(n,e){return Hn.current.useMemo(n,e)};it.useReducer=function(n,e,t){return Hn.current.useReducer(n,e,t)};it.useRef=function(n){return Hn.current.useRef(n)};it.useState=function(n){return Hn.current.useState(n)};it.useSyncExternalStore=function(n,e,t){return Hn.current.useSyncExternalStore(n,e,t)};it.useTransition=function(){return Hn.current.useTransition()};it.version="18.2.0";lx.exports=it;var za=lx.exports;const td=C1(za);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=za,W1=Symbol.for("react.element"),X1=Symbol.for("react.fragment"),j1=Object.prototype.hasOwnProperty,Y1=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q1={key:!0,ref:!0,__self:!0,__source:!0};function gx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)j1.call(e,i)&&!q1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:W1,type:n,key:s,ref:o,props:r,_owner:Y1.current}}ed.Fragment=X1;ed.jsx=gx;ed.jsxs=gx;ax.exports=ed;var se=ax.exports,Kh={},_x={exports:{}},xi={},vx={exports:{}},xx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,G){var R=L.length;L.push(G);e:for(;0<R;){var ne=R-1>>>1,ee=L[ne];if(0<r(ee,G))L[ne]=G,L[R]=ee,R=ne;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var G=L[0],R=L.pop();if(R!==G){L[0]=R;e:for(var ne=0,ee=L.length,Fe=ee>>>1;ne<Fe;){var H=2*(ne+1)-1,J=L[H],le=H+1,te=L[le];if(0>r(J,R))le<ee&&0>r(te,J)?(L[ne]=te,L[le]=R,ne=le):(L[ne]=J,L[H]=R,ne=H);else if(le<ee&&0>r(te,R))L[ne]=te,L[le]=R,ne=le;else break e}}return G}function r(L,G){var R=L.sortIndex-G.sortIndex;return R!==0?R:L.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var G=t(u);G!==null;){if(G.callback===null)i(u);else if(G.startTime<=L)i(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=t(u)}}function S(L){if(g=!1,x(L),!_)if(t(l)!==null)_=!0,K(C);else{var G=t(u);G!==null&&Y(S,G.startTime-L)}}function C(L,G){_=!1,g&&(g=!1,h(P),P=-1),p=!0;var R=f;try{for(x(G),d=t(l);d!==null&&(!(d.expirationTime>G)||L&&!N());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var ee=ne(d.expirationTime<=G);G=n.unstable_now(),typeof ee=="function"?d.callback=ee:d===t(l)&&i(l),x(G)}else i(l);d=t(l)}if(d!==null)var Fe=!0;else{var H=t(u);H!==null&&Y(S,H.startTime-G),Fe=!1}return Fe}finally{d=null,f=R,p=!1}}var T=!1,E=null,P=-1,M=5,y=-1;function N(){return!(n.unstable_now()-y<M)}function U(){if(E!==null){var L=n.unstable_now();y=L;var G=!0;try{G=E(!0,L)}finally{G?D():(T=!1,E=null)}}else T=!1}var D;if(typeof v=="function")D=function(){v(U)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,j=X.port2;X.port1.onmessage=U,D=function(){j.postMessage(null)}}else D=function(){m(U,0)};function K(L){E=L,T||(T=!0,D())}function Y(L,G){P=m(function(){L(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,K(C))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var R=f;f=G;try{return L()}finally{f=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var R=f;f=L;try{return G()}finally{f=R}},n.unstable_scheduleCallback=function(L,G,R){var ne=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ne+R:ne):R=ne,L){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=R+ee,L={id:c++,callback:G,priorityLevel:L,startTime:R,expirationTime:ee,sortIndex:-1},R>ne?(L.sortIndex=R,e(u,L),t(l)===null&&L===t(u)&&(g?(h(P),P=-1):g=!0,Y(S,R-ne))):(L.sortIndex=ee,e(l,L),_||p||(_=!0,K(C))),L},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(L){var G=f;return function(){var R=f;f=G;try{return L.apply(this,arguments)}finally{f=R}}}})(xx);vx.exports=xx;var $1=vx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=za,_i=$1;function ae(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sx=new Set,su={};function Lo(n,e){Ba(n,e),Ba(n+"Capture",e)}function Ba(n,e){for(su[n]=e,n=0;n<e.length;n++)Sx.add(e[n])}var Or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zh=Object.prototype.hasOwnProperty,K1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kg={},Zg={};function Z1(n){return Zh.call(Zg,n)?!0:Zh.call(Kg,n)?!1:K1.test(n)?Zg[n]=!0:(Kg[n]=!0,!1)}function Q1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function J1(n,e,t,i){if(e===null||typeof e>"u"||Q1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){mn[n]=new Vn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];mn[e]=new Vn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){mn[n]=new Vn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){mn[n]=new Vn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){mn[n]=new Vn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){mn[n]=new Vn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){mn[n]=new Vn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){mn[n]=new Vn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){mn[n]=new Vn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Cm=/[\-:]([a-z])/g;function Rm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Cm,Rm);mn[e]=new Vn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Cm,Rm);mn[e]=new Vn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Cm,Rm);mn[e]=new Vn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){mn[n]=new Vn(n,1,!1,n.toLowerCase(),null,!1,!1)});mn.xlinkHref=new Vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){mn[n]=new Vn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Pm(n,e,t,i){var r=mn.hasOwnProperty(e)?mn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J1(e,t,r,i)&&(t=null),i||r===null?Z1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Wr=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wu=Symbol.for("react.element"),la=Symbol.for("react.portal"),ua=Symbol.for("react.fragment"),bm=Symbol.for("react.strict_mode"),Qh=Symbol.for("react.profiler"),Mx=Symbol.for("react.provider"),Ex=Symbol.for("react.context"),Lm=Symbol.for("react.forward_ref"),Jh=Symbol.for("react.suspense"),ep=Symbol.for("react.suspense_list"),Dm=Symbol.for("react.memo"),es=Symbol.for("react.lazy"),Tx=Symbol.for("react.offscreen"),Qg=Symbol.iterator;function cl(n){return n===null||typeof n!="object"?null:(n=Qg&&n[Qg]||n["@@iterator"],typeof n=="function"?n:null)}var Ft=Object.assign,bd;function Al(n){if(bd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);bd=e&&e[1]||""}return`
`+bd+n}var Ld=!1;function Dd(n,e){if(!n||Ld)return"";Ld=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ld=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Al(n):""}function eE(n){switch(n.tag){case 5:return Al(n.type);case 16:return Al("Lazy");case 13:return Al("Suspense");case 19:return Al("SuspenseList");case 0:case 2:case 15:return n=Dd(n.type,!1),n;case 11:return n=Dd(n.type.render,!1),n;case 1:return n=Dd(n.type,!0),n;default:return""}}function tp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ua:return"Fragment";case la:return"Portal";case Qh:return"Profiler";case bm:return"StrictMode";case Jh:return"Suspense";case ep:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ex:return(n.displayName||"Context")+".Consumer";case Mx:return(n._context.displayName||"Context")+".Provider";case Lm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dm:return e=n.displayName||null,e!==null?e:tp(n.type)||"Memo";case es:e=n._payload,n=n._init;try{return tp(n(e))}catch{}}return null}function tE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tp(e);case 8:return e===bm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function As(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function wx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nE(n){var e=wx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Xu(n){n._valueTracker||(n._valueTracker=nE(n))}function Ax(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=wx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function df(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function np(n,e){var t=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Jg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=As(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cx(n,e){e=e.checked,e!=null&&Pm(n,"checked",e,!1)}function ip(n,e){Cx(n,e);var t=As(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?rp(n,e.type,t):e.hasOwnProperty("defaultValue")&&rp(n,e.type,As(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function e_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function rp(n,e,t){(e!=="number"||df(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Cl=Array.isArray;function Ta(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+As(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function sp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function t_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ae(92));if(Cl(t)){if(1<t.length)throw Error(ae(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:As(t)}}function Rx(n,e){var t=As(e.value),i=As(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function n_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Px(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function op(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Px(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ju,bx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ju=ju||document.createElement("div"),ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ju.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ou(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var kl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iE=["Webkit","ms","Moz","O"];Object.keys(kl).forEach(function(n){iE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),kl[e]=kl[n]})});function Lx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||kl.hasOwnProperty(n)&&kl[n]?(""+e).trim():e+"px"}function Dx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Lx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var rE=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ap(n,e){if(e){if(rE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function lp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var up=null;function Nm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var cp=null,wa=null,Aa=null;function i_(n){if(n=Iu(n)){if(typeof cp!="function")throw Error(ae(280));var e=n.stateNode;e&&(e=od(e),cp(n.stateNode,n.type,e))}}function Nx(n){wa?Aa?Aa.push(n):Aa=[n]:wa=n}function Ux(){if(wa){var n=wa,e=Aa;if(Aa=wa=null,i_(n),e)for(n=0;n<e.length;n++)i_(e[n])}}function Ix(n,e){return n(e)}function Ox(){}var Nd=!1;function Fx(n,e,t){if(Nd)return n(e,t);Nd=!0;try{return Ix(n,e,t)}finally{Nd=!1,(wa!==null||Aa!==null)&&(Ox(),Ux())}}function au(n,e){var t=n.stateNode;if(t===null)return null;var i=od(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ae(231,e,typeof t));return t}var fp=!1;if(Or)try{var fl={};Object.defineProperty(fl,"passive",{get:function(){fp=!0}}),window.addEventListener("test",fl,fl),window.removeEventListener("test",fl,fl)}catch{fp=!1}function sE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var zl=!1,hf=null,pf=!1,dp=null,oE={onError:function(n){zl=!0,hf=n}};function aE(n,e,t,i,r,s,o,a,l){zl=!1,hf=null,sE.apply(oE,arguments)}function lE(n,e,t,i,r,s,o,a,l){if(aE.apply(this,arguments),zl){if(zl){var u=hf;zl=!1,hf=null}else throw Error(ae(198));pf||(pf=!0,dp=u)}}function Do(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function kx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function r_(n){if(Do(n)!==n)throw Error(ae(188))}function uE(n){var e=n.alternate;if(!e){if(e=Do(n),e===null)throw Error(ae(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return r_(r),n;if(s===i)return r_(r),e;s=s.sibling}throw Error(ae(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(t.alternate!==i)throw Error(ae(190))}if(t.tag!==3)throw Error(ae(188));return t.stateNode.current===t?n:e}function zx(n){return n=uE(n),n!==null?Bx(n):null}function Bx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Bx(n);if(e!==null)return e;n=n.sibling}return null}var Hx=_i.unstable_scheduleCallback,s_=_i.unstable_cancelCallback,cE=_i.unstable_shouldYield,fE=_i.unstable_requestPaint,Vt=_i.unstable_now,dE=_i.unstable_getCurrentPriorityLevel,Um=_i.unstable_ImmediatePriority,Vx=_i.unstable_UserBlockingPriority,mf=_i.unstable_NormalPriority,hE=_i.unstable_LowPriority,Gx=_i.unstable_IdlePriority,nd=null,dr=null;function pE(n){if(dr&&typeof dr.onCommitFiberRoot=="function")try{dr.onCommitFiberRoot(nd,n,void 0,(n.current.flags&128)===128)}catch{}}var qi=Math.clz32?Math.clz32:_E,mE=Math.log,gE=Math.LN2;function _E(n){return n>>>=0,n===0?32:31-(mE(n)/gE|0)|0}var Yu=64,qu=4194304;function Rl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Rl(a):(s&=o,s!==0&&(i=Rl(s)))}else o=t&~r,o!==0?i=Rl(o):s!==0&&(i=Rl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-qi(e),r=1<<t,i|=n[t],e&=~r;return i}function vE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-qi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=vE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function hp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wx(){var n=Yu;return Yu<<=1,!(Yu&4194240)&&(Yu=64),n}function Ud(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Nu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-qi(e),n[e]=t}function yE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-qi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Im(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-qi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var pt=0;function Xx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var jx,Om,Yx,qx,$x,pp=!1,$u=[],hs=null,ps=null,ms=null,lu=new Map,uu=new Map,ns=[],SE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function o_(n,e){switch(n){case"focusin":case"focusout":hs=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":lu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uu.delete(e.pointerId)}}function dl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Iu(e),e!==null&&Om(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function ME(n,e,t,i,r){switch(e){case"focusin":return hs=dl(hs,n,e,t,i,r),!0;case"dragenter":return ps=dl(ps,n,e,t,i,r),!0;case"mouseover":return ms=dl(ms,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return lu.set(s,dl(lu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,uu.set(s,dl(uu.get(s)||null,n,e,t,i,r)),!0}return!1}function Kx(n){var e=no(n.target);if(e!==null){var t=Do(e);if(t!==null){if(e=t.tag,e===13){if(e=kx(t),e!==null){n.blockedOn=e,$x(n.priority,function(){Yx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Xc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=mp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);up=i,t.target.dispatchEvent(i),up=null}else return e=Iu(t),e!==null&&Om(e),n.blockedOn=t,!1;e.shift()}return!0}function a_(n,e,t){Xc(n)&&t.delete(e)}function EE(){pp=!1,hs!==null&&Xc(hs)&&(hs=null),ps!==null&&Xc(ps)&&(ps=null),ms!==null&&Xc(ms)&&(ms=null),lu.forEach(a_),uu.forEach(a_)}function hl(n,e){n.blockedOn===e&&(n.blockedOn=null,pp||(pp=!0,_i.unstable_scheduleCallback(_i.unstable_NormalPriority,EE)))}function cu(n){function e(r){return hl(r,n)}if(0<$u.length){hl($u[0],n);for(var t=1;t<$u.length;t++){var i=$u[t];i.blockedOn===n&&(i.blockedOn=null)}}for(hs!==null&&hl(hs,n),ps!==null&&hl(ps,n),ms!==null&&hl(ms,n),lu.forEach(e),uu.forEach(e),t=0;t<ns.length;t++)i=ns[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ns.length&&(t=ns[0],t.blockedOn===null);)Kx(t),t.blockedOn===null&&ns.shift()}var Ca=Wr.ReactCurrentBatchConfig,_f=!0;function TE(n,e,t,i){var r=pt,s=Ca.transition;Ca.transition=null;try{pt=1,Fm(n,e,t,i)}finally{pt=r,Ca.transition=s}}function wE(n,e,t,i){var r=pt,s=Ca.transition;Ca.transition=null;try{pt=4,Fm(n,e,t,i)}finally{pt=r,Ca.transition=s}}function Fm(n,e,t,i){if(_f){var r=mp(n,e,t,i);if(r===null)Wd(n,e,i,vf,t),o_(n,i);else if(ME(r,n,e,t,i))i.stopPropagation();else if(o_(n,i),e&4&&-1<SE.indexOf(n)){for(;r!==null;){var s=Iu(r);if(s!==null&&jx(s),s=mp(n,e,t,i),s===null&&Wd(n,e,i,vf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wd(n,e,i,null,t)}}var vf=null;function mp(n,e,t,i){if(vf=null,n=Nm(i),n=no(n),n!==null)if(e=Do(n),e===null)n=null;else if(t=e.tag,t===13){if(n=kx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return vf=n,null}function Zx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dE()){case Um:return 1;case Vx:return 4;case mf:case hE:return 16;case Gx:return 536870912;default:return 16}default:return 16}}var ss=null,km=null,jc=null;function Qx(){if(jc)return jc;var n,e=km,t=e.length,i,r="value"in ss?ss.value:ss.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return jc=r.slice(n,1<i?1-i:void 0)}function Yc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ku(){return!0}function l_(){return!1}function yi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ku:l_,this.isPropagationStopped=l_,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ku)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ku)},persist:function(){},isPersistent:Ku}),e}var sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zm=yi(sl),Uu=Ft({},sl,{view:0,detail:0}),AE=yi(Uu),Id,Od,pl,id=Ft({},Uu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pl&&(pl&&n.type==="mousemove"?(Id=n.screenX-pl.screenX,Od=n.screenY-pl.screenY):Od=Id=0,pl=n),Id)},movementY:function(n){return"movementY"in n?n.movementY:Od}}),u_=yi(id),CE=Ft({},id,{dataTransfer:0}),RE=yi(CE),PE=Ft({},Uu,{relatedTarget:0}),Fd=yi(PE),bE=Ft({},sl,{animationName:0,elapsedTime:0,pseudoElement:0}),LE=yi(bE),DE=Ft({},sl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),NE=yi(DE),UE=Ft({},sl,{data:0}),c_=yi(UE),IE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=FE[n])?!!e[n]:!1}function Bm(){return kE}var zE=Ft({},Uu,{key:function(n){if(n.key){var e=IE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Yc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?OE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bm,charCode:function(n){return n.type==="keypress"?Yc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Yc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),BE=yi(zE),HE=Ft({},id,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f_=yi(HE),VE=Ft({},Uu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bm}),GE=yi(VE),WE=Ft({},sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),XE=yi(WE),jE=Ft({},id,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),YE=yi(jE),qE=[9,13,27,32],Hm=Or&&"CompositionEvent"in window,Bl=null;Or&&"documentMode"in document&&(Bl=document.documentMode);var $E=Or&&"TextEvent"in window&&!Bl,Jx=Or&&(!Hm||Bl&&8<Bl&&11>=Bl),d_=" ",h_=!1;function ey(n,e){switch(n){case"keyup":return qE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ty(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ca=!1;function KE(n,e){switch(n){case"compositionend":return ty(e);case"keypress":return e.which!==32?null:(h_=!0,d_);case"textInput":return n=e.data,n===d_&&h_?null:n;default:return null}}function ZE(n,e){if(ca)return n==="compositionend"||!Hm&&ey(n,e)?(n=Qx(),jc=km=ss=null,ca=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jx&&e.locale!=="ko"?null:e.data;default:return null}}var QE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function p_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!QE[n.type]:e==="textarea"}function ny(n,e,t,i){Nx(i),e=xf(e,"onChange"),0<e.length&&(t=new zm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Hl=null,fu=null;function JE(n){hy(n,0)}function rd(n){var e=ha(n);if(Ax(e))return n}function eT(n,e){if(n==="change")return e}var iy=!1;if(Or){var kd;if(Or){var zd="oninput"in document;if(!zd){var m_=document.createElement("div");m_.setAttribute("oninput","return;"),zd=typeof m_.oninput=="function"}kd=zd}else kd=!1;iy=kd&&(!document.documentMode||9<document.documentMode)}function g_(){Hl&&(Hl.detachEvent("onpropertychange",ry),fu=Hl=null)}function ry(n){if(n.propertyName==="value"&&rd(fu)){var e=[];ny(e,fu,n,Nm(n)),Fx(JE,e)}}function tT(n,e,t){n==="focusin"?(g_(),Hl=e,fu=t,Hl.attachEvent("onpropertychange",ry)):n==="focusout"&&g_()}function nT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rd(fu)}function iT(n,e){if(n==="click")return rd(e)}function rT(n,e){if(n==="input"||n==="change")return rd(e)}function sT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ki=typeof Object.is=="function"?Object.is:sT;function du(n,e){if(Ki(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Zh.call(e,r)||!Ki(n[r],e[r]))return!1}return!0}function __(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function v_(n,e){var t=__(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=__(t)}}function sy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?sy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function oy(){for(var n=window,e=df();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=df(n.document)}return e}function Vm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function oT(n){var e=oy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&sy(t.ownerDocument.documentElement,t)){if(i!==null&&Vm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=v_(t,s);var o=v_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var aT=Or&&"documentMode"in document&&11>=document.documentMode,fa=null,gp=null,Vl=null,_p=!1;function x_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;_p||fa==null||fa!==df(i)||(i=fa,"selectionStart"in i&&Vm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vl&&du(Vl,i)||(Vl=i,i=xf(gp,"onSelect"),0<i.length&&(e=new zm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=fa)))}function Zu(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var da={animationend:Zu("Animation","AnimationEnd"),animationiteration:Zu("Animation","AnimationIteration"),animationstart:Zu("Animation","AnimationStart"),transitionend:Zu("Transition","TransitionEnd")},Bd={},ay={};Or&&(ay=document.createElement("div").style,"AnimationEvent"in window||(delete da.animationend.animation,delete da.animationiteration.animation,delete da.animationstart.animation),"TransitionEvent"in window||delete da.transitionend.transition);function sd(n){if(Bd[n])return Bd[n];if(!da[n])return n;var e=da[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ay)return Bd[n]=e[t];return n}var ly=sd("animationend"),uy=sd("animationiteration"),cy=sd("animationstart"),fy=sd("transitionend"),dy=new Map,y_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ns(n,e){dy.set(n,e),Lo(e,[n])}for(var Hd=0;Hd<y_.length;Hd++){var Vd=y_[Hd],lT=Vd.toLowerCase(),uT=Vd[0].toUpperCase()+Vd.slice(1);Ns(lT,"on"+uT)}Ns(ly,"onAnimationEnd");Ns(uy,"onAnimationIteration");Ns(cy,"onAnimationStart");Ns("dblclick","onDoubleClick");Ns("focusin","onFocus");Ns("focusout","onBlur");Ns(fy,"onTransitionEnd");Ba("onMouseEnter",["mouseout","mouseover"]);Ba("onMouseLeave",["mouseout","mouseover"]);Ba("onPointerEnter",["pointerout","pointerover"]);Ba("onPointerLeave",["pointerout","pointerover"]);Lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pl));function S_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,lE(i,e,void 0,n),n.currentTarget=null}function hy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;S_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;S_(r,a,u),s=l}}}if(pf)throw n=dp,pf=!1,dp=null,n}function Et(n,e){var t=e[Mp];t===void 0&&(t=e[Mp]=new Set);var i=n+"__bubble";t.has(i)||(py(e,n,2,!1),t.add(i))}function Gd(n,e,t){var i=0;e&&(i|=4),py(t,n,i,e)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function hu(n){if(!n[Qu]){n[Qu]=!0,Sx.forEach(function(t){t!=="selectionchange"&&(cT.has(t)||Gd(t,!1,n),Gd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Qu]||(e[Qu]=!0,Gd("selectionchange",!1,e))}}function py(n,e,t,i){switch(Zx(e)){case 1:var r=TE;break;case 4:r=wE;break;default:r=Fm}t=r.bind(null,e,t,n),r=void 0,!fp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Wd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=no(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Fx(function(){var u=s,c=Nm(t),d=[];e:{var f=dy.get(n);if(f!==void 0){var p=zm,_=n;switch(n){case"keypress":if(Yc(t)===0)break e;case"keydown":case"keyup":p=BE;break;case"focusin":_="focus",p=Fd;break;case"focusout":_="blur",p=Fd;break;case"beforeblur":case"afterblur":p=Fd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=u_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=RE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GE;break;case ly:case uy:case cy:p=LE;break;case fy:p=XE;break;case"scroll":p=AE;break;case"wheel":p=YE;break;case"copy":case"cut":case"paste":p=NE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=f_}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=au(v,h),S!=null&&g.push(pu(v,S,x)))),m)break;v=v.return}0<g.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==up&&(_=t.relatedTarget||t.fromElement)&&(no(_)||_[Fr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?no(_):null,_!==null&&(m=Do(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=u_,S="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=f_,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:ha(p),x=_==null?f:ha(_),f=new g(S,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,S=null,no(c)===u&&(g=new g(h,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,S=g),m=S,p&&_)t:{for(g=p,h=_,v=0,x=g;x;x=Oo(x))v++;for(x=0,S=h;S;S=Oo(S))x++;for(;0<v-x;)g=Oo(g),v--;for(;0<x-v;)h=Oo(h),x--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=Oo(g),h=Oo(h)}g=null}else g=null;p!==null&&M_(d,f,p,g,!1),_!==null&&m!==null&&M_(d,m,_,g,!0)}}e:{if(f=u?ha(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=eT;else if(p_(f))if(iy)C=rT;else{C=nT;var T=tT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=iT);if(C&&(C=C(n,u))){ny(d,C,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&rp(f,"number",f.value)}switch(T=u?ha(u):window,n){case"focusin":(p_(T)||T.contentEditable==="true")&&(fa=T,gp=u,Vl=null);break;case"focusout":Vl=gp=fa=null;break;case"mousedown":_p=!0;break;case"contextmenu":case"mouseup":case"dragend":_p=!1,x_(d,t,c);break;case"selectionchange":if(aT)break;case"keydown":case"keyup":x_(d,t,c)}var E;if(Hm)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ca?ey(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Jx&&t.locale!=="ko"&&(ca||P!=="onCompositionStart"?P==="onCompositionEnd"&&ca&&(E=Qx()):(ss=c,km="value"in ss?ss.value:ss.textContent,ca=!0)),T=xf(u,P),0<T.length&&(P=new c_(P,n,null,t,c),d.push({event:P,listeners:T}),E?P.data=E:(E=ty(t),E!==null&&(P.data=E)))),(E=$E?KE(n,t):ZE(n,t))&&(u=xf(u,"onBeforeInput"),0<u.length&&(c=new c_("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=E))}hy(d,e)})}function pu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function xf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=au(n,t),s!=null&&i.unshift(pu(n,s,r)),s=au(n,e),s!=null&&i.push(pu(n,s,r))),n=n.return}return i}function Oo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function M_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=au(t,s),l!=null&&o.unshift(pu(t,l,a))):r||(l=au(t,s),l!=null&&o.push(pu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var fT=/\r\n?/g,dT=/\u0000|\uFFFD/g;function E_(n){return(typeof n=="string"?n:""+n).replace(fT,`
`).replace(dT,"")}function Ju(n,e,t){if(e=E_(e),E_(n)!==e&&t)throw Error(ae(425))}function yf(){}var vp=null,xp=null;function yp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Sp=typeof setTimeout=="function"?setTimeout:void 0,hT=typeof clearTimeout=="function"?clearTimeout:void 0,T_=typeof Promise=="function"?Promise:void 0,pT=typeof queueMicrotask=="function"?queueMicrotask:typeof T_<"u"?function(n){return T_.resolve(null).then(n).catch(mT)}:Sp;function mT(n){setTimeout(function(){throw n})}function Xd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),cu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);cu(e)}function gs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function w_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ol=Math.random().toString(36).slice(2),rr="__reactFiber$"+ol,mu="__reactProps$"+ol,Fr="__reactContainer$"+ol,Mp="__reactEvents$"+ol,gT="__reactListeners$"+ol,_T="__reactHandles$"+ol;function no(n){var e=n[rr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Fr]||t[rr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=w_(n);n!==null;){if(t=n[rr])return t;n=w_(n)}return e}n=t,t=n.parentNode}return null}function Iu(n){return n=n[rr]||n[Fr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ha(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ae(33))}function od(n){return n[mu]||null}var Ep=[],pa=-1;function Us(n){return{current:n}}function At(n){0>pa||(n.current=Ep[pa],Ep[pa]=null,pa--)}function Mt(n,e){pa++,Ep[pa]=n.current,n.current=e}var Cs={},Rn=Us(Cs),qn=Us(!1),yo=Cs;function Ha(n,e){var t=n.type.contextTypes;if(!t)return Cs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function $n(n){return n=n.childContextTypes,n!=null}function Sf(){At(qn),At(Rn)}function A_(n,e,t){if(Rn.current!==Cs)throw Error(ae(168));Mt(Rn,e),Mt(qn,t)}function my(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,tE(n)||"Unknown",r));return Ft({},t,i)}function Mf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cs,yo=Rn.current,Mt(Rn,n),Mt(qn,qn.current),!0}function C_(n,e,t){var i=n.stateNode;if(!i)throw Error(ae(169));t?(n=my(n,e,yo),i.__reactInternalMemoizedMergedChildContext=n,At(qn),At(Rn),Mt(Rn,n)):At(qn),Mt(qn,t)}var Cr=null,ad=!1,jd=!1;function gy(n){Cr===null?Cr=[n]:Cr.push(n)}function vT(n){ad=!0,gy(n)}function Is(){if(!jd&&Cr!==null){jd=!0;var n=0,e=pt;try{var t=Cr;for(pt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Cr=null,ad=!1}catch(r){throw Cr!==null&&(Cr=Cr.slice(n+1)),Hx(Um,Is),r}finally{pt=e,jd=!1}}return null}var ma=[],ga=0,Ef=null,Tf=0,Ti=[],wi=0,So=null,br=1,Lr="";function Ys(n,e){ma[ga++]=Tf,ma[ga++]=Ef,Ef=n,Tf=e}function _y(n,e,t){Ti[wi++]=br,Ti[wi++]=Lr,Ti[wi++]=So,So=n;var i=br;n=Lr;var r=32-qi(i)-1;i&=~(1<<r),t+=1;var s=32-qi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,br=1<<32-qi(e)+r|t<<r|i,Lr=s+n}else br=1<<s|t<<r|i,Lr=n}function Gm(n){n.return!==null&&(Ys(n,1),_y(n,1,0))}function Wm(n){for(;n===Ef;)Ef=ma[--ga],ma[ga]=null,Tf=ma[--ga],ma[ga]=null;for(;n===So;)So=Ti[--wi],Ti[wi]=null,Lr=Ti[--wi],Ti[wi]=null,br=Ti[--wi],Ti[wi]=null}var pi=null,di=null,Pt=!1,Wi=null;function vy(n,e){var t=Ri(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function R_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,pi=n,di=gs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,pi=n,di=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=So!==null?{id:br,overflow:Lr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ri(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,pi=n,di=null,!0):!1;default:return!1}}function Tp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wp(n){if(Pt){var e=di;if(e){var t=e;if(!R_(n,e)){if(Tp(n))throw Error(ae(418));e=gs(t.nextSibling);var i=pi;e&&R_(n,e)?vy(i,t):(n.flags=n.flags&-4097|2,Pt=!1,pi=n)}}else{if(Tp(n))throw Error(ae(418));n.flags=n.flags&-4097|2,Pt=!1,pi=n}}}function P_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pi=n}function ec(n){if(n!==pi)return!1;if(!Pt)return P_(n),Pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!yp(n.type,n.memoizedProps)),e&&(e=di)){if(Tp(n))throw xy(),Error(ae(418));for(;e;)vy(n,e),e=gs(e.nextSibling)}if(P_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ae(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){di=gs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}di=null}}else di=pi?gs(n.stateNode.nextSibling):null;return!0}function xy(){for(var n=di;n;)n=gs(n.nextSibling)}function Va(){di=pi=null,Pt=!1}function Xm(n){Wi===null?Wi=[n]:Wi.push(n)}var xT=Wr.ReactCurrentBatchConfig;function Vi(n,e){if(n&&n.defaultProps){e=Ft({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var wf=Us(null),Af=null,_a=null,jm=null;function Ym(){jm=_a=Af=null}function qm(n){var e=wf.current;At(wf),n._currentValue=e}function Ap(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ra(n,e){Af=n,jm=_a=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Yn=!0),n.firstContext=null)}function Ui(n){var e=n._currentValue;if(jm!==n)if(n={context:n,memoizedValue:e,next:null},_a===null){if(Af===null)throw Error(ae(308));_a=n,Af.dependencies={lanes:0,firstContext:n}}else _a=_a.next=n;return e}var io=null;function $m(n){io===null?io=[n]:io.push(n)}function yy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,$m(e)):(t.next=r.next,r.next=t),e.interleaved=t,kr(n,i)}function kr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ts=!1;function Km(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ur(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function _s(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,kr(n,t)}return r=i.interleaved,r===null?(e.next=e,$m(i)):(e.next=r.next,r.next=e),i.interleaved=e,kr(n,t)}function qc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Im(n,t)}}function b_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Cf(n,e,t,i){var r=n.updateQueue;ts=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(f=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Ft({},d,f);break e;case 2:ts=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Eo|=o,n.lanes=o,n.memoizedState=d}}function L_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var My=new yx.Component().refs;function Cp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ft({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ld={isMounted:function(n){return(n=n._reactInternals)?Do(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Bn(),r=xs(n),s=Ur(i,r);s.payload=e,t!=null&&(s.callback=t),e=_s(n,s,r),e!==null&&($i(e,n,r,i),qc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Bn(),r=xs(n),s=Ur(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=_s(n,s,r),e!==null&&($i(e,n,r,i),qc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Bn(),i=xs(n),r=Ur(t,i);r.tag=2,e!=null&&(r.callback=e),e=_s(n,r,i),e!==null&&($i(e,n,i,t),qc(e,n,i))}};function D_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!du(t,i)||!du(r,s):!0}function Ey(n,e,t){var i=!1,r=Cs,s=e.contextType;return typeof s=="object"&&s!==null?s=Ui(s):(r=$n(e)?yo:Rn.current,i=e.contextTypes,s=(i=i!=null)?Ha(n,r):Cs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ld,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function N_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ld.enqueueReplaceState(e,e.state,null)}function Rp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=My,Km(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ui(s):(s=$n(e)?yo:Rn.current,r.context=Ha(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ld.enqueueReplaceState(r,r.state,null),Cf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ml(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ae(309));var i=t.stateNode}if(!i)throw Error(ae(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===My&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ae(284));if(!t._owner)throw Error(ae(290,n))}return n}function tc(n,e){throw n=Object.prototype.toString.call(e),Error(ae(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function U_(n){var e=n._init;return e(n._payload)}function Ty(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=ys(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,S){return v===null||v.tag!==6?(v=Jd(x,h.mode,S),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,S){var C=x.type;return C===ua?c(h,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===es&&U_(C)===v.type)?(S=r(v,x.props),S.ref=ml(h,v,x),S.return=h,S):(S=ef(x.type,x.key,x.props,null,h.mode,S),S.ref=ml(h,v,x),S.return=h,S)}function u(h,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=eh(x,h.mode,S),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,S,C){return v===null||v.tag!==7?(v=co(x,h.mode,S,C),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Jd(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wu:return x=ef(v.type,v.key,v.props,null,h.mode,x),x.ref=ml(h,null,v),x.return=h,x;case la:return v=eh(v,h.mode,x),v.return=h,v;case es:var S=v._init;return d(h,S(v._payload),x)}if(Cl(v)||cl(v))return v=co(v,h.mode,x,null),v.return=h,v;tc(h,v)}return null}function f(h,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(h,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wu:return x.key===C?l(h,v,x,S):null;case la:return x.key===C?u(h,v,x,S):null;case es:return C=x._init,f(h,v,C(x._payload),S)}if(Cl(x)||cl(x))return C!==null?null:c(h,v,x,S,null);tc(h,x)}return null}function p(h,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(v,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Wu:return h=h.get(S.key===null?x:S.key)||null,l(v,h,S,C);case la:return h=h.get(S.key===null?x:S.key)||null,u(v,h,S,C);case es:var T=S._init;return p(h,v,x,T(S._payload),C)}if(Cl(S)||cl(S))return h=h.get(x)||null,c(v,h,S,C,null);tc(v,S)}return null}function _(h,v,x,S){for(var C=null,T=null,E=v,P=v=0,M=null;E!==null&&P<x.length;P++){E.index>P?(M=E,E=null):M=E.sibling;var y=f(h,E,x[P],S);if(y===null){E===null&&(E=M);break}n&&E&&y.alternate===null&&e(h,E),v=s(y,v,P),T===null?C=y:T.sibling=y,T=y,E=M}if(P===x.length)return t(h,E),Pt&&Ys(h,P),C;if(E===null){for(;P<x.length;P++)E=d(h,x[P],S),E!==null&&(v=s(E,v,P),T===null?C=E:T.sibling=E,T=E);return Pt&&Ys(h,P),C}for(E=i(h,E);P<x.length;P++)M=p(E,h,P,x[P],S),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?P:M.key),v=s(M,v,P),T===null?C=M:T.sibling=M,T=M);return n&&E.forEach(function(N){return e(h,N)}),Pt&&Ys(h,P),C}function g(h,v,x,S){var C=cl(x);if(typeof C!="function")throw Error(ae(150));if(x=C.call(x),x==null)throw Error(ae(151));for(var T=C=null,E=v,P=v=0,M=null,y=x.next();E!==null&&!y.done;P++,y=x.next()){E.index>P?(M=E,E=null):M=E.sibling;var N=f(h,E,y.value,S);if(N===null){E===null&&(E=M);break}n&&E&&N.alternate===null&&e(h,E),v=s(N,v,P),T===null?C=N:T.sibling=N,T=N,E=M}if(y.done)return t(h,E),Pt&&Ys(h,P),C;if(E===null){for(;!y.done;P++,y=x.next())y=d(h,y.value,S),y!==null&&(v=s(y,v,P),T===null?C=y:T.sibling=y,T=y);return Pt&&Ys(h,P),C}for(E=i(h,E);!y.done;P++,y=x.next())y=p(E,h,P,y.value,S),y!==null&&(n&&y.alternate!==null&&E.delete(y.key===null?P:y.key),v=s(y,v,P),T===null?C=y:T.sibling=y,T=y);return n&&E.forEach(function(U){return e(h,U)}),Pt&&Ys(h,P),C}function m(h,v,x,S){if(typeof x=="object"&&x!==null&&x.type===ua&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Wu:e:{for(var C=x.key,T=v;T!==null;){if(T.key===C){if(C=x.type,C===ua){if(T.tag===7){t(h,T.sibling),v=r(T,x.props.children),v.return=h,h=v;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===es&&U_(C)===T.type){t(h,T.sibling),v=r(T,x.props),v.ref=ml(h,T,x),v.return=h,h=v;break e}t(h,T);break}else e(h,T);T=T.sibling}x.type===ua?(v=co(x.props.children,h.mode,S,x.key),v.return=h,h=v):(S=ef(x.type,x.key,x.props,null,h.mode,S),S.ref=ml(h,v,x),S.return=h,h=S)}return o(h);case la:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=eh(x,h.mode,S),v.return=h,h=v}return o(h);case es:return T=x._init,m(h,v,T(x._payload),S)}if(Cl(x))return _(h,v,x,S);if(cl(x))return g(h,v,x,S);tc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=Jd(x,h.mode,S),v.return=h,h=v),o(h)):t(h,v)}return m}var Ga=Ty(!0),wy=Ty(!1),Ou={},hr=Us(Ou),gu=Us(Ou),_u=Us(Ou);function ro(n){if(n===Ou)throw Error(ae(174));return n}function Zm(n,e){switch(Mt(_u,e),Mt(gu,n),Mt(hr,Ou),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:op(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=op(e,n)}At(hr),Mt(hr,e)}function Wa(){At(hr),At(gu),At(_u)}function Ay(n){ro(_u.current);var e=ro(hr.current),t=op(e,n.type);e!==t&&(Mt(gu,n),Mt(hr,t))}function Qm(n){gu.current===n&&(At(hr),At(gu))}var Nt=Us(0);function Rf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yd=[];function Jm(){for(var n=0;n<Yd.length;n++)Yd[n]._workInProgressVersionPrimary=null;Yd.length=0}var $c=Wr.ReactCurrentDispatcher,qd=Wr.ReactCurrentBatchConfig,Mo=0,Ot=null,Kt=null,an=null,Pf=!1,Gl=!1,vu=0,yT=0;function vn(){throw Error(ae(321))}function eg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ki(n[t],e[t]))return!1;return!0}function tg(n,e,t,i,r,s){if(Mo=s,Ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$c.current=n===null||n.memoizedState===null?TT:wT,n=t(i,r),Gl){s=0;do{if(Gl=!1,vu=0,25<=s)throw Error(ae(301));s+=1,an=Kt=null,e.updateQueue=null,$c.current=AT,n=t(i,r)}while(Gl)}if($c.current=bf,e=Kt!==null&&Kt.next!==null,Mo=0,an=Kt=Ot=null,Pf=!1,e)throw Error(ae(300));return n}function ng(){var n=vu!==0;return vu=0,n}function Ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Ot.memoizedState=an=n:an=an.next=n,an}function Ii(){if(Kt===null){var n=Ot.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var e=an===null?Ot.memoizedState:an.next;if(e!==null)an=e,Kt=n;else{if(n===null)throw Error(ae(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},an===null?Ot.memoizedState=an=n:an=an.next=n}return an}function xu(n,e){return typeof e=="function"?e(n):e}function $d(n){var e=Ii(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=Kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Mo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ot.lanes|=c,Eo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Ki(i,e.memoizedState)||(Yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ot.lanes|=s,Eo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Kd(n){var e=Ii(),t=e.queue;if(t===null)throw Error(ae(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Ki(s,e.memoizedState)||(Yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Cy(){}function Ry(n,e){var t=Ot,i=Ii(),r=e(),s=!Ki(i.memoizedState,r);if(s&&(i.memoizedState=r,Yn=!0),i=i.queue,ig(Ly.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||an!==null&&an.memoizedState.tag&1){if(t.flags|=2048,yu(9,by.bind(null,t,i,r,e),void 0,null),un===null)throw Error(ae(349));Mo&30||Py(t,e,r)}return r}function Py(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ot.updateQueue,e===null?(e={lastEffect:null,stores:null},Ot.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function by(n,e,t,i){e.value=t,e.getSnapshot=i,Dy(e)&&Ny(n)}function Ly(n,e,t){return t(function(){Dy(e)&&Ny(n)})}function Dy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ki(n,t)}catch{return!0}}function Ny(n){var e=kr(n,1);e!==null&&$i(e,n,1,-1)}function I_(n){var e=Ji();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xu,lastRenderedState:n},e.queue=n,n=n.dispatch=ET.bind(null,Ot,n),[e.memoizedState,n]}function yu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ot.updateQueue,e===null?(e={lastEffect:null,stores:null},Ot.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Uy(){return Ii().memoizedState}function Kc(n,e,t,i){var r=Ji();Ot.flags|=n,r.memoizedState=yu(1|e,t,void 0,i===void 0?null:i)}function ud(n,e,t,i){var r=Ii();i=i===void 0?null:i;var s=void 0;if(Kt!==null){var o=Kt.memoizedState;if(s=o.destroy,i!==null&&eg(i,o.deps)){r.memoizedState=yu(e,t,s,i);return}}Ot.flags|=n,r.memoizedState=yu(1|e,t,s,i)}function O_(n,e){return Kc(8390656,8,n,e)}function ig(n,e){return ud(2048,8,n,e)}function Iy(n,e){return ud(4,2,n,e)}function Oy(n,e){return ud(4,4,n,e)}function Fy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function ky(n,e,t){return t=t!=null?t.concat([n]):null,ud(4,4,Fy.bind(null,e,n),t)}function rg(){}function zy(n,e){var t=Ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&eg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function By(n,e){var t=Ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&eg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Hy(n,e,t){return Mo&21?(Ki(t,e)||(t=Wx(),Ot.lanes|=t,Eo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=t)}function ST(n,e){var t=pt;pt=t!==0&&4>t?t:4,n(!0);var i=qd.transition;qd.transition={};try{n(!1),e()}finally{pt=t,qd.transition=i}}function Vy(){return Ii().memoizedState}function MT(n,e,t){var i=xs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Gy(n))Wy(e,t);else if(t=yy(n,e,t,i),t!==null){var r=Bn();$i(t,n,i,r),Xy(t,e,i)}}function ET(n,e,t){var i=xs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gy(n))Wy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Ki(a,o)){var l=e.interleaved;l===null?(r.next=r,$m(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=yy(n,e,r,i),t!==null&&(r=Bn(),$i(t,n,i,r),Xy(t,e,i))}}function Gy(n){var e=n.alternate;return n===Ot||e!==null&&e===Ot}function Wy(n,e){Gl=Pf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Xy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Im(n,t)}}var bf={readContext:Ui,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},TT={readContext:Ui,useCallback:function(n,e){return Ji().memoizedState=[n,e===void 0?null:e],n},useContext:Ui,useEffect:O_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Kc(4194308,4,Fy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Kc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Kc(4,2,n,e)},useMemo:function(n,e){var t=Ji();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Ji();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=MT.bind(null,Ot,n),[i.memoizedState,n]},useRef:function(n){var e=Ji();return n={current:n},e.memoizedState=n},useState:I_,useDebugValue:rg,useDeferredValue:function(n){return Ji().memoizedState=n},useTransition:function(){var n=I_(!1),e=n[0];return n=ST.bind(null,n[1]),Ji().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ot,r=Ji();if(Pt){if(t===void 0)throw Error(ae(407));t=t()}else{if(t=e(),un===null)throw Error(ae(349));Mo&30||Py(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,O_(Ly.bind(null,i,s,n),[n]),i.flags|=2048,yu(9,by.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Ji(),e=un.identifierPrefix;if(Pt){var t=Lr,i=br;t=(i&~(1<<32-qi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=vu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=yT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},wT={readContext:Ui,useCallback:zy,useContext:Ui,useEffect:ig,useImperativeHandle:ky,useInsertionEffect:Iy,useLayoutEffect:Oy,useMemo:By,useReducer:$d,useRef:Uy,useState:function(){return $d(xu)},useDebugValue:rg,useDeferredValue:function(n){var e=Ii();return Hy(e,Kt.memoizedState,n)},useTransition:function(){var n=$d(xu)[0],e=Ii().memoizedState;return[n,e]},useMutableSource:Cy,useSyncExternalStore:Ry,useId:Vy,unstable_isNewReconciler:!1},AT={readContext:Ui,useCallback:zy,useContext:Ui,useEffect:ig,useImperativeHandle:ky,useInsertionEffect:Iy,useLayoutEffect:Oy,useMemo:By,useReducer:Kd,useRef:Uy,useState:function(){return Kd(xu)},useDebugValue:rg,useDeferredValue:function(n){var e=Ii();return Kt===null?e.memoizedState=n:Hy(e,Kt.memoizedState,n)},useTransition:function(){var n=Kd(xu)[0],e=Ii().memoizedState;return[n,e]},useMutableSource:Cy,useSyncExternalStore:Ry,useId:Vy,unstable_isNewReconciler:!1};function Xa(n,e){try{var t="",i=e;do t+=eE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Zd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Pp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var CT=typeof WeakMap=="function"?WeakMap:Map;function jy(n,e,t){t=Ur(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Df||(Df=!0,zp=i),Pp(n,e)},t}function Yy(n,e,t){t=Ur(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Pp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Pp(n,e),typeof i!="function"&&(vs===null?vs=new Set([this]):vs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function F_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new CT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=HT.bind(null,n,e,t),e.then(n,n))}function k_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function z_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ur(-1,1),e.tag=2,_s(t,e,1))),t.lanes|=1),n)}var RT=Wr.ReactCurrentOwner,Yn=!1;function Un(n,e,t,i){e.child=n===null?wy(e,null,t,i):Ga(e,n.child,t,i)}function B_(n,e,t,i,r){t=t.render;var s=e.ref;return Ra(e,r),i=tg(n,e,t,i,s,r),t=ng(),n!==null&&!Yn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,zr(n,e,r)):(Pt&&t&&Gm(e),e.flags|=1,Un(n,e,i,r),e.child)}function H_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!dg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,qy(n,e,s,i,r)):(n=ef(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:du,t(o,i)&&n.ref===e.ref)return zr(n,e,r)}return e.flags|=1,n=ys(s,i),n.ref=e.ref,n.return=e,e.child=n}function qy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(du(s,i)&&n.ref===e.ref)if(Yn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Yn=!0);else return e.lanes=n.lanes,zr(n,e,r)}return bp(n,e,t,i,r)}function $y(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(xa,ai),ai|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Mt(xa,ai),ai|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Mt(xa,ai),ai|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Mt(xa,ai),ai|=i;return Un(n,e,r,t),e.child}function Ky(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function bp(n,e,t,i,r){var s=$n(t)?yo:Rn.current;return s=Ha(e,s),Ra(e,r),t=tg(n,e,t,i,s,r),i=ng(),n!==null&&!Yn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,zr(n,e,r)):(Pt&&i&&Gm(e),e.flags|=1,Un(n,e,t,r),e.child)}function V_(n,e,t,i,r){if($n(t)){var s=!0;Mf(e)}else s=!1;if(Ra(e,r),e.stateNode===null)Zc(n,e),Ey(e,t,i),Rp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ui(u):(u=$n(t)?yo:Rn.current,u=Ha(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&N_(e,o,i,u),ts=!1;var f=e.memoizedState;o.state=f,Cf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||qn.current||ts?(typeof c=="function"&&(Cp(e,t,c,i),l=e.memoizedState),(a=ts||D_(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Sy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Vi(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Ui(l):(l=$n(t)?yo:Rn.current,l=Ha(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&N_(e,o,i,l),ts=!1,f=e.memoizedState,o.state=f,Cf(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||qn.current||ts?(typeof p=="function"&&(Cp(e,t,p,i),_=e.memoizedState),(u=ts||D_(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Lp(n,e,t,i,s,r)}function Lp(n,e,t,i,r,s){Ky(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&C_(e,t,!1),zr(n,e,s);i=e.stateNode,RT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ga(e,n.child,null,s),e.child=Ga(e,null,a,s)):Un(n,e,a,s),e.memoizedState=i.state,r&&C_(e,t,!0),e.child}function Zy(n){var e=n.stateNode;e.pendingContext?A_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&A_(n,e.context,!1),Zm(n,e.containerInfo)}function G_(n,e,t,i,r){return Va(),Xm(r),e.flags|=256,Un(n,e,t,i),e.child}var Dp={dehydrated:null,treeContext:null,retryLane:0};function Np(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qy(n,e,t){var i=e.pendingProps,r=Nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Mt(Nt,r&1),n===null)return wp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dd(o,i,0,null),n=co(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Np(t),e.memoizedState=Dp,n):sg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return PT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ys(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ys(a,s):(s=co(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Np(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Dp,i}return s=n.child,n=s.sibling,i=ys(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function sg(n,e){return e=dd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function nc(n,e,t,i){return i!==null&&Xm(i),Ga(e,n.child,null,t),n=sg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function PT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Zd(Error(ae(422))),nc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=dd({mode:"visible",children:i.children},r,0,null),s=co(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ga(e,n.child,null,o),e.child.memoizedState=Np(o),e.memoizedState=Dp,s);if(!(e.mode&1))return nc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Zd(s,i,void 0),nc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Yn||a){if(i=un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,kr(n,r),$i(i,n,r,-1))}return fg(),i=Zd(Error(ae(421))),nc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=VT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,di=gs(r.nextSibling),pi=e,Pt=!0,Wi=null,n!==null&&(Ti[wi++]=br,Ti[wi++]=Lr,Ti[wi++]=So,br=n.id,Lr=n.overflow,So=e),e=sg(e,i.children),e.flags|=4096,e)}function W_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ap(n.return,e,t)}function Qd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Jy(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Un(n,e,i.children,t),i=Nt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&W_(n,t,e);else if(n.tag===19)W_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Mt(Nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Rf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Qd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Rf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Qd(e,!0,t,null,s);break;case"together":Qd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function zr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Eo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ae(153));if(e.child!==null){for(n=e.child,t=ys(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ys(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function bT(n,e,t){switch(e.tag){case 3:Zy(e),Va();break;case 5:Ay(e);break;case 1:$n(e.type)&&Mf(e);break;case 4:Zm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(wf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Nt,Nt.current&1),e.flags|=128,null):t&e.child.childLanes?Qy(n,e,t):(Mt(Nt,Nt.current&1),n=zr(n,e,t),n!==null?n.sibling:null);Mt(Nt,Nt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Jy(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Nt,Nt.current),i)break;return null;case 22:case 23:return e.lanes=0,$y(n,e,t)}return zr(n,e,t)}var eS,Up,tS,nS;eS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Up=function(){};tS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ro(hr.current);var s=null;switch(t){case"input":r=np(n,r),i=np(n,i),s=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),s=[];break;case"textarea":r=sp(n,r),i=sp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=yf)}ap(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(su.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(su.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Et("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};nS=function(n,e,t,i){t!==i&&(e.flags|=4)};function gl(n,e){if(!Pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function xn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function LT(n,e,t){var i=e.pendingProps;switch(Wm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(e),null;case 1:return $n(e.type)&&Sf(),xn(e),null;case 3:return i=e.stateNode,Wa(),At(qn),At(Rn),Jm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ec(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wi!==null&&(Vp(Wi),Wi=null))),Up(n,e),xn(e),null;case 5:Qm(e);var r=ro(_u.current);if(t=e.type,n!==null&&e.stateNode!=null)tS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return xn(e),null}if(n=ro(hr.current),ec(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[rr]=e,i[mu]=s,n=(e.mode&1)!==0,t){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<Pl.length;r++)Et(Pl[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Jg(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":t_(i,s),Et("invalid",i)}ap(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ju(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ju(i.textContent,a,n),r=["children",""+a]):su.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Et("scroll",i)}switch(t){case"input":Xu(i),e_(i,s,!0);break;case"textarea":Xu(i),n_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Px(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[rr]=e,n[mu]=i,eS(n,e,!1,!1),e.stateNode=n;e:{switch(o=lp(t,i),t){case"dialog":Et("cancel",n),Et("close",n),r=i;break;case"iframe":case"object":case"embed":Et("load",n),r=i;break;case"video":case"audio":for(r=0;r<Pl.length;r++)Et(Pl[r],n);r=i;break;case"source":Et("error",n),r=i;break;case"img":case"image":case"link":Et("error",n),Et("load",n),r=i;break;case"details":Et("toggle",n),r=i;break;case"input":Jg(n,i),r=np(n,i),Et("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),Et("invalid",n);break;case"textarea":t_(n,i),r=sp(n,i),Et("invalid",n);break;default:r=i}ap(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ou(n,l):typeof l=="number"&&ou(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(su.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",n):l!=null&&Pm(n,s,l,o))}switch(t){case"input":Xu(n),e_(n,i,!1);break;case"textarea":Xu(n),n_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+As(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ta(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ta(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=yf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xn(e),null;case 6:if(n&&e.stateNode!=null)nS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(t=ro(_u.current),ro(hr.current),ec(e)){if(i=e.stateNode,t=e.memoizedProps,i[rr]=e,(s=i.nodeValue!==t)&&(n=pi,n!==null))switch(n.tag){case 3:Ju(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ju(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[rr]=e,e.stateNode=i}return xn(e),null;case 13:if(At(Nt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Pt&&di!==null&&e.mode&1&&!(e.flags&128))xy(),Va(),e.flags|=98560,s=!1;else if(s=ec(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[rr]=e}else Va(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xn(e),s=!1}else Wi!==null&&(Vp(Wi),Wi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Nt.current&1?Qt===0&&(Qt=3):fg())),e.updateQueue!==null&&(e.flags|=4),xn(e),null);case 4:return Wa(),Up(n,e),n===null&&hu(e.stateNode.containerInfo),xn(e),null;case 10:return qm(e.type._context),xn(e),null;case 17:return $n(e.type)&&Sf(),xn(e),null;case 19:if(At(Nt),s=e.memoizedState,s===null)return xn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)gl(s,!1);else{if(Qt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Rf(n),o!==null){for(e.flags|=128,gl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Mt(Nt,Nt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Vt()>ja&&(e.flags|=128,i=!0,gl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Rf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),gl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Pt)return xn(e),null}else 2*Vt()-s.renderingStartTime>ja&&t!==1073741824&&(e.flags|=128,i=!0,gl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Vt(),e.sibling=null,t=Nt.current,Mt(Nt,i?t&1|2:t&1),e):(xn(e),null);case 22:case 23:return cg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ai&1073741824&&(xn(e),e.subtreeFlags&6&&(e.flags|=8192)):xn(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function DT(n,e){switch(Wm(e),e.tag){case 1:return $n(e.type)&&Sf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Wa(),At(qn),At(Rn),Jm(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Qm(e),null;case 13:if(At(Nt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Va()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return At(Nt),null;case 4:return Wa(),null;case 10:return qm(e.type._context),null;case 22:case 23:return cg(),null;case 24:return null;default:return null}}var ic=!1,Tn=!1,NT=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function va(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){kt(n,e,i)}else t.current=null}function Ip(n,e,t){try{t()}catch(i){kt(n,e,i)}}var X_=!1;function UT(n,e){if(vp=_f,n=oy(),Vm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(xp={focusedElem:n,selectionRange:t},_f=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Vi(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){kt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return _=X_,X_=!1,_}function Wl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ip(e,t,s)}r=r.next}while(r!==i)}}function cd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Op(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function iS(n){var e=n.alternate;e!==null&&(n.alternate=null,iS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[rr],delete e[mu],delete e[Mp],delete e[gT],delete e[_T])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rS(n){return n.tag===5||n.tag===3||n.tag===4}function j_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=yf));else if(i!==4&&(n=n.child,n!==null))for(Fp(n,e,t),n=n.sibling;n!==null;)Fp(n,e,t),n=n.sibling}function kp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(kp(n,e,t),n=n.sibling;n!==null;)kp(n,e,t),n=n.sibling}var fn=null,Gi=!1;function jr(n,e,t){for(t=t.child;t!==null;)sS(n,e,t),t=t.sibling}function sS(n,e,t){if(dr&&typeof dr.onCommitFiberUnmount=="function")try{dr.onCommitFiberUnmount(nd,t)}catch{}switch(t.tag){case 5:Tn||va(t,e);case 6:var i=fn,r=Gi;fn=null,jr(n,e,t),fn=i,Gi=r,fn!==null&&(Gi?(n=fn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):fn.removeChild(t.stateNode));break;case 18:fn!==null&&(Gi?(n=fn,t=t.stateNode,n.nodeType===8?Xd(n.parentNode,t):n.nodeType===1&&Xd(n,t),cu(n)):Xd(fn,t.stateNode));break;case 4:i=fn,r=Gi,fn=t.stateNode.containerInfo,Gi=!0,jr(n,e,t),fn=i,Gi=r;break;case 0:case 11:case 14:case 15:if(!Tn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ip(t,e,o),r=r.next}while(r!==i)}jr(n,e,t);break;case 1:if(!Tn&&(va(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){kt(t,e,a)}jr(n,e,t);break;case 21:jr(n,e,t);break;case 22:t.mode&1?(Tn=(i=Tn)||t.memoizedState!==null,jr(n,e,t),Tn=i):jr(n,e,t);break;default:jr(n,e,t)}}function Y_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new NT),e.forEach(function(i){var r=GT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Fi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fn=a.stateNode,Gi=!1;break e;case 3:fn=a.stateNode.containerInfo,Gi=!0;break e;case 4:fn=a.stateNode.containerInfo,Gi=!0;break e}a=a.return}if(fn===null)throw Error(ae(160));sS(s,o,r),fn=null,Gi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){kt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)oS(e,n),e=e.sibling}function oS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(e,n),Qi(n),i&4){try{Wl(3,n,n.return),cd(3,n)}catch(g){kt(n,n.return,g)}try{Wl(5,n,n.return)}catch(g){kt(n,n.return,g)}}break;case 1:Fi(e,n),Qi(n),i&512&&t!==null&&va(t,t.return);break;case 5:if(Fi(e,n),Qi(n),i&512&&t!==null&&va(t,t.return),n.flags&32){var r=n.stateNode;try{ou(r,"")}catch(g){kt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cx(r,s),lp(a,o);var u=lp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Dx(r,d):c==="dangerouslySetInnerHTML"?bx(r,d):c==="children"?ou(r,d):Pm(r,c,d,u)}switch(a){case"input":ip(r,s);break;case"textarea":Rx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ta(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ta(r,!!s.multiple,s.defaultValue,!0):Ta(r,!!s.multiple,s.multiple?[]:"",!1))}r[mu]=s}catch(g){kt(n,n.return,g)}}break;case 6:if(Fi(e,n),Qi(n),i&4){if(n.stateNode===null)throw Error(ae(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){kt(n,n.return,g)}}break;case 3:if(Fi(e,n),Qi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{cu(e.containerInfo)}catch(g){kt(n,n.return,g)}break;case 4:Fi(e,n),Qi(n);break;case 13:Fi(e,n),Qi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lg=Vt())),i&4&&Y_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Tn=(u=Tn)||c,Fi(e,n),Tn=u):Fi(e,n),Qi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(d=Ee=c;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:Wl(4,f,f.return);break;case 1:va(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){kt(i,t,g)}}break;case 5:va(f,f.return);break;case 22:if(f.memoizedState!==null){$_(d);continue}}p!==null?(p.return=f,Ee=p):$_(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lx("display",o))}catch(g){kt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){kt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fi(e,n),Qi(n),i&4&&Y_(n);break;case 21:break;default:Fi(e,n),Qi(n)}}function Qi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(rS(t)){var i=t;break e}t=t.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ou(r,""),i.flags&=-33);var s=j_(n);kp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=j_(n);Fp(n,a,o);break;default:throw Error(ae(161))}}catch(l){kt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function IT(n,e,t){Ee=n,aS(n)}function aS(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ic;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Tn;a=ic;var u=Tn;if(ic=o,(Tn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?K_(r):l!==null?(l.return=o,Ee=l):K_(r);for(;s!==null;)Ee=s,aS(s),s=s.sibling;Ee=r,ic=a,Tn=u}q_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):q_(n)}}function q_(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tn||cd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Tn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Vi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&L_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}L_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&cu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Tn||e.flags&512&&Op(e)}catch(f){kt(e,e.return,f)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function $_(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function K_(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{cd(4,e)}catch(l){kt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){kt(e,r,l)}}var s=e.return;try{Op(e)}catch(l){kt(e,s,l)}break;case 5:var o=e.return;try{Op(e)}catch(l){kt(e,o,l)}}}catch(l){kt(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var OT=Math.ceil,Lf=Wr.ReactCurrentDispatcher,og=Wr.ReactCurrentOwner,Di=Wr.ReactCurrentBatchConfig,ut=0,un=null,qt=null,pn=0,ai=0,xa=Us(0),Qt=0,Su=null,Eo=0,fd=0,ag=0,Xl=null,Xn=null,lg=0,ja=1/0,wr=null,Df=!1,zp=null,vs=null,rc=!1,os=null,Nf=0,jl=0,Bp=null,Qc=-1,Jc=0;function Bn(){return ut&6?Vt():Qc!==-1?Qc:Qc=Vt()}function xs(n){return n.mode&1?ut&2&&pn!==0?pn&-pn:xT.transition!==null?(Jc===0&&(Jc=Wx()),Jc):(n=pt,n!==0||(n=window.event,n=n===void 0?16:Zx(n.type)),n):1}function $i(n,e,t,i){if(50<jl)throw jl=0,Bp=null,Error(ae(185));Nu(n,t,i),(!(ut&2)||n!==un)&&(n===un&&(!(ut&2)&&(fd|=t),Qt===4&&is(n,pn)),Kn(n,i),t===1&&ut===0&&!(e.mode&1)&&(ja=Vt()+500,ad&&Is()))}function Kn(n,e){var t=n.callbackNode;xE(n,e);var i=gf(n,n===un?pn:0);if(i===0)t!==null&&s_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&s_(t),e===1)n.tag===0?vT(Z_.bind(null,n)):gy(Z_.bind(null,n)),pT(function(){!(ut&6)&&Is()}),t=null;else{switch(Xx(i)){case 1:t=Um;break;case 4:t=Vx;break;case 16:t=mf;break;case 536870912:t=Gx;break;default:t=mf}t=mS(t,lS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function lS(n,e){if(Qc=-1,Jc=0,ut&6)throw Error(ae(327));var t=n.callbackNode;if(Pa()&&n.callbackNode!==t)return null;var i=gf(n,n===un?pn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Uf(n,i);else{e=i;var r=ut;ut|=2;var s=cS();(un!==n||pn!==e)&&(wr=null,ja=Vt()+500,uo(n,e));do try{zT();break}catch(a){uS(n,a)}while(!0);Ym(),Lf.current=s,ut=r,qt!==null?e=0:(un=null,pn=0,e=Qt)}if(e!==0){if(e===2&&(r=hp(n),r!==0&&(i=r,e=Hp(n,r))),e===1)throw t=Su,uo(n,0),is(n,i),Kn(n,Vt()),t;if(e===6)is(n,i);else{if(r=n.current.alternate,!(i&30)&&!FT(r)&&(e=Uf(n,i),e===2&&(s=hp(n),s!==0&&(i=s,e=Hp(n,s))),e===1))throw t=Su,uo(n,0),is(n,i),Kn(n,Vt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:qs(n,Xn,wr);break;case 3:if(is(n,i),(i&130023424)===i&&(e=lg+500-Vt(),10<e)){if(gf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Bn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Sp(qs.bind(null,n,Xn,wr),e);break}qs(n,Xn,wr);break;case 4:if(is(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-qi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*OT(i/1960))-i,10<i){n.timeoutHandle=Sp(qs.bind(null,n,Xn,wr),i);break}qs(n,Xn,wr);break;case 5:qs(n,Xn,wr);break;default:throw Error(ae(329))}}}return Kn(n,Vt()),n.callbackNode===t?lS.bind(null,n):null}function Hp(n,e){var t=Xl;return n.current.memoizedState.isDehydrated&&(uo(n,e).flags|=256),n=Uf(n,e),n!==2&&(e=Xn,Xn=t,e!==null&&Vp(e)),n}function Vp(n){Xn===null?Xn=n:Xn.push.apply(Xn,n)}function FT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ki(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function is(n,e){for(e&=~ag,e&=~fd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-qi(e),i=1<<t;n[t]=-1,e&=~i}}function Z_(n){if(ut&6)throw Error(ae(327));Pa();var e=gf(n,0);if(!(e&1))return Kn(n,Vt()),null;var t=Uf(n,e);if(n.tag!==0&&t===2){var i=hp(n);i!==0&&(e=i,t=Hp(n,i))}if(t===1)throw t=Su,uo(n,0),is(n,e),Kn(n,Vt()),t;if(t===6)throw Error(ae(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,qs(n,Xn,wr),Kn(n,Vt()),null}function ug(n,e){var t=ut;ut|=1;try{return n(e)}finally{ut=t,ut===0&&(ja=Vt()+500,ad&&Is())}}function To(n){os!==null&&os.tag===0&&!(ut&6)&&Pa();var e=ut;ut|=1;var t=Di.transition,i=pt;try{if(Di.transition=null,pt=1,n)return n()}finally{pt=i,Di.transition=t,ut=e,!(ut&6)&&Is()}}function cg(){ai=xa.current,At(xa)}function uo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,hT(t)),qt!==null)for(t=qt.return;t!==null;){var i=t;switch(Wm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sf();break;case 3:Wa(),At(qn),At(Rn),Jm();break;case 5:Qm(i);break;case 4:Wa();break;case 13:At(Nt);break;case 19:At(Nt);break;case 10:qm(i.type._context);break;case 22:case 23:cg()}t=t.return}if(un=n,qt=n=ys(n.current,null),pn=ai=e,Qt=0,Su=null,ag=fd=Eo=0,Xn=Xl=null,io!==null){for(e=0;e<io.length;e++)if(t=io[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}io=null}return n}function uS(n,e){do{var t=qt;try{if(Ym(),$c.current=bf,Pf){for(var i=Ot.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pf=!1}if(Mo=0,an=Kt=Ot=null,Gl=!1,vu=0,og.current=null,t===null||t.return===null){Qt=1,Su=e,qt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=pn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=k_(o);if(p!==null){p.flags&=-257,z_(p,o,a,s,e),p.mode&1&&F_(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){F_(s,u,e),fg();break e}l=Error(ae(426))}}else if(Pt&&a.mode&1){var m=k_(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),z_(m,o,a,s,e),Xm(Xa(l,a));break e}}s=l=Xa(l,a),Qt!==4&&(Qt=2),Xl===null?Xl=[s]:Xl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=jy(s,l,e);b_(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vs===null||!vs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Yy(s,a,e);b_(s,S);break e}}s=s.return}while(s!==null)}dS(t)}catch(C){e=C,qt===t&&t!==null&&(qt=t=t.return);continue}break}while(!0)}function cS(){var n=Lf.current;return Lf.current=bf,n===null?bf:n}function fg(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),un===null||!(Eo&268435455)&&!(fd&268435455)||is(un,pn)}function Uf(n,e){var t=ut;ut|=2;var i=cS();(un!==n||pn!==e)&&(wr=null,uo(n,e));do try{kT();break}catch(r){uS(n,r)}while(!0);if(Ym(),ut=t,Lf.current=i,qt!==null)throw Error(ae(261));return un=null,pn=0,Qt}function kT(){for(;qt!==null;)fS(qt)}function zT(){for(;qt!==null&&!cE();)fS(qt)}function fS(n){var e=pS(n.alternate,n,ai);n.memoizedProps=n.pendingProps,e===null?dS(n):qt=e,og.current=null}function dS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=DT(t,e),t!==null){t.flags&=32767,qt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,qt=null;return}}else if(t=LT(t,e,ai),t!==null){qt=t;return}if(e=e.sibling,e!==null){qt=e;return}qt=e=n}while(e!==null);Qt===0&&(Qt=5)}function qs(n,e,t){var i=pt,r=Di.transition;try{Di.transition=null,pt=1,BT(n,e,t,i)}finally{Di.transition=r,pt=i}return null}function BT(n,e,t,i){do Pa();while(os!==null);if(ut&6)throw Error(ae(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ae(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(yE(n,s),n===un&&(qt=un=null,pn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||rc||(rc=!0,mS(mf,function(){return Pa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Di.transition,Di.transition=null;var o=pt;pt=1;var a=ut;ut|=4,og.current=null,UT(n,t),oS(t,n),oT(xp),_f=!!vp,xp=vp=null,n.current=t,IT(t),fE(),ut=a,pt=o,Di.transition=s}else n.current=t;if(rc&&(rc=!1,os=n,Nf=r),s=n.pendingLanes,s===0&&(vs=null),pE(t.stateNode),Kn(n,Vt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Df)throw Df=!1,n=zp,zp=null,n;return Nf&1&&n.tag!==0&&Pa(),s=n.pendingLanes,s&1?n===Bp?jl++:(jl=0,Bp=n):jl=0,Is(),null}function Pa(){if(os!==null){var n=Xx(Nf),e=Di.transition,t=pt;try{if(Di.transition=null,pt=16>n?16:n,os===null)var i=!1;else{if(n=os,os=null,Nf=0,ut&6)throw Error(ae(331));var r=ut;for(ut|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Wl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ee=d;else for(;Ee!==null;){c=Ee;var f=c.sibling,p=c.return;if(iS(c),c===u){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var v=n.current;for(Ee=v;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cd(9,a)}}catch(C){kt(a,a.return,C)}if(a===o){Ee=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ee=S;break e}Ee=a.return}}if(ut=r,Is(),dr&&typeof dr.onPostCommitFiberRoot=="function")try{dr.onPostCommitFiberRoot(nd,n)}catch{}i=!0}return i}finally{pt=t,Di.transition=e}}return!1}function Q_(n,e,t){e=Xa(t,e),e=jy(n,e,1),n=_s(n,e,1),e=Bn(),n!==null&&(Nu(n,1,e),Kn(n,e))}function kt(n,e,t){if(n.tag===3)Q_(n,n,t);else for(;e!==null;){if(e.tag===3){Q_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vs===null||!vs.has(i))){n=Xa(t,n),n=Yy(e,n,1),e=_s(e,n,1),n=Bn(),e!==null&&(Nu(e,1,n),Kn(e,n));break}}e=e.return}}function HT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Bn(),n.pingedLanes|=n.suspendedLanes&t,un===n&&(pn&t)===t&&(Qt===4||Qt===3&&(pn&130023424)===pn&&500>Vt()-lg?uo(n,0):ag|=t),Kn(n,e)}function hS(n,e){e===0&&(n.mode&1?(e=qu,qu<<=1,!(qu&130023424)&&(qu=4194304)):e=1);var t=Bn();n=kr(n,e),n!==null&&(Nu(n,e,t),Kn(n,t))}function VT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),hS(n,t)}function GT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),hS(n,t)}var pS;pS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||qn.current)Yn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Yn=!1,bT(n,e,t);Yn=!!(n.flags&131072)}else Yn=!1,Pt&&e.flags&1048576&&_y(e,Tf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zc(n,e),n=e.pendingProps;var r=Ha(e,Rn.current);Ra(e,t),r=tg(null,e,i,n,r,t);var s=ng();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$n(i)?(s=!0,Mf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Km(e),r.updater=ld,e.stateNode=r,r._reactInternals=e,Rp(e,i,n,t),e=Lp(null,e,i,!0,s,t)):(e.tag=0,Pt&&s&&Gm(e),Un(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Zc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=XT(i),n=Vi(i,n),r){case 0:e=bp(null,e,i,n,t);break e;case 1:e=V_(null,e,i,n,t);break e;case 11:e=B_(null,e,i,n,t);break e;case 14:e=H_(null,e,i,Vi(i.type,n),t);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),bp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),V_(n,e,i,r,t);case 3:e:{if(Zy(e),n===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Sy(n,e),Cf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xa(Error(ae(423)),e),e=G_(n,e,i,t,r);break e}else if(i!==r){r=Xa(Error(ae(424)),e),e=G_(n,e,i,t,r);break e}else for(di=gs(e.stateNode.containerInfo.firstChild),pi=e,Pt=!0,Wi=null,t=wy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Va(),i===r){e=zr(n,e,t);break e}Un(n,e,i,t)}e=e.child}return e;case 5:return Ay(e),n===null&&wp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,yp(i,r)?o=null:s!==null&&yp(i,s)&&(e.flags|=32),Ky(n,e),Un(n,e,o,t),e.child;case 6:return n===null&&wp(e),null;case 13:return Qy(n,e,t);case 4:return Zm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ga(e,null,i,t):Un(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),B_(n,e,i,r,t);case 7:return Un(n,e,e.pendingProps,t),e.child;case 8:return Un(n,e,e.pendingProps.children,t),e.child;case 12:return Un(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Mt(wf,i._currentValue),i._currentValue=o,s!==null)if(Ki(s.value,o)){if(s.children===r.children&&!qn.current){e=zr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ur(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ap(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ap(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Un(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ra(e,t),r=Ui(r),i=i(r),e.flags|=1,Un(n,e,i,t),e.child;case 14:return i=e.type,r=Vi(i,e.pendingProps),r=Vi(i.type,r),H_(n,e,i,r,t);case 15:return qy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vi(i,r),Zc(n,e),e.tag=1,$n(i)?(n=!0,Mf(e)):n=!1,Ra(e,t),Ey(e,i,r),Rp(e,i,r,t),Lp(null,e,i,!0,n,t);case 19:return Jy(n,e,t);case 22:return $y(n,e,t)}throw Error(ae(156,e.tag))};function mS(n,e){return Hx(n,e)}function WT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(n,e,t,i){return new WT(n,e,t,i)}function dg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function XT(n){if(typeof n=="function")return dg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Lm)return 11;if(n===Dm)return 14}return 2}function ys(n,e){var t=n.alternate;return t===null?(t=Ri(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ef(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")dg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ua:return co(t.children,r,s,e);case bm:o=8,r|=8;break;case Qh:return n=Ri(12,t,e,r|2),n.elementType=Qh,n.lanes=s,n;case Jh:return n=Ri(13,t,e,r),n.elementType=Jh,n.lanes=s,n;case ep:return n=Ri(19,t,e,r),n.elementType=ep,n.lanes=s,n;case Tx:return dd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Mx:o=10;break e;case Ex:o=9;break e;case Lm:o=11;break e;case Dm:o=14;break e;case es:o=16,i=null;break e}throw Error(ae(130,n==null?n:typeof n,""))}return e=Ri(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function co(n,e,t,i){return n=Ri(7,n,i,e),n.lanes=t,n}function dd(n,e,t,i){return n=Ri(22,n,i,e),n.elementType=Tx,n.lanes=t,n.stateNode={isHidden:!1},n}function Jd(n,e,t){return n=Ri(6,n,null,e),n.lanes=t,n}function eh(n,e,t){return e=Ri(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function jT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ud(0),this.expirationTimes=Ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hg(n,e,t,i,r,s,o,a,l){return n=new jT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ri(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Km(s),n}function YT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:la,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function gS(n){if(!n)return Cs;n=n._reactInternals;e:{if(Do(n)!==n||n.tag!==1)throw Error(ae(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(n.tag===1){var t=n.type;if($n(t))return my(n,t,e)}return e}function _S(n,e,t,i,r,s,o,a,l){return n=hg(t,i,!0,n,r,s,o,a,l),n.context=gS(null),t=n.current,i=Bn(),r=xs(t),s=Ur(i,r),s.callback=e??null,_s(t,s,r),n.current.lanes=r,Nu(n,r,i),Kn(n,i),n}function hd(n,e,t,i){var r=e.current,s=Bn(),o=xs(r);return t=gS(t),e.context===null?e.context=t:e.pendingContext=t,e=Ur(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=_s(r,e,o),n!==null&&($i(n,r,o,s),qc(n,r,o)),o}function If(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function J_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function pg(n,e){J_(n,e),(n=n.alternate)&&J_(n,e)}function qT(){return null}var vS=typeof reportError=="function"?reportError:function(n){console.error(n)};function mg(n){this._internalRoot=n}pd.prototype.render=mg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ae(409));hd(n,e,null,null)};pd.prototype.unmount=mg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;To(function(){hd(null,n,null,null)}),e[Fr]=null}};function pd(n){this._internalRoot=n}pd.prototype.unstable_scheduleHydration=function(n){if(n){var e=qx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ns.length&&e!==0&&e<ns[t].priority;t++);ns.splice(t,0,n),t===0&&Kx(n)}};function gg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function md(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function e0(){}function $T(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=If(o);s.call(u)}}var o=_S(e,i,n,0,null,!1,!1,"",e0);return n._reactRootContainer=o,n[Fr]=o.current,hu(n.nodeType===8?n.parentNode:n),To(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=If(l);a.call(u)}}var l=hg(n,0,!1,null,null,!1,!1,"",e0);return n._reactRootContainer=l,n[Fr]=l.current,hu(n.nodeType===8?n.parentNode:n),To(function(){hd(e,l,t,i)}),l}function gd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=If(o);a.call(l)}}hd(e,o,n,r)}else o=$T(t,e,n,r,i);return If(o)}jx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Rl(e.pendingLanes);t!==0&&(Im(e,t|1),Kn(e,Vt()),!(ut&6)&&(ja=Vt()+500,Is()))}break;case 13:To(function(){var i=kr(n,1);if(i!==null){var r=Bn();$i(i,n,1,r)}}),pg(n,1)}};Om=function(n){if(n.tag===13){var e=kr(n,134217728);if(e!==null){var t=Bn();$i(e,n,134217728,t)}pg(n,134217728)}};Yx=function(n){if(n.tag===13){var e=xs(n),t=kr(n,e);if(t!==null){var i=Bn();$i(t,n,e,i)}pg(n,e)}};qx=function(){return pt};$x=function(n,e){var t=pt;try{return pt=n,e()}finally{pt=t}};cp=function(n,e,t){switch(e){case"input":if(ip(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=od(i);if(!r)throw Error(ae(90));Ax(i),ip(i,r)}}}break;case"textarea":Rx(n,t);break;case"select":e=t.value,e!=null&&Ta(n,!!t.multiple,e,!1)}};Ix=ug;Ox=To;var KT={usingClientEntryPoint:!1,Events:[Iu,ha,od,Nx,Ux,ug]},_l={findFiberByHostInstance:no,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ZT={bundleType:_l.bundleType,version:_l.version,rendererPackageName:_l.rendererPackageName,rendererConfig:_l.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zx(n),n===null?null:n.stateNode},findFiberByHostInstance:_l.findFiberByHostInstance||qT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{nd=sc.inject(ZT),dr=sc}catch{}}xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KT;xi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gg(e))throw Error(ae(200));return YT(n,e,null,t)};xi.createRoot=function(n,e){if(!gg(n))throw Error(ae(299));var t=!1,i="",r=vS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hg(n,1,!1,null,null,t,!1,i,r),n[Fr]=e.current,hu(n.nodeType===8?n.parentNode:n),new mg(e)};xi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ae(188)):(n=Object.keys(n).join(","),Error(ae(268,n)));return n=zx(e),n=n===null?null:n.stateNode,n};xi.flushSync=function(n){return To(n)};xi.hydrate=function(n,e,t){if(!md(e))throw Error(ae(200));return gd(null,n,e,!0,t)};xi.hydrateRoot=function(n,e,t){if(!gg(n))throw Error(ae(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=vS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=_S(e,null,n,1,t??null,r,!1,s,o),n[Fr]=e.current,hu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new pd(e)};xi.render=function(n,e,t){if(!md(e))throw Error(ae(200));return gd(null,n,e,!1,t)};xi.unmountComponentAtNode=function(n){if(!md(n))throw Error(ae(40));return n._reactRootContainer?(To(function(){gd(null,null,n,!1,function(){n._reactRootContainer=null,n[Fr]=null})}),!0):!1};xi.unstable_batchedUpdates=ug;xi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!md(t))throw Error(ae(200));if(n==null||n._reactInternals===void 0)throw Error(ae(38));return gd(n,e,t,!1,i)};xi.version="18.2.0-next-9e3b772b8-20220608";function xS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xS)}catch(n){console.error(n)}}xS(),_x.exports=xi;var QT=_x.exports,t0=QT;Kh.createRoot=t0.createRoot,Kh.hydrateRoot=t0.hydrateRoot;function Ar(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function yS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ya={duration:.5,overwrite:!1,delay:0},_g,An,bt,Pi=1e8,St=1/Pi,Gp=Math.PI*2,JT=Gp/4,ew=0,SS=Math.sqrt,tw=Math.cos,nw=Math.sin,cn=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},Br=function(e){return typeof e=="number"},vg=function(e){return typeof e>"u"},_r=function(e){return typeof e=="object"},Zn=function(e){return e!==!1},xg=function(){return typeof window<"u"},oc=function(e){return Bt(e)||cn(e)},MS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,Wp=/(?:-?\.?\d|\.)+/gi,ES=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ya=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,th=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,TS=/[+-]=-?[.\d]+/,wS=/[^,'"\[\]\s]+/gi,iw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,er,Xp,yg,vi={},Of={},AS,CS=function(e){return(Of=wo(e,vi))&&ii},Sg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Mu=function(e,t){return!t&&console.warn(e)},RS=function(e,t){return e&&(vi[e]=t)&&Of&&(Of[e]=t)||vi},Eu=function(){return 0},rw={suppressEvents:!0,isStart:!0,kill:!1},tf={suppressEvents:!0,kill:!1},sw={suppressEvents:!0},Mg={},Ss=[],jp={},PS,ui={},nh={},n0=30,nf=[],Eg="",Tg=function(e){var t=e[0],i,r;if(_r(t)||Bt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=nf.length;r--&&!nf[r].targetTest(t););i=nf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new JS(e[r],i)))||e.splice(r,1);return e},fo=function(e){return e._gsap||Tg(bi(e))[0]._gsap},bS=function(e,t,i){return(i=e[t])&&Bt(i)?e[t]():vg(i)&&e.getAttribute&&e.getAttribute(t)||i},Qn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},ln=function(e){return Math.round(e*1e7)/1e7||0},ba=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},ow=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ff=function(){var e=Ss.length,t=Ss.slice(0),i,r;for(jp={},Ss.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},LS=function(e,t,i,r){Ss.length&&!An&&Ff(),e.render(t,i,r||An&&t<0&&(e._initted||e._startAt)),Ss.length&&!An&&Ff()},DS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wS).length<2?t:cn(e)?e.trim():e},NS=function(e){return e},Oi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},aw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},wo=function(e,t){for(var i in t)e[i]=t[i];return e},i0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=_r(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},kf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Yl=function(e){var t=e.parent||Ut,i=e.keyframes?aw(Cn(e.keyframes)):Oi;if(Zn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},lw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},US=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},_d=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Rs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ho=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},uw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yp=function(e,t,i,r){return e._startAt&&(An?e._startAt.revert(tf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},cw=function n(e){return!e||e._ts&&n(e.parent)},r0=function(e){return e._repeat?qa(e._tTime,e=e.duration()+e._rDelay)*e:0},qa=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},zf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vd=function(e){return e._end=ln(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},xd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ln(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vd(e),i._dirty||ho(i,e)),e},IS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=zf(e.rawTime(),t),(!t._dur||Fu(0,t.totalDuration(),i)-t._tTime>St)&&t.render(i,!0)),ho(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-St}},sr=function(e,t,i,r){return t.parent&&Rs(t),t._start=ln((Br(i)?i:i||e!==Ut?Ei(e,i,t):e._time)+t._delay),t._end=ln(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),US(e,t,"_first","_last",e._sort?"_start":0),qp(t)||(e._recent=t),r||IS(e,t),e._ts<0&&xd(e,e._tTime),e},OS=function(e,t){return(vi.ScrollTrigger||Sg("scrollTrigger",t))&&vi.ScrollTrigger.create(t,e)},FS=function(e,t,i,r,s){if(Ag(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&PS!==ci.frame)return Ss.push(e),e._lazy=[s,r],1},fw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},qp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&fw(e)&&!(!e._initted&&qp(e))||(e._ts<0||e._dp._ts<0)&&!qp(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Fu(0,e._tDur,t),c=qa(l,a),e._yoyo&&c&1&&(o=1-o),c!==qa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||An||r||e._zTime===St||!t&&e._zTime){if(!e._initted&&FS(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?St:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Yp(e,t,i,!0),e._onUpdate&&!i&&hi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&hi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Rs(e,1),!i&&!An&&(hi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},hw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},$a=function(e,t,i,r){var s=e._repeat,o=ln(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ln(o*(s+1)+e._rDelay*s):o,a>0&&!r&&xd(e,e._tTime=e._tDur*a),e.parent&&vd(e),i||ho(e.parent,e),e},s0=function(e){return e instanceof Fn?ho(e):$a(e,e._dur)},pw={_start:0,endTime:Eu,totalDuration:Eu},Ei=function n(e,t,i){var r=e.labels,s=e._recent||pw,o=e.duration()>=Pi?s.endTime(!1):e._dur,a,l,u;return cn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Cn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},ql=function(e,t,i){var r=Br(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Zn(l.vars.inherit)&&l.parent;o.immediateRender=Zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Yt(t[0],o,t[s+1])},Os=function(e,t){return e||e===0?t(e):t},Fu=function(e,t,i){return i<e?e:i>t?t:i},wn=function(e,t){return!cn(e)||!(t=iw.exec(e))?"":t[1]},mw=function(e,t,i){return Os(i,function(r){return Fu(e,t,r)})},$p=[].slice,kS=function(e,t){return e&&_r(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&_r(e[0]))&&!e.nodeType&&e!==er},gw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return cn(r)&&!t||kS(r,1)?(s=i).push.apply(s,bi(r)):i.push(r)})||i},bi=function(e,t,i){return bt&&!t&&bt.selector?bt.selector(e):cn(e)&&!i&&(Xp||!Ka())?$p.call((t||yg).querySelectorAll(e),0):Cn(e)?gw(e,i):kS(e)?$p.call(e,0):e?[e]:[]},Kp=function(e){return e=bi(e)[0]||Mu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return bi(t,i.querySelectorAll?i:i===e?Mu("Invalid scope")||yg.createElement("div"):e)}},zS=function(e){return e.sort(function(){return .5-Math.random()})},BS=function(e){if(Bt(e))return e;var t=_r(e)?e:{each:e},i=po(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return cn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,_){var g=(_||t).length,m=o[g],h,v,x,S,C,T,E,P,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Pi])[1],!M){for(E=-Pi;E<(E=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],h=l?Math.min(M,g)*c-.5:r%M,v=M===Pi?0:l?g*d/M-.5:r/M|0,E=0,P=Pi,T=0;T<g;T++)x=T%M-h,S=v-(T/M|0),m[T]=C=u?Math.abs(u==="y"?S:x):SS(x*x+S*S),C>E&&(E=C),C<P&&(P=C);r==="random"&&zS(m),m.max=E-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=wn(t.amount||t.each)||0,i=i&&g<0?KS(i):i}return g=(m[f]-m.min)/m.max||0,ln(m.b+(i?i(g):g)*m.v)+m.u}},Zp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ln(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Br(i)?0:wn(i))}},HS=function(e,t){var i=Cn(e),r,s;return!i&&_r(e)&&(r=i=e.radius||Pi,e.values?(e=bi(e.values),(s=!Br(e[0]))&&(r*=r)):e=Zp(e.increment)),Os(t,i?Bt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Pi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Br(o)?c:c+wn(o)}:Zp(e))},VS=function(e,t,i,r){return Os(Cn(e)?!t:i===!0?!!(i=0):!r,function(){return Cn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},_w=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},vw=function(e,t){return function(i){return e(parseFloat(i))+(t||wn(i))}},xw=function(e,t,i){return WS(e,t,0,1,i)},GS=function(e,t,i){return Os(i,function(r){return e[~~t(r)]})},yw=function n(e,t,i){var r=t-e;return Cn(e)?GS(e,n(0,e.length),t):Os(i,function(s){return(r+(s-e)%r)%r+e})},Sw=function n(e,t,i){var r=t-e,s=r*2;return Cn(e)?GS(e,n(0,e.length-1),t):Os(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Tu=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?wS:Wp),i+=e.substr(t,r-t)+VS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},WS=function(e,t,i,r,s){var o=t-e,a=r-i;return Os(s,function(l){return i+((l-e)/o*a||0)})},Mw=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=cn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Cn(e)&&!Cn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return c[g](_-g)},i=t}else r||(e=wo(Cn(e)?[]:{},e));if(!c){for(l in t)wg.call(a,e,l,"get",t[l]);s=function(_){return Pg(_,a)||(o?e.p:e)}}}return Os(i,s)},o0=function(e,t,i){var r=e.labels,s=Pi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},hi=function(e,t,i){var r=e.vars,s=r[t],o=bt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ss.length&&Ff(),a&&(bt=a),c=l?s.apply(u,l):s.call(u),bt=o,c},bl=function(e){return Rs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&hi(e,"onInterrupt"),e},Sa,XS=[],jS=function(e){if(e)if(e=!e.name&&e.default||e,xg()||e.headless){var t=e.name,i=Bt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Eu,render:Pg,add:wg,kill:kw,modifier:Fw,rawVars:0},o={targetTest:0,get:0,getSetter:Rg,aliases:{},register:0};if(Ka(),e!==r){if(ui[t])return;Oi(r,Oi(kf(e,s),o)),wo(r.prototype,wo(s,kf(e,o))),ui[r.prop=t]=r,e.targetTest&&(nf.push(r),Mg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}RS(t,r),e.register&&e.register(ii,r,Jn)}else XS.push(e)},vt=255,Ll={aqua:[0,vt,vt],lime:[0,vt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vt],navy:[0,0,128],white:[vt,vt,vt],olive:[128,128,0],yellow:[vt,vt,0],orange:[vt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vt,0,0],pink:[vt,192,203],cyan:[0,vt,vt],transparent:[vt,vt,vt,0]},ih=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*vt+.5|0},YS=function(e,t,i){var r=e?Br(e)?[e>>16,e>>8&vt,e&vt]:0:Ll.black,s,o,a,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ll[e])r=Ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&vt,r&vt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&vt,e&vt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Wp),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=ih(l+1/3,s,o),r[1]=ih(l,s,o),r[2]=ih(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(ES),i&&r.length<4&&(r[3]=1),r}else r=e.match(Wp)||Ll.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/vt,o=r[1]/vt,a=r[2]/vt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},qS=function(e){var t=[],i=[],r=-1;return e.split(Ms).forEach(function(s){var o=s.match(ya)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},a0=function(e,t,i){var r="",s=(e+r).match(Ms),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=YS(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=qS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ms,"1").split(ya),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ms),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ms=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ll)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Ew=/hsl[a]?\(/,$S=function(e){var t=e.join(" "),i;if(Ms.lastIndex=0,Ms.test(t))return i=Ew.test(t),e[1]=a0(e[1],i),e[0]=a0(e[0],i,qS(e[1])),!0},wu,ci=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,_=function g(m){var h=n()-r,v=m===!0,x,S,C,T;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,x=C-o,(x>0||v)&&(T=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(g)),S)for(p=0;p<a.length;p++)a[p](C,f,T,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){AS&&(!Xp&&xg()&&(er=Xp=window,yg=er.document||{},vi.gsap=ii,(er.gsapVersions||(er.gsapVersions=[])).push(ii.version),CS(Of||er.GreenSockGlobals||!er.gsap&&er||{}),XS.forEach(jS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},wu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),wu=0,u=Eu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,v){var x=h?function(S,C,T,E){m(S,C,T,E),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),Ka(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),Ka=function(){return!wu&&ci.wake()},ot={},Tw=/^[\d.\-M][\d.\-,\s]/,ww=/["']/g,Aw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(ww,"").trim():+u,r=l.substr(a+1).trim();return t},Cw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Rw=function(e){var t=(e+"").split("("),i=ot[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Aw(t[1])]:Cw(e).split(",").map(DS)):ot._CE&&Tw.test(e)?ot._CE("",e):i},KS=function(e){return function(t){return 1-e(1-t)}},ZS=function n(e,t){for(var i=e._first,r;i;)i instanceof Fn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},po=function(e,t){return e&&(Bt(e)?e:ot[e]||Rw(e))||t},No=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Qn(e,function(a){ot[a]=vi[a]=s,ot[o=a.toLowerCase()]=i;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},QS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},rh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Gp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*nw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:QS(a);return s=Gp/s,l.config=function(u,c){return n(e,u,c)},l},sh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:QS(i);return r.config=function(s){return n(e,s)},r};Qn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;No(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;No("Elastic",rh("in"),rh("out"),rh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};No("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);No("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});No("Circ",function(n){return-(SS(1-n*n)-1)});No("Sine",function(n){return n===1?1:-tw(n*JT)+1});No("Back",sh("in"),sh("out"),sh());ot.SteppedEase=ot.steps=vi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-St;return function(a){return((r*Fu(0,o,a)|0)+s)*i}}};Ya.ease=ot["quad.out"];Qn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Eg+=n+","+n+"Params,"});var JS=function(e,t){this.id=ew++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bS,this.set=t?t.getSetter:Rg},Au=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$a(this,+t.duration,1,1),this.data=t.data,bt&&(this._ctx=bt,bt.data.push(this)),wu||ci.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,$a(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ka(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xd(this,i),!s._dp||s.parent||IS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&sr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===St||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),LS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+r0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+r0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?qa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?zf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-St?0:this._rts,this.totalTime(Fu(-Math.abs(this._delay),this._tDur,s),r!==!1),vd(this),uw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ka(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&sr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Zn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sw);var r=An;return An=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),An=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,s0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,s0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ei(this,i),Zn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Zn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-St)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Bt(i)?i:NS,a=function(){var u=r.then;r.then=null,Bt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){bl(this)},n}();Oi(Au.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Fn=function(n){yS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Zn(i.sortChildren),Ut&&sr(i.parent||Ut,Ar(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&OS(Ar(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ql(0,arguments,this),this},t.from=function(r,s,o){return ql(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ql(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Yl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(r,s,Ei(this,o),1),this},t.call=function(r,s,o){return sr(this,Yt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Yt(r,o,Ei(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Yl(o).immediateRender=Zn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Yl(a).immediateRender=Zn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:ln(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,g,m,h,v,x,S,C,T,E;if(this!==Ut&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=ln(c%m),c===l?(g=this._repeat,f=u):(g=~~(c/m),g&&g===c/m&&(f=u,g--),f>u&&(f=u)),C=qa(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),T&&g&1&&(f=u-f,E=1),g!==C&&!this._lock){var P=T&&C&1,M=P===(T&&g&1);if(g<C&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(E?0:ln(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;ZS(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=hw(this,ln(a),ln(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!g&&(hi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-St);break}}p=_}else{p=this._last;for(var y=r<0?r:f;p;){if(_=p._prev,(p._act||y<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,s,o||An&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=y?-St:St);break}}p=_}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-St)._zTime=f>=a?1:-1,this._ts))return this._start=S,vd(this),this.render(r,s,o);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Rs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(hi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Br(s)||(s=Ei(this,s,r)),!(r instanceof Au)){if(Cn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(cn(r))return this.addLabel(r,s);if(Bt(r))r=Yt.delayedCall(0,r);else return this}return this!==r?sr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Yt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return cn(r)?this.removeLabel(r):Bt(r)?this.killTweensOf(r):(_d(this,r),r===this._recent&&(this._recent=this._last),ho(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ln(ci.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ei(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Yt.delayedCall(0,s||Eu,o);return a.data="isPause",this._hasPause=1,sr(this,a,Ei(this,r))},t.removePause=function(r){var s=this._first;for(r=Ei(this,r);s;)s._start===r&&s.data==="isPause"&&Rs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)as!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=bi(r),l=this._first,u=Br(s),c;l;)l instanceof Yt?ow(l._targets,a)&&(u?(!as||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ei(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Yt.to(o,Oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||St,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&$a(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Oi({startAt:{time:Ei(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),o0(this,Ei(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),o0(this,Ei(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ho(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ho(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Pi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,sr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;$a(o,o===Ut&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ut._ts&&(LS(Ut,zf(r,Ut)),PS=ci.frame),ci.frame>=n0){n0+=mi.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&mi.autoSleep&&ci._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ci.sleep()}}},e}(Au);Oi(Fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Pw=function(e,t,i,r,s,o,a){var l=new Jn(this._pt,e,t,0,1,sM,null,s),u=0,c=0,d,f,p,_,g,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Tu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(th)||[];d=th.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?ba(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=th.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(TS.test(r)||h)&&(l.e=0),this._pt=l,l},wg=function(e,t,i,r,s,o,a,l,u,c){Bt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Bt(d)?u?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Bt(d)?u?Uw:iM:Cg,_;if(cn(r)&&(~r.indexOf("random(")&&(r=Tu(r)),r.charAt(1)==="="&&(_=ba(f,r)+(wn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||Qp)return!isNaN(f*r)&&r!==""?(_=new Jn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?Ow:rM,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&Sg(t,r),Pw.call(this,e,t,f,r,p,l||mi.stringFilter,u))},bw=function(e,t,i,r,s){if(Bt(e)&&(e=$l(e,s,t,i,r)),!_r(e)||e.style&&e.nodeType||Cn(e)||MS(e))return cn(e)?$l(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=$l(e[a],s,t,i,r);return o},eM=function(e,t,i,r,s,o){var a,l,u,c;if(ui[e]&&(a=new ui[e]).init(s,a.rawVars?t[e]:bw(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Jn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Sa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},as,Qp,Ag=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!_g,S=e.timeline,C,T,E,P,M,y,N,U,D,X,j,K,Y;if(S&&(!f||!s)&&(s="none"),e._ease=po(s,Ya.ease),e._yEase=d?KS(po(d===!0?s:d,Ya.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(U=m[0]?fo(m[0]).harness:0,K=U&&r[U.prop],C=kf(r,Mg),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?tf:rw),g._lazy=0),o){if(Rs(e._startAt=Yt.set(m,Oi({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&Zn(l),startAt:null,delay:0,onUpdate:u&&function(){return hi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!p)&&e._startAt.revert(tf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),E=Oi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Zn(l),immediateRender:a,stagger:0,parent:h},C),K&&(E[U.prop]=K),Rs(e._startAt=Yt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(tf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Zn(l)||l&&!_,T=0;T<m.length;T++){if(M=m[T],N=M._gsap||Tg(m)[T]._gsap,e._ptLookup[T]=X={},jp[N.id]&&Ss.length&&Ff(),j=v===m?T:v.indexOf(M),U&&(D=new U).init(M,K||C,e,j,v)!==!1&&(e._pt=P=new Jn(e._pt,M,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(L){X[L]=P}),D.priority&&(y=1)),!U||K)for(E in C)ui[E]&&(D=eM(E,C,e,j,M,v))?D.priority&&(y=1):X[E]=P=wg.call(e,M,E,"get",C[E],j,v,0,r.stringFilter);e._op&&e._op[T]&&e.kill(M,e._op[T]),x&&e._pt&&(as=e,Ut.killTweensOf(M,X,e.globalTime(t)),Y=!e.parent,as=0),e._pt&&l&&(jp[N.id]=1)}y&&oM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&S.render(Pi,!0,!0)},Lw=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Qp=1,e.vars[t]="+=0",Ag(e,a),Qp=0,l?Mu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Ht(i)+wn(d.e)),d.b&&(d.b=c.s+wn(d.b))},Dw=function(e,t){var i=e[0]?fo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=wo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Nw=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Cn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},$l=function(e,t,i,r,s){return Bt(e)?e.call(t,i,r,s):cn(e)&&~e.indexOf("random(")?Tu(e):e},tM=Eg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",nM={};Qn(tM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return nM[n]=1});var Yt=function(n){yS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Yl(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,v=r.parent||Ut,x=(Cn(i)||MS(i)?Br(i[0]):"length"in r)?[i]:bi(i),S,C,T,E,P,M,y,N;if(a._targets=x.length?Tg(x):Mu("GSAP target "+i+" not found. https://gsap.com",!mi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||oc(u)||oc(c)){if(r=a.vars,S=a.timeline=new Fn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),S.kill(),S.parent=S._dp=Ar(a),S._start=0,f||oc(u)||oc(c)){if(E=x.length,y=f&&BS(f),_r(f))for(P in f)~tM.indexOf(P)&&(N||(N={}),N[P]=f[P]);for(C=0;C<E;C++)T=kf(r,nM),T.stagger=0,h&&(T.yoyoEase=h),N&&wo(T,N),M=x[C],T.duration=+$l(u,Ar(a),C,M,x),T.delay=(+$l(c,Ar(a),C,M,x)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),S.to(M,T,y?y(C,M,x):0),S._ease=ot.none;S.duration()?u=c=0:a.timeline=0}else if(_){Yl(Oi(S.vars.defaults,{ease:"none"})),S._ease=po(_.ease||r.ease||"none");var U=0,D,X,j;if(Cn(_))_.forEach(function(K){return S.to(x,K,">")}),S.duration();else{T={};for(P in _)P==="ease"||P==="easeEach"||Nw(P,_[P],T,_.easeEach);for(P in T)for(D=T[P].sort(function(K,Y){return K.t-Y.t}),U=0,C=0;C<D.length;C++)X=D[C],j={ease:X.e,duration:(X.t-(C?D[C-1].t:0))/100*u},j[P]=X.v,S.to(x,j,U),U+=j.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return p===!0&&!_g&&(as=Ar(a),Ut.killTweensOf(x),as=0),sr(v,Ar(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===ln(v._time)&&Zn(d)&&cw(Ar(a))&&v.data!=="nested")&&(a._tTime=-St,a.render(Math.max(0,-c)||0)),m&&OS(Ar(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-St&&!c?l:r<St?0:r,f,p,_,g,m,h,v,x,S;if(!u)dw(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=d,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(f=ln(d%g),d===l?(_=this._repeat,f=u):(_=~~(d/g),_&&_===ln(d/g)&&(f=u,_--),f>u&&(f=u)),h=this._yoyo&&_&1,h&&(S=this._yEase,f=u-f),m=qa(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&(x&&this._yEase&&ZS(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(ln(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(FS(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(f/u),this._from&&(this.ratio=v=1-v),f&&!a&&!s&&!_&&(hi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Yp(this,r,s,o),hi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Yp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Rs(this,1),!s&&!(c&&!a)&&(d||a||h)&&(hi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){wu||ci.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ag(this,u),c=this._ease(u/this._dur),Lw(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(xd(this,0),this.parent||US(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?bl(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,as&&as.vars.overwrite!==!0)._first||bl(this),this.parent&&o!==this.timeline.totalDuration()&&$a(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?bi(r):a,u=this._ptLookup,c=this._pt,d,f,p,_,g,m,h;if((!s||s==="all")&&lw(a,l))return s==="all"&&(this._pt=0),bl(this);for(d=this._op=this._op||[],s!=="all"&&(cn(s)&&(g={},Qn(s,function(v){return g[v]=1}),s=g),s=Dw(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&_d(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&bl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ql(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ql(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ut.killTweensOf(r,s,o)},e}(Au);Oi(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Qn("staggerTo,staggerFrom,staggerFromTo",function(n){Yt[n]=function(){var e=new Fn,t=$p.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Cg=function(e,t,i){return e[t]=i},iM=function(e,t,i){return e[t](i)},Uw=function(e,t,i,r){return e[t](r.fp,i)},Iw=function(e,t,i){return e.setAttribute(t,i)},Rg=function(e,t){return Bt(e[t])?iM:vg(e[t])&&e.setAttribute?Iw:Cg},rM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ow=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},sM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Pg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Fw=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},kw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?_d(this,t,"_pt"):t.dep||(i=1),t=r;return!i},zw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},oM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Jn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||rM,this.d=l||this,this.set=u||Cg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=zw,this.m=i,this.mt=s,this.tween=r},n}();Qn(Eg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Mg[n]=1});vi.TweenMax=vi.TweenLite=Yt;vi.TimelineLite=vi.TimelineMax=Fn;Ut=new Fn({sortChildren:!1,defaults:Ya,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});mi.stringFilter=$S;var mo=[],rf={},Bw=[],l0=0,Hw=0,oh=function(e){return(rf[e]||Bw).map(function(t){return t()})},Jp=function(){var e=Date.now(),t=[];e-l0>2&&(oh("matchMediaInit"),mo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=er.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),oh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),l0=e,oh("matchMedia"))},aM=function(){function n(t,i){this.selector=i&&Kp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Hw++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Bt(i)&&(s=r,r=i,i=Bt);var o=this,a=function(){var u=bt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Kp(s)),bt=o,d=r.apply(o,arguments),Bt(d)&&o._r.push(d),bt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Bt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=bt;bt=null,i(this),bt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Yt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Fn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Yt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=mo.length;o--;)mo[o].id===this.id&&mo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),Vw=function(){function n(t){this.contexts=[],this.scope=t,bt&&bt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){_r(i)||(i={matches:i});var o=new aM(0,s||this.scope),a=o.conditions={},l,u,c;bt&&!o.selector&&(o.selector=bt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=er.matchMedia(i[u]),l&&(mo.indexOf(o)<0&&mo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Jp):l.addEventListener("change",Jp)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Bf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return jS(r)})},timeline:function(e){return new Fn(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,i,r){cn(e)&&(e=bi(e)[0]);var s=fo(e||{}).get,o=i?NS:DS;return i==="native"&&(i=""),e&&(t?o((ui[t]&&ui[t].get||s)(e,t,i,r)):function(a,l,u){return o((ui[a]&&ui[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=bi(e),e.length>1){var r=e.map(function(c){return ii.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=ui[t],a=fo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Sa._pt=0,d.init(e,i?c+i:c,Sa,0,[e]),d.render(1,d),Sa._pt&&Pg(1,Sa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ii.to(e,wo((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=po(e.ease,Ya.ease)),i0(Ya,e||{})},config:function(e){return i0(mi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ui[a]&&!vi[a]&&Mu(t+" effect requires "+a+" plugin.")}),nh[t]=function(a,l,u){return i(bi(a),Oi(l||{},s),u)},o&&(Fn.prototype[t]=function(a,l,u){return this.add(nh[t](a,_r(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ot[e]=po(t)},parseEase:function(e,t){return arguments.length?po(e,t):ot},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Fn(e),r,s;for(i.smoothChildTiming=Zn(e.smoothChildTiming),Ut.remove(i),i._dp=0,i._time=i._tTime=Ut._time,r=Ut._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Yt&&r.vars.onComplete===r._targets[0]))&&sr(i,r,r._start-r._delay),r=s;return sr(Ut,i,0),i},context:function(e,t){return e?new aM(e,t):bt},matchMedia:function(e){return new Vw(e)},matchMediaRefresh:function(){return mo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Jp()},addEventListener:function(e,t){var i=rf[e]||(rf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=rf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:yw,wrapYoyo:Sw,distribute:BS,random:VS,snap:HS,normalize:xw,getUnit:wn,clamp:mw,splitColor:YS,toArray:bi,selector:Kp,mapRange:WS,pipe:_w,unitize:vw,interpolate:Mw,shuffle:zS},install:CS,effects:nh,ticker:ci,updateRoot:Fn.updateRoot,plugins:ui,globalTimeline:Ut,core:{PropTween:Jn,globals:RS,Tween:Yt,Timeline:Fn,Animation:Au,getCache:fo,_removeLinkedListItem:_d,reverting:function(){return An},context:function(e){return e&&bt&&(bt.data.push(e),e._ctx=bt),bt},suppressOverwrites:function(e){return _g=e}}};Qn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Bf[n]=Yt[n]});ci.add(Fn.updateRoot);Sa=Bf.to({},{duration:0});var Gw=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Ww=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Gw(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},ah=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(cn(s)&&(l={},Qn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Ww(a,s)}}}},ii=Bf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)An?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ah("roundProps",Zp),ah("modifiers"),ah("snap",HS))||Bf;Yt.version=Fn.version=ii.version="3.12.5";AS=1;xg()&&Ka();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var u0,ls,La,bg,so,c0,Lg,Xw=function(){return typeof window<"u"},Hr={},$s=180/Math.PI,Da=Math.PI/180,Fo=Math.atan2,f0=1e8,Dg=/([A-Z])/g,jw=/(left|right|width|margin|padding|x)/i,Yw=/[\s,\(]\S/,lr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},em=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$w=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Kw=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},lM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},uM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zw=function(e,t,i){return e.style[t]=i},Qw=function(e,t,i){return e.style.setProperty(t,i)},Jw=function(e,t,i){return e._gsap[t]=i},eA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},tA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},nA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},It="transform",ei=It+"Origin",iA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Hr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=lr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Rr(r,a)}):this.tfm[e]=o.x?o[e]:Rr(r,e),e===ei&&(this.tfm.zOrigin=o.zOrigin);else return lr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(It)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ei,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},cM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},rA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Dg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Lg(),(!s||!s.isStart)&&!i[It]&&(cM(i),r.zOrigin&&i[ei]&&(i[ei]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},fM=function(e,t){var i={target:e,props:[],revert:rA,save:iA};return e._gsap||ii.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},dM,tm=function(e,t){var i=ls.createElementNS?ls.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ls.createElement(e);return i&&i.style?i:ls.createElement(e)},pr=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Dg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Za(t)||t,1)||""},d0="O,Moz,ms,Ms,Webkit".split(","),Za=function(e,t,i){var r=t||so,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(d0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?d0[o]:"")+e},nm=function(){Xw()&&window.document&&(u0=window,ls=u0.document,La=ls.documentElement,so=tm("div")||{style:{}},tm("div"),It=Za(It),ei=It+"Origin",so.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dM=!!Za("perspective"),Lg=ii.core.reverting,bg=1)},lh=function n(e){var t=tm("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(La.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),La.removeChild(t),this.style.cssText=s,o},h0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},hM=function(e){var t;try{t=e.getBBox()}catch{t=lh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===lh||(t=lh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+h0(e,["x","cx","x1"])||0,y:+h0(e,["y","cy","y1"])||0,width:0,height:0}:t},pM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hM(e))},Ao=function(e,t){if(t){var i=e.style,r;t in Hr&&t!==ei&&(t=It),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Dg,"-$1").toLowerCase())):i.removeAttribute(t)}},us=function(e,t,i,r,s,o){var a=new Jn(e._pt,t,i,0,1,o?uM:lM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},p0={deg:1,rad:1,turn:1},sA={grid:1,flex:1},Ps=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=so.style,l=jw.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,g,m,h;if(r===o||!s||p0[r]||p0[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&pM(e),(p||o==="%")&&(Hr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Ht(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ls||!g.appendChild)&&(g=ls.body),m=g._gsap,m&&p&&m.width&&l&&m.time===ci.time&&!m.uncache)return Ht(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,_=e[c],v?e.style[t]=v:Ao(e,t)}else(p||o==="%")&&!sA[pr(g,"display")]&&(a.position=pr(e,"position")),g===e&&(a.position="static"),g.appendChild(so),_=so[c],g.removeChild(so),a.position="absolute";return l&&p&&(m=fo(g),m.time=ci.time,m.width=g[c]),Ht(f?_*s/d:_&&s?d/_*s:0)},Rr=function(e,t,i,r){var s;return bg||nm(),t in lr&&t!=="transform"&&(t=lr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hr[t]&&t!=="transform"?(s=Ru(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Vf(pr(e,ei))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Hf[t]&&Hf[t](e,t,i)||pr(e,t)||bS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ps(e,t,s,i)+i:s},oA=function(e,t,i,r){if(!i||i==="none"){var s=Za(t,e,1),o=s&&pr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=pr(e,"borderTopColor"))}var a=new Jn(this._pt,e.style,t,0,1,sM),l=0,u=0,c,d,f,p,_,g,m,h,v,x,S,C;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=pr(e,t)||r,g?e.style[t]=g:Ao(e,t)),c=[i,r],$S(c),i=c[0],r=c[1],f=i.match(ya)||[],C=r.match(ya)||[],C.length){for(;d=ya.exec(r);)m=d[0],v=r.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,S=g.substr((p+"").length),m.charAt(1)==="="&&(m=ba(p,m)+S),h=parseFloat(m),x=m.substr((h+"").length),l=ya.lastIndex-x.length,x||(x=x||mi.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=Ps(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?uM:lM;return TS.test(r)&&(a.e=0),this._pt=a,a},m0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=m0[i]||i,t[1]=m0[r]||r,t.join(" ")},lA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Hr[a]&&(l=1,a=a==="transformOrigin"?ei:It),Ao(i,a);l&&(Ao(i,It),o&&(o.svg&&i.removeAttribute("transform"),Ru(i,1),o.uncache=1,cM(r)))}},Hf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Jn(e._pt,t,i,0,0,lA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Cu=[1,0,0,1,0,0],mM={},gM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},g0=function(e){var t=pr(e,It);return gM(t)?Cu:t.substr(7).match(ES).map(Ht)},Ng=function(e,t){var i=e._gsap||fo(e),r=e.style,s=g0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Cu:s):(s===Cu&&!e.offsetParent&&e!==La&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,La.appendChild(e)),s=g0(e),l?r.display=l:Ao(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):La.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},im=function(e,t,i,r,s,o){var a=e._gsap,l=s||Ng(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,T,E,P,M;i?l!==Cu&&(E=p*m-_*g)&&(P=S*(m/E)+C*(-g/E)+(g*v-m*h)/E,M=S*(-_/E)+C*(p/E)-(p*v-_*h)/E,S=P,C=M):(T=hM(e),S=T.x+(~x[0].indexOf("%")?S/100*T.width:S),C=T.y+(~(x[1]||x[0]).indexOf("%")?C/100*T.height:C)),r||r!==!1&&a.smooth?(h=S-u,v=C-c,a.xOffset=d+(h*p+v*g)-h,a.yOffset=f+(h*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ei]="0px 0px",o&&(us(o,a,"xOrigin",u,S),us(o,a,"yOrigin",c,C),us(o,a,"xOffset",d,a.xOffset),us(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},Ru=function(e,t){var i=e._gsap||new JS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=pr(e,ei)||"0",c,d,f,p,_,g,m,h,v,x,S,C,T,E,P,M,y,N,U,D,X,j,K,Y,L,G,R,ne,ee,Fe,H,J;return c=d=f=g=m=h=v=x=S=0,p=_=1,i.svg=!!(e.getCTM&&pM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),r.scale=r.rotate=r.translate="none"),E=Ng(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),im(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,E)),C=i.xOrigin||0,T=i.yOrigin||0,E!==Cu&&(N=E[0],U=E[1],D=E[2],X=E[3],c=j=E[4],d=K=E[5],E.length===6?(p=Math.sqrt(N*N+U*U),_=Math.sqrt(X*X+D*D),g=N||U?Fo(U,N)*$s:0,v=D||X?Fo(D,X)*$s+g:0,v&&(_*=Math.abs(Math.cos(v*Da))),i.svg&&(c-=C-(C*N+T*D),d-=T-(C*U+T*X))):(J=E[6],Fe=E[7],R=E[8],ne=E[9],ee=E[10],H=E[11],c=E[12],d=E[13],f=E[14],P=Fo(J,ee),m=P*$s,P&&(M=Math.cos(-P),y=Math.sin(-P),Y=j*M+R*y,L=K*M+ne*y,G=J*M+ee*y,R=j*-y+R*M,ne=K*-y+ne*M,ee=J*-y+ee*M,H=Fe*-y+H*M,j=Y,K=L,J=G),P=Fo(-D,ee),h=P*$s,P&&(M=Math.cos(-P),y=Math.sin(-P),Y=N*M-R*y,L=U*M-ne*y,G=D*M-ee*y,H=X*y+H*M,N=Y,U=L,D=G),P=Fo(U,N),g=P*$s,P&&(M=Math.cos(P),y=Math.sin(P),Y=N*M+U*y,L=j*M+K*y,U=U*M-N*y,K=K*M-j*y,N=Y,j=L),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Ht(Math.sqrt(N*N+U*U+D*D)),_=Ht(Math.sqrt(K*K+J*J)),P=Fo(j,K),v=Math.abs(P)>2e-4?P*$s:0,S=H?1/(H<0?-H:H):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!gM(pr(e,It)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Ht(p),i.scaleY=Ht(_),i.rotation=Ht(g)+a,i.rotationX=Ht(m)+a,i.rotationY=Ht(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ei]=Vf(u)),i.xOffset=i.yOffset=0,i.force3D=mi.force3D,i.renderTransform=i.svg?cA:dM?_M:uA,i.uncache=0,i},Vf=function(e){return(e=e.split(" "))[0]+" "+e[1]},uh=function(e,t,i){var r=wn(t);return Ht(parseFloat(t)+parseFloat(Ps(e,"x",i+"px",r)))+r},uA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,_M(e,t)},zs="0deg",vl="0px",Bs=") ",_M=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,S="",C=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==zs||c!==zs)){var T=parseFloat(c)*Da,E=Math.sin(T),P=Math.cos(T),M;T=parseFloat(d)*Da,M=Math.cos(T),o=uh(v,o,E*M*-x),a=uh(v,a,-Math.sin(T)*-x),l=uh(v,l,P*M*-x+x)}m!==vl&&(S+="perspective("+m+Bs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||o!==vl||a!==vl||l!==vl)&&(S+=l!==vl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Bs),u!==zs&&(S+="rotate("+u+Bs),c!==zs&&(S+="rotateY("+c+Bs),d!==zs&&(S+="rotateX("+d+Bs),(f!==zs||p!==zs)&&(S+="skew("+f+", "+p+Bs),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Bs),v.style[It]=S||"translate(0, 0)"},cA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),C,T,E,P,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Da,u*=Da,C=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-u)*-f,P=Math.cos(l-u)*f,u&&(c*=Da,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,P*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),C*=M,T*=M)),C=Ht(C),T=Ht(T),E=Ht(E),P=Ht(P)):(C=d,P=f,T=E=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Ps(p,"x",o,"px"),S=Ps(p,"y",a,"px")),(_||g||m||h)&&(x=Ht(x+_-(_*C+g*E)+m),S=Ht(S+g-(_*T+g*P)+h)),(r||s)&&(M=p.getBBox(),x=Ht(x+r/100*M.width),S=Ht(S+s/100*M.height)),M="matrix("+C+","+T+","+E+","+P+","+x+","+S+")",p.setAttribute("transform",M),v&&(p.style[It]=M)},fA=function(e,t,i,r,s){var o=360,a=cn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?$s:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*f0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*f0)%o-~~(u/o)*o)),e._pt=f=new Jn(e._pt,t,i,r,u,qw),f.e=c,f.u="deg",e._props.push(i),f},_0=function(e,t){for(var i in t)e[i]=t[i];return e},dA=function(e,t,i){var r=_0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[It]=t,a=Ru(i,1),Ao(i,It),i.setAttribute("transform",u)):(u=getComputedStyle(i)[It],o[It]=t,a=Ru(i,1),o[It]=u);for(l in Hr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=wn(u),_=wn(c),d=p!==_?Ps(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new Jn(e._pt,a,l,d,f-d,em),e._pt.u=_||0,e._props.push(l));_0(a,r)};Qn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Hf[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(_){return Rr(a,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,d)}});var vM={name:"css",register:nm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,_,g,m,h,v,x,S,C,T,E,P;bg||nm(),this.styles=this.styles||fM(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(ui[g]&&eM(g,t,i,r,e,s)))){if(p=typeof c,_=Hf[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Tu(c)),_)_(this,e,g,c,i)&&(E=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ms.lastIndex=0,Ms.test(u)||(m=wn(u),h=wn(c)),h?m!==h&&(u=Ps(e,g,u,h)+h):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],cn(u)&&~u.indexOf("random(")&&(u=Tu(u)),wn(u+"")||u==="auto"||(u+=mi.units[g]||wn(Rr(e,g))||""),(u+"").charAt(1)==="="&&(u=Rr(e,g))):u=Rr(e,g),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),g in lr&&(g==="autoAlpha"&&(f===1&&Rr(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),us(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=lr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Hr,x){if(this.styles.save(g),S||(C=e._gsap,C.renderTransform&&!t.parseTransform||Ru(e,t.parseTransform),T=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new Jn(this._pt,a,It,0,1,C.renderTransform,C,0,-1),S.dep=1),g==="scale")this._pt=new Jn(this._pt,C,"scaleY",C.scaleY,(v?ba(C.scaleY,v+d):d)-C.scaleY||0,em),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(ei,0,a[ei]),c=aA(c),C.svg?im(e,c,0,T,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==C.zOrigin&&us(this,C,"zOrigin",C.zOrigin,h),us(this,a,g,Vf(u),Vf(c)));continue}else if(g==="svgOrigin"){im(e,c,1,T,0,this);continue}else if(g in mM){fA(this,C,g,f,v?ba(f,v+c):c);continue}else if(g==="smoothOrigin"){us(this,C,"smooth",C.smooth,c);continue}else if(g==="force3D"){C[g]=c;continue}else if(g==="transform"){dA(this,c,e);continue}}else g in a||(g=Za(g)||g);if(x||(d||d===0)&&(f||f===0)&&!Yw.test(c)&&g in a)m=(u+"").substr((f+"").length),d||(d=0),h=wn(c)||(g in mi.units?mi.units[g]:m),m!==h&&(f=Ps(e,g,u,h)),this._pt=new Jn(this._pt,x?C:a,g,f,(v?ba(f,v+d):d)-f,!x&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?Kw:em),this._pt.u=h||0,m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=$w);else if(g in a)oA.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){Sg(g,c);continue}x||(g in a?P.push(g,0,a[g]):P.push(g,1,u||e[g])),o.push(g)}}E&&oM(this)},render:function(e,t){if(t.tween._time||!Lg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Rr,aliases:lr,getSetter:function(e,t,i){var r=lr[t];return r&&r.indexOf(",")<0&&(t=r),t in Hr&&t!==ei&&(e._gsap.x||Rr(e,"x"))?i&&c0===i?t==="scale"?eA:Jw:(c0=i||{})&&(t==="scale"?tA:nA):e.style&&!vg(e.style[t])?Zw:~t.indexOf("-")?Qw:Rg(e,t)},core:{_removeProperty:Ao,_getMatrix:Ng}};ii.utils.checkPrefix=Za;ii.core.getStyleSaver=fM;(function(n,e,t,i){var r=Qn(n+","+e+","+t,function(s){Hr[s]=1});Qn(e,function(s){mi.units[s]="deg",mM[s]=1}),lr[r[13]]=n+","+e,Qn(i,function(s){var o=s.split(":");lr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Qn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){mi.units[n]="px"});ii.registerPlugin(vM);var zt=ii.registerPlugin(vM)||ii;zt.core.Tween;/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let v0=typeof window<"u"?za.useLayoutEffect:za.useEffect,x0=n=>n&&!Array.isArray(n)&&typeof n=="object",ac=[],hA={},xM=zt;const Uo=(n,e=ac)=>{let t=hA;x0(n)?(t=n,n=null,e="dependencies"in t?t.dependencies:ac):x0(e)&&(t=e,e="dependencies"in t?t.dependencies:ac);let{scope:i,revertOnUpdate:r}=t,[s,o]=za.useState(!1);n&&typeof n!="function"&&console.warn("First parameter must be a function or config object");const a=xM.context(()=>{},i),l=d=>a.add(null,d),u=()=>a.revert(),c=e&&e.length&&!r;return v0(()=>{if(n&&a.add(n,i),!c||!s)return u},e),c&&v0(()=>(o(!0),u),ac),{context:a,contextSafe:l}};Uo.register=n=>{xM=n};Uo.headless=!0;const pA=()=>(Uo(()=>{zt.to("#name-box",{opacity:0,x:"-50%",ease:"power2.in",scrollTrigger:{trigger:"#header",start:"top top",scrub:!0}}),zt.to("#description-box",{opacity:0,x:"50%",ease:"power2.in",scrollTrigger:{trigger:"#header",start:"top top",scrub:!0}})},[]),se.jsxs("div",{id:"header",className:"w-screen h-[800px] max-h-[80vh] flex flex-col justify-end bg-black-soft overflow-hidden ",children:[se.jsxs("section",{className:" w-full flex flex-col md:flex-row justify-center items-start md:items-center mb-10",children:[se.jsxs("div",{className:"px-8 w-full md:w-1/2 bg-black-soft",id:"name-box",children:[se.jsx("h1",{className:"text-left md:text-right font-openSans font-thin md:text-4xl lg:text-[80px] text-2xl select-none text-white-bone mb-4 ",children:"Juan Urdaneta"}),se.jsx("p",{className:" text-white-bone text-xl md:text-right md:text-4xl font-openSans font-thin select-none ",children:"Software Engineer"})]}),se.jsx("div",{className:"w-16"}),se.jsxs("div",{id:"description-box",className:"h-fit flex flex-col justify-center items-start mt-12 w-3/4 md:w-1/2 px-8 md:px-0",children:[se.jsx("p",{className:" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent md:mb-2 pr-6 text-left ",children:"As a seasoned Front-End Engineer, I am deeply committed to solving complex problems"}),se.jsx("p",{className:" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent md:mb-2 pr-6 text-left ",children:"and transforming business ideas into tangible products."}),se.jsx("p",{className:" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent md:mb-2 pr-6 text-left ",children:"With a keen focus on collaboration, I excel in partnering with Product Managers"}),se.jsx("p",{className:" text-white-bone text-sm md:text-xl font-openSans font-thin select-none bg-transparent md:mb-2 pr-6 text-left ",children:"and Graphic Designers to refine and iterate on solutions, ensuring that the user experience is optimized to its fullest potential."})]})]}),se.jsx("div",{})]}));function y0(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function mA(n,e,t){return e&&y0(n.prototype,e),t&&y0(n,t),n}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn,sf,fi,cs,fs,Na,yM,Ks,Kl,SM,Dr,Hi,MM,EM=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},TM=1,Ma=[],nt=[],mr=[],Zl=Date.now,rm=function(e,t){return t},gA=function(){var e=Kl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,nt),r.push.apply(r,mr),nt=i,mr=r,rm=function(o,a){return t[o](a)}},Es=function(e,t){return~mr.indexOf(e)&&mr[mr.indexOf(e)+1][t]},Ql=function(e){return!!~SM.indexOf(e)},Ln=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},bn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},lc="scrollLeft",uc="scrollTop",sm=function(){return Dr&&Dr.isPressed||nt.cache++},Gf=function(e,t){var i=function r(s){if(s||s===0){TM&&(fi.history.scrollRestoration="manual");var o=Dr&&Dr.isPressed;s=r.v=Math.round(s)||(Dr&&Dr.iOS?1:0),e(s),r.cacheID=nt.cache,o&&rm("ss",s)}else(t||nt.cache!==r.cacheID||rm("ref"))&&(r.cacheID=nt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},kn={s:lc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Gf(function(n){return arguments.length?fi.scrollTo(n,Zt.sc()):fi.pageXOffset||cs[lc]||fs[lc]||Na[lc]||0})},Zt={s:uc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:kn,sc:Gf(function(n){return arguments.length?fi.scrollTo(kn.sc(),n):fi.pageYOffset||cs[uc]||fs[uc]||Na[uc]||0})},Wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},bs=function(e,t){var i=t.s,r=t.sc;Ql(e)&&(e=cs.scrollingElement||fs);var s=nt.indexOf(e),o=r===Zt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||Ln(e,"scroll",sm);var a=nt[s+o],l=a||(nt[s+o]=Gf(Es(e,i),!0)||(Ql(e)?r:Gf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=dn.getProperty(e,"scrollBehavior")==="smooth"),l},om=function(e,t,i){var r=e,s=e,o=Zl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=Zl();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(_){var g=a,m=s,h=Zl();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-g)*1e3};return{update:c,reset:d,getVelocity:f}},xl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},S0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},wM=function(){Kl=dn.core.globals().ScrollTrigger,Kl&&Kl.core&&gA()},AM=function(e){return dn=e||EM(),!sf&&dn&&typeof document<"u"&&document.body&&(fi=window,cs=document,fs=cs.documentElement,Na=cs.body,SM=[fi,cs,fs,Na],dn.utils.clamp,MM=dn.core.context||function(){},Ks="onpointerenter"in Na?"pointer":"mouse",yM=Gt.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Hi=Gt.eventTypes=("ontouchstart"in fs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in fs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return TM=0},500),wM(),sf=1),sf};kn.op=Zt;nt.cache=0;var Gt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){sf||AM(dn)||console.warn("Please gsap.registerPlugin(Observer)"),Kl||wM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,S=i.onRelease,C=i.onRight,T=i.onLeft,E=i.onUp,P=i.onDown,M=i.onChangeX,y=i.onChangeY,N=i.onChange,U=i.onToggleX,D=i.onToggleY,X=i.onHover,j=i.onHoverEnd,K=i.onMove,Y=i.ignoreCheck,L=i.isNormalizer,G=i.onGestureStart,R=i.onGestureEnd,ne=i.onWheel,ee=i.onEnable,Fe=i.onDisable,H=i.onClick,J=i.scrollSpeed,le=i.capture,te=i.allowClicks,Ue=i.lockAxis,Ie=i.onLockAxis;this.target=a=Wn(a)||fs,this.vars=i,p&&(p=dn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,J=J||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(fi.getComputedStyle(Na).lineHeight)||22);var k,We,Me,Ce,ve,Re,Le,F=this,$e=0,b=0,w=i.passive||!c,W=bs(a,kn),Q=bs(a,Zt),ie=W(),re=Q(),xe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Hi[0]==="pointerdown",de=Ql(a),oe=a.ownerDocument||cs,ke=[0,0,0],ue=[0,0,0],Ae=0,Qe=function(){return Ae=Zl()},ye=function(Te,at){return(F.event=Te)&&p&&~p.indexOf(Te.target)||at&&xe&&Te.pointerType!=="touch"||Y&&Y(Te,at)},Se=function(){F._vx.reset(),F._vy.reset(),We.pause(),d&&d(F)},ze=function(){var Te=F.deltaX=S0(ke),at=F.deltaY=S0(ue),pe=Math.abs(Te)>=r,Xe=Math.abs(at)>=r;N&&(pe||Xe)&&N(F,Te,at,ke,ue),pe&&(C&&F.deltaX>0&&C(F),T&&F.deltaX<0&&T(F),M&&M(F),U&&F.deltaX<0!=$e<0&&U(F),$e=F.deltaX,ke[0]=ke[1]=ke[2]=0),Xe&&(P&&F.deltaY>0&&P(F),E&&F.deltaY<0&&E(F),y&&y(F),D&&F.deltaY<0!=b<0&&D(F),b=F.deltaY,ue[0]=ue[1]=ue[2]=0),(Ce||Me)&&(K&&K(F),Me&&(v(F),Me=!1),Ce=!1),Re&&!(Re=!1)&&Ie&&Ie(F),ve&&(ne(F),ve=!1),k=0},Ye=function(Te,at,pe){ke[pe]+=Te,ue[pe]+=at,F._vx.update(Te),F._vy.update(at),u?k||(k=requestAnimationFrame(ze)):ze()},mt=function(Te,at){Ue&&!Le&&(F.axis=Le=Math.abs(Te)>Math.abs(at)?"x":"y",Re=!0),Le!=="y"&&(ke[2]+=Te,F._vx.update(Te,!0)),Le!=="x"&&(ue[2]+=at,F._vy.update(at,!0)),u?k||(k=requestAnimationFrame(ze)):ze()},Be=function(Te){if(!ye(Te,1)){Te=xl(Te,c);var at=Te.clientX,pe=Te.clientY,Xe=at-F.x,De=pe-F.y,Ge=F.isDragging;F.x=at,F.y=pe,(Ge||Math.abs(F.startX-at)>=s||Math.abs(F.startY-pe)>=s)&&(v&&(Me=!0),Ge||(F.isDragging=!0),mt(Xe,De),Ge||m&&m(F))}},I=F.onPress=function(Oe){ye(Oe,1)||Oe&&Oe.button||(F.axis=Le=null,We.pause(),F.isPressed=!0,Oe=xl(Oe),$e=b=0,F.startX=F.x=Oe.clientX,F.startY=F.y=Oe.clientY,F._vx.reset(),F._vy.reset(),Ln(L?a:oe,Hi[1],Be,w,!0),F.deltaX=F.deltaY=0,x&&x(F))},q=F.onRelease=function(Oe){if(!ye(Oe,1)){bn(L?a:oe,Hi[1],Be,!0);var Te=!isNaN(F.y-F.startY),at=F.isDragging,pe=at&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Xe=xl(Oe);!pe&&Te&&(F._vx.reset(),F._vy.reset(),c&&te&&dn.delayedCall(.08,function(){if(Zl()-Ae>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(oe.createEvent){var De=oe.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,fi,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(De)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,d&&at&&!L&&We.restart(!0),h&&at&&h(F),S&&S(F,pe)}},Z=function(Te){return Te.touches&&Te.touches.length>1&&(F.isGesturing=!0)&&G(Te,F.isDragging)},fe=function(){return(F.isGesturing=!1)||R(F)},he=function(Te){if(!ye(Te)){var at=W(),pe=Q();Ye((at-ie)*J,(pe-re)*J,1),ie=at,re=pe,d&&We.restart(!0)}},je=function(Te){if(!ye(Te)){Te=xl(Te,c),ne&&(ve=!0);var at=(Te.deltaMode===1?l:Te.deltaMode===2?fi.innerHeight:1)*_;Ye(Te.deltaX*at,Te.deltaY*at,0),d&&!L&&We.restart(!0)}},lt=function(Te){if(!ye(Te)){var at=Te.clientX,pe=Te.clientY,Xe=at-F.x,De=pe-F.y;F.x=at,F.y=pe,Ce=!0,d&&We.restart(!0),(Xe||De)&&mt(Xe,De)}},ht=function(Te){F.event=Te,X(F)},xt=function(Te){F.event=Te,j(F)},rt=function(Te){return ye(Te)||xl(Te,c)&&H(F)};We=F._dc=dn.delayedCall(f||.25,Se).pause(),F.deltaX=F.deltaY=0,F._vx=om(0,50,!0),F._vy=om(0,50,!0),F.scrollX=W,F.scrollY=Q,F.isDragging=F.isGesturing=F.isPressed=!1,MM(this),F.enable=function(Oe){return F.isEnabled||(Ln(de?oe:a,"scroll",sm),o.indexOf("scroll")>=0&&Ln(de?oe:a,"scroll",he,w,le),o.indexOf("wheel")>=0&&Ln(a,"wheel",je,w,le),(o.indexOf("touch")>=0&&yM||o.indexOf("pointer")>=0)&&(Ln(a,Hi[0],I,w,le),Ln(oe,Hi[2],q),Ln(oe,Hi[3],q),te&&Ln(a,"click",Qe,!0,!0),H&&Ln(a,"click",rt),G&&Ln(oe,"gesturestart",Z),R&&Ln(oe,"gestureend",fe),X&&Ln(a,Ks+"enter",ht),j&&Ln(a,Ks+"leave",xt),K&&Ln(a,Ks+"move",lt)),F.isEnabled=!0,Oe&&Oe.type&&I(Oe),ee&&ee(F)),F},F.disable=function(){F.isEnabled&&(Ma.filter(function(Oe){return Oe!==F&&Ql(Oe.target)}).length||bn(de?oe:a,"scroll",sm),F.isPressed&&(F._vx.reset(),F._vy.reset(),bn(L?a:oe,Hi[1],Be,!0)),bn(de?oe:a,"scroll",he,le),bn(a,"wheel",je,le),bn(a,Hi[0],I,le),bn(oe,Hi[2],q),bn(oe,Hi[3],q),bn(a,"click",Qe,!0),bn(a,"click",rt),bn(oe,"gesturestart",Z),bn(oe,"gestureend",fe),bn(a,Ks+"enter",ht),bn(a,Ks+"leave",xt),bn(a,Ks+"move",lt),F.isEnabled=F.isPressed=F.isDragging=!1,Fe&&Fe(F))},F.kill=F.revert=function(){F.disable();var Oe=Ma.indexOf(F);Oe>=0&&Ma.splice(Oe,1),Dr===F&&(Dr=0)},Ma.push(F),L&&Ql(a)&&(Dr=F),F.enable(g)},mA(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Gt.version="3.12.5";Gt.create=function(n){return new Gt(n)};Gt.register=AM;Gt.getAll=function(){return Ma.slice()};Gt.getById=function(n){return Ma.filter(function(e){return e.vars.id===n})[0]};EM()&&dn.registerPlugin(Gt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var we,oa,st,Dt,Xi,wt,CM,Wf,Pu,Jl,Dl,cc,Mn,yd,am,In,M0,E0,aa,RM,ch,PM,Nn,lm,bM,LM,Jr,um,Ug,Ua,Ig,Xf,cm,fh,fc=1,En=Date.now,dh=En(),Ni=0,Nl=0,T0=function(e,t,i){var r=li(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},w0=function(e,t){return t&&(!li(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},_A=function n(){return Nl&&requestAnimationFrame(n)},A0=function(){return yd=1},C0=function(){return yd=0},tr=function(e){return e},Ul=function(e){return Math.round(e*1e5)/1e5||0},DM=function(){return typeof window<"u"},NM=function(){return we||DM()&&(we=window.gsap)&&we.registerPlugin&&we},Co=function(e){return!!~CM.indexOf(e)},UM=function(e){return(e==="Height"?Ig:st["inner"+e])||Xi["client"+e]||wt["client"+e]},IM=function(e){return Es(e,"getBoundingClientRect")||(Co(e)?function(){return cf.width=st.innerWidth,cf.height=Ig,cf}:function(){return Pr(e)})},vA=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Es(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?UM(s):e["client"+s])||0}},xA=function(e,t){return!t||~mr.indexOf(e)?IM(e):function(){return cf}},ur=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Es(e,i))?o()-IM(e)()[s]:Co(e)?(Xi[i]||wt[i])-UM(r):e[i]-e["offset"+r])},dc=function(e,t){for(var i=0;i<aa.length;i+=3)(!t||~t.indexOf(aa[i+1]))&&e(aa[i],aa[i+1],aa[i+2])},li=function(e){return typeof e=="string"},zn=function(e){return typeof e=="function"},Il=function(e){return typeof e=="number"},Zs=function(e){return typeof e=="object"},yl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},hh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},ko=Math.abs,OM="left",FM="top",Og="right",Fg="bottom",go="width",_o="height",eu="Right",tu="Left",nu="Top",iu="Bottom",jt="padding",Ai="margin",Qa="Width",kg="Height",$t="px",Ci=function(e){return st.getComputedStyle(e)},yA=function(e){var t=Ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},R0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Pr=function(e,t){var i=t&&Ci(e)[am]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},jf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},kM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},SA=function(e){return function(t){return we.utils.snap(kM(e),t)}},zg=function(e){var t=we.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},MA=function(e){return function(t,i){return zg(kM(e))(t,i.direction)}},hc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},on=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},sn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},pc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},P0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},mc={toggleActions:"play",anticipatePin:0},Yf={top:0,left:0,center:.5,bottom:1,right:1},of=function(e,t){if(li(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Yf?Yf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},gc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,_=Dt.createElement("div"),g=Co(i)||Es(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=g?wt:i,v=e.indexOf("start")!==-1,x=v?u:c,S="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(S+=(r===Zt?Og:Fg)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(_,h.children[0]):h.appendChild(_),_._offset=_["offset"+r.op.d2],af(_,0,r,v),_},af=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Qa]=1,s["border"+a+Qa]=0,s[i.p]=t+"px",we.set(e,s)},tt=[],fm={},bu,b0=function(){return En()-Ni>34&&(bu||(bu=requestAnimationFrame(Ir)))},zo=function(){(!Nn||!Nn.isPressed||Nn.startX>wt.clientWidth)&&(nt.cache++,Nn?bu||(bu=requestAnimationFrame(Ir)):Ir(),Ni||Po("scrollStart"),Ni=En())},ph=function(){LM=st.innerWidth,bM=st.innerHeight},Ol=function(){nt.cache++,!Mn&&!PM&&!Dt.fullscreenElement&&!Dt.webkitFullscreenElement&&(!lm||LM!==st.innerWidth||Math.abs(st.innerHeight-bM)>st.innerHeight*.25)&&Wf.restart(!0)},Ro={},EA=[],zM=function n(){return sn(Je,"scrollEnd",n)||oo(!0)},Po=function(e){return Ro[e]&&Ro[e].map(function(t){return t()})||EA},oi=[],BM=function(e){for(var t=0;t<oi.length;t+=5)(!e||oi[t+4]&&oi[t+4].query===e)&&(oi[t].style.cssText=oi[t+1],oi[t].getBBox&&oi[t].setAttribute("transform",oi[t+2]||""),oi[t+3].uncache=1)},Bg=function(e,t){var i;for(In=0;In<tt.length;In++)i=tt[In],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Xf=!0,t&&BM(t),t||Po("revert")},HM=function(e,t){nt.cache++,(t||!On)&&nt.forEach(function(i){return zn(i)&&i.cacheID++&&(i.rec=0)}),li(e)&&(st.history.scrollRestoration=Ug=e)},On,vo=0,L0,TA=function(){if(L0!==vo){var e=L0=vo;requestAnimationFrame(function(){return e===vo&&oo(!0)})}},VM=function(){wt.appendChild(Ua),Ig=!Nn&&Ua.offsetHeight||st.innerHeight,wt.removeChild(Ua)},D0=function(e){return Pu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},oo=function(e,t){if(Ni&&!e&&!Xf){on(Je,"scrollEnd",zM);return}VM(),On=Je.isRefreshing=!0,nt.forEach(function(r){return zn(r)&&++r.cacheID&&(r.rec=r())});var i=Po("refreshInit");RM&&Je.sort(),t||Bg(),nt.forEach(function(r){zn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),tt.slice(0).forEach(function(r){return r.refresh()}),Xf=!1,tt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),cm=1,D0(!0),tt.forEach(function(r){var s=ur(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),D0(!1),cm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),nt.forEach(function(r){zn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),HM(Ug,1),Wf.pause(),vo++,On=2,Ir(2),tt.forEach(function(r){return zn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),On=Je.isRefreshing=!1,Po("refresh")},dm=0,lf=1,ru,Ir=function(e){if(e===2||!On&&!Xf){Je.isUpdating=!0,ru&&ru.update(0);var t=tt.length,i=En(),r=i-dh>=50,s=t&&tt[0].scroll();if(lf=dm>s?-1:1,On||(dm=s),r&&(Ni&&!yd&&i-Ni>200&&(Ni=0,Po("scrollEnd")),Dl=dh,dh=i),lf<0){for(In=t;In-- >0;)tt[In]&&tt[In].update(0,r);lf=1}else for(In=0;In<t;In++)tt[In]&&tt[In].update(0,r);Je.isUpdating=!1}bu=0},hm=[OM,FM,Fg,Og,Ai+iu,Ai+eu,Ai+nu,Ai+tu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],uf=hm.concat([go,_o,"boxSizing","max"+Qa,"max"+kg,"position",Ai,jt,jt+nu,jt+eu,jt+iu,jt+tu]),wA=function(e,t,i){Ia(i);var r=e._gsap;if(r.spacerIsNative)Ia(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},mh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=hm.length,o=t.style,a=e.style,l;s--;)l=hm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Fg]=a[Og]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[go]=jf(e,kn)+$t,o[_o]=jf(e,Zt)+$t,o[jt]=a[Ai]=a[FM]=a[OM]="0",Ia(r),a[go]=a["max"+Qa]=i[go],a[_o]=a["max"+kg]=i[_o],a[jt]=i[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},AA=/([A-Z])/g,Ia=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(AA,"-$1").toLowerCase())}},_c=function(e){for(var t=uf.length,i=e.style,r=[],s=0;s<t;s++)r.push(uf[s],i[uf[s]]);return r.t=e,r},CA=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},cf={left:0,top:0},N0=function(e,t,i,r,s,o,a,l,u,c,d,f,p,_){zn(e)&&(e=e(l)),li(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?of("0"+e.substr(3),i):0));var g=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Il(e))p&&(e=we.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&af(a,i,r,!0);else{zn(t)&&(t=t(l));var x=(e||"0").split(" "),S,C,T,E;v=Wn(t,l)||wt,S=Pr(v)||{},(!S||!S.left&&!S.top)&&Ci(v).display==="none"&&(E=v.style.display,v.style.display="block",S=Pr(v),E?v.style.display=E:v.style.removeProperty("display")),C=of(x[0],S[r.d]),T=of(x[1]||"0",i),e=S[r.p]-u[r.p]-c+C+s-T,a&&af(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+i,M=o._isStart;m="scroll"+r.d2,af(o,P,r,M&&P>20||!M&&(d?Math.max(wt[m],Xi[m]):o.parentNode[m])<=P+1),d&&(u=Pr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+$t))}return p&&v&&(m=Pr(v),p.seek(f),h=Pr(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},RA=/(webkit|moz|length|cssText|inset)/i,U0=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=Ci(e);for(o in a)!+o&&!RA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},GM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},vc=function(e,t,i){var r={};r[t.p]="+="+i,we.set(e,r)},I0=function(e,t){var i=bs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,_={};u=u||i();var g=GM(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Ir()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=we.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",i.wheelHandler),Je.isTouch&&on(e,"touchmove",i.wheelHandler),s},Je=function(){function n(t,i){oa||n.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),um(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Nl){this.update=this.refresh=this.kill=tr;return}i=R0(li(i)||Il(i)||i.nodeType?{trigger:i}:i,mc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,S=s.snap,C=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,M=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?kn:Zt,N=!d&&d!==0,U=Wn(i.scroller||st),D=we.core.getCache(U),X=Co(U),j=("pinType"in i?i.pinType:Es(U,"pinType")||X&&"fixed")==="fixed",K=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=N&&i.toggleActions.split(" "),L="markers"in i?i.markers:mc.markers,G=X?0:parseFloat(Ci(U)["border"+y.p2+Qa])||0,R=this,ne=i.onRefreshInit&&function(){return i.onRefreshInit(R)},ee=vA(U,X,y),Fe=xA(U,X),H=0,J=0,le=0,te=bs(U,y),Ue,Ie,k,We,Me,Ce,ve,Re,Le,F,$e,b,w,W,Q,ie,re,xe,de,oe,ke,ue,Ae,Qe,ye,Se,ze,Ye,mt,Be,I,q,Z,fe,he,je,lt,ht,xt;if(R._startClamp=R._endClamp=!1,R._dir=y,m*=45,R.scroller=U,R.scroll=E?E.time.bind(E):te,We=te(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(RM=1,i.refreshPriority===-9999&&(ru=R)),D.tweenScroll=D.tweenScroll||{top:I0(U,Zt),left:I0(U,kn)},R.tweenTo=Ue=D.tweenScroll[y.p],R.scrubDuration=function(pe){Z=Il(pe)&&pe,Z?q?q.duration(pe):q=we.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Z,paused:!0,onComplete:function(){return h&&h(R)}}):(q&&q.progress(1).kill(),q=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),Be=0,l||(l=r.vars.id)),S&&((!Zs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in wt.style&&we.set(X?[wt,Xi]:U,{scrollBehavior:"auto"}),nt.forEach(function(pe){return zn(pe)&&pe.target===(X?Dt.scrollingElement||Xi:U)&&(pe.smooth=!1)}),k=zn(S.snapTo)?S.snapTo:S.snapTo==="labels"?SA(r):S.snapTo==="labelsDirectional"?MA(r):S.directional!==!1?function(pe,Xe){return zg(S.snapTo)(pe,En()-J<500?0:Xe.direction)}:we.utils.snap(S.snapTo),fe=S.duration||{min:.1,max:2},fe=Zs(fe)?Jl(fe.min,fe.max):Jl(fe,fe),he=we.delayedCall(S.delay||Z/2||.1,function(){var pe=te(),Xe=En()-J<500,De=Ue.tween;if((Xe||Math.abs(R.getVelocity())<10)&&!De&&!yd&&H!==pe){var Ge=(pe-Ce)/W,Lt=r&&!N?r.totalProgress():Ge,et=Xe?0:(Lt-I)/(En()-Dl)*1e3||0,Ct=we.utils.clamp(-Ge,1-Ge,ko(et/2)*et/.185),nn=Ge+(S.inertia===!1?0:Ct),Rt,yt,A=S,O=A.onStart,z=A.onInterrupt,B=A.onComplete;if(Rt=k(nn,R),Il(Rt)||(Rt=nn),yt=Math.round(Ce+Rt*W),pe<=ve&&pe>=Ce&&yt!==pe){if(De&&!De._initted&&De.data<=ko(yt-pe))return;S.inertia===!1&&(Ct=Rt-Ge),Ue(yt,{duration:fe(ko(Math.max(ko(nn-Lt),ko(Rt-Lt))*.185/et/.05||0)),ease:S.ease||"power3",data:ko(yt-pe),onInterrupt:function(){return he.restart(!0)&&z&&z(R)},onComplete:function(){R.update(),H=te(),r&&(q?q.resetTo("totalProgress",Rt,r._tTime/r._tDur):r.progress(Rt)),Be=I=r&&!N?r.totalProgress():R.progress,v&&v(R),B&&B(R)}},pe,Ct*W,yt-pe-Ct*W),O&&O(R,Ue.tween)}}else R.isActive&&H!==pe&&he.restart(!0)}).pause()),l&&(fm[l]=R),f=R.trigger=Wn(f||p!==!0&&p),xt=f&&f._gsap&&f._gsap.stRevert,xt&&(xt=xt(R)),p=p===!0?f:Wn(p),li(a)&&(a={targets:f,className:a}),p&&(_===!1||_===Ai||(_=!_&&p.parentNode&&p.parentNode.style&&Ci(p.parentNode).display==="flex"?!1:jt),R.pin=p,Ie=we.core.getCache(p),Ie.spacer?Q=Ie.pinState:(T&&(T=Wn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Ie.spacerIsNative=!!T,T&&(Ie.spacerState=_c(T))),Ie.spacer=xe=T||Dt.createElement("div"),xe.classList.add("pin-spacer"),l&&xe.classList.add("pin-spacer-"+l),Ie.pinState=Q=_c(p)),i.force3D!==!1&&we.set(p,{force3D:!0}),R.spacer=xe=Ie.spacer,mt=Ci(p),Qe=mt[_+y.os2],oe=we.getProperty(p),ke=we.quickSetter(p,y.a,$t),mh(p,xe,mt),re=_c(p)),L){b=Zs(L)?R0(L,P0):P0,F=gc("scroller-start",l,U,y,b,0),$e=gc("scroller-end",l,U,y,b,0,F),de=F["offset"+y.op.d2];var rt=Wn(Es(U,"content")||U);Re=this.markerStart=gc("start",l,rt,y,b,de,0,E),Le=this.markerEnd=gc("end",l,rt,y,b,de,0,E),E&&(ht=we.quickSetter([Re,Le],y.a,$t)),!j&&!(mr.length&&Es(U,"fixedMarkers")===!0)&&(yA(X?wt:U),we.set([F,$e],{force3D:!0}),Se=we.quickSetter(F,y.a,$t),Ye=we.quickSetter($e,y.a,$t))}if(E){var Oe=E.vars.onUpdate,Te=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),Oe&&Oe.apply(E,Te||[])})}if(R.previous=function(){return tt[tt.indexOf(R)-1]},R.next=function(){return tt[tt.indexOf(R)+1]},R.revert=function(pe,Xe){if(!Xe)return R.kill(!0);var De=pe!==!1||!R.enabled,Ge=Mn;De!==R.isReverted&&(De&&(je=Math.max(te(),R.scroll.rec||0),le=R.progress,lt=r&&r.progress()),Re&&[Re,Le,F,$e].forEach(function(Lt){return Lt.style.display=De?"none":"block"}),De&&(Mn=R,R.update(De)),p&&(!C||!R.isActive)&&(De?wA(p,xe,Q):mh(p,xe,Ci(p),ye)),De||R.update(De),Mn=Ge,R.isReverted=De)},R.refresh=function(pe,Xe,De,Ge){if(!((Mn||!R.enabled)&&!Xe)){if(p&&pe&&Ni){on(n,"scrollEnd",zM);return}!On&&ne&&ne(R),Mn=R,Ue.tween&&!De&&(Ue.tween.kill(),Ue.tween=0),q&&q.pause(),g&&r&&r.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Lt=ee(),et=Fe(),Ct=E?E.duration():ur(U,y),nn=W<=.01,Rt=0,yt=Ge||0,A=Zs(De)?De.end:i.end,O=i.endTrigger||f,z=Zs(De)?De.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),B=R.pinnedContainer=i.pinnedContainer&&Wn(i.pinnedContainer,R),V=f&&Math.max(0,tt.indexOf(R))||0,ce=V,me,_e,Ne,Ve,be,Pe,ct,Wt,gn,Pn,qe,He,Zi;for(L&&Zs(De)&&(He=we.getProperty(F,y.p),Zi=we.getProperty($e,y.p));ce--;)Pe=tt[ce],Pe.end||Pe.refresh(0,1)||(Mn=R),ct=Pe.pin,ct&&(ct===f||ct===p||ct===B)&&!Pe.isReverted&&(Pn||(Pn=[]),Pn.unshift(Pe),Pe.revert(!0,!0)),Pe!==tt[ce]&&(V--,ce--);for(zn(z)&&(z=z(R)),z=T0(z,"start",R),Ce=N0(z,f,Lt,y,te(),Re,F,R,et,G,j,Ct,E,R._startClamp&&"_startClamp")||(p?-.001:0),zn(A)&&(A=A(R)),li(A)&&!A.indexOf("+=")&&(~A.indexOf(" ")?A=(li(z)?z.split(" ")[0]:"")+A:(Rt=of(A.substr(2),Lt),A=li(z)?z:(E?we.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ce):Ce)+Rt,O=f)),A=T0(A,"end",R),ve=Math.max(Ce,N0(A||(O?"100% 0":Ct),O,Lt,y,te()+Rt,Le,$e,R,et,G,j,Ct,E,R._endClamp&&"_endClamp"))||-.001,Rt=0,ce=V;ce--;)Pe=tt[ce],ct=Pe.pin,ct&&Pe.start-Pe._pinPush<=Ce&&!E&&Pe.end>0&&(me=Pe.end-(R._startClamp?Math.max(0,Pe.start):Pe.start),(ct===f&&Pe.start-Pe._pinPush<Ce||ct===B)&&isNaN(z)&&(Rt+=me*(1-Pe.progress)),ct===p&&(yt+=me));if(Ce+=Rt,ve+=Rt,R._startClamp&&(R._startClamp+=Rt),R._endClamp&&!On&&(R._endClamp=ve||-.001,ve=Math.min(ve,ur(U,y))),W=ve-Ce||(Ce-=.01)&&.001,nn&&(le=we.utils.clamp(0,1,we.utils.normalize(Ce,ve,je))),R._pinPush=yt,Re&&Rt&&(me={},me[y.a]="+="+Rt,B&&(me[y.p]="-="+te()),we.set([Re,Le],me)),p&&!(cm&&R.end>=ur(U,y)))me=Ci(p),Ve=y===Zt,Ne=te(),ue=parseFloat(oe(y.a))+yt,!Ct&&ve>1&&(qe=(X?Dt.scrollingElement||Xi:U).style,qe={style:qe,value:qe["overflow"+y.a.toUpperCase()]},X&&Ci(wt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(qe.style["overflow"+y.a.toUpperCase()]="scroll")),mh(p,xe,me),re=_c(p),_e=Pr(p,!0),Wt=j&&bs(U,Ve?kn:Zt)(),_?(ye=[_+y.os2,W+yt+$t],ye.t=xe,ce=_===jt?jf(p,y)+W+yt:0,ce&&(ye.push(y.d,ce+$t),xe.style.flexBasis!=="auto"&&(xe.style.flexBasis=ce+$t)),Ia(ye),B&&tt.forEach(function(ft){ft.pin===B&&ft.vars.pinSpacing!==!1&&(ft._subPinOffset=!0)}),j&&te(je)):(ce=jf(p,y),ce&&xe.style.flexBasis!=="auto"&&(xe.style.flexBasis=ce+$t)),j&&(be={top:_e.top+(Ve?Ne-Ce:Wt)+$t,left:_e.left+(Ve?Wt:Ne-Ce)+$t,boxSizing:"border-box",position:"fixed"},be[go]=be["max"+Qa]=Math.ceil(_e.width)+$t,be[_o]=be["max"+kg]=Math.ceil(_e.height)+$t,be[Ai]=be[Ai+nu]=be[Ai+eu]=be[Ai+iu]=be[Ai+tu]="0",be[jt]=me[jt],be[jt+nu]=me[jt+nu],be[jt+eu]=me[jt+eu],be[jt+iu]=me[jt+iu],be[jt+tu]=me[jt+tu],ie=CA(Q,be,C),On&&te(0)),r?(gn=r._initted,ch(1),r.render(r.duration(),!0,!0),Ae=oe(y.a)-ue+W+yt,ze=Math.abs(W-Ae)>1,j&&ze&&ie.splice(ie.length-2,2),r.render(0,!0,!0),gn||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ch(0)):Ae=W,qe&&(qe.value?qe.style["overflow"+y.a.toUpperCase()]=qe.value:qe.style.removeProperty("overflow-"+y.a));else if(f&&te()&&!E)for(_e=f.parentNode;_e&&_e!==wt;)_e._pinOffset&&(Ce-=_e._pinOffset,ve-=_e._pinOffset),_e=_e.parentNode;Pn&&Pn.forEach(function(ft){return ft.revert(!1,!0)}),R.start=Ce,R.end=ve,We=Me=On?je:te(),!E&&!On&&(We<je&&te(je),R.scroll.rec=0),R.revert(!1,!0),J=En(),he&&(H=-1,he.restart(!0)),Mn=0,r&&N&&(r._initted||lt)&&r.progress()!==lt&&r.progress(lt||0,!0).render(r.time(),!0,!0),(nn||le!==R.progress||E||g)&&(r&&!N&&r.totalProgress(E&&Ce<-.001&&!le?we.utils.normalize(Ce,ve,0):le,!0),R.progress=nn||(We-Ce)/W===le?0:le),p&&_&&(xe._pinOffset=Math.round(R.progress*Ae)),q&&q.invalidate(),isNaN(He)||(He-=we.getProperty(F,y.p),Zi-=we.getProperty($e,y.p),vc(F,y,He),vc(Re,y,He-(Ge||0)),vc($e,y,Zi),vc(Le,y,Zi-(Ge||0))),nn&&!On&&R.update(),c&&!On&&!w&&(w=!0,c(R),w=!1)}},R.getVelocity=function(){return(te()-Me)/(En()-Dl)*1e3||0},R.endAnimation=function(){yl(R.callbackAnimation),r&&(q?q.progress(1):r.paused()?N||yl(r,R.direction<0,1):yl(r,r.reversed()))},R.labelToScroll=function(pe){return r&&r.labels&&(Ce||R.refresh()||Ce)+r.labels[pe]/r.duration()*W||0},R.getTrailing=function(pe){var Xe=tt.indexOf(R),De=R.direction>0?tt.slice(0,Xe).reverse():tt.slice(Xe+1);return(li(pe)?De.filter(function(Ge){return Ge.vars.preventOverlaps===pe}):De).filter(function(Ge){return R.direction>0?Ge.end<=Ce:Ge.start>=ve})},R.update=function(pe,Xe,De){if(!(E&&!De&&!pe)){var Ge=On===!0?je:R.scroll(),Lt=pe?0:(Ge-Ce)/W,et=Lt<0?0:Lt>1?1:Lt||0,Ct=R.progress,nn,Rt,yt,A,O,z,B,V;if(Xe&&(Me=We,We=E?te():Ge,S&&(I=Be,Be=r&&!N?r.totalProgress():et)),m&&p&&!Mn&&!fc&&Ni&&(!et&&Ce<Ge+(Ge-Me)/(En()-Dl)*m?et=1e-4:et===1&&ve>Ge+(Ge-Me)/(En()-Dl)*m&&(et=.9999)),et!==Ct&&R.enabled){if(nn=R.isActive=!!et&&et<1,Rt=!!Ct&&Ct<1,z=nn!==Rt,O=z||!!et!=!!Ct,R.direction=et>Ct?1:-1,R.progress=et,O&&!Mn&&(yt=et&&!Ct?0:et===1?1:Ct===1?2:3,N&&(A=!z&&Y[yt+1]!=="none"&&Y[yt+1]||Y[yt],V=r&&(A==="complete"||A==="reset"||A in r))),M&&(z||V)&&(V||d||!r)&&(zn(M)?M(R):R.getTrailing(M).forEach(function(Ne){return Ne.endAnimation()})),N||(q&&!Mn&&!fc?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",et,r._tTime/r._tDur):(q.vars.totalProgress=et,q.invalidate().restart())):r&&r.totalProgress(et,!!(Mn&&(J||pe)))),p){if(pe&&_&&(xe.style[_+y.os2]=Qe),!j)ke(Ul(ue+Ae*et));else if(O){if(B=!pe&&et>Ct&&ve+1>Ge&&Ge+1>=ur(U,y),C)if(!pe&&(nn||B)){var ce=Pr(p,!0),me=Ge-Ce;U0(p,wt,ce.top+(y===Zt?me:0)+$t,ce.left+(y===Zt?0:me)+$t)}else U0(p,xe);Ia(nn||B?ie:re),ze&&et<1&&nn||ke(ue+(et===1&&!B?Ae:0))}}S&&!Ue.tween&&!Mn&&!fc&&he.restart(!0),a&&(z||x&&et&&(et<1||!fh))&&Pu(a.targets).forEach(function(Ne){return Ne.classList[nn||x?"add":"remove"](a.className)}),o&&!N&&!pe&&o(R),O&&!Mn?(N&&(V&&(A==="complete"?r.pause().totalProgress(1):A==="reset"?r.restart(!0).pause():A==="restart"?r.restart(!0):r[A]()),o&&o(R)),(z||!fh)&&(u&&z&&hh(R,u),K[yt]&&hh(R,K[yt]),x&&(et===1?R.kill(!1,1):K[yt]=0),z||(yt=et===1?1:3,K[yt]&&hh(R,K[yt]))),P&&!nn&&Math.abs(R.getVelocity())>(Il(P)?P:2500)&&(yl(R.callbackAnimation),q?q.progress(1):yl(r,A==="reverse"?1:!et,1))):N&&o&&!Mn&&o(R)}if(Ye){var _e=E?Ge/E.duration()*(E._caScrollDist||0):Ge;Se(_e+(F._isFlipped?1:0)),Ye(_e)}ht&&ht(-Ge/E.duration()*(E._caScrollDist||0))}},R.enable=function(pe,Xe){R.enabled||(R.enabled=!0,on(U,"resize",Ol),X||on(U,"scroll",zo),ne&&on(n,"refreshInit",ne),pe!==!1&&(R.progress=le=0,We=Me=H=te()),Xe!==!1&&R.refresh())},R.getTween=function(pe){return pe&&Ue?Ue.tween:q},R.setPositions=function(pe,Xe,De,Ge){if(E){var Lt=E.scrollTrigger,et=E.duration(),Ct=Lt.end-Lt.start;pe=Lt.start+Ct*pe/et,Xe=Lt.start+Ct*Xe/et}R.refresh(!1,!1,{start:w0(pe,De&&!!R._startClamp),end:w0(Xe,De&&!!R._endClamp)},Ge),R.update()},R.adjustPinSpacing=function(pe){if(ye&&pe){var Xe=ye.indexOf(y.d)+1;ye[Xe]=parseFloat(ye[Xe])+pe+$t,ye[1]=parseFloat(ye[1])+pe+$t,Ia(ye)}},R.disable=function(pe,Xe){if(R.enabled&&(pe!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Xe||q&&q.pause(),je=0,Ie&&(Ie.uncache=1),ne&&sn(n,"refreshInit",ne),he&&(he.pause(),Ue.tween&&Ue.tween.kill()&&(Ue.tween=0)),!X)){for(var De=tt.length;De--;)if(tt[De].scroller===U&&tt[De]!==R)return;sn(U,"resize",Ol),X||sn(U,"scroll",zo)}},R.kill=function(pe,Xe){R.disable(pe,Xe),q&&!Xe&&q.kill(),l&&delete fm[l];var De=tt.indexOf(R);De>=0&&tt.splice(De,1),De===In&&lf>0&&In--,De=0,tt.forEach(function(Ge){return Ge.scroller===R.scroller&&(De=1)}),De||On||(R.scroll.rec=0),r&&(r.scrollTrigger=null,pe&&r.revert({kill:!1}),Xe||r.kill()),Re&&[Re,Le,F,$e].forEach(function(Ge){return Ge.parentNode&&Ge.parentNode.removeChild(Ge)}),ru===R&&(ru=0),p&&(Ie&&(Ie.uncache=1),De=0,tt.forEach(function(Ge){return Ge.pin===p&&De++}),De||(Ie.spacer=0)),i.onKill&&i.onKill(R)},tt.push(R),R.enable(!1,!1),xt&&xt(R),r&&r.add&&!W){var at=R.update;R.update=function(){R.update=at,Ce||ve||R.refresh()},we.delayedCall(.01,R.update),W=.01,Ce=ve=0}else R.refresh();p&&TA()},n.register=function(i){return oa||(we=i||NM(),DM()&&window.document&&n.enable(),oa=Nl),oa},n.defaults=function(i){if(i)for(var r in i)mc[r]=i[r];return mc},n.disable=function(i,r){Nl=0,tt.forEach(function(o){return o[r?"kill":"disable"](i)}),sn(st,"wheel",zo),sn(Dt,"scroll",zo),clearInterval(cc),sn(Dt,"touchcancel",tr),sn(wt,"touchstart",tr),hc(sn,Dt,"pointerdown,touchstart,mousedown",A0),hc(sn,Dt,"pointerup,touchend,mouseup",C0),Wf.kill(),dc(sn);for(var s=0;s<nt.length;s+=3)pc(sn,nt[s],nt[s+1]),pc(sn,nt[s],nt[s+2])},n.enable=function(){if(st=window,Dt=document,Xi=Dt.documentElement,wt=Dt.body,we&&(Pu=we.utils.toArray,Jl=we.utils.clamp,um=we.core.context||tr,ch=we.core.suppressOverwrites||tr,Ug=st.history.scrollRestoration||"auto",dm=st.pageYOffset,we.core.globals("ScrollTrigger",n),wt)){Nl=1,Ua=document.createElement("div"),Ua.style.height="100vh",Ua.style.position="absolute",VM(),_A(),Gt.register(we),n.isTouch=Gt.isTouch,Jr=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lm=Gt.isTouch===1,on(st,"wheel",zo),CM=[st,Dt,Xi,wt],we.matchMedia?(n.matchMedia=function(l){var u=we.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},we.addEventListener("matchMediaInit",function(){return Bg()}),we.addEventListener("matchMediaRevert",function(){return BM()}),we.addEventListener("matchMedia",function(){oo(0,1),Po("matchMedia")}),we.matchMedia("(orientation: portrait)",function(){return ph(),ph})):console.warn("Requires GSAP 3.11.0 or later"),ph(),on(Dt,"scroll",zo);var i=wt.style,r=i.borderTopStyle,s=we.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Pr(wt),Zt.m=Math.round(o.top+Zt.sc())||0,kn.m=Math.round(o.left+kn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),cc=setInterval(b0,250),we.delayedCall(.5,function(){return fc=0}),on(Dt,"touchcancel",tr),on(wt,"touchstart",tr),hc(on,Dt,"pointerdown,touchstart,mousedown",A0),hc(on,Dt,"pointerup,touchend,mouseup",C0),am=we.utils.checkPrefix("transform"),uf.push(am),oa=En(),Wf=we.delayedCall(.2,oo).pause(),aa=[Dt,"visibilitychange",function(){var l=st.innerWidth,u=st.innerHeight;Dt.hidden?(M0=l,E0=u):(M0!==l||E0!==u)&&Ol()},Dt,"DOMContentLoaded",oo,st,"load",oo,st,"resize",Ol],dc(on),tt.forEach(function(l){return l.enable(0,1)}),a=0;a<nt.length;a+=3)pc(sn,nt[a],nt[a+1]),pc(sn,nt[a],nt[a+2])}},n.config=function(i){"limitCallbacks"in i&&(fh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(cc)||(cc=r)&&setInterval(b0,r),"ignoreMobileResize"in i&&(lm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(dc(sn)||dc(on,i.autoRefreshEvents||"none"),PM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Wn(i),o=nt.indexOf(s),a=Co(s);~o&&nt.splice(o,a?6:2),r&&(a?mr.unshift(st,r,wt,r,Xi,r):mr.unshift(s,r))},n.clearMatchMedia=function(i){tt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(li(i)?Wn(i):i).getBoundingClientRect(),a=o[s?go:_o]*r||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},n.positionInViewport=function(i,r,s){li(i)&&(i=Wn(i));var o=i.getBoundingClientRect(),a=o[s?go:_o],l=r==null?a/2:r in Yf?Yf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},n.killAll=function(i){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Ro.killAll||[];Ro={},r.forEach(function(s){return s()})}},n}();Je.version="3.12.5";Je.saveStyles=function(n){return n?Pu(n).forEach(function(e){if(e&&e.style){var t=oi.indexOf(e);t>=0&&oi.splice(t,5),oi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),um())}}):oi};Je.revert=function(n,e){return Bg(!n,e)};Je.create=function(n,e){return new Je(n,e)};Je.refresh=function(n){return n?Ol():(oa||Je.register())&&oo(!0)};Je.update=function(n){return++nt.cache&&Ir(n===!0?2:0)};Je.clearScrollMemory=HM;Je.maxScroll=function(n,e){return ur(n,e?kn:Zt)};Je.getScrollFunc=function(n,e){return bs(Wn(n),e?kn:Zt)};Je.getById=function(n){return fm[n]};Je.getAll=function(){return tt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!Ni};Je.snapDirectional=zg;Je.addEventListener=function(n,e){var t=Ro[n]||(Ro[n]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(n,e){var t=Ro[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Je.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=we.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&zn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return zn(s)&&(s=s(),on(Je,"refresh",function(){return s=e.batchMax()})),Pu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Je.create(u))}),t};var O0=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},gh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===Xi&&n(wt,t)},xc={auto:1,scroll:1},PA=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=En(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(xc[(l=Ci(s)).overflowY]||xc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Co(s)&&(xc[(l=Ci(s)).overflowY]||xc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},WM=function(e,t,i,r){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&PA,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&on(Dt,Gt.eventTypes[0],k0,!1,!0)},onDisable:function(){return sn(Dt,Gt.eventTypes[0],k0,!0)}})},bA=/(input|label|select|textarea)/i,F0,k0=function(e){var t=bA.test(e.target.tagName);(t||F0)&&(e._gsapAllow=!0,F0=t)},LA=function(e){Zs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Wn(e.target)||Xi,c=we.core.globals().ScrollSmoother,d=c&&c.get(),f=Jr&&(e.content&&Wn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=bs(u,Zt),_=bs(u,kn),g=1,m=(Gt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,h=0,v=zn(r)?function(){return r(a)}:function(){return r||2.8},x,S,C=WM(u,e.type,!0,s),T=function(){return S=!1},E=tr,P=tr,M=function(){l=ur(u,Zt),P=Jl(Jr?1:0,l),i&&(E=Jl(0,ur(u,kn))),x=vo},y=function(){f._gsap.y=Ul(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},N=function(){if(S){requestAnimationFrame(T);var L=Ul(a.deltaY/2),G=P(p.v-L);if(f&&G!==p.v+p.offset){p.offset=G-p.v;var R=Ul((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",p.cacheID=nt.cache,Ir()}return!0}p.offset&&y(),S=!0},U,D,X,j,K=function(){M(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return Jr&&Y.type==="touchmove"&&N()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=g;g=Ul((st.visualViewport&&st.visualViewport.scale||1)/m),U.pause(),Y!==g&&gh(u,g>1.01?!0:i?!1:"x"),D=_(),X=p(),M(),x=vo},e.onRelease=e.onGestureStart=function(Y,L){if(p.offset&&y(),!L)j.restart(!0);else{nt.cache++;var G=v(),R,ne;i&&(R=_(),ne=R+G*.05*-Y.velocityX/.227,G*=O0(_,R,ne,ur(u,kn)),U.vars.scrollX=E(ne)),R=p(),ne=R+G*.05*-Y.velocityY/.227,G*=O0(p,R,ne,ur(u,Zt)),U.vars.scrollY=P(ne),U.invalidate().duration(G).play(.01),(Jr&&U.vars.scrollY>=l||R>=l-1)&&we.to({},{onUpdate:K,duration:G})}o&&o(Y)},e.onWheel=function(){U._ts&&U.pause(),En()-h>1e3&&(x=0,h=En())},e.onChange=function(Y,L,G,R,ne){if(vo!==x&&M(),L&&i&&_(E(R[2]===L?D+(Y.startX-Y.x):_()+L-R[1])),G){p.offset&&y();var ee=ne[2]===G,Fe=ee?X+Y.startY-Y.y:p()+G-ne[1],H=P(Fe);ee&&Fe!==H&&(X+=H-Fe),p(H)}(G||L)&&Ir()},e.onEnable=function(){gh(u,i?!1:"x"),Je.addEventListener("refresh",K),on(st,"resize",K),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){gh(u,!0),sn(st,"resize",K),Je.removeEventListener("refresh",K),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=Jr,Jr&&!p()&&p(1),Jr&&we.ticker.add(tr),j=a._dc,U=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:GM(p,p(),function(){return U.pause()})},onUpdate:Ir,onComplete:j.vars.onComplete}),a};Je.sort=function(n){return tt.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Je.observe=function(n){return new Gt(n)};Je.normalizeScroll=function(n){if(typeof n>"u")return Nn;if(n===!0&&Nn)return Nn.enable();if(n===!1){Nn&&Nn.kill(),Nn=n;return}var e=n instanceof Gt?n:LA(n);return Nn&&Nn.target===e.target&&Nn.kill(),Co(e.target)&&(Nn=e),e};Je.core={_getVelocityProp:om,_inputObserver:WM,_scrollers:nt,_proxies:mr,bridge:{ss:function(){Ni||Po("scrollStart"),Ni=En()},ref:function(){return Mn}}};NM()&&we.registerPlugin(Je);const DA=()=>{const n=td.useRef(null);return Uo(()=>{const e=zt.utils.toArray(".desktop-image:not(:first-child)"),t=zt.utils.toArray(".desktop-image-obj").slice(1),i=zt.utils.toArray(".desktop-detail"),r=zt.utils.toArray(".desktop-image");zt.set(e,{yPercent:150}),zt.set(t,{yPercent:-150}),i.forEach((s,o)=>{const a=zt.timeline().to(e[o],{yPercent:0}).set(r[o],{autoAlpha:0});Je.create({trigger:`.trigger-${o}`,start:"center 99%",end:"bottom 1%",animation:a,scrub:!0})}),i.forEach((s,o)=>{const a=zt.timeline().to(t[o],{yPercent:0});Je.create({trigger:`.trigger-${o}`,start:"center 99%",end:"bottom 1%",animation:a,scrub:!0})}),zt.to("#projects",{scrollTrigger:{trigger:"#projects",pin:"#project-images",start:"top top",end:"bottom bottom"}})},[]),se.jsxs(se.Fragment,{children:[se.jsxs("div",{id:"projects",className:"relative z-10 flex min-h-screen w-screen flex-col items-center justify-center bg-transparent ",children:[se.jsxs("div",{className:"hidden lg:flex w-full",children:[se.jsxs("article",{className:"w-1/2 justify-center ",children:[se.jsx(Ho,{name:"Shortbread.ai Engine",text:"Developed a Webtoon / Webcomics editing experience from scratch that enables users to create and edit webcomics  working closely with the product designer to create a scalable and robust architecture that would guarantee the product to grow without compromising core features. Worked on integrating backend APIs that generated / enhanced / edited images with AI generative models."}),se.jsx("div",{className:"trigger-0"}),se.jsx(Ho,{name:"GrocerSave App",text:`Developed front end features for a crowd sourced grocery list React Native App. Worked closely with the Product Manager to develop specific workflows that enabled potential power users to perform mass data update operations with a focus on data integrity and ease of use.
              Developed backend features that enabled the automation for mass product updates and allowed out backend interact with core aws services.`}),se.jsx("div",{className:"trigger-1"}),se.jsx(Ho,{name:"Incept Landing Page",text:"Developed a responsive pixel-perfect website, assisted a webgl developer to ensure the component structure to fit the needs for three.js to run and adjust properly to the end design."}),se.jsx("div",{className:"trigger-2"}),se.jsx(Ho,{name:"Climatika App",text:"Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well."}),se.jsx("div",{className:"trigger-3"}),se.jsx(Ho,{name:"Dvinum",text:"Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Diagnosed and refactored most of the data fetching pipeline and improved load times and app responsiveness overall."}),se.jsx("div",{className:"trigger-4"}),se.jsx(Ho,{name:"Mesa Premium",text:"Developed a mobile app that allows businesses to manage online bookings, customer information and realtime seat availability, working closely with the design team to provide the best UI experience for our customers."})]}),se.jsx("div",{id:"project-images",className:"w-1/2 overflow-hidden h-screen flex justify-center items-center ",children:se.jsxs("div",{id:"image-container",className:"h-[400px] max-h-[400px] w-[700px] max-w-[700px] relative rounded-lg overflow-hidden shadow-xl",children:[se.jsx(Vo,{img:"shortbread.jpeg"}),se.jsx(Vo,{img:"N/A",grocer:!0}),se.jsx(Vo,{img:"incept.webp"}),se.jsx(Vo,{img:"climatika.png"}),se.jsx(Vo,{img:"dvinum.jpeg"}),se.jsx(Vo,{img:"mesap.png"})]})})]}),se.jsxs("article",{className:"mb-2 mt-8 w-full max-w-[1200px] pt-20 block lg:hidden ",children:[se.jsx(Bo,{name:"Shortbread.ai Engine",text:"Developed a Webtoon / Webcomics editing experience from scratch that enables users to create and edit webcomics  working closely with the product designer to create a scalable and robust architecture that would guarantee the product to grow without compromising core features. Worked on integrating backend APIs that generated / enhanced / edited images with AI generative models.",imgSrc:"shortbread.jpeg",order:1}),se.jsx(Bo,{name:"GrocerSave App",text:`Developed front end features for a crowd sourced grocery list React Native App. Worked closely with the Product Manager to develop specific workflows that enabled potential power users to perform mass data update operations with a focus on data integrity and ease of use.
            Developed backend features that enabled the automation for mass product updates and allowed out backend interact with core aws services.`,imgSrc:"N/A",order:2,grocer:!0}),se.jsx(Bo,{name:"Incept Landing Page",text:"Developed a responsive pixel-perfect website, assisted a webgl developer to ensure the component structure to fit the needs for three.js to run and adjust properly to the end design.",imgSrc:"incept.webp",order:3}),se.jsx(Bo,{name:"Climatika App",text:"Developed an interactive control system for the product Climatika (a self supporting pergola product from the company Glass) that allowed users to update a 3d model of the product in real time. Worked closely with a WebGL developer to integrate both systems and with UX/UI Designers as well.",imgSrc:"climatika.png",order:4}),se.jsx(Bo,{name:"Dvinum",text:"Refined an old mobile first, web app so it could bring new types of customers further improving usability, responsiveness, design, business growth and scalability. Diagnosed and refactored most of the data fetching pipeline and improved load times and app responsiveness overall.",imgSrc:"dvinum.jpeg",order:5})]})]}),se.jsx("div",{className:"sticky top-16 z-10 mt-[-1px] flex w-screen flex-col items-center justify-center bg-white-bone lg:hidden",ref:n,children:se.jsx("article",{id:"last-project",className:"mb-2 w-full max-w-[1200px] pb-20 block ",children:se.jsx(Bo,{name:"Mesa Premium",text:"Developed a mobile app that allows businesses to manage online bookings, customer information and realtime seat availability, working closely with the design team to provide the best UI experience for our customers.",imgSrc:"mesap.png",order:6})})})]})},Bo=n=>se.jsxs("div",{className:`flex w-full h-full flex-col justify-center items-center  mt-10 z-[${n.order}] `,children:[se.jsx("div",{className:"rounded overflow-hidden h-fit w-fit shadow-xl mx-4 mb-2 ",children:n.grocer?se.jsxs("div",{className:"bg-[#659952] w-[92vw] h-full flex justify-center items-center flex-col",children:[se.jsx("img",{src:"grocer.svg",alt:"img",className:"w-[200px] h-auto"}),se.jsx("p",{className:"text-black-soft font-chivo text-2xl italic text-left",children:"Grocersave"})]}):se.jsx("img",{src:n.imgSrc,className:" max-w-3/4 h-auto w-[600px]  transition-all duration-300 "})}),se.jsxs("div",{className:"flex w-full flex-col items-center justify-center",children:[se.jsx("p",{className:"text-black-soft font-chivo text-2xl italic text-center ",children:n.name}),se.jsx("div",{className:"p-6",children:se.jsx("p",{className:"text-black-soft max-w-[500px] font-openSans text-center italic text-sm",children:n.text})})]}),se.jsx("hr",{className:"border-black-soft mx-4 opacity-20"})]}),Ho=n=>se.jsxs("div",{className:"flex flex-col items-center justify-center  desktop-detail w-full h-[calc(100vh-6rem)]",children:[se.jsx("p",{className:"text-black-soft font-chivo text-2xl italic text-left name-trigger invert ",children:n.name}),se.jsx("div",{className:"p-6 ",children:se.jsx("p",{className:"text-white-bone max-w-[500px] font-openSans text-left italic text-md  bg-black",children:n.text})})]}),Vo=n=>n.grocer?se.jsx("div",{className:"flex flex-col items-center justify-center desktop-image absolute w-[700px] h-[400px] top-0 left-0 overflow-hidden  ",children:se.jsxs("div",{className:"bg-[#659952] w-[700px] h-[400px] flex justify-center items-center flex-col absolute top-0 left-0 desktop-image-obj ",children:[se.jsx("img",{src:"grocer.svg",alt:"img",className:"w-[200px] h-auto"}),se.jsx("p",{className:"text-black-soft font-chivo text-2xl italic text-left ",children:"Grocersave"})]})}):se.jsx("div",{className:"flex flex-col items-center justify-center desktop-image w-[700px] h-[400px] top-0 left-0 overflow-hidden absolute ",children:se.jsx("img",{src:n.img,alt:"img",className:"max-w-[700px] w-[700px] h-[400px] absolute desktop-image-obj object-cover "})}),NA=()=>se.jsx("div",{id:"resume",className:"w-screen flex justify-center min-h-[100px] bg-white-bone z-30 mt-[-1px] sticky top-24 border-t border-t-black-soft ",children:se.jsx("div",{className:"flex  max-w-[1200px] w-full flex-col justify-start md:justify-center md:py-12 md:px -6 p-4 ",children:se.jsx("div",{className:"w-full h-full flex items-center justify-end",children:se.jsxs("div",{className:"flex flex-col items-start justify-center  desktop-detail w-full ",children:[se.jsx("p",{className:"text-black-soft font-chivo text-2xl italic text-right name-trigger  mb-2 ",children:"Contact me"}),se.jsxs("div",{className:"",children:[se.jsx("a",{href:"mailto:urdntjuan@gmail.com",children:se.jsx("p",{className:"text-black-soft max-w-[500px] text-left font-openSans text-lg",children:"urdntjuan@gmail.com"})}),se.jsx("a",{href:"https://twitter.com/JuanUrdane54430",children:se.jsx("p",{className:"text-black-soft max-w-[500px] text-left font-openSans text-lg",children:"Twitter"})})]})]})})})}),UA=()=>(Uo(()=>{zt.to("#innerTechstack",{opacity:.6,scrollTrigger:{trigger:"#techstack",start:"top top",scrub:!0}})},[]),se.jsx("div",{id:"techstack",className:"w-screen flex flex-col justify-center items-center bg-black-soft sticky top-24 z-20 mt-[-1px] border-t border-t-black-soft ",children:se.jsxs("section",{id:"innerTechstack",className:"w-full max-w-[1200px] my-2 flex justify-around md:justify-between py-4 flex-wrap",children:[se.jsx("img",{src:"ts.svg",className:"w-[100px] md:w-[150px] invert grayscale"}),se.jsx("img",{src:"nextjs.svg",className:"w-[100px] md:w-[150px] grayscale invert"}),se.jsx("img",{src:"tailwindcss.svg",className:"w-[100px] md:w-[150px] grayscale invert"}),se.jsx("img",{src:"firebase.svg",className:"w-[100px] md:w-[150px] grayscale"}),se.jsx("img",{src:"aws.svg",className:"w-[100px] md:w-[150px] grayscale invert"})]})}));var pm=function(){return pm=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},pm.apply(this,arguments)};function XM(n,e,t){return Math.max(n,Math.min(e,t))}class IA{advance(e){var a;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(i=this.value,r=this.to,s=60*this.lerp,o=e,function(l,u,c){return(1-c)*l+c*u}(i,r,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=XM(0,this.currentTime/this.duration,1);t=l>=1;const u=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*u}var i,r,s,o;(a=this.onUpdate)==null||a.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i=.1,duration:r=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class OA{constructor({wrapper:e,content:t,autoResize:i=!0,debounce:r=250}={}){vr(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});vr(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});vr(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,i&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,u=this;clearTimeout(a),a=setTimeout(function(){s.apply(u,l)},o)}}(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class jM{constructor(){this.events={}}emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)}on(e,t){var i;return(i=this.events[e])!=null&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(s=>t!==s)}}off(e,t){var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(r=>t!==r)}destroy(){this.events={}}}const z0=100/6;class FA{constructor(e,{wheelMultiplier:t=1,touchMultiplier:i=1}){vr(this,"onTouchStart",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});vr(this,"onTouchMove",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:e})});vr(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});vr(this,"onWheel",e=>{let{deltaX:t,deltaY:i,deltaMode:r}=e;t*=r===1?z0:r===2?this.windowWidth:1,i*=r===1?z0:r===2?this.windowHeight:1,t*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})});vr(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new jM,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}var kA=function(){function n(e){var t=e===void 0?{}:e,i=t.wrapper,r=i===void 0?window:i,s=t.content,o=s===void 0?document.documentElement:s,a=t.wheelEventsTarget,l=a===void 0?r:a,u=t.eventsTarget,c=u===void 0?l:u,d=t.smoothWheel,f=d===void 0||d,p=t.syncTouch,_=p!==void 0&&p,g=t.syncTouchLerp,m=g===void 0?.075:g,h=t.touchInertiaMultiplier,v=h===void 0?35:h,x=t.duration,S=t.easing,C=S===void 0?function(Fe){return Math.min(1,1.001-Math.pow(2,-10*Fe))}:S,T=t.lerp,E=T===void 0?!x&&.1:T,P=t.infinite,M=P!==void 0&&P,y=t.orientation,N=y===void 0?"vertical":y,U=t.gestureOrientation,D=U===void 0?"vertical":U,X=t.touchMultiplier,j=X===void 0?1:X,K=t.wheelMultiplier,Y=K===void 0?1:K,L=t.autoResize,G=L===void 0||L,R=t.__experimental__naiveDimensions,ne=R!==void 0&&R,ee=this;this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=function(Fe){var H=Fe.deltaX,J=Fe.deltaY,le=Fe.event;if(!le.ctrlKey){var te=le.type.includes("touch"),Ue=le.type.includes("wheel");if(ee.options.syncTouch&&te&&le.type==="touchstart"&&!ee.isStopped&&!ee.isLocked)ee.reset();else{var Ie=H===0&&J===0,k=ee.options.gestureOrientation==="vertical"&&J===0||ee.options.gestureOrientation==="horizontal"&&H===0;if(!Ie&&!k){var We=le.composedPath();if(!(We=We.slice(0,We.indexOf(ee.rootElement))).find(function(Re){var Le,F,$e,b,w;return((Le=Re.hasAttribute)===null||Le===void 0?void 0:Le.call(Re,"data-lenis-prevent"))||te&&((F=Re.hasAttribute)===null||F===void 0?void 0:F.call(Re,"data-lenis-prevent-touch"))||Ue&&(($e=Re.hasAttribute)===null||$e===void 0?void 0:$e.call(Re,"data-lenis-prevent-wheel"))||((b=Re.classList)===null||b===void 0?void 0:b.contains("lenis"))&&!(!((w=Re.classList)===null||w===void 0)&&w.contains("lenis-stopped"))}))if(ee.isStopped||ee.isLocked)le.preventDefault();else{if(ee.isSmooth=ee.options.syncTouch&&te||ee.options.smoothWheel&&Ue,!ee.isSmooth)return ee.isScrolling=!1,void ee.animate.stop();le.preventDefault();var Me=J;ee.options.gestureOrientation==="both"?Me=Math.abs(J)>Math.abs(H)?J:H:ee.options.gestureOrientation==="horizontal"&&(Me=H);var Ce=te&&ee.options.syncTouch,ve=te&&le.type==="touchend"&&Math.abs(Me)>5;ve&&(Me=ee.velocity*ee.options.touchInertiaMultiplier),ee.scrollTo(ee.targetScroll+Me,pm({programmatic:!1},Ce?{lerp:ve?ee.options.syncTouchLerp:1}:{lerp:ee.options.lerp,duration:ee.options.duration,easing:ee.options.easing}))}}}}},this.onNativeScroll=function(){if(!ee.__preventNextScrollEvent&&!ee.isScrolling){var Fe=ee.animatedScroll;ee.animatedScroll=ee.targetScroll=ee.actualScroll,ee.velocity=0,ee.direction=Math.sign(ee.animatedScroll-Fe),ee.emit()}},window.lenisVersion="1.0.44",r!==document.documentElement&&r!==document.body||(r=window),this.options={wrapper:r,content:o,wheelEventsTarget:l,eventsTarget:c,smoothWheel:f,syncTouch:_,syncTouchLerp:m,touchInertiaMultiplier:v,duration:x,easing:C,lerp:E,infinite:M,gestureOrientation:D,orientation:N,touchMultiplier:j,wheelMultiplier:Y,autoResize:G,__experimental__naiveDimensions:ne},this.animate=new IA,this.emitter=new jM,this.dimensions=new OA({wrapper:r,content:o,autoResize:G}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=_||f,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new FA(c,{touchMultiplier:j,wheelMultiplier:Y}),this.virtualScroll.on("scroll",this.onVirtualScroll)}return n.prototype.destroy=function(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)},n.prototype.on=function(e,t){return this.emitter.on(e,t)},n.prototype.off=function(e,t){return this.emitter.off(e,t)},n.prototype.setScroll=function(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e},n.prototype.resize=function(){this.dimensions.resize()},n.prototype.emit=function(){this.emitter.emit("scroll",this)},n.prototype.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()},n.prototype.start=function(){this.isStopped&&(this.isStopped=!1,this.reset())},n.prototype.stop=function(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())},n.prototype.raf=function(e){var t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)},n.prototype.scrollTo=function(e,t){var i=this,r=t===void 0?{}:t,s=r.offset,o=s===void 0?0:s,a=r.immediate,l=a!==void 0&&a,u=r.lock,c=u!==void 0&&u,d=r.duration,f=d===void 0?this.options.duration:d,p=r.easing,_=p===void 0?this.options.easing:p,g=r.lerp,m=g===void 0?!f&&this.options.lerp:g,h=r.onComplete,v=r.force,x=v!==void 0&&v,S=r.programmatic,C=S===void 0||S;if(!this.isStopped&&!this.isLocked||x){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{var T=void 0;if(typeof e=="string"?T=document.querySelector(e):e!=null&&e.nodeType&&(T=e),T){if(this.options.wrapper!==window){var E=this.options.wrapper.getBoundingClientRect();o-=this.isHorizontal?E.left:E.top}var P=T.getBoundingClientRect();e=(this.isHorizontal?P.left:P.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=o,e=Math.round(e),this.options.infinite?C&&(this.targetScroll=this.animatedScroll=this.scroll):e=XM(0,e,this.limit),l)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(h==null||h(this));if(!C){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:f,easing:_,lerp:m,onStart:function(){c&&(i.isLocked=!0),i.isScrolling=!0},onUpdate:function(M,y){i.isScrolling=!0,i.velocity=M-i.animatedScroll,i.direction=Math.sign(i.velocity),i.animatedScroll=M,i.setScroll(i.scroll),C&&(i.targetScroll=M),y||i.emit(),y&&(i.reset(),i.emit(),h==null||h(i),i.__preventNextScrollEvent=!0,requestAnimationFrame(function(){delete i.__preventNextScrollEvent}))}})}}},Object.defineProperty(n.prototype,"rootElement",{get:function(){return this.options.wrapper===window?document.documentElement:this.options.wrapper},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"limit",{get:function(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isHorizontal",{get:function(){return this.options.orientation==="horizontal"},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"actualScroll",{get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"scroll",{get:function(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"progress",{get:function(){return this.limit===0?1:this.scroll/this.limit},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isSmooth",{get:function(){return this.__isSmooth},set:function(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isScrolling",{get:function(){return this.__isScrolling},set:function(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isStopped",{get:function(){return this.__isStopped},set:function(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isLocked",{get:function(){return this.__isLocked},set:function(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"className",{get:function(){var e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e},enumerable:!1,configurable:!0}),n.prototype.toggleClassName=function(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)},n}();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hg="164",zA=0,B0=1,BA=2,YM=1,HA=2,Tr=3,Ls=0,ti=1,or=2,Ts=0,Oa=1,H0=2,V0=3,G0=4,VA=5,eo=100,GA=101,WA=102,XA=103,jA=104,YA=200,qA=201,$A=202,KA=203,mm=204,gm=205,ZA=206,QA=207,JA=208,eC=209,tC=210,nC=211,iC=212,rC=213,sC=214,oC=0,aC=1,lC=2,qf=3,uC=4,cC=5,fC=6,dC=7,qM=0,hC=1,pC=2,ws=0,mC=1,gC=2,_C=3,vC=4,xC=5,yC=6,SC=7,$M=300,Ja=301,el=302,_m=303,vm=304,Sd=306,xm=1e3,ao=1001,ym=1002,Li=1003,MC=1004,yc=1005,Yi=1006,_h=1007,lo=1008,Ds=1009,EC=1010,TC=1011,KM=1012,ZM=1013,tl=1014,ds=1015,Md=1016,QM=1017,JM=1018,ku=1020,wC=35902,AC=1021,CC=1022,cr=1023,RC=1024,PC=1025,Fa=1026,Lu=1027,bC=1028,e1=1029,LC=1030,t1=1031,n1=1033,vh=33776,xh=33777,yh=33778,Sh=33779,W0=35840,X0=35841,j0=35842,Y0=35843,q0=36196,$0=37492,K0=37496,Z0=37808,Q0=37809,J0=37810,ev=37811,tv=37812,nv=37813,iv=37814,rv=37815,sv=37816,ov=37817,av=37818,lv=37819,uv=37820,cv=37821,Mh=36492,fv=36494,dv=36495,DC=36283,hv=36284,pv=36285,mv=36286,NC=3200,UC=3201,IC=0,OC=1,rs="",nr="srgb",Fs="srgb-linear",Vg="display-p3",Ed="display-p3-linear",$f="linear",Tt="srgb",Kf="rec709",Zf="p3",Go=7680,gv=519,FC=512,kC=513,zC=514,i1=515,BC=516,HC=517,VC=518,GC=519,_v=35044,vv="300 es",Nr=2e3,Qf=2001;class al{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eh=Math.PI/180,Sm=180/Math.PI;function zu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function jn(n,e,t){return Math.max(e,Math.min(t,n))}function WC(n,e){return(n%e+e)%e}function Th(n,e,t){return(1-t)*n+t*e}function Sl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,i,r,s,o,a,l,u){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],v=r[1],x=r[4],S=r[7],C=r[2],T=r[5],E=r[8];return s[0]=o*g+a*v+l*C,s[3]=o*m+a*x+l*T,s[6]=o*h+a*S+l*E,s[1]=u*g+c*v+d*C,s[4]=u*m+c*x+d*T,s[7]=u*h+c*S+d*E,s[2]=f*g+p*v+_*C,s[5]=f*m+p*x+_*T,s[8]=f*h+p*S+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wh.makeScale(e,t)),this}rotate(e){return this.premultiply(wh.makeRotation(-e)),this}translate(e,t){return this.premultiply(wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new Ze;function r1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Jf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XC(){const n=Jf("canvas");return n.style.display="block",n}const xv={};function jC(n){n in xv||(xv[n]=!0,console.warn(n))}const yv=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sv=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sc={[Fs]:{transfer:$f,primaries:Kf,toReference:n=>n,fromReference:n=>n},[nr]:{transfer:Tt,primaries:Kf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ed]:{transfer:$f,primaries:Zf,toReference:n=>n.applyMatrix3(Sv),fromReference:n=>n.applyMatrix3(yv)},[Vg]:{transfer:Tt,primaries:Zf,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sv),fromReference:n=>n.applyMatrix3(yv).convertLinearToSRGB()}},YC=new Set([Fs,Ed]),gt={enabled:!0,_workingColorSpace:Fs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!YC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Sc[e].toReference,r=Sc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Sc[n].primaries},getTransfer:function(n){return n===rs?$f:Sc[n].transfer}};function ka(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ah(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wo;class qC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wo===void 0&&(Wo=Jf("canvas")),Wo.width=e.width,Wo.height=e.height;const i=Wo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ka(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ka(t[i]/255)*255):t[i]=ka(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $C=0;class s1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$C++}),this.uuid=zu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ch(r[o].image)):s.push(Ch(r[o]))}else s=Ch(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ch(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KC=0;class ni extends al{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,i=ao,r=ao,s=Yi,o=lo,a=cr,l=Ds,u=ni.DEFAULT_ANISOTROPY,c=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KC++}),this.uuid=zu(),this.name="",this.source=new s1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$M)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xm:e.x=e.x-Math.floor(e.x);break;case ao:e.x=e.x<0?0:1;break;case ym:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xm:e.y=e.y-Math.floor(e.y);break;case ao:e.y=e.y<0?0:1;break;case ym:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=$M;ni.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,i=0,r=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,C=(h+1)/2,T=(c+f)/4,E=(d+g)/4,P=(_+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=E/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=E/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZC extends al{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ni(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new s1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bo extends ZC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class o1 extends ni{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Li,this.minFilter=Li,this.wrapR=ao,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QC extends ni{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Li,this.minFilter=Li,this.wrapR=ao,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||u!==p||c!==_){let m=1-a;const h=l*f+u*p+c*_+d*g,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,h*v);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}const S=a*v;if(l=l*m+f*S,u=u*m+p*S,c=c*m+_*S,d=d*m+g*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-a*p,e[t+2]=u*_+c*p+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rh.copy(this).projectOnVector(e),this.sub(Rh)}reflect(e){return this.sub(Rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rh=new $,Mv=new Bu;class Hu{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ki):ki.fromBufferAttribute(s,o),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mc.copy(i.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ml),Ec.subVectors(this.max,Ml),Xo.subVectors(e.a,Ml),jo.subVectors(e.b,Ml),Yo.subVectors(e.c,Ml),Yr.subVectors(jo,Xo),qr.subVectors(Yo,jo),Hs.subVectors(Xo,Yo);let t=[0,-Yr.z,Yr.y,0,-qr.z,qr.y,0,-Hs.z,Hs.y,Yr.z,0,-Yr.x,qr.z,0,-qr.x,Hs.z,0,-Hs.x,-Yr.y,Yr.x,0,-qr.y,qr.x,0,-Hs.y,Hs.x,0];return!Ph(t,Xo,jo,Yo,Ec)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,Xo,jo,Yo,Ec))?!1:(Tc.crossVectors(Yr,qr),t=[Tc.x,Tc.y,Tc.z],Ph(t,Xo,jo,Yo,Ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new $,new $,new $,new $,new $,new $,new $,new $],ki=new $,Mc=new Hu,Xo=new $,jo=new $,Yo=new $,Yr=new $,qr=new $,Hs=new $,Ml=new $,Ec=new $,Tc=new $,Vs=new $;function Ph(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Vs.fromArray(n,s);const a=r.x*Math.abs(Vs.x)+r.y*Math.abs(Vs.y)+r.z*Math.abs(Vs.z),l=e.dot(Vs),u=t.dot(Vs),c=i.dot(Vs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const JC=new Hu,El=new $,bh=new $;class Gg{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):JC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const t=El.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(El,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add(bh)),this.expandByPoint(El.copy(e.center).sub(bh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yr=new $,Lh=new $,wc=new $,$r=new $,Dh=new $,Ac=new $,Nh=new $;class eR{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Lh.copy(e).add(t).multiplyScalar(.5),wc.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(Lh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(wc),a=$r.dot(this.direction),l=-$r.dot(wc),u=$r.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const g=1/c;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Lh).addScaledVector(wc,f),p}intersectSphere(e,t){yr.subVectors(e.center,this.origin);const i=yr.dot(this.direction),r=yr.dot(yr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,i,r,s){Dh.subVectors(t,e),Ac.subVectors(i,e),Nh.crossVectors(Dh,Ac);let o=this.direction.dot(Nh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$r.subVectors(this.origin,e);const l=a*this.direction.dot(Ac.crossVectors($r,Ac));if(l<0)return null;const u=a*this.direction.dot(Dh.cross($r));if(u<0||l+u>o)return null;const c=-a*$r.dot(Nh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qo.setFromMatrixColumn(e,0).length(),s=1/qo.setFromMatrixColumn(e,1).length(),o=1/qo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-g*u,t[9]=-a*l,t[2]=g-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+g,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tR,e,nR)}lookAt(e,t,i){const r=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Kr.crossVectors(i,ri),Kr.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Kr.crossVectors(i,ri)),Kr.normalize(),Cc.crossVectors(ri,Kr),r[0]=Kr.x,r[4]=Cc.x,r[8]=ri.x,r[1]=Kr.y,r[5]=Cc.y,r[9]=ri.y,r[2]=Kr.z,r[6]=Cc.z,r[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],v=i[3],x=i[7],S=i[11],C=i[15],T=r[0],E=r[4],P=r[8],M=r[12],y=r[1],N=r[5],U=r[9],D=r[13],X=r[2],j=r[6],K=r[10],Y=r[14],L=r[3],G=r[7],R=r[11],ne=r[15];return s[0]=o*T+a*y+l*X+u*L,s[4]=o*E+a*N+l*j+u*G,s[8]=o*P+a*U+l*K+u*R,s[12]=o*M+a*D+l*Y+u*ne,s[1]=c*T+d*y+f*X+p*L,s[5]=c*E+d*N+f*j+p*G,s[9]=c*P+d*U+f*K+p*R,s[13]=c*M+d*D+f*Y+p*ne,s[2]=_*T+g*y+m*X+h*L,s[6]=_*E+g*N+m*j+h*G,s[10]=_*P+g*U+m*K+h*R,s[14]=_*M+g*D+m*Y+h*ne,s[3]=v*T+x*y+S*X+C*L,s[7]=v*E+x*N+S*j+C*G,s[11]=v*P+x*U+S*K+C*R,s[15]=v*M+x*D+S*Y+C*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+g*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],v=d*m*u-g*f*u+g*l*p-a*m*p-d*l*h+a*f*h,x=_*f*u-c*m*u-_*l*p+o*m*p+c*l*h-o*f*h,S=c*g*u-_*d*u+_*a*p-o*g*p-c*a*h+o*d*h,C=_*d*l-c*g*l-_*a*f+o*g*f+c*a*m-o*d*m,T=t*v+i*x+r*S+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(g*f*s-d*m*s-g*r*p+i*m*p+d*r*h-i*f*h)*E,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*E,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(c*m*s-_*f*s+_*r*p-t*m*p-c*r*h+t*f*h)*E,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*E,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*E,e[8]=S*E,e[9]=(_*d*s-c*g*s-_*i*p+t*g*p+c*i*h-t*d*h)*E,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*h+t*a*h)*E,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*E,e[12]=C*E,e[13]=(c*g*r-_*d*r+_*i*f-t*g*f-c*i*m+t*d*m)*E,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*E,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,g=o*c,m=o*d,h=a*d,v=l*u,x=l*c,S=l*d,C=i.x,T=i.y,E=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+S)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+h))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+x)*E,r[9]=(m-v)*E,r[10]=(1-(f+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qo.set(r[0],r[1],r[2]).length();const o=qo.set(r[4],r[5],r[6]).length(),a=qo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zi.copy(this);const u=1/s,c=1/o,d=1/a;return zi.elements[0]*=u,zi.elements[1]*=u,zi.elements[2]*=u,zi.elements[4]*=c,zi.elements[5]*=c,zi.elements[6]*=c,zi.elements[8]*=d,zi.elements[9]*=d,zi.elements[10]*=d,t.setFromRotationMatrix(zi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Nr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===Nr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Qf)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Nr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let _,g;if(a===Nr)_=(o+s)*d,g=-2*d;else if(a===Qf)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qo=new $,zi=new Jt,tR=new $(0,0,0),nR=new $(1,1,1),Kr=new $,Cc=new $,ri=new $,Ev=new Jt,Tv=new Bu;class Vr{constructor(e=0,t=0,i=0,r=Vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(jn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(jn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(jn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ev,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tv.setFromEuler(this),this.setFromQuaternion(Tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vr.DEFAULT_ORDER="XYZ";class a1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iR=0;const wv=new $,$o=new Bu,Sr=new Jt,Rc=new $,Tl=new $,rR=new $,sR=new Bu,Av=new $(1,0,0),Cv=new $(0,1,0),Rv=new $(0,0,1),Pv={type:"added"},oR={type:"removed"},Ko={type:"childadded",child:null},Uh={type:"childremoved",child:null};class gi extends al{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iR++}),this.uuid=zu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const e=new $,t=new Vr,i=new Bu,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ze}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new a1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.multiply($o),this}rotateOnWorldAxis(e,t){return $o.setFromAxisAngle(e,t),this.quaternion.premultiply($o),this}rotateX(e){return this.rotateOnAxis(Av,e)}rotateY(e){return this.rotateOnAxis(Cv,e)}rotateZ(e){return this.rotateOnAxis(Rv,e)}translateOnAxis(e,t){return wv.copy(e).applyQuaternion(this.quaternion),this.position.add(wv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Av,e)}translateY(e){return this.translateOnAxis(Cv,e)}translateZ(e){return this.translateOnAxis(Rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Rc.copy(e):Rc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(Tl,Rc,this.up):Sr.lookAt(Rc,Tl,this.up),this.quaternion.setFromRotationMatrix(Sr),r&&(Sr.extractRotation(r.matrixWorld),$o.setFromRotationMatrix(Sr),this.quaternion.premultiply($o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pv),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oR),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pv),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,e,rR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,sR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gi.DEFAULT_UP=new $(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new $,Mr=new $,Ih=new $,Er=new $,Zo=new $,Qo=new $,bv=new $,Oh=new $,Fh=new $,kh=new $;class ar{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Bi.subVectors(e,t),r.cross(Bi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Bi.subVectors(r,t),Mr.subVectors(i,t),Ih.subVectors(e,t);const o=Bi.dot(Bi),a=Bi.dot(Mr),l=Bi.dot(Ih),u=Mr.dot(Mr),c=Mr.dot(Ih),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Er.x),l.addScaledVector(o,Er.y),l.addScaledVector(a,Er.z),l)}static isFrontFacing(e,t,i,r){return Bi.subVectors(i,t),Mr.subVectors(e,t),Bi.cross(Mr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),Bi.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Zo.subVectors(r,i),Qo.subVectors(s,i),Oh.subVectors(e,i);const l=Zo.dot(Oh),u=Qo.dot(Oh);if(l<=0&&u<=0)return t.copy(i);Fh.subVectors(e,r);const c=Zo.dot(Fh),d=Qo.dot(Fh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Zo,o);kh.subVectors(e,s);const p=Zo.dot(kh),_=Qo.dot(kh);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Qo,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return bv.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(bv,a);const h=1/(m+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(Zo,o).addScaledVector(Qo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zr={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function zh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class _t{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=WC(e,1),t=jn(t,0,1),i=jn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=zh(o,s,e+1/3),this.g=zh(o,s,e),this.b=zh(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=nr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nr){const i=l1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}copyLinearToSRGB(e){return this.r=Ah(e.r),this.g=Ah(e.g),this.b=Ah(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nr){return gt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(jn(Sn.r*255,0,255))*65536+Math.round(jn(Sn.g*255,0,255))*256+Math.round(jn(Sn.b*255,0,255))}getHexString(e=nr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Sn.copy(this),t);const i=Sn.r,r=Sn.g,s=Sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=nr){gt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,i=Sn.g,r=Sn.b;return e!==nr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zr),this.setHSL(Zr.h+e,Zr.s+t,Zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zr),e.getHSL(Pc);const i=Th(Zr.h,Pc.h,t),r=Th(Zr.s,Pc.s,t),s=Th(Zr.l,Pc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new _t;_t.NAMES=l1;let aR=0;class Td extends al{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=zu(),this.name="",this.type="Material",this.blending=Oa,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mm,this.blendDst=gm,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=qf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oa&&(i.blending=this.blending),this.side!==Ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mm&&(i.blendSrc=this.blendSrc),this.blendDst!==gm&&(i.blendDst=this.blendDst),this.blendEquation!==eo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class u1 extends Td{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=qM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new $,bc=new dt;class gr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_v,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ds,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jC("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bc.fromBufferAttribute(this,t),bc.applyMatrix3(e),this.setXY(t,bc.x,bc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),r=Gn(r,this.array),s=Gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_v&&(e.usage=this.usage),e}}class c1 extends gr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class f1 extends gr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xo extends gr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let lR=0;const Mi=new Jt,Bh=new gi,Jo=new $,si=new Hu,wl=new Hu,rn=new $;class Io extends al{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=zu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(r1(e)?f1:c1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,i){return Mi.makeTranslation(e,t,i),this.applyMatrix4(Mi),this}scale(e,t,i){return Mi.makeScale(e,t,i),this.applyMatrix4(Mi),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jo).negate(),this.translate(Jo.x,Jo.y,Jo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xo(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];si.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gg);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wl.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(si.min,wl.min),si.expandByPoint(rn),rn.addVectors(si.max,wl.max),si.expandByPoint(rn)):(si.expandByPoint(wl.min),si.expandByPoint(wl.max))}si.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)rn.fromBufferAttribute(a,u),l&&(Jo.fromBufferAttribute(e,u),rn.add(Jo)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new $,l[P]=new $;const u=new $,c=new $,d=new $,f=new dt,p=new dt,_=new dt,g=new $,m=new $;function h(P,M,y){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,y),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(N),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(N),a[P].add(g),a[M].add(g),a[y].add(g),l[P].add(m),l[M].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,M=v.length;P<M;++P){const y=v[P],N=y.start,U=y.count;for(let D=N,X=N+U;D<X;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new $,S=new $,C=new $,T=new $;function E(P){C.fromBufferAttribute(r,P),T.copy(C);const M=a[P];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(T,M);const N=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,N)}for(let P=0,M=v.length;P<M;++P){const y=v[P],N=y.start,U=y.count;for(let D=N,X=N+U;D<X;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,u=new $,c=new $,d=new $;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new gr(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Io,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lv=new Jt,Gs=new eR,Lc=new Gg,Dv=new $,ea=new $,ta=new $,na=new $,Hh=new $,Dc=new $,Nc=new dt,Uc=new dt,Ic=new dt,Nv=new $,Uv=new $,Iv=new $,Oc=new $,Fc=new $;class fr extends gi{constructor(e=new Io,t=new u1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Dc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Hh.fromBufferAttribute(d,e),o?Dc.addScaledVector(Hh,c):Dc.addScaledVector(Hh.sub(t),c))}t.add(Dc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lc.copy(i.boundingSphere),Lc.applyMatrix4(s),Gs.copy(e.ray).recast(e.near),!(Lc.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(Lc,Dv)===null||Gs.origin.distanceToSquared(Dv)>(e.far-e.near)**2))&&(Lv.copy(s).invert(),Gs.copy(e.ray).applyMatrix4(Lv),!(i.boundingBox!==null&&Gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=x;S<C;S+=3){const T=a.getX(S),E=a.getX(S+1),P=a.getX(S+2);r=kc(this,h,e,i,u,c,d,T,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=kc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=x;S<C;S+=3){const T=S,E=S+1,P=S+2;r=kc(this,h,e,i,u,c,d,T,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=m,x=m+1,S=m+2;r=kc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function uR(n,e,t,i,r,s,o,a){let l;if(e.side===ti?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ls,a),l===null)return null;Fc.copy(a),Fc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Fc);return u<t.near||u>t.far?null:{distance:u,point:Fc.clone(),object:n}}function kc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ea),n.getVertexPosition(l,ta),n.getVertexPosition(u,na);const c=uR(n,e,t,i,ea,ta,na,Oc);if(c){r&&(Nc.fromBufferAttribute(r,a),Uc.fromBufferAttribute(r,l),Ic.fromBufferAttribute(r,u),c.uv=ar.getInterpolation(Oc,ea,ta,na,Nc,Uc,Ic,new dt)),s&&(Nc.fromBufferAttribute(s,a),Uc.fromBufferAttribute(s,l),Ic.fromBufferAttribute(s,u),c.uv1=ar.getInterpolation(Oc,ea,ta,na,Nc,Uc,Ic,new dt)),o&&(Nv.fromBufferAttribute(o,a),Uv.fromBufferAttribute(o,l),Iv.fromBufferAttribute(o,u),c.normal=ar.getInterpolation(Oc,ea,ta,na,Nv,Uv,Iv,new $),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new $,materialIndex:0};ar.getNormal(ea,ta,na,d.normal),c.face=d}return c}class Vu extends Io{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xo(u,3)),this.setAttribute("normal",new xo(c,3)),this.setAttribute("uv",new xo(d,2));function _(g,m,h,v,x,S,C,T,E,P,M){const y=S/E,N=C/P,U=S/2,D=C/2,X=T/2,j=E+1,K=P+1;let Y=0,L=0;const G=new $;for(let R=0;R<K;R++){const ne=R*N-D;for(let ee=0;ee<j;ee++){const Fe=ee*y-U;G[g]=Fe*v,G[m]=ne*x,G[h]=X,u.push(G.x,G.y,G.z),G[g]=0,G[m]=0,G[h]=T>0?1:-1,c.push(G.x,G.y,G.z),d.push(ee/E),d.push(1-R/P),Y+=1}}for(let R=0;R<P;R++)for(let ne=0;ne<E;ne++){const ee=f+ne+j*R,Fe=f+ne+j*(R+1),H=f+(ne+1)+j*(R+1),J=f+(ne+1)+j*R;l.push(ee,Fe,J),l.push(Fe,H,J),L+=6}a.addGroup(p,L,M),p+=L,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function nl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Dn(n){const e={};for(let t=0;t<n.length;t++){const i=nl(n[t]);for(const r in i)e[r]=i[r]}return e}function cR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function d1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const fR={clone:nl,merge:Dn};var dR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends Td{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dR,this.fragmentShader=hR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nl(e.uniforms),this.uniformsGroups=cR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class h1 extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new $,Ov=new dt,Fv=new dt;class ji extends h1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sm*2*Math.atan(Math.tan(Eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,Ov,Fv),t.subVectors(Fv,Ov)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ia=-90,ra=1;class pR extends gi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ji(ia,ra,e,t);r.layers=this.layers,this.add(r);const s=new ji(ia,ra,e,t);s.layers=this.layers,this.add(s);const o=new ji(ia,ra,e,t);o.layers=this.layers,this.add(o);const a=new ji(ia,ra,e,t);a.layers=this.layers,this.add(a);const l=new ji(ia,ra,e,t);l.layers=this.layers,this.add(l);const u=new ji(ia,ra,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Nr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class p1 extends ni{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ja,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mR extends bo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new p1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vu(5,5,5),s=new Gr({name:"CubemapFromEquirect",uniforms:nl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Ts});s.uniforms.tEquirect.value=t;const o=new fr(r,s),a=t.minFilter;return t.minFilter===lo&&(t.minFilter=Yi),new pR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Vh=new $,gR=new $,_R=new Ze;class Qs{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Vh.subVectors(i,t).cross(gR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Vh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_R.getNormalMatrix(e),r=this.coplanarPoint(Vh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new Gg,zc=new $;class m1{constructor(e=new Qs,t=new Qs,i=new Qs,r=new Qs,s=new Qs,o=new Qs){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-p,S-h).normalize(),i[1].setComponents(l+s,f+u,m+p,S+h).normalize(),i[2].setComponents(l+o,f+c,m+_,S+v).normalize(),i[3].setComponents(l-o,f-c,m-_,S-v).normalize(),i[4].setComponents(l-a,f-d,m-g,S-x).normalize(),t===Nr)i[5].setComponents(l+a,f+d,m+g,S+x).normalize();else if(t===Qf)i[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){return Ws.center.set(0,0,0),Ws.radius=.7071067811865476,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(zc.x=r.normal.x>0?e.max.x:e.min.x,zc.y=r.normal.y>0?e.max.y:e.min.y,zc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function g1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vR(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,_=f.length;p<_;p++){const g=f[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class il extends Io{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let x=0;x<u;x++){const S=x*d-s;_.push(S,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,S=v+u*(h+1),C=v+1+u*(h+1),T=v+1+u*h;p.push(x,S,T),p.push(S,C,T)}this.setIndex(p),this.setAttribute("position",new xo(_,3)),this.setAttribute("normal",new xo(g,3)),this.setAttribute("uv",new xo(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.widthSegments,e.heightSegments)}}var xR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yR=`#ifdef USE_ALPHAHASH
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
#endif`,SR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ER=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wR=`#ifdef USE_AOMAP
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
#endif`,AR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CR=`#ifdef USE_BATCHING
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
#endif`,RR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,PR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DR=`#ifdef USE_IRIDESCENCE
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
#endif`,NR=`#ifdef USE_BUMPMAP
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
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,VR=`#define PI 3.141592653589793
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
} // validated`,GR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WR=`vec3 transformedNormal = objectNormal;
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
#endif`,XR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$R="gl_FragColor = linearToOutputTexel( gl_FragColor );",KR=`
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
}`,ZR=`#ifdef USE_ENVMAP
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
#endif`,QR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JR=`#ifdef USE_ENVMAP
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
#endif`,eP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tP=`#ifdef USE_ENVMAP
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
#endif`,nP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oP=`#ifdef USE_GRADIENTMAP
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
}`,aP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cP=`uniform bool receiveShadow;
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
#endif`,fP=`#ifdef USE_ENVMAP
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
#endif`,dP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gP=`PhysicalMaterial material;
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
#endif`,_P=`struct PhysicalMaterial {
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
}`,vP=`
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
#endif`,xP=`#if defined( RE_IndirectDiffuse )
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
#endif`,yP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RP=`#if defined( USE_POINTS_UV )
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
#endif`,PP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NP=`#ifdef USE_MORPHNORMALS
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
#endif`,UP=`#ifdef USE_MORPHTARGETS
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
#endif`,IP=`#ifdef USE_MORPHTARGETS
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
#endif`,OP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,FP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HP=`#ifdef USE_NORMALMAP
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
#endif`,VP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,$P=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ib=`float getShadowMask() {
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
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sb=`#ifdef USE_SKINNING
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
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
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
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,db=`#ifdef USE_TRANSMISSION
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
#endif`,hb=`#ifdef USE_TRANSMISSION
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_b=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xb=`uniform sampler2D t2D;
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
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`#include <common>
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
}`,wb=`#if DEPTH_PACKING == 3200
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
}`,Ab=`#define DISTANCE
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
}`,Cb=`#define DISTANCE
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Db=`#include <common>
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Ub=`#define LAMBERT
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
}`,Ib=`#define LAMBERT
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
}`,Ob=`#define MATCAP
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
}`,Fb=`#define MATCAP
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
}`,kb=`#define NORMAL
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
}`,zb=`#define NORMAL
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
}`,Bb=`#define PHONG
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
}`,Hb=`#define PHONG
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
}`,Vb=`#define STANDARD
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
}`,Gb=`#define STANDARD
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
}`,Wb=`#define TOON
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
}`,Xb=`#define TOON
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
}`,jb=`uniform float size;
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
}`,Yb=`uniform vec3 diffuse;
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
}`,$b=`uniform vec3 color;
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
}`,Kb=`uniform float rotation;
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:xR,alphahash_pars_fragment:yR,alphamap_fragment:SR,alphamap_pars_fragment:MR,alphatest_fragment:ER,alphatest_pars_fragment:TR,aomap_fragment:wR,aomap_pars_fragment:AR,batching_pars_vertex:CR,batching_vertex:RR,begin_vertex:PR,beginnormal_vertex:bR,bsdfs:LR,iridescence_fragment:DR,bumpmap_pars_fragment:NR,clipping_planes_fragment:UR,clipping_planes_pars_fragment:IR,clipping_planes_pars_vertex:OR,clipping_planes_vertex:FR,color_fragment:kR,color_pars_fragment:zR,color_pars_vertex:BR,color_vertex:HR,common:VR,cube_uv_reflection_fragment:GR,defaultnormal_vertex:WR,displacementmap_pars_vertex:XR,displacementmap_vertex:jR,emissivemap_fragment:YR,emissivemap_pars_fragment:qR,colorspace_fragment:$R,colorspace_pars_fragment:KR,envmap_fragment:ZR,envmap_common_pars_fragment:QR,envmap_pars_fragment:JR,envmap_pars_vertex:eP,envmap_physical_pars_fragment:fP,envmap_vertex:tP,fog_vertex:nP,fog_pars_vertex:iP,fog_fragment:rP,fog_pars_fragment:sP,gradientmap_pars_fragment:oP,lightmap_pars_fragment:aP,lights_lambert_fragment:lP,lights_lambert_pars_fragment:uP,lights_pars_begin:cP,lights_toon_fragment:dP,lights_toon_pars_fragment:hP,lights_phong_fragment:pP,lights_phong_pars_fragment:mP,lights_physical_fragment:gP,lights_physical_pars_fragment:_P,lights_fragment_begin:vP,lights_fragment_maps:xP,lights_fragment_end:yP,logdepthbuf_fragment:SP,logdepthbuf_pars_fragment:MP,logdepthbuf_pars_vertex:EP,logdepthbuf_vertex:TP,map_fragment:wP,map_pars_fragment:AP,map_particle_fragment:CP,map_particle_pars_fragment:RP,metalnessmap_fragment:PP,metalnessmap_pars_fragment:bP,morphinstance_vertex:LP,morphcolor_vertex:DP,morphnormal_vertex:NP,morphtarget_pars_vertex:UP,morphtarget_vertex:IP,normal_fragment_begin:OP,normal_fragment_maps:FP,normal_pars_fragment:kP,normal_pars_vertex:zP,normal_vertex:BP,normalmap_pars_fragment:HP,clearcoat_normal_fragment_begin:VP,clearcoat_normal_fragment_maps:GP,clearcoat_pars_fragment:WP,iridescence_pars_fragment:XP,opaque_fragment:jP,packing:YP,premultiplied_alpha_fragment:qP,project_vertex:$P,dithering_fragment:KP,dithering_pars_fragment:ZP,roughnessmap_fragment:QP,roughnessmap_pars_fragment:JP,shadowmap_pars_fragment:eb,shadowmap_pars_vertex:tb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:rb,skinning_pars_vertex:sb,skinning_vertex:ob,skinnormal_vertex:ab,specularmap_fragment:lb,specularmap_pars_fragment:ub,tonemapping_fragment:cb,tonemapping_pars_fragment:fb,transmission_fragment:db,transmission_pars_fragment:hb,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:_b,background_vert:vb,background_frag:xb,backgroundCube_vert:yb,backgroundCube_frag:Sb,cube_vert:Mb,cube_frag:Eb,depth_vert:Tb,depth_frag:wb,distanceRGBA_vert:Ab,distanceRGBA_frag:Cb,equirect_vert:Rb,equirect_frag:Pb,linedashed_vert:bb,linedashed_frag:Lb,meshbasic_vert:Db,meshbasic_frag:Nb,meshlambert_vert:Ub,meshlambert_frag:Ib,meshmatcap_vert:Ob,meshmatcap_frag:Fb,meshnormal_vert:kb,meshnormal_frag:zb,meshphong_vert:Bb,meshphong_frag:Hb,meshphysical_vert:Vb,meshphysical_frag:Gb,meshtoon_vert:Wb,meshtoon_frag:Xb,points_vert:jb,points_frag:Yb,shadow_vert:qb,shadow_frag:$b,sprite_vert:Kb,sprite_frag:Zb},ge={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ir={basic:{uniforms:Dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Dn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Dn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Dn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Dn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Dn([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Dn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Dn([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Dn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Dn([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Dn([ge.common,ge.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Dn([ge.lights,ge.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ir.physical={uniforms:Dn([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Bc={r:0,b:0,g:0},Xs=new Vr,Qb=new Jt;function Jb(n,e,t,i,r,s,o){const a=new _t(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function g(v){let x=!1;const S=_(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(v,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Sd)?(c===void 0&&(c=new fr(new Vu(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:nl(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Xs.copy(x.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(Xs)),c.material.toneMapped=gt.getTransfer(S.colorSpace)!==Tt,(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new fr(new il(2,2),new Gr({name:"BackgroundMaterial",uniforms:nl(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=gt.getTransfer(S.colorSpace)!==Tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Bc,d1(n)),i.buffers.color.setClear(Bc.r,Bc.g,Bc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:g,addToRenderList:m}}function e2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,N,U,D,X){let j=!1;const K=d(D,U,N);s!==K&&(s=K,u(s.object)),j=p(y,D,U,X),j&&_(y,D,U,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(y,N,U,D),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function d(y,N,U){const D=U.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let j=X[N.id];j===void 0&&(j={},X[N.id]=j);let K=j[D];return K===void 0&&(K=f(l()),j[D]=K),K}function f(y){const N=[],U=[],D=[];for(let X=0;X<t;X++)N[X]=0,U[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:D,object:y,attributes:{},index:null}}function p(y,N,U,D){const X=s.attributes,j=N.attributes;let K=0;const Y=U.getAttributes();for(const L in Y)if(Y[L].location>=0){const R=X[L];let ne=j[L];if(ne===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),R===void 0||R.attribute!==ne||ne&&R.data!==ne.data)return!0;K++}return s.attributesNum!==K||s.index!==D}function _(y,N,U,D){const X={},j=N.attributes;let K=0;const Y=U.getAttributes();for(const L in Y)if(Y[L].location>=0){let R=j[L];R===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(R=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(R=y.instanceColor));const ne={};ne.attribute=R,R&&R.data&&(ne.data=R.data),X[L]=ne,K++}s.attributes=X,s.attributesNum=K,s.index=D}function g(){const y=s.newAttributes;for(let N=0,U=y.length;N<U;N++)y[N]=0}function m(y){h(y,0)}function h(y,N){const U=s.newAttributes,D=s.enabledAttributes,X=s.attributeDivisors;U[y]=1,D[y]===0&&(n.enableVertexAttribArray(y),D[y]=1),X[y]!==N&&(n.vertexAttribDivisor(y,N),X[y]=N)}function v(){const y=s.newAttributes,N=s.enabledAttributes;for(let U=0,D=N.length;U<D;U++)N[U]!==y[U]&&(n.disableVertexAttribArray(U),N[U]=0)}function x(y,N,U,D,X,j,K){K===!0?n.vertexAttribIPointer(y,N,U,X,j):n.vertexAttribPointer(y,N,U,D,X,j)}function S(y,N,U,D){g();const X=D.attributes,j=U.getAttributes(),K=N.defaultAttributeValues;for(const Y in j){const L=j[Y];if(L.location>=0){let G=X[Y];if(G===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(G=y.instanceColor)),G!==void 0){const R=G.normalized,ne=G.itemSize,ee=e.get(G);if(ee===void 0)continue;const Fe=ee.buffer,H=ee.type,J=ee.bytesPerElement,le=H===n.INT||H===n.UNSIGNED_INT||G.gpuType===ZM;if(G.isInterleavedBufferAttribute){const te=G.data,Ue=te.stride,Ie=G.offset;if(te.isInstancedInterleavedBuffer){for(let k=0;k<L.locationSize;k++)h(L.location+k,te.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let k=0;k<L.locationSize;k++)m(L.location+k);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let k=0;k<L.locationSize;k++)x(L.location+k,ne/L.locationSize,H,R,Ue*J,(Ie+ne/L.locationSize*k)*J,le)}else{if(G.isInstancedBufferAttribute){for(let te=0;te<L.locationSize;te++)h(L.location+te,G.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let te=0;te<L.locationSize;te++)m(L.location+te);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let te=0;te<L.locationSize;te++)x(L.location+te,ne/L.locationSize,H,R,ne*J,ne/L.locationSize*te*J,le)}}else if(K!==void 0){const R=K[Y];if(R!==void 0)switch(R.length){case 2:n.vertexAttrib2fv(L.location,R);break;case 3:n.vertexAttrib3fv(L.location,R);break;case 4:n.vertexAttrib4fv(L.location,R);break;default:n.vertexAttrib1fv(L.location,R)}}}}v()}function C(){P();for(const y in i){const N=i[y];for(const U in N){const D=N[U];for(const X in D)c(D[X].object),delete D[X];delete N[U]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const N=i[y.id];for(const U in N){const D=N[U];for(const X in D)c(D[X].object),delete D[X];delete N[U]}delete i[y.id]}function E(y){for(const N in i){const U=i[N];if(U[y.id]===void 0)continue;const D=U[y.id];for(const X in D)c(D[X].object),delete D[X];delete U[y.id]}}function P(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function t2(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(u[p],c[p]);else{f.multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let _=0;_<d;_++)p+=c[_];t.update(p,i,1)}}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=c[g];for(let g=0;g<f.length;g++)t.update(_,i,f[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function n2(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==cr&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const E=T===Md&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ds&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ds&&!E)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:S,maxSamples:C}}function i2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Qs,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=h.clippingState||null;l.value=S,S=c(_,f,x,p);for(let C=0;C!==x;++C)S[C]=t[C];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==g;++x,S+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function r2(n){let e=new WeakMap;function t(o,a){return a===_m?o.mapping=Ja:a===vm&&(o.mapping=el),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_m||a===vm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new mR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class _1 extends h1{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ea=4,kv=[.125,.215,.35,.446,.526,.582],to=20,Gh=new _1,zv=new _t;let Wh=null,Xh=0,jh=0,Yh=!1;const Js=(1+Math.sqrt(5))/2,sa=1/Js,Bv=[new $(-Js,sa,0),new $(Js,sa,0),new $(-sa,0,Js),new $(sa,0,Js),new $(0,Js,-sa),new $(0,Js,sa),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,Xh,jh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,Hc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ja||e.mapping===el?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:Md,format:cr,colorSpace:Fs,depthBuffer:!1},r=Vv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s2(s)),this._blurMaterial=o2(s,e,t)}return r}_compileMaterial(e){const t=new fr(this._lodPlanes[0],e);this._renderer.compile(t,Gh)}_sceneToCubeUV(e,t,i,r){const a=new ji(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(zv),c.toneMapping=ws,c.autoClear=!1;const p=new u1({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),_=new fr(new Vu,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(zv),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Hc(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ja||e.mapping===el;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Gh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bv[(r-s-1)%Bv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new fr(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*to-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):to;m>to&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${to}`);const h=[];let v=0;for(let E=0;E<to;++E){const P=E/g,M=Math.exp(-P*P/2);h.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-Ea?r-x+Ea:0),T=4*(this._cubeSize-S);Hc(t,C,T,3*S,2*S),l.setRenderTarget(t),l.render(d,Gh)}}function s2(n){const e=[],t=[],i=[];let r=n;const s=n-Ea+1+kv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ea?l=kv[o-n+Ea-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,h=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,P=T>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(M,g*_*T),x.set(f,m*_*T);const y=[T,T,T,T,T,T];S.set(y,h*_*T)}const C=new Io;C.setAttribute("position",new gr(v,g)),C.setAttribute("uv",new gr(x,m)),C.setAttribute("faceIndex",new gr(S,h)),e.push(C),r>Ea&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vv(n,e,t){const i=new bo(n,e,t);return i.texture.mapping=Sd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function o2(n,e,t){const i=new Float32Array(to),r=new $(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:to,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wg(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Gv(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wg(),fragmentShader:`

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
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Wv(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Wg(){return`

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
	`}function a2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===_m||l===vm,c=l===Ja||l===el;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Hv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Hv(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function l2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function u2(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,S=v.length;x<S;x+=3){const C=v[x+0],T=v[x+1],E=v[x+2];f.push(C,T,T,E,E,C)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const C=x+0,T=x+1,E=x+2;f.push(C,T,T,E,E,C)}}else return;const m=new(r1(f)?f1:c1)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function c2(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*o,_),t.update(p,i,_))}function c(f,p,_){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<_;m++)this.render(f[m]/o,p[m]);else{g.multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}}function d(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,_);let h=0;for(let v=0;v<_;v++)h+=p[v];for(let v=0;v<g.length;v++)t.update(h,i,g[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function f2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function d2(n,e,t){const i=new WeakMap,r=new hn;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*T*4*d),P=new o1(E,C,T,d);P.type=ds,P.needsUpdate=!0;const M=S*4;for(let N=0;N<d;N++){const U=h[N],D=v[N],X=x[N],j=C*T*4*N;for(let K=0;K<U.count;K++){const Y=K*M;_===!0&&(r.fromBufferAttribute(U,K),E[j+Y+0]=r.x,E[j+Y+1]=r.y,E[j+Y+2]=r.z,E[j+Y+3]=0),g===!0&&(r.fromBufferAttribute(D,K),E[j+Y+4]=r.x,E[j+Y+5]=r.y,E[j+Y+6]=r.z,E[j+Y+7]=0),m===!0&&(r.fromBufferAttribute(X,K),E[j+Y+8]=r.x,E[j+Y+9]=r.y,E[j+Y+10]=r.z,E[j+Y+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new dt(C,T)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function h2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class v1 extends ni{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Fa,c!==Fa&&c!==Lu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fa&&(i=tl),i===void 0&&c===Lu&&(i=ku),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Li,this.minFilter=l!==void 0?l:Li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const x1=new ni,y1=new v1(1,1);y1.compareFunction=i1;const S1=new o1,M1=new QC,E1=new p1,Xv=[],jv=[],Yv=new Float32Array(16),qv=new Float32Array(9),$v=new Float32Array(4);function ll(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Xv[r];if(s===void 0&&(s=new Float32Array(r),Xv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wd(n,e){let t=jv[e];t===void 0&&(t=new Int32Array(e),jv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function p2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function m2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function g2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function v2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;$v.set(i),n.uniformMatrix2fv(this.addr,!1,$v),tn(t,i)}}function x2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;qv.set(i),n.uniformMatrix3fv(this.addr,!1,qv),tn(t,i)}}function y2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Yv.set(i),n.uniformMatrix4fv(this.addr,!1,Yv),tn(t,i)}}function S2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function M2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function E2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function w2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function A2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function C2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function P2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?y1:x1;t.setTexture2D(e||s,r)}function b2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||M1,r)}function L2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||E1,r)}function D2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||S1,r)}function N2(n){switch(n){case 5126:return p2;case 35664:return m2;case 35665:return g2;case 35666:return _2;case 35674:return v2;case 35675:return x2;case 35676:return y2;case 5124:case 35670:return S2;case 35667:case 35671:return M2;case 35668:case 35672:return E2;case 35669:case 35673:return T2;case 5125:return w2;case 36294:return A2;case 36295:return C2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return P2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return L2;case 36289:case 36303:case 36311:case 36292:return D2}}function U2(n,e){n.uniform1fv(this.addr,e)}function I2(n,e){const t=ll(e,this.size,2);n.uniform2fv(this.addr,t)}function O2(n,e){const t=ll(e,this.size,3);n.uniform3fv(this.addr,t)}function F2(n,e){const t=ll(e,this.size,4);n.uniform4fv(this.addr,t)}function k2(n,e){const t=ll(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function z2(n,e){const t=ll(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B2(n,e){const t=ll(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function H2(n,e){n.uniform1iv(this.addr,e)}function V2(n,e){n.uniform2iv(this.addr,e)}function G2(n,e){n.uniform3iv(this.addr,e)}function W2(n,e){n.uniform4iv(this.addr,e)}function X2(n,e){n.uniform1uiv(this.addr,e)}function j2(n,e){n.uniform2uiv(this.addr,e)}function Y2(n,e){n.uniform3uiv(this.addr,e)}function q2(n,e){n.uniform4uiv(this.addr,e)}function $2(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||x1,s[o])}function K2(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||M1,s[o])}function Z2(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||E1,s[o])}function Q2(n,e,t){const i=this.cache,r=e.length,s=wd(t,r);en(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||S1,s[o])}function J2(n){switch(n){case 5126:return U2;case 35664:return I2;case 35665:return O2;case 35666:return F2;case 35674:return k2;case 35675:return z2;case 35676:return B2;case 5124:case 35670:return H2;case 35667:case 35671:return V2;case 35668:case 35672:return G2;case 35669:case 35673:return W2;case 5125:return X2;case 36294:return j2;case 36295:return Y2;case 36296:return q2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return K2;case 35680:case 36300:case 36308:case 36293:return Z2;case 36289:case 36303:case 36311:case 36292:return Q2}}class eL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=N2(t.type)}}class tL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J2(t.type)}}class nL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qh=/(\w+)(\])?(\[|\.)?/g;function Kv(n,e){n.seq.push(e),n.map[e.id]=e}function iL(n,e,t){const i=n.name,r=i.length;for(qh.lastIndex=0;;){const s=qh.exec(i),o=qh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Kv(t,u===void 0?new eL(a,n,e):new tL(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new nL(a),Kv(t,d)),t=d}}}class ff{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);iL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Zv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rL=37297;let sL=0;function oL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function aL(n){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(n);let i;switch(e===t?i="":e===Zf&&t===Kf?i="LinearDisplayP3ToLinearSRGB":e===Kf&&t===Zf&&(i="LinearSRGBToLinearDisplayP3"),n){case Fs:case Ed:return[i,"LinearTransferOETF"];case nr:case Vg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Qv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+oL(n.getShaderSource(e),o)}else return r}function lL(n,e){const t=aL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uL(n,e){let t;switch(e){case mC:t="Linear";break;case gC:t="Reinhard";break;case _C:t="OptimizedCineon";break;case vC:t="ACESFilmic";break;case yC:t="AgX";break;case SC:t="Neutral";break;case xC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fl).join(`
`)}function fL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fl(n){return n!==""}function Jv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ex(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mm(n){return n.replace(hL,mL)}const pL=new Map;function mL(n,e){let t=Ke[e];if(t===void 0){const i=pL.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mm(t)}const gL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(n){return n.replace(gL,_L)}function _L(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nx(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function vL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===YM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===HA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tr&&(e="SHADOWMAP_TYPE_VSM"),e}function xL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ja:case el:e="ENVMAP_TYPE_CUBE";break;case Sd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case el:e="ENVMAP_MODE_REFRACTION";break}return e}function SL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qM:e="ENVMAP_BLENDING_MULTIPLY";break;case hC:e="ENVMAP_BLENDING_MIX";break;case pC:e="ENVMAP_BLENDING_ADD";break}return e}function ML(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function EL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vL(t),u=xL(t),c=yL(t),d=SL(t),f=ML(t),p=cL(t),_=fL(s),g=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fl).join(`
`),h.length>0&&(h+=`
`)):(m=[nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),h=[nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ws?"#define TONE_MAPPING":"",t.toneMapping!==ws?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ws?uL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,lL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fl).join(`
`)),o=Mm(o),o=Jv(o,t),o=ex(o,t),a=Mm(a),a=Jv(a,t),a=ex(a,t),o=tx(o),a=tx(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,S=v+h+a,C=Zv(r,r.VERTEX_SHADER,x),T=Zv(r,r.FRAGMENT_SHADER,S);r.attachShader(g,C),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function E(N){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(g).trim(),D=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(T).trim();let j=!0,K=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,T);else{const Y=Qv(r,C,"vertex"),L=Qv(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+U+`
`+Y+`
`+L)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||X==="")&&(K=!1);K&&(N.diagnostics={runnable:j,programLog:U,vertexShader:{log:D,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(C),r.deleteShader(T),P=new ff(r,g),M=dL(r,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,rL)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sL++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}let TL=0;class wL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AL(e),t.set(e,i)),i}}class AL{constructor(e){this.id=TL++,this.code=e,this.usedTimes=0}}function CL(n,e,t,i,r,s,o){const a=new a1,l=new wL,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,y,N,U,D){const X=U.fog,j=D.geometry,K=M.isMeshStandardMaterial?U.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),L=Y&&Y.mapping===Sd?Y.image.height:null,G=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const R=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ne=R!==void 0?R.length:0;let ee=0;j.morphAttributes.position!==void 0&&(ee=1),j.morphAttributes.normal!==void 0&&(ee=2),j.morphAttributes.color!==void 0&&(ee=3);let Fe,H,J,le;if(G){const rt=ir[G];Fe=rt.vertexShader,H=rt.fragmentShader}else Fe=M.vertexShader,H=M.fragmentShader,l.update(M),J=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const te=n.getRenderTarget(),Ue=D.isInstancedMesh===!0,Ie=D.isBatchedMesh===!0,k=!!M.map,We=!!M.matcap,Me=!!Y,Ce=!!M.aoMap,ve=!!M.lightMap,Re=!!M.bumpMap,Le=!!M.normalMap,F=!!M.displacementMap,$e=!!M.emissiveMap,b=!!M.metalnessMap,w=!!M.roughnessMap,W=M.anisotropy>0,Q=M.clearcoat>0,ie=M.dispersion>0,re=M.iridescence>0,xe=M.sheen>0,de=M.transmission>0,oe=W&&!!M.anisotropyMap,ke=Q&&!!M.clearcoatMap,ue=Q&&!!M.clearcoatNormalMap,Ae=Q&&!!M.clearcoatRoughnessMap,Qe=re&&!!M.iridescenceMap,ye=re&&!!M.iridescenceThicknessMap,Se=xe&&!!M.sheenColorMap,ze=xe&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,mt=!!M.specularColorMap,Be=!!M.specularIntensityMap,I=de&&!!M.transmissionMap,q=de&&!!M.thicknessMap,Z=!!M.gradientMap,fe=!!M.alphaMap,he=M.alphaTest>0,je=!!M.alphaHash,lt=!!M.extensions;let ht=ws;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ht=n.toneMapping);const xt={shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:Fe,fragmentShader:H,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ie,instancing:Ue,instancingColor:Ue&&D.instanceColor!==null,instancingMorph:Ue&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Fs,alphaToCoverage:!!M.alphaToCoverage,map:k,matcap:We,envMap:Me,envMapMode:Me&&Y.mapping,envMapCubeUVHeight:L,aoMap:Ce,lightMap:ve,bumpMap:Re,normalMap:Le,displacementMap:f&&F,emissiveMap:$e,normalMapObjectSpace:Le&&M.normalMapType===OC,normalMapTangentSpace:Le&&M.normalMapType===IC,metalnessMap:b,roughnessMap:w,anisotropy:W,anisotropyMap:oe,clearcoat:Q,clearcoatMap:ke,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ae,dispersion:ie,iridescence:re,iridescenceMap:Qe,iridescenceThicknessMap:ye,sheen:xe,sheenColorMap:Se,sheenRoughnessMap:ze,specularMap:Ye,specularColorMap:mt,specularIntensityMap:Be,transmission:de,transmissionMap:I,thicknessMap:q,gradientMap:Z,opaque:M.transparent===!1&&M.blending===Oa&&M.alphaToCoverage===!1,alphaMap:fe,alphaTest:he,alphaHash:je,combine:M.combine,mapUv:k&&g(M.map.channel),aoMapUv:Ce&&g(M.aoMap.channel),lightMapUv:ve&&g(M.lightMap.channel),bumpMapUv:Re&&g(M.bumpMap.channel),normalMapUv:Le&&g(M.normalMap.channel),displacementMapUv:F&&g(M.displacementMap.channel),emissiveMapUv:$e&&g(M.emissiveMap.channel),metalnessMapUv:b&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:oe&&g(M.anisotropyMap.channel),clearcoatMapUv:ke&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(M.sheenRoughnessMap.channel),specularMapUv:Ye&&g(M.specularMap.channel),specularColorMapUv:mt&&g(M.specularColorMap.channel),specularIntensityMapUv:Be&&g(M.specularIntensityMap.channel),transmissionMapUv:I&&g(M.transmissionMap.channel),thicknessMapUv:q&&g(M.thicknessMap.channel),alphaMapUv:fe&&g(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Le||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!j.attributes.uv&&(k||fe),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,useLegacyLights:n._useLegacyLights,decodeVideoTexture:k&&M.map.isVideoTexture===!0&&gt.getTransfer(M.map.colorSpace)===Tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===or,flipSided:M.side===ti,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:lt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:lt&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return xt.vertexUv1s=u.has(1),xt.vertexUv2s=u.has(2),xt.vertexUv3s=u.has(3),u.clear(),xt}function h(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)y.push(N),y.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(y,M),x(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function v(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),M.push(a.mask)}function S(M){const y=_[M.type];let N;if(y){const U=ir[y];N=fR.clone(U.uniforms)}else N=M.uniforms;return N}function C(M,y){let N;for(let U=0,D=c.length;U<D;U++){const X=c[U];if(X.cacheKey===y){N=X,++N.usedTimes;break}}return N===void 0&&(N=new EL(n,y,M,s),c.push(N)),N}function T(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:P}}function RL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function PL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,g,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||PL),i.length>1&&i.sort(f||ix),r.length>1&&r.sort(f||ix)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function bL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new rx,n.set(i,[o])):r>=s.length?(o=new rx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function LL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new _t};break;case"SpotLight":t={position:new $,direction:new $,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function DL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let NL=0;function UL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IL(n){const e=new LL,t=DL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new $);const r=new $,s=new Jt,o=new Jt;function a(u,c){let d=0,f=0,p=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,g=0,m=0,h=0,v=0,x=0,S=0,C=0,T=0,E=0,P=0;u.sort(UL);const M=c===!0?Math.PI:1;for(let N=0,U=u.length;N<U;N++){const D=u[N],X=D.color,j=D.intensity,K=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=X.r*j*M,f+=X.g*j*M,p+=X.b*j*M;else if(D.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(D.sh.coefficients[L],j);P++}else if(D.isDirectionalLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const G=D.shadow,R=t.get(D);R.shadowBias=G.bias,R.shadowNormalBias=G.normalBias,R.shadowRadius=G.radius,R.shadowMapSize=G.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=D.shadow.matrix,x++}i.directional[_]=L,_++}else if(D.isSpotLight){const L=e.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(X).multiplyScalar(j*M),L.distance=K,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,i.spot[m]=L;const G=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,G.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[m]=G.matrix,D.castShadow){const R=t.get(D);R.shadowBias=G.bias,R.shadowNormalBias=G.normalBias,R.shadowRadius=G.radius,R.shadowMapSize=G.mapSize,i.spotShadow[m]=R,i.spotShadowMap[m]=Y,C++}m++}else if(D.isRectAreaLight){const L=e.get(D);L.color.copy(X).multiplyScalar(j),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),i.rectArea[h]=L,h++}else if(D.isPointLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*M),L.distance=D.distance,L.decay=D.decay,D.castShadow){const G=D.shadow,R=t.get(D);R.shadowBias=G.bias,R.shadowNormalBias=G.normalBias,R.shadowRadius=G.radius,R.shadowMapSize=G.mapSize,R.shadowCameraNear=G.camera.near,R.shadowCameraFar=G.camera.far,i.pointShadow[g]=R,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=L,g++}else if(D.isHemisphereLight){const L=e.get(D);L.skyColor.copy(D.color).multiplyScalar(j*M),L.groundColor.copy(D.groundColor).multiplyScalar(j*M),i.hemi[v]=L,v++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==_||y.pointLength!==g||y.spotLength!==m||y.rectAreaLength!==h||y.hemiLength!==v||y.numDirectionalShadows!==x||y.numPointShadows!==S||y.numSpotShadows!==C||y.numSpotMaps!==T||y.numLightProbes!==P)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=h,i.point.length=g,i.hemi.length=v,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,y.directionalLength=_,y.pointLength=g,y.spotLength=m,y.rectAreaLength=h,y.hemiLength=v,y.numDirectionalShadows=x,y.numPointShadows=S,y.numSpotShadows=C,y.numSpotMaps=T,y.numLightProbes=P,i.version=NL++)}function l(u,c){let d=0,f=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function sx(n){const e=new IL(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(c){e.setup(t,c)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function OL(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new sx(n),e.set(r,[a])):s>=o.length?(a=new sx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class FL extends Td{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kL extends Td{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BL=`uniform sampler2D shadow_pass;
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
}`;function HL(n,e,t){let i=new m1;const r=new dt,s=new dt,o=new hn,a=new FL({depthPacking:UC}),l=new kL,u={},c=t.maxTextureSize,d={[Ls]:ti,[ti]:Ls,[or]:or},f=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:zL,fragmentShader:BL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Io;_.setAttribute("position",new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fr(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=YM;let h=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ts),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=h!==Tr&&this.type===Tr,X=h===Tr&&this.type!==Tr;for(let j=0,K=T.length;j<K;j++){const Y=T[j],L=Y.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const G=L.getFrameExtents();if(r.multiply(G),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/G.x),r.x=s.x*G.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/G.y),r.y=s.y*G.y,L.mapSize.y=s.y)),L.map===null||D===!0||X===!0){const ne=this.type!==Tr?{minFilter:Li,magFilter:Li}:{};L.map!==null&&L.map.dispose(),L.map=new bo(r.x,r.y,ne),L.map.texture.name=Y.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const R=L.getViewportCount();for(let ne=0;ne<R;ne++){const ee=L.getViewport(ne);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),U.viewport(o),L.updateMatrices(Y,ne),i=L.getFrustum(),S(E,P,L.camera,Y,this.type)}L.isPointLightShadow!==!0&&this.type===Tr&&v(L,P),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,y,N)};function v(T,E){const P=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bo(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,P,f,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,P,p,g,null)}function x(T,E,P,M){let y=null;const N=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)y=N;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=y.uuid,D=E.uuid;let X=u[U];X===void 0&&(X={},u[U]=X);let j=X[D];j===void 0&&(j=y.clone(),X[D]=j,E.addEventListener("dispose",C)),y=j}if(y.visible=E.visible,y.wireframe=E.wireframe,M===Tr?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=P}return y}function S(T,E,P,M,y){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Tr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const D=e.update(T),X=T.material;if(Array.isArray(X)){const j=D.groups;for(let K=0,Y=j.length;K<Y;K++){const L=j[K],G=X[L.materialIndex];if(G&&G.visible){const R=x(T,G,M,y);T.onBeforeShadow(n,T,E,P,D,R,L),n.renderBufferDirect(P,null,D,R,T,L),T.onAfterShadow(n,T,E,P,D,R,L)}}}else if(X.visible){const j=x(T,X,M,y);T.onBeforeShadow(n,T,E,P,D,j,null),n.renderBufferDirect(P,null,D,j,T,null),T.onAfterShadow(n,T,E,P,D,j,null)}}const U=T.children;for(let D=0,X=U.length;D<X;D++)S(U[D],E,P,M,y)}function C(T){T.target.removeEventListener("dispose",C);for(const P in u){const M=u[P],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function VL(n){function e(){let I=!1;const q=new hn;let Z=null;const fe=new hn(0,0,0,0);return{setMask:function(he){Z!==he&&!I&&(n.colorMask(he,he,he,he),Z=he)},setLocked:function(he){I=he},setClear:function(he,je,lt,ht,xt){xt===!0&&(he*=ht,je*=ht,lt*=ht),q.set(he,je,lt,ht),fe.equals(q)===!1&&(n.clearColor(he,je,lt,ht),fe.copy(q))},reset:function(){I=!1,Z=null,fe.set(-1,0,0,0)}}}function t(){let I=!1,q=null,Z=null,fe=null;return{setTest:function(he){he?le(n.DEPTH_TEST):te(n.DEPTH_TEST)},setMask:function(he){q!==he&&!I&&(n.depthMask(he),q=he)},setFunc:function(he){if(Z!==he){switch(he){case oC:n.depthFunc(n.NEVER);break;case aC:n.depthFunc(n.ALWAYS);break;case lC:n.depthFunc(n.LESS);break;case qf:n.depthFunc(n.LEQUAL);break;case uC:n.depthFunc(n.EQUAL);break;case cC:n.depthFunc(n.GEQUAL);break;case fC:n.depthFunc(n.GREATER);break;case dC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=he}},setLocked:function(he){I=he},setClear:function(he){fe!==he&&(n.clearDepth(he),fe=he)},reset:function(){I=!1,q=null,Z=null,fe=null}}}function i(){let I=!1,q=null,Z=null,fe=null,he=null,je=null,lt=null,ht=null,xt=null;return{setTest:function(rt){I||(rt?le(n.STENCIL_TEST):te(n.STENCIL_TEST))},setMask:function(rt){q!==rt&&!I&&(n.stencilMask(rt),q=rt)},setFunc:function(rt,Oe,Te){(Z!==rt||fe!==Oe||he!==Te)&&(n.stencilFunc(rt,Oe,Te),Z=rt,fe=Oe,he=Te)},setOp:function(rt,Oe,Te){(je!==rt||lt!==Oe||ht!==Te)&&(n.stencilOp(rt,Oe,Te),je=rt,lt=Oe,ht=Te)},setLocked:function(rt){I=rt},setClear:function(rt){xt!==rt&&(n.clearStencil(rt),xt=rt)},reset:function(){I=!1,q=null,Z=null,fe=null,he=null,je=null,lt=null,ht=null,xt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,S=null,C=null,T=new _t(0,0,0),E=0,P=!1,M=null,y=null,N=null,U=null,D=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=K>=2);let L=null,G={};const R=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),ee=new hn().fromArray(R),Fe=new hn().fromArray(ne);function H(I,q,Z,fe){const he=new Uint8Array(4),je=n.createTexture();n.bindTexture(I,je),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<Z;lt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(q,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(q+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return je}const J={};J[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(n.DEPTH_TEST),s.setFunc(qf),Re(!1),Le(B0),le(n.CULL_FACE),Ce(Ts);function le(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function te(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ue(I,q){return c[I]!==q?(n.bindFramebuffer(I,q),c[I]=q,I===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=q),I===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=q),!0):!1}function Ie(I,q){let Z=f,fe=!1;if(I){Z=d.get(q),Z===void 0&&(Z=[],d.set(q,Z));const he=I.textures;if(Z.length!==he.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let je=0,lt=he.length;je<lt;je++)Z[je]=n.COLOR_ATTACHMENT0+je;Z.length=he.length,fe=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,fe=!0);fe&&n.drawBuffers(Z)}function k(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const We={[eo]:n.FUNC_ADD,[GA]:n.FUNC_SUBTRACT,[WA]:n.FUNC_REVERSE_SUBTRACT};We[XA]=n.MIN,We[jA]=n.MAX;const Me={[YA]:n.ZERO,[qA]:n.ONE,[$A]:n.SRC_COLOR,[mm]:n.SRC_ALPHA,[tC]:n.SRC_ALPHA_SATURATE,[JA]:n.DST_COLOR,[ZA]:n.DST_ALPHA,[KA]:n.ONE_MINUS_SRC_COLOR,[gm]:n.ONE_MINUS_SRC_ALPHA,[eC]:n.ONE_MINUS_DST_COLOR,[QA]:n.ONE_MINUS_DST_ALPHA,[nC]:n.CONSTANT_COLOR,[iC]:n.ONE_MINUS_CONSTANT_COLOR,[rC]:n.CONSTANT_ALPHA,[sC]:n.ONE_MINUS_CONSTANT_ALPHA};function Ce(I,q,Z,fe,he,je,lt,ht,xt,rt){if(I===Ts){_===!0&&(te(n.BLEND),_=!1);return}if(_===!1&&(le(n.BLEND),_=!0),I!==VA){if(I!==g||rt!==P){if((m!==eo||x!==eo)&&(n.blendEquation(n.FUNC_ADD),m=eo,x=eo),rt)switch(I){case Oa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case H0:n.blendFunc(n.ONE,n.ONE);break;case V0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case G0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case H0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case V0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case G0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,v=null,S=null,C=null,T.set(0,0,0),E=0,g=I,P=rt}return}he=he||q,je=je||Z,lt=lt||fe,(q!==m||he!==x)&&(n.blendEquationSeparate(We[q],We[he]),m=q,x=he),(Z!==h||fe!==v||je!==S||lt!==C)&&(n.blendFuncSeparate(Me[Z],Me[fe],Me[je],Me[lt]),h=Z,v=fe,S=je,C=lt),(ht.equals(T)===!1||xt!==E)&&(n.blendColor(ht.r,ht.g,ht.b,xt),T.copy(ht),E=xt),g=I,P=!1}function ve(I,q){I.side===or?te(n.CULL_FACE):le(n.CULL_FACE);let Z=I.side===ti;q&&(Z=!Z),Re(Z),I.blending===Oa&&I.transparent===!1?Ce(Ts):Ce(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const fe=I.stencilWrite;o.setTest(fe),fe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$e(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Le(I){I!==zA?(le(n.CULL_FACE),I!==y&&(I===B0?n.cullFace(n.BACK):I===BA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):te(n.CULL_FACE),y=I}function F(I){I!==N&&(j&&n.lineWidth(I),N=I)}function $e(I,q,Z){I?(le(n.POLYGON_OFFSET_FILL),(U!==q||D!==Z)&&(n.polygonOffset(q,Z),U=q,D=Z)):te(n.POLYGON_OFFSET_FILL)}function b(I){I?le(n.SCISSOR_TEST):te(n.SCISSOR_TEST)}function w(I){I===void 0&&(I=n.TEXTURE0+X-1),L!==I&&(n.activeTexture(I),L=I)}function W(I,q,Z){Z===void 0&&(L===null?Z=n.TEXTURE0+X-1:Z=L);let fe=G[Z];fe===void 0&&(fe={type:void 0,texture:void 0},G[Z]=fe),(fe.type!==I||fe.texture!==q)&&(L!==Z&&(n.activeTexture(Z),L=Z),n.bindTexture(I,q||J[I]),fe.type=I,fe.texture=q)}function Q(){const I=G[L];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Qe(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(I){ee.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function ze(I){Fe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function Ye(I,q){let Z=l.get(q);Z===void 0&&(Z=new WeakMap,l.set(q,Z));let fe=Z.get(I);fe===void 0&&(fe=n.getUniformBlockIndex(q,I.name),Z.set(I,fe))}function mt(I,q){const fe=l.get(q).get(I);a.get(q)!==fe&&(n.uniformBlockBinding(q,fe,I.__bindingPointIndex),a.set(q,fe))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},L=null,G={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,S=null,C=null,T=new _t(0,0,0),E=0,P=!1,M=null,y=null,N=null,U=null,D=null,ee.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:te,bindFramebuffer:Ue,drawBuffers:Ie,useProgram:k,setBlending:Ce,setMaterial:ve,setFlipSided:Re,setCullFace:Le,setLineWidth:F,setPolygonOffset:$e,setScissorTest:b,activeTexture:w,bindTexture:W,unbindTexture:Q,compressedTexImage2D:ie,compressedTexImage3D:re,texImage2D:Qe,texImage3D:ye,updateUBOMapping:Ye,uniformBlockBinding:mt,texStorage2D:ue,texStorage3D:Ae,texSubImage2D:xe,texSubImage3D:de,compressedTexSubImage2D:oe,compressedTexSubImage3D:ke,scissor:Se,viewport:ze,reset:Be}}function GL(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new dt,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,w){return p?new OffscreenCanvas(b,w):Jf("canvas")}function g(b,w,W){let Q=1;const ie=$e(b);if((ie.width>W||ie.height>W)&&(Q=W/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const re=Math.floor(Q*ie.width),xe=Math.floor(Q*ie.height);d===void 0&&(d=_(re,xe));const de=w?_(re,xe):d;return de.width=re,de.height=xe,de.getContext("2d").drawImage(b,0,0,re,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+re+"x"+xe+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Li&&b.minFilter!==Yi}function h(b){n.generateMipmap(b)}function v(b,w,W,Q,ie=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=w;if(w===n.RED&&(W===n.FLOAT&&(re=n.R32F),W===n.HALF_FLOAT&&(re=n.R16F),W===n.UNSIGNED_BYTE&&(re=n.R8)),w===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(re=n.R8UI),W===n.UNSIGNED_SHORT&&(re=n.R16UI),W===n.UNSIGNED_INT&&(re=n.R32UI),W===n.BYTE&&(re=n.R8I),W===n.SHORT&&(re=n.R16I),W===n.INT&&(re=n.R32I)),w===n.RG&&(W===n.FLOAT&&(re=n.RG32F),W===n.HALF_FLOAT&&(re=n.RG16F),W===n.UNSIGNED_BYTE&&(re=n.RG8)),w===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(re=n.RG8UI),W===n.UNSIGNED_SHORT&&(re=n.RG16UI),W===n.UNSIGNED_INT&&(re=n.RG32UI),W===n.BYTE&&(re=n.RG8I),W===n.SHORT&&(re=n.RG16I),W===n.INT&&(re=n.RG32I)),w===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),w===n.RGBA){const xe=ie?$f:gt.getTransfer(Q);W===n.FLOAT&&(re=n.RGBA32F),W===n.HALF_FLOAT&&(re=n.RGBA16F),W===n.UNSIGNED_BYTE&&(re=xe===Tt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(b,w){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Li&&b.minFilter!==Yi?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function S(b){const w=b.target;w.removeEventListener("dispose",S),T(w),w.isVideoTexture&&c.delete(w)}function C(b){const w=b.target;w.removeEventListener("dispose",C),P(w)}function T(b){const w=i.get(b);if(w.__webglInit===void 0)return;const W=b.source,Q=f.get(W);if(Q){const ie=Q[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(b),Object.keys(Q).length===0&&f.delete(W)}i.remove(b)}function E(b){const w=i.get(b);n.deleteTexture(w.__webglTexture);const W=b.source,Q=f.get(W);delete Q[w.__cacheKey],o.memory.textures--}function P(b){const w=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ie=0;ie<w.__webglFramebuffer[Q].length;ie++)n.deleteFramebuffer(w.__webglFramebuffer[Q][ie]);else n.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)n.deleteFramebuffer(w.__webglFramebuffer[Q]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=b.textures;for(let Q=0,ie=W.length;Q<ie;Q++){const re=i.get(W[Q]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(W[Q])}i.remove(b)}let M=0;function y(){M=0}function N(){const b=M;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),M+=1,b}function U(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function D(b,w){const W=i.get(b);if(b.isVideoTexture&&Le(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(W,b,w);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+w)}function X(b,w){const W=i.get(b);if(b.version>0&&W.__version!==b.version){ee(W,b,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+w)}function j(b,w){const W=i.get(b);if(b.version>0&&W.__version!==b.version){ee(W,b,w);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+w)}function K(b,w){const W=i.get(b);if(b.version>0&&W.__version!==b.version){Fe(W,b,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+w)}const Y={[xm]:n.REPEAT,[ao]:n.CLAMP_TO_EDGE,[ym]:n.MIRRORED_REPEAT},L={[Li]:n.NEAREST,[MC]:n.NEAREST_MIPMAP_NEAREST,[yc]:n.NEAREST_MIPMAP_LINEAR,[Yi]:n.LINEAR,[_h]:n.LINEAR_MIPMAP_NEAREST,[lo]:n.LINEAR_MIPMAP_LINEAR},G={[FC]:n.NEVER,[GC]:n.ALWAYS,[kC]:n.LESS,[i1]:n.LEQUAL,[zC]:n.EQUAL,[VC]:n.GEQUAL,[BC]:n.GREATER,[HC]:n.NOTEQUAL};function R(b,w){if(w.type===ds&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Yi||w.magFilter===_h||w.magFilter===yc||w.magFilter===lo||w.minFilter===Yi||w.minFilter===_h||w.minFilter===yc||w.minFilter===lo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,Y[w.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Y[w.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Y[w.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,L[w.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,L[w.minFilter]),w.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,G[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Li||w.minFilter!==yc&&w.minFilter!==lo||w.type===ds&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ne(b,w){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",S));const Q=w.source;let ie=f.get(Q);ie===void 0&&(ie={},f.set(Q,ie));const re=U(w);if(re!==b.__cacheKey){ie[re]===void 0&&(ie[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[re].usedTimes++;const xe=ie[b.__cacheKey];xe!==void 0&&(ie[b.__cacheKey].usedTimes--,xe.usedTimes===0&&E(w)),b.__cacheKey=re,b.__webglTexture=ie[re].texture}return W}function ee(b,w,W){let Q=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=n.TEXTURE_3D);const ie=ne(b,w),re=w.source;t.bindTexture(Q,b.__webglTexture,n.TEXTURE0+W);const xe=i.get(re);if(re.version!==xe.__version||ie===!0){t.activeTexture(n.TEXTURE0+W);const de=gt.getPrimaries(gt.workingColorSpace),oe=w.colorSpace===rs?null:gt.getPrimaries(w.colorSpace),ke=w.colorSpace===rs||de===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ue=g(w.image,!1,r.maxTextureSize);ue=F(w,ue);const Ae=s.convert(w.format,w.colorSpace),Qe=s.convert(w.type);let ye=v(w.internalFormat,Ae,Qe,w.colorSpace,w.isVideoTexture);R(Q,w);let Se;const ze=w.mipmaps,Ye=w.isVideoTexture!==!0,mt=xe.__version===void 0||ie===!0,Be=re.dataReady,I=x(w,ue);if(w.isDepthTexture)ye=n.DEPTH_COMPONENT16,w.type===ds?ye=n.DEPTH_COMPONENT32F:w.type===tl?ye=n.DEPTH_COMPONENT24:w.type===ku&&(ye=n.DEPTH24_STENCIL8),mt&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,ye,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,ye,ue.width,ue.height,0,Ae,Qe,null));else if(w.isDataTexture)if(ze.length>0){Ye&&mt&&t.texStorage2D(n.TEXTURE_2D,I,ye,ze[0].width,ze[0].height);for(let q=0,Z=ze.length;q<Z;q++)Se=ze[q],Ye?Be&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Se.width,Se.height,Ae,Qe,Se.data):t.texImage2D(n.TEXTURE_2D,q,ye,Se.width,Se.height,0,Ae,Qe,Se.data);w.generateMipmaps=!1}else Ye?(mt&&t.texStorage2D(n.TEXTURE_2D,I,ye,ue.width,ue.height),Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,Ae,Qe,ue.data)):t.texImage2D(n.TEXTURE_2D,0,ye,ue.width,ue.height,0,Ae,Qe,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ye&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,I,ye,ze[0].width,ze[0].height,ue.depth);for(let q=0,Z=ze.length;q<Z;q++)Se=ze[q],w.format!==cr?Ae!==null?Ye?Be&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,ue.depth,Ae,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,ye,Se.width,Se.height,ue.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,ue.depth,Ae,Qe,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,ye,Se.width,Se.height,ue.depth,0,Ae,Qe,Se.data)}else{Ye&&mt&&t.texStorage2D(n.TEXTURE_2D,I,ye,ze[0].width,ze[0].height);for(let q=0,Z=ze.length;q<Z;q++)Se=ze[q],w.format!==cr?Ae!==null?Ye?Be&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,q,ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?Be&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Se.width,Se.height,Ae,Qe,Se.data):t.texImage2D(n.TEXTURE_2D,q,ye,Se.width,Se.height,0,Ae,Qe,Se.data)}else if(w.isDataArrayTexture)Ye?(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,I,ye,ue.width,ue.height,ue.depth),Be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Qe,ue.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ue.width,ue.height,ue.depth,0,Ae,Qe,ue.data);else if(w.isData3DTexture)Ye?(mt&&t.texStorage3D(n.TEXTURE_3D,I,ye,ue.width,ue.height,ue.depth),Be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ae,Qe,ue.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ue.width,ue.height,ue.depth,0,Ae,Qe,ue.data);else if(w.isFramebufferTexture){if(mt)if(Ye)t.texStorage2D(n.TEXTURE_2D,I,ye,ue.width,ue.height);else{let q=ue.width,Z=ue.height;for(let fe=0;fe<I;fe++)t.texImage2D(n.TEXTURE_2D,fe,ye,q,Z,0,Ae,Qe,null),q>>=1,Z>>=1}}else if(ze.length>0){if(Ye&&mt){const q=$e(ze[0]);t.texStorage2D(n.TEXTURE_2D,I,ye,q.width,q.height)}for(let q=0,Z=ze.length;q<Z;q++)Se=ze[q],Ye?Be&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ae,Qe,Se):t.texImage2D(n.TEXTURE_2D,q,ye,Ae,Qe,Se);w.generateMipmaps=!1}else if(Ye){if(mt){const q=$e(ue);t.texStorage2D(n.TEXTURE_2D,I,ye,q.width,q.height)}Be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Qe,ue)}else t.texImage2D(n.TEXTURE_2D,0,ye,Ae,Qe,ue);m(w)&&h(Q),xe.__version=re.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Fe(b,w,W){if(w.image.length!==6)return;const Q=ne(b,w),ie=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+W);const re=i.get(ie);if(ie.version!==re.__version||Q===!0){t.activeTexture(n.TEXTURE0+W);const xe=gt.getPrimaries(gt.workingColorSpace),de=w.colorSpace===rs?null:gt.getPrimaries(w.colorSpace),oe=w.colorSpace===rs||xe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ke=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let Z=0;Z<6;Z++)!ke&&!ue?Ae[Z]=g(w.image[Z],!0,r.maxCubemapSize):Ae[Z]=ue?w.image[Z].image:w.image[Z],Ae[Z]=F(w,Ae[Z]);const Qe=Ae[0],ye=s.convert(w.format,w.colorSpace),Se=s.convert(w.type),ze=v(w.internalFormat,ye,Se,w.colorSpace),Ye=w.isVideoTexture!==!0,mt=re.__version===void 0||Q===!0,Be=ie.dataReady;let I=x(w,Qe);R(n.TEXTURE_CUBE_MAP,w);let q;if(ke){Ye&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,ze,Qe.width,Qe.height);for(let Z=0;Z<6;Z++){q=Ae[Z].mipmaps;for(let fe=0;fe<q.length;fe++){const he=q[fe];w.format!==cr?ye!==null?Ye?Be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,he.width,he.height,ye,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,ze,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?Be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,he.width,he.height,ye,Se,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,ze,he.width,he.height,0,ye,Se,he.data)}}}else{if(q=w.mipmaps,Ye&&mt){q.length>0&&I++;const Z=$e(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,I,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ue){Ye?Be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae[Z].width,Ae[Z].height,ye,Se,Ae[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Ae[Z].width,Ae[Z].height,0,ye,Se,Ae[Z].data);for(let fe=0;fe<q.length;fe++){const je=q[fe].image[Z].image;Ye?Be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,je.width,je.height,ye,Se,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,ze,je.width,je.height,0,ye,Se,je.data)}}else{Ye?Be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ye,Se,Ae[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,ye,Se,Ae[Z]);for(let fe=0;fe<q.length;fe++){const he=q[fe];Ye?Be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,ye,Se,he.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,ze,ye,Se,he.image[Z])}}}m(w)&&h(n.TEXTURE_CUBE_MAP),re.__version=ie.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function H(b,w,W,Q,ie,re){const xe=s.convert(W.format,W.colorSpace),de=s.convert(W.type),oe=v(W.internalFormat,xe,de,W.colorSpace);if(!i.get(w).__hasExternalTextures){const ue=Math.max(1,w.width>>re),Ae=Math.max(1,w.height>>re);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,re,oe,ue,Ae,w.depth,0,xe,de,null):t.texImage2D(ie,re,oe,ue,Ae,0,xe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Re(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ie,i.get(W).__webglTexture,0,ve(w)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ie,i.get(W).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function J(b,w,W){if(n.bindRenderbuffer(n.RENDERBUFFER,b),w.depthBuffer&&!w.stencilBuffer){let Q=n.DEPTH_COMPONENT24;if(W||Re(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ds?Q=n.DEPTH_COMPONENT32F:ie.type===tl&&(Q=n.DEPTH_COMPONENT24));const re=ve(w);Re(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,Q,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,Q,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(w.depthBuffer&&w.stencilBuffer){const Q=ve(w);W&&Re(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,w.width,w.height):Re(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const Q=w.textures;for(let ie=0;ie<Q.length;ie++){const re=Q[ie],xe=s.convert(re.format,re.colorSpace),de=s.convert(re.type),oe=v(re.internalFormat,xe,de,re.colorSpace),ke=ve(w);W&&Re(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,oe,w.width,w.height):Re(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,oe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,oe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,ie=ve(w);if(w.depthTexture.format===Fa)Re(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(w.depthTexture.format===Lu)Re(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function te(b){const w=i.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,b)}else if(W){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=n.createRenderbuffer(),J(w.__webglDepthbuffer[Q],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),J(w.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(b,w,W){const Q=i.get(b);w!==void 0&&H(Q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&te(b)}function Ie(b){const w=b.texture,W=i.get(b),Q=i.get(w);b.addEventListener("dispose",C);const ie=b.textures,re=b.isWebGLCubeRenderTarget===!0,xe=ie.length>1;if(xe||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=w.version,o.memory.textures++),re){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let oe=0;oe<w.mipmaps.length;oe++)W.__webglFramebuffer[de][oe]=n.createFramebuffer()}else W.__webglFramebuffer[de]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)W.__webglFramebuffer[de]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(xe)for(let de=0,oe=ie.length;de<oe;de++){const ke=i.get(ie[de]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Re(b)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let de=0;de<ie.length;de++){const oe=ie[de];W.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[de]);const ke=s.convert(oe.format,oe.colorSpace),ue=s.convert(oe.type),Ae=v(oe.internalFormat,ke,ue,oe.colorSpace,b.isXRRenderTarget===!0),Qe=ve(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,Ae,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,W.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),J(W.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),R(n.TEXTURE_CUBE_MAP,w);for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)H(W.__webglFramebuffer[de][oe],b,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,oe);else H(W.__webglFramebuffer[de],b,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(w)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let de=0,oe=ie.length;de<oe;de++){const ke=ie[de],ue=i.get(ke);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),R(n.TEXTURE_2D,ke),H(W.__webglFramebuffer,b,ke,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(ke)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),R(de,w),w.mipmaps&&w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)H(W.__webglFramebuffer[oe],b,w,n.COLOR_ATTACHMENT0,de,oe);else H(W.__webglFramebuffer,b,w,n.COLOR_ATTACHMENT0,de,0);m(w)&&h(de),t.unbindTexture()}b.depthBuffer&&te(b)}function k(b){const w=b.textures;for(let W=0,Q=w.length;W<Q;W++){const ie=w[W];if(m(ie)){const re=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(ie).__webglTexture;t.bindTexture(re,xe),h(re),t.unbindTexture()}}}const We=[],Me=[];function Ce(b){if(b.samples>0){if(Re(b)===!1){const w=b.textures,W=b.width,Q=b.height;let ie=n.COLOR_BUFFER_BIT;const re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(b),de=w.length>1;if(de)for(let oe=0;oe<w.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let oe=0;oe<w.length;oe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[oe]);const ke=i.get(w[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ke,0)}n.blitFramebuffer(0,0,W,Q,0,0,W,Q,ie,n.NEAREST),l===!0&&(We.length=0,Me.length=0,We.push(n.COLOR_ATTACHMENT0+oe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(We.push(re),Me.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Me)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let oe=0;oe<w.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[oe]);const ke=i.get(w[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const w=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function ve(b){return Math.min(r.maxSamples,b.samples)}function Re(b){const w=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Le(b){const w=o.render.frame;c.get(b)!==w&&(c.set(b,w),b.update())}function F(b,w){const W=b.colorSpace,Q=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||W!==Fs&&W!==rs&&(gt.getTransfer(W)===Tt?(Q!==cr||ie!==Ds)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function $e(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=y,this.setTexture2D=D,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=Ue,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=H,this.useMultisampledRTT=Re}function WL(n,e){function t(i,r=rs){let s;const o=gt.getTransfer(r);if(i===Ds)return n.UNSIGNED_BYTE;if(i===QM)return n.UNSIGNED_SHORT_4_4_4_4;if(i===JM)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wC)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===EC)return n.BYTE;if(i===TC)return n.SHORT;if(i===KM)return n.UNSIGNED_SHORT;if(i===ZM)return n.INT;if(i===tl)return n.UNSIGNED_INT;if(i===ds)return n.FLOAT;if(i===Md)return n.HALF_FLOAT;if(i===AC)return n.ALPHA;if(i===CC)return n.RGB;if(i===cr)return n.RGBA;if(i===RC)return n.LUMINANCE;if(i===PC)return n.LUMINANCE_ALPHA;if(i===Fa)return n.DEPTH_COMPONENT;if(i===Lu)return n.DEPTH_STENCIL;if(i===bC)return n.RED;if(i===e1)return n.RED_INTEGER;if(i===LC)return n.RG;if(i===t1)return n.RG_INTEGER;if(i===n1)return n.RGBA_INTEGER;if(i===vh||i===xh||i===yh||i===Sh)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vh)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vh)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xh)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yh)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===W0||i===X0||i===j0||i===Y0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===W0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===X0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===j0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Y0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===q0||i===$0||i===K0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===q0||i===$0)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===K0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Z0||i===Q0||i===J0||i===ev||i===tv||i===nv||i===iv||i===rv||i===sv||i===ov||i===av||i===lv||i===uv||i===cv)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Z0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Q0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===J0)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ev)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===iv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ov)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===av)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cv)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mh||i===fv||i===dv)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mh)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fv)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dv)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===DC||i===hv||i===pv||i===mv)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hv)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pv)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mv)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ku?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class XL extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vc extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jL={type:"move"};class $h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const YL=`
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

}`;class $L{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ni,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Gr({vertexShader:YL,fragmentShader:qL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fr(new il(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class KL extends al{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const g=new $L,m=t.getContextAttributes();let h=null,v=null;const x=[],S=[],C=new dt;let T=null;const E=new ji;E.layers.enable(1),E.viewport=new hn;const P=new ji;P.layers.enable(2),P.viewport=new hn;const M=[E,P],y=new XL;y.layers.enable(1),y.layers.enable(2);let N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=x[H];return J===void 0&&(J=new $h,x[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=x[H];return J===void 0&&(J=new $h,x[H]=J),J.getGripSpace()},this.getHand=function(H){let J=x[H];return J===void 0&&(J=new $h,x[H]=J),J.getHandSpace()};function D(H){const J=S.indexOf(H.inputSource);if(J===-1)return;const le=x[J];le!==void 0&&(le.update(H.inputSource,H.frame,u||o),le.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",j);for(let H=0;H<x.length;H++){const J=S[H];J!==null&&(S[H]=null,x[H].disconnect(J))}N=null,U=null,g.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",X),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new bo(p.framebufferWidth,p.framebufferHeight,{format:cr,type:Ds,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,le=null,te=null;m.depth&&(te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?Lu:Fa,le=m.stencil?ku:tl);const Ue={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new bo(f.textureWidth,f.textureHeight,{format:cr,type:Ds,depthTexture:new v1(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(H){for(let J=0;J<H.removed.length;J++){const le=H.removed[J],te=S.indexOf(le);te>=0&&(S[te]=null,x[te].disconnect(le))}for(let J=0;J<H.added.length;J++){const le=H.added[J];let te=S.indexOf(le);if(te===-1){for(let Ie=0;Ie<x.length;Ie++)if(Ie>=S.length){S.push(le),te=Ie;break}else if(S[Ie]===null){S[Ie]=le,te=Ie;break}if(te===-1)break}const Ue=x[te];Ue&&Ue.connect(le)}}const K=new $,Y=new $;function L(H,J,le){K.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const te=K.distanceTo(Y),Ue=J.projectionMatrix.elements,Ie=le.projectionMatrix.elements,k=Ue[14]/(Ue[10]-1),We=Ue[14]/(Ue[10]+1),Me=(Ue[9]+1)/Ue[5],Ce=(Ue[9]-1)/Ue[5],ve=(Ue[8]-1)/Ue[0],Re=(Ie[8]+1)/Ie[0],Le=k*ve,F=k*Re,$e=te/(-ve+Re),b=$e*-ve;J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(b),H.translateZ($e),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const w=k+$e,W=We+$e,Q=Le-b,ie=F+(te-b),re=Me*We/W*w,xe=Ce*We/W*w;H.projectionMatrix.makePerspective(Q,ie,re,xe,w,W),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function G(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;g.texture!==null&&(H.near=g.depthNear,H.far=g.depthFar),y.near=P.near=E.near=H.near,y.far=P.far=E.far=H.far,(N!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,U=y.far,E.near=N,E.far=U,P.near=N,P.far=U,E.updateProjectionMatrix(),P.updateProjectionMatrix(),H.updateProjectionMatrix());const J=H.parent,le=y.cameras;G(y,J);for(let te=0;te<le.length;te++)G(le[te],J);le.length===2?L(y,E,P):y.projectionMatrix.copy(E.projectionMatrix),R(H,y,J)};function R(H,J,le){le===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Sm*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null};let ne=null;function ee(H,J){if(c=J.getViewerPose(u||o),_=J,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let te=!1;le.length!==y.cameras.length&&(y.cameras.length=0,te=!0);for(let Ie=0;Ie<le.length;Ie++){const k=le[Ie];let We=null;if(p!==null)We=p.getViewport(k);else{const Ce=d.getViewSubImage(f,k);We=Ce.viewport,Ie===0&&(e.setRenderTargetTextures(v,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(v))}let Me=M[Ie];Me===void 0&&(Me=new ji,Me.layers.enable(Ie),Me.viewport=new hn,M[Ie]=Me),Me.matrix.fromArray(k.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(k.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(We.x,We.y,We.width,We.height),Ie===0&&(y.matrix.copy(Me.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),te===!0&&y.cameras.push(Me)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Ie=d.getDepthInformation(le[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,r.renderState)}}for(let le=0;le<x.length;le++){const te=S[le],Ue=x[le];te!==null&&Ue!==void 0&&Ue.update(te,J,u||o)}g.render(e,y),ne&&ne(H,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const Fe=new g1;Fe.setAnimationLoop(ee),this.setAnimationLoop=function(H){ne=H},this.dispose=function(){}}}const js=new Vr,ZL=new Jt;function QL(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,d1(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ti&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ti&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,S=v.envMapRotation;if(x&&(m.envMap.value=x,js.copy(S),js.x*=-1,js.y*=-1,js.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),m.envMapRotation.value.setFromMatrix4(ZL.makeRotationFromEuler(js)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const C=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*C,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ti&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JL(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function c(v){const x=d();v.__bindingPointIndex=x;const S=n.createBuffer(),C=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,E=S.length;T<E;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,y=P.length;M<y;M++){const N=P[M];if(p(N,T,M,C)===!0){const U=N.__offset,D=Array.isArray(N.value)?N.value:[N.value];let X=0;for(let j=0;j<D.length;j++){const K=D[j],Y=g(K);typeof K=="number"||typeof K=="boolean"?(N.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,U+X,N.__data)):K.isMatrix3?(N.__data[0]=K.elements[0],N.__data[1]=K.elements[1],N.__data[2]=K.elements[2],N.__data[3]=0,N.__data[4]=K.elements[3],N.__data[5]=K.elements[4],N.__data[6]=K.elements[5],N.__data[7]=0,N.__data[8]=K.elements[6],N.__data[9]=K.elements[7],N.__data[10]=K.elements[8],N.__data[11]=0):(K.toArray(N.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,S,C){const T=v.value,E=x+"_"+S;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{const P=C[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return C[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(v){const x=v.uniforms;let S=0;const C=16;for(let E=0,P=x.length;E<P;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,N=M.length;y<N;y++){const U=M[y],D=Array.isArray(U.value)?U.value:[U.value];for(let X=0,j=D.length;X<j;X++){const K=D[X],Y=g(K),L=S%C;L!==0&&C-L<Y.boundary&&(S+=C-L),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Y.storage}}}const T=S%C;return T>0&&(S+=C-T),v.__size=S,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class eD{constructor(e={}){const{canvas:t=XC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nr,this._useLegacyLights=!1,this.toneMapping=ws,this.toneMappingExposure=1;const x=this;let S=!1,C=0,T=0,E=null,P=-1,M=null;const y=new hn,N=new hn;let U=null;const D=new _t(0);let X=0,j=t.width,K=t.height,Y=1,L=null,G=null;const R=new hn(0,0,j,K),ne=new hn(0,0,j,K);let ee=!1;const Fe=new m1;let H=!1,J=!1;const le=new Jt,te=new $,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return E===null?Y:1}let k=i;function We(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hg}`),t.addEventListener("webglcontextlost",I,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",Z,!1),k===null){const O="webgl2";if(k=We(O,A),k===null)throw We(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,Ce,ve,Re,Le,F,$e,b,w,W,Q,ie,re,xe,de,oe,ke,ue,Ae,Qe,ye,Se,ze,Ye;function mt(){Me=new l2(k),Me.init(),Se=new WL(k,Me),Ce=new n2(k,Me,e,Se),ve=new VL(k),Re=new f2(k),Le=new RL,F=new GL(k,Me,ve,Le,Ce,Se,Re),$e=new r2(x),b=new a2(x),w=new vR(k),ze=new e2(k,w),W=new u2(k,w,Re,ze),Q=new h2(k,W,w,Re),Ae=new d2(k,Ce,F),oe=new i2(Le),ie=new CL(x,$e,b,Me,Ce,ze,oe),re=new QL(x,Le),xe=new bL,de=new OL(Me),ue=new Jb(x,$e,b,ve,Q,f,l),ke=new HL(x,Q,Ce),Ye=new JL(k,Re,Ce,ve),Qe=new t2(k,Me,Re),ye=new c2(k,Me,Re),Re.programs=ie.programs,x.capabilities=Ce,x.extensions=Me,x.properties=Le,x.renderLists=xe,x.shadowMap=ke,x.state=ve,x.info=Re}mt();const Be=new KL(x,k);this.xr=Be,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(j,K,!1))},this.getSize=function(A){return A.set(j,K)},this.setSize=function(A,O,z=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,K=O,t.width=Math.floor(A*Y),t.height=Math.floor(O*Y),z===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(j*Y,K*Y).floor()},this.setDrawingBufferSize=function(A,O,z){j=A,K=O,Y=z,t.width=Math.floor(A*z),t.height=Math.floor(O*z),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,O,z,B){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,O,z,B),ve.viewport(y.copy(R).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,O,z,B){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,O,z,B),ve.scissor(N.copy(ne).multiplyScalar(Y).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(A){ve.setScissorTest(ee=A)},this.setOpaqueSort=function(A){L=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(A=!0,O=!0,z=!0){let B=0;if(A){let V=!1;if(E!==null){const ce=E.texture.format;V=ce===n1||ce===t1||ce===e1}if(V){const ce=E.texture.type,me=ce===Ds||ce===tl||ce===KM||ce===ku||ce===QM||ce===JM,_e=ue.getClearColor(),Ne=ue.getClearAlpha(),Ve=_e.r,be=_e.g,Pe=_e.b;me?(p[0]=Ve,p[1]=be,p[2]=Pe,p[3]=Ne,k.clearBufferuiv(k.COLOR,0,p)):(_[0]=Ve,_[1]=be,_[2]=Pe,_[3]=Ne,k.clearBufferiv(k.COLOR,0,_))}else B|=k.COLOR_BUFFER_BIT}O&&(B|=k.DEPTH_BUFFER_BIT),z&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),xe.dispose(),de.dispose(),Le.dispose(),$e.dispose(),b.dispose(),Q.dispose(),ze.dispose(),Ye.dispose(),ie.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",rt),Be.removeEventListener("sessionend",Oe),Te.stop()};function I(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=Re.autoReset,O=ke.enabled,z=ke.autoUpdate,B=ke.needsUpdate,V=ke.type;mt(),Re.autoReset=A,ke.enabled=O,ke.autoUpdate=z,ke.needsUpdate=B,ke.type=V}function Z(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const O=A.target;O.removeEventListener("dispose",fe),he(O)}function he(A){je(A),Le.remove(A)}function je(A){const O=Le.get(A).programs;O!==void 0&&(O.forEach(function(z){ie.releaseProgram(z)}),A.isShaderMaterial&&ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,z,B,V,ce){O===null&&(O=Ue);const me=V.isMesh&&V.matrixWorld.determinant()<0,_e=nn(A,O,z,B,V);ve.setMaterial(B,me);let Ne=z.index,Ve=1;if(B.wireframe===!0){if(Ne=W.getWireframeAttribute(z),Ne===void 0)return;Ve=2}const be=z.drawRange,Pe=z.attributes.position;let ct=be.start*Ve,Wt=(be.start+be.count)*Ve;ce!==null&&(ct=Math.max(ct,ce.start*Ve),Wt=Math.min(Wt,(ce.start+ce.count)*Ve)),Ne!==null?(ct=Math.max(ct,0),Wt=Math.min(Wt,Ne.count)):Pe!=null&&(ct=Math.max(ct,0),Wt=Math.min(Wt,Pe.count));const gn=Wt-ct;if(gn<0||gn===1/0)return;ze.setup(V,B,_e,z,Ne);let Pn,qe=Qe;if(Ne!==null&&(Pn=w.get(Ne),qe=ye,qe.setIndex(Pn)),V.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*Ie()),qe.setMode(k.LINES)):qe.setMode(k.TRIANGLES);else if(V.isLine){let He=B.linewidth;He===void 0&&(He=1),ve.setLineWidth(He*Ie()),V.isLineSegments?qe.setMode(k.LINES):V.isLineLoop?qe.setMode(k.LINE_LOOP):qe.setMode(k.LINE_STRIP)}else V.isPoints?qe.setMode(k.POINTS):V.isSprite&&qe.setMode(k.TRIANGLES);if(V.isBatchedMesh)V._multiDrawInstances!==null?qe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances):qe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)qe.renderInstances(ct,gn,V.count);else if(z.isInstancedBufferGeometry){const He=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Zi=Math.min(z.instanceCount,He);qe.renderInstances(ct,gn,Zi)}else qe.render(ct,gn)};function lt(A,O,z){A.transparent===!0&&A.side===or&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Lt(A,O,z),A.side=Ls,A.needsUpdate=!0,Lt(A,O,z),A.side=or):Lt(A,O,z)}this.compile=function(A,O,z=null){z===null&&(z=A),m=de.get(z),m.init(O),v.push(m),z.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==z&&A.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const B=new Set;return A.traverse(function(V){const ce=V.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const _e=ce[me];lt(_e,z,V),B.add(_e)}else lt(ce,z,V),B.add(ce)}),v.pop(),m=null,B},this.compileAsync=function(A,O,z=null){const B=this.compile(A,O,z);return new Promise(V=>{function ce(){if(B.forEach(function(me){Le.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){V(A);return}setTimeout(ce,10)}Me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ht=null;function xt(A){ht&&ht(A)}function rt(){Te.stop()}function Oe(){Te.start()}const Te=new g1;Te.setAnimationLoop(xt),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(A){ht=A,Be.setAnimationLoop(A),A===null?Te.stop():Te.start()},Be.addEventListener("sessionstart",rt),Be.addEventListener("sessionend",Oe),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(O),O=Be.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,O,E),m=de.get(A,v.length),m.init(O),v.push(m),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Fe.setFromProjectionMatrix(le),J=this.localClippingEnabled,H=oe.init(this.clippingPlanes,J),g=xe.get(A,h.length),g.init(),h.push(g),at(A,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(L,G);const z=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1;z&&ue.addToRenderList(g,A),this.info.render.frame++,H===!0&&oe.beginShadows();const B=m.state.shadowsArray;ke.render(B,A,O),H===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,ce=g.transmissive;if(m.setupLights(x._useLegacyLights),O.isArrayCamera){const me=O.cameras;if(ce.length>0)for(let _e=0,Ne=me.length;_e<Ne;_e++){const Ve=me[_e];Xe(V,ce,A,Ve)}z&&ue.render(A);for(let _e=0,Ne=me.length;_e<Ne;_e++){const Ve=me[_e];pe(g,A,Ve,Ve.viewport)}}else ce.length>0&&Xe(V,ce,A,O),z&&ue.render(A),pe(g,A,O);E!==null&&(F.updateMultisampleRenderTarget(E),F.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,O),ze.resetDefaultState(),P=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],H===!0&&oe.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function at(A,O,z,B){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Fe.intersectsSprite(A)){B&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const me=Q.update(A),_e=A.material;_e.visible&&g.push(A,me,_e,z,te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Fe.intersectsObject(A))){const me=Q.update(A),_e=A.material;if(B&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),te.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),te.copy(me.boundingSphere.center)),te.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(_e)){const Ne=me.groups;for(let Ve=0,be=Ne.length;Ve<be;Ve++){const Pe=Ne[Ve],ct=_e[Pe.materialIndex];ct&&ct.visible&&g.push(A,me,ct,z,te.z,Pe)}}else _e.visible&&g.push(A,me,_e,z,te.z,null)}}const ce=A.children;for(let me=0,_e=ce.length;me<_e;me++)at(ce[me],O,z,B)}function pe(A,O,z,B){const V=A.opaque,ce=A.transmissive,me=A.transparent;m.setupLightsView(z),H===!0&&oe.setGlobalState(x.clippingPlanes,z),B&&ve.viewport(y.copy(B)),V.length>0&&De(V,O,z),ce.length>0&&De(ce,O,z),me.length>0&&De(me,O,z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Xe(A,O,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new bo(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?Md:Ds,minFilter:lo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ce=m.state.transmissionRenderTarget[B.id],me=B.viewport||y;ce.setSize(me.z,me.w);const _e=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(D),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear();const Ne=x.toneMapping;x.toneMapping=ws;const Ve=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),H===!0&&oe.setGlobalState(x.clippingPlanes,B),De(A,z,B),F.updateMultisampleRenderTarget(ce),F.updateRenderTargetMipmap(ce),Me.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Pe=0,ct=O.length;Pe<ct;Pe++){const Wt=O[Pe],gn=Wt.object,Pn=Wt.geometry,qe=Wt.material,He=Wt.group;if(qe.side===or&&gn.layers.test(B.layers)){const Zi=qe.side;qe.side=ti,qe.needsUpdate=!0,Ge(gn,z,B,Pn,qe,He),qe.side=Zi,qe.needsUpdate=!0,be=!0}}be===!0&&(F.updateMultisampleRenderTarget(ce),F.updateRenderTargetMipmap(ce))}x.setRenderTarget(_e),x.setClearColor(D,X),Ve!==void 0&&(B.viewport=Ve),x.toneMapping=Ne}function De(A,O,z){const B=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ce=A.length;V<ce;V++){const me=A[V],_e=me.object,Ne=me.geometry,Ve=B===null?me.material:B,be=me.group;_e.layers.test(z.layers)&&Ge(_e,O,z,Ne,Ve,be)}}function Ge(A,O,z,B,V,ce){A.onBeforeRender(x,O,z,B,V,ce),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,O,z,B,A,ce),V.transparent===!0&&V.side===or&&V.forceSinglePass===!1?(V.side=ti,V.needsUpdate=!0,x.renderBufferDirect(z,O,B,V,A,ce),V.side=Ls,V.needsUpdate=!0,x.renderBufferDirect(z,O,B,V,A,ce),V.side=or):x.renderBufferDirect(z,O,B,V,A,ce),A.onAfterRender(x,O,z,B,V,ce)}function Lt(A,O,z){O.isScene!==!0&&(O=Ue);const B=Le.get(A),V=m.state.lights,ce=m.state.shadowsArray,me=V.state.version,_e=ie.getParameters(A,V.state,ce,O,z),Ne=ie.getProgramCacheKey(_e);let Ve=B.programs;B.environment=A.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(A.isMeshStandardMaterial?b:$e).get(A.envMap||B.environment),B.envMapRotation=B.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",fe),Ve=new Map,B.programs=Ve);let be=Ve.get(Ne);if(be!==void 0){if(B.currentProgram===be&&B.lightsStateVersion===me)return Ct(A,_e),be}else _e.uniforms=ie.getUniforms(A),A.onBuild(z,_e,x),A.onBeforeCompile(_e,x),be=ie.acquireProgram(_e,Ne),Ve.set(Ne,be),B.uniforms=_e.uniforms;const Pe=B.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),Ct(A,_e),B.needsLights=yt(A),B.lightsStateVersion=me,B.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMap.value=V.state.directionalShadowMap,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotShadowMap.value=V.state.spotShadowMap,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMap.value=V.state.pointShadowMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),B.currentProgram=be,B.uniformsList=null,be}function et(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=ff.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Ct(A,O){const z=Le.get(A);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function nn(A,O,z,B,V){O.isScene!==!0&&(O=Ue),F.resetTextureUnits();const ce=O.fog,me=B.isMeshStandardMaterial?O.environment:null,_e=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Fs,Ne=(B.isMeshStandardMaterial?b:$e).get(B.envMap||me),Ve=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,be=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!z.morphAttributes.position,ct=!!z.morphAttributes.normal,Wt=!!z.morphAttributes.color;let gn=ws;B.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(gn=x.toneMapping);const Pn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,qe=Pn!==void 0?Pn.length:0,He=Le.get(B),Zi=m.state.lights;if(H===!0&&(J===!0||A!==M)){const Si=A===M&&B.id===P;oe.setState(B,A,Si)}let ft=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Zi.state.version||He.outputColorSpace!==_e||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&He.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&He.instancingMorph===!1&&V.morphTexture!==null||He.envMap!==Ne||B.fog===!0&&He.fog!==ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==oe.numPlanes||He.numIntersection!==oe.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==be||He.morphTargets!==Pe||He.morphNormals!==ct||He.morphColors!==Wt||He.toneMapping!==gn||He.morphTargetsCount!==qe)&&(ft=!0):(ft=!0,He.__version=B.version);let ks=He.currentProgram;ft===!0&&(ks=Lt(B,O,V));let Xg=!1,ul=!1,Ad=!1;const _n=ks.getUniforms(),Xr=He.uniforms;if(ve.useProgram(ks.program)&&(Xg=!0,ul=!0,Ad=!0),B.id!==P&&(P=B.id,ul=!0),Xg||M!==A){_n.setValue(k,"projectionMatrix",A.projectionMatrix),_n.setValue(k,"viewMatrix",A.matrixWorldInverse);const Si=_n.map.cameraPosition;Si!==void 0&&Si.setValue(k,te.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&_n.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_n.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,ul=!0,Ad=!0)}if(V.isSkinnedMesh){_n.setOptional(k,V,"bindMatrix"),_n.setOptional(k,V,"bindMatrixInverse");const Si=V.skeleton;Si&&(Si.boneTexture===null&&Si.computeBoneTexture(),_n.setValue(k,"boneTexture",Si.boneTexture,F))}V.isBatchedMesh&&(_n.setOptional(k,V,"batchingTexture"),_n.setValue(k,"batchingTexture",V._matricesTexture,F));const Cd=z.morphAttributes;if((Cd.position!==void 0||Cd.normal!==void 0||Cd.color!==void 0)&&Ae.update(V,z,ks),(ul||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,_n.setValue(k,"receiveShadow",V.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Xr.envMap.value=Ne,Xr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&O.environment!==null&&(Xr.envMapIntensity.value=O.environmentIntensity),ul&&(_n.setValue(k,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Rt(Xr,Ad),ce&&B.fog===!0&&re.refreshFogUniforms(Xr,ce),re.refreshMaterialUniforms(Xr,B,Y,K,m.state.transmissionRenderTarget[A.id]),ff.upload(k,et(He),Xr,F)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ff.upload(k,et(He),Xr,F),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_n.setValue(k,"center",V.center),_n.setValue(k,"modelViewMatrix",V.modelViewMatrix),_n.setValue(k,"normalMatrix",V.normalMatrix),_n.setValue(k,"modelMatrix",V.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Si=B.uniformsGroups;for(let Rd=0,T1=Si.length;Rd<T1;Rd++){const jg=Si[Rd];Ye.update(jg,ks),Ye.bind(jg,ks)}}return ks}function Rt(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function yt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,O,z){Le.get(A.texture).__webglTexture=O,Le.get(A.depthTexture).__webglTexture=z;const B=Le.get(A);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const z=Le.get(A);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,z=0){E=A,C=O,T=z;let B=!0,V=null,ce=!1,me=!1;if(A){const Ne=Le.get(A);Ne.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(k.FRAMEBUFFER,null),B=!1):Ne.__webglFramebuffer===void 0?F.setupRenderTarget(A):Ne.__hasExternalTextures&&F.rebindTextures(A,Le.get(A.texture).__webglTexture,Le.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(me=!0);const be=Le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(be[O])?V=be[O][z]:V=be[O],ce=!0):A.samples>0&&F.useMultisampledRTT(A)===!1?V=Le.get(A).__webglMultisampledFramebuffer:Array.isArray(be)?V=be[z]:V=be,y.copy(A.viewport),N.copy(A.scissor),U=A.scissorTest}else y.copy(R).multiplyScalar(Y).floor(),N.copy(ne).multiplyScalar(Y).floor(),U=ee;if(ve.bindFramebuffer(k.FRAMEBUFFER,V)&&B&&ve.drawBuffers(A,V),ve.viewport(y),ve.scissor(N),ve.setScissorTest(U),ce){const Ne=Le.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ne.__webglTexture,z)}else if(me){const Ne=Le.get(A.texture),Ve=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.__webglTexture,z||0,Ve)}P=-1},this.readRenderTargetPixels=function(A,O,z,B,V,ce,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){ve.bindFramebuffer(k.FRAMEBUFFER,_e);try{const Ne=A.texture,Ve=Ne.format,be=Ne.type;if(!Ce.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-B&&z>=0&&z<=A.height-V&&k.readPixels(O,z,B,V,Se.convert(Ve),Se.convert(be),ce)}finally{const Ne=E!==null?Le.get(E).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(A,O,z=0){const B=Math.pow(2,-z),V=Math.floor(O.image.width*B),ce=Math.floor(O.image.height*B);F.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,z,0,0,A.x,A.y,V,ce),ve.unbindTexture()},this.copyTextureToTexture=function(A,O,z,B=0){const V=O.image.width,ce=O.image.height,me=Se.convert(z.format),_e=Se.convert(z.type);F.setTexture2D(z,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,B,A.x,A.y,V,ce,me,_e,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,B,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,me,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,B,A.x,A.y,me,_e,O.image),B===0&&z.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,O,z,B,V=0){const ce=A.max.x-A.min.x,me=A.max.y-A.min.y,_e=A.max.z-A.min.z,Ne=Se.convert(B.format),Ve=Se.convert(B.type);let be;if(B.isData3DTexture)F.setTexture3D(B,0),be=k.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)F.setTexture2DArray(B,0),be=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);const Pe=k.getParameter(k.UNPACK_ROW_LENGTH),ct=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Wt=k.getParameter(k.UNPACK_SKIP_PIXELS),gn=k.getParameter(k.UNPACK_SKIP_ROWS),Pn=k.getParameter(k.UNPACK_SKIP_IMAGES),qe=z.isCompressedTexture?z.mipmaps[V]:z.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,qe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,qe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),z.isDataTexture||z.isData3DTexture?k.texSubImage3D(be,V,O.x,O.y,O.z,ce,me,_e,Ne,Ve,qe.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(be,V,O.x,O.y,O.z,ce,me,_e,Ne,qe.data):k.texSubImage3D(be,V,O.x,O.y,O.z,ce,me,_e,Ne,Ve,qe),k.pixelStorei(k.UNPACK_ROW_LENGTH,Pe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Wt),k.pixelStorei(k.UNPACK_SKIP_ROWS,gn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pn),V===0&&B.generateMipmaps&&k.generateMipmap(be),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?F.setTextureCube(A,0):A.isData3DTexture?F.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?F.setTexture2DArray(A,0):F.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){C=0,T=0,E=null,ve.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vg?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Ed?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tD extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nD{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ox(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ox();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ox(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hg);var iD=`uniform float uTime;
uniform float uScrollPos;

varying float vTime;
varying float vScrollPos;
varying vec2 vUv;

void main()
{
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

    vUv = uv;
    vTime = uTime;
    vScrollPos = uScrollPos;

}`,rD=`varying vec2 vUv;
varying float vTime;
varying float vScrollPos;

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

    
    float cnoise_multiplier = 30. + (vScrollPos * 60.);
    vec2 vUv_multiplier = vUv * 1.;
    float strength = smoothstep(0.0, 0.05,cos(cnoise(vUv_multiplier)* cnoise_multiplier));
    gl_FragColor = vec4(vec3(strength), 1.0);
}`;const sD=()=>{const n=td.useRef(null);return Uo(()=>{if(n.current){console.log("running");const e={width:window.innerWidth,height:window.innerHeight},t=new tD,i=window.innerWidth/window.innerHeight,r=new _1(-i,i,1,-1,0,1);r.position.z=1,t.add(r);const s=new il(2*i,2,32,32),o=new Gr({vertexShader:iD,fragmentShader:rD,side:or});o.uniforms={uTime:{value:0},uScrollPos:{value:0}};const a=new fr(s,o);t.add(a);const l=new eD({canvas:n.current});l.setSize(e.width,e.height),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(window.innerWidth,window.innerHeight);const u=new nD,c=()=>{l.render(t,r),window.requestAnimationFrame(d)},d=()=>{const f=u.getElapsedTime();o.uniforms.uTime.value=f,c()};d(),zt.to("#main-box",{scrollTrigger:{trigger:"#main-box",start:"top top",end:"bottom bottom",onUpdate:f=>{const p=f.progress.toFixed(3);console.log(p),o.uniforms.uScrollPos.value=p,c()},scrub:!0,markers:!1}}),window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight;const f=window.innerWidth,p=window.innerHeight,_=f/p;r.left=-_,r.right=_,r.top=1,r.bottom=-1,r.updateProjectionMatrix(),r.updateProjectionMatrix(),a.geometry.dispose(),a.geometry=new il(2*_,2,32,32),l.setSize(f,p),l.setPixelRatio(Math.min(window.devicePixelRatio,2))})}},[]),se.jsx("div",{className:"sticky top-0 z-[5] w-screen h-full min-h-[500px] border-0 border-t-white",children:se.jsx("canvas",{style:{width:"100%",height:"100"},ref:n})})};zt.registerPlugin(Je);function oD(){return td.useEffect(()=>{const n=new kA({lerp:.1});n.on("scroll",Je.update),zt.ticker.add(e=>{n.raf(e*1e3)}),zt.ticker.lagSmoothing(0)},[]),Uo(()=>{zt.to("#box-effect",{bottom:"100vh",ease:"expo.inOut",duration:1.5,delay:.5,onComplete:()=>{zt.to("#box-effect",{opacity:0,visibility:"hidden"})}}),zt.fromTo("#description-box",{x:"25%",opacity:0},{opacity:1,x:"0%",delay:.8,duration:1,ease:"power2.in"}),zt.fromTo("#name-box",{x:"-25%",opacity:0},{opacity:1,x:"0%",delay:.8,duration:1,ease:"power2.in"})},[]),se.jsxs(se.Fragment,{children:[se.jsxs("main",{id:"main-box",className:"relative",children:[se.jsx("div",{id:"box-effect",className:"fixed bottom-0 w-screen h-screen bg-black-soft z-[20]"}),se.jsx(pA,{}),se.jsx(sD,{}),se.jsx(DA,{}),se.jsx(UA,{}),se.jsx(NA,{})]}),se.jsx("footer",{})]})}Kh.createRoot(document.getElementById("root")).render(se.jsx(td.StrictMode,{children:se.jsx(oD,{})}));
