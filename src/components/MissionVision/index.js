import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mission',
    Svg: require('@site/static/img/mission.svg').default,
    description: (
      <>
      CNOE aims at helping platform engineers build their IDP platforms <br/>
      <i>faster</i> and in a <i>more secure way</i> with best practices built in
      </>
    ),
  },
  {
    title: 'Vision',
    Svg: require('@site/static/img/vision.svg').default,
    description: (
      <>
      CNOE will be the goto framework for leading software companies <br/>
      to build their cloud-native internal developer platform
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function MissionVision() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
