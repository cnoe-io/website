import React from 'react';
import Grid from '@mui/material/Grid';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";


export default function Stacks() {
    const { colorMode } = useColorMode();
    const { siteConfig } = useDocusaurusContext();

    const items = colorMode === 'light' ? [
        { src: `${siteConfig.baseUrl}img/stacks/step1-light.svg`, label: 'CHOOSE STACK' },
        { src: `${siteConfig.baseUrl}img/stacks/step2-light.svg`, label: 'BUILD STACK' },
        { src: `${siteConfig.baseUrl}img/stacks/step3-light.svg`, label: 'TEST STACK' },
        { src: `${siteConfig.baseUrl}img/stacks/step4-light.svg`, label: 'ADOPT STACK' },
        { src: `${siteConfig.baseUrl}img/stacks/step5-light.svg`, label: 'SCALE STACK' },
    ] : [
        { src: `${siteConfig.baseUrl}img/stacks/step1-dark.svg`, label: 'CHOOSE STACK' },
        { src: `${siteConfig.baseUrl}img/stacks/step2-dark.svg`, label: 'BUILD STACK' },
        { src: `${siteConfig.baseUrl}img/stacks/step3-dark.svg`, label: 'TEST STACK' },
        { src: `${siteConfig.baseUrl}img/stacks/step4-dark.svg`, label: 'ADOPT STACK' },
        { src: `${siteConfig.baseUrl}img/stacks/step5-dark.svg`, label: 'SCALE STACK' },
    ];

    return (
        <div className={styles.stacksContainer}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                {items.map((item, index) => (
                    <Grid item xs={2} key={index}>
                        <div className={styles.gridItem}>
                            <img src={item.src} alt={item.label} />
                            <p>{item.label}</p>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
