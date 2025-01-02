"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[9399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1920:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i=a.p+"assets/images/color-output-56c26ee92dd17a246966df3dbe84e70a.png",o={sidebar_position:1,description:"Using idpBuilder",title:"Using the idpBuilder",index:2},s=void 0,l={unversionedId:"reference-implementation/installations/idpbuilder/usage",id:"reference-implementation/installations/idpbuilder/usage",title:"Using the idpBuilder",description:"Using idpBuilder",source:"@site/docs/reference-implementation/installations/idpbuilder/usage.md",sourceDirName:"reference-implementation/installations/idpbuilder",slug:"/reference-implementation/installations/idpbuilder/usage",permalink:"/docs/reference-implementation/installations/idpbuilder/usage",draft:!1,editUrl:"https://github.com/cnoe-io/website/tree/main/docs/reference-implementation/installations/idpbuilder/usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Using idpBuilder",title:"Using the idpBuilder",index:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/reference-implementation/installations/idpbuilder/quick-start"},next:{title:"How it works",permalink:"/docs/reference-implementation/installations/idpbuilder/how-it-works"}},p={},c=[{value:"Basic usage",id:"basic-usage",level:2},{value:"Example commands",id:"example-commands",level:2},{value:"Create",id:"create",level:3},{value:"Get",id:"get",level:3},{value:"Delete",id:"delete",level:3},{value:"Gitea Integration",id:"gitea-integration",level:2},{value:"Custom Packages",id:"custom-packages",level:2},{value:"Workflows",id:"workflows",level:2},{value:"Exposing Services",id:"exposing-services",level:2}],m={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"The most basic command which creates a Kubernetes Cluster (Kind cluster) with the core packages installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"idpbuilder create\n")),(0,r.kt)("p",null,"Once idpbuilder finishes provisioning cluster and packages, you can access GUIs by going to the following addresses in your browser."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ArgoCD: ",(0,r.kt)("a",{parentName:"li",href:"https://argocd.cnoe.localtest.me:8443/"},"https://argocd.cnoe.localtest.me:8443/")),(0,r.kt)("li",{parentName:"ul"},"Gitea: ",(0,r.kt)("a",{parentName:"li",href:"https://gitea.cnoe.localtest.me:8443/"},"https://gitea.cnoe.localtest.me:8443/"))),(0,r.kt)("p",null,"You can obtain credentials for them by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"idpbuilder get secrets\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Color Output"),(0,r.kt)("p",null,"idpbuilder supports colored output with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--color")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"idpbuilder create --color\n")),(0,r.kt)("img",{src:i,width:"60%",height:"60%"})),(0,r.kt)("h2",{id:"example-commands"},"Example commands"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For more advanced use cases, check out the ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/cnoe-io/stacks"},"Stacks Repository"),".")),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("p",null,"Specify the kubernetes version by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--kube-version")," flag. Supported versions are available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/releases"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idpbuilder create --kube-version v1.27.3\n")),(0,r.kt)("p",null,"Specify your own kind configuration file, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--kind-config")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idpbuilder create --build-name local --kind-config ./my-kind.yaml\n")),(0,r.kt)("p",null,"Override ArgoCD configmap."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idpbuilder create --package-custom-file=argocd:path/to/argocd-cm.yaml\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example Contents of argocd-cm.yaml"),(0,r.kt)("p",null,"This configuration allows for anonymous login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    # Labels below are required by ArgoCD\n    app.kubernetes.io/name: argocd-cm\n    app.kubernetes.io/part-of: argocd\n    Test: Data\n  name: argocd-cm\ndata:\n  # Enables anonymous user access. The anonymous users get default role permissions specified argocd-rbac-cm.yaml.\n  users.anonymous.enabled: "true"\n  application.resourceTrackingMethod: annotation\n  resource.exclusions: |\n    - kinds:\n        - ProviderConfigUsage\n      apiGroups:\n        - "*"\n'))),(0,r.kt)("p",null,"Use a public repository to pull extra packages. See ",(0,r.kt)("a",{parentName:"p",href:"#custom-packages"},"this section")," for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idpbuilder create -p https://github.com/cnoe-io/stacks//basic/package1\n")),(0,r.kt)("p",null,"Use a private repository to pull extra packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/cnoe-io/stacks-private\nidpbuilder create -p ./stacks-private/basic/package1\n")),(0,r.kt)("p",null,"Increase the verbosity of idpbuilder for troubleshooting. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idpbuilder create -l debug\n")),(0,r.kt)("p",null,"For available flags and subcommands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idpbuilder create --help\n")),(0,r.kt)("h3",{id:"get"},"Get"),(0,r.kt)("p",null,"Get all relevant secrets. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference-implementation/installations/idpbuilder/how-it-works#getting-relevant-secrets"},"this section")," for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idpbuilder get secrets\n")),(0,r.kt)("p",null,"Get secrets for a package named ",(0,r.kt)("inlineCode",{parentName:"p"},"gitea"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idpbuilder get secrets -p gitea\n")),(0,r.kt)("h3",{id:"delete"},"Delete"),(0,r.kt)("p",null,"Delete a cluster named ",(0,r.kt)("inlineCode",{parentName:"p"},"localdev"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"idpbuilder delete --name localdev\n")),(0,r.kt)("h2",{id:"gitea-integration"},"Gitea Integration"),(0,r.kt)("p",null,"idpbuilder creates an internal ",(0,r.kt)("a",{parentName:"p",href:"https://about.gitea.com/"},"Gitea")," server (accessible from your laptop and kind cluster only).\nThis can be used for various purposes such as sources for ArgoCD, container registry, and more.\nTo facilitate interactions with Gitea, idpbuilder creates a token with administrator scope, then stores it in a Kubernetes secret."),(0,r.kt)("p",null,"The token can be obtained by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# print all secrets associated with gitea\nidpbuilder get secrets -p gitea\n\n# get token only\nidpbuilder get secrets -p gitea -o json | jq  -r '.[0].data.token\n\n")),(0,r.kt)("p",null,"Here are a some examples for using the token:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Create a Gitea Organization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\nTOKEN=$(idpbuilder get secrets -p gitea -o json | jq  -r \'.[0].data.token\' )\ncurl -k -X POST \\\n  https://gitea.cnoe.localtest.me:8443/api/v1/orgs \\\n  -H \'Content-Type: application/json\' \\\n  -H "Authorization: Bearer $TOKEN" \\\n  -d \'{"description": "my-org", "email": "my-org@my.m", "full_name": "my-org", "username": "my-org"}\'\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Create a Gitea User"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\nTOKEN=$(idpbuilder get secrets -p gitea -o json | jq  -r \'.[0].data.token\' )\ncurl -k -X POST \\\n  https://gitea.cnoe.localtest.me:8443/api/v1/admin/users \\\n  -H \'Content-Type: application/json\' \\\n  -H "Authorization: Bearer $TOKEN" \\\n  -d \'{"email": "my-org@my.m", "full_name": "user one", "username": "user1", "password": "password", "must_change_password": true}\'\n'))),(0,r.kt)("h2",{id:"custom-packages"},"Custom Packages"),(0,r.kt)("p",null,"Idpbuilder supports specifying custom packages using the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," flag. This flag expects a directory (local or remote) containing ArgoCD application files and / or ArgoCD application set files. In case of a remote directory, it must be a directory in a git repository, and the URL format must be a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize/blob/master/examples/remoteBuild.md"},"kustomize remote URL format"),"."),(0,r.kt)("p",null,"Examples of using custom packages are available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks"},"stacks repository"),". Let's take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/basic"},"this example"),". This defines two custom package directories to deploy to the cluster."),(0,r.kt)("p",null,"To deploy these packages, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./idpbuilder create \\\n  -p https://github.com/cnoe-io/stacks//basic/package1 \\\n  -p https://github.com/cnoe-io/stacks//basic/package2\n")),(0,r.kt)("p",null,"Alternatively, you can use the local directory format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# clone the stacks repository\ngit clone https://github.com/cnoe-io/stacks.git\ncd stacks\n# run idpbuilder against the local directory\n./idpbuilder create \\\n  -p examples/basic/package1\\\n  -p examples/basic/package2\n")),(0,r.kt)("p",null,"Running this command should create three additional ArgoCD applications in your cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get Applications -n argocd  -l example=basic\nNAME         SYNC STATUS   HEALTH STATUS\nguestbook    Synced        Healthy\nguestbook2   Synced        Healthy\nmy-app       Synced        Healthy\n")),(0,r.kt)("p",null,"Let's break this down. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/basic/package1"},"first package directory")," defines an application. This corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-app")," application above. In this application, we want to deploy manifests from local machine in GitOps way."),(0,r.kt)("p",null,"The directory contains an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/blob/main/basic/package1/app.yaml"},"ArgoCD application file"),".  This is a normal ArgoCD application file except for one field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: argoproj.io/v1alpha1\nkind: Application\nspec:\n  source:\n    repoURL: cnoe://manifests\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cnoe://")," prefix in the ",(0,r.kt)("inlineCode",{parentName:"p"},"repoURL")," field indicates that we want to sync from a local directory.\nValues after ",(0,r.kt)("inlineCode",{parentName:"p"},"cnoe://")," is treated as a relative path from this file. In this example,\nwe are instructing idpbuilder to make ArgoCD sync from files in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/basic/package1/manifests"},"manifests directory"),"."),(0,r.kt)("p",null,"As a result the following actions were taken by idpbuilder:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Gitea repository."),(0,r.kt)("li",{parentName:"ol"},"Fill the repository with contents from the manifests directory."),(0,r.kt)("li",{parentName:"ol"},"Update the Application spec to use the newly created repository.")),(0,r.kt)("p",null,"You can verify this by going to this address in your browser: ",(0,r.kt)("a",{parentName:"p",href:"https://gitea.cnoe.localtest.me:8443/giteaAdmin/idpbuilder-localdev-my-app-manifests"},"https://gitea.cnoe.localtest.me:8443/giteaAdmin/idpbuilder-localdev-my-app-manifests")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img.png",src:a(9750).Z,width:"1003",height:"384"})),(0,r.kt)("p",null,"This is the repository that corresponds to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/tree/main/basic/package1/manifests"},"manifests")," folder.\nIt contains a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"alpine.yaml"),", synced from the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifests")," directory above."),(0,r.kt)("p",null,"You can also view the updated Application spec by going to this address: ",(0,r.kt)("a",{parentName:"p",href:"https://argocd.cnoe.localtest.me:8443/applications/argocd/my-app"},"https://argocd.cnoe.localtest.me:8443/applications/argocd/my-app")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"myapp",src:a(9700).Z,width:"1065",height:"405"})),(0,r.kt)("p",null,"The second package directory defines two normal ArgoCD applications referencing a remote repository.\nThey are applied as-is."),(0,r.kt)("h2",{id:"workflows"},"Workflows"),(0,r.kt)("p",null,"In some situations, you need to run imperative jobs such as creating users in your service, managing secrets, or calling APIs.\nArgoCD ",(0,r.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/resource_hooks/"},"Resource Hooks")," are perfect for these scenarios.\nThese hooks allow you to execute imperative workflows at various stages of the ArgoCD sync process."),(0,r.kt)("p",null,"For example, you can create a Kubernetes job that runs after a PostgreSQL database is created and ready by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"PostSync")," hook. Here's an example:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example PostgreSQL User Creation Hook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: create-db-user\n  annotations:\n    argocd.argoproj.io/hook: PostSync\n    argocd.argoproj.io/hook-delete-policy: HookSucceeded\nspec:\n  template:\n    spec:\n      containers:\n      - name: create-user\n        image: bitnami/postgresql:latest\n        command: [\"/bin/bash\", \"-c\"]\n        args:\n        - |\n          PGPASSWORD=$POSTGRES_PASSWORD psql -h postgresql -U postgres <<'EOF'\n            DO $$ \n            BEGIN\n              IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'myapp') THEN\n                CREATE USER myapp WITH PASSWORD 'mypassword';\n                GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myapp;\n              END IF;\n            END\n            $$;\n          EOF\n        env:\n        - name: POSTGRES_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: postgresql\n              key: postgres-password\n      restartPolicy: Never\n  backoffLimit: 3\n"))),(0,r.kt)("p",null,"More complex examples are available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/stacks/blob/main/ref-implementation/keycloak/manifests/keycloak-config.yaml"},"here")," "),(0,r.kt)("h2",{id:"exposing-services"},"Exposing Services"),(0,r.kt)("p",null,"Idpbuilder comes with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx"},"ingress-nginx"),", and this is meant to be used as an easy way to expose services to the outside world.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference-implementation/installations/idpbuilder/how-it-works#networking"},"the networking overview section")," for more information.\nBy default, idpbuilder exposes the ingress-nginx service on host port 8443 and Kubernetes Ingress objects are created for core packages.\nFor example, an ingress object for Gitea looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nspec:\n  ingressClassName: nginx\n  rules:\n    - host: gitea.cnoe.localtest.me\n      http:\n        paths:\n          - path: /\n            backend:\n              service:\n                name: my-gitea-http\n")),(0,r.kt)("p",null,"With this configuration, nginx routes traffic to Gitea service when http requests are made for ",(0,r.kt)("inlineCode",{parentName:"p"},"gitea.cnoe.localtest.me"),"."),(0,r.kt)("p",null,"Similarly, you can expose your own service by defining an ingress object.\nFor example, to expose a service named my-service at ",(0,r.kt)("inlineCode",{parentName:"p"},"my-service.cnoe.localtest.me"),", the ingress object may look something like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: my-service\nspec:\n  ingressClassName: nginx\n  rules:\n    - host: my-service.cnoe.localtest.me\n      http:\n        paths:\n          - backend:\n              service:\n                name: my-service\n                port:\n                  number: 80\n            path: /\n            pathType: Prefix\n")))}u.isMDXComponent=!0},9750:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-app-repo-bb4d8740fb103272bb6fc355d14260f5.png"},9700:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-app-4fd46870df4fab797e1b7f7862bebace.png"}}]);