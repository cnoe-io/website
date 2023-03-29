import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MissionVision from "@site/src/components/MissionVision";
import InteractiveDiagram from "@site/src/components/InteractiveDiagram";

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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The CNOE website />"
    >
      <HomepageHeader />
      <hr/>
      <InteractiveDiagram />
      <hr/>
      <main>
        <MissionVision />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
