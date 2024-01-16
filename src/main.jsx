import React, { StrictMode } from 'react';
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
