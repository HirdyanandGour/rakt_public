import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import DataCard from './DataCard';

export default function FormSearch() {
	const [query, setQuery] = useState('');
	const [data, setData] = useState(null);
	const callAPI = async () => {
		if( query != '' && query.length > 2){
			const response = await fetch('/api/getData?query='+query, {
				method: 'GET',
			})
			.then(response => response.json())
			.then(data => {
				setData(data.data) // Set the toDo variable
			});
		}
	}

  return (
      <Card variant="outlined">
		<Box sx={{ minWidth: 275 }}>
			<Box sx={{ width: 500, maxWidth: '100%', display: 'table', margin: '0 auto', padding: '10ch 2ch' }} >
				<h5>kam se kam 3 akshar </h5>
				<Stack spacing={2}>
					<TextField required fullWidth onChange={(e) => setQuery(e.target.value)} label="Search..." id="fullWidth" />
					<Button variant="outlined"  onClick={callAPI}>Get Data</Button>
				</Stack>
			</Box>
			<DataCard data={data} />
		</Box>
	  </Card>    
  );
}
