import React from 'react';
import Slider from '@mui/material/Slider';
import {useState} from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite'
import { textAlign } from '@mui/system';
export default function Metronome(){
    const [value,setValue] = useState(0);
    const [on,setOn] = useState(false);
    const handleChange = (event,newValue) => {
        setValue(newValue);
    }
   /************* */ 
   const [pop,setPop] = useState(false);
   /*************** */
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        clearInterval(ly);
        console.log(on)
       var ly = setInterval(function() {
            setOn(!on)}
            ,(60/data.get('metr'))*1000)
                
           
    }
    const clear = () => {
        clearInterval();
    }

  

    return(
       <>
       <Grid container>
       <Grid item xs={4}></Grid>
       <Grid item xs={4}>

        <Box component='form' textAlign={'center'} fullWidth onSubmit={handleSubmit}>


        <Slider id='metr' name='metr'  min={1} max={100} onChange={handleChange} value={value}
        sx={{color:'red',height:'50px',background:'white',width:'40vw',marginTop:'20vh'}}></Slider>
       <Box  sx={{marginLeft:'20vw',width:'60px',heigth:'60px',background:'white'}}>
           <Toolbar>
           <Button onClick={clear} sx={{marginTop:'2vh',width:'5vw',background:'blue',color:'white',height:'5vh',marginLeft:'2vw'}}>stop</Button>
               <Typography ml='11px'>{value}</Typography>
           <Button type='submit' variant='contained' sx={{marginTop:'2vh',width:'5vw',background:'blue',color:'white',height:'5vh',marginLeft:'2vw'}}>start</Button></Toolbar>           
       </Box>
       
       {on ? <Box sx={{background:'white',width:'20px',height:'30px'}}></Box>:''}
       <FavoriteIcon sx={{color:'red',fontSize:'50px'}}/>
       </Box>
       </Grid>
       <Grid item xs={4}></Grid>
       </Grid>
              
       </>

    )
}