"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3347],{31053:function(n,e,t){t.d(e,{IJ:function(){return o},Tb:function(){return i},aW:function(){return u},zz:function(){return r}});var r="div-to-center-for-centered-style",o="div-to-center-for-centered-style-flex-col",i={left:"DROPLEFTROW",right:"DROPRIGHTROW",above:"DROPABOVEROW"},u=function(n){if(!n.includes("-"))return{row:null,position:null};var e=Number(n.split("-")[1]);return n.startsWith(i.above)?{row:e,position:"above"}:n.startsWith(i.left)?{row:e,position:"left"}:n.startsWith(i.right)?{row:e,position:"right"}:{row:null,position:null}}},73022:function(n,e,t){t.d(e,{Sn:function(){return C},Yv:function(){return _},g8:function(){return S}});var r=t(50858),o=t(50851),i=t(24246),u=t(27124),a=t.n(u),c=t(27378),s=t(21031),l=t(77747),d=t(58971),f=t(11576),m=t(89107),g=t(82879),h=t(99511),v=t(31053),p=t(31955),b=t(39997),w=t(71866),y=t.n(w);function x(){var n=(0,o._)(["\n  transition: ",";\n  &:hover {\n    background: "," !important;\n    transform: ",";\n  }\n"]);return x=function(){return n},n}var C=b.ZP.button.withConfig({componentId:"sc-37b24f3e-0"})(x(),function(n){return n.grow?"transform 0.2s ease, background 0.2s ease":""},function(n){return n.hoverColor},function(n){return n.grow?"scale(1.05)":"none"}),k=function(n,e){switch(n){case"extra_small":return{fontSize:"".concat((0,s.Mw)(10),"rem"),lineHeight:"1.4em",fontWeight:400};case"small":return{fontSize:"1rem",lineHeight:"1.4em",fontWeight:500};case"medium":return{fontSize:"".concat((0,s.Mw)(18),"rem"),lineHeight:"1.4em",fontWeight:500};case"large":return{fontSize:"".concat((0,s.Mw)(e?18:20),"rem"),lineHeight:"1.5em",fontWeight:500};case"extra_large":return{fontSize:"".concat((0,s.Mw)(e?20:22),"rem"),lineHeight:"1.5em",fontWeight:500};default:throw Error("Unhandled type: ".concat(n))}},_=function(n){var e=a()(n);return a()(e).isDark()?e.mix(a()("white"),.2).hsl().string():e.luminosity()>.9?e.darken(.05).hsl().string():e.darken(.2).hsl().string()},S=(0,c.forwardRef)(function(n,e){var t=n.alignment,o=n.disabled,u=n.type,a=n.onClick,c=n.text,s=n.backgroundColor,b=n.isLoading,w=n.icon,x=n.labelClassName,S=n.sizingOverride,R=n.style,E=n.customHoverColor,O=n.className,L=n.removeRingOffset,j=n.dontExpandOnSmallScreen,N=n.forceStretchOnMobile,z=n.dataCy,P=n.activeThemeOverride,B=n.textColorOverride,D=n.hideShadow,W=n.theme,T=n.customReactButtonContent,A=n.textStyles,K=(0,d.C)(h.VU),I=P||K,H=(0,d.C)(h.eD),Z=s||o&&y().gray[500]||I.primaryColor,q=S||I.formSizing,M=E||o&&y().gray[500]||I.primaryAccentColor;return s&&!E&&(M=_(s)),(0,i.jsx)(p.er,{primaryColor:I.primaryColor,className:(0,f.AK)("flex","full"===t&&"w-full","left"===t&&"justify-start","center"===t&&"justify-center","right"===t&&"justify-end",N&&H&&"w-full",O),id:v.zz,children:(0,i.jsxs)(C,{grow:"grow"===I.buttonAnimation&&!o,ref:e,hoverColor:M,"data-cy":z||"button-component",type:void 0===u?"button":u,onClick:a,disabled:b||o,style:(0,r._)({background:"transparent"===W?void 0:Z,color:B||(0,g.nD)(Z)},R||{},k(q,H),A||{}),className:(0,f.AK)("inline-flex items-center leading-4 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-1.5",j?"w-auto":"w-full sm:w-auto","flex justify-center ",!D&&"shadow","full"===t&&"!w-full","extra_large"===q&&"min-h-[50px] !px-6","large"===q&&"min-h-[46px] ".concat("center"===t?"!px-7":"!px-5"),"medium"===q&&"min-h-[42px] ".concat("center"===t?"!px-5":"!px-4"),"small"===q&&"min-h-[42px] sm:min-h-[38px]","extra_small"===q&&"!rounded-[4px] !py-[1px]","border-transparent",L&&"focus:!ring-0 focus:!ring-offset-0",(!I.buttonRounding||"default"===I.buttonRounding)&&"rounded-md","full"===I.buttonRounding&&"rounded-full","none"===I.buttonRounding&&"rounded-none","transparent"===W?"px-2":"border px-4"),children:[b?(0,i.jsx)(l.Ho,{className:(0,f.AK)("animate-spin -ml-1 mr-3 h-5 w-5","small"===q&&"h-4 w-4")}):w?(0,i.jsx)(i.Fragment,{children:w}):(0,i.jsx)(i.Fragment,{}),T||(0,i.jsx)("span",{className:"max-w-full overflow-hidden",children:(0,i.jsx)(m.Z,{direction:"vertical",children:(0,i.jsx)("div",{className:x,children:c})})})]})})})},49749:function(n,e,t){t.d(e,{G:function(){return r}});var r=function(n){if(n.startsWith("<")){var e=n.replace("<","").split(">")[0].split(" ")[0].toLowerCase();if(["h1","h2","h3","h4","h5","h6"].includes(e))return e}}},21791:function(n,e,t){t.d(e,{K5:function(){return S},oZ:function(){return _}});var r=t(50858),o=t(55818),i=t(50851),u=t(24246),a=t(27378),c=t(92463),s=t(45181),l=t(22020),d=t(27124),f=t.n(d),m=t(5592),g=t(39142),h=t(99511),v=t(42036),p=t(58971);t(67214),t(45633),t(1411);var b=t(39997),w=t(71866),y=t.n(w),x=t(11576);function C(){var n=(0,i._)(["\n  ","\n"]);return C=function(){return n},n}var k=b.ZP.div.withConfig({componentId:"sc-bfdf9e02-0"})(C(),function(n){return n.isRequired?"\n  .ql-editor > :last-child:after {\n    content: ' *';\n    color: ".concat(n.red,";\n  }"):""}),_={border:"none",background:"transparent"},S="!bg-none !shadow-none !border-none !p-0";e.ZP=function(n){var e=n.evaluatedLabel,t=n.unevaluatedLabel,i=n.widgetId,d=n.widgetKey,b=n.isRequired,w=n.placeholder,C=n.defaultColorOverride,R=n.makeBoldSemiBold,E=n.isHeading,O=n.onChange,L=n.textAlign,j=n.textSizingOverride,N=n.defaultBold,z=n.customToolbar,P=n.isQuestionLabel,B=n.customToolbarCSS,D=n.readonly,W=n.disableReferencePicking,T=n.activeThemeOverride,A=n.customBounds,K=n.showReferenceButton,I=(0,p.T)(),H=(0,p.C)(h.VU),Z=T||H,q="center"===Z.formAlignment?"center":L,M=(0,p.C)(m.J$G),Q=(0,p.C)(g.kf),F=(0,p.C)(g.gh),U=(0,p.C)(m.zRe),J=Z.questionsColor,G=function(n){if(O){O(n);return}Q&&i&&d&&I((0,m.R2j)({stepId:Q,value:n,widgetId:i,id:d}))},V=(0,a.useMemo)(function(){return!!(0,v.isRichLabelEmpty)(e)},[e]);if(V&&"edit"!==F)return(0,u.jsx)(u.Fragment,{});var X=!!b&&!V,Y=!E&&U===i&&!!i;return(0,u.jsx)("div",{className:"relative w-full",children:(0,u.jsx)(k,{isRequired:X&&"edit"===F,red:Z.slightlyFadedQuestionsColor||y().red[400],children:(0,u.jsx)(c.v,{sizing:Z.formElementSizes,color:C||J||y().gray[900],defaultBold:N||Z.bold,makeBoldSemiBold:R,rightToLeft:M,textSizingOverride:j,isQuestionLabel:P,children:"edit"!==F||D?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.Z,{value:e,styleOverrides:_,className:S,rightToLeft:M,textAlign:q,showAsterisk:X,widgetId:i})}):(0,u.jsx)(s.Z,{onlyShowIfWidgetSelected:!0,customPlaceholder:w,value:t.logic,onChange:function(n){G((0,o._)((0,r._)({},t),{logic:n}))},useHTML:!0,customBounds:A,showToolbar:!0,customToolbar:z,styleOverrides:Y?{borderBottom:"solid",borderColor:Z.editorPrimaryColor,borderBottomWidth:"2px",background:Z.isDark?f()(Z.questionsBackgroundColor).lighten(.2).hsl().string():f()(Z.questionsBackgroundColor).darken(.05).hsl().string(),transition:"all 200ms ease"}:(0,o._)((0,r._)({},_),{transition:"all 200ms ease-out"}),className:(0,x.AK)(Y?"!border-b-2 pt-1 pb-1 pl-2 pr-8 !rounded-none mb-1":S),widgetId:i,buttonClassName:"!mt-1",hideReferencePicking:!K,disableReferencePicking:W,rightToLeft:M,noEditorPadding:!0,textAlign:q,customToolbarCSS:B,showReferenceButtonOnHover:!0})})})})}},55605:function(n,e,t){var r=t(50858),o=t(97768),i=t(24246),u=t(32288),a=t(11576);e.Z=function(n){var e=n.onChange,t=n.value,c=(n.onEnterKey,(0,o._)(n,["onChange","value","onEnterKey"])),s=String(t);return(0,i.jsx)(u.Z,(0,r._)({type:"number",onChange:function(n){e((0,a.kE)(n)?Number(n):null)},value:null!==t?t:"",onWheelCapture:function(n){var e;null===(e=n.target)||void 0===e||e.blur()},onKeyDown:function(n){if(!((n.ctrlKey||n.metaKey)&&["a","c","v"].includes(n.key))&&(n.key.match(/\D/)&&!["ArrowLeft","ArrowRight","Delete","Tab","Backspace",".","-"].includes(n.key)||s.includes(".")&&"."===n.key))return n.preventDefault(),!1}},c))}},28630:function(n,e,t){var r=t(50858),o=t(55818),i=t(97768),u=t(50851),a=t(24246),c=t(27849),s=t(71866),l=t.n(s);function d(){var n=(0,u._)(["\n  ","\n"]);return d=function(){return n},n}var f=t(39997).ZP.div.withConfig({componentId:"sc-2b1ffb5b-0"})(d(),function(n){return"large"===n.size?"\n  .ant-switch-handle::before {\n    border-radius: 12px;\n    height: 26px;\n    width: 26px;\n  }\n\n  .ant-switch {\n    height: 30px;\n    width: 60px;\n  }\n  ":""});e.Z=function(n){var e=n.primaryColor,t=n.secondaryColor,u=n.customSize,s=(0,i._)(n,["primaryColor","secondaryColor","customSize"]),d=e||("secondary"===n.theme?l().gray[800]:l().blue[500]),m=t||l().gray[400];return(0,a.jsx)(f,{size:u||"normal",id:n.id,children:(0,a.jsx)(c.Z,(0,o._)((0,r._)({"data-cy":"switch"},s),{style:{backgroundColor:n.checked?d:m}}))})}},3320:function(n,e,t){t.d(e,{Yn:function(){return a},bH:function(){return l},fw:function(){return s},kr:function(){return d}});var r=t(60053),o=t(74315),i=t(57500),u=t(32488),a="__internal__kDNKXOUDLDKJWEOUCNDCNEWLQPA",c="__internal__kDNKXOUDLDKJWEOUCNDCNEWLQPB",s=function(){var n="y"===(0,r._)((0,o.useQueryParam)(a,o.StringParam),1)[0];return{isPreviewingTemplate:"y"===(0,r._)((0,o.useQueryParam)(c,o.StringParam),1)[0]||n,hideEndingBranding:n}},l=function(){var n=(0,i.vl)();return"y"===n[a]||"y"===n[c]},d=function(n){var e=n.utmSource,t=n.flowPublicIdentifier,r=n.isScheduling;return"".concat(u.BM,"/").concat(r?"scheduling":"discover","?utm_source=").concat(e,"&utm_medium=website&utm_campaign=").concat(t)}},10680:function(n,e,t){t.d(e,{D9:function(){return s},XI:function(){return a},_:function(){return u},bk:function(){return c},zL:function(){return l}});var r=t(60053),o=t(27378),i=t(41518);function u(n,e){var t=(0,r._)((0,o.useState)(function(){try{var t=(0,i.$o)(n);return t?JSON.parse(t):e}catch(n){return console.log(n),e}}),2),u=t[0],a=t[1];return[u,function(e){try{var t=e instanceof Function?e(u):e;a(t),(0,i.qQ)(n,JSON.stringify(t))}catch(n){console.log(n)}}]}function a(){var n=(0,r._)((0,o.useState)(!1),2),e=n[0],t=n[1],i=(0,o.useRef)(null),u=function(){return t(!0)},a=function(){return t(!1)};return(0,o.useEffect)(function(){var n=i.current;if(n)return n.addEventListener("mouseover",u),n.addEventListener("mouseout",a),function(){n.removeEventListener("mouseover",u),n.removeEventListener("mouseout",a)}},[i.current]),[i,e]}var c=function(n,e){var t=(0,o.useCallback)(function(t){null===n.current||"function"!=typeof n.current.contains||n.current.contains(t.target)||e()},[n,e]);(0,o.useEffect)(function(){return window.addEventListener("mousedown",t),function(){window.removeEventListener("mousedown",t)}},[t])},s=function(n){var e=(0,o.useRef)();return(0,o.useEffect)(function(){e.current=n}),e.current},l=function(){var n=(0,r._)((0,o.useState)(""),2),e=n[0],t=n[1];return(0,o.useEffect)(function(){t(window.location.search)},[]),e}}}]);