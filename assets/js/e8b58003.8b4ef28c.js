"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[2553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:0,description:"integrate with localstack for building locally against AWS",title:"Local Stack",index:1},o=void 0,l={unversionedId:"reference-implementation/integrations/localstack",id:"reference-implementation/integrations/localstack",title:"Local Stack",description:"integrate with localstack for building locally against AWS",source:"@site/docs/reference-implementation/integrations/localstack.md",sourceDirName:"reference-implementation/integrations",slug:"/reference-implementation/integrations/localstack",permalink:"/docs/reference-implementation/integrations/localstack",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/integrations/localstack.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"integrate with localstack for building locally against AWS",title:"Local Stack",index:1},sidebar:"tutorialSidebar",previous:{title:"Reference Implementation",permalink:"/docs/reference-implementation/integrations/reference-impl"},next:{title:"Terraform Modules",permalink:"/docs/reference-implementation/integrations/terraform/"}},c={},s=[{value:"Enable the Integration",id:"enable-the-integration",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enable-the-integration"},"Enable the Integration"),(0,r.kt)("p",null,"Please use the below command to deploy an IDP reference implementation with an Argo application that adds Localstack, as well as integrating with Crossplane."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"idpbuilder create \\\n  --use-path-routing \\\n  --package-dir https://github.com/cnoe-io/stacks//ref-implementation \\\n  --package-dir https://github.com/cnoe-io/stacks//localstack-integration\n")),(0,r.kt)("p",null,"As you see above, this add-on to ",(0,r.kt)("inlineCode",{parentName:"p"},"idpbuilder")," has a dependency on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/ref-implementation"},"reference implementation"),". This command primarily does the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installs ",(0,r.kt)("inlineCode",{parentName:"li"},"localstack")," helmchart as an ",(0,r.kt)("inlineCode",{parentName:"li"},"argo")," application."),(0,r.kt)("li",{parentName:"ol"},"Adds localstack crossplane ProviderConfig, targeting localstack")),(0,r.kt)("p",null,"Once the custom package is installed, localstack can be used from the backstage template ",(0,r.kt)("inlineCode",{parentName:"p"},"app-with-aws-resources"),", by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"providerConfigName")," during the bucket configuration page from ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"localstack"),"."))}m.isMDXComponent=!0}}]);