---
sidebar_position: 1
description: Set up IDP on Local Machine 
title: Set up IDP on Local Machine
index: 1
---

## About

:::tip GitHub Repo
[cnoe-io/idpbuilder](https://github.com/cnoe-io/idpbuilder)
:::


## Introduction
idpBuilder is a powerful tool that enables you to easily spin up a complete internal developer platform (IDP) on your local machine. 

Go to [idpbuilder Overview page](/docs/intro/idpbuilder) to get more details on the concepts.

## Running ipdbuilder in local machine

A container engine is needed locally. 
* [Docker desktop](https://www.docker.com/get-started/) is supported. 
* [Podman desktop](https://podman-desktop.io/) is not supported however idpbuilder can create a cluster using [rootful](https://docs.podman.io/en/latest/markdown/podman-machine-set.1.html#rootful). You need tp set the `DOCKER_HOST` env var property using `podman` to let idpbuilder to talk with the engine (e.g  ```export DOCKER_HOST="unix:///var/run/docker.sock"```)

**Option 1: Using Bash Script**

You can execute the following bash script to get started with a running version of the idpBuilder (inspect the script first if you have concerns):


``` bash
$ curl -fsSL https://raw.githubusercontent.com/cnoe-io/idpbuilder/main/hack/install.sh | bash
```


verify a successful installation by running the following command and inspecting the output for the right version:

```bash
$ idpbuilder version
```

**Option 2: Manual installation**

You can run the following commands for a manual installation:
```bash
$ version=$(curl -Ls -o /dev/null -w %{url_effective} https://github.com/cnoe-io/idpbuilder/releases/latest)
$ version=${version##*/}
$ curl -L -o ./idpbuilder.tar.gz "https://github.com/cnoe-io/idpbuilder/releases/download/${version}/idpbuilder-$(uname | awk '{print tolower($0)}')-$(uname -m | sed 's/x86_64/amd64/').tar.gz"

$ tar xzf idpbuilder.tar.gz

$ ./idpbuilder version
# example output
# idpbuilder 0.4.1 go1.21.5 linux/amd64
```

**Option 3: Release page binary**

The easiest way to get started is to grab the idpbuilder binary for your platform and run it. You can visit our nightly releases page to download the version for your system, or run the following commands:

```bash
$ arch=$(if [[ "$(uname -m)" == "x86_64" ]]; then echo "amd64"; else uname -m; fi)
$ os=$(uname -s | tr '[:upper:]' '[:lower:]')

$ idpbuilder_latest_tag=$(curl --silent "https://api.github.com/repos/cnoe-io/idpbuilder/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')

$ curl -LO  https://github.com/cnoe-io/idpbuilder/releases/download/$idpbuilder_latest_tag/idpbuilder-$os-$arch.tar.gz

$ tar xvzf idpbuilder-$os-$arch.tar.gz
```

## Running ipdbuilder in Codespaces

You can run idpbuilder in [Codespaces](https://github.com/features/codespaces).

Create a Codespaces instance. ![img](./images/codespaces-create.png)
1. Wait for it to be ready. It may take several minutes.
1. Get the latest release of idpbuilder:
   ```bash
    $ version=$(curl -Ls -o /dev/null -w %{url_effective} https://github.com/cnoe-io/idpbuilder/releases/latest)
    $ version=${version##*/}
    $ curl -L -o ./idpbuilder.tar.gz "https://github.com/cnoe-io/idpbuilder/releases/download/${version}/idpbuilder-$(uname | awk '{print tolower($0)}')-$(uname -m | sed 's/x86_64/amd64/').tar.gz"
    $ tar xzf idpbuilder.tar.gz
   ```
1. Run idpbuilder:
   ``` bash
    $ idpbuilder create --protocol http  \
    --host ${CODESPACE_NAME}-8080.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN} \
    --port 8080 --use-path-routing
   ```
1. Because Codespaces gives a single externally routable host name for an instance, idpbuilder must deploy with path based routing.
   This means ArgoCD and Gitea UIs are given with the following commands.
    * ArgoCD: `echo https://${CODESPACE_NAME}-8080.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/argocd`
    * Gitea: `echo https://${CODESPACE_NAME}-8080.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/gitea`

   **Note that not all examples work with path based routing.** 

<details>
  <summary>Codespaces tips and tricks</summary>

### Codespaces tips and tricks

 By default all port forwarding in a Codespace environment is private which means that you will not be able to access the OCI registry directly from your local machine's CLI.

You can however use the github CLI to port-forward a port on your local machine to the codespace which is running the OCI registry and listening on port 8443.

To do this, make sure you have the latest github cli installed. Instructions here: [https://github.com/cli/cli#installation] (https://github.com/cli/cli#installation)

Next you will need to login to github and give your CLI access to the codespace:

```bash
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
$ docker tag alpine:latest cnoe.localtest.me:8443/gitea/giteaadmin/alpine:latest
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
$ docker pull cnoe.localtest.me:8443/gitea/giteaadmin/alpine:latest
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
</details>