import React, {useEffect, useState} from "react";
import RadarChart from "./radar";
import Layout from "@theme/Layout";
import styles from './radar.module.css';
import {
    Grid,
    Paper,
    Stack,
    Box,
    Typography,
} from '@mui/material';

import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import Slider from '@mui/material/Slider';
import ListItemText from '@mui/material/ListItemText';
import FormControlLabel from '@mui/material/FormControlLabel';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { fontSize } from "@mui/system";

function fetchData(path) {
    return fetch(path)
}

const Radar = () => {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState({});
    const [selectedKey, setSelectedKey] = useState({});
    const [details, setDetails] = useState(true);
    const [size, setSize] = useState(750);
    const { siteConfig } = useDocusaurusContext();

    const FullMap = new Map([
      ['Members Radar (Nov 2023)', siteConfig.baseUrl + 'data/combined-11-12-2023.json'],
      ['Members Radar (Oct 2023)', siteConfig.baseUrl + 'data/combined-10-03-2023.json'],
    ]);

    const handleListItemClick = (key, value) => {
        setSelectedKey(key);
         fetchData(value)
            .then(response => {
            if (!response.ok) { throw new Error(response.statusText); }
            return response.json();
            })
              .then(data => {
                  setData(data)
                  setLoading(false);
              })
            .catch(error => console.log('Error fetching data: ', error));
        return <DrawRadars/>
    };

    const DrawRadars = () => {
        if (isLoading) {
            return(
                <Layout title="Radar" >
                    <div>Loading data...</div>
                </Layout>
            );
        }

        return (
            <Layout title="Radar" >
              <div className="container margin-vert--lg" style={{ flexGrow: 1 }}>
              </div>
              <div className="container margin-vert--lg" style={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <FilterableList />
                  </Grid>
                  <Grid item xs={8}>
                      <div className={styles.container}>
                          <Grid container spacing={2}>
                              <Grid item xs={12} style={{marginBottom: 6 + 'em'}}>
                                  <RadarChart size={size} details={details} colors={["--ifm-color-radar-opeartion"]} data={data.operation} quadrants={data.operation.length}/>
                              </Grid>
                              <Grid item xs={12} style={{marginBottom: 6 + 'em'}}>
                                  <RadarChart size={size} details={details} colors={["--ifm-color-radar-application"]} data={data.application} quadrants={data.application.length}/>
                              </Grid>
                          </Grid>
                      </div>
                  </Grid>
                  <Grid item xs={2}>

                    <Legend/>
                  </Grid>
                </Grid>
              </div>
            </Layout>
        );
    }

    const Legend = () => {
        const handleChangeDetails = (event) => {
          setDetails(event.target.checked);
        };

        return (
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              position: 'fixed',
              backgroundColor: 'var(--ifm-color-neutral-lightest)',
              border: 1,
              borderColor: 'var(--ifm-color-neutral-lighter)',
              borderRadius: '8px',
              padding: '20px',
              zIndex: 1,
              // marginTop: '50px'
            }}
          >
            <Stack>
                <FormControlLabel
                  control={
                    <div className={styles.radarCheckbox}>
                    <Checkbox
                      checked={details}
                      onChange={handleChangeDetails}
                      color="primary"
                      sx={{
                       '& MuiCheckbox-root': {
                            color: 'var(--ifm-color-neutral-darkest)'
                        },

                      }}
                    />
                    </div>
                  }
                  label="Show Details"
                />
            </Stack>
            <Stack width={150}>
                <RadiusSlider/>
            </Stack>
            <Stack
              direction="column"
              spacing={1}
              border={1}
              sx={{
                padding: 1,
                zIndex: 1,
                width: '100%',
                borderRadius: '8%',
              }}
            >
                <Stack direction="row" spacing={1}>
                  <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: 'primary.main' }} />
                  <Typography variant="body2">Operation</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: 'success.main' }} />
                  <Typography variant="body2">Application</Typography>
                </Stack>
            </Stack>
          </Stack>
        );
    }


    const FilterableList = () => {
      const [searchTerm, setSearchTerm] = useState('');
      const [map, setMap] = useState(FullMap);

      const handleChange = event => {
        setSearchTerm(event.target.value);
        if (event.target.value) {
          const newMap = new Map([...FullMap].filter(([key, value]) =>
            key.toLowerCase().includes(event.target.value.toLowerCase()) ||
            value.toLowerCase().includes(event.target.value.toLowerCase())
          ));
          setMap(newMap);
        } else {
          setMap(FullMap);
        }
      };

      return (
        <div className={styles.fixed}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleChange}
            sx={{
              '& .MuiFormLabel-root': {
                  color: 'var(--ifm-color-seMuiCheckboxarch-radar-label)',
                  fontSize: 14
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'var(--ifm-color-search-radar-border)',
                  borderRadius: 10,
                  height: 44,
                  marginTop: 1
                },
                '&:hover fieldset': {
                  borderColor: 'var(--ifm-color-neutral-dark)'
                }
              },
              '& .MuiFormLabel-root.Mui-focused': {
                color: 'var(--ifm-color-primary)',
                '& fieldset': {
                  borderColor: 'var(--ifm-color-primary)',
                },
              },
              '&:hover fieldset': {
                borderColor: 'var(--ifm-color-neutral-darkest)',
              },
              '&:hover .MuiOutlinedInput-root': {
                borderColor: 'var(--ifm-color-search-radar-border-hover)',
              },
              '& .MuiInputBase-input': {
                color: 'var(--ifm-color-content)',
              },
              '& .MuiInputLabel-shrink': {
                marginTop: 1,
                fontSize: 16
              },
            }}
          />
          <List>
            {[...map].map(([key, value], index) => (
              <ListItem button key={index} onClick={() => handleListItemClick(key, value)}>
                <ListItemText
                  primary={key}
                  primaryTypographyProps={{ style: {
                      fontWeight: (key === selectedKey || (Object.keys(selectedKey).length == 0 && index === 0)) ? 'bold' : 'normal',
                      color:  (key === selectedKey || (Object.keys(selectedKey).length == 0 && index === 0)) ? 'var(--ifm-color-primary-dark)' : 'var(--ifm-color-content)',
                  }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      );
    }

    const RadiusSlider = ({ onChange }) => {

      const handleRadiusChange = (event, newValue) => {
        setSize(newValue);
      };

      const marks = [
        { value: 250, label: '250' },
        { value: 500, label: '500' },
        { value: 750, label: '750' },
        { value: 1000, label: '1000' },
      ];

      return (
        <div>
          <Typography id="discrete-slider" gutterBottom>
            Adjust Size:
          </Typography>
          <Slider
            value={size}
            onChange={handleRadiusChange}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={250}
            min={250}
            max={1000}
          />
        </div>
      );
    }

    useEffect(() => {
     fetchData(siteConfig.baseUrl + 'data/combined-11-12-2023.json')
        .then(response => {
        if (!response.ok) { throw new Error(response.statusText); }
        return response.json();
        })
          .then(data => {
              setData(data)
              setLoading(false);
          })
        .catch(error => console.log('Error fetching data: ', error));
    }, []);

    return (
        <DrawRadars/>
    );
}

export default Radar;
