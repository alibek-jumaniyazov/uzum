import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style/app.css';
import './style/card.css';
import './style/home.css';
import './style/navbar.css';
import './style/footer.css';
import './style/elektronika.css';
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

const hover1 = document.querySelector('.elektronika1').onmouseenter = hover1on
const text1 = document.querySelector('.elektronikaText')

const hover2 = document.querySelector('.texnika1').onmouseenter = hover2on
const text2 = document.querySelector('.texnikaText')

function hover2on() {
    text2.style.display = 'block'
    text1.style.display = 'none'
}

function hover1on() {
    text1.style.display = 'block'
    text2.style.display = 'none'
}                                          