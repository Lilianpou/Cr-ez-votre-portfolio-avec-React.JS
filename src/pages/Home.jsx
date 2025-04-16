import React, { useState } from 'react';
import GithubModal from "../composants/GithubModal";
import '../style/Home.css'


const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
      <img src={require ("../img/hero-bg.jpg")}  alt="fond" className="hero-image"></img>
        <div className="hero-text">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>
            En savoir plus
            </button>
        </div>
      </section>

      <GithubModal show={showModal} onClose={() => setShowModal(false)} />

      {/* ABOUT & SKILLS */}
      <section className="about-section">
        <div className="about-container">
          {/* À PROPOS */}
          <div className="about">
            <h3>A propos</h3>
            <img src={require("../img/john-doe-about.jpg")} alt="profil" className="about-img" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectuctus reiciendis impedit aut iure enim pleceat? Natus, neque at</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectuctus reiciendis impedit aut iure enim pleceat? Natus, neque at</p>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectuctus reiciendis impedit aut iure enim pleceat? Natus, neque at</p>
          </div>

          {/* COMPÉTENCES */}
          <div className="skills">
            <h3>Mes compétences</h3>
            {[
              { name: 'HTML5', value: 90, color: 'crimson' },
              { name: 'CSS3', value: 80, color: 'skyblue' },
              { name: 'JAVASCRIPT', value: 70, color: 'orange' },
              { name: 'PHP', value: 60, color: 'lightgreen' },
              { name: 'REACT', value: 50, color: 'deepskyblue' }
            ].map(skill => (
              <div key={skill.name}>
                <p>{skill.name} {skill.value}%</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${skill.value}%`, backgroundColor: skill.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

export default Home;
