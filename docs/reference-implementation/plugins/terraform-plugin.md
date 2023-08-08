---
sidebar_position: 1
description: Enabling Infrastructure as Code
title: Terraform Plugin
---
# CNOE Terraform Backstage Plugin
:::note github repo
[cnoe-io/plugin-terraform](https://github.com/cnoe-io/plugin-terraform)
:::
## Getting Started

## Getting started

### Terraform State Files
This plugin supports two storage locations for Terraform state files (tfstate): S3 and local file systems. S3 will require additional configuration for AWS credentials to access S3. To access local file systems, the terraform backend will need proper file permissions to access those files.

### Configuration - Frontend

Entities must be annotated with Kubernetes annotations. An example component
would look like the following where you can configure the `spec` to your
liking. Information specific to Terraform goes under `annotations` as 
shown below:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: backstage
  annotations:
    terraform/s3-bucket: backstage-terraform-plugin
    terraform/s3-prefix: tfstates/
    terraform/local-filepath: /var/lib/tfstatefiles
spec:
  type: service
  lifecycle: experimental
  owner: user1
  system: system1
```

Update your Entity page. For example: 
```typescript
// in packages/app/src/components/catalog/EntityPage.tsx
import { TerraformPluginPage } from '@cnoe-io/plugin-terraform';
...
const terraFormContent = (
  <TerraformPluginPage />
);
...
const websiteEntityPage = (
  <EntityLayout>
  ...
    <EntityLayout.Route path="/terraform" title="Terraform">
      {terraFormContent}
    </EntityLayout.Route>
  </EntityLayout>
...  
);
```

#### Annotations
As shown in the example above, the following annotations could go under
`annotations` in the backstage `Component` and will be recognized by this plugin.

- One of the two annotations below are required:
- `terraform/s3-bucket`: Required. The S3 bucket where tfstate files would be stored.
- `terraform/local-filepath`: Required. The local file system path of where tfstate files would be stored.
- If storing tfstate files in S3, you can optionally define a prefix:
- `terraform/s3-prefix`: Optional. This is a S3 prefix of where tfstate files would be stored in the S3 bucket.

Note: The plugin only supports using one storage location at a time. If you define an S3 storage location and a local file system, the plugin will only use the S3 storage location.

### Configuration - Backend

Create a new file at `packages/backend/src/plugins/terraform.ts` with the following contents.

```typescript
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { createRouter } from '@cnoe-io/plugin-terraform-backend';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    logger: env.logger,
    config: env.config,
  });
}

```

In `packages/backend/src/index.ts`, import the function created above and create an endpoint for the backend.

```typescript
import ...
import terraform from './plugins/terraform';

...
const appEnv = useHotMemoize(module, () => createEnv('app'));
const terraformEnv = useHotMemoize(module, () => createEnv('terraform'));
...
apiRouter.use('/search', await search(searchEnv));
apiRouter.use('/terraform', await terraform(terraformEnv));
...
```



### Authentication

#### AWS Credentails

By default, the Terraform backend plugin relies on the [default behavior of the AWS SDK for Javascript](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/modules/_aws_sdk_credential_provider_node.html) to determine the AWS credentials that it uses to authenticate an identity to use with AWS APIs.

The Terraform backend plugin that runs in your Backstage app searches for credentials in the following order:

1. Environment variables (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`)
1. SSO credentials from the token cache
1. Web identity token credentials (including running in an Amazon EKS cluster using IAM roles for service accounts)
1. Shared credentials and config ini files (`~/.aws/credentials`, `~/.aws/config`)
1. Amazon Elastic Container Service (Amazon ECS) task metadata service
1. Amazon Elastic Compute Cloud (Amazon EC2) instance metadata service

We recommend that you don't hard-code long lived AWS credentials in your production Backstage application configuration. Hard-coding credentials is risky and might expose your access key ID and secret access key.

Instead, we recommend that you use short lived AWS credentials for your production Backstage application by deploying it to Amazon ECS, Amazon Elastic Kubernetes Service (Amazon EKS), or Amazon EC2. For more information about deploying Backstage to Amazon EKS using a Helm chart or to Amazon ECS on AWS Fargate using the AWS Cloud Development Kit (CDK), see [Deploying Backstage](https://backstage.io/docs/deployment/) in the Backstage documentation.

To use multiple AWS accounts with your Backstage app or to explicitly configure credentials for an AWS account, you can configure AWS accounts in your Backstage app's configuration.
For example, to configure an AWS account to use with the Terraform backend plugin which requires using an IAM role to retrieve credentials, add the following to your Backstage app-config.yaml file.

```yaml
aws:
  accounts:
    - accountId: '111111111111'
      roleName: 'my-iam-role-name'
```

For more account configuration examples, see the [Backstage integration-aws-node package documentation](https://www.npmjs.com/package/@backstage/integration-aws-node).

## IAM permissions

The Terraform backend plugin requires the AWS identity that it uses to have the following IAM permissions for getting tfstate files from S3:

* s3:GetObject
* s3:ListObjectsV2

