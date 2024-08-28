---
sidebar_position: 1
description: Using idpBuilder
title: Using the idpBuilder
index: 2
---

### Basic usage

The most basic command which creates a Kubernetes Cluster (Kind cluster) with the core packages installed.

```bash
idpbuilder create
```

Once idpbuilder finishes provisioning cluster and packages, you can access GUIs by going to the following addresses in your browser.

* ArgoCD: https://argocd.cnoe.localtest.me:8443/
* Gitea: https://gitea.cnoe.localtest.me:8443/

You can obtain credentials for them by running the following command:

```bash
idpbuilder get secrets
```

###  Example commands

**For more advanced use cases, check out the [Stacks Repository](https://github.com/cnoe-io/stacks).**


#### Create

Specify the kubernetes version by using the `--kube-version` flag. Supported versions are available [here](https://github.com/kubernetes-sigs/kind/releases).

```
idpbuilder create --kube-version v1.27.3
```

Specify your own kind configuration file, use the `--kind-config` flag.

```
idpbuilder create --build-name local --kind-config ./my-kind.yaml
```

Override ArgoCD configmap.

```
idpbuilder create --package-custom-file=argocd:path/to/argocd-cm.yaml
```

For available flags and subcommands:

```
idpbuilder create --help
```

#### Get

Get all relevant secrets. See [this section](how-it-works.md#getting-relevant-secrets) for more information.

```
idpbuilder get secrets
```

Get secrets for a package named `gitea`.

```
idpbuilder get secrets -p gitea
```

#### Delete

Delete a cluster named `localdev`.

```
idpbuilder delete --name localdev
```

### Custom Packages

Idpbuilder supports specifying custom packages using the flag `-p` flag. This flag expects a directory (local or remote) containing ArgoCD application files and / or ArgoCD application set files. In case of a remote directory, it must be a directory in a git repository, and the URL format must be a [kustomize remote URL format](https://github.com/kubernetes-sigs/kustomize/blob/master/examples/remoteBuild.md).

Examples of using custom packages are available in the [stacks repository](https://github.com/cnoe-io/stacks). Let's take a look at [this example](https://github.com/cnoe-io/stacks/tree/main/basic). This defines two custom package directories to deploy to the cluster.

To deploy these packages, run the following command:

```
./idpbuilder create \
  -p https://github.com/cnoe-io/stacks//basic/package1 \
  -p https://github.com/cnoe-io/stacks//basic/package2
```

Alternatively, you can use the local directory format.

```bash
# clone the stacks repository
git clone https://github.com/cnoe-io/stacks.git
cd stacks
# run idpbuilder against the local directory
./idpbuilder create \
  -p examples/basic/package1\
  -p examples/basic/package2
```

Running this command should create three additional ArgoCD applications in your cluster.

```sh
$ kubectl get Applications -n argocd  -l example=basic
NAME         SYNC STATUS   HEALTH STATUS
guestbook    Synced        Healthy
guestbook2   Synced        Healthy
my-app       Synced        Healthy
```

Let's break this down. The [first package directory](https://github.com/cnoe-io/stacks/tree/main/basic/package1) defines an application. This corresponds to the `my-app` application above. In this application, we want to deploy manifests from local machine in GitOps way.

The directory contains an [ArgoCD application file](https://github.com/cnoe-io/stacks/blob/main/basic/package1/app.yaml).  This is a normal ArgoCD application file except for one field.

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
spec:
  source:
    repoURL: cnoe://manifests
```

The `cnoe://` prefix in the `repoURL` field indicates that we want to sync from a local directory.
Values after `cnoe://` is treated as a relative path from this file. In this example,
we are instructing idpbuilder to make ArgoCD sync from files in the [manifests directory](https://github.com/cnoe-io/stacks/tree/main/basic/package1/manifests).

As a result the following actions were taken by idpbuilder:
1. Create a Gitea repository.
2. Fill the repository with contents from the manifests directory.
3. Update the Application spec to use the newly created repository.

You can verify this by going to this address in your browser: https://gitea.cnoe.localtest.me:8443/giteaAdmin/idpbuilder-localdev-my-app-manifests

![img.png](images/my-app-repo.png)


This is the repository that corresponds to the [manifests](https://github.com/cnoe-io/stacks/tree/main/basic/package1/manifests) folder.
It contains a file called `alpine.yaml`, synced from the `manifests` directory above.

You can also view the updated Application spec by going to this address: https://argocd.cnoe.localtest.me:8443/applications/argocd/my-app

![myapp](images/my-app.png)


The second package directory defines two normal ArgoCD applications referencing a remote repository.
They are applied as-is.

### Exposing Services

Idpbuilder comes with [ingress-nginx](https://github.com/kubernetes/ingress-nginx), and this is meant to be used as an easy way to expose services to the outside world.
See [the networking overview section](how-it-works.md#networking) for more information.
By default, idpbuilder exposes the ingress-nginx service on host port 8443 and Kubernetes Ingress objects are created for core packages.
For example, an ingress object for Gitea looks something like this:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
spec:
  ingressClassName: nginx
  rules:
    - host: gitea.cnoe.localtest.me
      http:
        paths:
          - path: /
            backend:
              service:
                name: my-gitea-http
```

With this configuration, nginx routes traffic to Gitea service when http requests are made for `gitea.cnoe.localtest.me`.

Similarly, you can expose your own service by defining an ingress object.
For example, to expose a service named my-service at `my-service.cnoe.localtest.me`, the ingress object may look something like this.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-service
spec:
  ingressClassName: nginx
  rules:
    - host: my-service.cnoe.localtest.me
      http:
        paths:
          - backend:
              service:
                name: my-service
                port:
                  number: 80
            path: /
            pathType: Prefix
```
