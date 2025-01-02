"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[4208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const a={slug:"intro-to-idpbuilder",title:"Simplifying IDP Deployment and Local Development",authors:["bromano","csantanapr","ghaynes","nabuskey"],tags:["workflows","benchmarking","scalability","argo"],image:"https://cnoe.io/assets/images/ci-as-sot-aab3827d5d0bf81df84c59e6f703b5c1.png",hide_table_of_contents:!1},r=void 0,l={permalink:"/blog/intro-to-idpbuilder",editUrl:"https://github.com/cnoe-io/website/tree/main/blog/2024-11-11-intro-to-idpbuilder/index.md",source:"@site/blog/2024-11-11-intro-to-idpbuilder/index.md",title:"Simplifying IDP Deployment and Local Development",description:"Creating and managing an internal developer platform (IDP) is a complex and time-consuming challenge. As outlined on our website and in the CNCF Platforms white paper, IDPs consist of capabilities. This centralized system facilitates developers in designing, building, deploying, and managing applications and services within an organization. It offers a suite of tools, APIs, and services that streamline the development process by providing essential capabilities.",date:"2024-11-11T00:00:00.000Z",formattedDate:"November 11, 2024",tags:[{label:"workflows",permalink:"/blog/tags/workflows"},{label:"benchmarking",permalink:"/blog/tags/benchmarking"},{label:"scalability",permalink:"/blog/tags/scalability"},{label:"argo",permalink:"/blog/tags/argo"}],readingTime:4.49,hasTruncateMarker:!1,authors:[{name:"Blake Romano",title:"Software Engineer, Imagine Learning",url:"https://github.com/blakeromano",imageURL:"https://ca.slack-edge.com/T08PSQ7BQ-U03M80Q624F-f11d0924baa7-512",key:"bromano"},{name:"Carlos Santana",title:"Architect, AWS",url:"https://github.com/csantanapr",imageURL:"https://avatars.githubusercontent.com/u/1094878",key:"csantanapr"},{name:"Greg Haynes",title:"Architect, Autodesk",url:"https://github.com/greghaynes",imageURL:"https://ca.slack-edge.com/T08PSQ7BQ-UCG7862LR-ga2857bd677e-512",key:"ghaynes"},{name:"Manabu McCloskey",title:"Architect, AWS",url:"https://github.com/nabuskey",imageURL:"https://ca.slack-edge.com/T08PSQ7BQ-U02TMF8N4DS-95b679f8ca22-512",key:"nabuskey"}],frontMatter:{slug:"intro-to-idpbuilder",title:"Simplifying IDP Deployment and Local Development",authors:["bromano","csantanapr","ghaynes","nabuskey"],tags:["workflows","benchmarking","scalability","argo"],image:"https://cnoe.io/assets/images/ci-as-sot-aab3827d5d0bf81df84c59e6f703b5c1.png",hide_table_of_contents:!1},nextItem:{title:"Argo Workflows Controller Scalability Testing on Amazon EKS",permalink:"/blog/argo-workflow-scalability"}},s={authorsImageUrls:[void 0,void 0,void 0,void 0]},p=[{value:"Demo your own IDP implementation",id:"demo-your-own-idp-implementation",level:2},{value:"Local Development and CI integrations",id:"local-development-and-ci-integrations",level:2},{value:"Crossplane Testing",id:"crossplane-testing",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Take the Next Step:",id:"take-the-next-step",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Creating and managing an internal developer platform (IDP) is a complex and time-consuming challenge. As outlined on our website and in the ",(0,o.kt)("a",{parentName:"p",href:"https://tag-app-delivery.cncf.io/whitepapers/platforms/"},"CNCF Platforms white paper"),", IDPs consist of ",(0,o.kt)("a",{parentName:"p",href:"https://cnoe.io/docs/category/technology-capabilities"},"capabilities"),". This centralized system facilitates developers in designing, building, deploying, and managing applications and services within an organization. It offers a suite of tools, APIs, and services that streamline the development process by providing essential capabilities."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cnoe.io/docs/reference-implementation/installations/idpbuilder"},"idpBuilder")," is meant for application developers and platform engineers looking to quickly spin up a repeatable IDP environment. With just a single binary and Docker as the only dependency, idpBuilder allows you to create a fully functional IDP leveraging popular open source projects such as Kubernetes, ArgoCD, and Backstage."),(0,o.kt)("p",null,"For most use cases, you need to run one command to get started. For example, to get started with the CNOE reference implementation all you have to run is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"idpbuilder create --use-path-routing \\\n  --package https://github.com/cnoe-io/stacks//ref-implementation\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(4600).Z,width:"649",height:"352"})),(0,o.kt)("p",null,"In addition to its simplicity, idpBuilder offers the following key benefits:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rapid Deployment: Create a reference implementation of an IDP with minimal setup time."),(0,o.kt)("li",{parentName:"ol"},"CI Integration: Easily incorporate idpBuilder into your continuous integration workflows for comprehensive testing."),(0,o.kt)("li",{parentName:"ol"},"Local Development: Provide IDP engineers with a consistent and easily reproducible local development environment.")),(0,o.kt)("p",null,"Let's explore how you can use idpBuilder in your development workflow. Whether you're looking to demonstrate an IDP reference implementation, enhance your CI pipeline, or improve your local development setup, idpBuilder offers a solution that's both powerful and easy to use."),(0,o.kt)("h2",{id:"demo-your-own-idp-implementation"},"Demo your own IDP implementation"),(0,o.kt)("p",null,"idpBuilder comes with a set of technologies that enables GitOps workflows all contained within the ephemeral environment. Think of building your IDP solution in a box. It does this by provisioning a kind cluster, Gitea server, ArgoCD, and ingress-nginx. See",(0,o.kt)("a",{parentName:"p",href:"https://cnoe.io/docs/reference-implementation/installations/idpbuilder/usage"}," our documentation")," site for more information."),(0,o.kt)("p",null,"in addition, idpbuilder can copy files and Kubernetes manifests checked into Git repositories to the in-cluster Gitrea repositories. Once copied to the in-cluster repositories, ArgoCD can use them to deploy your solutions in minutes. We have examples of this in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/ref-implementation"},"Stacks repository."),".  You can run them in your browser using Codespaces as well.\nThis approach also allows you to experiment with configuration changes and code changes without changing files checked into the external repositories because everything is contained in the cluster."),(0,o.kt)("p",null,"Carlos Santana does an excellent job of show this in his video. ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=e6Fvivx4Aw8"},"https://www.youtube.com/watch?v=e6Fvivx4Aw8")),(0,o.kt)("h2",{id:"local-development-and-ci-integrations"},"Local Development and CI integrations"),(0,o.kt)("p",null,"Due to the number of technologies involved and the complexity in integrating them, many organizations struggle with fragmented development environments. Different teams often work in silos, using disparate tools and workflows.\nThis fragmentation is a major barrier for organizations hoping to create cohesive internal developer platforms as it is difficult to design and develop features which span multiple capabilities. Furthermore, the lack of a reference development environment leads to significant inefficiencies including slower development cycles, especially for cross-capability functionality.\nidpBuilder can set up identical environments for local development and CI pipelines. With idpBuilder, you get:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},'Reduced "It Works on My Machine" Syndrome'),": With consistent environments, discrepancies between local and CI setups become a thing of the past."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Early Issue Detection"),": Integration problems are caught earlier, saving time and resources in the long run."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Improved Collaboration"),": Developers can confidently work on the same project, knowing they're all using identical environments."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Streamlined Workflow"),": The seamless transition from local development to CI pipelines accelerates the development cycle."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Local GitOps Workflow"),": A zero-configuration approach to GitOps: start immediately with a pre-configured local Git server, no external repositories or credentials required.")),(0,o.kt)("p",null,"During KubeCon 2024, AutoDesk touches on these topics and shares their experience using it for their platform development: ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=x_cTXvRgwdA"},"https://www.youtube.com/watch?v=x_cTXvRgwdA")),(0,o.kt)("h2",{id:"crossplane-testing"},"Crossplane Testing"),(0,o.kt)("p",null,"Another example use of idpBuilder is in development and testing with Crossplane functions. At the All Day DevOps event, Imagine Learning highlighted their use of idpBuilder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local Development"),": idpBuilder deploys Crossplane, a local OCI registry, composite resource definitions, compositions, and composition functions within a single local Kubernetes environment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Enhanced Security"),": This setup avoids publishing images to public registries, improving security and privacy posture."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local AWS Simulation"),": A local stack simulates an AWS environment, enabling thorough testing without external resources.")),(0,o.kt)("p",null,"More details about their implementation can be found in their ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blakeromano/control-plane-xfn"},"repository")," and their presentation at the ",(0,o.kt)("a",{parentName:"p",href:"https://event.alldaydevops.com/hub/events/1a51349d-007d-4e3b-994e-814bc68718e9/sessions/f5df32b1-71a6-496a-9ba8-ee2573a7fae6"},"All Day DevOps event"),"."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"idpBuilder simplifies creating and testing Internal Developer Platform Capabilities, solving common development and maintenance challenges. It allows you to rapidly deploy functional solutions with minimal setup by offering consistency across development stages."),(0,o.kt)("p",null,"However, idpBuilder isn't a one-size-fits-all solution. Organizations must assess their specific needs and existing infrastructure. While it's excellent for testing and development, production deployments may need further adjustments."),(0,o.kt)("p",null,"Overall, idpBuilder enhances IDP management, making it worth exploring for teams aiming to improve development processes and environmental consistency."),(0,o.kt)("h3",{id:"take-the-next-step"},"Take the Next Step:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Try idpBuilder"),":",(0,o.kt)("a",{parentName:"li",href:"https://cnoe.io/docs/reference-implementation/installations/idpbuilder"}," Download and start using idpBuilder today."),". Follow our quick-start guide in the documentation to set up your first IDP environment."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Join Our Community"),": Have questions or want to share your experience? ",(0,o.kt)("a",{parentName:"li",href:"https://cloud-native.slack.com/archives/C05TN9WFN5S"}," Join our community on Slack"),". We're here to help and learn from each other."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Learn More"),": Explore our documentation and resources on our ",(0,o.kt)("a",{parentName:"li",href:"https://cnoe.io"},"website")," to deepen your understanding of idpBuilder and its capabilities."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Contribute"),": ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cnoe-io/idpbuilder"},"idpBuilder")," is an open-source project, and we welcome contributions. Whether it's code, documentation, or feature suggestions, your input can help shape the future of idpBuilder.")))}u.isMDXComponent=!0},4600:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/idpbuilder-basic-16bfe6b7baa57701b2124233fff1e919.png"}}]);