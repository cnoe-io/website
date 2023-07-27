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
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function fetchData(path) {
    return fetch(path)
}

function Legend() {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
      className="margin-vert--lg"
      sx={{
        position: 'fixed',
        right: 8,
        backgroundColor: '--ifm-background-surface-color',
        padding: 1,
        zIndex: 1,
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
      <Stack direction="row" spacing={1}>
        <Box sx={{ width: 16, height: 16,borderRadius: '50%', backgroundColor: 'error.main' }} />
        <Typography variant="body2">Security</Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Box sx={{ width: 16, height: 16,borderRadius: '50%', backgroundColor: 'warning.main' }} />
        <Typography variant="body2">Maintenance</Typography>
      </Stack>
    </Stack>
  );
}

const Radar = () => {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [selectedKey, setSelectedKey] = useState({});

    const FullMap = new Map([
      ['Adobe', '/website/data/adobe.json'],
      ['Autodesk', '/website/data/autodesk.json'],
      ['Salesforce', 'Value 3'],
      ['SAP', 'Value 4'],
      ['Ad', 'Value 5'],
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
              <Legend/>
              <div className="container margin-vert--lg" style={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <FilterableList />
                    </Grid>
                    <Grid item xs={8}>
                        <div className={styles.container}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <RadarChart colors={["--ifm-color-radar-opeartion"]} data={data.operation} quadrants={data.operation.length}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <RadarChart colors={["--ifm-color-radar-application"]} data={data.application} quadrants={data.application.length}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <RadarChart colors={["--ifm-color-radar-security"]} data={data.security} quadrants={data.security.length}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <RadarChart colors={["--ifm-color-radar-maintenance"]} data={data.maintenance} quadrants={data.maintenance.length}/>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                  </Grid>
              </div>
            </Layout>
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
                  color: 'var(--ifm-color-search-radar-label)',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'var(--ifm-color-search-radar-border)',
                },
              },
              '&:hover fieldset': {
                borderColor: 'var(--ifm-color-search-radar-border-hover)', // Change border color on hover
              },
              '& .MuiInputBase-input': {
                color: 'var(--ifm-color-content)', // Change input color
              },
            }}
          />
          <List>
            {[...map].map(([key, value], index) => (
              <ListItem button key={index} onClick={() => handleListItemClick(key, value)}>
                <ListItemText
                  primary={key}
                  primaryTypographyProps={{ style: { fontWeight: (key === selectedKey || (Object.keys(selectedKey).length == 0 && index === 0)) ? 'bold' : 'normal' } }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      );
    }

    useEffect(() => {
     fetchData('/website/data/adobe.json')
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
