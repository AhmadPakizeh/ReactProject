import React from 'react';
import {useState} from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';



export default function Prayingtime(){
    const [day,setDay] = useState('شنبه');
    const [open,setOpen] = useState(false);
    const [height,setHeight] = useState('10vh');
    const show =() => {
        
        /*event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        setDay(value);*/
        setOpen(true);        
    }

    return(
       <>
       <Grid container>
          <Grid item xs={4}> </Grid>
          <Grid item xs={4}>
          {open && <Box fullWidth dir='rtl' sx={{background:'blue',mt:`${height}`,color:'white',borderRadius:'5px',marginRight:'5px'}}>
                <Button fullWidth  sx={{color:'white',borderBottom:'3px solid yellow',fontSize:'30px'}}>{day}</Button>
                <Typography fontSize='25px'borderBottom='1px solid black' mr='10px' >اذان صبح: 04:51</Typography>
                <Typography fontSize='25px' borderBottom='1px solid black'mr='10px'>طلوع: 06:14</Typography>
                <Typography fontSize='25px' borderBottom='1px solid black'mr='10px'>اذان ظهر: 12:13</Typography>
                <Typography fontSize='25px' borderBottom='1px solid black'mr='10px'>غروب: 18:12</Typography>
                <Typography fontSize='25px' borderBottom='1px solid black'mr='10px'>اذان مغرب: 18:31</Typography>
                <Typography fontSize='25px'mr='10px'>نیمه شب: 23:31</Typography>
          </Box>} 
          </Grid>
          <Grid item xs={4}>
              <Box fullWidth dir='rtl' sx={{background:'blue',mt:'5vh',color:'white',borderRadius:'5px'}}>
                 <Button fullWidth  onClick={() => {setDay('شنبه');show();setHeight('8vh')}}  sx={{color:'white',borderBottom:'1px solid black'}}><Typography fontSize='25px' >شنبه</Typography></Button>
                 <Button fullWidth onClick={() => {setDay('یکشنبه');show();setHeight('15vh')}} sx={{color:'white',borderBottom:'1px solid black'}}><Typography fontSize='25px' >یکشنبه</Typography></Button>
                 <Button fullWidth onClick={() => {setDay('دوشنبه');show();setHeight('22vh')}} sx={{color:'white',borderBottom:'1px solid black'}}><Typography fontSize='25px' >دوشنبه</Typography></Button>
                 <Button fullWidth onClick={() => {setDay('سه شنبه');show();setHeight('27vh')}} sx={{color:'white',borderBottom:'1px solid black'}}><Typography fontSize='25px' >سه شنبه</Typography></Button>
                 <Button fullWidth onClick={() => {setDay('چهارشنبه');show();setHeight('35vh')}} sx={{color:'white',borderBottom:'1px solid black'}}><Typography fontSize='25px' >چهارشنبه</Typography></Button>
                 <Button fullWidth onClick={() => {setDay('پنجشنبه');show();setHeight('42vh')}} sx={{color:'white',borderBottom:'1px solid black'}}><Typography fontSize='25px' >پنجشنبه</Typography></Button>
                 <Button fullWidth onClick={() => {setDay('جمعه');show();setHeight('49vh')}} sx={{color:'white',borderBottom:'1px solid black'}}><Typography fontSize='25px' >جمعه</Typography></Button>
              </Box>
          </Grid>
       </Grid>
      
       </>

    )
}