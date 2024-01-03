---
sidebar_position: 1
---

# Cloud Native Operational Excellence (CNOE)

_( pronounced Kuh.noo )_

## What is CNOE?

Enterprises that adopt OSS as the foundation of their cloud platforms face the challenge of choosing technologies that will support their business outcomes for 3-5 years. The cost of retooling and re-platforming for large organizations is high, which makes bets on specific technologies fundamental to their technology strategies. In order to de-risk these bets, enterprises take into consideration the investments of their peer organizations. The goal for the CNOE framework is to bring together a cohort of enterprises operating at the same scale so that they can navigate their operational technology decisions together, de-risk their tooling bets, coordinate contribution, and offer guidance to large enterprises which CNCF technologies use together to achieve the best cloud efficiencies.

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
