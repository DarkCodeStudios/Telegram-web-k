import{a as o,A as s,_ as r,S as m}from"./index-419788d0.js";import{p as h}from"./putPreloader-fd97cb8b.js";import{P as d}from"./page-8e8bb204.js";let i;const g=async()=>{const{dcId:e,token:u,tgAddr:n}=i;let a;try{o.managers.apiManager.setBaseDcId(e);const t=await o.managers.apiManager.invokeApi("auth.importWebTokenAuthorization",{api_id:s.id,api_hash:s.hash,web_auth_token:u},{dcId:e,ignoreErrors:!0});t._==="auth.authorization"&&(o.managers.apiManager.setUser(t.user),a=r(()=>import("./pageIm-d98f0113.js"),["./pageIm-d98f0113.js","./index-419788d0.js","./index-5617ffe3.css","./page-8e8bb204.js"],import.meta.url))}catch(t){switch(t.type){case"SESSION_PASSWORD_NEEDED":{t.handled=!0,a=r(()=>import("./pagePassword-e32735ef.js"),["./pagePassword-e32735ef.js","./index-419788d0.js","./index-5617ffe3.css","./putPreloader-fd97cb8b.js","./page-8e8bb204.js","./button-71043fae.js","./htmlToSpan-637531f2.js","./wrapEmojiText-aa1938b6.js","./loginPage-6a85089a.js","./toggleDisability-6f5940d7.js"],import.meta.url);break}default:{console.error("authorization import error:",t);const p=m.authState._;p==="authStateSignIn"?a=r(()=>import("./pageSignIn-df90dd77.js"),["./pageSignIn-df90dd77.js","./index-419788d0.js","./index-5617ffe3.css","./putPreloader-fd97cb8b.js","./page-8e8bb204.js","./countryInputField-66faacc8.js","./button-71043fae.js","./wrapEmojiText-aa1938b6.js","./scrollable-f5b7c8ae.js","./pageSignQR-9d4bd6ee.js","./textToSvgURL-c6ebb454.js","./toggleDisability-6f5940d7.js"],import.meta.url):p==="authStateSignQr"&&(a=r(()=>import("./pageSignQR-9d4bd6ee.js").then(_=>_.a),["./pageSignQR-9d4bd6ee.js","./index-419788d0.js","./index-5617ffe3.css","./page-8e8bb204.js","./button-71043fae.js","./putPreloader-fd97cb8b.js","./textToSvgURL-c6ebb454.js"],import.meta.url));break}}}location.hash=n?.trim()?"#?tgaddr="+encodeURIComponent(n):"",a&&a.then(t=>t.default.mount())},l=new d("page-signImport",!0,()=>{h(l.pageEl.firstElementChild,!0),g()},e=>{i=e,o.managers.appStateManager.pushToState("authState",{_:"authStateSignImport",data:i})});export{l as default};
//# sourceMappingURL=pageSignImport-b03fbe9f.js.map