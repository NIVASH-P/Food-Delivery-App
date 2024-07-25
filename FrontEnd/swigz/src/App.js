import { useState } from 'react';
<<<<<<< HEAD
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
=======
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import { Exploremenu } from './components/Exploremenu/Exploremenu';
import { Fooddisplay } from './components/Fooddisplay/Fooddisplay';
import { Cart } from './components/pages/Cart/Cart'

import { PlaceOrder } from './components/pages/PlaceOrder/PlaceOrder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const[category,setCategory] = useState("All");
  const[showLogin,setShowLogin] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        {showLogin?<Login setShowLogin={setShowLogin} />:<></>}
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Exploremenu category={category} setCategory={setCategory} />} /> 
          <Route path="/menu" element={<Exploremenu category={category} setCategory={setCategory} />} />
          <Route path="/mobile-app" element={<Fooddisplay category={category} />} />  
          <Route path="/mobile-app" element={<Exploremenu category={category} setCategory={setCategory} />} />  
        </Routes>

        <Cart />
        <PlaceOrder />
      </BrowserRouter>
>>>>>>> 3f3c559 (Assests upload)
    </div>
  );
}

export default App;
