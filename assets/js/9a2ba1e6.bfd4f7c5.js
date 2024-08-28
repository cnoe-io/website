"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[9399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1690:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1,description:"Using idpBuilder",title:"Using the idpBuilder",index:2},o=void 0,s={unversionedId:"reference-implementation/installations/idpbuilder/usage",id:"reference-implementation/installations/idpbuilder/usage",title:"Using the idpBuilder",description:"Using idpBuilder",source:"@site/docs/reference-implementation/installations/idpbuilder/usage.md",sourceDirName:"reference-implementation/installations/idpbuilder",slug:"/reference-implementation/installations/idpbuilder/usage",permalink:"/docs/reference-implementation/installations/idpbuilder/usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/installations/idpbuilder/usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Using idpBuilder",title:"Using the idpBuilder",index:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/reference-implementation/installations/idpbuilder/quick-start"},next:{title:"How it works",permalink:"/docs/reference-implementation/installations/idpbuilder/how-it-works"}},l={},p=[{value:"Basic usage",id:"basic-usage",level:3},{value:"Example commands",id:"example-commands",level:3},{value:"Create",id:"create",level:4},{value:"Get",id:"get",level:4},{value:"Delete",id:"delete",level:4},{value:"Custom Packages",id:"custom-packages",level:3},{value:"Exposing Services",id:"exposing-services",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,i.kt)("p",null,"The most basic command which creates a Kubernetes Cluster (Kind cluster) with the core packages installed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"idpbuilder create\n")),(0,i.kt)("p",null,"Once idpbuilder finishes provisioning cluster and packages, you can access GUIs by going to the following addresses in your browser."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ArgoCD: ",(0,i.kt)("a",{parentName:"li",href:"https://argocd.cnoe.localtest.me:8443/"},"https://argocd.cnoe.localtest.me:8443/")),(0,i.kt)("li",{parentName:"ul"},"Gitea: ",(0,i.kt)("a",{parentName:"li",href:"https://gitea.cnoe.localtest.me:8443/"},"https://gitea.cnoe.localtest.me:8443/"))),(0,i.kt)("p",null,"You can obtain credentials for them by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"idpbuilder get secrets\n")),(0,i.kt)("h3",{id:"example-commands"},"Example commands"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For more advanced use cases, check out the ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/cnoe-io/stacks"},"Stacks Repository"),".")),(0,i.kt)("h4",{id:"create"},"Create"),(0,i.kt)("p",null,"Specify the kubernetes version by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--kube-version")," flag. Supported versions are available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/releases"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idpbuilder create --kube-version v1.27.3\n")),(0,i.kt)("p",null,"Specify your own kind configuration file, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--kind-config")," flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idpbuilder create --build-name local --kind-config ./my-kind.yaml\n")),(0,i.kt)("p",null,"Override ArgoCD configmap."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idpbuilder create --package-custom-file=argocd:path/to/argocd-cm.yaml\n")),(0,i.kt)("p",null,"For available flags and subcommands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idpbuilder create --help\n")),(0,i.kt)("h4",{id:"get"},"Get"),(0,i.kt)("p",null,"Get all relevant secrets. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference-implementation/installations/idpbuilder/how-it-works#getting-relevant-secrets"},"this section")," for more information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idpbuilder get secrets\n")),(0,i.kt)("p",null,"Get secrets for a package named ",(0,i.kt)("inlineCode",{parentName:"p"},"gitea"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idpbuilder get secrets -p gitea\n")),(0,i.kt)("h4",{id:"delete"},"Delete"),(0,i.kt)("p",null,"Delete a cluster named ",(0,i.kt)("inlineCode",{parentName:"p"},"localdev"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idpbuilder delete --name localdev\n")),(0,i.kt)("h3",{id:"custom-packages"},"Custom Packages"),(0,i.kt)("p",null,"Idpbuilder supports specifying custom packages using the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," flag. This flag expects a directory (local or remote) containing ArgoCD application files and / or ArgoCD application set files. In case of a remote directory, it must be a directory in a git repository, and the URL format must be a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize/blob/master/examples/remoteBuild.md"},"kustomize remote URL format"),"."),(0,i.kt)("p",null,"Examples of using custom packages are available in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks"},"stacks repository"),". Let's take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/basic"},"this example"),". This defines two custom package directories to deploy to the cluster."),(0,i.kt)("p",null,"To deploy these packages, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./idpbuilder create \\\n  -p https://github.com/cnoe-io/stacks//basic/package1 \\\n  -p https://github.com/cnoe-io/stacks//basic/package2\n")),(0,i.kt)("p",null,"Alternatively, you can use the local directory format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# clone the stacks repository\ngit clone https://github.com/cnoe-io/stacks.git\ncd stacks\n# run idpbuilder against the local directory\n./idpbuilder create \\\n  -p examples/basic/package1\\\n  -p examples/basic/package2\n")),(0,i.kt)("p",null,"Running this command should create three additional ArgoCD applications in your cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get Applications -n argocd  -l example=basic\nNAME         SYNC STATUS   HEALTH STATUS\nguestbook    Synced        Healthy\nguestbook2   Synced        Healthy\nmy-app       Synced        Healthy\n")),(0,i.kt)("p",null,"Let's break this down. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/basic/package1"},"first package directory")," defines an application. This corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"my-app")," application above. In this application, we want to deploy manifests from local machine in GitOps way."),(0,i.kt)("p",null,"The directory contains an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/blob/main/basic/package1/app.yaml"},"ArgoCD application file"),".  This is a normal ArgoCD application file except for one field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: argoproj.io/v1alpha1\nkind: Application\nspec:\n  source:\n    repoURL: cnoe://manifests\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cnoe://")," prefix in the ",(0,i.kt)("inlineCode",{parentName:"p"},"repoURL")," field indicates that we want to sync from a local directory.\nValues after ",(0,i.kt)("inlineCode",{parentName:"p"},"cnoe://")," is treated as a relative path from this file. In this example,\nwe are instructing idpbuilder to make ArgoCD sync from files in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/basic/package1/manifests"},"manifests directory"),"."),(0,i.kt)("p",null,"As a result the following actions were taken by idpbuilder:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a Gitea repository."),(0,i.kt)("li",{parentName:"ol"},"Fill the repository with contents from the manifests directory."),(0,i.kt)("li",{parentName:"ol"},"Update the Application spec to use the newly created repository.")),(0,i.kt)("p",null,"You can verify this by going to this address in your browser: ",(0,i.kt)("a",{parentName:"p",href:"https://gitea.cnoe.localtest.me:8443/giteaAdmin/idpbuilder-localdev-my-app-manifests"},"https://gitea.cnoe.localtest.me:8443/giteaAdmin/idpbuilder-localdev-my-app-manifests")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:a(9750).Z,width:"1003",height:"384"})),(0,i.kt)("p",null,"This is the repository that corresponds to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/basic/package1/manifests"},"manifests")," folder.\nIt contains a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"alpine.yaml"),", synced from the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifests")," directory above."),(0,i.kt)("p",null,"You can also view the updated Application spec by going to this address: ",(0,i.kt)("a",{parentName:"p",href:"https://argocd.cnoe.localtest.me:8443/applications/argocd/my-app"},"https://argocd.cnoe.localtest.me:8443/applications/argocd/my-app")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"myapp",src:a(9700).Z,width:"1065",height:"405"})),(0,i.kt)("p",null,"The second package directory defines two normal ArgoCD applications referencing a remote repository.\nThey are applied as-is."),(0,i.kt)("h3",{id:"exposing-services"},"Exposing Services"),(0,i.kt)("p",null,"Idpbuilder comes with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx"},"ingress-nginx"),", and this is meant to be used as an easy way to expose services to the outside world.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference-implementation/installations/idpbuilder/how-it-works#networking"},"the networking overview section")," for more information.\nBy default, idpbuilder exposes the ingress-nginx service on host port 8443 and Kubernetes Ingress objects are created for core packages.\nFor example, an ingress object for Gitea looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nspec:\n  ingressClassName: nginx\n  rules:\n    - host: gitea.cnoe.localtest.me\n      http:\n        paths:\n          - path: /\n            backend:\n              service:\n                name: my-gitea-http\n")),(0,i.kt)("p",null,"With this configuration, nginx routes traffic to Gitea service when http requests are made for ",(0,i.kt)("inlineCode",{parentName:"p"},"gitea.cnoe.localtest.me"),"."),(0,i.kt)("p",null,"Similarly, you can expose your own service by defining an ingress object.\nFor example, to expose a service named my-service at ",(0,i.kt)("inlineCode",{parentName:"p"},"my-service.cnoe.localtest.me"),", the ingress object may look something like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: my-service\nspec:\n  ingressClassName: nginx\n  rules:\n    - host: my-service.cnoe.localtest.me\n      http:\n        paths:\n          - backend:\n              service:\n                name: my-service\n                port:\n                  number: 80\n            path: /\n            pathType: Prefix\n")))}d.isMDXComponent=!0},9750:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-app-repo-bb4d8740fb103272bb6fc355d14260f5.png"},9700:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-app-4fd46870df4fab797e1b7f7862bebace.png"}}]);