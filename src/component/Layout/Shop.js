import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Bannerbar from './Bannerbar';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Shop() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <Container  maxWidth="xl">
    <Grid lg={12}>
          <Typography variant='h4' > Shop List</Typography>
    </Grid>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 324 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        style={{width:'30%'}}
      >
        <Tab label="Shop One" {...a11yProps(0)} />
        <Tab label="Shop Two" {...a11yProps(1)} />
        <Tab label="Shop Three" {...a11yProps(2)} />
        <Tab label="Shop Four" {...a11yProps(3)} />
        <Tab label="Shop Five" {...a11yProps(4)} />
        <Tab label="Shop Six" {...a11yProps(5)} />
        <Tab label="Shop Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        
          <Bannerbar></Bannerbar>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Bannerbar></Bannerbar>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <Bannerbar></Bannerbar>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Bannerbar></Bannerbar>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Bannerbar></Bannerbar>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Bannerbar></Bannerbar>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Bannerbar></Bannerbar>
      </TabPanel>
    </Box>
 
    </Container>
 
  );
}
