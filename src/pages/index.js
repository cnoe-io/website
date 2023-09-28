import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MissionVision from "@site/src/components/MissionVision";
import InteractiveDiagram from "@site/src/components/InteractiveDiagram";
import Grid from '@mui/material/Grid';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useColorMode} from '@docusaurus/theme-common';




import styles from "./index.module.css";
const { useState, useEffect } = React;


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [bgImage, setBgImage] = useState('');

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <Grid container spacing={3} className="perspective-container">
        <Grid item xs={6} className="hero hero--primary bgimg"/>
        <Grid item xs={5} className="hero__subtitle tagline">
          <Grid container direction="column" spacing={2} style={{display: 'flex'}}>
            <Grid item style={{display: 'flex', alignItems: 'left', paddingRight: 50}}>
              <p>{siteConfig.tagline}</p>
            </Grid>
            <Grid item>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro"
                >
                  What is CNOE?
                </Link>
            </Grid>
          </Grid>
          <Grid item xs={3}/>
        </Grid>
      </Grid>
    </header>
  );
}

const Partners = () => {
  const {colorMode, setColorMode} = useColorMode();
  const handleDragStart = (e) => e.preventDefault();
  var items =[]
  if(colorMode == 'light'){
    items = [
      <img src="/website/img/members/AWS-light.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src="/website/img/members/Adobe-light.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src="/website/img/members/Autodesk-light.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src="/website/img/members/Twilio-light.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src="/website/img/members/Salesforce-light.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src="/website/img/members/Expedia-light.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      // <img src="/website/img/members/Nike-light.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
    ];

  } else {
    items = [
      <img src="/website/img/members/AWS-dark.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src="/website/img/members/Adobe-dark.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src="/website/img/members/Autodesk-dark.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src="/website/img/members/Twilio-dark.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src="/website/img/members/Salesforce-dark.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src="/website/img/members/Expedia-dark.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
      // <img src="/website/img/members/Nike-dark.svg" width="128px" onDragStart={handleDragStart} role="presentation" />,
    ];
  }
  

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
};
  return (
    <div className={styles.members}>
      <h1 className="heading heading-center">Members</h1>
      <Grid container className="sliderStyle">
        <Grid item xs={1}/>
          <Grid item xs={10} >
            <AliceCarousel mouseTracking
              items={items}
              autoPlay={true}
              disableDotsControls={true}
              disableSlideInfo={true}
              disableButtonsControls={true}
              autoPlayInterval={2500}
              infinite={true}
              responsive={responsive}
            />
        </Grid>
        <Grid item xs={1}/>
      </Grid>
    </div>
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
      <h1 className="heading heading-center">Platform Architecture</h1>
      <InteractiveDiagram />
      <main>
        <Partners/>
        <MissionVision />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
