import{w as u}from"./index.1oPVOehI.js";var _,g;const m=(g=(_=globalThis.__sveltekit_13z118w)==null?void 0:_.base)!=null?g:"";var h,b;const w=(b=(h=globalThis.__sveltekit_13z118w)==null?void 0:h.assets)!=null?b:m,A="1704157880488",S="sveltekit:snapshot",y="sveltekit:scroll",N="sveltekit:states",U="sveltekit:pageurl",L="sveltekit:history",O="sveltekit:navigation",f={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},v=location.origin;function Y(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function x(){return{x:pageXOffset,y:pageYOffset}}function c(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const d={...f,"":f.hover};function k(t){var n;let e=(n=t.assignedSlot)!=null?n:t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function P(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=k(t)}}function V(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,a=!n||!!o||T(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===v&&t.hasAttribute("download");return{url:n,external:a,target:o,download:l}}function G(t){let e=null,n=null,o=null,a=null,l=null,r=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=c(s,"preload-code")),a===null&&(a=c(s,"preload-data")),e===null&&(e=c(s,"keepfocus")),n===null&&(n=c(s,"noscroll")),l===null&&(l=c(s,"reload")),r===null&&(r=c(s,"replacestate")),s=k(s);function i(E){switch(E){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:d[o!=null?o:"off"],preload_data:d[a!=null?a:"off"],keepfocus:i(e),noscroll:i(n),reload:i(l),replace_state:i(r)}}function p(t){const e=u(t);let n=!0;function o(){n=!0,e.update(r=>r)}function a(r){n=!1,e.set(r)}function l(r){let s;return e.subscribe(i=>{(s===void 0||n&&i!==s)&&r(s=i)})}return{notify:o,set:a,subscribe:l}}function R(){const{set:t,subscribe:e}=u(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==A;return r&&(t(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:e,check:o}}function T(t,e){return t.origin!==v||!t.pathname.startsWith(e)}function K(t){t.client}const j={url:p({}),page:p({}),navigating:u(null),updated:R()};export{L as H,O as N,U as P,y as S,N as a,S as b,G as c,j as d,m as e,P as f,V as g,f as h,T as i,K as j,v as o,Y as r,x as s};