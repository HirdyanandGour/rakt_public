import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../../utils/firebase";
const saveTodo = async () => {
	try{
		console.log('calling function');
		const firestore = getFirestore(app);
		const docRef = await addDoc(collection(firestore, "rakt"), {created: '12-12-12',	father_name: 'test father',id: 1,mobile: '789461230',mother_name: 'test mother',name: 'test name',ra_id: 123456123456,update: '12-12-12'});
		console.log("Docment written withID:" + docRef.id);
	}catch(e){
		console.error("Error adding document")
	}
};

export default function FormAdd() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{padding: '2ch 2ch'}}>
				<Stack spacing={2}>
					<TextField fullWidth label="Ration Card ID" id="raid" />
					<TextField fullWidth label="Name" id="name" />
					<TextField fullWidth label="Mother Name" id="mother_name" />
					<TextField fullWidth label="Father Name" id="father_name" />
					<TextField fullWidth label="Mobile" id="mobile" />
					<Button variant="outlined"  onClick={saveTodo}>Add Data</Button>
				</Stack>
			</Card>
    </Box>
  );
}
