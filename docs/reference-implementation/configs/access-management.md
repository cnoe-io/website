---
sidebar_position: 1
description: utilizing CNOE for Access Management
title: Access Management
---

## Keycloak

In the implementation, [Keycloak](https://www.keycloak.org/) is used as the identity provider. This instance is used to login into UIs such as Backstage and Argo.

Although it is not configured to be a identity broker or a user federation provider, you can configured it to be one. For example, you can configure it to federate users from Active Directory. 
Keycloak supports a large number of identity providers to integrate with. Please refer to [the documentation](https://www.keycloak.org/docs/latest/server_admin/) for more information. 

## Backstage and Kubernetes Authentication

In the reference implementation, it uses the server side authentication pattern. [Server side authentication](https://backstage.io/docs/features/kubernetes/authentication) is the pattern that all users on Backstage share the same credential and access level when accessing resources in the cluster. For example, for accessing secret resources, the same service account token is used for a configured Kubernetes cluster regardless of the user requesting resources. This is not ideal for use cases where a Backstage instance is shared by multiple teams. For example, when tying infrastructure and application provisioning to Backstage, it is important to ensure only authorized persons can access certain actions. For example, only admins should be able to delete a Kubernetes cluster in AWS.

Backstage has the ability to enforce policies through the [Permission Framework ](https://backstage.io/docs/permissions/overview) about who can invoke what API actions. Although it is not enabled for the implementation currently, we would like to enable this in the future. 
Expanding on Backstage's permissions framework, examples provided in the documentation requires writing policies in TypeScript, and they need to be pulled into the Backstage application code. From the Kubernetes centric platform perspective, it makes a lof of sense to leverage policy engines like Kyverno or OPA Gatekeeper if possible.

Client side authentication can be more fine tuned. [Client side authentication](https://backstage.io/docs/features/kubernetes/authentication#client-side-providers) means actions are performed using the user's credentials. This means even if a cluster is listed and configured for use in Backstage, as long as the logged in user does not have permissions for the cluster, performing actions on the cluster is denied. Currently this is not natively supported by Backstage for EKS clusters. This requires more complex configuration and support from Backstage frontend plugin to properly pass user credentials to the cluster through the Kubernetes proxy in Backstage backend.

