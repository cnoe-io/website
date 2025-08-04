import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ValueProposition from "@site/src/components/ValueProposition";
import MissionVision from "@site/src/components/MissionVision";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useColorMode } from '@docusaurus/theme-common';
import { initScrollAnimations, initStaggeredAnimations } from '@site/src/utils/scrollAnimations';

import styles from "./index.module.css";
import CNOENews from "../components/CNOENews";
import Stacks from "../components/Stacks";
const { useState, useEffect, useRef } = React;


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner, styles.modernHero)}>
      {/* Animated Background Elements */}
      <div className="hero-background">
        <div className="hero-gradient-bg"></div>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroContainer}>
          {/* Logo Section with Float Animation */}
          <div className={clsx(styles.logoSection, isVisible && 'cnoe-animate-fade-in')}>
            <img
              src="/img/logo.png"
              alt="CNOE Logo"
              className={clsx(styles.heroLogo, 'cnoe-animate-float')}
            />
          </div>

          {/* Main Content */}
          <div className={clsx(styles.heroTextContent, isVisible && 'cnoe-animate-fade-in-up')}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleAccent}>Cloud Native Operational Excellence</span>
            </h1>

            <p className={styles.heroSubtitle}>
              An open community collaboration with the goal of helping facilitate platform engineering through the sharing of guidance, tooling, and internal developer platform (IDP) reference architectures.
            </p>

            {/* CTA Buttons */}
            <div className={clsx(styles.heroButtons, isVisible && 'cnoe-animate-fade-in-up')}>
              <Link
                className={clsx("button button--secondary button--lg", styles.heroButton)}
                to="/docs/overview/cnoe"
                style={{ animationDelay: '0.6s' }}>
                <svg
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.buttonIcon}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Overview
              </Link>
              <Link
                className={clsx("button button--primary button--lg", styles.heroButton, styles.getStartedButton)}
                to="/docs/overview/cnoe"
                style={{ animationDelay: '0.7s' }}>
                <svg
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.buttonIcon}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Get Started
              </Link>
              <Link
                className={clsx("button button--secondary button--lg", styles.heroButton)}
                to="/docs/contribute"
                style={{ animationDelay: '0.8s' }}>
                <svg
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.buttonIcon}
                >
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.5.7-1.5 1.5v3.5c0 1.1-.9 2-2 2s-2-.9-2-2V10c0-1.1-.9-2-2-2H5.46c-.8 0-1.46.54-1.64 1.37L1.28 15.63 3.78 16l2.54-7.63H8.5V13c0 2.2 1.8 4 4 4s4-1.8 4-4V22h3.5z" />
                </svg>
                Community
              </Link>
            </div>

            {/* Learn More Button */}
            <div className={clsx(styles.learnMoreHero, isVisible && 'cnoe-animate-fade-in-up')}>
              <button
                className={clsx("button button--secondary button--lg", styles.learnMoreButton)}
                onClick={() => {
                  const nextSection = document.querySelector('section[class*="features"]');
                  if (nextSection) {
                    // Account for navbar height to make section top touch navbar
                    const navbarHeight = 60;
                    const targetPosition = nextSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                style={{ animationDelay: '1.2s' }}
              >
                <div className={styles.learnMoreContent}>
                  <span>Learn More</span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={styles.downArrow}
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const Partners = () => {
  const { colorMode, setColorMode } = useColorMode();
  const { siteConfig } = useDocusaurusContext();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const handleDragStart = (e) => e.preventDefault();

  useEffect(() => {
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

  const createLogoItem = (src, alt) => (
    <div className={styles.partnerLogoContainer} key={src}>
      <img
        src={siteConfig.baseUrl + src}
        alt={alt}
        className={styles.partnerLogo}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>
  );

  var items = [];
  if (colorMode == 'light') {
    items = [
      createLogoItem("img/members/AWS-light.svg", "AWS"),
      createLogoItem("img/members/Adobe-light.svg", "Adobe"),
      createLogoItem("img/members/Autodesk-light.svg", "Autodesk"),
      createLogoItem("img/members/Twilio-light.svg", "Twilio"),
      createLogoItem("img/members/Salesforce-light.svg", "Salesforce"),
      createLogoItem("img/members/Intuit-light.svg", "Intuit"),
      createLogoItem("img/members/Nike-light.svg", "Nike"),
      createLogoItem("img/members/cisco-light.svg", "Cisco"),
      createLogoItem("img/members/Siemens-light.svg", "Siemens"),
    ];
  } else {
    items = [
      createLogoItem("img/members/AWS-dark.svg", "AWS"),
      createLogoItem("img/members/Adobe-dark.svg", "Adobe"),
      createLogoItem("img/members/Autodesk-dark.svg", "Autodesk"),
      createLogoItem("img/members/Twilio-dark.svg", "Twilio"),
      createLogoItem("img/members/Salesforce-dark.svg", "Salesforce"),
      createLogoItem("img/members/Intuit-dark.svg", "Intuit"),
      createLogoItem("img/members/Nike-dark.svg", "Nike"),
      createLogoItem("img/members/cisco-dark.svg", "Cisco"),
      createLogoItem("img/members/Siemens-dark.svg", "Siemens"),
    ];
  }

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    768: { items: 4 },
    1024: { items: 6 },
  };

  return (
    <div ref={containerRef} className={clsx(styles.members, isVisible && styles.membersVisible)}>
      <div className="container">
        <div className={styles.partnersHeader}>
          <h2 className={styles.partnersTitle}>Trusted by Industry Leaders</h2>
          <p className={styles.partnersSubtitle}>
            Join leading companies building the future of internal developer platforms
          </p>
        </div>

        <div className={styles.partnersCarousel}>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay={true}
            disableDotsControls={true}
            disableSlideInfo={true}
            disableButtonsControls={true}
            autoPlayInterval={3000}
            infinite={true}
            responsive={responsive}
            animationType="fadeout"
            animationDuration={800}
          />
        </div>


      </div>
    </div>
  );
}


export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // Initialize scroll-based animations after component mounts
    const timer = setTimeout(() => {
      initScrollAnimations();
      initStaggeredAnimations('.cnoe-stagger-container', '.cnoe-stagger-item', 100);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout
      title={`Cloud Native Operational Excellence ${siteConfig.title}`}
      description="Joint efforts to build Internal Developer Platforms"
    >
      <HomepageHeader />
      <main style={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
        <div data-scroll-animation="fade-in-up" data-animation-delay="200" style={{ margin: 0, padding: 0 }}>
          <ValueProposition />
        </div>
        <div data-scroll-animation="fade-in-up" data-animation-delay="400" style={{ margin: 0, padding: 0 }}>
          <MissionVision />
        </div>
        <div data-scroll-animation="fade-in-up" data-animation-delay="600" style={{ margin: 0, padding: 0 }}>
          <Partners />
        </div>
        <div data-scroll-animation="fade-in-up" data-animation-delay="800" style={{ margin: 0, padding: 0 }}>
          <CNOENews />
        </div>
      </main>


    </Layout>
  );
}
