import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import InformationCNOE  from "@site/src/components/InformationCNOE";
import ValueProposition  from "@site/src/components/ValueProposition";
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
        <Grid item xs={2.5} className="hero hero--primary bgimg"/>
        <Grid item xs={5} sm={6} md={7} lg={8} className="hero__subtitle tagline">
          <Grid container direction="column" spacing={2} style={{display: 'flex'}}>
            <Grid item style={{display: 'flex', alignItems: 'left'}}>
              <p>{siteConfig.tagline} &nbsp;&nbsp;
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro/cnoe" // go to get started
                  style={{textAlign:"center", width:"200px"}}>
                  <span style={{verticalAlign:"text-top"}}>
                  Get Started
                  </span>
                </Link></p>
            </Grid>
          </Grid>
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
      <img src={siteConfig.baseUrl + "img/members/AWS-light.svg"}        width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Adobe-light.svg"}      width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Autodesk-light.svg"}   width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Twilio-light.svg"}     width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Salesforce-light.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Intuit-light.svg"}     width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Nike-light.svg"}       width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/cisco-light.svg"}      width="128px" onDragStart={handleDragStart} role="presentation" height="128px"/>,
      <img src={siteConfig.baseUrl + "img/members/Siemens-light.svg"}    width="128px" onDragStart={handleDragStart} role="presentation" height="128px"/>,
    ];

  } else {
    items = [
      <img src={siteConfig.baseUrl + "img/members/AWS-dark.svg"}        width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Adobe-dark.svg"}      width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Autodesk-dark.svg"}   width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Twilio-dark.svg"}     width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Salesforce-dark.svg"} width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Intuit-dark.svg"}     width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/Nike-dark.svg"}       width="128px" onDragStart={handleDragStart} role="presentation" />,
      <img src={siteConfig.baseUrl + "img/members/cisco-dark.svg"}      width="128px" onDragStart={handleDragStart} role="presentation" height="128px"/>,
      <img src={siteConfig.baseUrl + "img/members/Siemens-dark.svg"}    width="128px" onDragStart={handleDragStart} role="presentation" height="128px"/>,
    ];
  }

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 6 },
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
      &nbsp;
      <Link
        className="button button--primary button--lg"
        to="/docs/contribute"            
        style={{
          textAlign: "center",
          width: "200px",
          display: "block",
          margin: "0 auto"
        }}
      >
        <img src="img/github.svg" 
        style={{verticalAlign:"text-bottom", marginRight:"8px"}}
        >
        </img>

        Contribute
      </Link>
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
      <main>
        <InformationCNOE/>
         <ValueProposition />
        <MissionVision />
      </main>
      <Partners/>    
      <CNOENews />
    </Layout>
  );
}
