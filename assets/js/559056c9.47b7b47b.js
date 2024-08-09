"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[5706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Amazon S3 Bucket",s={unversionedId:"reference-implementation/integrations/terraform/s3-bucket",id:"reference-implementation/integrations/terraform/s3-bucket",title:"Amazon S3 Bucket",description:"This pattern demonstrates the creation of an Amazon S3 bucket in an AWS region. You can download the respective Backstage templates from the s3 bucket folder under cnoe-io/backstage-terraform-integrations.",source:"@site/docs/reference-implementation/integrations/terraform/01-s3-bucket.md",sourceDirName:"reference-implementation/integrations/terraform",slug:"/reference-implementation/integrations/terraform/s3-bucket",permalink:"/docs/reference-implementation/integrations/terraform/s3-bucket",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/integrations/terraform/01-s3-bucket.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Terraform Modules",permalink:"/docs/reference-implementation/integrations/terraform/"},next:{title:"Serverless Microservice",permalink:"/docs/reference-implementation/integrations/terraform/serverless-microservice-pattern"}},l={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Validation",id:"validation",level:2},{value:"Delete Workflow",id:"delete-workflow",level:2}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"amazon-s3-bucket"},"Amazon S3 Bucket"),(0,a.kt)("p",null,"This pattern demonstrates the creation of an Amazon S3 bucket in an AWS region. You can download the respective Backstage templates from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/backstage-terraform-integrations/tree/main/backstage-templates-for-eks/s3-bucket"},"s3 bucket")," folder under ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/backstage-terraform-integrations/"},"cnoe-io/backstage-terraform-integrations"),"."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"You need to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tgpadua/backstage-terraform-integrations/tree/main?tab=readme-ov-file#deploy-idpbuilder-with-terraform-integration-templates"},"add AWS credentials")," before deployed this pattern. "),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Once you are done with setting up ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/backstage-terraform-integrations"},"backstage-terraform-integrations"),", navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://cnoe.localtest.me:8443/"},"Backstage")," and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," in the left pane to view the list of available platform templates and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Choose")," on the ",(0,a.kt)("strong",{parentName:"p"},"Creates an Amazon S3 Bucket")," pattern as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Backstage Template Console",src:n(1665).Z,width:"2530",height:"945"})),(0,a.kt)("p",null,"Next, populate the terraform variables for the pattern deployment as shown below and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Review"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Backstage NVDIA Console",src:n(5700).Z,width:"2538",height:"910"})),(0,a.kt)("p",null,"Next, validate the entered variables in the below confirmation screen and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Backstage NVDIA Terraform Vars",src:n(2769).Z,width:"2538",height:"664"})),(0,a.kt)("p",null,"Next, check on the steps of backstage template run as show below and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Open In Catalog"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Backstage Run",src:n(2713).Z,width:"2539",height:"478"})),(0,a.kt)("p",null,"Next, check on the below screen showing the created Backstage component and click ",(0,a.kt)("inlineCode",{parentName:"p"},"View Source")," to navigate to the Gitea repository:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Backstage Component",src:n(1453).Z,width:"2542",height:"1301"})),(0,a.kt)("p",null,"Next, check on the Gitea repo of the created component as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Gitea Console",src:n(2314).Z,width:"2532",height:"486"})),(0,a.kt)("p",null,"Next, Navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://cnoe.localtest.me:8443/argocd"},"ArgoCD")," console and navigate to Argo App by name ",(0,a.kt)("inlineCode",{parentName:"p"},"backstage-terraform-s3-intg"),"to view the below screen:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ArgoCD Console",src:n(2694).Z,width:"2542",height:"833"})),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("p",null,"Next, lets validate the execution of the pattern by tofu controller. Run the below command on your terminal to check on ",(0,a.kt)("inlineCode",{parentName:"p"},"terraforms.infra.contrib.fluxcd.io ")," resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get terraforms.infra.contrib.fluxcd.io -A\n\nNAMESPACE     NAME                                        READY     STATUS                       AGE\nflux-system   aws-s3-bucket-backstage-terraform-s3-intg   Unknown   Reconciliation in progress   4m17s\n")),(0,a.kt)("p",null,"Next, lets check on the Kubernetes pod in the ",(0,a.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace which executes the terraform code :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> kubectl get pods -n flux-system\n\nNAME                                                  READY   STATUS        RESTARTS   AGE\naws-s3-bucket-backstage-terraform-s3-intg-tf-runner   1/1     Running       0          3m22s\nnotification-controller-5487f8c847-7w9dp              1/1     Running       0          17h\nsource-controller-69bcb7cd85-92nhv                    1/1     Running       0          17h\ntf-controller-7f8c8bbdfc-8rmvq                        1/1     Running       0          17h\n\n")),(0,a.kt)("p",null,"Lets wait for 5 mins for the ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform apply")," to be completed fully by the tofu controller and lets navigate to Amazon S3 console to view the created S3 bucket:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AWS Console",src:n(8085).Z,width:"2540",height:"667"})),(0,a.kt)("h2",{id:"delete-workflow"},"Delete Workflow"),(0,a.kt)("p",null,"Please follow the following steps if you are looking to delete ",(0,a.kt)("inlineCode",{parentName:"p"},"s3-bucket-backstage-terraform-s3-intg")," component created using the backstage terraform integrations. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Terraform")," resources in this repo are configured to clean up the corresponding cloud resources. When the Argo CD application is deleted, the deletion hook for cloud resources kicks in (takes a little bit of time though)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your ",(0,a.kt)("a",{parentName:"li",href:"https://cnoe.localtest.me:8443/argocd"},"argocd")," console, naviagate to ",(0,a.kt)("inlineCode",{parentName:"li"},"backstage-terraform-s3-intg")," application created for your component and delete it manually."),(0,a.kt)("li",{parentName:"ol"},"In your ",(0,a.kt)("a",{parentName:"li",href:"https://cnoe.localtest.me:8443/gitea/"},"gitea")," console, navigate to the ",(0,a.kt)("inlineCode",{parentName:"li"},"backstage-terraform-s3-intg")," repository for your component and delete it manually under settings."),(0,a.kt)("li",{parentName:"ol"},"Finally in your backstage console, navigate to ",(0,a.kt)("inlineCode",{parentName:"li"},"s3-bucket-backstage-terraform-s3-intg")," component and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"unregister component")," to remove the deleted c")))}m.isMDXComponent=!0},1665:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_01-d1fc084f564856b8bc2725667d1a55bb.jpg"},5700:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_02-3c05e242c616f8d439bcfd25c46f6dda.jpg"},2769:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_03-b35624b72ddb12e52171b31fa8639df3.jpg"},2713:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_04-57f981d16be56fd3339447f3ef25c827.jpg"},1453:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_05-2c98d13c3917db96c452085e38296713.jpg"},2314:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_06-7145baa571bc61754e33158e4b5ad801.jpg"},2694:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_07-7f317877d2e2dfd6ea6428083db1dea9.jpg"},8085:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_08-2af4327581e0a43ac9d582f16736adb4.jpg"}}]);