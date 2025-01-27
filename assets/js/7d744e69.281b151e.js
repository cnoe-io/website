"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[1466],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5663:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={},i="Cloud Native Operational Excellence (CNOE)",l={unversionedId:"intro/intro",id:"intro/intro",title:"Cloud Native Operational Excellence (CNOE)",description:"( pronounced Kuh.noo )",source:"@site/docs/intro/intro.md",sourceDirName:"intro",slug:"/intro/",permalink:"/docs/intro/",draft:!1,editUrl:"https://github.com/cnoe-io/website/tree/main/docs/intro/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/docs/contribute"},next:{title:"Approach",permalink:"/docs/intro/approach/"}},s={},c=[{value:"What is CNOE?",id:"what-is-cnoe",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Tenets",id:"tenets",level:2},{value:"What CNOE is not",id:"what-cnoe-is-not",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cloud-native-operational-excellence-cnoe"},"Cloud Native Operational Excellence (CNOE)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"( pronounced Kuh.noo )")),(0,r.kt)("h2",{id:"what-is-cnoe"},"What is CNOE?"),(0,r.kt)("p",null,"Enterprises that adopt OSS as the foundation of their cloud platforms face the challenge of choosing technologies that will support their business outcomes for 3-5 years. The cost of retooling and re-platforming for large organizations is high, which makes bets on specific technologies fundamental to their technology strategies. In order to de-risk these bets, enterprises take into consideration the investments of their peer organizations. The goal for the CNOE framework is to bring together a cohort of enterprises operating at the same scale so that they can navigate their operational technology decisions together, de-risk their tooling bets, coordinate contribution, and offer guidance to large enterprises on which CNCF technologies to use together to achieve the best cloud efficiencies."),(0,r.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,r.kt)("p",null,"As software development processes have evolved, infrastructure and related tooling have become more and more fragmented and complex. Standalone tools (i.e., Spinnaker, Jenkins, CloudFormation) for operating in cloud-native environments are no longer effective for most customers on their own. While some of this is the nature of technology evolution and growth, a number of root causes are contributing to customers augmenting or replacing their existing tooling to address their larger-scale challenges."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The current tooling \u201cstandard\u201d is a moving target. The size and scope of the CNCF landscape alongside the ever-increasing breadth of tools creates a paralyzation of choice. Customers are forced to adopt a wide-ranging array of tools with minimal direction and implement them in environment-specific ways, leading to a lack of consensus between customers. This also contributes to significant supportability and maintainability problems within the communities that govern those tools.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The definitions of traditional continuous integration and continuous delivery/deployment (CI/CD) have become blurry. Legacy systems have grown to be bloated and contributions have fallen behind in lieu of lighter more modern tools (i.e., ArgoCD, Flux, Tekton) that focus on newer paradigms like GitOps.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The advent and growth of declarative, centralized control planes for infrastructure (e.g. Kubernetes) creates an ecosystem that is fundamentally different and arguably inoperable with previous generation tooling. However, many application environments still expect (and will continue to expect) to interface with \u201ctraditional\u201d virtual machine or bare metal based infrastructure points.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Developers\u2019 core workflows have remained more-or-less the same over the past years, focused more on understanding the intricacies of a language or framework and implementing them using appropriate versioning and collaborative tooling. Many of the abstractions in ",(0,r.kt)("inlineCode",{parentName:"p"},"*-Ops")," today were designed to accommodate differences in infrastructure, leading to a discontinuity between developers and delivery.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fragmentation between software delivery and deployment methods have led to a multitude of languages, infrastructure as code platforms, templating engines, specs, and packaging systems. This creates an endless combination of non-portable software components that are difficult to reconcile into a singular application."))),(0,r.kt)("h2",{id:"tenets"},"Tenets"),(0,r.kt)("p",null,"The CNOE working group will operate based on the following tenets."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open source first"),": use of open source technology is prioritized over proprietary technology for each of the technology verticals discussed later in the doc. This helps ensure alignment across all the participating members by allowing them to coordinate on collaborations while having the freedom to update and modify a given technology to their needs")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Community driven"),": Decisions on the direction of the working group is driven by the community and its governing body. This involves the selection of technologies, level of commitment, and level of contribution.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tools and not Practices"),": CNOE offers suggestions on which tools to use and with what configurations. What practices a given company builds around and above those tools is out of scope for CNOE.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Powered by Kubernetes, but not limited to orchestrate to Kubernetes"),": The CNOE working group relies heavily on the success of the CNCF community to choose technologies that are deemed useful to the type of operations required by the community. As such, Kubernetes is considered the de-facto environment to operate CNOE tooling. However, choosing of Kubernetes as the operating environment, does not require for it to be the environment to orchestrate against. Using the right infrastructure as code tooling, the CNOE community can choose to orchestrate against any compute platform of their choice. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Standardized to the infrastructure, customizable by the developers"),": CNOE aims at addressing the usability requirements of its stakeholders. While the requirements of the platform could be enforced by the security engineers and infrastructure operators, the usability of it needs to be guaranteed by platform operators and application developers.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Built to be shared"),": All CNOE deliverables including the reference architecture and the deployment packages will be developed out in the open and by collaboration of all its participating members and with the goal of making it sharable and usable by the larger open source community of interest."))),(0,r.kt)("h2",{id:"what-cnoe-is-not"},"What CNOE is not"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"not only a unified control plane but building blocks for them to expand and extend the unified control plane")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"not only a CI/CD tool but other components and capabilities that extend and enhance the integration and delivery of applications")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"not new technologies or set of managed services, but a way to interact and integrate. There is still an expectation that companies will need to fund and operate the various open source tools used within the IDP")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"not installers or proprietary packaging mechanisms. it will be fully open source and customizable and available to use by any one")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"not responsible for operationalizing of the toolchain. There is still an expectation that companies will need to fund and operate the various open source tools used within the IDP"))))}d.isMDXComponent=!0}}]);