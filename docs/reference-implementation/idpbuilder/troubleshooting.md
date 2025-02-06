---
sidebar_position: 6
description: Troubleshooting
title: Troubleshooting
index: 6
---

## Podman support

idpBuilder comes with experimental support for [Podman](https://podman.io/). 
Although idpbuilder seems to work well with podman, we currently do not have end-to-end tests or a guarantee.

To get started with Podman on MacOS, run the following:

```bash
# create a local Linux VM
podman machine init 
podman machine start

# KIND_EXPERIMENTAL_PROVIDER instructs Kind to use podman as its provider
KIND_EXPERIMENTAL_PROVIDER=podman idpbuilder create
```

### Podman rootless

As of podman 5.0.0, it defaults to rootless mode. idpbuilder's core packages do not require root privileges, however you may need to run it in rootful mode depending on your use cases.
If you need rootful behaviours, run the following command: 

```bash
# verify if you are running rootful or rootless
podman machine inspect | jq '.[0].Rootful'
# https://docs.podman.io/en/stable/markdown/podman-machine-set.1.html
podman machine set --rootful
```

### Missing Kernel modules

In some environment such as RHEL 9, idpbuilder may fail with the following error message:

```
Failed to create pod sandbox: rpc error: code = Unknown desc = failed to setup network for sandbox "": plugin type="portmap" failed (add): unable to create chain CNI-HOSTPORT-SETMARK: failed to list iptables chains: running [/usr/sbin/iptables -t nat -S --wait]: exit status 3: modprobe: ERROR: could not insert 'ip_tables': Operation not permitted
iptables v1.8.9 (legacy): can't initialize iptables table `nat': Table does not exist (do you need to insmod?)

```

You may need to enable the ip_table module.

```bash
# check if ip_table is enabled
lsmod | grep ip_table
# if not, enable it.
sudo modprobe ip_tables
echo 'ip_tables' | sudo tee -a /etc/modules-load.d/ip_tables.conf
# verify it's activated
lsmod | grep ip_table
```

## Gitea OCI registry

When using the Gitea OCI registry, you may run into issues where your client cannot pull or push images to the registry.

```
podman pull gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.08
Trying to pull gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.08...
Error: initializing source docker://gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.08: reading manifest 24.08 in gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu: manifest unknown
```

You may need to tell your client to not verify TLS, because the TLS certificate is self-signed and generated every time a new cluster is created.

```
# use the --tls-verify=0 flag if you are using podman
podman pull gitea.cnoe.localtest.me:8443/giteaadmin/ubuntu:24.08 --tls-verify=0
```
