import logocompanie from './logo_companie.jpeg';
import logosite  from './logo_site.jpeg';
import './App.css';

function App() {
  return (
    <div>
      <header className='App-header'>
        <h1>Home Page AlphaFBase</h1>
        <h3>Logo companie</h3>
        <img src={logocompanie} className='App-logo' alt="logocompanie" />
        <h3>Logo site</h3>
        <img src={logosite} className='App-logo' alt="logosite" />
      </header>
    </div>
  );
}

export default App;
