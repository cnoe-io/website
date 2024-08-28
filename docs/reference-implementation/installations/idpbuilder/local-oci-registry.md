---
sidebar_position: 5
description: Using the built-in OCI registry
title: Local OCI Registry
index: 5
---

The local Gitea instance created by idpbuilder contains a built-in OCI registry for hosting container images as "packages" in Gitea nomenclature.

It is a standard OCI registry, so the API should be compatible with any tools that are OCI compliant. That includes the `docker` cli.

For example, you can push an image by running:

```bash
docker login gitea.cnoe.localtest.me:8443                                          
# see the note section below for retrieving your password.
Username: giteaAdmin
Password: 

# you can build your own image instead of pulling.
docker pull docker.io/library/ubuntu:24.04 
docker tag docker.io/library/ubuntu:24.04 gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04

docker push gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04
```
> **NOTE**: You can get the giteaAdmin password in the same way as you do for the web or git interface.
> 
> `./idpbuilder get secrets -p gitea`
> 
> Or you can use this to login directly:
> ```
> idpbuilder get secrets -p gitea -o json | \
>   jq '.[0].data.password' -r | \
>   docker login -u giteaAdmin --password-stdin gitea.cnoe.localtest.me:8443
> ```

### Image Tags

Images pushed to Gitea OCI registry must be tagged with the following naming convention: 

```
{registry}/{owner}/{image}
```

For example: `gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04`

This is a naming convention enforced by Gitea. Please see [the Gitea documentation](https://docs.gitea.com/usage/packages/container) for more information.


### Pulling Images

You can pull an image back to your local machine using your docker client like so:

```
docker pull gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04
```
#### No Pull Secret Needed
The Gitea instance allows for anonymous read access. This means that you can pull git repo contents and container images without logging in.


### Referencing Images In Manifests On The Idpbuilder K8s Cluster

You can create a pod or a deployment that references images in the local registry. For example, to create a pod:

```yaml
apiVersion: v1
kind: Pod
metadata:
  namespace: default
  name: debug-pod
spec:
  containers:
    - image: gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04
      name: debug-pod
      command:
        - sleep
        - "3600"
```

### Only Works with Subdomain Based Idpbuilder Installations
Right now because of the way the OCI registry specifications discovers information about a repo, this will only work with subdomain `gitea.cnoe.localtest.me`
based installations of idpbuilder's core capabilities.

If you would like to use path based routing, you will have to install and manage your own OCI registry at this time.
Other registries might be able to handle this better, however which registries and how to configure them is beyond the scope of this document.

For more info on the OCI registry spec and the root cause of this "discovery" issue see the spec here:
https://specs.opencontainers.org/distribution-spec/?v=v1.0.0#checking-if-content-exists-in-the-registry

### Pulling Images From Inside Idpbuilder K8s Cluster:

Because we are using an NGINX Ingress and pushing our image from off cluster,
Gitea and its OCI registry think all images pushed to it are prefixed with `gitea.cnoe.localtest.me:8443`.

This is correct by the OCI spec standards. However, when you are on the cluster, that ingress is not available to you.
You can use the service name of gitea, but gitea will not know what images are being asked for at the svc domain name. To work around this issue, we use containerd to rewrite those image names so that they can be referenced at the external url:

See [the Kind config](https://github.com/cnoe-io/idpbuilder/blob/main/pkg/kind/resources/kind.yaml.tmpl) for how this is done.
