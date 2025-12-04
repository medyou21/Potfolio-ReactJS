// Import de React pour créer des composants
import React from "react";

// Import du DOM renderer pour React 18+
import ReactDOM from "react-dom/client";

// Import du routeur de React Router v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import des icônes Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

// Import du bundle JS de Bootstrap (pour dropdown, modal, accordion...)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import du composant principal de l'application
import App from "./App";

// Import des pages du site
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

// Import des fichiers CSS globaux
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Définition des routes avec React Router v6
// Chaque route correspond à un chemin et un composant
const router = createBrowserRouter([
  {
    path: "/",           // Chemin racine
    element: <App />,    // Composant parent contenant Header/Footer
    children: [          // Routes enfants qui seront rendues dans <Outlet />
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
      { path: "/legal", element: <Legal /> },
    ],
  },
]);

// Création de la racine React pour le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu de l'application
root.render(
  <React.StrictMode>
    {/* Fournit le routeur à l'application entière */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
