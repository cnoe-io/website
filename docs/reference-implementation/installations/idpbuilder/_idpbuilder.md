---
sidebar_position: 1
description: IDP builder is a single binary IDP launcher.
title: idpBuilder CLI
index: 1
---

# Local IDP

:::tip github repo

[cnoe-io/idpbuilder](https://github.com/cnoe-io/idpbuilder)
:::

## IDP installation flow

The idpbuilder cli installs a local internal developer portal using the following pattern:

1. Create a new Kind cluster if one doesn't exist or if `--recreate` switch is passed.
1. Install [Gitea](https://about.gitea.com/) available at
   https://gitea.cnoe.localtest.me:8443
1. Install [ArgoCD](https://argoproj.github.io/cd/) and configure it to be able to monitor applications from the Gitea service, available at https://argocd.cnoe.localtest.me:8443
1. Install [Nginx](https://www.nginx.com/products/nginx-ingress-controller/) for
   ingress traffic management.
1. Argo apps  for ArgoCD, Gitea, and Nginx ingress are reconciled by ArgoCD.
1. Command line exits leaving the cluster running with the IDP stack installed.

The tool also comes with the option to install the CNOE recommended IDP stack:

1. Backstage becomes available on your localhost via an Nginx ingress
  at https://backstage.cnoe.localtest.me:8443
1. Keycloak becomes available on your localhost via an Nginx ingress at
   https://keycloak.cnoe.localtest.me:8443
1. Crossplane becomes available on your localhost, managing Crossplane resources
   deployed to the Kind cluster

Use kubectl to get the correct IDP address/hostname to connect to.

:::tip
- Docker must be installed and available to the current user.
- Internal Developer Portal components are installed as ArgoCD Applications.
- The ArgoCD apps that are installed are embedded in the cli binary. See [cnoe-io/idpbuilder/pkg/controllers/localbuild/controller.go](https://github.com/cnoe-io/idpbuilder/blob/56089e4ae3b27cf90641bfbff2a96c36dd5263e1/pkg/controllers/localbuild/controller.go#L211-L243)
:::

