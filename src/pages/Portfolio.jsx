// Import du fichier CSS spécifique au composant Portfolio
import "../styles/card.css";

// Définition du composant fonctionnel Portfolio
export default function Portfolio() {
  // Tableau des projets à afficher dans le portfolio
  const projects = [
    {
      title: "Fresh Food", // Nom du projet
      img: "./images/portfolio/fresh-food.jpg", // Chemin de l'image
      desc: "Site de Vente de Produits Fresh en ligne", // Description courte
      link: "https://example.com", // Lien vers le site
      tech: "Site réalisé avec PHP et MySQL" // Technologies utilisées
    },
    {
      title: "Restaurant Akira",
      img: "./images/portfolio/restaurant-japonais.jpg",
      desc: "Site de Vente de Produits Fresh en ligne",
      link: "https://example.com",
      tech: "Site réalisé avec WordPress"
    },
    {
      title: "Espace Bien Etre",
      img: "./images/portfolio/espace-bien-etre.jpg",
      desc: "Site de Vente de Produits Fresh en ligne",
      link: "https://example.com",
      tech: "Site réalisé avec LARAVEL"
    },
    {
      title: "SEO",
      img: "./images/portfolio/seo.jpg",
      desc: "Amélioration du réferencement d'un site e-commerce",
      link: "https://example.com",
      tech: "Utilisation des outils SEO"
    },
    {
      title: "Création d'une API",
      img: "./images/portfolio/coder.jpg",
      desc: "Création d'une API RESTFULL public",
      link: "https://example.com",
      tech: "PHP - SYMFONY"
    },
    {
      title: "Maquette d'un Site Web",
      img: "./images/portfolio/screens.jpg",
      desc: "Création d'un prototype d'un site",
      link: "https://example.com",
      tech: "Réalisé par FIGMA"
    }
  ];

  return (
    // Conteneur principal en largeur totale, sans padding
    <div className="container-fluid p-0">
      
      {/* Bannière du portfolio */}
      <img 
        src="/images/banner.jpg" 
        alt="Services Banner" 
        className="img-fluid w-100 d-block m-0 p-0" // largeur totale et responsive
        style={{ objectFit: "cover", maxHeight: "380px" }} // ajuste la hauteur et recadre l'image
      />

      {/* Titre et sous-titre centrés */}
      <div className="text-center mb-4">
        <h1>Mon Portfolio</h1>
        <p className="folio-title">Voici quelques unes de mes réalisations</p>
      </div>

      {/* Grille Bootstrap pour les cartes de projets */}
      <div className="row w-100 g-4">
        {projects.map((project, index) => (
          // Colonne responsive : mobile (12), tablette (6), desktop (4)
          <div key={index} className="col-12 col-md-6 col-lg-4">
            
            {/* Carte du projet */}
            <div className="card h-100 shadow-lg">
              
              {/* Image du projet */}
              <img src={project.img} className="card-img-top" alt={project.title} />

              {/* Corps de la carte */}
              <div className="card-body d-flex flex-column">
                
                {/* Titre du projet */}
                <h5 className="card-title">{project.title}</h5>

                {/* Description du projet */}
                <p className="card-text text-muted">{project.desc}</p>

                {/* Bouton pour voir le site, positionné en bas grâce à flex */}
                <div className="text-center mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Voir le site →
                  </a>
                </div>

                {/* Ligne de séparation */}
                <hr className="my-2" />

                {/* Technologies utilisées */}
                <p className="card-text text-dark small">{project.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
