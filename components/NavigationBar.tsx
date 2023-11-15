import * as React from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import {
  AppBar,
  Box,
  Button,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';

const NavigationBar = () => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', zIndex: 4 }}>
        <AppBar position="static" elevation={0} sx={{ borderWidth: 0, transition: 'transform 300ms' }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography>guess'd book</Typography>
            
            <Stack direction='row' spacing={2}>
              <Button variant='text' sx={{ color: '#FFF' }}>About</Button>
              <Button variant='text' sx={{ color: '#FFF' }}>Installation</Button>
            </Stack>
            
            <Button
              variant='outlined'
              startIcon={<AppsIcon/>}
              sx={{ color: '#FFF', borderColor: '#FFF' }}
            >Go to App</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Slide>
  );
}

export default NavigationBar;
