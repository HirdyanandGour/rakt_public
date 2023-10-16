"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function DataCard({data}) {
  return (
    <Box sx={{ minWidth: 275 }}>
			<Box sx={{ width: 500, maxWidth: '100%', display: 'table', margin: '0 auto', padding: '2ch' }} >
			   <React.Fragment>
				 {(data?.length) > 0 ? (
						(data).map( (card) => 
						<Paper elevation={2} sx={{ margin: '5 auto' }}>
							<CardContent key={ `${card._raid}+${card._name}` } sx={{ mx: '12px'}}>
							<Typography variant="h5" component="div">
							<Button size="small">CARD NO</Button>{card._raid}
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								<Button size="small">NAME</Button> <b>{ card._name.toUpperCase() }</b> <Button size="small">Mother Name</Button><b>{card._mname.toUpperCase() ``}</b>
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								<Button size="small">Father Name </Button><b>{card._fname.toUpperCase()}</b><Button size="small">MOBILE</Button><b>{card._mobile}</b>
							</Typography>
						</CardContent>
						</Paper>
					 )
					 ) : ( <p></p>)}			  
			   </React.Fragment>
			</Box>
		</Box>
  );
}
