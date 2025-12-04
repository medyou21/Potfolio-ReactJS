// Import des modules React et Bootstrap nécessaires
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

// Définition du composant fonctionnel GithubModal
// Props :
// - show : booléen pour afficher ou non le modal
// - close : fonction pour fermer le modal
export default function GithubModal({ show, close }) {
  // State pour stocker les informations du profil GitHub
  const [profile, setProfile] = useState(null);

  // useEffect déclenché à chaque ouverture du modal (show)
  useEffect(() => {
    if (show) {
      // Requête vers l'API GitHub pour récupérer les infos du profil
      fetch("https://api.github.com/users/github-john-doe")
        .then((res) => res.json()) // conversion de la réponse en JSON
        .then((data) => setProfile(data)) // mise à jour du state avec les données
        .catch((err) => console.error("Erreur GitHub API :", err)); // gestion des erreurs
    }
  }, [show]); // dépendance : déclenche le fetch à chaque changement de show

  return (
    // Modal Bootstrap
    <Modal
      show={show} // contrôle de l'affichage
      onHide={close} // fonction pour fermer le modal
      centered // centré verticalement
      size="lg" // taille large
      data-bs-theme="dark" // thème sombre
    >
      {/* En-tête du modal avec bouton de fermeture */}
      <Modal.Header closeButton>
        <Modal.Title>Mon Profil GitHub</Modal.Title>
      </Modal.Header>

      {/* Corps du modal */}
      <Modal.Body>
        {/* Affichage conditionnel : chargement si profile est null */}
        {!profile ? (
          <p className="text-center">Chargement...</p>
        ) : (
          <div className="row g-4 justify-content-center">
            
            {/* Avatar GitHub */}
            <div className="col-md-5 text-center">
              <img
                src={profile.avatar_url} // image du profil
                alt="Avatar GitHub"
                className="img-fluid rounded" // responsive + coins arrondis
                style={{ maxWidth: "250px" }} // largeur maximale
              />
            </div>

            {/* Informations utilisateur */}
            <div className="col-md-7 text-start">
              {/* Nom d'utilisateur avec lien vers GitHub */}
              <p>
                <i className="bi bi-person"></i>{" "}
                <strong>
                  <a
                    href={profile.html_url} // lien vers le profil GitHub
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.login}
                  </a>
                </strong>
              </p>

              <hr />

              {/* Localisation */}
              <p>
                <i className="bi bi-geo-alt"></i>{" "}
                {profile.location}
              </p>

              <hr />

              {/* Biographie */}
              <p>
                <i className="bi bi-card-text"></i>{" "}
                {profile.bio ? profile.bio : "Aucune biographie disponible."}
              </p>

              <hr />

              {/* Nombre de repositories publics */}
              <p>
                <i className="bi bi-box"></i>{" "}
                Repositories : {profile.public_repos}
              </p>

              <hr />

              {/* Nombre de followers */}
              <p>
                <i className="bi bi-people"></i>{" "}
                Followers : {profile.followers}
              </p>

              <hr />

              {/* Nombre de personnes suivies */}
              <p>
                <i className="bi bi-person-check"></i>{" "}
                Following : {profile.following}
              </p>
            </div>
          </div>
        )}
      </Modal.Body>

      {/* Pied de modal avec bouton fermer */}
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
