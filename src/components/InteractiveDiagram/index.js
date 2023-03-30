import React from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';
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
                    setPromptText(parse(`
                    The runtime environments that product apps and services run on.<br/>
                    <b><a href="docs/capabilities/deployment-targets">Read More ></a></b>
                  `));
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
                  setPromptText(parse(`
                    Ensures the delivery of a packaged up and functional set of software or tools.
                    <br/>
                    <b><a href="docs/capabilities/packaging-and-templating">Read More ></a></b>
                  `));
                }}
              >
                Packaging/Templating
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Code Repository");
                  setPromptText(parse(`
                    Enable developers to collaborate on code asynchronously while keeping historical lineage of changes.
                    <br/>
                    <b><a href="docs/capabilities/code-repository">Read More ></a></b>
                  `));
                }}
              >
                Code Repository
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Config Repository");
                  setPromptText(parse(`
                    Enable developers to collaborate on configuration asynchronously while keeping historical lineage of changes.
                    <br/>
                    <b><a href="docs/capabilities/config-repository">Read More ></a></b>
                  `));
                }}
              >
                Config Repository
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Artifact Registries");
                  setPromptText(parse(`
                    Preserves a signed, accessible, and traceable list of packaged components.
                    <br/>
                    <b><a href="docs/capabilities/artifact-registry">Read More ></a></b>
                  `));
                }}
              >
                Artifact Registries
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Secret Repository");
                  setPromptText(parse(`
                    Secrets repositories are secure long term storage locations for sensitive data. 
                    <br/>
                    <b><a href="docs/capabilities/secret-repository">Read More ></a></b>
                  `));
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
                setPromptText(parse(`
                    Cryptographic signing of artifacts, be they source code commits, configurations, binaries or other, allow for verification of the consistency and integrity of the data they contain.
                    <br/>
                    <b><a href="docs/capabilities/signing">Read More ></a></b>
                `));
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
                  setPromptText(parse(`
                    Software catalog of all components, systems and domains.
                    <br/>
                    <b><a href="docs/capabilities/developer-portal">Read More ></a></b>
                  `));
                }}
              >
                Developer Portal
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Identity and Access");
                  setPromptText(parse(`
                    A service that can be used to wire up Authentication and Authorization in a common well understood manner.
                    <br/>
                    <b><a href="docs/capabilities/identity-and-access">Read More ></a></b>
                  `));
                }}
              >
                Identity and Access
              </div>
              <div className={styles.rowcell}>
                <div
                  className={styles.cell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptTitle("Infra as Code");
                    setPromptText(parse(`
                    Tooling required to spin up infrastructure resources for a given application.
                    <br/>
                    <b><a href="docs/capabilities/infra-as-code">Read More ></a></b>
                    `));
                  }}
                >
                  Infra as <br /> Code
                </div>
                <div
                  className={styles.cell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptTitle("Continuous Delivery");
                    setPromptText(parse(`
                    CD gets infrastructure and application resources into a state, ready for receiving production workload.
                    <br/>
                    <b><a href="docs/capabilities/continuous-delivery">Read More ></a></b>
                    `));
                  }}
                >
                  Continuous <br /> Delivery
                </div>
                <div
                  className={styles.cell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptTitle("Workflow Orchestration");
                    setPromptText(parse(`
                    The orchestration process to get artifacts ready for rollout
                    <br/>
                    <b><a href="docs/capabilities/workflow-orchestration">Read More ></a></b>
                    `));
                  }}
                >
                  Workflow <br /> Orchestration
                </div>
                <div
                  className={styles.endcell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptTitle("Service Discovery");
                    setPromptText(parse(`
                    It allows for the dynamic lookup or querying of a producer’s interface/API details by consumers of that service. It also allows for the dynamic lookup or querying of a producer’s interface/API details by consumers of that service.
                    <br/>
                    <b><a href="docs/capabilities/service-discovery">Read More ></a></b>
                    `));
                  }}
                >
                  Service <br /> Discovery
                </div>
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Secret Management");
                  setPromptText(parse(`
                    Secrets Management aims to shift this important responsibility to the platform where it can be implemented and audited in one place rather than many.
                    <br/>
                    <b><a href="docs/capabilities/secret-management">Read More ></a></b>
                  `));
                }}
              >
                Secret Management
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Validation");
                  setPromptText(parse(`
                    It ensures artifacts used in deployments are the ones expected.
                    <br/>
                    <b><a href="docs/capabilities/validation">Read More ></a></b>
                  `));
                }}
              >
                Validation
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Compute Platform");
                  setPromptText(parse(`
                    The platform runtime.
                    <br/>
                    <b><a href="docs/capabilities/compute-platform">Read More ></a></b>
                  `));
                }}
              >
                Compute Platform
              </div>
            </div>
            <div
              className={styles.bottomrightcolright}
              onClick={() => {
                setIsShow("block");
                  setPromptTitle("Observability");
                  setPromptText(parse(`
                    Monitors, reports, and alerts on the overall well-being of the system.
                    <br/>
                    <b><a href="docs/capabilities/observability">Read More ></a></b>
                  `));
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

