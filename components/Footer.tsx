import { Box, Grid, Stack, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', justifyContent: 'center', py: 6, bgcolor: '#F5F5F5' }}>
      <Grid container columnSpacing={10} sx={{ width: '80%', alignItems: 'flex-start' }}>
        <Grid item xs={3}>
          <Stack direction='column' rowGap={1}>
            <Typography variant='body1'>Support</Typography>
            <Typography variant='body2' sx={{ cursor: 'pointer' }}>Help Center</Typography>
            <Typography variant='body2' sx={{ cursor: 'pointer' }}>Contact Developers</Typography>
          </Stack>
        </Grid>

        <Grid item xs={3}>
          <Stack direction='column' rowGap={1}>
            <Typography variant='body1'>Connect with us</Typography>
            <Typography variant='body2' sx={{ cursor: 'pointer' }}>Instagram</Typography>
            <Typography variant='body2' sx={{ cursor: 'pointer' }}>X</Typography>
          </Stack>
        </Grid>

        <Grid item xs={3}>
          <Stack direction='column' rowGap={1}>
            <Typography variant='body1'>Customer service</Typography>
            <Typography variant='body2' sx={{ cursor: 'pointer' }}>Terms of Service</Typography>
            <Typography variant='body2' sx={{ cursor: 'pointer' }}>Privacy Policy</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer;
