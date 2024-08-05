import { useState } from 'react';
import { Exploremenu } from './components/Exploremenu/Exploremenu';
import NavBar from './components/NavBar/NavBar';
import { Fooddisplay } from './components/Fooddisplay/Fooddisplay';
// src/App.js
import React from 'react';

import './App.css';
import { PlaceOrder } from './components/pages/PlaceOrder/PlaceOrder';
function App() {
import Header from './components/Header/Header';

  const [category,setCategory]=useState("All");
function App() {
  return (
    <div className="App">
        <PlaceOrder/>
        <NavBar />
         <Exploremenu category={category} setCategory={setCategory}/>
         <Fooddisplay category={category}/>
    </div>

      <div className="App">
          <Header/>
      </div>

  );
}
