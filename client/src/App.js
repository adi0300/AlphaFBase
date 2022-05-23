import "./App.css";
import Footer from "./components/Footer";
import MainNavBar from "./components/MainNavBar";
import { Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Payment from "./pages/Payment";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
