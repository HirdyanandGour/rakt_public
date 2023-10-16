"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const card = (
//   <React.Fragment>
//     <CardContent sx={{ mx: '12px'}}>
//       <Typography variant="h5" component="div">
// 			<Button size="small">CARD NO</Button> 1234567890
//       </Typography>
// 			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
// 				<Button size="small">NAME</Button> {card._name} <Button size="small">Mother Name</Button>{card._name} 
//       </Typography>
// 			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
// 				<Button size="small">Father Name </Button>{card._name}<Button size="small">MOBILE</Button>{card._name}
//       </Typography>
//     </CardContent>
//     <CardActions>
//     </CardActions>
//   </React.Fragment>
// );

export default function DataCard({data}) {
	console.log("*****8data8**********",data)
  return (
    <Box sx={{ minWidth: 275 }}>
			<Box sx={{ width: 500, maxWidth: '100%', display: 'table', margin: '0 auto', padding: '2ch' }} >
      <Card variant="outlined">
			   <React.Fragment>
				 {(data?.length) > 0 ? (
						(data).map( (card) => 
							<CardContent key={card._raid} sx={{ mx: '12px'}}>
							<Typography variant="h5" component="div">
							<Button size="small">CARD NO</Button>{card._raid}
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								<Button size="small">NAME</Button> <b>{card._name}</b> <Button size="small">Mother Name</Button><b>{card._mname}</b>
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								<Button size="small">Father Name </Button><b>{card._fname}</b><Button size="small">MOBILE</Button><b>{card._mobile}</b>
							</Typography>
						</CardContent>
						
					 )
					 ) : ( <p></p>)}			  
			     <CardActions>
			     </CardActions>
			   </React.Fragment>
			</Card>
			</Box>
		</Box>
  );
}
