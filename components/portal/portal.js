import c,{Fragment as p,createContext as A,useContext as y,useEffect as d,useState as m,useRef as L}from"react";import{createPortal as b}from"react-dom";import{forwardRefWithAs as s,render as T}from"../../utils/render.js";import{useIsoMorphicEffect as h}from"../../hooks/use-iso-morphic-effect.js";import{usePortalRoot as G}from"../../internal/portal-force-root.js";import{useServerHandoffComplete as M}from"../../hooks/use-server-handoff-complete.js";import{optionalRef as v,useSyncRefs as P}from"../../hooks/use-sync-refs.js";import{useOwnerDocument as R}from"../../hooks/use-owner.js";function C(i){let n=G(),l=y(g),e=R(i),[r,a]=m(()=>{if(!n&&l!==null||typeof window=="undefined")return null;let o=e==null?void 0:e.getElementById("headlessui-portal-root");if(o)return o;if(e===null)return null;let t=e.createElement("div");return t.setAttribute("id","headlessui-portal-root"),e.body.appendChild(t)});return d(()=>{r!==null&&(e!=null&&e.body.contains(r)||e==null||e.body.appendChild(r))},[r,e]),d(()=>{n||l!==null&&a(l.current)},[l,a,n]),r}let O=p,H=s(function(n,l){let e=n,r=L(null),a=P(v(f=>{r.current=f}),l),o=R(r),t=C(r),[u]=m(()=>{var f;return typeof window=="undefined"?null:(f=o==null?void 0:o.createElement("div"))!=null?f:null}),E=M();return h(()=>{if(!!t&&!!u)return t.appendChild(u),()=>{var f;!t||!u||(t.removeChild(u),t.childNodes.length<=0&&((f=t.parentElement)==null||f.removeChild(t)))}},[t,u]),E?!t||!u?null:b(T({ourProps:{ref:a},theirProps:e,defaultTag:O,name:"Portal"}),u):null}),x=p,g=A(null),_=s(function(n,l){let{target:e,...r}=n,o={ref:P(l)};return c.createElement(g.Provider,{value:e},T({ourProps:o,theirProps:r,defaultTag:x,name:"Popover.Group"}))}),K=Object.assign(H,{Group:_});export{K as Portal};