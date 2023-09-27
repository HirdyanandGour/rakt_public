import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


export default function FormSearch() {
	const callAPI = async () => {
			
	}
  return (
      <Card variant="outlined">
		<Box sx={{ minWidth: 275 }}>
			<Box
			sx={{
				width: 500,
				maxWidth: '100%',
				display: 'table',
				margin: '0 auto',
				padding: '10ch 2ch'
			}}
			>
			<Stack spacing={2}>
				<TextField fullWidth label="Search..." id="fullWidth" />
				<Button variant="outlined"  onClick={callAPI}>Get Data</Button>
			</Stack>
			</Box>
		</Box>
	  </Card>    
  );
}
