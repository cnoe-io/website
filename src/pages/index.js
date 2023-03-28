import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MissionVision from "@site/src/components/MissionVision";

import styles from "./index.module.css";

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
class InteractiveDiagram extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
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
              <div className={styles.bottomleftcolleft}>Signing</div>
              <div className={styles.bottomleftcolright}>
                <div className={styles.cell}>Packaging/Templating</div>
                <div className={styles.cell}>Code Repository</div>
                <div className={styles.cell}>Config Repository</div>
                <div className={styles.cell}>Artifact Registries</div>
                <div className={styles.cell}>Secret Repository</div>
              </div>
            </div>
            <div className={styles.bottomrightcol}>
              <div className={styles.bottomrightcolleft}>
                <div className={styles.cell}>Developer Portal</div>
                <div className={styles.cell}>Identity and Access</div>
                <div className={styles.rowcell}>
                  <div className={styles.cell}>
                    Infra as <br /> Code
                  </div>
                  <div className={styles.cell}>
                    Continuous <br /> Delivery
                  </div>
                  <div className={styles.cell}>
                    Workflow <br /> Orchestration
                  </div>
                  <div className={styles.endcell}>
                    Service <br /> Discovery
                  </div>
                </div>
                <div className={styles.cell}>Secret Management</div>
                <div className={styles.cell}>Validation</div>
                <div className={styles.cell}>Compute Platform</div>
              </div>
              <div className={styles.bottomrightcolright}>Observability</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
