import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import './styles/Global.css'; 

function App() {
  return (
    <Router>
      <nav style={{ background: '#001f3f', padding: '10px', display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Início</Link>
        <Link to="/sobre" style={{ color: 'white', textDecoration: 'none' }}>Sobre</Link>
        <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>Portfólio</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;