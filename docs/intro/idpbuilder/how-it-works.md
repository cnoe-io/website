---
sidebar_position: 2
description: idpbuilder Fundamentals
title: idpbuilder Fundamentals
index: 2
---

## Security

### Self Signed Certificate

To ensure applications inside the cluster can talk to other services, idpbuilder creates a self-signed TLS certificate. The certificate is a wild card certificate 
for the domain name and any subdomains given by the `--host` flag. 
For example, if you use the default domain name `cnoe.localtest.me` the certificate is issued for `cnoe.localtest.me` and `*.cnoe.localtest.me`

This certificate is then used by ingress-nginx as [the default TLS certificate](https://kubernetes.github.io/ingress-nginx/user-guide/tls/#default-ssl-certificate_. This means you can override TLS certificate used at ingress level if desired.

The certificate is also [imported to ArgoCD](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#repositories-using-self-signed-tls-certificates-or-are-signed-by-custom-ca) as one of trusted CAs. This is necessary to make sure ArgoCD can talk to Gitea services without disabling TLS.

Finally, the certificate is exposed as a secret named `idpbuilder-cert` in the default namespace. To retrieve it, run the following command:

```bash
$ kubectl get secret -n default idpbuilder-cert
```
### Getting Relevant Secrets

The `idpbuilder get secrets` command retrieves the following:
- ArgoCD initial admin password.
- Gitea admin user credentials.
- Any secrets labeled with `cnoe.io/cli-secret=true`.

You can think of the command as executing the following kubectl commands:

  ```bash
  $ kubectl -n argocd get secret argocd-initial-admin-secret
  $ kubectl get secrets -n gitea gitea-admin-secret
  $ kubectl get secrets -A -l cnoe.io/cli-secret=true
  ```

If you want to retrieve secrets for a package, you can use the `-p` flag. To get secrets for a package named `gitea`: 

  ```bash
  $ idpbuilder get secrets -p gitea
  ```

For the `-p` flag to work, you must label the secret with `cnoe.io/package-name`. 
For example, to make secret values available in a secret named `my-secret` for a package named `foo`:

  ```bash
  $ kubectl label secret my-secret "cnoe.io/package-name=foo" "cnoe.io/cli-secret=true"
  ```

The secret will then be listed when issuing the `idpbuilder get secrets` command.
Alternatively, you can use the following command to retrieve the individual secret:

```
idpbuilder get secrets -p foo
```

## Networking

### Traffic Flow
The default Docker-on-Linux configuration for kind cluster establishes the following setup:

* A Kubernetes node runs as a Docker container with port 443 mapped to host port 8443. You can confirm this by running ```docker container ls```
* The ingress-nginx service is configured as NodePort mode, listening on port 443. You can confirm this by running ```kubectl get service -n ingress-nginx ingress-nginx-controller```

When a request is made to https://gitea.cnoe.localtest.me:8443, the traffic flow follows this sequence:

1. The domain name resolves to the local loopback address
2. A request is sent to ```127.0.0.1:8443``` with the host header ```gitea.cnoe.localtest.me:8443```
3. The request is forwarded to container port 443
4. Ingress-nginx examines the SNI and host header to route traffic to the Gitea service
5. Gitea processes the request and returns a response
![img.png](././images/idpbuilder-dns.png)
### DNS Configuration
#### External DNS Resolution
By default, idpbuilder uses ```cnoe.localtest.me``` as the base domain for exposing services like ArgoCD and Gitea. The ```localtest.me``` domain and its subdomains automatically resolve to the local loopback address, providing a consistent naming scheme without requiring localhost. For more details, visit [the localtest.me documentation](https://readme.localtest.me/).

#### In-cluster DNS Configuration
To ensure proper name resolution both inside and outside the cluster, idpbuilder configures the cluster's CoreDNS service. While the default domain (cnoe.localtest.me) resolving to ```127.0.0.1``` works for external access through the NodePort service, it creates challenges for in-cluster communication.

For example, when an ArgoCD pod tries to access ```gitea.cnoe.localtest.me```, the address would resolve to the pod's own loopback interface ```127.0.0.1```. To address this, idpbuilder configures CoreDNS with rewrite rules like:

```
rewrite name gitea.cnoe.localtest.me ingress-nginx-controller.ingress-nginx.svc.cluster.local
```

This CoreDNS rewrite rule instructs CoreDNS to resolve requests made for ```gitea.cnoe.localtest.me``` using the address given by ```ingress-nginx-controller.ingress-nginx.svc.cluster.local```


## Routing Modes

idpbuilder supports two modes of routing requests to in-cluster resources: domain-based and path-based.
The behavior is configured with the `--use-path-routing` flag, which defaults to `false`.

### Domain-based routing

This is the default behavior of idpbuilder. In this mode, services are exposed under their own domain names.
For example:
- ArgoCD UI is accessed via `https://argocd.cnoe.localtest.me`
- Gitea UI is accessed via `https://gitea.cnoe.localtest.me`

This approach is generally cleaner and offers more flexible routing options because it requires less complex ingress configurations.

### Path-based routing

When you use the `--use-path-routing` flag, idpbuilder configures all services under a single domain name, with routing based on path parameters.
For example:
- ArgoCD UI is accessed via `https://cnoe.localtest.me/argocd`
- Gitea UI is accessed via `https://cnoe.localtest.me/gitea`

This is useful when you are constrained to using a single domain name and cannot use subdomains.
A good example is when using GitHub Codespaces. When [forwarding ports](https://docs.github.com/en/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace) in Codespaces, you are given a single domain name (like `wild-broomstick-abc.github.dev`) to reach all services running in your codespace.
In such situations, you cannot use subdomains (e.g., `argocd.wild-broomstick-abc.github.dev` would not work), making path-based routing the appropriate choice.

## Local OCI Registry

The local Gitea instance created by idpbuilder contains a built-in OCI registry for hosting container images as "packages" in Gitea nomenclature. It is a standard OCI registry, so the API should be compatible with any tools that are OCI compliant. That includes the `docker` cli.

### Pushing image

```bash
$ docker login gitea.cnoe.localtest.me:8443                                          
# see the note section below for retrieving your password.
Username: giteaAdmin
Password: 

$ docker pull docker.io/library/ubuntu:24.04 
# default way
$ docker tag docker.io/library/ubuntu:24.04 gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04
$ docker push gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04

# Pushing image using path based routing. You can also use the OCI registry with path based routing mode (the `--use-path-routing` flag)
# docker tag docker.io/library/ubuntu:24.04 cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04
# docker push cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04

```bash
 **NOTE**: You can get the giteaAdmin password in the same way as you do for the web or git interface.
 $ idpbuilder get secrets -p gitea
 
 Or you can use this to login directly:
 
 $ idpbuilder get secrets -p gitea -o json | \
   jq '.[0].data.password' -r | \
   docker login -u giteaAdmin --password-stdin gitea.cnoe.localtest.me:8443
 ```

### Tagging Image 

Images pushed to Gitea OCI registry must be tagged with the following naming convention: 

```bash
{registry}/{owner}/{image}
```

For example: `gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04`

This is a naming convention enforced by Gitea. Please see [the Gitea documentation](https://docs.gitea.com/usage/packages/container) for more information.


### Pulling Images

You can pull an image back to your local machine using your docker client like so:

``` bash
$ docker pull gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.04
```
#### No Pull Secret Needed
The Gitea instance allows for anonymous read access. This means that you can pull git repo contents and container images without logging in.

### Referencing Images In Manifests On The Idpbuilder K8s Cluster

You can create a pod or a deployment that references images in the local registry. For example, to create a pod:

``` yaml
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

### Pulling Images From Inside Idpbuilder K8s Cluster:

Because we are using an NGINX Ingress and pushing our image from off cluster,
Gitea and its OCI registry think all images pushed to it are prefixed with `gitea.cnoe.localtest.me:8443`.

This is correct by the OCI spec standards. However, when you are on the cluster, that ingress is not available to you.
You can use the service name of gitea, but gitea will not know what images are being asked for at the svc domain name. To work around this issue, we use containerd to rewrite those image names so that they can be referenced at the external url:

See [the Kind config](https://github.com/cnoe-io/idpbuilder/blob/main/pkg/kind/resources/kind.yaml.tmpl) for how this is done.

### Transferring images from remote registries to idbpbuilder

Now that you have a registry up and running at `cnoe.localtest.me:8443` you can copy your images to it. This is especially convenient if you want to pre-load a number of images from some remote before going offline. You can also use this technique to load images into codespaces that are behind a corporate firewall.

To make this even easier, you can use a tool like [ORAS](https://oras.land) or [regclient](https://github.com/regclient/regclient) to copy between them. These tools are beyond the scope of this help document, but at the time of this writing a simple copy command using regclient looks like:

```bash
$ regctl registry login cnoe.localtest.me:8443               
Enter Username [giteaadmin]: giteaadmin
Enter Password:

$ regctl registry set cnoe.localtest.me:8443 --tls=insecure
time=2024-12-29T21:50:58.354-05:00 level=WARN msg="Changing TLS settings for registry" orig=enabled new=insecure host=cnoe.localtest.me:8443

$ regctl image copy docker.io/library/alpine:latest cnoe.localtest.me:8443/gitea/giteaadmin/alpine:latest
time=2024-12-29T21:50:07.489-05:00 level=WARN msg="Changing TLS settings for registry" orig=enabled new=disabled host=expert-chainsaw-7vjwj6qqgcprjp-8443.app.github.dev
time=2024-12-29T21:50:07.489-05:00 level=WARN msg="Changing TLS settings for registry" orig=enabled new=insecure host=cnoe.localtest.me:8443
Manifests: 17/17 | Blobs: 0.000B copied, 0.000B skipped | Elapsed: 0s
cnoe.localtest.me:8443/gitea/giteaadmin/alpine:latest
```