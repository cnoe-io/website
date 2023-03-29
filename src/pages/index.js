import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MissionVision from "@site/src/components/MissionVision";

import styles from "./index.module.css";
const { useState } = React;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img width="30%" src="/website/img/logo-white.png" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            What is CNOE?
          </Link>
        </div>
      </div>
    </header>
  );
}
const InteractiveDiagram = () => {
  // and here we don't need to call React.useState because it has been
  // separated into its own variable
  const [promptText, setPromptText] = useState("");
  const [isShow, setIsShow] = useState("none");
  return (
    <div className={styles.interactivediagramcontainer}>
      <div className={styles.diagramcontent}>
        <div className={styles.toprow}>
          <div className={styles.toprowsensor}></div>
          <div className={styles.toprow1}>
            Top Deployment Targets <br /> (Cloud/ On-prem / Edge)
          </div>
          <div className={styles.toprow2}>Bottom This is text behind</div>
        </div>
        <div className={styles.inner}></div>
        <div className={styles.bottomrow}>
          <div className={styles.bottomleftcol}>
            <div
              className={styles.bottomleftcolleft}
              onClick={() => {
                setIsShow("block");
                setPromptText("Signing");
              }}
            >
              Signing
            </div>
            <div className={styles.bottomleftcolright}>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Packaging/Templating");
                }}
              >
                Packaging/Templating
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Code Repository");
                }}
              >
                Code Repository
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Config Repository");
                }}
              >
                Config Repository
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Artifact Registries");
                }}
              >
                Artifact Registries
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Secret Repository");
                }}
              >
                Secret Repository
              </div>
            </div>
          </div>
          <div className={styles.bottomrightcol}>
            <div className={styles.bottomrightcolleft}>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Developer Portal");
                }}
              >
                Developer Portal
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Identity and Access");
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
                  }}
                >
                  Infra as <br /> Code
                </div>
                <div
                  className={styles.cell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptText("Continuous Delivery");
                  }}
                >
                  Continuous <br /> Delivery
                </div>
                <div
                  className={styles.cell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptText("Workflow Orchestration");
                  }}
                >
                  Workflow <br /> Orchestration
                </div>
                <div
                  className={styles.endcell}
                  onClick={() => {
                    setIsShow("block");
                    setPromptText("Service Discovery");
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
                }}
              >
                Secret Management
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Validation");
                }}
              >
                Validation
              </div>
              <div
                className={styles.cell}
                onClick={() => {
                  setIsShow("block");
                  setPromptText("Compute Platform");
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
          <div className={styles.promptBody}>{promptText}</div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The CNOE website />"
    >
      <HomepageHeader />
      <InteractiveDiagram />
      <main>
        <MissionVision />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
