import '../styles/Sobre.css';

export default function Sobre() {
  return (
    <div className="container">
      <div className="sobre-layout">
        
        {/* Lado Esquerdo: Perfil Rápido */}
        <aside className="sobre-sidebar">
          <div className="perfil-foto">
            {/* Se tiver uma foto, coloque na pasta public e mude o src aqui */}
            <div className="foto-placeholder">JW</div>
          </div>
          <h3>Juan Wilque</h3>
          <p className="cargo">Estudante de SI</p>
          <hr />
          <ul className="info-lista">
            <li><strong>📍 Local:</strong> Recife, PE</li>
            <li><strong>🎓 Instituição:</strong> UFPE (CIn)</li>
            <li><strong>💻 Foco:</strong> Python & Web</li>
          </ul>
        </aside>

        {/* Lado Direito: Texto e Trajetória */}
        <main className="sobre-main">
          <section className="sobre-secao">
            <h2>Minha Trajetória</h2>
            <p>
              Atualmente curso o 2º período de <strong>Sistemas de Informação</strong> no Centro de Informática da UFPE. 
              Minha jornada na tecnologia começou com a curiosidade em entender como sistemas complexos são construídos, 
              o que me levou a mergulhar no ecossistema de desenvolvimento de software.
            </p>
          </section>

          <section className="sobre-secao">
            <h2>Habilidades & Tecnologias</h2>
            <div className="skills-grid">
              <div className="skill-item">Python (Pygame & Logic)</div>
              <div className="skill-item">React.js</div>
              <div className="skill-item">Hardware (HDL)</div>
              <div className="skill-item">UX/UI Design (Figma)</div>
            </div>
          </section>

          <section className="sobre-secao">
            <h2>Educação</h2>
            <div className="timeline-item">
              <h4>Bacharelado em Sistemas de Informação</h4>
              <p>Centro de Informática - UFPE | 2025 - Presente</p>
            </div>
          </section>
        </main>

      </div>
    </div>
  );
}