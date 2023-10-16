"use client"
import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
  
export default function FormAdd() {
	const [ raid, setRaid ] =  useState('');
	const [ name, setName ] =  useState('');
	const [ mname, setMname ] =  useState('');
	const [ fname, setFname ] =  useState('');
	const [ mobile, setMobile ] =  useState('');
	const [ open, setOpen ] = useState(false);
	const [message, setMessage] = useState('');
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
			if (response.ok === true) {
				setOpen(true);
				setRaid("");
				setName("");
				setMname("");
				setFname("");
				setMobile("");
				setMessage("Data added suuccessfully")
			}else{
				throw new Error('Failed to add data')
			}
		}catch(e){
			console.error("Error adding document")
		}
	};
  
  return (
	<Card variant="outlined">
		<Box sx={{ minWidth: 275 }}>
			<Box sx={{ width: 500, maxWidth: '100%', display: 'table', margin: '0 auto', padding: '10ch 2ch' }}>
				<h5>Sahi jankari record me add kare</h5>
				<Stack spacing={2}>
					{ (open)? <Alert severity="success" onClose={ () => setOpen({open}) } > { message } </Alert> : ''}
					<TextField required fullWidth onChange={(e) => setRaid(e.target.value)} label="Ration Card ID e.g. 123456789012" id="raid" value={raid} />
					<TextField required fullWidth onChange={(e) => setName(e.target.value)}  label="Name e.g. amit" id="name" value={name}/>
					<TextField fullWidth onChange={(e) => setMname(e.target.value)} label="Mother Name e.g. madhu" id="mother_name" value={mname} />
					<TextField fullWidth onChange={(e) => setFname(e.target.value)} label="Father Name e.g. sumit" id="father_name" value={fname} />
					<TextField fullWidth onChange={(e) => setMobile(e.target.value)} label="Mobile e.g. 9876543210" id="mobile" value={mobile} />
					<Button variant="outlined"  onClick={saveTodo}>Add Data</Button>
				</Stack>
			</Box>
    	</Box>
	</Card>

  );
}
