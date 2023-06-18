import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import HabitsContextProvider from './HabitsContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <HabitsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HabitsContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
