import './App.css';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import { Exploremenu } from './components/Exploremenu/Exploremenu';
import { Footer } from './components/Footer/Footer';
import { AppDownload } from './components/App/AppDownload';
import { ChatBot } from './components/Chat/ChatBot';
import { Cart } from './components/pages/Cart/Cart'

import { PlaceOrder } from './components/pages/PlaceOrder/PlaceOrder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const[category,setCategory] = useState("All");
  const[showLogin,setShowLogin] = useState(false)
  return (
    <div className="App">
        <NavBar />
         <Exploremenu category={category} setCategory={setCategory}/>
         <Fooddisplay category={category}/>
         <AppDownload/>
         <Footer/>
         <ChatBot/>
      <BrowserRouter>
        {showLogin?<Login setShowLogin={setShowLogin} />:<></>}
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Exploremenu category={category} setCategory={setCategory} />} /> 
          <Route path="/menu" element={<Exploremenu category={category} setCategory={setCategory} />} />
          <Route path="/mobile-app" element={<Fooddisplay category={category} />} />  
          <Route path="/mobile-app" element={<Exploremenu category={category} setCategory={setCategory} />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
