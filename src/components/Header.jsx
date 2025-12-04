// Import de NavLink pour la navigation entre pages (React Router)
import { NavLink } from "react-router-dom";

// Import du CSS de Bootstrap pour utiliser les composants et classes
import "bootstrap/dist/css/bootstrap.min.css";

// Import du fichier CSS spécifique au header
import "../styles/header.css";

// Définition du composant fonctionnel Header
function Header() {
  return (
    // Balise header principale
    <header>
      {/* Barre de navigation Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        {/* Logo ou nom du site, lien vers la page d'accueil */}
        <a className="navbar-brand fw-bold text-uppercase" href="/">
          John Doe
        </a>

        {/* Bouton hamburger pour les écrans mobiles / tablettes */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // indique que le bouton déclenche un collapse
          data-bs-target="#navbarNav" // cible le menu à afficher/cacher
          aria-controls="navbarNav" // accessibilité
          aria-expanded="false" // état initial (menu fermé)
          aria-label="Toggle navigation" // texte pour lecteurs d’écran
        >
          {/* Icône du hamburger */}
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu de navigation qui sera collapsé sur petits écrans */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Liste des liens de navigation */}
          <ul className="navbar-nav ms-auto text-uppercase">
            {/* Chaque élément de la liste est un lien NavLink */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Legal">Mentions Légales</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

// Export du composant pour pouvoir l'importer dans App.jsx ou d'autres composants
export default Header;
