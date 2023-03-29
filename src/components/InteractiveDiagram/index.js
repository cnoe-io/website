import React from 'react';
import clsx from 'clsx';
import styles from "./styles.module.css";

const { useState } = React;

export default function InteractiveDiagram() {
  // and here we don't need to call React.useState because it has been
  // separated into its own variable
  const [promptText, setPromptText] = useState("");
  const [promptTitle, setPromptTitle] = useState("");
  const [isShow, setIsShow] = useState("none");
  return (
    <div className={styles.interactivediagramcontainer}>
      <div className={styles.diagramcontent}>
        <div className={styles.toprow}>
            <div className={styles.cell}
              onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Deployment Targets");
                    setPromptText(`
                    These are the runtime environments that product apps and services run on. They could also be abstractions hiding the details and fidelity of the underlying environments from the product developers.<br/>
                    An example of something that we might want to hide from users is the region or locality of the environment.
                    Common deployment targets include:
                    Kubernetes
                    Lambda
                    Virtual Machines (EC2)
                    Elastic Container Service (ECS)
                  `);
              }}>
              Deployment Targets <br /> (Cloud / On Prem / Edge)
          </div>
        </div>
        <div className={styles.bottomrow}>
          <div className={styles.bottomleftcol}>
            <div className={styles.bottomleftcolright}>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Packaging / Templating");
                  setPromptText("Packaging up the functional set of tools endorsed and usable by the CNOE community. It should leave enough room for configurability of the system Needs to take away misconceptions and bad practices as part of configurability best practices.");
                }}
              >
                Packaging/Templating
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Code Repository");
                  setPromptTitle("Code Repository");
                }}
              >
                Code Repository
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Config Repository");
                  setPromptTitle("Config Repository");
                }}
              >
                Config Repository
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Artifact Registries");
                  setPromptTitle("Artifact Registries");
                }}
              >
                Artifact Registries
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Secret Repository");
                  setPromptTitle("Secret Repository");
                }}
              >
                Secret Repository
              </div>
            </div>
            <div
              className={styles.bottomleftcolleft}
              onClick={() => {
                setIsShow("block");
                setPromptTitle("Signing");
                setPromptText("Cryptographic signing of artifacts, be they source code commits, configurations, binaries or other, allow for verification of the consistency and integrity of the data they contain.");
              }}
            >
              Signing
            </div>
          </div>
          <div className={styles.bottomrightcol}>
            <div className={styles.bottomrightcolleft}>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Developer Portal");
                  setPromptText(`
                    Software catalog of all components, systems and domains.
                    One-stop location to find all about the software we build (docs, source repository, dashboards, support location, owners, etc.)
                    API Documentation
                    Dependencies on other software
                    Documentation system using the docs-as-code approach. Docs are typically in Markdown, and stored in code repositories.
                    Software templates for creating new projects.
                    Onboarding automation for security and trust.
                  `);
                }}
              >
                Developer Portal
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Identity and Access");
                  setPromptTitle("Identity and Access");
                }}
              >
                Identity and Access
              </div>
              <div className={styles.rowcell}>
                <div
                  className={styles.cell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptText("Infra as Code");
                  setPromptTitle("Infra as Code");
                  }}
                >
                  Infra as <br /> Code
                </div>
                <div
                  className={styles.cell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptText("Continuous Delivery");
                  setPromptTitle("Continuous Delivery");
                  }}
                >
                  Continuous <br /> Delivery
                </div>
                <div
                  className={styles.cell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptText("Workflow Orchestration");
                  setPromptTitle("Workflow Orchestration");
                  }}
                >
                  Workflow <br /> Orchestration
                </div>
                <div
                  className={styles.endcell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptText("Service Discovery");
                  setPromptTitle("Service Discovery");
                  }}
                >
                  Service <br /> Discovery
                </div>
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Secret Management");
                  setPromptTitle("Secret Management");
                }}
              >
                Secret Management
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Validation");
                  setPromptTitle("Validation");
                }}
              >
                Validation
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Compute Platform");
                  setPromptTitle("Compute Platform");
                }}
              >
                Compute Platform
              </div>
            </div>
            <div
              className={styles.bottomrightcolright}
              onClick={() => {
                setIsShow("block");
                setPromptText("Observability");
                  setPromptTitle("Observability");
              }}
            >
              Observability
            </div>
          </div>
        </div>
      </div>
      <div className={styles.popUpPrompt} style={{ display: `${isShow}` }}>
        <div className={styles.innerPromptBox}>
          <div className={styles.closeIcon} onClick={() => setIsShow("none")}>
            X
          </div>
          <div className={styles.promptHeader}>{promptTitle}</div>
          <div className={styles.promptBody}>{promptText}</div>
        </div>
      </div>
    </div>
  );
};

