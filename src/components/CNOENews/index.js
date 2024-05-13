import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const NewsList = [
    {
        title: 'CNOE Talk 1',
        description: (<>
        This is a test news article
        </>),
        imageSrc:'',
        linkTo: 'https://www.google.com'
    },
    {
        title: 'CNOE Talk 2',
        description: (<>
        This is a test 2 news article
        </>),
        imageSrc:'',
        linkTo: 'https://www.google.com'
    },
];

function News({title, description, imageSrc, linkTo}){
    return(
        <a className={styles.NewsCard} href={linkTo} target="_blank">
            <img src={imageSrc} width="100%" height="200px" objectFit="contain" />
            <h2>{title}</h2>
            <p>{description}</p>
        </a>
    );
}



export default function CNOENews() {
    return (
        <section className={styles.news}>
        <div className="container">
          <p className='heading heading-center'>CNOE in the News</p>
          <div className="row padding-top--lg">
            {NewsList.map((props, idx) => (
              <News key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  