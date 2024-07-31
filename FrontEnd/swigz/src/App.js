import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import { Exploremenu } from "./components/Exploremenu/Exploremenu";
import { Footer } from "./components/Footer/Footer";
import { AppDownload } from "./components/App/AppDownload";
import { ChatBot } from "./components/Chat/ChatBot";
import { Cart } from "./components/pages/Cart/Cart";
import { PlaceOrder } from "./components/pages/PlaceOrder/PlaceOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Fooddisplay } from "./components/Fooddisplay/Fooddisplay";
import Home from "./components/Home/Home";
import { LoginContext } from "./components/Login/LoginContext";
import { ContactUs } from "./components/ContactUS/ContactUs";
import Reels from "./components/Reels/Reels";

function App() {
  const [currlogin,SetCurrlogin] = useState('');
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);
  const [showReel, SetShowReel] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        showLogin,
        setShowLogin,
        showReel,
        SetShowReel,
        currlogin,
        SetCurrlogin
      }}
    >
      <div className="App">
        <BrowserRouter>
          {showLogin ? <Login /> : <></>}
          {showReel ? <Reels /> : <></>}
          <NavBar setShowLogin={setShowLogin}  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/menu"
              element={
                <Exploremenu category={category} setCategory={setCategory} />
              }
            />
            <Route path="/mobile-app" element={<AppDownload />} />
            <Route path="/contact us" element={<ContactUs />} />
            <Route path="/basket_icon" element={<Cart />}></Route>
            <Route path="/placeorder" element={<PlaceOrder />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </LoginContext.Provider>
    // <div className="">
    //   <Reels />
    // </div>
  );
}

export default App;
