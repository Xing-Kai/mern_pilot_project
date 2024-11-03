//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'

//createRoot(document.getElementById('root')).render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
//)


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);