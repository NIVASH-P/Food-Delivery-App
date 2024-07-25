import { useState } from 'react';
import { Exploremenu } from './components/Exploremenu/Exploremenu';
import NavBar from './components/NavBar/NavBar';
import { Fooddisplay } from './components/Fooddisplay/Fooddisplay';
import { Footer } from './components/Footer/Footer';
import { AppDownload } from './components/App/AppDownload';

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
         <AppDownload/>
         <Footer/>
    </div>
  );
}

export default App;
