import React from "react";
import clsx from "clsx";
import parse from "html-react-parser";
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
          <div
            className={styles.cell}
            onClick={() => {
              setIsShow("block");
              setPromptTitle("Deployment Targets");
              setPromptText(
                parse(`
                    <p>The runtime environments that product apps and services run on.
                    This includes static content or data published for distribution.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/deployment-targets">Read More</a></b>
                  `)
              );
            }}
          >
            Deployment Targets <br /> (Cloud / On Prem / Edge)
          </div>
        </div>
        <div className={styles.bottomrow}>
          <div className={styles.bottomleftcol}>
              <p className={styles.labels}>Application</p>
            <div className={styles.bottomleftcolright}>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Packaging / Templating");
                  setPromptText(
                    parse(`
                    <p>Ensures the delivery of a packaged up and functional set of software or tools.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/packaging-and-templating">Read More</a></b>
                  `)
                  );
                }}
              >
                Packaging/Templating
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Code Repository");
                  setPromptText(
                    parse(`
                    <p>Enable developers to collaborate on code asynchronously while keeping historical lineage of changes.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/code-repository">Read More</a></b>
                  `)
                  );
                }}
              >
                Code Repository
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Config Repository");
                  setPromptText(
                    parse(`
                    <p>Canonical data store for application configuration.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/config-repository">Read More</a></b>
                  `)
                  );
                }}
              >
                Config Repository
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Artifact Registries");
                  setPromptText(
                    parse(`
                    Preserves a signed, accessible, and traceable list of packaged components.
                    <br/>
                    <br/>
                    <b><a href="docs/intro/capabilities/artifact-registry">Read More</a></b>
                  `)
                  );
                }}
              >
                Artifact Registries
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Secret Repository");
                  setPromptText(
                    parse(`
                    <p>Secrets repositories are secure long term storage locations for sensitive data.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/secret-repository">Read More</a></b>
                  `)
                  );
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
                setPromptText(
                  parse(`
                    <p>Cryptographic signing of artifacts to allow for verification of the consistency and integrity of the data they contain.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/signing">Read More</a></b>
                `)
                );
              }}
            >
              Signing
            </div>
          </div>
        <div className={styles.bottomrightcol}>
          <p className={styles.labels}>Operation</p>
            <div className={styles.bottomrightcolleft}>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Developer Portal");
                  setPromptText(
                    parse(`
                    <p>Software catalog of all components, systems and domains.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/developer-portal">Read More</a></b>
                  `)
                  );
                }}
              >
                Developer Portal
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Identity and Access");
                  setPromptText(
                    parse(`
                    <p>A service that can be used to wire up Authentication and Authorization in a common well understood manner.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/identity-and-access">Read More</a></b>
                  `)
                  );
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
                    setPromptText(
                      parse(`
                    <p>Tooling required to spin up infrastructure resources for a given application.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/infra-as-code">Read More</a></b>
                    `)
                    );
                  }}
                >
                  Infra as <br /> Code
                </div>
                <div
                  className={styles.cell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptTitle("Continuous Delivery");
                    setPromptText(
                      parse(`
                    <p>CD gets infrastructure and application resources into a state, ready for receiving production workload.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/continuous-delivery">Read More</a></b>
                    `)
                    );
                  }}
                >
                  Continuous <br /> Delivery
                </div>
                <div
                  className={styles.cellmobile}
                  onClick={() => {
                    setIsShow("block");
                    setPromptTitle("Workflow Orchestration");
                    setPromptText(
                      parse(`
                    <p>The orchestration process to get applications ready for delivery.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/workflow-orchestration">Read More</a></b>
                    `)
                    );
                  }}
                >
                  Workflow <br /> Orchestration
                </div>
                <div
                  className={styles.endcell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptTitle("Service Discovery");
                    setPromptText(
                      parse(`
                    <p>Allows for the dynamic lookup or querying of service details.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/service-discovery">Read More</a></b>
                    `)
                    );
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
                  setPromptText(
                    parse(`
                    <p>Secrets Management manages the life cycle and distribution of secrets safely and securely.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/secret-management">Read More</a></b>
                  `)
                  );
                }}
              >
                Secret Management
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Validation");
                  setPromptText(
                    parse(`
                    <p>Validation ensures that API specifications are abided. Can be used in conjunction with admission control to enable security controls</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/validation">Read More</a></b>
                  `)
                  );
                }}
              >
                Validation
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptTitle("Compute Platform");
                  setPromptText(
                    parse(`
                    <p>The runtime used by the platform. Hosts the platform capabilities or their integration points.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/compute-platform">Read More</a></b>
                  `)
                  );
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
                setPromptText(
                  parse(`
                    <p>Monitors, reports, and alerts on the overall well-being of the system.</p>
                    <br/>
                    <b><a href="docs/intro/capabilities/observability">Read More</a></b>
                  `)
                );
              }}
            >
              Observability
            </div>
          </div>
        </div>
      </div>
      <div className={styles.popUpPrompt} style={{ display: `${isShow}` }}>
        <div className={styles.innerPromptBox}>
          <div className={styles.promptHeader}>
            {promptTitle}
            <div onClick={() => setIsShow("none")}>
              <svg
                className={styles.closeIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.79279 6.79308C6.98031 6.60561 7.23462 6.50029 7.49979 6.50029C7.76495 6.50029 8.01926 6.60561 8.20679 6.79308L11.9998 10.5861L15.7928 6.79308C15.885 6.69757 15.9954 6.62139 16.1174 6.56898C16.2394 6.51657 16.3706 6.48898 16.5034 6.48783C16.6362 6.48668 16.7678 6.51198 16.8907 6.56226C17.0136 6.61254 17.1253 6.68679 17.2192 6.78069C17.3131 6.87458 17.3873 6.98623 17.4376 7.10913C17.4879 7.23202 17.5132 7.3637 17.512 7.49648C17.5109 7.62926 17.4833 7.76048 17.4309 7.88249C17.3785 8.00449 17.3023 8.11483 17.2068 8.20708L13.4138 12.0001L17.2068 15.7931C17.3889 15.9817 17.4897 16.2343 17.4875 16.4965C17.4852 16.7587 17.38 17.0095 17.1946 17.1949C17.0092 17.3803 16.7584 17.4855 16.4962 17.4878C16.234 17.49 15.9814 17.3892 15.7928 17.2071L11.9998 13.4141L8.20679 17.2071C8.01818 17.3892 7.76558 17.49 7.50339 17.4878C7.24119 17.4855 6.99038 17.3803 6.80497 17.1949C6.61956 17.0095 6.51439 16.7587 6.51211 16.4965C6.50983 16.2343 6.61063 15.9817 6.79279 15.7931L10.5858 12.0001L6.79279 8.20708C6.60532 8.01955 6.5 7.76525 6.5 7.50008C6.5 7.23492 6.60532 6.98061 6.79279 6.79308Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className={styles.promptBody}>{promptText}</div>
        </div>
      </div>
    </div>
  );
}
