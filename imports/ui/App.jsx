import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  { Index } from './views/Index';
import  { Login }  from './views/Login';
import  { Registration }  from './views/Registration';
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";

export const App = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#00695c',
      },
      secondary: {
        main: '#ffd180',
      }
    }
  });
  
  return(
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="registration" element={<Registration />}></Route>        
        </Routes>
      </Router>
    </ThemeProvider>  

  )
};
