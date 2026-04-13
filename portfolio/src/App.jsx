import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import './styles/Global.css';

function App() {
  return (
    <Router basename="/">
      <nav className="navbar">
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/portfolio">Portfólio</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;