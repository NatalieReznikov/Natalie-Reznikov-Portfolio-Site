import{s as q,c as T,n as y,d as W,u as F,g as G,e as J}from"../chunks/scheduler.K8eMyfn6.js";import{S as D,i as N,g as C,x,s as j,h as b,j as v,y as z,f as m,c as B,k as h,a as $,z as _,A as P,B as K,H as O,e as A,C as Q,m as X,n as Y,r as ee,u as te,l as re,v as ne,d as I,t as V,w as se}from"../chunks/index.D7CFlllp.js";import{e as R,p as S}from"../chunks/stores.HpF5AZm-.js";const oe='<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v7c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-7"/></g></svg>',ae='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',le='<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 3)"><path d="m12.5 12.5v-10c0-1.1045695-.8954305-2-2-2h-8c-1.1045695 0-2 .8954305-2 2v10c0 1.1045695.8954305 2 2 2h8c1.1045695 0 2-.8954305 2-2z"/><path d="m5.5 4.5h5"/><path d="m2.5 4.5h1"/><path d="m5.5 7.5h5"/><path d="m2.5 7.5h1"/><path d="m5.5 10.5h5"/><path d="m2.5 10.5h1"/></g></svg>',ie='<svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(3 3)"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"/><path d="m14.5 10.5-3-3-3 2.985"/><path d="m12.5 14.5-9-9-3 3"/></g><circle cx="11" cy="4" fill="currentColor" r="1"/></g></svg>',ce=`<svg width="24px" stroke-width="1" height="24px" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    <path d="M18.5 15L5.5 15" troke="currentColor" stroke-width="1" stroke-linejoin="round"></path>
    <path d="M16 4L8 4" troke="currentColor" stroke-width="1" stroke-linecap="round"
        stroke-linejoin="round"></path>
    <path
        d="M9 4.5L9 10.2602C9 10.7376 8.82922 11.1992 8.51851 11.5617L3.48149 17.4383C3.17078 17.8008 3 18.2624 3 18.7398V19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19V18.7398C21 18.2624 20.8292 17.8008 20.5185 17.4383L15.4815 11.5617C15.1708 11.1992 15 10.7376 15 10.2602L15 4.5"
        troke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 9.01L12.01 8.99889" troke="currentColor" stroke-width="1" stroke-linecap="round"
        stroke-linejoin="round"></path>
    <path d="M11 2.01L11.01 1.99889" troke="currentColor" stroke-width="1" stroke-linecap="round"
        stroke-linejoin="round"></path>
</svg>`,de=`<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
    xmlns="http://www.w3.org/2000/svg" >
    <path d="M12 11.5V16.5" stroke="currentColor" stroke-width="1" stroke-linecap="round"
        stroke-linejoin="round"></path>
    <path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round"></path>
    <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`;function U(n,e,t){const r=n.slice();return r[6]=e[t],r}function he(n){let e,t=n[6].icon+"",r;return{c(){e=new O(!1),r=A(),this.h()},l(s){e=Q(s,!1),r=A(),this.h()},h(){e.a=r},m(s,i){e.m(t,s,i),$(s,r,i)},p:y,d(s){s&&(m(r),e.d())}}}function ue(n){let e=n[6].text+"",t;return{c(){t=X(e)},l(r){t=Y(r,e)},m(r,s){$(r,t,s)},p:y,d(r){r&&m(t)}}}function Z(n){let e,t,r,s,i,p;function c(g,f){return g[1]>910?ue:he}let o=c(n),a=o(n);function k(){return n[5](n[6])}return{c(){e=C("li"),t=C("a"),a.c(),r=j(),this.h()},l(g){e=b(g,"LI",{"aria-current":!0,class:!0});var f=v(e);t=b(f,"A",{href:!0,class:!0});var d=v(t);a.l(d),d.forEach(m),r=B(f),f.forEach(m),this.h()},h(){h(t,"href",n[6].ref),h(t,"class","svelte-1dtzmsp"),h(e,"aria-current",s=n[0]===n[6].id?"page":void 0),h(e,"class","svelte-1dtzmsp")},m(g,f){$(g,e,f),_(e,t),a.m(t,null),_(e,r),i||(p=P(t,"click",k),i=!0)},p(g,f){n=g,o===(o=c(n))&&a?a.p(n,f):(a.d(1),a=o(n),a&&(a.c(),a.m(t,null))),f&1&&s!==(s=n[0]===n[6].id?"page":void 0)&&h(e,"aria-current",s)},d(g){g&&m(e),a.d(),i=!1,p()}}}function pe(n){let e,t,r,s,i,p,c,o,a,k,g;T(n[4]);let f=R(n[3]),d=[];for(let u=0;u<f.length;u+=1)d[u]=Z(U(n,f,u));return{c(){e=C("header"),t=C("nav"),r=x("svg"),s=x("path"),i=j(),p=C("ul");for(let u=0;u<d.length;u+=1)d[u].c();c=j(),o=x("svg"),a=x("path"),this.h()},l(u){e=b(u,"HEADER",{class:!0});var w=v(e);t=b(w,"NAV",{class:!0});var l=v(t);r=z(l,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var L=v(r);s=z(L,"path",{d:!0,class:!0}),v(s).forEach(m),L.forEach(m),i=B(l),p=b(l,"UL",{class:!0});var M=v(p);for(let E=0;E<d.length;E+=1)d[E].l(M);M.forEach(m),c=B(l),o=z(l,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var H=v(o);a=z(H,"path",{d:!0,class:!0}),v(a).forEach(m),H.forEach(m),l.forEach(m),w.forEach(m),this.h()},h(){h(s,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),h(s,"class","svelte-1dtzmsp"),h(r,"viewBox","0 0 2 3"),h(r,"aria-hidden","true"),h(r,"class","svelte-1dtzmsp"),h(p,"class","svelte-1dtzmsp"),h(a,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),h(a,"class","svelte-1dtzmsp"),h(o,"viewBox","0 0 2 3"),h(o,"aria-hidden","true"),h(o,"class","svelte-1dtzmsp"),h(t,"class","svelte-1dtzmsp"),h(e,"class","svelte-1dtzmsp")},m(u,w){$(u,e,w),_(e,t),_(t,r),_(r,s),_(t,i),_(t,p);for(let l=0;l<d.length;l+=1)d[l]&&d[l].m(p,null);_(t,c),_(t,o),_(o,a),k||(g=P(window,"resize",n[4]),k=!0)},p(u,[w]){if(w&11){f=R(u[3]);let l;for(l=0;l<f.length;l+=1){const L=U(u,f,l);d[l]?d[l].p(L,w):(d[l]=Z(L),d[l].c(),d[l].m(p,null))}for(;l<d.length;l+=1)d[l].d(1);d.length=f.length}},i:y,o:y,d(u){u&&m(e),K(d,u),k=!1,g()}}}function fe(n,e,t){let r;S.subscribe(a=>{t(0,r=a)});let s=1e3,i=0,p=[{id:0,text:"Home",ref:"",icon:oe},{id:1,text:"Bio",ref:"",icon:ae},{id:2,text:"Publications",ref:"",icon:le},{id:3,text:"Cover Art",ref:"",icon:ie},{id:4,text:"Lab",ref:"",icon:ce},{id:5,text:"Contact Info",ref:"",icon:de}];function c(){t(2,i=window.innerHeight),t(1,s=window.innerWidth)}return[r,s,i,p,c,a=>S.update(k=>a.id)]}class me extends D{constructor(e){super(),N(this,e,fe,pe,q,{})}}const ge=""+new URL("../assets/background_tile.n5lkAo_x.png",import.meta.url).href,_e=""+new URL("../assets/background_tile.6-HSkr6q.webp",import.meta.url).href;function ve(n){let e,t,r,s,i;t=new me({});const p=n[1].default,c=W(p,n,n[0],null);return{c(){e=C("div"),ee(t.$$.fragment),r=j(),s=C("main"),c&&c.c(),this.h()},l(o){e=b(o,"DIV",{class:!0,style:!0});var a=v(e);te(t.$$.fragment,a),r=B(a),s=b(a,"MAIN",{class:!0});var k=v(s);c&&c.l(k),k.forEach(m),a.forEach(m),this.h()},h(){h(s,"class","svelte-c3g11c"),h(e,"class","app svelte-c3g11c"),re(e,"background-image","image-set( url("+ge+') type("image/png"), url('+_e+') type("image/webp") )')},m(o,a){$(o,e,a),ne(t,e,null),_(e,r),_(e,s),c&&c.m(s,null),i=!0},p(o,[a]){c&&c.p&&(!i||a&1)&&F(c,p,o,o[0],i?J(p,o[0],a,null):G(o[0]),null)},i(o){i||(I(t.$$.fragment,o),I(c,o),i=!0)},o(o){V(t.$$.fragment,o),V(c,o),i=!1},d(o){o&&m(e),se(t),c&&c.d(o)}}}function ke(n,e,t){let{$$slots:r={},$$scope:s}=e;return n.$$set=i=>{"$$scope"in i&&t(0,s=i.$$scope)},[s,r]}class Le extends D{constructor(e){super(),N(this,e,ke,ve,q,{})}}export{Le as component};