import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function GithubModal({ show, close }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (show) {
      fetch("https://api.github.com/users/github-john-doe")
        .then((res) => res.json())
        .then((data) => setProfile(data));
    }
  }, [show]);

  return (
    <Modal show={show} onHide={close} centered>
      <Modal.Header closeButton>
        <Modal.Title>Profil GitHub</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!profile ? (
          <p>Chargement...</p>
        ) : (
          <div className="text-center">
            <img
              src={profile.avatar_url}
              alt="avatar"
              width="120"
              className="rounded-circle mb-3"
            />
            <h3>{profile.login}</h3>
            <p>Followers : {profile.followers}</p>
            <p>Repos publics : {profile.public_repos}</p>
            <a
              className="btn btn-primary"
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir sur GitHub
            </a>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
