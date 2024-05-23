import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MissionVision from "@site/src/components/MissionVision";
import InteractiveDiagram from "@site/src/components/InteractiveDiagram";
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useColorMode} from '@docusaurus/theme-common';




import styles from "./index.module.css";
import CNOENews from "../components/CNOENews";
import Stacks from "../components/Stacks";
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
                  to="/docs/category/getting-started" // go to getstarted
                  style={{textAlign:"center", width:"225px"}}
                >
                  <img src="img/terminal.svg" 
                  style={{verticalAlign:"text-top", marginRight:"8px", marginTop:"1.5px"}}
                  >
                  </img>
                  <span style={{verticalAlign:"text-top"}}>

                  Get Started
                  </span>
                </Link>
                &nbsp;
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro"            
                  style={{textAlign:"center", width:"225px"}}
                >
                  <HelpIcon
                  style={{verticalAlign:"text-top", marginRight:"8px", marginTop:"1px"}}
                  />
                  What is CNOE
                </Link>
                &nbsp;
                <Link
                  className="button button--secondary button--lg"
                  to="https://github.com/cnoe-io"            
                  style={{textAlign:"center", width:"225px"}}
                >
                  <img src="img/github.svg" 
                  style={{verticalAlign:"text-bottom", marginRight:"8px"}}
                  >
                  </img>

                  Contribute
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
  const { siteConfig } = useDocusaurusContext();
  const handleDragStart = (e) => e.preventDefault();
  var items =[]
  if(colorMode == 'light'){
    items = [
      <img src={siteConfig.baseUrl + "img/members/AWS-light.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Adobe-light.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Autodesk-light.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Twilio-light.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Salesforce-light.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Intuit-light.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Nike-light.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
    ];

  } else {
    items = [
      <img src={siteConfig.baseUrl + "img/members/AWS-dark.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Adobe-dark.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Autodesk-dark.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Twilio-dark.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Salesforce-dark.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Intuit-dark.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Nike-dark.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
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
      title={`Cloud Native Operational Excellence ${siteConfig.title}`}
      description="Joint efforts to build Internal Developer Platforms"
    >
      <HomepageHeader />
      <Stacks />
      <h1 className="heading heading-center">Platform Architecture</h1>
      <InteractiveDiagram />
      <main>
        <HomepageFeatures />
        <MissionVision />
      </main>
      <Partners/>
      <CNOENews />
    </Layout>
  );
}
