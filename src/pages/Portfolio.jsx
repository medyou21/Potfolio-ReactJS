import "../styles/card.css";



export default function Portfolio() {
  const projects = [
    {
      title: "Fresh Food",
      img: "./images/portfolio/fresh-food.jpg",
      desc: "Site de Vente de Produits Fresh en ligne",
      link: "https://example.com",
      tech: "Site réalisé avec PHP et MySQL"
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
      desc: "Amélioration du éferencement d'un site e-commerce",
      link: "https://example.com",
      tech: "Utilisation dess outils SEO"
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
    
    <div className="container-fluid p-0">
         {/* Bannière */}
    
        <img 
          src="/images/banner.jpg" 
          alt="Services Banner" 
          className="img-fluid w-100 d-block m-0 p-0"
           style={{ objectFit: "cover", maxHeight: "380px" }} 
        />
        <div className=" text-center mb-4 ">
      <h1 className="text-center mb-4">Mon Portfolio</h1>
        <p className="section-title">Voici quelques unes de mes réalisations</p>
        </div>
      <div className="row w-100 g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-lg">
              <img src={project.img} className="card-img-top" alt={project.title} />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-muted">{project.desc}</p>
                <div className="text-center mt-3">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Voir le site →
                </a>
                </div>
                 <hr className="my-3" />
                 <p className="card-text text-muted small">{project.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
