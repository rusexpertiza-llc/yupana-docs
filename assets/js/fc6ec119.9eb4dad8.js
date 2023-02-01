"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>E});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,E=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return r?n.createElement(E,l(l({ref:t},u),{},{components:r})):n.createElement(E,l({ref:t},u))}));function E(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],c={id:"delete",title:"DELETE"},i=void 0,p={unversionedId:"delete",id:"delete",title:"DELETE",description:"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 DELETE \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438\u0437 \u0438\u0441\u0442\u043e\u0440\u0438\u0438.",source:"@site/target/docs/delete.md",sourceDirName:".",slug:"/delete",permalink:"/docs/delete",draft:!1,tags:[],version:"current",frontMatter:{id:"delete",title:"DELETE"},sidebar:"docs",previous:{title:"KILL",permalink:"/docs/kill"}},u={},s=[],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 DELETE \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438\u0437 \u0438\u0441\u0442\u043e\u0440\u0438\u0438."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,a.kt)("p",null,"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0438\u0437 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043f\u043e \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE QUERIES WHERE QUERY_ID = ?\n")),(0,a.kt)("p",null,"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043c\u0435\u0442\u0440\u0438\u043a \u043f\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE QUERIES WHERE STATE = 'FINISHED'\n")))}d.isMDXComponent=!0}}]);