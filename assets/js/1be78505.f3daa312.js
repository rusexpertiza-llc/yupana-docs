"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[514,972],{9963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ie});var a=n(7294),r=n(6010),l=n(1944),o=n(5281),i=n(3320),c=n(8425),d=n(4477),s=n(1116),m=n(7961),u=n(5999),b=n(2466),p=n(5936);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function v(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],o=(0,a.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,d=i.cancelScroll;return(0,b.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(d(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,h.backToTopButton,t&&h.backToTopButtonShow),type:"button",onClick:n})}var E=n(1442),f=n(6550),g=n(7524),k=n(6668),_=n(1327),C=n(7462);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(I,{className:S.collapseSidebarButtonIcon}))}var Z=n(9689),x=n(3366),T=n(9688),B=Symbol("EmptyContext"),y=a.createContext(B);function w(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],o=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(y.Provider,{value:o},t)}var L=n(6043),A=n(8596),M=n(9960),P=n(2389),F=["item","onItemClick","activePath","level","index"];function H(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function W(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,d=e.index,s=(0,x.Z)(e,F),m=t.items,u=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,k.L)().docs.sidebar.autoCollapseCategories,E=function(e){var t=(0,P.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),f=(0,c._F)(t,l),g=(0,A.Mg)(h,l),_=(0,L.u)({initialState:function(){return!!b&&(!f&&t.collapsed)}}),I=_.collapsed,S=_.setCollapsed,N=function(){var e=(0,a.useContext)(y);if(e===B)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=N.expandedItem,w=N.setExpandedItem,W=function(e){void 0===e&&(e=!I),w(e?null:d),S(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,T.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:f,collapsed:I,updateCollapsed:W}),(0,a.useEffect)((function(){b&&null!=Z&&Z!==d&&v&&S(!0)}),[b,Z,d,S,v]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":I},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(M.Z,(0,C.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?function(e){null==n||n(t),h?W(!1):(e.preventDefault(),W())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=E?E:"#":E},s),u),h&&b&&a.createElement(H,{categoryLabel:u,onClick:function(e){e.preventDefault(),W()}})),a.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(X,{items:m,tabIndex:I?-1:0,onItemClick:n,activePath:l,level:i+1})))}var D=n(3919),R=n(9471);const V={menuExternalLink:"menuExternalLink_NmtK"};var z=["item","onItemClick","activePath","level","index"];function U(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,d=(e.index,(0,x.Z)(e,z)),s=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,l),h=(0,D.Z)(s);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:m},a.createElement(M.Z,(0,C.Z)({className:(0,r.Z)("menu__link",!h&&V.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},h&&{onClick:n?function(){return n(t)}:void 0},d),m,!h&&a.createElement(R.Z,null)))}const K={menuHtmlItem:"menuHtmlItem_M9Kj"};function j(e){var t=e.item,n=e.level,l=e.index,i=t.value,c=t.defaultStyle,d=t.className;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[K.menuHtmlItem,"menu__list-item"],d),key:l,dangerouslySetInnerHTML:{__html:i}})}var q=["item"];function G(e){var t=e.item,n=(0,x.Z)(e,q);switch(t.type){case"category":return a.createElement(W,(0,C.Z)({item:t},n));case"html":return a.createElement(j,(0,C.Z)({item:t},n));default:return a.createElement(U,(0,C.Z)({item:t},n))}}var Y=["items"];function O(e){var t=e.items,n=(0,x.Z)(e,Y);return a.createElement(w,null,t.map((function(e,t){return a.createElement(G,(0,C.Z)({key:t,item:e,index:t},n))})))}const X=(0,a.memo)(O),J={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Q(e){var t=e.path,n=e.sidebar,l=e.className,i=function(){var e=(0,Z.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",J.menu,i&&J.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:n,activePath:t,level:1})))}const $="sidebar_njMd",ee="sidebarWithHideableNavbar_wUlq",te="sidebarHidden_VK0M",ne="sidebarLogo_isFc";function ae(e){var t=e.path,n=e.sidebar,l=e.onCollapse,o=e.isHidden,i=(0,k.L)(),c=i.navbar.hideOnScroll,d=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)($,c&&ee,o&&te)},c&&a.createElement(_.Z,{tabIndex:-1,className:ne}),a.createElement(Q,{path:t,sidebar:n}),d&&a.createElement(N,{onClick:l}))}const re=a.memo(ae);var le=n(3102),oe=n(2961),ie=function(e){var t=e.sidebar,n=e.path,l=(0,oe.e)();return a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ce(e){return a.createElement(le.Zo,{component:ie,props:e})}const de=a.memo(ce);function se(e){var t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(re,e),r&&a.createElement(de,e))}const me={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function ue(e){var t=e.toggleSidebar;return a.createElement("div",{className:me.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:me.expandButtonIcon}))}const be={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function pe(e){var t,n=e.children,r=(0,s.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function he(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,f.TH)().pathname,c=(0,a.useState)(!1),d=c[0],s=c[1],m=(0,a.useCallback)((function(){d&&s(!1),!d&&(0,E.n)()&&s(!0),l((function(e){return!e}))}),[l,d]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,be.docSidebarContainer,n&&be.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(be.docSidebarContainer)&&n&&s(!0)}},a.createElement(pe,null,a.createElement("div",{className:(0,r.Z)(be.sidebarViewport,d&&be.sidebarViewportHidden)},a.createElement(se,{sidebar:t,path:i,onCollapse:m,isHidden:d}),d&&a.createElement(ue,{toggleSidebar:m}))))}const ve={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,s.V)();return a.createElement("main",{className:(0,r.Z)(ve.docMainContainer,(t||!l)&&ve.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ve.docItemWrapper,t&&ve.docItemWrapperEnhanced)},n))}const fe={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function ge(e){var t=e.children,n=(0,s.V)(),r=(0,a.useState)(!1),l=r[0],o=r[1];return a.createElement(m.Z,{wrapperClassName:fe.docsWrapper},a.createElement(v,null),a.createElement("div",{className:fe.docPage},n&&a.createElement(he,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(Ee,{hiddenSidebarContainer:l},t)))}var ke=n(4972),_e=n(197);function Ce(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(_e.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ie(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(ke.default,null);var i=n.docElement,m=n.sidebarName,u=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Ce,e),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.q,{version:t},a.createElement(s.b,{name:m,items:u},a.createElement(ge,null,i)))))}},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(7294),r=n(5999),l=n(1944),o=n(7961);function i(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4477:(e,t,n)=>{n.d(t,{E:()=>i,q:()=>o});var a=n(7294),r=n(9688),l=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function i(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);