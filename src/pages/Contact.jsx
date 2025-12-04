
import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
    setFormData({ nom: "", email: "", telephone: "", sujet: "", message: "" });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center">Contact</h1>
      <p className="contact-title">Pour me contacter en vue d'un entretien ou d'une future
        collaboration, merci de remplir le formulaire de contact.</p>
      <div
        className="card h-100 p-4 shadow-lg"
        style={{
          transition: "all 0.3s ease",
          backgroundColor: "#ffffff", textAlign: "left",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
      >


        <div className="row g-4">
          {/* Colonne Formulaire */}

          <div className="col-md-6">
            <h4 className="card-title mb-4 form-title"  >Formulaire de contact</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 w-100">

                <input
                  type="text"
                  className="form-control mb-3"
                  id="nom"
                  name="nom" placeholder="Votre Nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />


                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  name="email"
                  placeholder="Votre adresse mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />




                <input
                  type="tel"
                  className="form-control mb-3"
                  id="telephone"
                  name="telephone"
                  placeholder="Votre numéro de téléphone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />



                <input
                  type="text"
                  className="form-control mb-3"
                  id="sujet"
                  name="sujet"
                  placeholder="Sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                />


                <div className="col-12 mt-3">

                  <textarea
                    className="form-control mb-3"
                    id="message"
                    name="message"
                    rows="8"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12 mt-3 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary "
                    style={{ transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3399ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Colonne Google Map + coordonnées */}
          <div className="col-md-6">
            <h4 className="card-title mb-4 form-title">Mes Coordonnées</h4>
            <h5>John Doe</h5>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2 fs-6"></i>
              40 rue Laure Diebold<br />
              69009 Lyon, France
            </p>

            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2 fs-6"></i>
              +33 1 23 45 67 89
            </p>

            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2 fs-6"></i>
              john.doe@example.com
            </p>

            <div className="mt-3" style={{ borderRadius: "8px", overflow: "hidden" }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621784!2d4.7964039756518!3d45.77866197108082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1764764374272!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
