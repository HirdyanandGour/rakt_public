import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import app from "../../utils/firebase";
const getData = async () => {
	const firestore = getFirestore(app);
	const data = await getDocs(collection(firestore, "rakt"));
	data.forEach( (doc) => {
		console.log(`${doc.id} => ${doc.data()}`);
	} );
}

export default function About(){
	return(
		<Box sx={{ minWidth: 275 }}>
			<Card variant="outlined" sx={{padding: '2ch 2ch'}}>
				<Stack spacing={2}>
					<Button variant="outlined" onClick={getData}>Get Data</Button>
				</Stack>
			</Card>
		</Box>
	);	
}
