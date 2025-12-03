import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";


export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Colonne 1 : coordonnées */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">John Doe</h5>
            <p>40 rue Laure Diebold
              <br/>69009 Lyon, France
             <br/>+33 1 23 45 67 89
            <br/>john.doe@example.com</p>

           <div className="d-flex gap-3 mt-2">
              <a href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4 social-icon"
              >
                <i className="bi bi-github"></i>
              </a>
              <a href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4 social-icon"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4 social-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : navigation */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Accueil</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 : réalisations */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">Mes Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/portfolio" className="footer-link">Fresh Food</a></li>
              <li><a href="/portfolio" className="footer-link">Restaurant Akira</a></li>
              <li><a href="/portfolio" className="footer-link">Espace Bien Etre</a></li>
              <li><a href="/portfolio" className="footer-link">SEO</a></li>
              <li><a href="/portfolio" className="footer-link">Création d'une API</a></li>
              <li><a href="/portfolio" className="footer-link">Maquette d'un Site Web</a></li>
            </ul>
          </div>

        </div>

        <div className="text-center mt-3">
          © 2025 John Doe — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
