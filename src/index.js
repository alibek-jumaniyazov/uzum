import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style/app.css';
import './style/card.css';
import './style/home.css';
import './style/navbar.css';
import './style/biblateka.css';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChakraProvider>
);
