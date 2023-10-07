import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

export default function FormSearch() {
	const [query, setQuery] = useState('');
	const [data, setData] = useState(null);
	const callAPI = async () => {
		const response = await fetch('/api/getData', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query }),
		});
		console.log(response)
		setData(response)
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
				<TextField fullWidth onChange={(e) => setQuery(e.target.value)} label="Search..." id="fullWidth" />
				<Button variant="outlined"  onClick={callAPI}>Get Data</Button>
			</Stack>
			</Box>
			<Paper elevation={3}>
					{(data?.length) > 0 ? (
						data.map( (card) => (
							{card}
						) )
					) : ( <p></p>)}
						
			</Paper>
		</Box>
	  </Card>    
  );
}
