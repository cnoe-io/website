---
sidebar_position: 1
description: utilizing CNOE with secrets
title: Secret Management
---

## External Secrets Operator

If your organization requires sensitive data to be stored in a secret store such as Vault and Secrets Manager, you may need a way to retrieve secrets from your secret store into your cluster. [External Secrets Operator](https://external-secrets.io/latest/introduction/overview/) is a Kubernetes Operator that fetches secrets from external APIs and creates Kubernetes secrets.

The reference implementation uses this operator to sync secrets between the cluster and AWS Secrets Manager. Information such as generated user password, Keycloak admin password, and database password are stored as an entity in AWS secrets manager. 

## TLS Certificates 

If you opted to use cert manager to manage certificates for you endpoints, certificates and their private keys are stored as Kubernetes secrets. If this does not meet your security standard, you can store it in a secret store of your choice, then use External Secrets Operator to sync it. An example manifest for Secrets Manager would look something like this. 

```yaml
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: backstage-prod-tls
  namespace: backstage
spec:
  refreshInterval: 12h
  secretStoreRef:
    name: keycloak
    kind: SecretStore
  target:
    name: backstage-prod-tls
    template:
      type: kubernetes.io/tls
      data:
        tls.crt: "{{ .public }}"
        tls.key: "{{ .private }}"
  data:
    - secretKey: private
      remoteRef:
        key: cnoe/tls/dev # path to the tls cert in Secrets Manager
        property: PRIVATE_KEY
    - secretKey: public
      remoteRef:
        key: cnoe/tls/dev
        property: CERT
```

When removing the reference implementation installation from your cluster, the uninstall script will back up the secrets to a local directory. This is to avoid re-issuing Let's Encrypt certificate for the same host because Let's Encrypt has a limit on how many times you can request certificates in a given time.

