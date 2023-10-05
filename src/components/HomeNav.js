import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Box from '@mui/material/Box';
import FormSearch from "@/components/FormSeach";
import FormAdd from "@/components/FormAdd";
import About from "@/components/About";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
		<Box sx={{ width: '100%' }}>
			<Container>

      <CustomTabPanel value={value} index={0}>
	      <Box>
					<FormSearch />
				</Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
				<Box>
					<FormAdd />
				</Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
				<Box>
					<About />
				</Box>
      </CustomTabPanel>
			<Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}> 
				<Box sx={{ borderBottom: 1, borderColor: 'divider', bottom: 0, textAlign: 'center', position: 'fixed'}}>
						<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
							<Tab icon={<SearchIcon />} label="Search" {...a11yProps(0)} />
							<Tab icon={<AddBoxIcon />} label="Add Item" {...a11yProps(1)} />
							<Tab icon={<AccessibilityNewIcon />} label="Delete" {...a11yProps(2)} />
						</Tabs>
					</Box>
			</Grid>
			</Container>
    </Box>
  );
}
