---
sidebar_position: 1
description: CNOE control plane
title: Infrastructure Control Plane
---

In the reference implementation, [Crossplane](https://www.crossplane.io/) is used as the control plane for AWS resources and manifests are synced to the cluster using [ArgoCD](https://argo-cd.readthedocs.io/en/stable/). This pattern is quite powerful because it allows you to combine the power of GitOps and the flexibility of Crossplane compositions. It is not limited to just provisioning external resources through Kubernetes APIs. You can also bake security and governance requirements into compositions. 



For example, you can create a composition for S3 buckets for use with applications. In the composition, we can enforce certain configuration options such as tagging requirements and encryption key choices. 
Once a bucket is created through Crossplane, it continuously enforces these configuration options. 
Even if an end user updates configuration manually through API calls  or the console, the changes are reverted back automatically because Kubernetes operators continuously work to sync external resources with the specifications stored in the cluster.

Kubernetes CD solutions like ArgoCD is a great companion for this. It allows you to automatically sync resources from a Git repository with many flexible options. With ArgoCD and Crossplane, many application infrastructure needs can be condensed to a YAML file that developers can self-service through a developer portal.

This pattern is not limited to Crossplane. There are other Kubernetes Controllers for Infrastructure as code toolings. Take [Terraform controller](https://github.com/weaveworks/tf-controller) for example. 
This controller allows you to run Terraform modules in Kubernetes and exposes commonly used Terraform features as fields in the CRD. In the terraform module you can enforce your organizational requirements. 

Whichever tool you choose to use, use of a policy engine such as Kyverno and OPA Gatekeeper is essential in securing your cluster and external resources. We will include more example of this pattern in the future.
