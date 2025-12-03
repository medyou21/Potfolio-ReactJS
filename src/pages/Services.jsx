import "../styles/services.css";



export default function Services() {
  const services = [
    {
      title: "Développement Web",
      text: "Création de sites modernes, performants et responsives.",
      icon: "bi bi-laptop"
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
    <div className="w-100">
        {/* Bannière */}
    
        <img 
          src="/images/banner.jpg" 
          alt="Services Banner" 
          className="img-fluid w-100 d-block"
           style={{ objectFit: "cover", maxHeight: "380px" }} 
        />
     <div className=" text-center mb-4 ">
      <h1 >Mon offre de Services</h1>
        <p className="section-title">Voici les prestations sur lesquelles je peux intervenir</p>
        </div>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm text-center p-3">
              <i className={`${service.icon} display-4 mb-3`}></i>
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
