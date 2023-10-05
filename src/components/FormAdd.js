import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
  
export default function FormAdd() {
	const [ raid, setRaid ] =  useState('');
	const [ name, setName ] =  useState('');
	const [ mname, setMname ] =  useState('');
	const [ fname, setFname ] =  useState('');
	const [ mobile, setMobile ] =  useState('');
	
	const saveTodo = async (event) => {
		try{
			event.preventDefault();
			// Call your API here
			const response = await fetch('/api/postData', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify({ raid, name, mname, fname, mobile }),
			});

			const data = await response.json();
			console.log(data);  // Handle
			// const raid = raid.current.value;
			// const name = name.current.value;
			// const motherName = mname.current.value;
			// const fatherName = fname.current.value;
			// const mobile = mobile.current.value;

			//console.log( raid, name, motherName, fatherName, mobile );

			//const { rows } = await sql`INSERT INTO TABLE_NAME ( _raid, _name, _fname, _mname, _mobile ) VALUES ( raid, name, fatherName, motherName, mobile )`;
			event.target.reset();
		}catch(e){
			console.error("Error adding document")
		}
	};
  
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{padding: '2ch 2ch'}}>
				<Stack spacing={2}>
					<TextField fullWidth onChange={(e) => setRaid(e.target.value)} label="Ration Card ID" id="raid" />
					<TextField fullWidth onChange={(e) => setName(e.target.value)}  label="Name" id="name" />
					<TextField fullWidth onChange={(e) => setMname(e.target.value)} label="Mother Name" id="mother_name" />
					<TextField fullWidth onChange={(e) => setFname(e.target.value)} label="Father Name" id="father_name" />
					<TextField fullWidth onChange={(e) => setMobile(e.target.value)} label="Mobile" id="mobile" />
					<Button variant="outlined"  onClick={saveTodo}>Add Data</Button>
				</Stack>
			</Card>
    </Box>
  );
}
