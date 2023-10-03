---
sidebar_position: 3
description: Scaffolder Backend
title: Scaffolder Backend Plugin
---
# CNOE Scaffolder Backend Plugin

:::note github repo
[cnoe-io/plugin-scaffolder-actions](https://github.com/cnoe-io/plugin-scaffolder-actions)
:::
## Getting Started

Add to your Backstage app.
```bash
# From your Backstage root directory
yarn add --cwd packages/backend @cnoe-io/scaffolder-actions-plugin
```
```bash
# To be able to keep using the built-in actions.
yarn add --cwd packages/backend @backstage/integration
```

Append it to your existing actions in `packages/backend/src/plugins/scaffolder.ts`
```typescript
import { CatalogClient } from '@backstage/catalog-client';
import { createRouter, createBuiltinActions } from '@backstage/plugin-scaffolder-backend';
import { ScmIntegrations } from '@backstage/integration';
import { Router } from 'express';
import type { PluginEnvironment } from '../types';
import {
  createSanitizeResource,
  createVerifyDependency,
  createKubernetesApply,
} from "@cnoe-io/scaffolder-actions";

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const catalogClient = new CatalogClient({ discoveryApi: env.discovery });
  const integrations = ScmIntegrations.fromConfig(env.config);

  const builtInActions = createBuiltinActions({
    integrations,
    catalogClient,
    config: env.config,
    reader: env.reader,
  });
  
  const cnoeActions = [
    createSanitizeResource(),
    createVerifyDependency(),
    createKubernetesApply(env.config),
  ]

  const actions = [
      ...builtInActions,
      ...cnoeActions,
  ]

  return await createRouter({
    actions,
    catalogClient,
    logger: env.logger,
    config: env.config,
    database: env.database,
    reader: env.reader,
    identity: env.identity,
  });
}
```

Done! You can now use any of the action in your software templates.
```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: hello-world-on-kubernetes
  title: Hello World on Kubernetes
spec:
  steps:
    - id: sanitize-resource
      name: Sanitize Resource
      action: cnoe:utils:sanitize
      input:
        resource: ${{ serialize.output }}
```

## List of Actions

Here is a list of running actions.

| Action                 | id                     | Description                                                                                               |
|------------------------|------------------------|-----------------------------------------------------------------------------------------------------------|
| createKubernetesApply  | `cnoe:kubernetes:apply`  | Apply Kubernetes manifest to a template                             |
| createVerifyDependency | `cnoe:verify:dependency` | Verify resource dependencies for CNOE                              |
| createSanitizeResource | `cnoe:utils:sanitize`    | Sanitize resources (remove empty fields) before further processing |

For more detailed information about these actions, go to `/create/actions` endpoint of your Backstage instance after installing these actions. 
If you are running this locally, the endpoint should be `http://localhost:3000/create/actions`
