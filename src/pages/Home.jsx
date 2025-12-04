// Import des composants utilisés dans la page Home
import Hero from "../components/Hero";          // Section bannière / accueil
import AboutMe from "../components/AboutMe";    // Section "À propos"
import Skills from "../components/Skills";      // Section compétences
import { useState } from "react";              // Hook React pour la gestion d'état
import GithubModal from "../components/GithubModal"; // Modal pour afficher GitHub

// Composant fonctionnel Home
export default function Home() {
  // Déclaration d'un état pour contrôler l'ouverture du modal GitHub
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Section Hero / bannière */}
      <Hero openGithubModal={() => setShowModal(true)} />
      
      {/* Section principale contenant AboutMe et Skills dans une card */}
      <div className="container my-5">
        {/* Card Bootstrap avec ombre et padding */}
        <div className="card shadow-sm p-4">
          <div className="row g-4">
            {/* Colonne pour la section À propos (responsive : 12 colonnes mobile, 6 colonnes desktop) */}
            <div className="col-12 col-lg-6">
              <AboutMe />
            </div>

            {/* Colonne pour la section compétences */}
            <div className="col-12 col-lg-6">
              <Skills />
            </div>
          </div>
        </div>
      </div>

      {/* Modal GitHub contrôlé par l'état showModal */}
      <GithubModal show={showModal} close={() => setShowModal(false)} />
    </>
  );
}
