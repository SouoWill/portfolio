import '../styles/Footer.css';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-content">
        
        <div className="footer-copy">
          <p>&copy; {anoAtual} - Desenvolvido por <a href="www.github.com/souowill">Juan William</a></p>
        </div>
      </div>
    </footer>
  );
}