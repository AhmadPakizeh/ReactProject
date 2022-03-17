import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid,Typography,TextField } from '@mui/material';




export default function Loan(){
    const [monthlyamount,setMonthlyamount] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setMonthlyamount(parseInt((Number(data.get('Loanamount')) + Number(data.get('Loanamount')*(data.get('Interestrate')/100)))/data.get('Instalment')));      
        
    }
    return(
       <>
       <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
            <Box component='form' textAlign={'center'} fullWidth onSubmit={handleSubmit} sx={{mt:'5vh',background:'#ef6c00',height:'350px',color:'white',borderRadius:'20px'}}>
                <TextField id='Instalment' name='Instalment' required label='Instalment' sx={{marginTop:'5vh',width:'20vw'}}></TextField>
                <TextField id='Interestrate' name='Interestrate' required label='Interest rate' sx={{marginTop:'2vh',width:'20vw'}}></TextField>
                <TextField id='Loanamount' name='Loanamount' required label='Loan amount'  sx={{marginTop:'2vh',width:'20vw'}}></TextField>
                <Button type='submit' variant='contained' sx={{marginTop:'2vh',width:'20vw',background:'blue',color:'white'}}>Computing</Button>
                <Box sx={{marginTop:'2vh',color:'white'}}>monthly amount: {monthlyamount}</Box>
            </Box>
            <Typography></Typography>
        </Grid>
        <Grid item xs={4}></Grid>
       </Grid>
       </>

    )
}