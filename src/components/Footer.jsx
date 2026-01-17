import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* PARTIE 1 : Infos John Doe */}
          <div className="col-12 col-md-4 mb-4">
            <h4>John Doe</h4>
            <hr className="bg-light"/>
            <p>10 rue Exemple</p>
            <p>75000 Paris</p>
            <p>01 23 45 67 89</p>
            <p>john.doe@email.com</p>
            <div className="d-flex gap-2 mt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">LinkedIn</a>
            </div>
          </div>

          {/* PARTIE 2 : Navigation bis */}
          <div className="col-12 col-md-4 mb-4">
            <h4>Liens utiles</h4>
            <hr className="bg-light"/>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light">Home</Link></li>
              <li><Link to="/services" className="text-light">Services</Link></li>
              <li><Link to="/portfolio" className="text-light">Portfolio</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
              <li><Link to="/mentions-legales" className="text-light">Mentions légales</Link></li>
            </ul>
          </div>

          {/* PARTIE 3 : Réalisations */}
          <div className="col-12 col-md-4 mb-4">
            <h4>Mes dernière réalisation</h4>
            <hr className="bg-light" />
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant</li>
              <li>Espace bien être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site web</li>
            </ul>
          </div>


        </div>

        {/* copyright */}
        <div className="text-center mt-4">
          <p className="mb-0">© 2026 John Doe - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
