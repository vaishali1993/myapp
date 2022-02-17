import * as React from 'react';


import '../../css/style.css'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import InventoryIcon from '@mui/icons-material/Inventory';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Searchbar(){
    return (
         <div>
              <div className="subheader">
              <Box sx={{ width: '100%' }}>
              <Container maxWidth="xl">
                   <Grid container  spacing={6}>
                    {/* <Grid item xs={1}></Grid> */}
                    <Grid item xs={6}>
                            <Paper
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex',  }}
                            > 
                            <IconButton sx={{ p: '10px' }} aria-label="menu">
                                <LocationOnRoundedIcon className="text-red" />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Location........."
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton> */}
                           
                            </Paper>
                    
                    
                   
                    </Grid>
                    <Grid item xs={6}>
                   
                   <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex',  }}
                    > 
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <InventoryIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Enter Shop"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    {/* <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton> */}
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                <Search />
                    </IconButton>
                    </Paper>
                    
                   
                    </Grid>
                  
                    {/* <Grid item xs={1}>
                    {/* <Item>3</Item> */}
                   {/*} </Grid> */}
                </Grid>
                </Container>
                </Box>
                

                
        
              </div>
              
       </div> 
    )
}

export default Searchbar;
