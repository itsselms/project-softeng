import p,{createContext as m,useCallback as b,useContext as L,useMemo as u,useState as g}from"react";import{useId as x}from"../../hooks/use-id.js";import{forwardRefWithAs as T,render as P}from"../../utils/render.js";import{useIsoMorphicEffect as E}from"../../hooks/use-iso-morphic-effect.js";import{useSyncRefs as h}from"../../hooks/use-sync-refs.js";let c=m(null);function f(){let l=L(c);if(l===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f),t}return l}function B(){let[l,t]=g([]);return[l.length>0?l.join(" "):void 0,u(()=>function(e){let o=b(a=>(t(i=>[...i,a]),()=>t(i=>{let n=i.slice(),d=n.indexOf(a);return d!==-1&&n.splice(d,1),n})),[]),r=u(()=>({register:o,slot:e.slot,name:e.name,props:e.props}),[o,e.slot,e.name,e.props]);return p.createElement(c.Provider,{value:r},e.children)},[t])]}let v="label",M=T(function(t,s){let{passive:e=!1,...o}=t,r=f(),a=`headlessui-label-${x()}`,i=h(s);E(()=>r.register(a),[a,r.register]);let n={ref:i,...r.props,id:a};return e&&("onClick"in n&&delete n.onClick,"onClick"in o&&delete o.onClick),P({ourProps:n,theirProps:o,slot:r.slot||{},defaultTag:v,name:r.name||"Label"})});export{M as Label,B as useLabels};
