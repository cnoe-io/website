import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'MISSION',
    Svg: require('@site/static/img/mission.svg').default,
    description: (
      <>
        CNOE aims at helping platform engineers build their IDPs <i>faster</i> and in a <i>more secure way</i> with best practices built in
      </>
    ),
  },
  {
    title: 'VISION',
    Svg: require('@site/static/img/vision.svg').default,
    description: (
      <>
        CNOE strives to be the goto framework for leading software companies
        to build their cloud-native internal developer platform
      </>
    ),
  },
];

function Feature({ Svg, title, description, index, isVisible }) {
  return (
    <div className={clsx(styles.missionVisionItem, isVisible && styles.visible)}>
      <div className={styles.missionVisionCard}>
        <div className={styles.iconSection}>
          <div className={styles.iconContainer}>
            <Svg className={styles.featureSvg} role="img" />
            <div className={styles.iconGlow}></div>
          </div>
        </div>
        <div className={styles.contentSection}>
          <h3 className={styles.missionVisionTitle}>{title}</h3>
          <p className={styles.missionVisionDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function MissionVision() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

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

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Purpose</h2>
          <p className={styles.sectionSubtitle}>
            Driving the future of internal developer platforms through community collaboration
          </p>
        </div>
        <div ref={containerRef} className={styles.missionVisionGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} index={idx} isVisible={isVisible} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
