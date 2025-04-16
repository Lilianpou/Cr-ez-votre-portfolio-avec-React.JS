import React from "react";
import "../style/Services.css";

const Services = () => {
  return (
    <div className="services-page">
      {/* Bannière d’en-tête */}
      <div className="banner">
        <img src="/banner.jpg" alt="services" className="banner-img" />
      </div>

      {/* Titre */}
      <section className="services-header">
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <hr className="underline" />
      </section>

      {/* Cartes de services */}
      <section className="services-list">
        <div className="service-card">
          <div className="icon">🚀</div>
          <h3>UX Design</h3>
          <p>
            L’UX Design est une discipline qui consiste à concevoir des produits
            (sites web, applications mobiles, logiciels...) en plaçant
            l’utilisateur au centre des préoccupations. L’objectif est de rendre
            l’expérience la plus fluide et agréable possible.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">💻</div>
          <h3>Développement web</h3>
          <p>
            Le développement de sites web consiste à créer des sites internet en
            utilisant des langages de programmation (HTML, CSS, JavaScript, PHP...)
            et des frameworks (Bootstrap, React, Angular...).
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🔍</div>
          <h3>Référencement</h3>
          <p>
            Le référencement naturel (SEO) est une technique qui consiste à optimiser
            un site web pour le faire remonter dans les résultats des moteurs de
            recherche (Google, Bing...). L’objectif est d’attirer un maximum de
            visiteurs qualifiés.
          </p>
        </div>
      </section>
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

export default Services;
