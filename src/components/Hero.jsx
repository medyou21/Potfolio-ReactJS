// Import de React pour utiliser JSX et créer un composant fonctionnel
import React from "react";

// Import du fichier CSS spécifique au composant Hero
import "../styles/hero.css";

// Définition du composant fonctionnel Hero
// Le composant reçoit une prop `openGithubModal` pour ouvrir une modal au clic
export default function Hero({ openGithubModal }) {
  return (
    // Section principale de la page Hero
    // Classes Bootstrap :
    // - d-flex : active le mode flexbox
    // - flex-column : organise les éléments verticalement
    // - justify-content-center : centre verticalement
    // - align-items-center : centre horizontalement
    // - text-center : centre le texte
    // - hero-section : classe personnalisée pour styles supplémentaires
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center hero-section"
    >
      {/* Titre principal */}
      {/* Classes Bootstrap : 
          - text-white : texte blanc
          - fw-bold : texte en gras
          - display-4 : taille du titre importante */}
      <h1 className="text-white fw-bold display-4">John Doe</h1>

      {/* Sous-titre */}
      {/* Classes Bootstrap : 
          - text-white : texte blanc
          - mb-4 : marge inférieure */}
      <h2 className="text-white mb-4">
        Développeur Web Full Stack
      </h2>

      {/* Bouton pour ouvrir la modal GitHub */}
      {/* Classes Bootstrap : 
          - btn : bouton
          - btn-primary : couleur primaire
          - btn-lg : bouton large */}
      <button
        className="btn btn-primary btn-lg"
        onClick={openGithubModal} // appel de la fonction passée en prop
      >
        En savoir plus
      </button>
    </section>
  );
}
