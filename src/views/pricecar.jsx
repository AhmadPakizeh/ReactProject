import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid,Typography,TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';




export default function Car(){
    const [accidentrate,setAccidentrate] = useState();
    const [color,setColor] = useState();
    const [pricegol,setPricegol] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
/* ***************** */
var price = parseInt(data.get('baseprice'));

    switch(Number(data.get("colorid"))){      
      case 1:;
        price=price+price*(5/100);break;
      case 3:
        price=price+price*(10/100);break;        
   }
     switch(1400-data.get("productionyear")){
       case 0:break;
       case 1:       
         price=price-price*(10/100);break;
       case 2:
         price=price-price*(15/100);break;
       case 3:
         price=price-price*(20/100);break;
       case 4:
         price=price-price*(23/100);break;  
       case 5:
         price=price-price*(26/100);break;
       case 6:
         price=price-price*(29/100);break;
       case 7:
         price=price-price*(34/100);break;
       default:
         price=price-price*(38/100);break;  
    }

    switch(Number(data.get("insurancedeadline"))){
      case 12:break; 
      case 11:       
        price=price-price*(1/100);break;
      case 10:
        price=price-price*(2/100);break;
      case 9:
        price=price-price*(3/100);break;
      case 8:
        price=price-price*(4/100);break;  
      case 7:
        price=price-price*(5/100);break;
      case 6:
        price=price-price*(6/100);break;
      case 5:
        price=price-price*(7/100);break;
      default:
        price=price-price*(8/100);break;  
   }

   switch(Number(data.get("accidentrate"))){      
      case 1:;break;
      case 2:
        price=price-price*(8/100);break;  
      case 3:
        price=price-price*(13/100);break;
      case 4:
        price=price-price*(18/100);break;
      case 5:
        price=price-price*(23/100);break;
   }











/********************* */
    setPricegol(price);}

    return(
       <>
         <Grid container>
           <Grid item xs={4}></Grid>
           <Grid item xs={4}>
              <Box component='form' onSubmit={handleSubmit} fullwidth textAlign={'center'} sx={{background:'yellow',borderRadius:'5px',mt:'5vh',padding:'20px'}}>
                 <TextField min='4' type={'number'} name='productionyear' required label='production year' 
                 sx={{marginTop:'5vh',width:'20vw'}} onInput={(e) =>{ e.target.value = Math.max(0,parseInt(e.target.value)) }}></TextField>

                 <TextField type={'number'} name='baseprice' required label='base price' sx={{marginTop:'1vh',width:'20vw'}}
                 onInput={(e) =>{ e.target.value = Math.max(0,parseInt(e.target.value)) }}></TextField>

                 <TextField type={'number'} name='insurancedeadline' required label='insurance deadline' sx={{marginTop:'1vh',width:'20vw'}}
                 onInput={(e) =>{ e.target.value = Math.min(12,Math.max(0,parseInt(e.target.value))) }}></TextField>

                 <TextField type={'number'} name='used' required label='used' sx={{marginTop:'1vh',width:'20vw'}}
                 onInput={(e) =>{ e.target.value = Math.max(0,parseInt(e.target.value)) }}></TextField>

                <FormControl >
                <InputLabel id='selectlableaccidentrate' sx={{marginTop:'1vh'}}>accidentrate</InputLabel>
                 <Select value={accidentrate} name='accidentrate'  required label="accidentrate" labelId='selectlableaccidentrate' sx={{marginTop:'1vh',width:'20vw',color:'black'}}>
                    <MenuItem value={1}>without color</MenuItem> 
                    <MenuItem value={2}>one stain of paint</MenuItem>
                    <MenuItem value={3}>two stain of paint</MenuItem>
                    <MenuItem value={4}>few spots of paint</MenuItem>
                    <MenuItem value={5}>crashed</MenuItem>
                 </Select>
                 </FormControl>

                 <FormControl >
                <InputLabel id='selectlablecolor' sx={{marginTop:'1vh'}}>color</InputLabel>
                 <Select value={color} name='colorid' name='colorid' required label="color" labelId='selectlablecolor' sx={{marginTop:'1vh',width:'20vw',color:'black'}}>
                    <MenuItem value={1}>white</MenuItem> 
                    <MenuItem value={2}>red</MenuItem>
                    <MenuItem value={3}>blue</MenuItem>
                    <MenuItem value={4}>black</MenuItem>
                    <MenuItem value={5}>silver</MenuItem>
                 </Select>
                 </FormControl>


                 <Button type='submit' variant='contained' sx={{marginTop:'1vh',width:'20vw'}}>computing</Button>
                 <Typography>price: {pricegol}</Typography>
              </Box>
            

           </Grid>
           <Grid item xs={4}></Grid>
       </Grid>
       </>

    )
}