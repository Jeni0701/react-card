import React from 'react';
import ReactDOM from 'react-dom/client';
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Home from "./components/home.js"
// import Card from "./components/card.js"
import Order from './components/order.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Home/> */}
    {/* <Card/> */}
    <Order/>
   
  </React.StrictMode>
)


