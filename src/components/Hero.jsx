import React from "react";
import "../styles/hero.css";


export default function Hero({ openGithubModal }) {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center hero-section"
    >
      <h1 className="text-white fw-bold display-4">John Doe</h1>
      <h2 className="text-white mb-4">
        Développeur Web Full Stack
      </h2>

      <button
        className="btn btn-primary btn-lg"
        onClick={openGithubModal}
      >
        En savoir plus
      </button>
    </section>
  );
}
