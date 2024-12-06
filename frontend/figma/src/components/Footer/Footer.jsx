
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h1 className="footer-logo">MERA <span>Bestie</span></h1>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="footer-credit">© 2024 MERA Bestie</p>
      </div>
      <div className="footer-right">
        <h3>Contact Information</h3>
        <p>318 Sajjad Satra Avdhodji Ahojaa Adjataa,<br />Sgd Natha Abba 12232,<br />India</p>
      </div>
    </footer>
  );
};

export default Footer;
