"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[8673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:8,description:"A service that can be used to wire up Authentication and Authorization in a common well understood manner."},o="Identity and Access",s={unversionedId:"intro/capabilities/identity-and-access",id:"intro/capabilities/identity-and-access",title:"Identity and Access",description:"A service that can be used to wire up Authentication and Authorization in a common well understood manner.",source:"@site/docs/intro/capabilities/identity-and-access.mdx",sourceDirName:"intro/capabilities",slug:"/intro/capabilities/identity-and-access",permalink:"/docs/intro/capabilities/identity-and-access",draft:!1,editUrl:"https://github.com/cnoe-io/website/tree/main/docs/intro/capabilities/identity-and-access.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"A service that can be used to wire up Authentication and Authorization in a common well understood manner."},sidebar:"tutorialSidebar",previous:{title:"Developer Portal",permalink:"/docs/intro/capabilities/developer-portal"},next:{title:"Infrastructure as Code (IaC)",permalink:"/docs/intro/capabilities/infra-as-code"}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"identity-and-access"},"Identity and Access"),(0,r.kt)("p",null,"In the context of a platform, identity and access is most frequently a service that can be used to wire up Authentication and Authorization in a common well understood manner. By offering Identity and Access management as a capability of the platform, we can avoid product applications from having to reinvent the wheel for such critical functionality."),(0,r.kt)("p",null,"This capability can differ greatly depending on the needs of applications and services that consume it, but generally it will allow for an application to delegate the login, or challenge for proof of identity to the platform. Then the application can utilize the results of that challenge process to use credentials presented to the user by the identity access process to access sensitive information or processes."),(0,r.kt)("p",null,"The technical aspects of how the Identity and Access service can be consumed by client apps should use rigourously tested standards. Often the Identity and Access service will allow for client apps to bring their own sources of identity through a process of federation. This allows for client apps to root their identity in their existing systems but still make use of the common Auth service offered by the platform."),(0,r.kt)("p",null,"Machine identity and in particular the SPIFFE Protocol is a relatively new method to make use of trust built into workloads running in known good environments as an authentication mechanism. This is considered more secure than the use of long lived pre-shared secrets like those used by services users or API tokens."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Must provide authentication"),(0,r.kt)("li",{parentName:"ul"},"May provide primitives or framework for authorization"),(0,r.kt)("li",{parentName:"ul"},"Must be well understood and easy to reason about "),(0,r.kt)("li",{parentName:"ul"},"Reduces duplication of effort through delegation"),(0,r.kt)("li",{parentName:"ul"},"Can be tested independently and in conjunction with consumer applications"),(0,r.kt)("li",{parentName:"ul"},"Identity can be federated"),(0,r.kt)("li",{parentName:"ul"},"Machine Identity can use modern protocols like SPIFFE"),(0,r.kt)("li",{parentName:"ul"},"Examples of Standard Protocols:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OAuth and OpenID Connect"),(0,r.kt)("li",{parentName:"ul"},"SAML"),(0,r.kt)("li",{parentName:"ul"},"Mutual TLS and pre-shared certificates"),(0,r.kt)("li",{parentName:"ul"},"API tokens or Bearer Authentication")))))}d.isMDXComponent=!0}}]);