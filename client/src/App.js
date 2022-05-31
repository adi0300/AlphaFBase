import "./App.css";
import Footer from "./components/Footer";
//import MainNavBar from "./components/MainNavBar";
import { Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Payment from "./pages/Payment";
import Register from "./pages/Register";
import Login from "./pages/Login";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import AddPlayer from "./pages/AddPlayer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/homeloggedin" element={<HomeLoggedIn/>}/>
        <Route path="/addplayer" element={<AddPlayer/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
