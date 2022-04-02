import logocompanie from "./logo_companie.jpeg";
import logosite from "./logo_site.jpeg";
import "./App.css";
import Footer from "./components/Footer";
import MainNavBar from "./components/MainNavBar";

function App() {
  return (
    <div>
      <MainNavBar />
      <header className="App-header">
        <h3>Logo companie</h3>
        <img src={logocompanie} className="App-logo" alt="logocompanie" />
        <h3>Logo site</h3>
        <img src={logosite} className="App-logo" alt="logosite" />
      </header>
      <Footer />
    </div>
  );
}

export default App;
