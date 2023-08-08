---
sidebar_position: 3
description: Enabling Big Data Workloads with Apache Spark
title: Apache Spark Plugin
---
# CNOE Apache Spark Backstage Plugin
:::note github repo
[cnoe-io/plugin-apache-spark](https://github.com/cnoe-io/plugin-apache-spark)
:::

## Getting started

![GIF](../images/spark.gif)


### Configuration

[The Kubernetes plugin](https://backstage.io/docs/features/kubernetes/) must also be installed and enabled.  

Entities must be annotated with Kubernetes annotations. An example component
would look like the following where you can configure the `spec` to your
liking. Information specific to your Spark Operator goes under `annotations` as
shown below:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: backstage
  annotations:
    backstage.io/kubernetes-namespace: default
    apache-spark.cnoe.io/label-selector: env=dev,my=label
spec:
  type: service
  lifecycle: experimental
  owner: user1
  system: system1
```

Update your Entity page. For example:
```typescript
// in packages/app/src/components/catalog/EntityPage.tsx

import {
  ApacheSparkPage
} from '@cnoe-io/plugin-apache-spark'

const serviceEntityPage = (
  <EntityLayout>

    ...

    <EntityLayout.Route path="/apache-spark" title="Spark">
      <ApacheSparkPage />
    </EntityLayout.Route>

    ...
  </EntityLayout>
)

```

#### Annotations
- `backstage.io/kubernetes-namespace`: Optional. Defaults to the `default` namespace.
- `apache-spark.cnoe.io/label-selector`: This value takes precedent over the one above.
- `apache-spark.cnoe.io/cluster-name`: Optional. Specifies the name of Kubernetes cluster to retrieve information from.

you can also use the `backstage.io/kubernetes-label-selector`, to select the
relevant spark jobs. However , `backstage.io/kubernetes-label-selector` is a
generic label selector used more widely by the Kubernetes plugin which could
pull other less relevant data pulled into your backstage deployment as well. We
recommend using `apache-spark.cnoe.io/label-selector` when using this plugin.

### Authentication

This plugin uses the Kubernetes plugin for authentication. 

#### Using configured Kubernetes API

The plugin uses configured Kubernetes clusters to fetch resources.

For example, for a Kubernetes cluster given in your `app-config.yaml`

```yaml
kubernetes:
  serviceLocatorMethod:
    type: "multiTenant"
  clusterLocatorMethods:
    - type: "config"
      clusters:
        - url: https://abcd.gr7.us-west-2.eks.amazonaws.com:443
          name: my-cluster-1
          authProvider: "serviceAccount"
          serviceAccountToken: eyJh
          caData: LS0t
```

For this configuration, the `apache-spark.cnoe.io/cluster-name` annotation value must be `my-cluster-1`. If this is not specified, the first cluster in the list is selected.

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: backstage
  annotations:
    backstage.io/kubernetes-namespace: default
    apache-spark.cnoe-io/label-selector: env=dev,my=label
    apache-spark.cnoe.io/cluster-name: my-cluster-1
spec:
  type: service
  lifecycle: experimental
  owner: user1
  system: system1
```
