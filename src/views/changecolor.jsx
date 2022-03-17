import React from 'react';
import Slider from '@mui/material/Slider';
import {useState} from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';




export default function Changecolor(){
    const [value1,setValue1] = useState(0);
    const [value2,setValue2] = useState(0);
    const [value3,setValue3] = useState(0);
    const [value4,setValue4] = useState('');
    const handleChange = (event) => {
        setValue1(event.target.value);
        const a = value1.toString(16)+''+value2.toString(16)+''+value3.toString(16)
        setValue4(a);
    }
    const handleChange1 = (event) => {
        setValue2(event.target.value);
        const a = value1.toString(16)+''+value2.toString(16)+''+value3.toString(16)
        setValue4(a);
    }
    const handleChange2 = (event) => {        
        setValue3(event.target.value);
        const a = value1.toString(16)+''+value2.toString(16)+''+value3.toString(16)
        setValue4(a);
    }
    return(
       <>
       <Grid container>
       <Grid item xs={4}> 
        <Slider   min={0} max={255} onChange={handleChange} value={value1}
        sx={{color:'red',height:'30px',width:'20vw',marginTop:'20vh'}}/><Box textAlign='center' sx={{ml:'18vw',background:'#ff4081',width:'30px',height:'20px',borderRadius:'30px'}}>{value1.toString(16)}</Box>
        <Slider   min={0} max={255} onChange={handleChange1} value={value2}
        sx={{color:'green',height:'30px',width:'20vw'}}/><Box textAlign='center' sx={{ml:'18vw',background:'#91ff35',width:'30px',height:'20px',borderRadius:'30px'}}>{value2.toString(16)}</Box>
        <Slider   min={0} max={255} onChange={handleChange2} value={value3}
        sx={{color:'blue',height:'30px',width:'20vw'}}/><Box textAlign='center' sx={{ml:'18vw',background:'#33eaff',width:'30px',height:'20px',borderRadius:'30px'}}>{value3.toString(16)}</Box>
        </Grid>

       <Grid item xs={4} >
           <Box sx={{width:'400px',height:'400px',background:`#${value4}`,marginTop:'8vh'}}>

           </Box>
       </Grid>
       <Grid item xs={4} ></Grid>
       </Grid>
       
       </>

    )
}