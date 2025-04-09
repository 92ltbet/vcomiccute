"use strict";exports.id=469,exports.ids=[469],exports.modules={8469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return Image}});let n=r(143),i=r(2212),o=i._(r(4218)),l=n._(r(3638)),a=n._(r(724)),s=r(288),d=r(8564),u=r(9863);r(7966);let c=r(3102),f=n._(r(4572)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,i,o){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function g(e){let[t,r]=o.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let h=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:l,width:a,decoding:s,className:d,style:u,fetchPriority:c,placeholder:f,loading:p,unoptimized:h,fill:y,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:_,setShowAltText:w,onLoad:S,onError:x,...C}=e;return o.default.createElement("img",{...C,...g(c),loading:p,width:a,height:l,decoding:s,"data-nimg":y?"fill":"1",className:d,style:u,sizes:i,srcSet:n,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&m(e,f,v,b,_,h))},[r,f,v,b,_,x,h,t]),onLoad:e=>{let t=e.currentTarget;m(t,f,v,b,_,h)},onError:e=>{w(!0),"empty"!==f&&_(!0),x&&x(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let Image=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(c.RouterContext),n=(0,o.useContext)(u.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:a}=e,m=(0,o.useRef)(l);(0,o.useEffect)(()=>{m.current=l},[l]);let g=(0,o.useRef)(a);(0,o.useEffect)(()=>{g.current=a},[a]);let[v,b]=(0,o.useState)(!1),[_,w]=(0,o.useState)(!1),{props:S,meta:x}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:i,blurComplete:v,showAltText:_});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...S,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:b,setShowAltText:w,ref:t}),x.priority?o.default.createElement(y,{isAppRouter:!r,imgAttributes:S}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2126:(e,t,r)=>{e.exports=r(2337).vendored.contexts.AmpContext},4004:(e,t,r)=>{e.exports=r(2337).vendored.contexts.HeadManagerContext},9863:(e,t,r)=>{e.exports=r(2337).vendored.contexts.ImageConfigContext},3489:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},288:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(7966);let n=r(6127),i=r(8564);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:v,fill:b=!1,style:_,onLoad:w,onLoadingComplete:S,placeholder:x="empty",blurDataURL:C,fetchPriority:P,layout:j,objectFit:E,objectPosition:O,lazyBoundary:M,lazyRoot:z,...I}=e,{imgConf:k,showAltText:A,blurComplete:R,defaultLoader:D}=t,U=k||i.imageConfigDefault;if("allSizes"in U)a=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);a={...U,allSizes:e,deviceSizes:t}}let T=I.loader||D;delete I.loader,delete I.srcSet;let L="__next_img_default"in T;if(L){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:r,...n}=t;return e(n)}}if(j){"fill"===j&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!c&&(c=t)}let N="",B=l(y),F=l(v);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,N=e.src,!b){if(B||F){if(B&&!F){let t=B/e.width;F=Math.round(e.height*t)}else if(!B&&F){let t=F/e.height;B=Math.round(e.width*t)}}else B=e.width,F=e.height}}let G=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:N)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,G=!1),a.unoptimized&&(f=!0),L&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(P="high");let W=l(h),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:O}:{},A?{}:{color:"transparent"},_),V=R||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:F,blurWidth:s,blurHeight:d,blurDataURL:C||"",objectFit:H.objectFit})+'")':'url("'+x+'")',q=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,l),u=s.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:a({config:t,src:r,quality:o,width:s[u]})}}({config:a,src:u,unoptimized:f,width:B,quality:W,sizes:c,loader:T}),J={...I,loading:G?"lazy":m,fetchPriority:P,width:B,height:F,decoding:"async",className:g,style:{...H,...q},sizes:$.sizes,srcSet:$.srcSet,src:$.src},Y={unoptimized:f,priority:p,placeholder:x,fill:b};return{props:J,meta:Y}}},724:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return u},default:function(){return m}});let n=r(143),i=r(2212),o=i._(r(4218)),l=n._(r(7343)),a=r(2126),s=r(4004),d=r(3489);function u(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7966);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:r}=t;return e.reduce(c,[]).reverse().concat(u(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,o.useContext)(a.AmpStateContext),n=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,d.isInAmpMode)(r)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6127:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n?40*n:t,s=i?40*i:r,d=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},8564:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},4572:(e,t)=>{function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},7343:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(4218),i=()=>{},o=()=>{};function l(e){var t;let{headManager:r,reduceComponentsToState:l}=e;function a(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(l(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},7966:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}}};