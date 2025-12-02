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
            <p>40 rue Laure Diebold<br/>69009 Lyon, France</p>

            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="text-white footer-icon"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-white footer-icon"><i className="bi bi-github"></i></a>
              <a href="#" className="text-white footer-icon"><i className="bi bi-twitter"></i></a>
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
            <h5 className="text-uppercase">Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Projet 1</a></li>
              <li><a href="#" className="footer-link">Projet 2</a></li>
              <li><a href="#" className="footer-link">Projet 3</a></li>
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
