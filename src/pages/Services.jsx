// Import du fichier CSS spécifique au composant Services
import "../styles/services.css";

// Définition du composant fonctionnel Services
export default function Services() {
  // Tableau contenant les différents services proposés
  const services = [
    {
      title: "Développement Web",
      text: "Création de sites modernes, performants et responsives.",
      icon: "bi bi-laptop" // icône Bootstrap
    },
    {
      title: "Design UI / UX",
      text: "Conception d’interfaces claires, intuitives et attractives.",
      icon: "bi bi-palette"
    },
    {
      title: "SEO & Référencement",
      text: "Optimisation de la visibilité et du positionnement dans les moteurs de recherche.",
      icon: "bi bi-graph-up-arrow"
    },
    {
      title: "Applications React",
      text: "Développement d’applications dynamiques et scalables.",
      icon: "bi bi-lightning"
    },
    {
      title: "Maintenance & Support",
      text: "Suivi technique, corrections et mises à jour.",
      icon: "bi bi-tools"
    },
    {
      title: "API & Back-end",
      text: "Création d’API sécurisées en Node.js.",
      icon: "bi bi-server"
    }
  ];

  return (
    // Conteneur principal en pleine largeur et sans padding
    <div className="container-fluid p-0">
      
      {/* Bannière du composant Services */}
      <img 
        src="/images/banner.jpg" // chemin relatif depuis /public
        alt="Services Banner" // texte alternatif pour accessibilité
        className="img-fluid w-100 d-block" // responsive et prend toute la largeur
        style={{ objectFit: "cover", maxHeight: "380px" }} // ajuste le rendu de l'image
      />

      {/* Titre et sous-titre centrés */}
      <div className="text-center mb-4">
        <h1>Mon offre de Services</h1>
        <p className="service-title">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
      </div>

      {/* Grille responsive pour les cards de services */}
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            {/* Card individuelle pour chaque service */}
            <div className="card h-100 shadow-sm text-center p-3">
              {/* Icône du service */}
              <i className={`${service.icon} display-4 mb-3`}></i>

              {/* Contenu de la card */}
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text text-muted">{service.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
