---
sidebar_position: 1
description: What is CNOE?
title: What is CNOE?
---

# Cloud Native Operational Excellence (CNOE)

_( pronounced Kuh.noo )_

## What is CNOE?

Enterprises that adopt OSS as the foundation of their cloud platforms face the challenge of choosing technologies that will support their business outcomes for 3-5 years. The cost of retooling and re-platforming for large organizations is high, which makes bets on specific technologies fundamental to their technology strategies. In order to de-risk these bets, enterprises take into consideration the investments of their peer organizations. The goal for the CNOE framework is to bring together a cohort of enterprises operating at the same scale so that they can navigate their operational technology decisions together, de-risk their tooling bets, coordinate contribution, and offer guidance to large enterprises on which CNCF technologies to use together to achieve the best cloud efficiencies.

## Problem Statement

As software development processes have evolved, infrastructure and related tooling have become more and more fragmented and complex. Standalone tools (i.e., Spinnaker, Jenkins, CloudFormation) for operating in cloud-native environments are no longer effective for most customers on their own. While some of this is the nature of technology evolution and growth, a number of root causes are contributing to customers augmenting or replacing their existing tooling to address their larger-scale challenges.

1. The current tooling “standard” is a moving target. The size and scope of the CNCF landscape alongside the ever-increasing breadth of tools creates a paralyzation of choice. Customers are forced to adopt a wide-ranging array of tools with minimal direction and implement them in environment-specific ways, leading to a lack of consensus between customers. This also contributes to significant supportability and maintainability problems within the communities that govern those tools.

1. The definitions of traditional continuous integration and continuous delivery/deployment (CI/CD) have become blurry. Legacy systems have grown to be bloated and contributions have fallen behind in lieu of lighter more modern tools (i.e., ArgoCD, Flux, Tekton) that focus on newer paradigms like GitOps.

1. The advent and growth of declarative, centralized control planes for infrastructure (e.g. Kubernetes) creates an ecosystem that is fundamentally different and arguably inoperable with previous generation tooling. However, many application environments still expect (and will continue to expect) to interface with “traditional” virtual machine or bare metal based infrastructure points.

1. Developers’ core workflows have remained more-or-less the same over the past years, focused more on understanding the intricacies of a language or framework and implementing them using appropriate versioning and collaborative tooling. Many of the abstractions in `*-Ops` today were designed to accommodate differences in infrastructure, leading to a discontinuity between developers and delivery.

1. Fragmentation between software delivery and deployment methods have led to a multitude of languages, infrastructure as code platforms, templating engines, specs, and packaging systems. This creates an endless combination of non-portable software components that are difficult to reconcile into a singular application.

## Tenets 

The CNOE working group will operate based on the following tenets.

1. **Open source first**: use of open source technology is prioritized over proprietary technology for each of the technology verticals discussed later in the doc. This helps ensure alignment across all the participating members by allowing them to coordinate on collaborations while having the freedom to update and modify a given technology to their needs

1. **Community driven**: Decisions on the direction of the working group is driven by the community and its governing body. This involves the selection of technologies, level of commitment, and level of contribution.

1. **Tools and not Practices**: CNOE offers suggestions on which tools to use and with what configurations. What practices a given company builds around and above those tools is out of scope for CNOE.

1. **Powered by Kubernetes, but not limited to orchestrate to Kubernetes**: The CNOE working group relies heavily on the success of the CNCF community to choose technologies that are deemed useful to the type of operations required by the community. As such, Kubernetes is considered the de-facto environment to operate CNOE tooling. However, choosing of Kubernetes as the operating environment, does not require for it to be the environment to orchestrate against. Using the right infrastructure as code tooling, the CNOE community can choose to orchestrate against any compute platform of their choice. 

1. **Standardized to the infrastructure, customizable by the developers**: CNOE aims at addressing the usability requirements of its stakeholders. While the requirements of the platform could be enforced by the security engineers and infrastructure operators, the usability of it needs to be guaranteed by platform operators and application developers.

1. **Built to be shared**: All CNOE deliverables including the reference architecture and the deployment packages will be developed out in the open and by collaboration of all its participating members and with the goal of making it sharable and usable by the larger open source community of interest.

## What CNOE is not

1. not only a unified control plane but building blocks for them to expand and extend the unified control plane

1. not only a CI/CD tool but other components and capabilities that extend and enhance the integration and delivery of applications

1. not new technologies or set of managed services, but a way to interact and integrate. There is still an expectation that companies will need to fund and operate the various open source tools used within the IDP

1. not installers or proprietary packaging mechanisms. it will be fully open source and customizable and available to use by any one

1. not responsible for operationalizing of the toolchain. There is still an expectation that companies will need to fund and operate the various open source tools used within the IDP

## Who cares about CNOE? (Personas)

* **Application Developers:** Experts in writing business-logic-specific code to be consumed by “customers”. Familiar with traditional programming languages and frameworks with minimal interest in infrastructure components outside of the ones in-use for their applications.

* **Package Builders:** Experts in stitching together multiple components into reusable blueprints and delivering those as a service. Package builders are likely to “wrap” multiple infrastructure and application parts into singular deployables that can be leveraged by application developers.

* **Infrastructure Operators:** Experts in deployment and management of the infrastructure and platform components that provide the foundation to business applications. Familiar with infra-as-code primitives and automation/scripting languages, as well the fundamental characteristics of network, storage, and database. Also likely to have experience with application orchestration platforms and their underlying functionality.

* **Information Security Engineers (ISE):** Experts in applying and enforcing security and compliance best practices. ISE’s partner with package builders to approve production ready packages to be used across the organization. 


## Approach

CNOE takes a multitudinal and communal approach toward solving problems faced by DevOps teams. In order to address selection challenges within the fragmented and complex ecosystem of CNCF DevOps tooling, CNOE seeks community consensus on the categorical subdivision of delivery needs based on the size and scale of its users. This involves defining categories of tools deemed necessary for a successful DevOps strategy, as seen by the cohorts of users and based on the size of the company, the nature of the operation, and the type of workload. CNOE then endorses a set of tools in each category that when configured together, can deliver the top-of-the-line DevOps experience.

* **Pluggability and Extensibility:** Splitting a DevOps delivery strategy into subcategories with logical boundaries requires for CNOE to allow pluggability and extensibility for tools within each category. This means that CNOE needs to ensure and facilitate integration of tools from one category with tools from another category as part of its delivery pipeline. As a concrete example, assuming that users will have the option to choose between Tekton or Argo Workflows for their CI and Weaveworks Flux or Argo CD for their CD, any combination of tools from the two categories should effectively work within the context of CNOE. This helps reduce fragmentation while providing options for adoption. On the other hand, a list of CNOE-endorsed tools that fit the defined logical DevOps boundaries is aimed at better right-tooling of the delivery pipelines. This in turn reduces the complexity in selecting the right tools for the job and enabling CNOE users to get a compliant delivery pipeline up and running as quickly as possible.

* **Powered by but not limited to Kubernetes:** As discussed earlier, CNOE aims at simplifying selection, integration, and operation of DevOps tools available within the CNCF ecosystem. A question that may arise is whether CNOE assumes strong dependency to Kubernetes. Our take is that, while modern CNCF tools require Kubernetes to run on, they do not have to orchestrate resources and deployments against Kubernetes. This means that while users of CNOE assume dependency to Kubernetes for the operation of CNOE tool set, their workload does not need to be tied to Kubernetes. Within this context, using CNOE to deploy to discrete cloud platforms such as AWS Elastic Containers Service (ECS) or GCP Cloud Functions is a totally fair game.

* **Building Patterns and Tooling:** For seamless transition into a CNOE-compliant delivery pipeline, CNOE will aim at delivering "packaging specifications", "templating mechanisms", as well as "deployer technologies", an example of which is enabled via the [idpBuilder tool](reference-implementation/idpbuilder) we have released. The combination of templates, specifications, and deployers allow for bundling and then unpacking of CNOE recommended tools into a user's DevOps environment. This enables teams to share and deliver components that are deemed to be the best tools for the job.

    Modernizing a delivery pipeline according to CNOE guidelines then becomes the practice of devising a migration plan from the old set of tools used by an organization into the new set of tools endorsed by CNOE. This is another area where a community approach to endorsing, adhering to, and executing on CNOE-compliant delivery pipelines will be critical. For it to succeed, CNOE relies on commitments and contributions from its community members to develop and contribute migration plans and tools that empower transitioning from the legacy environments to the new environments.
