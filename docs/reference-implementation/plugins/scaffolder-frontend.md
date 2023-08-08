---
sidebar_position: 3
description: Scaffolder Frontend
title: Scaffolder Frontend Plugin
---
# CNOE Scaffolder Frontend Plugin
:::note github repo
[cnoe-io/plugin-scaffolder-actions-frontend](https://github.com/cnoe-io/plugin-scaffolder-actions-frontend)
:::

## Kubernetes Cluster Picker

Allows you to display and select Kubernetes clusters configured in your Backstage configuration.

Optionally, you can extract user token to use against the selected cluster. 
Note that the target cluster and Kubernetes configuration in Backstage must support this.
This typically means you have to configure your cluster to accept a OIDC token and [client side authentication](https://backstage.io/docs/features/kubernetes/configuration#clustersoidctokenprovider-optional) must be configured in Backstage.

### Configuration

```tsx
// in packages/app/src/App.tsx

const routes = (
  ...
  <Route path="/create" element={<ScaffolderPage />}>
    <ScaffolderFieldExtensions>
      <KubernetesClusterPickerExtension />
    </ScaffolderFieldExtensions>
  </Route>  
  ...  
)
```

### Usage

The plugin adds `KubernetesClusterPicker` as an available UI field option. 

- `requestUserCredentials` Optional. Requests the user's token for use for the target cluster.
- `allowedClusters` Optional. Specifies which clusters the user use with this template.

Example usage:

```yaml
# In your scaffolder template
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
spec:
  parameters:
    - title: Enter some details
      properties:
        clusterName:
          title: Name of the cluster to deploy manfiest into.
          type: string
          ui:field: KubernetesClusterPicker
          ui:options:
            allowedClusters:
              - cluster-1
              - cluster-2
            requestUserCredentials:
              secretKey: MY_TOKEN
    - id: fetch-base
      name: Fetch Base
      action: fetch:template
      input:
        url: ./templates
        values:
          token: ${{ secrets.MY_TOKEN }}
```

In the above example, the users will be presented with a choice of two clusters, `cluster-1` and `cluster-2`.

It also specified `requestUserCredentials`. This means the plugin will attempt to retrieve user token for the cluster, then store it in the template secret field called `MY_TOKEN`.

This token is then used in the next step by referencing the token value with `${{ secrets.MY_TOKEN }}`

