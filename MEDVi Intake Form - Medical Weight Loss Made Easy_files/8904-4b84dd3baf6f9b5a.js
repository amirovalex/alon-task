"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8904],{82463:function(e,n,t){var s=t(24246),r=t(61006),i=t(11576),l=t(68349),a=t(45628),o=t(79165),c=t(58971),u=t(54065),d=t(96415),m=t(73022),f=t(61429),h=function(e){var n=e.children;return(0,s.jsx)(s.Fragment,{children:n})};n.Z=function(e){var n,t,x=e.activeTheme,g=e.flow,j=e.titleOverride,v=e.subtitleOverride,p=e.onButtonClick,C=e.buttonText,y=r.m[x.formPosition||"center"].shouldCenter,w=(0,c.C)(o.AT),N=g.settings;return w?(0,s.jsx)("div",{id:"flow-view",className:(0,i.AK)("flex justify-center w-full h-full flex-col items-center",!y&&"pt-5 sm:pt-10"),children:(0,s.jsx)(l.ZP,{ImageWrapper:h,children:(0,s.jsxs)(a.D_,{children:[(0,s.jsx)(u.Z,{title:j||(null===(n=N.disabledFormMessage)||void 0===n?void 0:n.title),subtitle:v||(null===(t=N.disabledFormMessage)||void 0===t?void 0:t.subtitle)}),p&&C&&(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(m.g8,{alignment:"center",text:C,className:"mb-3",icon:(0,s.jsx)(f.sCx,{className:"w-4 h-4 mr-2"}),sizingOverride:"small",onClick:p})}),(0,s.jsx)(d.Z,{})]})})}):null}},98904:function(e,n,t){t.d(n,{Z:function(){return eS}});var s=t(60053),r=t(24246),i=t(99540),l=t(79165),a=t(5592),o=t(39142),c=t(58971),u=t(74315),d=t(11576),m=t(32488),f=t(96415),h=t(78369),x=t.n(h),g=t(77386),j=function(){var e=(0,c.C)(a.$pt);return(0,g.Z)(!0).canRunCustomCode&&e?(0,r.jsx)("iframe",{sandbox:"allow-scripts",style:{display:"none"},children:(0,r.jsx)(x(),{html:e})}):null},v=t(42036),p=t(27378),C=t(97663),y=t.n(C),w=function(){var e,n=(0,c.C)(l.AT),t=(0,g.Z)(!1).canRunCustomCode,s=null===(e=(0,v.getOnlyIntegrationOfServiceType)(n.integrations,"googleTagManager"))||void 0===e?void 0:e.integration,i=null==s?void 0:s.writeQuery.config.containerId;return(0,p.useEffect)(function(){i&&t&&y().initialize({gtmId:i})},[i,t]),(0,r.jsx)(r.Fragment,{})},N=t(51037),b=t(85556),_=t(98707),k=t(31342),F=function(e){var n,t=(0,k.d7)(),s=(0,c.C)(a.Wq8);"edit"!==e&&window.addEventListener("message",(n=(0,N._)(function(e){var n,r;return(0,b.Jh)(this,function(i){try{if("string"!=typeof e.data)return[2];(n=JSON.parse(e.data)).channel===_.$B&&(r=n.stepId,s.includes(r)&&t(r))}catch(e){console.error(e)}return[2]})}),function(e){return n.apply(this,arguments)}))},T=t(45628),S=t(85801),O=t(52131),Z=t(68349),P=t(99511),I=t(36314),A=t(39347),B=function(e){var n=e.children;return(0,r.jsx)(r.Fragment,{children:n})},L=t(47941),E=t(89426),R=t(50858),q=t(55818),U=t(32485),z=t.n(U),V=t(49991),J=t(22351),M=function(e){var n=e.template,t=e.FormView,s=(0,V.$)(),i=s.fire,l=s.getInstance,a=(0,c.C)(P.VU);return(0,J.P)(),(0,p.useEffect)(function(){var e="true"===new URLSearchParams(window.location.search).get("__internal__disableConfetti");n.confetti&&!e&&i()},[n.confetti,i]),(0,p.useEffect)(function(){var e=new URL(window.location.href),n=new URLSearchParams(e.search);n.has(v.FILLOUT_EDIT_SUBMISSION_URL_PARAM)&&(n.delete(v.FILLOUT_EDIT_SUBMISSION_URL_PARAM),e.search=n.toString(),window.history.replaceState(null,"",e.toString()))},[]),(0,r.jsxs)(r.Fragment,{children:[n.confetti&&(0,r.jsx)(z(),{zIndex:1e8,refConfetti:l,style:(0,q._)((0,R._)({},V.R),{left:"left"===a.formPosition?"-20%":"right"===a.formPosition?"20%":0})}),(0,r.jsx)(t,{})]})},K=t(86185),W=t(49616),G=function(e){var n=e.template,t=(0,c.C)(P.VU),s=(0,c.C)(o.F9),l=(0,c.C)(o.gh),u=(0,c.C)(a.uCB),d=(0,c.C)(a.VyW),m=(0,p.useMemo)(function(){return(0,v.evaluateGenericObject)(n,s,{timezone:(0,W.v)(),language:d})},[s,n,d]);return(0,p.useEffect)(function(){m&&u&&(0,K.t)({evaluatedTemplate:m,mode:l,flowPublicIdentifier:u})},[m,l,u]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex w-full h-full justify-between bg-gray-100 sm:bg-white","data-cy":"ending-page-loading-screen",children:(0,r.jsx)(i.Z,{activeTheme:t})})})},D=t(51290),Q=t(5373),$={form:T.ZP,cover:function(){var e=(0,c.C)(P.VU),n=(0,c.C)(o.gh),t=(0,c.C)(I.kf);return(0,O.Z)(),(0,r.jsx)("div",{className:"flex w-full h-full justify-between relative",children:(0,r.jsx)("div",{className:(0,d.AK)("flex flex-col justify-between h-full w-full relative","edit"===n&&"min-w-0"),children:(0,r.jsx)("div",{className:"flex w-full h-full",children:(0,r.jsx)(Z.ZP,{customBackgroundColor:e.questionsBackgroundColor,ImageWrapper:B,children:(0,r.jsx)(S.Z,{children:(0,r.jsx)(A.Z,{})})})})})},t)},ending:function(){var e=(0,c.C)(E.gc),n=(0,c.C)(a.nBG),t=n.type;return(0,r.jsx)(r.Fragment,{children:"thank_you"!==t&&e?(0,r.jsx)(G,{template:n}):(0,r.jsx)(M,{template:n,FormView:T.ZP})})},login:function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(L.Z,{type:"warning",title:"Your form is misconfigured",children:"Make sure your login page is the first page in your form."})})},submission_review:function(){return(0,r.jsx)(T.ZP,{})},native_scheduling:Q.Z,checkout:D.Z},H=t(57500),Y=t(41219),X=t(86677),ee=function(){var e=(0,X.useRouter)();return(0,p.useCallback)(function(n){var t=e.pathname,s=e.query,r=new URLSearchParams(s);r.delete(n),e.replace({pathname:t,query:r.toString()},void 0,{shallow:!0})},[e])},en=t(48897),et=t(82463),es=t(91173),er=t(1189),ei=function(){var e=(0,c.T)(),n=(0,en.T)().t,t=(0,c.C)(P.VU),s=(0,c.C)(a.Bnf);(0,p.useEffect)(function(){e((0,a.YRi)(!0))},[]);var i=(0,c.C)(l.Fd);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(er.Z,{children:[(0,r.jsx)("div",{className:(0,d.AK)("w-full","absolute top-0 z-[15] ","flex items-center w-full ","flex h-14 items-center","justify-end w-full px-4"),children:(0,r.jsx)(es.kx,{showLogo:!1,className:"ml-4"})}),s&&(0,r.jsx)(et.Z,{onButtonClick:i?(0,N._)(function(){return(0,b.Jh)(this,function(n){return e((0,o.B6)({showing:!0})),[2]})}):void 0,buttonText:i?n("Edit submission"):void 0,activeTheme:t,flow:s,titleOverride:n("You have already submitted this form"),subtitleOverride:n("Contact the form owner for more details.")})]})})},el=t(70764),ea=t(54687),eo=t(79132),ec=t(91413),eu=t(28417),ed=t(73022),em=t(27124),ef=t.n(em),eh=t(20075),ex=t(2789),eg=t(40768),ej=t(98967);function ev(e){var n=e.settings,t=e.value,s=e.setValue,i=e.activeTheme,l=e.className,a=n.find(function(e){return e.value===t});return(0,r.jsxs)(ej.E,{value:a,onChange:function(e){e&&s(e.value)},children:[(0,r.jsx)(ej.E.Label,{className:"sr-only",children:"Privacy setting"}),(0,r.jsx)("div",{style:{backgroundColor:i.questionsBackgroundColorNoOpacity},className:"-space-y-px rounded-md",children:n.map(function(e,t){return(0,r.jsx)(ej.E.Option,{value:e,style:{borderColor:i.borderColor},className:function(e){return e.checked,(0,d.AK)(0===t?"rounded-tl-md rounded-tr-md":"",t===n.length-1?"rounded-bl-md rounded-br-md":"","relative flex cursor-pointer border p-3 px-4 focus:outline-none",l)},children:function(n){n.active;var t=n.checked;return(0,r.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("span",{style:{backgroundColor:t?i.primaryColor:"transparent",borderColor:t?"transparent":i.borderColor},className:"mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center","aria-hidden":"true",children:(0,r.jsx)("span",{className:"rounded-full bg-white w-1.5 h-1.5"})}),(0,r.jsxs)("span",{className:"ml-3 flex flex-col",children:[(0,r.jsx)(ej.E.Label,{as:"span",style:{color:t?i.primaryColor:i.questionsColor},className:"block text-sm font-medium mr-2",children:e.title}),e.description&&(0,r.jsx)(ej.E.Description,{as:"span",style:{color:t?i.primaryColor:i.slightlyFadedQuestionsColor},className:"block text-sm",children:e.description})]})]}),e.ending&&(0,r.jsx)(r.Fragment,{children:e.ending})]})}},e.value)})})]})}var ep=t(38580),eC=t(61656),ey=function(e){var n,t=e.isOpen,i=(0,s._)((0,p.useState)(!1),2),l=i[0],u=i[1],m=(0,es.hU)(),f=m.doLogout,h=(m.error,m.loading),x=(0,en.T)().t,g=(0,c.C)(o.q8),j=(0,c.C)(P.VU),v=(0,c.C)(a.uCB),C=(0,c.C)(o.gh),y=(0,c.T)(),w=(0,s._)((0,p.useState)([]),2),_=w[0],k=w[1],F=(0,c.C)(E.te),T=(0,ep._r)(F,"/v1/flow/login/respondent/".concat(v,"/pastSubmissions?mode=").concat(C),"GET"),S=T.request,O=(T.error,T.loading);(0,p.useEffect)(function(){(0,N._)(function(){var e;return(0,b.Jh)(this,function(n){switch(n.label){case 0:if(!t)return[3,2];return[4,S()];case 1:(e=n.sent())&&k(e.finishedFlowSessions),n.label=2;case 2:return[2]}})})()},[t,S]);var Z=(0,s._)((0,p.useState)((null===(n=_[0])||void 0===n?void 0:n.uuid)||null),2),I=Z[0],A=Z[1],B=_.find(function(e){return e.uuid===I}),L=ef()(j.primaryColor).fade(.85).hsl().string(),R=x("Completed"),q=(0,p.useMemo)(function(){return _.map(function(e){var n=(0,eC.dP)(e.stepUpdatedAt);return{title:"".concat(R," ").concat(n),value:e.uuid,ending:(0,r.jsx)(eh.Z,{theme:j.isDark?"transparent":"green",text:R,className:"shrink-0"})}})},[j.isDark,_,R]),U=!I||O;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full ",style:{backgroundColor:L},children:(0,r.jsx)(eo.KNL,{className:"h-6 w-6 ","aria-hidden":"true",style:{color:j.primaryColor}})}),(0,r.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[(0,r.jsx)(ea.V.Title,{as:"h3",className:"text-lg leading-5 font-medium !mb-[6px]",style:{color:j.questionsColorOnNoOpacity},children:x(O||0!==_.length?"Past submissions":"No submissions yet")}),(0,r.jsxs)("div",{style:{color:j.slightlyFadedQuestionsColor},className:"flex items-center justify-center ",children:[null==g?void 0:g.email,h?(0,r.jsx)("div",{style:{color:j.answersColor},children:(0,r.jsx)(ex.Z,{className:"ml-3",size:"small"})}):(0,r.jsx)("div",{className:"underline cursor-pointer ml-2",onClick:(0,N._)(function(){return(0,b.Jh)(this,function(e){switch(e.label){case 0:return y((0,o.B6)({showing:!1})),[4,f({removeCurrentSession:!0})];case 1:return e.sent(),[2]}})}),children:x("Sign out")})]})]})]}),O?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex justify-center my-10",children:(0,r.jsx)(ex.Z,{})})}):0===_.length?(0,r.jsx)("div",{className:"flex w-full justify-center items-center mt-3",children:(0,r.jsx)("div",{className:"flex justify-center items-center flex-col ",children:(0,r.jsx)("p",{className:"mt-1 text-sm  max-w-lg text-center font-normal",style:{color:j.slightlyFadedQuestionsColor},children:"Submit this form and return here to edit your submission."})})}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:(0,d.AK)("mt-5  overflow-hidden overflow-y-auto ",_.length>4&&"min-h-[200px] max-h-[calc(80vh-300px)]"),style:{color:j.questionsColor},children:(0,r.jsx)(ev,{settings:q,activeTheme:j,value:I,setValue:function(e){return A(e)}})}),(0,r.jsx)("div",{className:"mt-5 sm:mt-6 flex justify-center",children:(0,r.jsx)("div",{className:"mt-4 sm:mt-0","data-cy":"continue-form-button",children:(0,r.jsx)(ed.g8,{alignment:"full",className:(0,d.AK)("min-w-[240px]",U&&"opacity-50 cursor-not-allowed"),text:x("Edit submission"),isLoading:l,disabled:U,sizingOverride:"small",onClick:(0,N._)(function(){return(0,b.Jh)(this,function(e){return B&&(u(!0),(0,eu.H_)(B.sessionToken)),[2]})})})})})]})]})},ew=function(){var e=(0,c.C)(a.dBz),n=(0,c.T)(),t=(0,c.C)(o.um),s=(0,c.C)(P.VU),i=(0,ec.G)(),u=(0,c.C)(a.urh),d=(0,c.C)(l.Fd);return u||i||!d||(null==e?void 0:e.disableResumingSubmissions)?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(eg.Z,{style:{background:s.questionsBackgroundColor},isOpen:t,onClose:function(){n((0,o.B6)({showing:!1}))},children:(0,r.jsx)("div",{className:"p-4 py-5 sm:p-6 sm:py-7 sm:min-w-[600px]",children:(0,r.jsx)(ey,{isOpen:t})})})})},eN=t(4772),eb=t(93052),e_=t(82879),ek=function(e){e.loginPageTemplate;var n,t=(0,c.C)(o.q8),u=(0,s._)((0,p.useState)(!1),2),m=u[0],f=u[1],h=(0,es.hU)(),x=h.doLogout,g=(h.error,h.loading),j=(0,c.C)(o.L2),v=(0,en.T)().t,C=(0,c.C)(P.VU),y=(0,c.C)(l.Fd),w=(0,c.T)(),_=(0,eb.S8)(),k=(0,s._)((0,p.useState)(!1),2),F=k[0],S=k[1],O=(0,c.C)(a.dBz),Z=(0,p.useCallback)((0,N._)(function(){return(0,b.Jh)(this,function(e){switch(e.label){case 0:if(F)return[3,2];return S(!0),[4,_({})];case 1:e.sent(),e.label=2;case 2:return[2]}})}),[_,F]),I=(n=(0,N._)(function(e){return(0,b.Jh)(this,function(e){return[2]})}),function(e){return n.apply(this,arguments)}),A=!!j;if((0,p.useEffect)(function(){(0,N._)(function(){return(0,b.Jh)(this,function(e){return(!A||(0,eu._N)())&&Z(),[2]})})()},[A,Z]),!j)return(0,r.jsx)(i.Z,{activeTheme:C});var B=(0,eC.dP)(j.stepUpdatedAt),L=null==O?void 0:O.disableResumingSubmissions;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(T._0,{children:(0,r.jsx)("div",{className:"mt-4 mb-6 ",children:(0,r.jsx)("div",{className:"mt-4 sm:mx-auto sm:w-full sm:max-w-sm",children:(0,r.jsx)("form",{onSubmit:I,className:"space-y-6",children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mx-auto flex items-center justify-center  ",children:(0,r.jsx)(es.kx,{showLogo:!1,className:"",size:"large"})}),(0,r.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[(0,r.jsx)("h3",{className:"text-lg leading-5 font-medium !mb-[6px]",style:{color:C.questionsColorOnNoOpacity},children:(0,r.jsx)(r.Fragment,{children:L?"Welcome back":v("You have a submission in progress")})}),(0,r.jsx)("div",{style:{color:C.slightlyFadedQuestionsColor},className:"flex items-center justify-center ",children:y?(0,r.jsx)("div",{className:"underline cursor-pointer ml-2",onClick:(0,N._)(function(){return(0,b.Jh)(this,function(e){return w((0,o.B6)({showing:!0})),[2]})}),children:v("View past submissions")}):(0,r.jsxs)(r.Fragment,{children:[null==t?void 0:t.email,g?(0,r.jsx)("div",{style:{color:C.answersColor},children:(0,r.jsx)(ex.Z,{className:"ml-3",size:"small"})}):(0,r.jsx)("div",{className:"underline cursor-pointer ml-2",onClick:(0,N._)(function(){return(0,b.Jh)(this,function(e){switch(e.label){case 0:return[4,x({removeCurrentSession:!1})];case 1:return e.sent(),[2]}})}),children:v("Sign out")})]})})]})]}),!L&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:(0,d.AK)("mt-7  overflow-hidden overflow-y-auto "),style:{color:C.questionsColor},children:(0,r.jsx)(ev,{className:"!cursor-default",settings:[{title:"".concat(v("Last updated")," ").concat(B),value:j.uuid,ending:(0,r.jsx)(eh.Z,{theme:C.isDark?"transparent":"amber",text:v("In progress"),className:"shrink-0  "})}],activeTheme:C,value:j.uuid,setValue:function(e){}})}),(0,r.jsx)(ed.g8,{className:"pt-6",alignment:"full",text:v("Resume submission"),isLoading:m,onClick:(0,N._)(function(){return(0,b.Jh)(this,function(e){return f(!0),(0,eu.H_)(j.sessionToken),[2]})})})]}),(0,r.jsx)(ed.g8,{className:(0,d.AK)("pt-3 flex",L&&"!pt-5"),alignment:"center",customHoverColor:L?"":"transparent",text:v("New submission"),sizingOverride:"small",hideShadow:!0,isLoading:F,style:L?{}:{background:C.questionsBackgroundColor,borderColor:"transparent",color:(0,e_.$)(C.slightlyFadedAnswersColor,C.questionsBackgroundColor)},onClick:(0,N._)(function(){return(0,b.Jh)(this,function(e){return Z(),[2]})})})]})})})})})})},eF=function(e){var n=e.children,t=ee(),s=(0,c.C)(l.Wt),i=(0,c.C)(o.Jg),a="login"===s,u=(0,c.C)(l.b1),d=(0,c.C)(l.jn),m=(0,c.C)(o.Bp),f=(0,c.C)(o.gh),h=(0,c.C)(l.dX),x=h.loginTemplate,g=h.stepId,j=(0,c.C)(l.lr),C=(0,c.C)(l.bC),y=j&&!a,w=(0,H.vl)()[v.MAGIC_LINK_LOGIN_TOKEN_PARAMETER];return((0,p.useEffect)(function(){j&&w&&t(v.MAGIC_LINK_LOGIN_TOKEN_PARAMETER)},[t,j,w]),y&&i)?(0,r.jsxs)(r.Fragment,{children:[C&&(0,r.jsx)(ew,{}),(0,r.jsx)(ei,{}),";"]}):y?(0,r.jsxs)(r.Fragment,{children:[C&&(0,r.jsx)(ew,{}),n]}):"edit"===f?(0,r.jsx)(r.Fragment,{children:n}):x&&g?u?(0,r.jsx)(S.p,{mode:f,children:(0,r.jsx)(el.Z,{loginPageTemplate:x,loginStepId:g})}):m?j&&a?(0,r.jsxs)(S.p,{mode:f,children:[(0,r.jsx)(ek,{loginPageTemplate:x}),(0,r.jsx)(ew,{})]}):d?(0,r.jsx)(eN.Z,{loginPageTemplate:x}):(0,r.jsx)(Y.Z,{loginPageTemplate:x}):(0,r.jsx)("div",{children:(0,r.jsx)(L.Z,{title:"Unexpected - no submissionId",type:"warning"})}):(0,r.jsx)("div",{children:(0,r.jsx)(L.Z,{title:"Form is misconfigured",type:"warning",children:"Make sure your login page is the first page in your form."})})},eT=function(e){var n=e.children,t=(0,c.C)(l.bC),s=(0,c.C)(l.b1);return t||s?(0,r.jsx)(eF,{children:n}):(0,r.jsx)(r.Fragment,{children:n})},eS=function(){var e=(0,c.C)(o.gh);F(e);var n=(0,c.C)(a.Wt5),t=(0,c.C)(o.kf),h=(0,c.C)(l.AT),x=$[n],g=(0,s._)((0,u.useQueryParam)(m.zA,u.StringParam),1)[0];return t&&t in h.steps?(0,r.jsxs)("div",{id:"flow-view",className:(0,d.AK)("flex justify-center w-full h-full flex-col items-center"),style:"preview"===e&&"yes"!==g?{height:"calc(100vh - 58px)"}:{},children:[(0,r.jsx)(eT,{children:x&&(0,r.jsx)(x,{})}),(0,r.jsx)(f.Z,{}),(0,r.jsx)(j,{}),(0,r.jsx)(w,{})]}):(0,r.jsx)(i.Z,{})}},96415:function(e,n,t){t.d(n,{Z:function(){return h}});var s=t(60053),r=t(24246),i=t(48897),l=t(61429),a=t(39654),o=function(e){var n=e.text,t=e.buttonText,s=e.onClick;return(0,r.jsx)("div",{className:"fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-20",children:(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:(0,r.jsx)("div",{className:"p-2 rounded-lg bg-gray-600 shadow-lg sm:p-3",children:(0,r.jsxs)("div",{className:"flex items-center justify-between flex-wrap",children:[(0,r.jsxs)("div",{className:"w-0 flex-1 flex items-center",children:[(0,r.jsx)("span",{className:"flex p-2 rounded-lg bg-gray-800",children:(0,r.jsx)(l.XgF,{className:"h-6 w-6 text-gray-200","aria-hidden":"true"})}),(0,r.jsxs)("p",{className:"ml-3 font-medium text-white mb-0",children:[(0,r.jsx)("span",{className:"md:hidden",children:n}),(0,r.jsx)("span",{className:"hidden md:inline",children:n})]})]}),(0,r.jsx)(a.Z,{className:"order-3 mt-4 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto",onClick:function(){return s()},theme:"secondary-light",removeRingOffset:!0,children:t}),(0,r.jsx)("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-3",children:"\xa0"})]})})})})},c=t(5592),u=t(39142),d=t(58971),m=t(10680),f=function(){var e=(0,d.C)(c.Bnf),n=(0,i.T)().t,t=(0,s._)((0,m._)("explicitCookieAccept-".concat(null==e?void 0:e.organizationId),null),2),l=t[0],a=t[1];return l?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(o,{onClick:function(){a(!0)},buttonText:n("I accept"),text:(0,r.jsxs)("div",{className:"text-gray-200",children:[n("cookie-message")," ",(0,r.jsxs)("a",{className:"text-gray-200 underline",href:"https://fillout.com/privacy/",target:"_blank",rel:"noreferrer",children:[n("cookie policy"),"."]})]})})},h=function(){var e=(0,d.C)(u.gh),n=(0,d.C)(c.O7m);return(0,r.jsx)(r.Fragment,{children:"live"===e&&n?(0,r.jsx)(f,{}):(0,r.jsx)(r.Fragment,{children:" "})})}},91413:function(e,n,t){t.d(n,{G:function(){return S}});var s=t(51037),r=t(60053),i=t(85556),l=t(24246),a=t(51743),o=t(54687),c=t(79132),u=t(27124),d=t.n(u),m=t(68349),f=t(48897),h=t(72279),x=t(82879),g=t(73022),j=t(79165),v=t(5592),p=t(39142),C=t(99511),y=t(58971),w=t(86677),N=t(27378),b=t(74315),_=t(3320),k=t(98707),F=t(28417),T=t(89426),S=function(){var e=(0,_.fw)().isPreviewingTemplate,n=(0,y.C)(p.gh),t=(0,w.useRouter)().query.flowPublicIdentifier,s=(0,N.useMemo)(function(){if("edit"===n)return!1;var e=(0,h.Gg)(n,t);return!!(null==e?void 0:e.startAgainStep)&&!!e.currentStepId&&e.startAgainStep===e.currentStepId},[n,t]),i=(0,r._)((0,b.useQueryParam)(k.WW,b.StringParam),1)[0],l=(0,r._)((0,b.useQueryParam)(k.NO,b.StringParam),1)[0];return"true"===i||"true"===l||s||e};n.Z=function(){var e=(0,w.useRouter)().query.flowPublicIdentifier,n=(0,y.C)(C.VU),t=(0,y.C)(p.gh),u=(0,f.T)().t,h=S(),b=(0,y.C)(j.bC),_=(0,y.T)(),k=(0,y.C)(v.B5u),O=(0,y.C)(v.urh),Z=(0,y.C)(p.Jg),P=(0,y.C)(p.q8),I=(0,y.C)(T.te),A=(0,r._)((0,N.useState)(!1),2),B=A[0],L=A[1];if(!e||!k||"edit"===t||h||b&&(!P||Z)||O)return(0,l.jsx)(l.Fragment,{});var E=function(){_((0,v.sWD)({open:!1}))},R=d()(n.primaryColor).fade(.85).hsl().string();return(0,l.jsx)(a.u.Root,{show:k,as:N.Fragment,children:(0,l.jsxs)(o.V,{as:"div",className:"relative z-[12]",onClose:E,children:[(0,l.jsx)(a.u.Child,{as:N.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,l.jsx)("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),(0,l.jsx)("div",{className:"fixed z-[12] inset-0 overflow-y-auto",children:(0,l.jsx)("div",{className:"flex items-end sm:items-start justify-center min-h-full p-4 text-center sm:p-0",children:(0,l.jsx)(a.u.Child,{as:N.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,l.jsx)("div",{children:(0,l.jsx)(m.NB,{children:(0,l.jsxs)(o.V.Panel,{className:"relative  rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6 !mt-28 fillout-in-progress-modal",style:{background:n.questionsBackgroundColorNoOpacity},children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full ",style:{backgroundColor:R},children:(0,l.jsx)(c.KNL,{className:"h-6 w-6 ","aria-hidden":"true",style:{color:n.primaryColor}})}),(0,l.jsx)("div",{className:"mt-3 text-center sm:mt-5",children:(0,l.jsx)(o.V.Title,{as:"h3",className:"text-lg leading-5 font-medium ",style:{color:n.questionsColorOnNoOpacity},children:u("You have a submission in progress. Would you like to continue?")})})]}),(0,l.jsxs)("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense ",children:[(0,l.jsx)("div",{"data-cy":"start-again-form-button",children:(0,l.jsx)(g.g8,{removeRingOffset:!0,customHoverColor:n.inputBackgroundColor,isLoading:B,alignment:"full",text:u("Start again"),sizingOverride:"small",style:{background:n.questionsBackgroundColor,borderColor:n.borderColor,color:(0,x.$)(n.slightlyFadedAnswersColor,n.questionsBackgroundColor)},onClick:(0,s._)(function(){return(0,i.Jh)(this,function(n){switch(n.label){case 0:return L(!0),[4,(0,F.HN)(e,t,I)];case 1:return n.sent(),window.location.reload(),[2]}})})})}),(0,l.jsx)("div",{className:"mt-4 sm:mt-0","data-cy":"continue-form-button",children:(0,l.jsx)(g.g8,{alignment:"full",text:u("Continue"),sizingOverride:"small",onClick:(0,s._)(function(){return(0,i.Jh)(this,function(e){return[2,E()]})})})})]})]})})})})})})]})})}},98707:function(e,n,t){t.d(n,{$B:function(){return i},NO:function(){return r},WW:function(){return s}});var s="__internal__dontAllowStartingOver",r="dont-start-over",i="__internal_jump_to_step"}}]);