import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'CLOUD NATIVE',
    Svg: require('@site/static/img/cloudnative.svg').default,
    description: (
      <>
        CNOE is developed around open source CNCF projects that are deemed
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
      open source CNCF projects as part of the internal developer platform recommendations.
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

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <p className='heading heading-center'>Value Proposition</p>
        <div className="row padding-top--lg">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
