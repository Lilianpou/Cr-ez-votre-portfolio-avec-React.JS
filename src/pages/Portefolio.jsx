import React from "react";
import "../style/Portefolio.css";

const projects = [
  {
    title: "Fresh Food",
    description: "Site de vente de produits frais en ligne",
    tech: "PHP et MySQL",
    image: "../img/portfolio/fresh.jpg",
    link: "#",
  },
  {
    title: "Restaurant Akira",
    description: "Site de vente de produits frais en ligne",
    tech: "WordPress",
    image: "../img/portfolio/sushi.jpg",
    link: "#",
  },
  {
    title: "Espace bien-être",
    description: "Site de vente de produits frais en ligne",
    tech: "LARAVEL",
    image: "../img/portfolio/spa.jpg",
    link: "#",
  },
  {
    title: "SEO",
    description: "Amélioration du référencement d’un site e-commerce",
    tech: "Outils SEO",
    image: "../img/portfolio/seo.jpg",
    link: "#",
  },
  {
    title: "Création d'une API",
    description: "Création d’une API RESTFUL publique",
    tech: "PHP - SYMFONY",
    image: "../img/portfolio/api.jpg",
    link: "#",
  },
  {
    title: "Maquette d'un site web",
    description: "Création d’un prototype de site web",
    tech: "FIGMA",
    image: "../img/portfolio/mockup.jpg",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-banner">
        <img src={require("../img/banner.jpg")} alt="banner" className="img-fluid" />
      </div>

      <section className="text-center my-5">
        <h1>Portfolio</h1>
        <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
        <hr className="portfolio-underline" />
      </section>

      <div className="container">
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4 col-sm-11" key={index}>
              <div className="card project-card h-100">
                <img
                  src={require(project.image)}
                  className="card-img-top project-img"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary mt-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir le site
                  </a>
                  <small className="text-muted mt-2">{project.tech}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
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



export default Portfolio;
