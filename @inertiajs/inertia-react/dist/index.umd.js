!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lodash.isequal"),require("react"),require("@inertiajs/inertia")):"function"==typeof define&&define.amd?define(["exports","lodash.isequal","react","@inertiajs/inertia"],n):n((e=e||self).InertiaReact={},e.isEqual,e.React,e.Inertia)}(this,function(e,n,r,t){n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var o="default"in r?r.default:r;function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function a(e,n){var o=r.useState(function(){var r=t.Inertia.restore(n);return void 0!==r?r:e}),i=o[0],a=o[1];return r.useEffect(function(){t.Inertia.remember(i,n)},[i,n]),[i,a]}var u=r.createContext();u.displayName="InertiaPageContext";var c=r.createContext();function s(e){var n=e.children,o=e.initialPage,a=e.resolveComponent,s=e.titleCallback,l=e.onHeadUpdate,f=r.useState({component:e.initialComponent||null,page:o,key:null}),d=f[0],p=f[1],v=r.useMemo(function(){return t.createHeadManager("undefined"==typeof window,s||function(e){return e},l||function(){})},[]);if(r.useEffect(function(){t.Inertia.init({initialPage:o,resolveComponent:a,swapComponent:function(e){var n=e.component,r=e.page,t=e.preserveState;try{return p(function(e){return{component:n,page:r,key:t?e.key:Date.now()}}),Promise.resolve()}catch(e){return Promise.reject(e)}}})},[]),!d.component)return r.createElement(c.Provider,{value:v},r.createElement(u.Provider,{value:d.page},null));var m=n||function(e){var n=e.Component,t=e.props,o=r.createElement(n,i({key:e.key},t));return"function"==typeof n.layout?n.layout(o):Array.isArray(n.layout)?n.layout.concat(o).reverse().reduce(function(e,n){return r.createElement(n,i({children:e},t))}):o};return r.createElement(c.Provider,{value:v},r.createElement(u.Provider,{value:d.page},m({Component:d.component,key:d.key,props:d.page.props})))}function l(e){var n,t,i=e.children,a=e.title,u=r.useContext(c),s=r.useMemo(function(){return u.createProvider()},[u]);return r.useEffect(function(){return function(){s.disconnect()}},[s]),s.update((n=i,t=(Array.isArray(n)?n:[n]).filter(function(e){return e}).map(function(e){return function(e){return function e(n){var r=function(e){var n=Object.keys(e.props).reduce(function(n,r){if(["head-key","children","dangerouslySetInnerHTML"].includes(r))return n;var t=e.props[r];return""===t?n+" "+r:n+" "+r+'="'+t+'"'},"");return"<"+e.type+n+">"}(n);return n.props.children&&(r+=function(n){return"string"==typeof n.props.children?n.props.children:n.props.children.reduce(function(n,r){return n+e(r)},"")}(n)),n.props.dangerouslySetInnerHTML&&(r+=n.props.dangerouslySetInnerHTML.__html),function(e){return["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].indexOf(e.type)>-1}(n)||(r+="</"+n.type+">"),r}(function(e){return o.cloneElement(e,{inertia:void 0!==e.props["head-key"]?e.props["head-key"]:""})}(e))}(e)}),a&&!t.find(function(e){return e.startsWith("<title")})&&t.push("<title inertia>"+a+"</title>"),t)),null}c.displayName="InertiaHeadContext",s.displayName="Inertia";var f=function(){},d=r.forwardRef(function(e,n){var o=e.children,a=e.as,u=void 0===a?"a":a,c=e.data,s=void 0===c?{}:c,l=e.href,d=e.method,p=void 0===d?"get":d,v=e.preserveScroll,m=void 0!==v&&v,y=e.preserveState,h=void 0===y?null:y,g=e.replace,S=void 0!==g&&g,k=e.only,C=void 0===k?[]:k,b=e.headers,P=void 0===b?{}:b,E=e.queryStringArrayFormat,I=void 0===E?"brackets":E,w=e.onClick,O=void 0===w?f:w,T=e.onCancelToken,j=void 0===T?f:T,x=e.onBefore,A=void 0===x?f:x,L=e.onStart,F=void 0===L?f:L,H=e.onProgress,R=void 0===H?f:H,q=e.onFinish,B=void 0===q?f:q,D=e.onCancel,M=void 0===D?f:D,N=e.onSuccess,U=void 0===N?f:N,J=e.onError,W=void 0===J?f:J,_=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n.indexOf(r=i[t])>=0||(o[r]=e[r]);return o}(e,["children","as","data","href","method","preserveScroll","preserveState","replace","only","headers","queryStringArrayFormat","onClick","onCancelToken","onBefore","onStart","onProgress","onFinish","onCancel","onSuccess","onError"]),Q=r.useCallback(function(e){O(e),t.shouldIntercept(e)&&(e.preventDefault(),t.Inertia.visit(l,{data:s,method:p,preserveScroll:m,preserveState:null!=h?h:"get"!==p,replace:S,only:C,headers:P,onCancelToken:j,onBefore:A,onStart:F,onProgress:R,onFinish:B,onCancel:M,onSuccess:U,onError:W}))},[s,l,p,m,h,S,C,P,O,j,A,F,R,B,M,U,W]);u=u.toLowerCase(),p=p.toLowerCase();var z=t.mergeDataIntoQueryString(p,l||"",s,I);return l=z[0],s=z[1],"a"===u&&"get"!==p&&console.warn('Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.\n\nPlease specify a more appropriate element using the "as" attribute. For example:\n\n<Link href="'+l+'" method="'+p+'" as="button">...</Link>'),r.createElement(u,i({},_,"a"===u?{href:l}:{},{ref:n,onClick:Q}),o)});e.App=s,e.Head=l,e.InertiaApp=s,e.InertiaHead=l,e.InertiaLink=d,e.Link=d,e.app=s,e.createInertiaApp=function(e){try{var n,t,o,i,a,u,c;t=void 0===(n=e.id)?"app":n,o=e.resolve,i=e.setup,a=e.title,u=e.page,c=e.render;var l="undefined"==typeof window,f=l?null:document.getElementById(t),d=u||JSON.parse(f.dataset.page),p=function(e){return Promise.resolve(o(e)).then(function(e){return e.default||e})},v=[];return Promise.resolve(p(d.component).then(function(e){return i({el:f,App:s,props:{initialPage:d,initialComponent:e,resolveComponent:p,titleCallback:a,onHeadUpdate:l?function(e){return v=e}:null}})})).then(function(e){return function(){if(l)return Promise.resolve(c(r.createElement("div",{id:t,"data-page":JSON.stringify(d)},e))).then(function(e){return{head:v,body:e}})}()})}catch(e){return Promise.reject(e)}},e.link=d,e.useForm=function(){var e=[].slice.call(arguments),o=r.useRef(null),u="string"==typeof e[0]?e[0]:null,c=r.useState(("string"==typeof e[0]?e[1]:e[0])||{}),s=c[0],l=c[1],f=r.useRef(null),d=r.useRef(null),p=u?a(s,u+":data"):r.useState(s),v=p[0],m=p[1],y=u?a({},u+":errors"):r.useState({}),h=y[0],g=y[1],S=r.useState(!1),k=S[0],C=S[1],b=r.useState(!1),P=b[0],E=b[1],I=r.useState(null),w=I[0],O=I[1],T=r.useState(!1),j=T[0],x=T[1],A=r.useState(!1),L=A[0],F=A[1],H=function(e){return e};r.useEffect(function(){return o.current=!0,function(){o.current=!1}},[]);var R=r.useCallback(function(e,n,r){void 0===r&&(r={});var a=i({},r,{onCancelToken:function(e){if(f.current=e,r.onCancelToken)return r.onCancelToken(e)},onBefore:function(e){if(x(!1),F(!1),clearTimeout(d.current),r.onBefore)return r.onBefore(e)},onStart:function(e){if(E(!0),r.onStart)return r.onStart(e)},onProgress:function(e){if(O(e),r.onProgress)return r.onProgress(e)},onSuccess:function(e){if(o.current&&(E(!1),O(null),g({}),C(!1),x(!0),F(!0),d.current=setTimeout(function(){o.current&&F(!1)},2e3)),r.onSuccess)return r.onSuccess(e)},onError:function(e){if(o.current&&(E(!1),O(null),g(e),C(!0)),r.onError)return r.onError(e)},onCancel:function(){if(o.current&&(E(!1),O(null)),r.onCancel)return r.onCancel()},onFinish:function(){if(o.current&&(E(!1),O(null)),f.current=null,r.onFinish)return r.onFinish()}});"delete"===e?t.Inertia.delete(n,i({},a,{data:H(v)})):t.Inertia[e](n,H(v),a)},[v,g]);return{data:v,setData:function(e,n){var r;m("string"==typeof e?i({},v,((r={})[e]=n,r)):"function"==typeof e?function(n){return e(n)}:e)},isDirty:!n(v,s),errors:h,hasErrors:k,processing:P,progress:w,wasSuccessful:j,recentlySuccessful:L,transform:function(e){H=e},setDefaults:function(e,n){l(void 0===e?function(){return v}:function(r){var t;return i({},r,n?((t={})[e]=n,t):e)})},reset:function(){var e=[].slice.call(arguments);m(0===e.length?s:Object.keys(s).filter(function(n){return e.includes(n)}).reduce(function(e,n){return e[n]=s[n],e},i({},v)))},setError:function(e,n){g(function(r){var t,o=i({},r,n?((t={})[e]=n,t):e);return C(Object.keys(o).length>0),o})},clearErrors:function(){var e=[].slice.call(arguments);g(function(n){var r=Object.keys(n).reduce(function(r,t){var o;return i({},r,e.length>0&&!e.includes(t)?((o={})[t]=n[t],o):{})},{});return C(Object.keys(r).length>0),r})},submit:R,get:function(e,n){R("get",e,n)},post:function(e,n){R("post",e,n)},put:function(e,n){R("put",e,n)},patch:function(e,n){R("patch",e,n)},delete:function(e,n){R("delete",e,n)},cancel:function(){f.current&&f.current.cancel()}}},e.usePage=function(){var e=r.useContext(u);if(!e)throw new Error("usePage must be used within the Inertia component");return e},e.useRemember=a,e.useRememberedState=function(e,n){return console.warn('The "useRememberedState" hook has been deprecated and will be removed in a future release. Use "useRemember" instead.'),a(e,n)}});
//# sourceMappingURL=index.umd.js.map
