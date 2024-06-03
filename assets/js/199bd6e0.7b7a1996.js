"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[3293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,description:"utilizing CNOE for Access Management",title:"Access Management"},i=void 0,s={unversionedId:"reference-implementation/configs/access-management",id:"reference-implementation/configs/access-management",title:"Access Management",description:"utilizing CNOE for Access Management",source:"@site/docs/reference-implementation/configs/access-management.md",sourceDirName:"reference-implementation/configs",slug:"/reference-implementation/configs/access-management",permalink:"/docs/reference-implementation/configs/access-management",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/configs/access-management.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"utilizing CNOE for Access Management",title:"Access Management"},sidebar:"tutorialSidebar",previous:{title:"Configurations",permalink:"/docs/category/configurations"},next:{title:"Infrastructure Control Plane",permalink:"/docs/reference-implementation/configs/control-plane"}},c={},l=[{value:"Keycloak",id:"keycloak",level:2},{value:"Backstage and Kubernetes Authentication",id:"backstage-and-kubernetes-authentication",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"keycloak"},"Keycloak"),(0,a.kt)("p",null,"In the implementation, ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak")," is used as the identity provider. This instance is used to login into UIs such as Backstage and Argo."),(0,a.kt)("p",null,"Although it is not configured to be a identity broker or a user federation provider, you can configured it to be one. For example, you can configure it to federate users from Active Directory.\nKeycloak supports a large number of identity providers to integrate with. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/"},"the documentation")," for more information. "),(0,a.kt)("h2",{id:"backstage-and-kubernetes-authentication"},"Backstage and Kubernetes Authentication"),(0,a.kt)("p",null,"In the reference implementation, it uses the server side authentication pattern. ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/kubernetes/authentication"},"Server side authentication")," is the pattern that all users on Backstage share the same credential and access level when accessing resources in the cluster. For example, for accessing secret resources, the same service account token is used for a configured Kubernetes cluster regardless of the user requesting resources. This is not ideal for use cases where a Backstage instance is shared by multiple teams. For example, when tying infrastructure and application provisioning to Backstage, it is important to ensure only authorized persons can access certain actions. For example, only admins should be able to delete a Kubernetes cluster in AWS."),(0,a.kt)("p",null,"Backstage has the ability to enforce policies through the ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.io/docs/permissions/overview"},"Permission Framework ")," about who can invoke what API actions. Although it is not enabled for the implementation currently, we would like to enable this in the future.\nExpanding on Backstage's permissions framework, examples provided in the documentation requires writing policies in TypeScript, and they need to be pulled into the Backstage application code. From the Kubernetes centric platform perspective, it makes a lof of sense to leverage policy engines like Kyverno or OPA Gatekeeper if possible."),(0,a.kt)("p",null,"Client side authentication can be more fine tuned. ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/kubernetes/authentication#client-side-providers"},"Client side authentication")," means actions are performed using the user's credentials. This means even if a cluster is listed and configured for use in Backstage, as long as the logged in user does not have permissions for the cluster, performing actions on the cluster is denied. Currently this is not natively supported by Backstage for EKS clusters. This requires more complex configuration and support from Backstage frontend plugin to properly pass user credentials to the cluster through the Kubernetes proxy in Backstage backend."))}p.isMDXComponent=!0}}]);