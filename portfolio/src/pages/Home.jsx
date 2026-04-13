import '../styles/Global.css';

export default function Home() {
  return (
    <div className="home-hero">
      <h1>Juan William da Silva Bezerra</h1>
      <p>Estudante de Sistemas de Informação | CIn-UFPE</p>
      <div className="badge-container">
        <span className="badge">Python</span>
        <span className="badge">React</span>
        <span className="badge">Hardware</span>
      </div>
      <a href="mailto:jwsb@cin.ufpe.br" className="btn-contact">Entrar em Contato</a>
    </div>
  );
}