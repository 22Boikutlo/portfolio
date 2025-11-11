
import { createTheme,ThemeProvider } from '@mui/material';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import '../public/styles/global/styles.css'




const theme = createTheme({
  palette:{
      primary: {
          light: '#df1233',
          main: '#df1233',
          //dark: '#ad0923',
          contrastText: '#fff',
           dark: '#000000',
        },
        secondary: {
          light: '#A5A1A1',
          main: '#A5A1A1',
          dark: '#000000',
          contrastText: '#fff',
        },
    }
})
export default function App({ Component, pageProps }) {

  
    
    return (
      <>    
          <ThemeProvider theme={theme}>
          
            <Component {...pageProps} />
            
          </ThemeProvider> 
       
      </>
    )
} 