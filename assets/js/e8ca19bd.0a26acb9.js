"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[5677],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={sidebar_position:0,description:"IDP builder is a single binary IDP launcher.",title:"Architecture"},o=void 0,l={unversionedId:"reference-implementation/idpbuilder/architecture/architecture",id:"reference-implementation/idpbuilder/architecture/architecture",title:"Architecture",description:"IDP builder is a single binary IDP launcher.",source:"@site/docs/reference-implementation/idpbuilder/architecture/architecture.md",sourceDirName:"reference-implementation/idpbuilder/architecture",slug:"/reference-implementation/idpbuilder/architecture/",permalink:"/docs/reference-implementation/idpbuilder/architecture/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/idpbuilder/architecture/architecture.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"IDP builder is a single binary IDP launcher.",title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"idpBuilder CLI",permalink:"/docs/reference-implementation/idpbuilder/"},next:{title:"Pluggability",permalink:"/docs/category/pluggability"}},s={},p=[{value:"CLI",id:"cli",level:3},{value:"Custom Packages",id:"custom-packages",level:3},{value:"Controllers",id:"controllers",level:3},{value:"LocalbuildReconciler",id:"localbuildreconciler",level:4},{value:"RepositoryReconciler",id:"repositoryreconciler",level:4},{value:"CustomPackageReconciler",id:"custompackagereconciler",level:4}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"stay up-to-date",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Find the latest on the idpBuilder here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/idpbuilder"},"cnoe-io/idpbuilder"))),(0,i.kt)("p",null,"idpbuilder is made of two phases: CLI and Kubernetes controllers."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"diagram",src:a(8859).Z,width:"2803",height:"2222"})),(0,i.kt)("h3",{id:"cli"},"CLI"),(0,i.kt)("p",null,"When the idpbuilder binary is executed, it starts with the CLI phase."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"This is the phase where command flags are parsed and translated into relevant Go structs' fields. Most notably the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cnoe-io/idpbuilder/blob/main/api/v1alpha1/localbuild_types.go"},(0,i.kt)("inlineCode",{parentName:"a"},"LocalBuild"))," struct."),(0,i.kt)("li",{parentName:"ol"},"Create a Kind cluster, then update the kubeconfig file."),(0,i.kt)("li",{parentName:"ol"},"Once the kind cluster is started and relevant fields are populated, Kubernetes controllers are started:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LocalbuildReconciler")," responsible for bootstrapping the cluster with absolute necessary packages. Creates Custom Resources (CRs) and installs embedded manifests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RepositoryReconciler")," responsible for creating and managing Gitea repository and repository contents."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CustomPackageReconciler")," responsible for managing custom packages.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"They are all managed by a single Kubernetes controller manager."),(0,i.kt)("li",{parentName:"ol"},"Once controllers are started, CRs corresponding to these controllers are created. For example for Backstage, it creates a GitRepository CR and ArgoCD Application."),(0,i.kt)("li",{parentName:"ol"},"CLI then waits for these CRs to be ready.")),(0,i.kt)("h3",{id:"custom-packages"},"Custom Packages"),(0,i.kt)("p",null,"Idpbuilder supports specifying custom packages using the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--package-dir")," flag. This flag expects a directory containing ArgoCD application files."),(0,i.kt)("p",null,"Let's take a look at ",(0,i.kt)("a",{parentName:"p",href:"examples/basic"},"this example"),". This example defines two custom package directories to deploy to the cluster."),(0,i.kt)("p",null,"To deploy these packages, run the following commands from this repository's root."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./idpbuilder create --package-dir examples/basic/package1  --package-dir examples/basic/package2\n")),(0,i.kt)("p",null,"Running this command should create three additional ArgoCD applications in your cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get Applications -n argocd  -l example=basic\nNAME         SYNC STATUS   HEALTH STATUS\nguestbook    Synced        Healthy\nguestbook2   Synced        Healthy\nmy-app       Synced        Healthy\n")),(0,i.kt)("p",null,"Let's break this down. The ",(0,i.kt)("a",{parentName:"p",href:"examples/basic/package1"},"first package directory")," defines an application. This corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"my-app")," application above. In this application, we want to deploy manifests from local machine in GitOps way."),(0,i.kt)("p",null,"The directory contains an ",(0,i.kt)("a",{parentName:"p",href:"examples/basic/package1/app.yaml"},"ArgoCD application file"),". This is a normal ArgoCD application file except for one field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: argoproj.io/v1alpha1\nkind: Application\nspec:\n  source:\n    repoURL: cnoe://manifests\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cnoe://")," prefix in the ",(0,i.kt)("inlineCode",{parentName:"p"},"repoURL")," field indicates that we want to sync from a local directory.\nValues after ",(0,i.kt)("inlineCode",{parentName:"p"},"cnoe://")," is treated as a relative path from this file. In this example, we are instructing idpbuilder to make ArgoCD sync from files in the ",(0,i.kt)("a",{parentName:"p",href:"examples/basic/package1/manifests"},"manifests directory"),"."),(0,i.kt)("p",null,"As a result the following actions were taken by idpbuilder: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a Gitea repository."),(0,i.kt)("li",{parentName:"ol"},"Fill the repository with contents from the manifests directory."),(0,i.kt)("li",{parentName:"ol"},"Update the Application spec to use the newly created repository.")),(0,i.kt)("p",null,"You can verify this by going to this address in your browser: ",(0,i.kt)("a",{parentName:"p",href:"https://gitea.cnoe.localtest.me:8443/giteaAdmin/idpbuilder-localdev-my-app-manifests"},"https://gitea.cnoe.localtest.me:8443/giteaAdmin/idpbuilder-localdev-my-app-manifests")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:a(5833).Z,width:"1003",height:"384"})),(0,i.kt)("p",null,"This is the repository that corresponds to the ",(0,i.kt)("a",{parentName:"p",href:"examples/basic/package1/manifests"},"manifests")," folder.\nIt contains a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"alpine.yaml"),", synced from the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifests")," directory above."),(0,i.kt)("p",null,"You can also view the updated Application spec by going to this address: ",(0,i.kt)("a",{parentName:"p",href:"https://argocd.cnoe.localtest.me:8443/applications/argocd/my-app"},"https://argocd.cnoe.localtest.me:8443/applications/argocd/my-app")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"myapp",src:a(5418).Z,width:"1065",height:"405"})),(0,i.kt)("p",null,"The second package directory defines two normal ArgoCD applications referencing a remote repository.\nThey are applied as-is."),(0,i.kt)("h3",{id:"controllers"},"Controllers"),(0,i.kt)("p",null,"During this phase, controllers act on CRs created by the CLI phase. Resources such as Gitea repositories and ArgoCD applications are created. "),(0,i.kt)("h4",{id:"localbuildreconciler"},"LocalbuildReconciler"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LocalbuildReconciler")," bootstraps the cluster using embedded manifests. Embedded manifests are yaml files that are baked into the binary at compile time."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install core packages. They are essential services that are needed for the user experiences we want to enable:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gitea. This is the in-cluster Git server that hosts Git repositories."),(0,i.kt)("li",{parentName:"ul"},"Ingress-nginx. This is necessary to expose services inside the cluster to the users."),(0,i.kt)("li",{parentName:"ul"},"ArgoCD. This is used as the packaging mechanism. Its primary purpose is to deploy manifests from gitea repositories.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Once they are installed, it creates ",(0,i.kt)("inlineCode",{parentName:"li"},"GitRepository")," CRs for core packages. This CR represents the git repository on the Gitea server."),(0,i.kt)("li",{parentName:"ol"},"Create ArgoCD applications for the apps. Point them to the Gitea repositories. From here on, ArgoCD manages the core packages.")),(0,i.kt)("p",null,"Once core packages are installed, it creates the other embedded applications: Backstage and Crossplane."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create ",(0,i.kt)("inlineCode",{parentName:"li"},"GitRepository")," CRs for the apps."),(0,i.kt)("li",{parentName:"ol"},"Create ArgoCD applications for the apps. Point them to the Gitea repositories.")),(0,i.kt)("h4",{id:"repositoryreconciler"},"RepositoryReconciler"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RepositoryReconciler")," creates Gitea repositories.\nThe content of the repositories can either be sourced from Embedded file system or local file system."),(0,i.kt)("h4",{id:"custompackagereconciler"},"CustomPackageReconciler"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CustomPackageReconciler")," parses the specified ArgoCD application files. If they specify repository URL with the scheme ",(0,i.kt)("inlineCode",{parentName:"p"},"cnoe://"),",\nit creates ",(0,i.kt)("inlineCode",{parentName:"p"},"GitRepository")," CR with source specified as local, then creates ArgoCD application with the repository URL replaced."),(0,i.kt)("p",null,"For example, if an ArgoCD application is specified as the following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: argoproj.io/v1alpha1\nkind: Application\nspec:\n  source:\n    repoURL: cnoe://busybox\n")),(0,i.kt)("p",null,"Then, the actual object created is this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: argoproj.io/v1alpha1\nkind: Application\nspec:\n  source:\n    repoURL: http://my-gitea-http.gitea.svc.cluster.local:3000/giteaAdmin/idpbuilder-localdev-my-app-busybox.git\n")))}d.isMDXComponent=!0},8859:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/idpbuilder-347549f8741e5248720c4e20fae33e70.png"},5833:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/my-app-repo-bb4d8740fb103272bb6fc355d14260f5.png"},5418:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/my-app-4fd46870df4fab797e1b7f7862bebace.png"}}]);