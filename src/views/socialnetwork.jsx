import React from 'react';
import {useState} from 'react';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Ali from '../image/ali.jpg';
import Mohammad from '../image/mohammad.jpg';
import Reza from '../image/reza.jpg';
export default function Socialnetwork(){
    const [user1,setUser1] = useState(false);
    const [user2,setUser2] = useState(false);
    const [user3,setUser3] = useState(false);
    return(
       <>
       <Grid container sx={{background:'blue',mt:'5vh',height:'85vh'}}>
       <Grid item xs={3} sx={{background:'blue',border:'1px solid black'}}>
           {user1 && 
           <Box fullWidth sx={{height:'100px',ml:'5px',color:'white'}}>
               <Box fullWidth sx={{height:'100px',ml:'5px',color:'white'}}><Avatar sx={{height:'100px',ml:'5px',color:'white',width:'100px'}} src={Ali}/></Box>
               <Typography fontSize='20px'>name: ali</Typography>
               <Typography fontSize='20px'>texts: 1</Typography>
               <Typography fontSize='20px'>city: tehran</Typography>
           </Box> }
           {user2 && 
           <Box fullWidth sx={{height:'100px',ml:'5px',color:'white'}}>
               <Box fullWidth sx={{height:'100px',ml:'5px',color:'white',fontsize:'30px'}}><Avatar sx={{height:'100px',ml:'5px',color:'white',width:'100px'}} src={Mohammad}/></Box>
               <Typography fontSize='20px'>name: mohammad</Typography>
               <Typography fontSize='20px'>texts: 1</Typography>
               <Typography fontSize='20px'>city: ilam</Typography>
           </Box> }
           {user3 && 
           <Box fullWidth sx={{height:'100px',ml:'5px',color:'white'}}>
               <Box fullWidth sx={{height:'100px',ml:'5px',color:'white'}}><Avatar sx={{height:'100px',ml:'5px',color:'white',width:'100px'}} src={Reza}/></Box>
               <Typography fontSize='20px'>name: reza</Typography>
               <Typography fontSize='20px'>texts: 1</Typography>
               <Typography fontSize='20px'>city: kurdestan</Typography>
           </Box> }
       </Grid>

       <Grid item xs={6} sx={{background:'blue',border:'1px solid black'}}>
           {user1 &&
           <Box fullWidth textAlign={'center'}> 
           <Typography color='yellow' fontSize='20px' fontFamily='cursive' >Text 1</Typography>
           <Box fullWidth borderBottom='1px solid red'>
               <Typography color='white' ml='5px'mt='5vh'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi possimus ab cupiditate eveniet doloribus earum officiis modi, hic fuga quibusdam voluptatem. Suscipit dignissimos eaque voluptas blanditiis explicabo. Inventore, rerum in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptate a, deleniti, unde quia perspiciatis vitae quae animi nam atque consequuntur adipisci eum omnis assumenda eius quisquam quis est tempore.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellendus, maiores neque eveniet perferendis id libero enim quos iure aut esse delectus sint quam cumque dignissimos voluptate quod, non quidem?</Typography>
           </Box>
           <Typography color='yellow' ml='5px'mt='5px'>like: 50  comment: 0 Release-date:2021/8/4</Typography>
           </Box>
           
           }
           {user2 &&
           <Box fullWidth textAlign={'center'}> 
           <Typography color='yellow' fontSize='20px' fontFamily='cursive' >Text 2</Typography>
           <Box fullWidth borderBottom='1px solid red'>
               <Typography color='white' ml='5px'mt='5vh'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptate a, deleniti, unde quia perspiciatis vitae quae animi nam atque consequuntur adipisci eum omnis assumenda eius quisquam quis est tempore.</Typography>
           </Box>
           <Typography color='yellow' ml='5px'mt='5px'>like: 12  comment: 1 Release-date:2018/8/7</Typography>
           </Box>
           
           }
           {user3 &&
           <Box fullWidth textAlign={'center'}>
            <Typography color='yellow' fontSize='20px' fontFamily='cursive' >Text 2</Typography> 
           <Box fullWidth borderBottom='1px solid red'>
               <Typography color='white' ml='5px'mt='5vh'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel modi quaerat excepturi dicta, autem eligendi assumenda voluptate odit voluptatum eaque corporis, quidem reiciendis quam a! Aperiam tempore exercitationem eius accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptate a, deleniti, unde quia perspiciatis vitae quae animi nam atque consequuntur adipisci eum omnis assumenda eius quisquam quis est tempore.</Typography>
           </Box>
           <Typography color='yellow' ml='5px'mt='5px'>like: 20  comment: 3 Release-date:2020/2/3</Typography>
           </Box>
           
           }



       </Grid>



       <Grid item xs={3} sx={{background:'blue',border:'1px solid black'}}>
          <Button fullWidth onClick={() =>{ setUser1(true);setUser2(false);setUser3(false)}} sx={{height:'5vh',background:'yellow',color:'black'}}>text1</Button>
          <Button fullWidth  onClick={() =>{ setUser1(false);setUser2(true);setUser3(false)}} sx={{height:'5vh',background:'yellow',color:'black',mt:'1vh'}}>text2</Button>
          <Button fullWidth  onClick={() =>{ setUser1(false);setUser2(false);setUser3(true)}} sx={{height:'5vh',background:'yellow',color:'black',mt:'1vh'}}>text3</Button>
       </Grid>
       </Grid>
       </>

    )
}