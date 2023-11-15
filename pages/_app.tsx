import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import theme from '../global/theme';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>guess'd book</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;1,100;1,200&display=swap" />
      </Head>
      <CssBaseline />
      <main className="app">
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;