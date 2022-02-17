import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SendIcon from '@mui/icons-material/Send';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function AutoGrid() {
  return (
    <div className='outer'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={1}>
               
              </Grid>
              <Grid item xs={1}>
               <Typography variant='h6'>Sort By:</Typography>
              </Grid>
              <Grid item xs={1}>
                  <Button variant="contained" endIcon={<StarBorderIcon />}>
                      Rating
                  </Button>
              </Grid>
              <Grid item xs={1}>
                   <Button variant="contained" endIcon={<StarBorderIcon />}>
                      Near u
                  </Button>
              </Grid>
              <Grid item xs={1}>
                  <Button variant="contained" endIcon={<StarBorderIcon />}>
                      Rating
                  </Button>
              </Grid>
              <Grid item xs={1}>
                  <Button variant="contained" endIcon={<StarBorderIcon />}>
                      Rating
                  </Button>
              </Grid>
              <Grid item xs={1}>
                
              </Grid>
            </Grid>
          </Box>
    </div>
  );
}
