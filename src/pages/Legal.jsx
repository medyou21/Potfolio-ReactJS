import React from "react";
import "../styles/legal.css";

export default function MentionsLegales() {
  return (
    <div className="container my-5">
      {/* Empêcher l'indexation par les moteurs */}
      <meta name="robots" content="noindex,nofollow" />

      <h1 className="mb-4 text-center legal-title">Mentions légales</h1>

      <div className="accordion" id="mentionsAccordion">

        {/* Éditeur du site */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEditor">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEditor"
              aria-expanded="true"
              aria-controls="collapseEditor"
            >
              Éditeur du site
            </button>
          </h2>

          <div
            id="collapseEditor"
            className="accordion-collapse collapse show"
            aria-labelledby="headingEditor"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body text-start">
              <h5 className="mb-2">John Doe</h5>

              <p className="mb-1">
                <i className="bi bi-geo-alt-fill me-2 fs-6"></i>
                40 rue Laure Diebold<br />
                69009 Lyon, France
              </p>

              <p className="mb-1">
                <i className="bi bi-telephone-fill me-2 fs-6"></i>
                +33 1 23 45 67 89
              </p>

              <p className="mb-0">
                <i className="bi bi-envelope-fill me-2 fs-6"></i>
                john.doe@example.com
              </p>
            </div>
          </div>
        </div>

        {/* Hébergeur du site */}
        <div className="accordion-item text-start">
          <h2 className="accordion-header" id="headingHost">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHost"
              aria-expanded="false"
              aria-controls="collapseHost"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseHost"
            className="accordion-collapse collapse"
            aria-labelledby="headingHost"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <h5>alwaysdata</h5>
              <p className="bi bi-geo-alt-fill me-2"> 91 rue du Faubourg Saint Honoré - 75008 Paris.</p>
              <p><i className="bi bi-globe me-2"></i>
                <a href="https://www.alwaysdata.com/fr/"
                  target="_blank"
                  rel="noopener noreferrer nofollow" >
                  https://www.alwaysdata.com/fr/
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Crédits */}
        <div className="accordion-item text-start">
          <h2 className="accordion-header" id="headingCredits">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCredits"
              aria-expanded="false"
              aria-controls="collapseCredits"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseCredits"
            className="accordion-collapse collapse"
            aria-labelledby="headingCredits"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              <h5> Crédits</h5>
              <p>Ce site a été réalisé par Jhon Doe, étudiant au
                <a href="https://www.centre-europeen-formation.fr/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i>Centre Europeen de Formation</i>
                </a>
              </p>
              <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site
                <a href="https://pixabay.com/fr/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i>Pixabay </i>
                </a>
              </p>
              <p>la favicon de ce ssite a été fournie par
                <a href="https://www.flaticon.com/free-icons/john-doe"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i>john doe icons erstellt von freepik - flaticon</i>
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
