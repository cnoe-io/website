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

### Pulling Images From Inside Idpbuilder K8s Cluster:

Because we are using an NGINX Ingress and pushing our image from off cluster,
Gitea and its OCI registry think all images pushed to it are prefixed with `gitea.cnoe.localtest.me:8443`.

This is correct by the OCI spec standards. However, when you are on the cluster, that ingress is not available to you.
You can use the service name of gitea, but gitea will not know what images are being asked for at the svc domain name. To work around this issue, we use containerd to rewrite those image names so that they can be referenced at the external url:

See [the Kind config](https://github.com/cnoe-io/idpbuilder/blob/main/pkg/kind/resources/kind.yaml.tmpl) for how this is done.


### Codespaces tips and tricks ###

By default all port forwarding in a Codespace environment is private which means that you will not be able to access the OCI registry directly from your local machine's CLI.

You can however use the github CLI to port-forward a port on your local machine to the codespace which is running the OCI registry and listening on port 8443.

To do this, make sure you have the latest github cli installed. Instructions here: [https://github.com/cli/cli#installation] (https://github.com/cli/cli#installation)

Next you will need to login to github and give your CLI access to the codespace:

```
$ gh auth login -h github.com -s codespace
```

Follow the prompts to perform the auth via your local machine's browser and make sure to choose the codespace you are running idpbuilder in.

```bash
$ gh auth login -h github.com -s codespace
! First copy your one-time code: 0076-1071
Press Enter to open https://github.com/login/device in your browser... 
Opening in existing browser session.
✓ Authentication complete.
```

List the ports on your codespace:

```bash
$ gh codespace ports
? Choose codespace: cnoe-io/idpbuilder [main*]: expert chainsaw
LABEL  PORT   VISIBILITY  BROWSE URL                                                 
       8443   private     https://expert-chainsaw-7vjwj6qqgcprjp-8443.app.github.dev
       37065  private     https://expert-chainsaw-7vjwj6qqgcprjp-37065.app.github.dev
```

Then perform the port-forward. Make sure to use the same port that the codespace has listed in it's port column. Likely this is 8443 which is the default at the time of this writing.

```bash
$ gh codespace ports forward 8443:8443 -c expert-chainsaw-7vjwj6qqgcprjp
```

If you see a message like the following then you may already have another service on your local machine that is listening on 8443. Make sure to shut it down. (Maybe you were running idpbuilder locally as well?)

```
failed to listen to local port over tcp: listen tcp :8443: bind: address already in use
```

Once you have setup the port-forward you will see the following:

```bash
$ gh codespace ports forward 8443:8443 -c expert-chainsaw-7vjwj6qqgcprjp
Forwarding ports: remote 8443 <=> local 8443
```

You can now connect directly to the registry hosted on idpbuilder in your codespace environment.

```bash
$ docker login cnoe.localtest.me:8443/gitea                            
Authenticating with existing credentials...
Stored credentials invalid or expired
Username (giteaAdmin): giteaadmin
Password: 
WARNING! Your password will be stored unencrypted in /home/sanforj/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/#credential-stores

Login Succeeded
```

**IMPORTANT!** As you may have noticed, you must use `cnoe.localtest.me:8443` (or whatever port number was listed) as the registry name.

This will allow for compatibility with the oci clients that are working in the codespace as well as those that are running on the idpbuilder kubernetes cluster.
As long as you tag your images and push them to `cnoe.localtest.me:8443/gitea/giteaadmin/imagename:tag` they will be able to be referenced on your local machine, on the cli within the codespace and on the idbpuilder k8s cluster at that same registry/repo/imagename:tag location.

#### Example mirroring Alpine image
So to be clear. On your local machine you have to tag your images appropriately like so:

```bash
docker tag alpine:latest cnoe.localtest.me:8443/gitea/giteaadmin/alpine:latest
```

Then you can push once your port-forwarding is working:

```bash
$ docker push cnoe.localtest.me:8443/gitea/giteaadmin/alpine:latest
The push refers to repository [cnoe.localtest.me:8443/gitea/giteaadmin/alpine]
3e01818d79cd: Layer already exists 
latest: digest: sha256:fa7042902b0e812e73bbee26a6918a6138ccf6d7ecf1746e1488c0bd76cf1f34 size: 527
```

Then on the cli inside your codespace you can pull it:

```bash
docker pull cnoe.localtest.me:8443/gitea/giteaadmin/alpine:latest
latest: Pulling from gitea/giteaadmin/alpine
Digest: sha256:fa7042902b0e812e73bbee26a6918a6138ccf6d7ecf1746e1488c0bd76cf1f34
Status: Image is up to date for cnoe.localtest.me:8443/gitea/giteaadmin/alpine:latest
cnoe.localtest.me:8443/gitea/giteaadmin/alpine:latest
```

And when you run an image in your idpbuilder k8s cluster just make sure to reference it at the same location:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: alpine-from-local-registry
spec:
  containers:
  - name: alpine-from-local-registry
    image: cnoe.localtest.me:8443/gitea/giteaadmin/alpine:latest
  restartPolicy: Never
```

### Transferring images from remote registries to idbpbuilder

Now that you have a registry up and running at `cnoe.localtest.me:8443` you can copy your images to it.

This is especially convenient if you want to pre-load a number of images from some remote before going offline.

You can also use this technique to load images into codespaces that are behind a corporate firewall.

To make this even easier, you can use a tool like [ORAS](https://oras.land) or [regclient](https://github.com/regclient/regclient) to copy between them

These tools are beyond the scope of this help document, but at the time of this writing a simple copy command using regclient looks like:

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
