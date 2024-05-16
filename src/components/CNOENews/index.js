import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Grid from '@mui/material/Grid';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import clsx from 'clsx';
import styles from './styles.module.css';
import yaml from 'js-yaml';
import axios from 'axios';

const { useState, useEffect } = React;

function News({title, description, imageSrc, linkTo}){
    return(
        <div className={styles.NewsCard}>

        <a  href={linkTo} target="_blank" style={{ textDecoration: 'none', padding:"0px", cornerRadius:"8px" }}>
            <img src={imageSrc} width="100%" height="320px" objectFit="contain" style={{ marginBottom: '16px', borderRadius:"5px"}}/>
            <h2 align="left" style={{ color: "var(--ifm-color-neutral-darkest)" }}>{title}</h2>
            <p align="left" style={{ color: "var(--ifm-color-neutral-darker)" }}>{description}</p>
        </a>
        </div>
    );
}



export default function CNOENews() {
  const { siteConfig } = useDocusaurusContext();
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // Function to fetch and parse YAML data
    const fetchYAMLData = async () => {
      try {
        const response = await axios.get('/news/data.yaml'); // Adjust the path to your YAML file
        const yamlData = response.data;
        const parsedData = yaml.load(yamlData);
        setNewsList(parsedData);
      } catch (error) {
        console.error('Error fetching YAML data:', error);
      }
    };

    // Call the function to fetch YAML data
    fetchYAMLData();
  }, []); 

   const items = newsList.map((news, index) => (
      <News
        key={index}
        title={news.title}
        description={news.description}
        imageSrc={ news.imageSrc}
        linkTo={news.linkTo}
      />
  ));

  const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 3 },
  };

  return (
    <div className={styles.members}>
      <h1 className="heading heading-center">In the News</h1>
      <Grid container className="sliderStyle">
        <Grid item xs={1}/>
          <Grid item xs={10} >
            <AliceCarousel mouseTracking
              items={items}
              autoPlay={false}
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
  
