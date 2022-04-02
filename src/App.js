import "./App.css";
import Footer from "./components/Footer";
import MainNavBar from "./components/MainNavBar";
import { Routes } from 'react-router-dom';
import { Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
