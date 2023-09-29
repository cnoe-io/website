---
sidebar_position: 2
description: Augmenting CNOE with terraform templates
title: Templating of Terraform Modules
---
The CNOE CLI supports integration of Terraform modules into the developer portal. 

## Template Generation

To generate Backstage template input fields from Terraform modules, you can use the `tf` subcommand. Usage is shown below. 

```bash
Generate backstage templates by walking the given input directory, find TF modules,then create output file per module.
If the templatePath and insertionPoint flags are set, generated objects are merged into the given template at given insertion point.
Otherwise a yaml file with two keys are generated. The properties key contains the generated form input. The required key contains the TF variable names that do not have defaults.

Usage:
  cnoe template tf [flags]

Flags:
  -h, --help   help for tf

Global Flags:
  -c, --colllapse             if set to true, items are rendered and collapsed as drop down items in a single specified template
      --depth uint32          depth from given directory to search for TF modules or CRDs (default 2)
  -i, --inputDir string       input directory for CRDs and XRDs to be templatized
  -p, --insertAt string       jq path within the template to insert backstage info (default ".spec.parameters[0]")
  -o, --outputDir string      output directory for backstage templates to be stored in
      --raww templatePath     prints the raw open API output without putting it into a template (ignoring templatePath and `insertAt`)
  -t, --templatePath string   path to the template to be augmented with backstage info
```

## Example

We can run the command against one of modules within the [Data on EKS](https://github.com/awslabs/data-on-eks) repository.

```bash
git clone https://github.com/awslabs/data-on-eks.git /tmp/data-on-eks

git clone https://github.com/cnoe-io/reference-implementation-aws.git /tmp/ref-impl

cnoe template tf \
  -i /tmp/data-on-eks/analytics/terraform/spark-k8s-operator \
  -t /tmp/ref-impl/examples/template-generation/data-on-eks.yaml \
  -p '.spec.parameters[0].properties.tfVars' \
  -o .
```

The `-i` flag specifies input Terraform module directory. In this example, the content looks like this: 

```bash
ls /tmp/data-on-eks/analytics/terraform/spark-k8s-operator
README.md              data.tf                karpenter-provisioners spark-team.tf
addons.tf              examples               main.tf                variables.tf
amp.tf                 helm-values            outputs.tf             versions.tf
cleanup.sh             install.sh             providers.tf           vpc.tf
```

The `-t` flag specifies the location of the partially configured template file. It may look something like this:

```yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
spec:
  parameters:
    - title: Terraform config options
      properties:
        tfVars: # this field is to be generated.
          title: Terraform variables
          type: object
    - title: Configuration Options
      properties:
        name:
          title: name of this entry
          type: string
        namespace:
          title: namespace within the kubernetes cluster to deploy this
          type: string
          default: data-on-eks
        adminRoleName: 
          title: Admin Role Name
          description: Name of the role to give the administrative rights on the EKS cluster.
          default: Admin
          type: string
        clusterName:
          title: Cluster to run
          description: The cluster to run this workflow in. 
          type: string
          ui:field: KubernetesClusterPicker
        repoUrl: # need a place to store this entity information.
          title: Repository Location
          type: string
          ui:field: RepoUrlPicker
          ui:options:
            allowedHosts:
              - github.com
...
```
This template contains input fields (`.spec.parameters[1]`) that are common to all Data on EKS blueprints. For example, the name of the admin IAM role that will have Cluster Admin access is common to all EKS clusters. The only difference between templates are the terraform configuration options field. We will populate this field with variables from a terraform module.

The `-p` flag specifies where you want to insert input field within the given template. In this case, we want to insert it at `.spec.parameters[0].properties.tfVars`.

The `-o` flag specifies the output directory. In this case, we want it to output it to the current directory.

Once the fields are generated and inserted, the template is ready to use. When rendered in Backstage, it should look something like this. 

![](../images/backstage-tf-input-field.png)


The diff between the original template and generated template should look something like this:

```bash
spec.parameters
  - one list entry removed:
    - title: "Terraform config options"
    │ properties:
    │ │ tfVars:
    │ │ │ type: object
    │ │ │ title: "Terraform variables"

  + one list entry added:
    - properties:
    │ │ tfVars:
    │ │ │ type: object
    │ │ │ title: "Terraform variables"
    │ │ │ properties:
    │ │ │ │ name:
    │ │ │ │ │ type: string
    │ │ │ │ │ default: spark-operator-doeks
    │ │ │ │ │ description: "Name of the VPC and EKS Cluster"
    │ │ │ │ eks_cluster_version:
    │ │ │ │ │ type: string
    │ │ │ │ │ default: 1.26
    │ │ │ │ │ description: "EKS Cluster version"
    │ │ │ │ enable_amazon_prometheus:
    │ │ │ │ │ type: boolean
    │ │ │ │ │ default: true
    │ │ │ │ │ description: "Enable AWS Managed Prometheus service"
    │ │ │ │ enable_vpc_endpoints:
    │ │ │ │ │ type: boolean
    │ │ │ │ │ default: false
    │ │ │ │ │ description: "Enable VPC Endpoints"
    │ │ │ │ enable_yunikorn:
    │ │ │ │ │ type: boolean
    │ │ │ │ │ default: true
    │ │ │ │ │ description: "Enable Apache YuniKorn Scheduler"
    │ │ │ │ region:
    │ │ │ │ │ type: string
    │ │ │ │ │ default: us-west-2
    │ │ │ │ │ description: Region
    │ │ │ │ vpc_cidr:
    │ │ │ │ │ type: string
    │ │ │ │ │ default: 10.1.0.0/16
    │ │ │ │ │ description: "VPC CIDR. This should be a valid private (RFC 1918) CIDR range"
    │ │ │ │ eks_data_plane_subnet_secondary_cidr:
    │ │ │ │ │ type: array
    │ │ │ │ │ description: "Secondary CIDR blocks. 32766 IPs per Subnet per Subnet/AZ for EKS Node and Pods"
    │ │ │ │ │ default:
    │ │ │ │ │ - 100.64.0.0/17
    │ │ │ │ │ - 100.64.128.0/17
    │ │ │ │ │ items:
    │ │ │ │ │ │ type: string
    │ │ │ │ private_subnets:
    │ │ │ │ │ type: array
    │ │ │ │ │ description: "Private Subnets CIDRs. 254 IPs per Subnet/AZ for Private NAT + NLB + Airflow + EC2 Jumphost etc."
    │ │ │ │ │ default:
    │ │ │ │ │ - 10.1.1.0/24
    │ │ │ │ │ - 10.1.2.0/24
    │ │ │ │ │ items:
    │ │ │ │ │ │ type: string
    │ │ │ │ public_subnets:
    │ │ │ │ │ type: array
    │ │ │ │ │ description: "Public Subnets CIDRs. 62 IPs per Subnet/AZ"
    │ │ │ │ │ default:
    │ │ │ │ │ - 10.1.0.0/26
    │ │ │ │ │ - 10.1.0.64/26
    │ │ │ │ │ items:
    │ │ │ │ │ │ type: string
    │ │ │ │ secondary_cidr_blocks:
    │ │ │ │ │ type: array
    │ │ │ │ │ description: "Secondary CIDR blocks to be attached to VPC"
    │ │ │ │ │ default:
    │ │ │ │ │ - 100.64.0.0/16
    │ │ │ │ │ items:
    │ │ │ │ │ │ type: string
    │ title: "Terraform config options"
```
