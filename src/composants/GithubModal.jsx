import React, { useEffect, useState } from "react";
import "../style/GithubModal.css";

const GithubModal = ({ show, onClose }) => {
  const [user, setUser] = useState(null);
  const username = "John-doe"; // Remplace par ton pseudo GitHub si besoin

  useEffect(() => {
    if (show) {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [show, username]);

  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container bg-dark text-light rounded p-4 shadow-lg">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold">Mon profil GitHub</h5>
          <button onClick={onClose} className="btn-close btn-close-white"></button>
        </div>

        {user ? (
          <div className="d-flex flex-column flex-md-row align-items-center gap-4">
            <img
              src={user.avatar_url}
              alt="avatar"
              className="rounded-circle"
              width="150"
              height="150"
            />
            <div>
              <p><i className="bi bi-person"></i> <a href={user.html_url} target="_blank" rel="noreferrer" className="text-light">{user.name || user.login}</a></p>
              <p><i className="bi bi-geo-alt"></i> {user.location || "Lieu inconnu"}</p>
              <p><i className="bi bi-card-text"></i> {user.bio}</p>
              <p><i className="bi bi-box"></i> Repositories : {user.public_repos}</p>
              <p><i className="bi bi-people"></i> Followers : {user.followers}</p>
              <p><i className="bi bi-person-plus"></i> Following : {user.following}</p>
            </div>
          </div>
        ) : (
          <p>Chargement...</p>
        )}

        <div className="text-end mt-4">
          <button className="btn btn-secondary" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default GithubModal;
