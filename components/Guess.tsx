import Image from "next/image";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';

const Guess = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Stack direction='column' rowGap={4} sx={{ width: '100%', alignItems: 'center' }}>
        <Typography variant="h1" color='primary' textAlign='center'>The Joyful Riddle</Typography>
        <Typography variant="h4" color='primary.light' textAlign='center'>Turn Pages, Guess Authors, Who's Behind the Quill?</Typography>
        <Box sx={{ width: '60%', position: 'relative', height: '80vh', alignItems: 'center', justifyContent: 'center' }}>
          <Image
            fill
            style={{objectFit: 'contain'}}
            src="https://images.unsplash.com/photo-1561430900-60ff590e3c94?q=80&w=3274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </Box>
        <Grid container columnSpacing={10} sx={{ width: '80%', alignItems: 'flex-start' }}>
          <Grid item xs={3}>
            <Stack direction='column' rowGap={4}>
              <LooksOneOutlinedIcon/>
              <Typography variant="h5" color='primary'>Join the Joyful Journey.</Typography>
              <Typography variant="body1" color='primary'>Dive into Guess'd Book! Hosts, create your account; Visitors, start leaving anonymous notes filled with happiness and warmth.</Typography>
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <Stack direction='column' rowGap={4}>
              <LooksTwoOutlinedIcon/>
              <Typography variant="h5" color='primary'>Guess, Smile, Repeat.</Typography>
              <Typography variant="body1" color='primary'>Hosts, relish the happy guessing game! Swipe through messages with glee. Visitors, keep the mystery alive with your heartfelt anonymous messages.</Typography>
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <Stack direction='column' rowGap={4}>
              <Looks3OutlinedIcon/>
              <Typography variant="h5" color='primary'>Spread Smiles & Embrace Connections.</Typography>
              <Typography variant="body1" color='primary'>Express your joy! Both hosts and visitors can leave cheerful comments. Connect through positivity and turn every message into a treasured moment.</Typography>
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <Stack direction='column' rowGap={4}>
              <Looks4OutlinedIcon/>
              <Typography variant="h5" color='primary'>Reveal the Magic.</Typography>
              <Typography variant="body1" color='primary'>It's time for the grand reveal! Hosts, discover the authors and express your appreciation. Visitors, revel in the happiness you've shared. Happy moments await – let the joy unfold! </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: 2 }}><Button variant="outlined" color='info'>Get started</Button></Box>
      </Stack>
      <Divider variant='middle' sx={{ width: '100%', mt: 8 }}/>
    </Box>
  )
}

export default Guess;