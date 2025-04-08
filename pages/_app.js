// pages/_app.js
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { SessionProvider } from 'next-auth/react';

const theme = createTheme();

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
