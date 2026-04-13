import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import './styles/Global.css'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <nav style={{ background: '#001f3f', padding: '15px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Início</Link>
          <Link to="/sobre" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Sobre</Link>
          <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Portfólio</Link>
        </nav>

        <main style={{ flex: '1', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;