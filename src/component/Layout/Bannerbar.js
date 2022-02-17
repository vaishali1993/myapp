import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Banner from '../../images/1.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import detail from '../Api/Detail';
import Container from '@mui/material/Container';



// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


function insertdetail(details){
        return(
                <ImageListItem>
                <img src={details.source}></img>
                <ImageListItemBar id={details.id} title={details.name}  position="below"></ImageListItemBar>
                 </ImageListItem>     
        )
}

export default function Bannerbar(props) {
  return (
    <div className='main bggray'>
       <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item lg={12}>
                        <ImageList cols={8}>
                                 { detail.map(insertdetail)}
                     {/*    <ImageListItem>
                                <img src={detail[0].source}></img>
                                <ImageListItemBar title={detail[0].name} subtitle={detail[0].id}></ImageListItemBar>
                        </ImageListItem>
                        <ImageListItem>
                                <img src={detail[1].source}></img>
                                <ImageListItemBar title={detail[1].name} subtitle={detail[1].id}></ImageListItemBar>
                        </ImageListItem>
                        <ImageListItem>
                                <img src={detail[2].source}></img>
                                <ImageListItemBar title={detail[2].name} subtitle={detail[2].id}></ImageListItemBar>
                        </ImageListItem>
                        <ImageListItem>
                                <img src={detail[3].source}></img>
                                <ImageListItemBar title={detail[3].name} subtitle={detail[3].id}></ImageListItemBar>
                        </ImageListItem>
                        <ImageListItem>
                                <img src={detail[4].source}></img>
                                <ImageListItemBar title={detail[4].name} subtitle={detail[3].id}></ImageListItemBar>
                        </ImageListItem>
                        <ImageListItem>
                                <img src={detail[5].source}></img>
                                <ImageListItemBar title={detail[5].name} subtitle={detail[3].id}></ImageListItemBar>
                        </ImageListItem>
                        */}
                        
                </ImageList> 
                </Grid> 



           
             
            </Grid>
          </Box>
        </Container>
    </div>
  );
}
