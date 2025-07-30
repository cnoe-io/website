import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'CLOUD NATIVE',
    Svg: require('@site/static/img/cloudnative.svg').default,
    description: (
      <>
        CNOE is developed around open source cloud native projects that are deemed
        to be useful in helping companies build their internal developer tooling.
      </>
    ),
  },
  {
    title: 'COMMUNITY BEST PRACTICES',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        CNOE relies on community consensus on selecting and configuring
        open source cloud native projects as part of the internal developer platform recommendations.
      </>
    ),
  },
  {
    title: 'MODULAR',
    Svg: require('@site/static/img/modular.svg').default,
    description: (
      <>
        CNOE aims to allow its users to pick and choose what core technologies they want to
        choose for their internal developer platform.
      </>
    ),
  },
];

function Feature({ Svg, title, description, index }) {
  return (
    <div className={clsx('col col--4', styles.featureCard, 'cnoe-stagger-item')}>
      <div className={styles.featureCardInner}>
        <div className={styles.featureIconContainer}>
          <Svg className={styles.featureSvg} role="img" />
          <div className={styles.featureIconOverlay}></div>
        </div>
        <div className={styles.featureContent}>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function ValueProposition() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize staggered animations for feature cards
    if (typeof window !== 'undefined' && containerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const cards = entry.target.querySelectorAll('.cnoe-stagger-item');
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add('cnoe-animate-visible');
                }, index * 150);
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose CNOE?</h2>
          <p className={styles.sectionSubtitle}>
            Built on proven principles for modern internal developer platforms
          </p>
        </div>
        <div
          ref={containerRef}
          className={clsx("row", styles.featuresGrid, "cnoe-stagger-container")}
        >
          {FeatureList.map((props, idx) => (
            <Feature key={idx} index={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
