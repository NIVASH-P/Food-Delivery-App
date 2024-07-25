import { useState } from 'react';
import { Exploremenu } from './components/Exploremenu/Exploremenu';
import NavBar from './components/NavBar/NavBar';
import { Fooddisplay } from './components/Fooddisplay/Fooddisplay';

import './App.css';
import { PlaceOrder } from './components/pages/PlaceOrder/PlaceOrder';
function App() {

  const [category,setCategory]=useState("All");
  return (
    <div className="App">
        <PlaceOrder/>
        <NavBar />
         <Exploremenu category={category} setCategory={setCategory}/>
         <Fooddisplay category={category}/>
    </div>
  );
}

export default App;
