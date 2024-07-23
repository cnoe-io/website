---
sidebar_position: 1
description: launch the CNOE IDP with a single binary 
title: IDPBuilder on Local Machine
index: 1
---

## About

:::tip GitHub Repo

[cnoe-io/idpbuilder](https://github.com/cnoe-io/idpbuilder)
:::



> **WORK IN PROGRESS**: This tool is in a pre-release stage and is under active development.

Spin up a complete internal developer platform using industry standard technologies like Kubernetes, Argo, and backstage with only Docker required as a dependency.

This can be useful in several ways:
* Create a single binary which can demonstrate an IDP reference implementation.
* Use within CI to perform integration testing.
* Use as a local development environment for IDP engineers.


## Running in Codespaces

If you are interested in running idpbuilder in Codespaces through your browser, follow the following steps.

1. Create a Codespaces instance. ![img](https://github.com/cnoe-io/stacks/blob/main/ref-implementation/images/codespaces-create.png)
2. Wait for it to be ready. It may take several minutes.
3. Get the latest release of idpbuilder:
   ```bash
    version=$(curl -Ls -o /dev/null -w %{url_effective} https://github.com/cnoe-io/idpbuilder/releases/latest)
    version=${version##*/}
    curl -L -o ./idpbuilder.tar.gz "https://github.com/cnoe-io/idpbuilder/releases/download/${version}/idpbuilder-$(uname | awk '{print tolower($0)}')-$(uname -m | sed 's/x86_64/amd64/').tar.gz"
    tar xzf idpbuilder.tar.gz
   ```
4. Run idpbuilder:
   ```
    idpbuilder create --protocol http  \
    --host ${CODESPACE_NAME}-8080.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN} \
    --port 8080 --use-path-routing
   ```
5. Because Codespaces gives a single externally routable host name for an instance, idpbuilder must deploy with path based routing. 
   This means ArgoCD and Gitea UIs are given with the following commands.
   * ArgoCD: `echo https://${CODESPACE_NAME}-8080.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/argocd`
   * Gitea: `echo https://${CODESPACE_NAME}-8080.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}/gitea`
6. Note that not all examples work with path based routing. 

## Extending the IDP builder

We are actively working to include more patterns and examples of extending idpbuilder to get started easily.
