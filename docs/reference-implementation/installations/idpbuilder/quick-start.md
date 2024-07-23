---
sidebar_position: 1
description: Quick Start
title: Quick Start
index: 1
---

## Prerequisites

A container engine is needed locally, such as:

| Name                                                  | Supported | Remark                                                                                                                              |
|-------------------------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------|
| [Docker desktop](https://www.docker.com/get-started/) | Yes       |                                                                                                                                     |
| [Podman desktop](https://podman-desktop.io/)          | No        | idpbuilder can create a cluster using podman [rootful](https://docs.podman.io/en/latest/markdown/podman-machine-set.1.html#rootful) | 
| [Finch](https://runfinch.com/)          | No        || 


**Note**: Set the `DOCKER_HOST` env var property using `podman` to let idpbuilder to talk with the engine (e.g  export DOCKER_HOST="unix:///var/run/docker.sock")

## Quick Start


<!-- you can either use `brew` to install `idpBuilder` as suggested below: -->
<!---->
<!-- :::tip brew install -->
<!---->
<!-- ``` -->
<!-- brew tap cnoe-io/tap -->
<!-- brew install cnoe-io/tap/idpbuilder -->
<!-- ``` -->
<!---->
<!-- ::: -->

You can execute the following bash script to get started with a running version of the idpBuilder (inspect the script first if you have concerns):

:::warning

```
curl -fsSL https://raw.githubusercontent.com/cnoe-io/idpbuilder/main/hack/install.sh | bash
```
:::

verify a successful installation by running the following command and inspecting the output for the right version:

```
idpbuilder version
```

Alternatively, you can run the following commands for a manual installation:
```bash
version=$(curl -Ls -o /dev/null -w %{url_effective} https://github.com/cnoe-io/idpbuilder/releases/latest)
version=${version##*/}
curl -L -o ./idpbuilder.tar.gz "https://github.com/cnoe-io/idpbuilder/releases/download/${version}/idpbuilder-$(uname | awk '{print tolower($0)}')-$(uname -m | sed 's/x86_64/amd64/').tar.gz"
tar xzf idpbuilder.tar.gz

./idpbuilder version
# example output
# idpbuilder 0.4.1 go1.21.5 linux/amd64
```

Or, you can download the latest binary from [the release page](https://github.com/cnoe-io/idpbuilder/releases/latest).


## Running in Codespaces

You can run idpbuilder in [Codespaces](https://github.com/features/codespaces).

Create a Codespaces instance. ![img](./images/codespaces-create.png)
1. Wait for it to be ready. It may take several minutes.
1. Get the latest release of idpbuilder:
   ```bash
    version=$(curl -Ls -o /dev/null -w %{url_effective} https://github.com/cnoe-io/idpbuilder/releases/latest)
    version=${version##*/}
    curl -L -o ./idpbuilder.tar.gz "https://github.com/cnoe-io/idpbuilder/releases/download/${version}/idpbuilder-$(uname | awk '{print tolower($0)}')-$(uname -m | sed 's/x86_64/amd64/').tar.gz"
    tar xzf idpbuilder.tar.gz
   ```
1. Run idpbuilder:
   ```
    idpbuilder create --protocol http  \
    --host ${CODESPACE_NAME}-8080.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN} \
    --port 8080 --use-path-routing
   ```
1. Because Codespaces gives a single externally routable host name for an instance, idpbuilder must deploy with path based routing.
   This means ArgoCD and Gitea UIs are given with the following commands.
    * ArgoCD: `echo https://${CODESPACE_NAME}-8080.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/argocd`
    * Gitea: `echo https://${CODESPACE_NAME}-8080.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/gitea`

   **Note that not all examples work with path based routing.** 
