import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from "next/image";
import StarHalfIcon from '@mui/icons-material/StarHalf';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import { Box, Button, Divider, Grid, Typography } from "@mui/material"

const Hosting = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '60%', height: 300, alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" color='primary' textAlign='center'>
          Don't let your good memories slip through.
        </Typography>
        <Typography variant="h5" color='primary' textAlign='center'>
          Have your guests grasp the very moment of happiness.
        </Typography>
      </Box>
      <Box sx={{ width: '60%', position: 'relative', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          fill
          style={{objectFit: 'contain'}}
          src="https://images.unsplash.com/photo-1589779255318-fcc1cd7a38d2?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </Box>

      <Grid container columnSpacing={10} sx={{ width: '80%', alignItems: 'center' }}>
        <Grid item xs={3}>
          <Typography variant="h3" color='primary'>
            An iPad, that's really all you need.
          </Typography>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={7}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h5" color='primary'>
              Store all guess'd book notes at a single secured place. No need to get a new notebook, nor a pen or a pencil.
            </Typography>
            <Box sx={{ mt: 2 }}><Button variant="outlined" color='info' startIcon={<TabletMacIcon/>}>Download guess'dbook for iOS</Button></Box>
          </Box>
        </Grid>

        <Divider variant='middle' sx={{ width: '100%', my: 8 }}/>

        <Grid item xs={3}>
          <Typography variant="h3" color='primary'>
            Your Space, Their Stories.
          </Typography>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={7}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h5" color='primary'>
              Fill your accommodation with exciting stories from all around the world.
            </Typography>
            <Box sx={{ mt: 2 }}><Button variant="outlined" color='info' startIcon={<StarHalfIcon/>}>See the popular hosts</Button></Box>
          </Box>
        </Grid>

        <Divider variant='middle' sx={{ width: '100%', my: 8 }}/>

        <Grid item xs={3}>
          <Typography variant="h3" color='primary'>
            Capturing Moments.
          </Typography>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={7}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h5" color='primary'>
              With guess'dbook, cherish every moment, create lifelong memories.
            </Typography>
            <Box sx={{ mt: 2 }}><Button variant="outlined" color='info' startIcon={<FavoriteIcon/>}>See the most memorable moments</Button></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hosting;
