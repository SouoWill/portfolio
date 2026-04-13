import '../styles/Portfolio.css';

export default function Portfolio() {
  const projetos = [
    {
      title: "Infraestrutura Recife (CAD)",
      tags: ["Figma", "UX Design"],
      desc: "Protótipo focado em soluções para alagamentos e urbanismo.",
      discipline: "Concepção de Artefatos Digitais"
    },
    {
      title: "Sistemas Digitais (DS)",
      tags: ["HDL", "Logisim"],
      desc: "Implementação de lógica de hardware e circuitos digitais.",
      discipline: "Sistemas Digitais"
    }
  ];

  return (
    <div className="container">
      <h1 className="page-title">Meu Portfólio</h1>
      <div className="grid">
        {projetos.map((p, i) => (
          <div key={i} className="card">
            <div className="card-header">
              <span className="discipline-tag">{p.discipline}</span>
              <h3>{p.title}</h3>
            </div>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map(t => <span key={t}>#{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}