import React from "react";
import "../style/legal.css";

const Legal = () => {
  return (
    <div className="legal-page">
      <section className="legal-header">
        <h1>Mentions légales</h1>
        <hr className="underline" />
      </section>

      <div className="accordion-container">
        {/* Éditeur du site */}
        <details className="accordion" open>
          <summary>Éditeur du site</summary>
          <div className="accordion-content">
            <p><strong>John Doe</strong></p>
            <p>📍 40 rue Laure Diebold</p>
            <p>🏙️ 69009 Lyon, France</p>
            <p>📞 10 20 30 40 50</p>
            <p>📧 john.doe@gmail.com</p>
          </div>
        </details>

        {/* Hébergeur */}
        <details className="accordion">
          <summary>Hébergeur</summary>
          <div className="accordion-content">
            <p><strong>alwaysdata</strong></p>
            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
            <p>🌐 <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a></p>
          </div>
        </details>

        {/* Crédits */}
        <details className="accordion">
          <summary>Crédits</summary>
          <div className="accordion-content">
            <p><strong>Crédits</strong></p>
            <p>
              Ce site a été réalisé par John Doe, étudiant au{" "}
              <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="noreferrer">
                Centre Européen de formation
              </a>.
            </p>
            <p>
              <em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site </em>
              <a href="https://pixabay.com" target="_blank" rel="noreferrer">Pixabay</a>.
            </p>
            <p>
              La favicon de ce site a été fournie par{" "}
              <a href="https://www.flaticon.com/free-icons/john-doe-icons" target="_blank" rel="noreferrer">
                John doe Icons erstellt von Freepik - Flaticon
              </a>.
            </p>
          </div>
        </details>
      </div>
      <footer className="footer">
        <div>
          <h4>John Doe</h4>
          <p>40 rue Laure Diebold<br />69009 Lyon, France<br />Tel: 10 20 30 40 50<br />john.doe@gmail.com</p>
        </div>
        <div>
          <h4>Liens utiles</h4>
          <ul>
            <li>Accueil</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Me contacter</li>
            <li>Mentions légales</li>
          </ul>
        </div>
        <div>
          <h4>Mes dernières réalisations</h4>
          <ul>
            <li>Fresh Food</li>
            <li>Restaurant Akira</li>
            <li>Espace bien être</li>
            <li>SEO</li>
            <li>Création d'une API</li>
            <li>Maquette d'un site</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Legal;
