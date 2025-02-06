import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";
import HelpIcon from '@mui/icons-material/Help';

const CNOESection = () => {
  return (
    <section className={styles.cnoeSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description}>
          CNOE is an open community collaboration with the goal of helping facilitate platform engineering through the sharing of guidance, tooling, and internal developer platform (IDP) reference architectures. 
          &nbsp;&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro/cnoe"            
            style={{textAlign:"center", width:"200px", backgroundColor: 'var(--ifm-color-neutral-lighter)', padding: '10px 0px',
              border: 'none', borderRadius: '4px'}}
          >
            <HelpIcon
            style={{verticalAlign:"text-top", marginRight:"8px", marginTop:"1px"}}
            /> 
            Learn More
          </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CNOESection;