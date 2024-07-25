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
    </div>
  );
}

export default App;
