import React from 'react';
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Grid from '@mui/material/Grid';
import styles from './styles.module.css';

export default function Stacks() {
    return (
        <div className={styles.stacksContainer}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={2}>
              <div className={styles.gridItem}>
                <img src="img/stacks/step1.svg" alt="Choose Stack" />
                <p>CHOOSE STACK</p>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={styles.gridItem}>
                <img src="img/stacks/step2.svg" alt="Build Stack" />
                <p>BUILD STACK</p>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={styles.gridItem}>
                <img src="img/stacks/step3.svg" alt="Test Stack" />
                <p>TEST STACK</p>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={styles.gridItem}>
                <img src="img/stacks/step4.svg" alt="Adopt Stack" />
                <p>ADOPT STACK</p>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={styles.gridItem}>
                <img src="img/stacks/step5.svg" alt="Scale Stack" />
                <p>SCALE STACK</p>
              </div>
            </Grid>
          </Grid>
        </div>
        )
}