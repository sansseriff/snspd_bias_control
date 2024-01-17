(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function T(){}function cn(e,t){for(const n in t)e[n]=t[n];return e}function Rt(e){return e()}function Ht(){return Object.create(null)}function F(e){e.forEach(Rt)}function Ge(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function fn(e){return Object.keys(e).length===0}function st(e,...t){if(e==null)return T;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(e,t,n){e.$$.on_destroy.push(st(t,n))}function Qt(e,t,n,o){if(e){const l=Ut(e,t,n,o);return e[0](l)}}function Ut(e,t,n,o){return e[1]&&o?cn(n.ctx.slice(),e[1](o(t))):n.ctx}function Wt(e,t,n,o){if(e[2]&&o){const l=e[2](o(n));if(t.dirty===void 0)return l;if(typeof l=="object"){const r=[],d=Math.max(t.dirty.length,l.length);for(let i=0;i<d;i+=1)r[i]=t.dirty[i]|l[i];return r}return t.dirty|l}return t.dirty}function Xt(e,t,n,o,l,r){if(l){const d=Ut(t,n,o,r);e.p(d,l)}}function Yt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}const dn=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function u(e,t){e.appendChild(t)}function D(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function gn(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function v(e){return document.createElement(e)}function pe(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function K(e){return document.createTextNode(e)}function w(){return K(" ")}function z(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _n(e){return Array.from(e.childNodes)}function ae(e,t){t=""+t,e.data!==t&&(e.data=t)}function R(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function _e(e,t,n){e.classList[n?"add":"remove"](t)}function bn(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(e,n,o,t),l}let Ee;function Ce(e){Ee=e}function it(){if(!Ee)throw new Error("Function called outside component initialization");return Ee}function Zt(e){it().$$.on_mount.push(e)}function vn(e){it().$$.on_destroy.push(e)}function hn(){const e=it();return(t,n,{cancelable:o=!1}={})=>{const l=e.$$.callbacks[t];if(l){const r=bn(t,n,{cancelable:o});return l.slice().forEach(d=>{d.call(e,r)}),!r.defaultPrevented}return!0}}function pn(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(o=>o.call(this,t))}const he=[],V=[];let me=[];const tt=[],mn=Promise.resolve();let nt=!1;function yn(){nt||(nt=!0,mn.then(xt))}function ot(e){me.push(e)}function J(e){tt.push(e)}const et=new Set;let be=0;function xt(){if(be!==0)return;const e=Ee;do{try{for(;be<he.length;){const t=he[be];be++,Ce(t),kn(t.$$)}}catch(t){throw he.length=0,be=0,t}for(Ce(null),he.length=0,be=0;V.length;)V.pop()();for(let t=0;t<me.length;t+=1){const n=me[t];et.has(n)||(et.add(n),n())}me.length=0}while(he.length);for(;tt.length;)tt.pop()();nt=!1,et.clear(),Ce(e)}function kn(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ot)}}function wn(e){const t=[],n=[];me.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),me=t}const qe=new Set;let ue;function rt(){ue={r:0,c:[],p:ue}}function at(){ue.r||F(ue.c),ue=ue.p}function $(e,t){e&&e.i&&(qe.delete(e),e.i(t))}function E(e,t,n,o){if(e&&e.o){if(qe.has(e))return;qe.add(e),ue.c.push(()=>{qe.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function Q(e,t,n){const o=e.$$.props[t];o!==void 0&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function N(e){e&&e.c()}function j(e,t,n,o){const{fragment:l,after_update:r}=e.$$;l&&l.m(t,n),o||ot(()=>{const d=e.$$.on_mount.map(Rt).filter(Ge);e.$$.on_destroy?e.$$.on_destroy.push(...d):F(d),e.$$.on_mount=[]}),r.forEach(ot)}function A(e,t){const n=e.$$;n.fragment!==null&&(wn(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Mn(e,t){e.$$.dirty[0]===-1&&(he.push(e),yn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,o,l,r,d,i=[-1]){const a=Ee;Ce(e);const s=e.$$={fragment:null,ctx:[],props:r,update:T,not_equal:l,bound:Ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:Ht(),dirty:i,skip_bound:!1,root:t.target||a.$$.root};d&&d(s.root);let h=!1;if(s.ctx=n?n(e,t.props||{},(c,m,...g)=>{const b=g.length?g[0]:m;return s.ctx&&l(s.ctx[c],s.ctx[c]=b)&&(!s.skip_bound&&s.bound[c]&&s.bound[c](b),h&&Mn(e,c)),m}):[],s.update(),h=!0,F(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const c=_n(t.target);s.fragment&&s.fragment.l(c),c.forEach(S)}else s.fragment&&s.fragment.c();t.intro&&$(e.$$.fragment),j(e,t.target,t.anchor,t.customElement),xt()}Ce(a)}class x{$destroy(){A(this,1),this.$destroy=T}$on(t,n){if(!Ge(n))return T;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}$set(t){this.$$set&&!fn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ve=[];function en(e,t=T){let n;const o=new Set;function l(i){if(U(e,i)&&(e=i,n)){const a=!ve.length;for(const s of o)s[1](),ve.push(s,e);if(a){for(let s=0;s<ve.length;s+=2)ve[s][0](ve[s+1]);ve.length=0}}}function r(i){l(i(e))}function d(i,a=T){const s=[i,a];return o.add(s),o.size===1&&(n=t(l)||T),i(e),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:l,update:r,subscribe:d}}const ye=en(!1),{document:$n}=dn;function Cn(e){let t,n,o,l,r,d,i,a,s,h,c,m,g,b,k,B,q,I,O;return{c(){t=v("script"),t.textContent=`if (\r
      localStorage.theme === "dark" ||\r
      (!localStorage.theme &&\r
        window.matchMedia("(prefers-color-scheme: dark)").matches)\r
    ) {\r
      document.documentElement.classList.add("dark");\r
    } else {\r
      document.documentElement.classList.remove("dark");\r
    }`,n=w(),o=v("button"),l=v("span"),l.textContent="Toggle Dark Mode",r=w(),d=v("span"),i=v("span"),a=pe("svg"),s=pe("path"),c=w(),m=v("span"),g=pe("svg"),b=pe("path"),f(l,"class","sr-only"),f(s,"d","M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"),f(a,"class","h-4 w-4 text-gray-200"),f(a,"viewBox","0 0 20 20"),f(a,"fill","currentColor"),f(i,"class",h=(e[0]?"opacity-100 ease-in duration-200":"opacity-0 ease-out duration-100")+" absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"),f(i,"aria-hidden","true"),f(b,"fill-rule","evenodd"),f(b,"d","M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"),f(b,"clip-rule","evenodd"),f(g,"class","h-4 w-4 text-yellow-300"),f(g,"viewBox","0 0 20 20"),f(g,"fill","currentColor"),f(m,"class",k=(e[0]?"opacity-0 ease-out duration-100":"opacity-100 ease-in duration-200")+" absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"),f(m,"aria-hidden","true"),f(d,"class",B=(e[0]?"translate-x-0 bg-gray-400":"translate-x-4 bg-white")+" pointer-events-none relative inline-block h-4 w-4 rounded-full shadow transform ring-0 transition ease-in-out duration-200"),f(o,"class",q=(e[0]?"bg-gray-600 ":" bg-gray-200")+" relative inline-flex flex-shrink-1 h-5 w-9 border-2 border-transparent rounded-full ease-in-out duration-200 my-auto mx-1")},m(p,M){u($n.head,t),D(p,n,M),D(p,o,M),u(o,l),u(o,r),u(o,d),u(d,i),u(i,a),u(a,s),u(d,c),u(d,m),u(m,g),u(g,b),I||(O=z(o,"click",e[1]),I=!0)},p(p,[M]){M&1&&h!==(h=(p[0]?"opacity-100 ease-in duration-200":"opacity-0 ease-out duration-100")+" absolute inset-0 h-full w-full flex items-center justify-center transition-opacity")&&f(i,"class",h),M&1&&k!==(k=(p[0]?"opacity-0 ease-out duration-100":"opacity-100 ease-in duration-200")+" absolute inset-0 h-full w-full flex items-center justify-center transition-opacity")&&f(m,"class",k),M&1&&B!==(B=(p[0]?"translate-x-0 bg-gray-400":"translate-x-4 bg-white")+" pointer-events-none relative inline-block h-4 w-4 rounded-full shadow transform ring-0 transition ease-in-out duration-200")&&f(d,"class",B),M&1&&q!==(q=(p[0]?"bg-gray-600 ":" bg-gray-200")+" relative inline-flex flex-shrink-1 h-5 w-9 border-2 border-transparent rounded-full ease-in-out duration-200 my-auto mx-1")&&f(o,"class",q)},i:T,o:T,d(p){S(t),p&&S(n),p&&S(o),I=!1,O()}}}function En(e,t,n){let o;Jt(e,ye,i=>n(0,o=i));let l;Zt(()=>{d(o)});function r(){console.log("running toggle"),d(!l)}function d(i){l=i,console.log("running setMode"),ye.set(l),l?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.theme=l?"dark":"light",window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches&&localStorage.removeItem("theme")}return[o,r]}class Ln extends x{constructor(t){super(),Z(this,t,En,Cn,U,{})}}function Bn(e){let t,n,o;return{c(){t=v("div"),t.innerHTML='<svg class="h-5.5 w-6 my-1 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>',f(t,"class","hamburger svelte-18v383v")},m(l,r){D(l,t,r),n||(o=[z(t,"click",function(){Ge(e[0])&&e[0].apply(this,arguments)}),z(t,"keydown",e[1])],n=!0)},p(l,[r]){e=l},i:T,o:T,d(l){l&&S(t),n=!1,F(o)}}}function Sn(e,t,n){let{onClick:o}=t;function l(r){(r.key==="Enter"||r.key===" ")&&o()}return e.$$set=r=>{"onClick"in r&&n(0,o=r.onClick)},[o,l]}class zn extends x{constructor(t){super(),Z(this,t,Sn,Bn,U,{onClick:0})}}function On(e){let t,n,o,l,r,d,i,a,s,h,c,m,g,b;return c=new Ln({}),{c(){t=v("div"),n=v("div"),o=v("h3"),o.textContent="Settings",l=w(),r=v("div"),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" stroke-width=".8"></path></svg>',d=w(),i=v("ul"),a=v("li"),s=K(`styling\r
            `),h=v("div"),N(c.$$.fragment),f(o,"class","svelte-1ngcvys"),f(r,"class","close-buttom svelte-1ngcvys"),f(n,"class","settings-top svelte-1ngcvys"),f(h,"class","toggle"),f(a,"class","svelte-1ngcvys"),f(i,"class","svelte-1ngcvys"),f(t,"class","dropdown svelte-1ngcvys")},m(k,B){D(k,t,B),u(t,n),u(n,o),u(n,l),u(n,r),u(t,d),u(t,i),u(i,a),u(a,s),u(a,h),j(c,h,null),m=!0,g||(b=[z(r,"click",function(){Ge(e[0])&&e[0].apply(this,arguments)}),z(r,"keydown",e[1])],g=!0)},p(k,[B]){e=k},i(k){m||($(c.$$.fragment,k),m=!0)},o(k){E(c.$$.fragment,k),m=!1},d(k){k&&S(t),A(c),g=!1,F(b)}}}function Tn(e,t,n){let{onClick:o}=t,{menuVisible:l}=t;function r(s){(s.key==="Enter"||s.key===" ")&&o()}let d,i=!0;Zt(()=>{i=!0,d=document.querySelector(".dropdown"),d.querySelector(".close-button"),document.addEventListener("click",a)}),vn(()=>{document.removeEventListener("click",a)});function a(s){const h=d.contains(s.target);l&&!h&&!i&&o(),i=!1}return e.$$set=s=>{"onClick"in s&&n(0,o=s.onClick),"menuVisible"in s&&n(2,l=s.menuVisible)},[o,r,l]}class jn extends x{constructor(t){super(),Z(this,t,Tn,On,U,{onClick:0,menuVisible:2})}}function An(e){let t,n,o,l,r;const d=e[4].default,i=Qt(d,e,e[3],null);return{c(){t=v("button"),i&&i.c(),f(t,"class",n=(e[1]?e[2]?"teal text-teal-500 hover:text-teal-400 border-teal-500 hover:bg-teal-900":"teal text-teal-500 bg-teal-50 border-teal-500 hover:bg-teal-100":e[2]?"red text-red-500 hover:text-red-400 border-red-500 hover:bg-red-900":"red text-red-500 bg-red-50 border-red-500 hover:bg-red-100")+" text-s font-medium border-2 border-opacity-50 rounded px-4 py-1 button svelte-7l13qr")},m(a,s){D(a,t,s),i&&i.m(t,null),o=!0,l||(r=z(t,"click",e[5]),l=!0)},p(a,[s]){i&&i.p&&(!o||s&8)&&Xt(i,d,a,a[3],o?Wt(d,a[3],s,null):Yt(a[3]),null),(!o||s&6&&n!==(n=(a[1]?a[2]?"teal text-teal-500 hover:text-teal-400 border-teal-500 hover:bg-teal-900":"teal text-teal-500 bg-teal-50 border-teal-500 hover:bg-teal-100":a[2]?"red text-red-500 hover:text-red-400 border-red-500 hover:bg-red-900":"red text-red-500 bg-red-50 border-red-500 hover:bg-red-100")+" text-s font-medium border-2 border-opacity-50 rounded px-4 py-1 button svelte-7l13qr"))&&f(t,"class",n)},i(a){o||($(i,a),o=!0)},o(a){E(i,a),o=!1},d(a){a&&S(t),i&&i.d(a),l=!1,r()}}}function Dn(e,t,n){let o,l=T,r=()=>(l(),l=st(a,c=>n(2,o=c)),a);e.$$.on_destroy.push(()=>l());let{$$slots:d={},$$scope:i}=t,{colorMode:a}=t;r();let{redGreen:s}=t;function h(c){pn.call(this,e,c)}return e.$$set=c=>{"colorMode"in c&&r(n(0,a=c.colorMode)),"redGreen"in c&&n(1,s=c.redGreen),"$$scope"in c&&n(3,i=c.$$scope)},[a,s,o,i,d,h]}class lt extends x{constructor(t){super(),Z(this,t,Dn,An,U,{colorMode:0,redGreen:1})}}const ee=en([{value:0,activated:!1,name:""},{value:0,activated:!1,name:""},{value:0,activated:!1,name:""},{value:0,activated:!1,name:""}]);ee.subscribe(e=>{console.log("this is store: ",e)});function It(e){let t,n;return t=new jn({props:{onClick:e[1],menuVisible:e[0]}}),{c(){N(t.$$.fragment)},m(o,l){j(t,o,l),n=!0},p(o,l){const r={};l&1&&(r.menuVisible=o[0]),t.$set(r)},i(o){n||($(t.$$.fragment,o),n=!0)},o(o){E(t.$$.fragment,o),n=!1},d(o){A(t,o)}}}function Pn(e){let t;return{c(){t=K("All On")},m(n,o){D(n,t,o)},d(n){n&&S(t)}}}function Nn(e){let t;return{c(){t=K("All Off")},m(n,o){D(n,t,o)},d(n){n&&S(t)}}}function qn(e){let t,n,o,l,r,d,i,a,s,h,c,m;r=new zn({props:{onClick:e[1]}});let g=e[0]&&It(e);return s=new lt({props:{redGreen:!0,colorMode:ye,$$slots:{default:[Pn]},$$scope:{ctx:e}}}),s.$on("click",e[2]),c=new lt({props:{redGreen:!1,colorMode:ye,$$slots:{default:[Nn]},$$scope:{ctx:e}}}),c.$on("click",e[3]),{c(){t=v("div"),n=v("div"),o=v("h1"),o.textContent="SNSPD Bias Controll",l=w(),N(r.$$.fragment),d=w(),g&&g.c(),i=w(),a=v("div"),N(s.$$.fragment),h=w(),N(c.$$.fragment),f(o,"class","heading svelte-7l2ce5"),f(n,"class","top-bar svelte-7l2ce5"),f(a,"class","button-bar svelte-7l2ce5"),f(t,"class","bound-box svelte-7l2ce5")},m(b,k){D(b,t,k),u(t,n),u(n,o),u(n,l),j(r,n,null),u(n,d),g&&g.m(n,null),u(t,i),u(t,a),j(s,a,null),u(a,h),j(c,a,null),m=!0},p(b,[k]){b[0]?g?(g.p(b,k),k&1&&$(g,1)):(g=It(b),g.c(),$(g,1),g.m(n,null)):g&&(rt(),E(g,1,1,()=>{g=null}),at());const B={};k&16&&(B.$$scope={dirty:k,ctx:b}),s.$set(B);const q={};k&16&&(q.$$scope={dirty:k,ctx:b}),c.$set(q)},i(b){m||($(r.$$.fragment,b),$(g),$(s.$$.fragment,b),$(c.$$.fragment,b),m=!0)},o(b){E(r.$$.fragment,b),E(g),E(s.$$.fragment,b),E(c.$$.fragment,b),m=!1},d(b){b&&S(t),A(r),g&&g.d(),A(s),A(c)}}}function Gn(e,t,n){let o=!1;function l(){n(0,o=!o)}function r(){ee.update(i=>(i.forEach(a=>{a.activated=!0}),i))}function d(){ee.update(i=>(i.forEach(a=>{a.activated=!1}),i))}return[o,l,r,d]}class Hn extends x{constructor(t){super(),Z(this,t,Gn,qn,U,{})}}function In(e){let t,n,o;return{c(){t=v("div"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" stroke="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z" stroke-width=".3"></path></svg>',f(t,"class","chev-button svelte-j62clx")},m(l,r){D(l,t,r),n||(o=[z(t,"click",e[1]),z(t,"keydown",e[0])],n=!0)},p:T,i:T,o:T,d(l){l&&S(t),n=!1,F(o)}}}function Vn(e,t,n){let{bias_voltage:o}=t,{increment:l}=t;function r(i){(i.key==="Enter"||i.key===" ")&&d()}function d(i){n(2,o+=l)}return e.$$set=i=>{"bias_voltage"in i&&n(2,o=i.bias_voltage),"increment"in i&&n(3,l=i.increment)},[r,d,o,l]}class Pe extends x{constructor(t){super(),Z(this,t,Vn,In,U,{bias_voltage:2,increment:3})}}function Kn(e){let t,n,o;return{c(){t=v("div"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" stroke="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" stroke-width=".3"></path></svg>',f(t,"class","chev-button svelte-lwwcjo")},m(l,r){D(l,t,r),n||(o=[z(t,"click",e[1]),z(t,"keydown",e[0])],n=!0)},p:T,i:T,o:T,d(l){l&&S(t),n=!1,F(o)}}}function Fn(e,t,n){let{bias_voltage:o}=t,{increment:l}=t;function r(i){(i.key==="Enter"||i.key===" ")&&d()}function d(i){n(2,o+=l)}return e.$$set=i=>{"bias_voltage"in i&&n(2,o=i.bias_voltage),"increment"in i&&n(3,l=i.increment)},[r,d,o,l]}class Ne extends x{constructor(t){super(),Z(this,t,Fn,Kn,U,{bias_voltage:2,increment:3})}}function Rn(e){let t,n,o,l,r;const d=e[4].default,i=Qt(d,e,e[3],null);return{c(){t=v("button"),i&&i.c(),f(t,"class",n=(e[1]?"blue text-blue-500 hover:text-blue-400 border-blue-500 hover:bg-blue-900":"blue text-blue-500 bg-blue-50 border-blue-500 hover:bg-blue-100")+" text-s font-medium border-2 border-opacity-50 rounded px-4 py-1 button svelte-11jdpjs")},m(a,s){D(a,t,s),i&&i.m(t,null),o=!0,l||(r=z(t,"click",e[2]),l=!0)},p(a,[s]){i&&i.p&&(!o||s&8)&&Xt(i,d,a,a[3],o?Wt(d,a[3],s,null):Yt(a[3]),null),(!o||s&2&&n!==(n=(a[1]?"blue text-blue-500 hover:text-blue-400 border-blue-500 hover:bg-blue-900":"blue text-blue-500 bg-blue-50 border-blue-500 hover:bg-blue-100")+" text-s font-medium border-2 border-opacity-50 rounded px-4 py-1 button svelte-11jdpjs"))&&f(t,"class",n)},i(a){o||($(i,a),o=!0)},o(a){E(i,a),o=!1},d(a){a&&S(t),i&&i.d(a),l=!1,r()}}}function Jn(e,t,n){let o,l=T,r=()=>(l(),l=st(a,c=>n(1,o=c)),a);e.$$.on_destroy.push(()=>l());let{$$slots:d={},$$scope:i}=t,{colorMode:a}=t;r();const s=hn();function h(){s("submit")}return e.$$set=c=>{"colorMode"in c&&r(n(0,a=c.colorMode)),"$$scope"in c&&n(3,i=c.$$scope)},[a,o,h,i,d]}class Qn extends x{constructor(t){super(),Z(this,t,Jn,Rn,U,{colorMode:0})}}function Un(e){let t,n,o,l;return{c(){t=v("h1"),n=K(e[3]),f(t,"class","heading-label svelte-8cs2k")},m(r,d){D(r,t,d),u(t,n),o||(l=[z(t,"click",e[27]),z(t,"keydown",e[20])],o=!0)},p(r,d){d[0]&8&&ae(n,r[3])},d(r){r&&S(t),o=!1,F(l)}}}function Wn(e){let t,n,o;return{c(){t=v("input"),f(t,"class","heading-input svelte-8cs2k"),f(t,"type","text"),t.value=e[3],f(t,"tabindex","0"),t.autofocus=!0},m(l,r){D(l,t,r),t.focus(),n||(o=[z(t,"input",e[19]),z(t,"blur",e[26]),z(t,"keydown",e[20])],n=!0)},p(l,r){r[0]&8&&t.value!==l[3]&&(t.value=l[3])},d(l){l&&S(t),n=!1,F(o)}}}function Vt(e){let t,n,o,l,r,d,i,a,s,h,c,m,g,b,k,B,q,I,O,p,M,P,te,Le,W,ke,X,ce,Be,Y,we,Se,L,ne,Me,ze,$e,Oe,oe,Te,je,y,ut,fe,He,ct,Ie,ft,de,Ve,dt,Ke,gt,ge,Fe,Ae,_t,G,le,Re,bt,Je,vt,se,Qe,ht,Ue,pt,ie,We,mt,Xe,yt,re,Ye,kt,De,H,Ze,wt;o=new lt({props:{redGreen:e[4].colorMode,colorMode:ye,$$slots:{default:[Xn]},$$scope:{ctx:e}}}),o.$on("click",e[18]),i=new Qn({props:{colorMode:ye,$$slots:{default:[Yn]},$$scope:{ctx:e}}}),i.$on("submit",e[21]);function tn(_){e[29](_)}let Mt={increment:1};e[0]!==void 0&&(Mt.bias_voltage=e[0]),k=new Pe({props:Mt}),V.push(()=>Q(k,"bias_voltage",tn));function nn(_){e[30](_)}let $t={increment:.1};e[0]!==void 0&&($t.bias_voltage=e[0]),p=new Pe({props:$t}),V.push(()=>Q(p,"bias_voltage",nn));function on(_){e[31](_)}let Ct={increment:.01};e[0]!==void 0&&(Ct.bias_voltage=e[0]),W=new Pe({props:Ct}),V.push(()=>Q(W,"bias_voltage",on));function ln(_){e[32](_)}let Et={increment:.001};e[0]!==void 0&&(Et.bias_voltage=e[0]),Y=new Pe({props:Et}),V.push(()=>Q(Y,"bias_voltage",ln));function sn(_){e[33](_)}let Lt={increment:-1};e[0]!==void 0&&(Lt.bias_voltage=e[0]),le=new Ne({props:Lt}),V.push(()=>Q(le,"bias_voltage",sn));function rn(_){e[34](_)}let Bt={increment:-.1};e[0]!==void 0&&(Bt.bias_voltage=e[0]),se=new Ne({props:Bt}),V.push(()=>Q(se,"bias_voltage",rn));function an(_){e[35](_)}let St={increment:-.01};e[0]!==void 0&&(St.bias_voltage=e[0]),ie=new Ne({props:St}),V.push(()=>Q(ie,"bias_voltage",an));function un(_){e[36](_)}let zt={increment:-.001};return e[0]!==void 0&&(zt.bias_voltage=e[0]),re=new Ne({props:zt}),V.push(()=>Q(re,"bias_voltage",un)),{c(){t=v("div"),n=v("div"),N(o.$$.fragment),l=w(),r=v("input"),d=w(),N(i.$$.fragment),a=w(),s=v("div"),h=v("div"),c=K(e[9]),m=w(),g=v("div"),b=v("div"),N(k.$$.fragment),q=w(),I=v("div"),O=w(),N(p.$$.fragment),P=w(),te=v("div"),Le=w(),N(W.$$.fragment),X=w(),ce=v("div"),Be=w(),N(Y.$$.fragment),Se=w(),L=v("div"),ne=v("div"),Me=K(e[11]),ze=w(),$e=v("div"),Oe=w(),oe=v("div"),Te=K("."),je=w(),y=v("div"),ut=w(),fe=v("div"),He=K(e[12]),ct=w(),Ie=v("div"),ft=w(),de=v("div"),Ve=K(e[13]),dt=w(),Ke=v("div"),gt=w(),ge=v("div"),Fe=K(e[14]),_t=w(),G=v("div"),N(le.$$.fragment),bt=w(),Je=v("div"),vt=w(),N(se.$$.fragment),ht=w(),Ue=v("div"),pt=w(),N(ie.$$.fragment),mt=w(),Xe=v("div"),yt=w(),N(re.$$.fragment),kt=w(),De=v("div"),De.textContent="V",f(r,"type","text"),f(r,"class","svelte-8cs2k"),f(n,"class","left svelte-8cs2k"),f(h,"class","plus-minus svelte-8cs2k"),R(h,"--state_opacity",e[4].opacity),f(I,"class","spacer-chev svelte-8cs2k"),f(te,"class","spacer-chev svelte-8cs2k"),f(ce,"class","spacer-chev svelte-8cs2k"),f(b,"class","buttons-top svelte-8cs2k"),f(ne,"class","digit svelte-8cs2k"),R(ne,"--state_opacity",e[4].opacity),f($e,"class","short-spacer svelte-8cs2k"),f(oe,"class","digit dot svelte-8cs2k"),R(oe,"--state_opacity",e[4].opacity),f(y,"class","short-spacer svelte-8cs2k"),f(fe,"class","digit svelte-8cs2k"),R(fe,"--state_opacity",e[4].opacity),f(Ie,"class","spacer svelte-8cs2k"),f(de,"class","digit svelte-8cs2k"),R(de,"--state_opacity",e[4].opacity),f(Ke,"class","spacer svelte-8cs2k"),f(ge,"class","digit svelte-8cs2k"),R(ge,"--state_opacity",e[4].opacity),f(L,"class",Ae="display "+(e[10]?"updating":"")+" svelte-8cs2k"),f(Je,"class","spacer-chev svelte-8cs2k"),f(Ue,"class","spacer-chev svelte-8cs2k"),f(Xe,"class","spacer-chev svelte-8cs2k"),f(G,"class","buttons-bottom svelte-8cs2k"),f(g,"class","controls svelte-8cs2k"),f(De,"class","voltage svelte-8cs2k"),f(s,"class","right svelte-8cs2k"),f(t,"class","main-controlls svelte-8cs2k")},m(_,C){D(_,t,C),u(t,n),j(o,n,null),u(n,l),u(n,r),e[28](r),u(n,d),j(i,n,null),u(t,a),u(t,s),u(s,h),u(h,c),u(s,m),u(s,g),u(g,b),j(k,b,null),u(b,q),u(b,I),u(b,O),j(p,b,null),u(b,P),u(b,te),u(b,Le),j(W,b,null),u(b,X),u(b,ce),u(b,Be),j(Y,b,null),u(g,Se),u(g,L),u(L,ne),u(ne,Me),u(L,ze),u(L,$e),u(L,Oe),u(L,oe),u(oe,Te),u(L,je),u(L,y),u(L,ut),u(L,fe),u(fe,He),u(L,ct),u(L,Ie),u(L,ft),u(L,de),u(de,Ve),u(L,dt),u(L,Ke),u(L,gt),u(L,ge),u(ge,Fe),u(g,_t),u(g,G),j(le,G,null),u(G,bt),u(G,Je),u(G,vt),j(se,G,null),u(G,ht),u(G,Ue),u(G,pt),j(ie,G,null),u(G,mt),u(G,Xe),u(G,yt),j(re,G,null),u(s,kt),u(s,De),H=!0,Ze||(wt=[z(r,"keydown",e[22]),z(h,"click",e[23])],Ze=!0)},p(_,C){const xe={};C[0]&16&&(xe.redGreen=_[4].colorMode),C[0]&16|C[1]&256&&(xe.$$scope={dirty:C,ctx:_}),o.$set(xe);const Ot={};C[1]&256&&(Ot.$$scope={dirty:C,ctx:_}),i.$set(Ot),(!H||C[0]&512)&&ae(c,_[9]),(!H||C[0]&16)&&R(h,"--state_opacity",_[4].opacity);const Tt={};!B&&C[0]&1&&(B=!0,Tt.bias_voltage=_[0],J(()=>B=!1)),k.$set(Tt);const jt={};!M&&C[0]&1&&(M=!0,jt.bias_voltage=_[0],J(()=>M=!1)),p.$set(jt);const At={};!ke&&C[0]&1&&(ke=!0,At.bias_voltage=_[0],J(()=>ke=!1)),W.$set(At);const Dt={};!we&&C[0]&1&&(we=!0,Dt.bias_voltage=_[0],J(()=>we=!1)),Y.$set(Dt),(!H||C[0]&2048)&&ae(Me,_[11]),(!H||C[0]&16)&&R(ne,"--state_opacity",_[4].opacity),(!H||C[0]&16)&&R(oe,"--state_opacity",_[4].opacity),(!H||C[0]&4096)&&ae(He,_[12]),(!H||C[0]&16)&&R(fe,"--state_opacity",_[4].opacity),(!H||C[0]&8192)&&ae(Ve,_[13]),(!H||C[0]&16)&&R(de,"--state_opacity",_[4].opacity),(!H||C[0]&16384)&&ae(Fe,_[14]),(!H||C[0]&16)&&R(ge,"--state_opacity",_[4].opacity),(!H||C[0]&1024&&Ae!==(Ae="display "+(_[10]?"updating":"")+" svelte-8cs2k"))&&f(L,"class",Ae);const Pt={};!Re&&C[0]&1&&(Re=!0,Pt.bias_voltage=_[0],J(()=>Re=!1)),le.$set(Pt);const Nt={};!Qe&&C[0]&1&&(Qe=!0,Nt.bias_voltage=_[0],J(()=>Qe=!1)),se.$set(Nt);const qt={};!We&&C[0]&1&&(We=!0,qt.bias_voltage=_[0],J(()=>We=!1)),ie.$set(qt);const Gt={};!Ye&&C[0]&1&&(Ye=!0,Gt.bias_voltage=_[0],J(()=>Ye=!1)),re.$set(Gt)},i(_){H||($(o.$$.fragment,_),$(i.$$.fragment,_),$(k.$$.fragment,_),$(p.$$.fragment,_),$(W.$$.fragment,_),$(Y.$$.fragment,_),$(le.$$.fragment,_),$(se.$$.fragment,_),$(ie.$$.fragment,_),$(re.$$.fragment,_),H=!0)},o(_){E(o.$$.fragment,_),E(i.$$.fragment,_),E(k.$$.fragment,_),E(p.$$.fragment,_),E(W.$$.fragment,_),E(Y.$$.fragment,_),E(le.$$.fragment,_),E(se.$$.fragment,_),E(ie.$$.fragment,_),E(re.$$.fragment,_),H=!1},d(_){_&&S(t),A(o),e[28](null),A(i),A(k),A(p),A(W),A(Y),A(le),A(se),A(ie),A(re),Ze=!1,F(wt)}}}function Xn(e){let t=e[4].action_string+"",n;return{c(){n=K(t)},m(o,l){D(o,n,l)},p(o,l){l[0]&16&&t!==(t=o[4].action_string+"")&&ae(n,t)},d(o){o&&S(n)}}}function Yn(e){let t;return{c(){t=K("Submit")},m(n,o){D(n,t,o)},d(n){n&&S(t)}}}function Zn(e){let t,n,o,l,r,d,i,a,s,h,c,m,g,b,k,B;function q(M,P){return M[15]?Wn:Un}let I=q(e),O=I(e),p=e[7]&&Vt(e);return{c(){t=v("div"),n=v("div"),o=v("div"),l=v("h1"),r=K(e[2]),d=w(),O.c(),i=w(),a=v("div"),s=v("div"),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" stroke="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" stroke-width="0.3"></path></svg>',h=w(),c=pe("svg"),m=pe("path"),g=w(),p&&p.c(),f(l,"class","heading svelte-8cs2k"),f(o,"class","top-left svelte-8cs2k"),f(s,"class","dot-menu svelte-8cs2k"),f(m,"fill-rule","evenodd"),f(m,"d","M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"),f(m,"stroke-width","0.8"),f(c,"xmlns","http://www.w3.org/2000/svg"),f(c,"width","23"),f(c,"height","23"),f(c,"fill","currentColor"),f(c,"stroke","currentColor"),f(c,"class","chevron svelte-8cs2k"),f(c,"viewBox","0 0 16 16"),_e(c,"toggle_up",e[5]),_e(c,"toggle_down",e[6]),f(a,"class","top-right svelte-8cs2k"),f(n,"class","top-bar svelte-8cs2k"),_e(n,"no_border",e[8]),f(t,"class","bound-box svelte-8cs2k")},m(M,P){D(M,t,P),u(t,n),u(n,o),u(o,l),u(l,r),u(o,d),O.m(o,null),u(n,i),u(n,a),u(a,s),u(a,h),u(a,c),u(c,m),u(t,g),p&&p.m(t,null),b=!0,k||(B=[z(c,"click",e[17]),z(c,"keydown",e[17])],k=!0)},p(M,P){(!b||P[0]&4)&&ae(r,M[2]),I===(I=q(M))&&O?O.p(M,P):(O.d(1),O=I(M),O&&(O.c(),O.m(o,null))),(!b||P[0]&32)&&_e(c,"toggle_up",M[5]),(!b||P[0]&64)&&_e(c,"toggle_down",M[6]),(!b||P[0]&256)&&_e(n,"no_border",M[8]),M[7]?p?(p.p(M,P),P[0]&128&&$(p,1)):(p=Vt(M),p.c(),$(p,1),p.m(t,null)):p&&(rt(),E(p,1,1,()=>{p=null}),at())},i(M){b||($(p),b=!0)},o(M){E(p),b=!1},d(M){M&&S(t),O.d(),p&&p.d(),k=!1,F(B)}}}function xn(e,t,n){let{idx:o}=t,{bias_voltage:l}=t,{activated:r}=t,{heading_text:d}=t,i="";i=d;let a={action_string:"Turn Off",colorMode:!1,opacity:1};ee.subscribe(y=>{n(0,l=y[o-1].value),n(24,r=y[o-1].activated),P()});let s=!1,h=!0,c=!0,m=!1;function g(){n(5,s=!s),n(6,h=!h),n(7,c=!c),n(8,m=!m)}let b="+",k=!1,B=0,q=0,I=0,O=0,p=0;function M(){n(24,r=!r),P()}function P(){r?n(4,a={action_string:"Turn Off",colorMode:!1,opacity:1}):n(4,a={action_string:"Turn On",colorMode:!0,opacity:.2})}let te=!1;function Le(){n(15,te=!1),n(1,d=i)}function W(y){n(3,i=y.target.value)}function ke(y){y.key==="Enter"&&Le()}let X;function ce(){console.log("Input value: "+X.value);let y=parseFloat(X.value);if(isNaN(y)){console.log("Input is not a number");return}else y>=-5&&y<=5&&(n(0,l=y),n(16,X.value="",X),n(10,k=!0),setTimeout(()=>{n(10,k=!1)},1))}function Be(y){y.key==="Enter"&&ce()}function Y(){n(10,k=!0),n(0,l=-l),setTimeout(()=>{n(10,k=!1)},1)}const we=()=>{n(15,te=!1),n(1,d=i)},Se=()=>{n(15,te=!0)};function L(y){V[y?"unshift":"push"](()=>{X=y,n(16,X)})}function ne(y){l=y,n(0,l),n(25,p)}function Me(y){l=y,n(0,l),n(25,p)}function ze(y){l=y,n(0,l),n(25,p)}function $e(y){l=y,n(0,l),n(25,p)}function Oe(y){l=y,n(0,l),n(25,p)}function oe(y){l=y,n(0,l),n(25,p)}function Te(y){l=y,n(0,l),n(25,p)}function je(y){l=y,n(0,l),n(25,p)}return e.$$set=y=>{"idx"in y&&n(2,o=y.idx),"bias_voltage"in y&&n(0,l=y.bias_voltage),"activated"in y&&n(24,r=y.activated),"heading_text"in y&&n(1,d=y.heading_text)},e.$$.update=()=>{e.$$.dirty[0]&33554433&&(n(0,l=parseFloat(l.toFixed(3))),l>=5&&n(0,l=5),l<=-5&&n(0,l=-5),n(11,B=Math.floor(Math.abs(l))%10),n(25,p=Math.round(Math.abs(l*1e3))),n(14,O=p%10),n(13,I=Math.floor(p/10)%10),n(12,q=Math.floor(p/100)%10),n(11,B=Math.floor(p/1e3)%10),n(9,b=l<0?"-":"+"),P())},[l,d,o,i,a,s,h,c,m,b,k,B,q,I,O,te,X,g,M,W,ke,ce,Be,Y,r,p,we,Se,L,ne,Me,ze,$e,Oe,oe,Te,je]}class eo extends x{constructor(t){super(),Z(this,t,xn,Zn,U,{idx:2,bias_voltage:0,activated:24,heading_text:1},null,[-1,-1])}}function Kt(e,t,n){const o=e.slice();return o[5]=t[n],o[6]=t,o[7]=n,o}function Ft(e){let t,n,o,l,r;function d(h){e[2](h,e[7])}function i(h){e[3](h,e[7])}function a(h){e[4](h,e[7])}let s={idx:e[7]+1};return e[1][e[7]].value!==void 0&&(s.bias_voltage=e[1][e[7]].value),e[1][e[7]].activated!==void 0&&(s.activated=e[1][e[7]].activated),e[1][e[7]].name!==void 0&&(s.heading_text=e[1][e[7]].name),t=new eo({props:s}),V.push(()=>Q(t,"bias_voltage",d)),V.push(()=>Q(t,"activated",i)),V.push(()=>Q(t,"heading_text",a)),{c(){N(t.$$.fragment)},m(h,c){j(t,h,c),r=!0},p(h,c){e=h;const m={};!n&&c&2&&(n=!0,m.bias_voltage=e[1][e[7]].value,J(()=>n=!1)),!o&&c&2&&(o=!0,m.activated=e[1][e[7]].activated,J(()=>o=!1)),!l&&c&2&&(l=!0,m.heading_text=e[1][e[7]].name,J(()=>l=!1)),t.$set(m)},i(h){r||($(t.$$.fragment,h),r=!0)},o(h){E(t.$$.fragment,h),r=!1},d(h){A(t,h)}}}function to(e){let t,n,o,l,r,d,i;o=new Hn({});let a=e[0],s=[];for(let c=0;c<a.length;c+=1)s[c]=Ft(Kt(e,a,c));const h=c=>E(s[c],1,1,()=>{s[c]=null});return{c(){t=v("div"),n=v("div"),N(o.$$.fragment),l=w();for(let c=0;c<s.length;c+=1)s[c].c();r=w(),d=v("div"),f(n,"class","main-bar svelte-14f9tsf"),f(d,"class","side-area svelte-14f9tsf"),f(t,"class","container-main svelte-14f9tsf")},m(c,m){D(c,t,m),u(t,n),j(o,n,null),u(n,l);for(let g=0;g<s.length;g+=1)s[g]&&s[g].m(n,null);u(t,r),u(t,d),i=!0},p(c,[m]){if(m&3){a=c[0];let g;for(g=0;g<a.length;g+=1){const b=Kt(c,a,g);s[g]?(s[g].p(b,m),$(s[g],1)):(s[g]=Ft(b),s[g].c(),$(s[g],1),s[g].m(n,null))}for(rt(),g=a.length;g<s.length;g+=1)h(g);at()}},i(c){if(!i){$(o.$$.fragment,c);for(let m=0;m<a.length;m+=1)$(s[m]);i=!0}},o(c){E(o.$$.fragment,c),s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)E(s[m]);i=!1},d(c){c&&S(t),A(o),gn(s,c)}}}function no(e,t,n){let o;Jt(e,ee,a=>n(1,o=a));let l=[];ee.subscribe(a=>{n(0,l=a)});function r(a,s){e.$$.not_equal(o[s].value,a)&&(o[s].value=a,ee.set(o))}function d(a,s){e.$$.not_equal(o[s].activated,a)&&(o[s].activated=a,ee.set(o))}function i(a,s){e.$$.not_equal(o[s].name,a)&&(o[s].name=a,ee.set(o))}return[l,o,r,d,i]}class oo extends x{constructor(t){super(),Z(this,t,no,to,U,{})}}new oo({target:document.getElementById("app")});