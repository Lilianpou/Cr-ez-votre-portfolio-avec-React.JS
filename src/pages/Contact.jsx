import React from "react";
import "../style/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact</h1>
        <p>
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <hr className="underline" />
      </section>

      <section className="contact-container">
        {/* Formulaire */}
        <div className="contact-form">
          <h2>Formulaire de contact</h2>
          <form>
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre adresse email" required />
            <input type="tel" placeholder="Votre numéro de téléphone" required/>
            <input type="text" placeholder="Sujet" required/>
            <textarea placeholder="Votre message" rows="6" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>

        {/* Coordonnées */}
        <div className="contact-info">
          <h2>Mes coordonnées</h2>
          <div className="info">
            <p><strong>John Doe</strong></p>
            <p>📍 40 rue Laure Diebold</p>
            <p>🏙️ 69009 Lyon, France</p>
            <p>📞 10 20 30 40 50</p>
            <p>📧 john.doe@gmail.com</p>
          </div>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=40+Rue+Laure+Diebold,+69009+Lyon&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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

export default Contact;
