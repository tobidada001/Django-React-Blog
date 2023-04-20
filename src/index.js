import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HeaderNav from "./components/HeaderNav"

import Footer from "./components/Footer"
import { BrowserRouter } from 'react-router-dom'
import Preloader from './components/Preloader';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter >
    
    <div className="App" id="top">
   

   

    <HeaderNav />
   
      <App />

    <Footer />
    </div>
    </BrowserRouter>
);
