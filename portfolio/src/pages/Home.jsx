import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <span className="welcome-text">Olá, eu sou</span>
        <h1 className="main-name">Juan William</h1>
        <h2 className="main-subtitle">Estudante de Sistemas de Informação</h2>
        <p className="home-description">
          Apaixonado por tecnologia, lógica de programação e pelo desenvolvimento 
          de soluções que impactam o dia a dia. Atualmente construindo minha base 
          no <strong>CIn-UFPE</strong>.
        </p>
        
        <div className="home-actions">
          <a href="/portfolio" className="btn-primary">Ver Projetos</a>
          <a href="/sobre" className="btn-secondary">Sobre Mim</a>
        </div>
      </div>

      {/*<div className="home-footer">
        <div className="tech-stack-minimal">
          <span>Python</span>
          <span className="dot">•</span>
          <span>React</span>
          <span className="dot">•</span>
          <span>Sistemas Digitais</span>
        </div>
      </div>*/}
    </div>
  );
}