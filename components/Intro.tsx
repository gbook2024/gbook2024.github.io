import Image from "next/image";
import TabletMacIcon from '@mui/icons-material/TabletMac';
import { Box, Button, Grid, Typography } from "@mui/material"

const Intro = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container sx={{ width: '100%', height: '100vh', alignItems: 'center' }}>
        <Grid item xs={6} sx={{ position: 'relative', height: '100%', width: '100%' }}>
          <Image
            fill
            style={{objectFit: 'cover'}}
            src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?q=80&w=2403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" color='primary.light' textAlign='center'>Leave a message, make a guess.</Typography>
          <Typography variant="h1" textAlign='center' sx={{ py: 2 }}>guess'd book.</Typography>
          <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
            <Button variant="outlined" color='info' startIcon={<TabletMacIcon/>}>Download guess'dbook for iOS</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Intro;
