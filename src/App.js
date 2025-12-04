// Import des composants principaux de l'application
import Header from "./components/Header"; // barre de navigation
import Footer from "./components/Footer"; // pied de page
import { Outlet } from "react-router-dom"; // pour le rendu des routes imbriquées
import React from "react"; // import de React pour JSX

// Composant principal de l'application
function App() {

  return (
    <>
      {/* Header : affichage du menu de navigation en haut de la page */}
      <Header />

      {/* Main : contenu principal de la page */}
      <main className="w-100 pt-0 px-3 px-md-5">
        {/* Outlet : emplacement où s'affichent les composants des différentes routes */}
        <Outlet />
      </main>

      {/* Footer : pied de page avec informations ou liens */}
      <Footer />
    </>
  );
}

// Export du composant pour pouvoir l'utiliser ailleurs dans l'application
export default App;
