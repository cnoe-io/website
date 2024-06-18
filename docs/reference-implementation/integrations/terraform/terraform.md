---
sidebar_position: 1
description: integrate with flux CD and tofu controller for terraform modules
title: Terraform Modules
index: 1
---

## Enable the Integration

Use the below command to deploy `idpbuilder` to make sure backstage terraform integration Argo application is deployed as part of your setup.

```bash
idpbuilder create \
  --use-path-routing \
  --package-dir https://github.com/cnoe-io/stacks//ref-implementation \
  --package-dir https://github.com/cnoe-io/stacks//terraform-integrations
```

As you see above, this add-on to `idpbuilder` has a dependency on the [reference implementation](reference-impl). This command primarily does the following:

1. Installs the `Source Controller` from Flux CD to clone the terraform modules to Install
1. Installs the `Tofu Controller` to run pull terraform values files and run `terraform apply` on the pulled modules

## Setup

Follow the instruction on the [Backstage Terraform Integrations](https://github.com/cnoe-io/backstage-terraform-integrations) repo to enable the modules on the Backstage environment.

