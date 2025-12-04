// Import du fichier CSS spécifique au composant AboutMe
import "../styles/aboutme.css";

// Définition du composant fonctionnel AboutMe
export default function AboutMe() {
  return (
    // Colonne responsive : largeur 100% sur mobile, 50% sur tablettes et plus
    <div className="col-12 col-md-6 mb-4 w-100">
      {/* Section principale du composant */}
      <section className="text-start">
        {/* Titre de la section avec marge inférieure */}
        <h2 className="mb-3 about-title">À propos</h2>

        {/* Conteneur pour l'image avec marge inférieure */}
        <div className="mb-3">
          {/* Image du développeur */}
          <img
            src="/images/john-doe-about.jpg" // chemin relatif depuis /public
            alt="John Doe" // texte alternatif pour accessibilité
            className="img-fluid rounded shadow w-100" // responsive, bord arrondi et ombre
            style={{ maxWidth: "500px" }} // limite la largeur maximale
          />
        </div>

        {/* Paragraphe de description */}
        <p className="lead">
          Développeur web passionné depuis plusieurs années, j'aime créer
          des applications modernes, performantes et adaptées aux besoins
          des utilisateurs. J'ai travaillé sur de nombreux projets utilisant
          React, Node.js, PHP et bien plus encore.
        </p>
      </section>
    </div>
  );
}
