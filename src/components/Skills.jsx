// Import du fichier CSS spécifique au composant Skills
import "../styles/skills.css";

// Définition du composant fonctionnel Skills
export default function Skills() {
  // Définition d'un tableau d'objets représentant les compétences
  // Chaque compétence a un nom, un niveau (en %) et une couleur de barre
  const skills = [
    { name: "React", level: 90, color: "bg-primary" },
    { name: "Node.js", level: 80, color: "bg-success" },
    { name: "JavaScript", level: 95, color: "bg-warning" },
    { name: "CSS / Bootstrap", level: 85, color: "bg-info" },
  ];

  return (
    // Colonne responsive : largeur 100% sur mobile, 50% sur tablettes et plus
    <div className="col-12 col-md-6 mb-4 w-100">
      {/* Section principale du composant */}
      <section className="text-start">
        {/* Titre de la section avec marge inférieure */}
        <h2 className="mb-4 skill-title">Compétences</h2>

        {/* Boucle sur le tableau des compétences */}
        {skills.map((skill, index) => (
          // Chaque compétence est dans un div séparé avec marge inférieure
          <div key={index} className="mb-3">
            {/* Nom de la compétence */}
            <h5>{skill.name}</h5>

            {/* Barre de progression Bootstrap */}
            <div className="progress">
              <div
                className={`progress-bar ${skill.color}`} // couleur dynamique
                role="progressbar" // attribut ARIA pour accessibilité
                style={{ width: `${skill.level}%` }} // largeur selon le niveau
                aria-valuenow={skill.level} // niveau actuel pour ARIA
                aria-valuemin="0" // valeur minimale ARIA
                aria-valuemax="100" // valeur maximale ARIA
              >
                {skill.level}% {/* Affichage du pourcentage dans la barre */}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
