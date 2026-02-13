import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid,Typography,TextField } from '@mui/material';



export default function Currensy(){
    const [ir,setIr] = useState(0);
    const [usd,setUsd] = useState(0);
    const [eur,setEur] = useState(0);
    const [cnh,setCnh] = useState(0);
    const [jpy,setJpy] = useState(0);
    const [aed,setAed] = useState(0);
    const [iqd,setIqd] = useState(0);

    const handleChangeir = (event) => { 
        if (!(isNaN(event.target.value))){ 
        setIr(event.target.value);setUsd(event.target.value/26000);
        setEur(event.target.value/1.094/26000);setCnh(event.target.value/26000*6.39);
        setJpy(event.target.value*118/26000);setAed(event.target.value/105900*3.67);
        setIqd(event.target.value/26000*1460);}
    }    
    const handleChangeusd = (event) => {
        if (!(isNaN(event.target.value))){ 
        setUsd(event.target.value);
        setIr(event.target.value*26000);
        setEur(event.target.value/1.094);setCnh(event.target.value*6.39);
        setJpy(event.target.value*118);setAed(event.target.value*3.67);
        setIqd(event.target.value*1460);}
    }
    const handleChangeeur = (event) => {
        if (!(isNaN(event.target.value))){ 
        setEur(event.target.value);
        setIr(event.target.value*1.094*26000);setUsd(event.target.value*1.094);
        setCnh(event.target.value*1.094*6.39);
        setJpy(event.target.value*1.094*118);setAed(event.target.value*1.094*3.67);
        setIqd(event.target.value*1.094*1460);}        
    }
    const handleChangecnh = (event) => {
        if (!(isNaN(event.target.value))){ 
        setCnh(event.target.value);
        setIr(event.target.value/6.39*26000);setUsd(event.target.value/6.39);
        setEur(event.target.value/6.39/1.094);
        setJpy(event.target.value/6.39*118);setAed(event.target.value/6.39*3.67);
        setIqd(event.target.value/6.39*1460);}        
    }
    const handleChangejpy = (event) => {
        if (!(isNaN(event.target.value))){ 
        setJpy(event.target.value);
        setIr(event.target.value/118*26000);setUsd(event.target.value/118);
        setEur(event.target.value/118/1.094);setCnh(event.target.value/118*6.39);
        setAed(event.target.value/118*3.67);
        setIqd(event.target.value/118*1460);}       
    }
    const handleChangeaed = (event) => {
        if (!(isNaN(event.target.value))){ 
        setAed(event.target.value);
        setIr(event.target.value/3.67*26000);setUsd(event.target.value/3.67);
        setEur(event.target.value/3.67/1.094);setCnh(event.target.value/3.67*6.39);
        setJpy(event.target.value/3.67*118);
        setIqd(event.target.value/3.67*1460);}        
    }
    const handleChangeiqd = (event) => {
        if (!(isNaN(event.target.value))){ 
        setIqd(event.target.value);
        setIr(event.target.value/1460*26000);setUsd(event.target.value/1460);
        setEur(event.target.value/1460/1.094);setCnh(event.target.value/1460*6.39);
        setJpy(event.target.value/1460*118);setAed(event.target.value/1460*3.67);}
                
    }

    return(
       <>
       <Grid container>
       <Grid item xs={3}></Grid>
       <Grid item xs={6}>
            <Box textAlign={'center'} fullWidth sx={{background:'#b8ffef',height:'80vh',marginTop:'5vh',overflow:'auto'}}>
                <TextField size='small' label='IR'  value={ir} onChange={handleChangeir} sx={{marginTop:'2vh',width:'20vw'}}></TextField>
                <Typography sx={{color:'red'}}>{ir} IR</Typography>               
                <TextField size='small' label='USD'  value={usd} onChange={handleChangeusd} sx={{marginTop:'2vh',width:'20vw'}}></TextField>
                <Typography sx={{color:'red'}}>{usd} USD</Typography>
                <TextField size='small' label='EUR' value={eur} onChange={handleChangeeur} sx={{marginTop:'2vh',width:'20vw'}}></TextField>
                <Typography sx={{color:'red'}}>{eur} EUR</Typography>
                <TextField size='small' label='CNH' value={cnh} onChange={handleChangecnh} sx={{marginTop:'2vh',width:'20vw'}}></TextField>
                <Typography sx={{color:'red'}}>{cnh} CNH</Typography>
                <TextField size='small' label='JPY' value={jpy} onChange={handleChangejpy} sx={{marginTop:'2vh',width:'20vw'}}></TextField>
                <Typography sx={{color:'red'}}>{jpy} JPY</Typography>
                <TextField size='small' label='AED' value={aed} onChange={handleChangeaed} sx={{marginTop:'2vh',width:'20vw'}}></TextField>
                <Typography sx={{color:'red'}}>{aed} AED</Typography>
                <TextField size='small' label='IQD' value={iqd} onChange={handleChangeiqd} sx={{marginTop:'2vh',width:'20vw'}}></TextField>
                <Typography sx={{color:'red'}}>{iqd} IQD</Typography>
            </Box>
       </Grid>
       <Grid item xs={3}></Grid>
       </Grid>
       </>

    )
}