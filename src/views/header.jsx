import React from 'react';
import { Button, Grid, Hidden, Input, Toolbar,AppBar, Menu, MenuItem, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { keyframes } from '@emotion/react';
import Car from '@mui/icons-material/CarRepair';
import Color from '@mui/icons-material/FormatColorFill';
import Alarm from '@mui/icons-material/Alarm';
import social from '@mui/icons-material/Public';
import metronom from '@mui/icons-material/AutofpsSelect';
import bank from '@mui/icons-material/AccountBalance';
import currency from '@mui/icons-material/CurrencyExchange';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';





const drawerexam = keyframes`
     from {
         width:0px;
     }
     to {
         width:230px
     }
`;


export default function Header(){
    const myapp = [
       {name:'price-car',link:'/',icon:Car},
       {name:'change-color',link:'pagecolor',icon:Color},   
       {name:'prayng-time',link:'pageprayingtime',icon:Alarm},   
       {name:'social-network',link:'pagesocialnetwork',icon:social},
       {name:'metronome',link:'pagemetronome',icon:metronom},
       {name:'loan',link:'pageloan',icon:bank},
       {name:'currency',link:'pagecurrency',icon:currency}
    ]
    const [open,setOpen] = useState(false);
    const navigate = useNavigate();

    return(
     <>
     <Grid  m='-8px' sx={{backgroundColor:'red'}}>
            <Grid sx={{height:'50px'}}>
            <AppBar  position='fixed'  >
                <Toolbar >
                    <Grid sx={{display:{xs:'none',md:'flex'}}}>
                        <Typography sx={{marginRight:'10px',fontSize:'20px'}}>Myapp</Typography>
                        {myapp.map((app) => (
                           <Grid sx={{borderLeft:'0.2px solid black'}}>
                               
                                    <Button                                    
                                    onClick={() => navigate(app.link)}                                    
                                    sx={{ color:'yellow',display:'block',}}>
                                        {app.name}
                                    </Button>
                                
                           </Grid>
                        ))}
                    </Grid>
                    <Grid sx={{display:{xs:'flex',md:'none'}}}>
                        <IconButton edge='start' color='inherit' aria-label='open drawer'  onClick={() => open ? setOpen(false):setOpen(true)} >
                            <MenuIcon  fontSize='large'/>
                        </IconButton>
                    </Grid>                  
                </Toolbar>
            </AppBar>
            </Grid>
            
            <Grid  >
            {open && <Box position='absolute'  sx={{display:{md:'none'},mt:{overflow:'auto'}, background:'#9c27b0',color:'yellow',height:'87vh',animation:`${drawerexam} 0.1s `,animationFillMode:'forwards',zIndex:3}}>
                                
                        <Box textAlign='end' p={2} sx={{borderBottom:'1px solid black',}}>
                            <Button  sx={{color:'orange'}} onClick={() => setOpen(false)}><CloseIcon/></Button>
                                <Typography textAlign='center'>myapp</Typography>                                 
                        </Box>                                
                                <List sx={{}}>
                                    {myapp.map((app) =>(
                                   <ListItem button onClick={() => navigate(app.link)}  sx={{borderBottom:'0.5px solid black'}}>
                                       <app.icon/>
                                       <ListItemText primary={app.name}/>                                           
                                    </ListItem>
                                    ))}                                                                               
                                </List>                                                                                 
                    </Box>
            }</Grid>




     </Grid>
     </>
    )
}