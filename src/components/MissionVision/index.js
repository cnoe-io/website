import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'MISSION',
    Svg: require('@site/static/img/mission.svg').default,
    description: (
      <>
      CNOE aims at helping platform engineers build their IDP platforms 
      <i>faster</i> and in a <i>more secure way</i> with best practices built in
      </>
    ),
  },
  {
    title: 'VISION',
    Svg: require('@site/static/img/vision.svg').default,
    description: (
      <>
      CNOE will be the goto framework for leading software companies 
      to build their cloud-native internal developer platform
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('row col')}>
      <div className="col col--3 ">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left col col--8">
        <h3 className=''>{title}</h3>
        <p className={styles.missionDesc}>{description}</p>
      </div>
      </div>
  );
}

export default function MissionVision() {
  return (
    <section className={styles.features}>
      <div className="container ">
        <div className="row col">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
