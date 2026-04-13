import '../styles/Sobre.css';

export default function Sobre() {
  return (
    <div className="container sobre-pagina">
      {/* Título Principal da Página */}
      <h1 className="page-title-grande">Sobre Mim</h1>

      <div className="sobre-layout-textual">
        
        {/* lado esquerdo */}
        <aside className="sobre-info-rapida">
          <div className="cabecalho-perfil">
            <span className="iniciais-discretas">JW</span>
            <h3>Juan William</h3>
            <p className="cargo">Estudante de Sistemas de Informação</p>
          </div>
          <hr className="divisor" />
          <ul className="info-lista-limpa">
            <li><strong>📍 Local:</strong> Recife, PE</li>
            <li><strong>🎓 Instituição:</strong> UFPE (CIn)</li>
            <li><strong>💻 Foco:</strong> Back-end & Desenvolvimento Web</li>
            <li><strong>📧 Contato:</strong> <a href="mailto:jwsb@cin.ufpe.br" target= '_blank'>jwsb@cin.ufpe.br</a></li>
          </ul>
        </aside>

        {/* Lado Direito */}
        <main className="sobre-conteudo">
          <section className="sobre-secao">
            <h2>Minha Trajetória</h2>
            <p>
              Atualmente cursando <a href="https://portal.cin.ufpe.br/graduacao/sistemas-de-informacao/"><strong>Sistemas de Informação</strong></a> no Centro de Informática da UFPE. 
              Minha jornada na tecnologia começou em 2023 com a curiosidade em entender como sistemas complexos são construídos. Essa paixão me levou a explorar o desenvolvimento de software, focando tanto na infraestrutura quanto na experiência do usuário.
            </p>
          </section>

          <section className="sobre-secao">
            <h2>Habilidades & Tecnologias</h2>
            <div className="skills-tags">
              <span className="tag-skill">Python (Logic & Pygame)</span>
              <span className="tag-skill">React.js</span>
              <span className='tag-skill'>JavaScript</span>
              <span className="tag-skill">Git & GitHub</span>
              <span className="tag-skill">UX/UI</span>
              <span className="tag-skill">HTML & CSS</span>
              <span className="tag-skill">Lógica de Programação</span>
            </div>
          </section>

          <section className="sobre-secao">
            <h2>Objetivos Atuais</h2>
            <p>
              Busco aprofundar meus conhecimentos em arquitetura de software e design de interação, 
              aplicando os conceitos aprendidos no CIn em projetos práticos e inovadores.
            </p>
          </section>
        </main>

      </div>
    </div>
  );
}