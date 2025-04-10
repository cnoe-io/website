---
sidebar_position: 3
description: Customizing idpbuilder
title: Customizing idpbuilder
index: 3
---

## Core Packages

Core Packages are fully customizable with the flag `-c`. This flag accepts a path to a file containing Kubernetes manifests.
The specified file can contain multiple yaml documents.
The format of this flag is `<PACKAGE_NAME>:<PATH>`. Where `<PACKAGE_NAME>` is one of `argocd`, `nginx`, and `gitea`.
You can find the built-in manifests in your local Gitea repositories or in our source files:
- [ArgoCD](https://github.com/cnoe-io/idpbuilder/blob/main/pkg/controllers/localbuild/resources/argo/install.yaml)
- [Gitea](https://github.com/cnoe-io/idpbuilder/blob/main/pkg/controllers/localbuild/resources/gitea/k8s/install.yaml)
- [Nginx](https://github.com/cnoe-io/idpbuilder/blob/main/pkg/controllers/localbuild/resources/nginx/k8s/ingress-nginx.yaml)

For example, if you'd like to override [the ArgoCD ConfigMap](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/), you can run idpbuilder like this:

```bash 
$ idpbuilder create -c argocd:/tmp/override.yaml
```

The contents of `/tmp/override.yaml` is:

```yaml
apiVersion: v1
data:
  application.resourceTrackingMethod: annotation
  resource.exclusions: |
    - kinds:
        - ProviderConfigUsage
      apiGroups:
        - "*"
kind: ConfigMap
metadata:
  labels:
    app.kubernetes.io/name: argocd-cm
    app.kubernetes.io/part-of: argocd
  name: argocd-cm
```

The corresponding built-in manifest can be found [here](https://github.com/cnoe-io/idpbuilder/blob/eab34d6c75784f3dce44896e141afbc2a40de03c/pkg/controllers/localbuild/resources/argo/install.yaml#L21082-L21096).

This instructs idpbuilder to use the provided manifest for `argocd-cm` only. The built-in Kubernetes manifests are used for everything but `argocd-cm`.

## CoreDNS

CoreDNS is used as the in-cluster DNS provider for Kind clusters. idpbuilder configures CoreDNS service during cluster creation to ensure domain names given by the `--host` flag resolves correctly.
It configures CoreDNS by creating a custom CoreDNS configuration files as Kubernetes ConfigMap, then mounting them on the CoreDNS pods.
They are not managed by ArgoCD and can be fully customized. If DNS resolutions provided by idpbuilder does not work for you, you can override them with custom packages.

**Default CoreDNS configurations**:
The main configuration file is mounted at `/etc/coredns/Corefile` and looks like this:

```
:53 {
    errors
    health {
       lameduck 5s
    }
    ready
    import ../coredns-configs/*.conf
    ...
}
```

CoreDNS allows you to [import configuration files](https://coredns.io/plugins/import/) matching a pattern in a specified directory.
The `import ../coredns-configs/*.conf` line instructs CoreDNS to look for configuration files in the `/etc/coredns-configs/` directory.

idpbuilder creates two ConfigMaps then mount them in the CoreDNS pods under the `/etc/coredns-configs/` directory.

First ConfigMap is called `coredns-conf-default` and contains configuration like this:

```
rewrite stop {
    name regex (.*).cnoe.localtest.me ingress-nginx-controller.ingress-nginx.svc.cluster.local
}
rewrite name exact cnoe.localtest.me ingress-nginx-controller.ingress-nginx.svc.cluster.local
```

The first `rewrite` rule resolves subdomain names to ingress IP address. For example `gitea.cnoe.localtest.me` becomes `ingress-nginx-controller.ingress-nginx.svc.cluster.local`.

The second `rewrite` rule resolves the domain name to ingress IP address. For example  `cnoe.localtest.me` becomes `ingress-nginx-controller.ingress-nginx.svc.cluster.local`.

Second ConfigMap is called `coredns-conf-custom` and is left empty. This is intended to be used by custom packages that need additional DNS resolution.
For example, if you'd like to resolve a domain name `my.cnoe.io` to `home.cnoe.io`, then you can populate the CM's data filed like so:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: coredns-conf-custom
  namespace: kube-system
data:
  custom.conf: |
    rewrite name exact my.cnoe.io home.cnoe.io
```

## Self Signed Certificate

As described in the [self-signed certificate](./how-it-works#self-signed-certificate), idpbuilder creates a self-signed certificate and uses it as the default TLS certificate for ingress-nginx. 
This default certificate cannot be overridden at cluster creation and is used when no certificate is specified on the Ingress object.
This means, you can specify certificate to use at Ingress level by specifying a TLS secret like this:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  tls:
  - hosts:
    - cnoe.io
    secretName: my-tls-secret # specify secret here
```
Please see [the Kubernetes docs](https://kubernetes.io/docs/concepts/services-networking/ingress/) for more information.


