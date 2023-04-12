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
                    <p>The runtime environments that product apps and services run on.
                    This includes static content or data published for distribution.</p>
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
                    <p>Ensures the delivery of a packaged up and functional set of software or tools.</p>
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
                    <p>Enable developers to collaborate on code asynchronously while keeping historical lineage of changes.</p>
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
                    <p>Canonical data store for application configuration.</p>
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
                    <p>Secrets repositories are secure long term storage locations for sensitive data.</p>
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
                    <p>Cryptographic signing of artifacts to allow for verification of the consistency and integrity of the data they contain.</p>
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
                    <p>Software catalog of all components, systems and domains.</p>
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
                    <p>A service that can be used to wire up Authentication and Authorization in a common well understood manner.</p>
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
                    <p>Tooling required to spin up infrastructure resources for a given application.</p>
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
                    <p>CD gets infrastructure and application resources into a state, ready for receiving production workload.</p>
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
                    <p>The orchestration process to get applications ready for delivery.</p>
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
                    <p>Allows for the dynamic lookup or querying of service details.</p>
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
                    <p>Secrets Management manages the life cycle and distribution of secrets safely and securely.</p>
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
                    <p>Validation ensures that API specifications are abided. Can be used in conjunction with admission control to enable security controls</p>
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
                    <p>The runtime used by the platform. Hosts the platform capabilities or their integration points.</p>
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
                    <p>Monitors, reports, and alerts on the overall well-being of the system.</p>
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

