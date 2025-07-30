import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Grid from '@mui/material/Grid';
import axios from 'axios';
import yaml from 'js-yaml';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import clsx from 'clsx';
import styles from './styles.module.css';

const { useState, useEffect, useRef } = React;

function News({title, description, imageSrc, linkTo, date, presentationLink}){
    return(
        <div className={styles.newsCard}>
            <a href={linkTo} target="_blank" className={styles.newsCardLink}>
                <div className={styles.newsImageContainer}>
                    <img 
                        src={imageSrc} 
                        alt={title}
                        className={styles.newsImage}
                    />
                    <div className={styles.newsImageOverlay}></div>
                </div>
                
                <div className={styles.newsContent}>
                    <div className={styles.newsHeader}>
                        <h3 className={styles.newsTitle}>{title}</h3>
                        {date && (
                            <span className={styles.newsDate}>{date}</span>
                        )}
                    </div>
                    
                    <p className={styles.newsDescription}>{description}</p>
                    
                    {presentationLink && (
                        <div className={styles.newsLinks}>
                            <a 
                                href={presentationLink} 
                                target="_blank" 
                                className={styles.presentationLink}
                                onClick={(e) => e.stopPropagation()}
                            >
                                View Presentation →
                            </a>
                        </div>
                    )}
                </div>
            </a>
        </div>
    );
}



export default function CNOENews() {
  const { siteConfig } = useDocusaurusContext();
  const [newsList, setNewsList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Function to fetch and parse YAML data
    const fetchYAMLData = async () => {
      try {
        const response = await axios.get('/news/data.yaml');
        const yamlData = response.data;
        const parsedData = yaml.load(yamlData);
        setNewsList(parsedData);
      } catch (error) {
        console.error('Error fetching YAML data:', error);
      }
    };

    fetchYAMLData();
  }, []); 

  useEffect(() => {
    // Initialize scroll animation
    if (typeof window !== 'undefined' && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, []);

  // Randomize the news items
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const items = shuffleArray(newsList).map((news, index) => (
    <News
      key={index}
      title={news.title}
      description={news.description}
      imageSrc={news.imageSrc}
      linkTo={news.linkTo}
      date={news.date}
      presentationLink={news.presentationLink}
    />
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <section 
      ref={containerRef}
      className={clsx(styles.newsSection, isVisible && styles.newsSectionVisible)}
    >
      <div className="container">
        <div className={styles.newsHeader}>
          <h2 className={styles.newsTitle}>In the News</h2>
          <p className={styles.newsSubtitle}>
            Stay updated with the latest CNOE community talks, presentations, and insights
          </p>
          <a 
            target="_blank" 
            href="https://github.com/cnoe-io/website/blob/main/static/news/data.yaml" 
            className={styles.addTalkLink}
          >
            ► Add your talk!
          </a>
        </div>
        
        <div className={styles.newsCarousel}>
          <AliceCarousel 
            mouseTracking
            items={items}
            autoPlay={false}
            disableSlideInfo={true}
            disableButtonsControls={false}
            autoPlayInterval={4000}
            infinite={false}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
      </div>
    </section>
  );
}
  
