import freshFood from "../assets/images/freshFood.jpg"
import restorantJaponais from "../assets/images/restaurantJaponais.jpg"
import espaceBienEtre from "../assets/images/espaceBienEtre.jpg"
import seo from "../assets/images/seo.jpg"
import coder from "../assets/images/coder.jpg"
import screens from "../assets/images/screens.jpg"

function Portfolio() {
  return (
    <main>

 {/* banner en css */}
      {/* contenu */}
      
      <section className="container my-5">

        <h1 className="mb-2">Portfolio</h1>
        <p>Voici quelques-une de mes réalisations.</p>
        <hr />

        <div className="row">

          {/* card 1 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={freshFood}
                className="card-img-top"
                alt="Fresh food"
              />
              <div className="card-body">
                <h2 className="card-title h5">Fresh Food</h2>
                <p className="card-text">
                  Site de vente de produit frais en ligne
                </p>
                <button className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <hr />
              <div className="card-body">
                <p className="mb-0">
                  Site réalisé avec PHP et MySQL
                </p>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={freshFood}
                className="card-img-top"
                alt="Projet 2"
              />
              <div className="card-body">
                <h2 className="card-title h5">Restaurant Akira</h2>
                <p className="card-text">
                  Site de vente de produit frais en ligne 
                </p>
                <button className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <hr />
              <div className="card-body">
                <p className="mb-0">
                  Site réalisé avec Wordpress
                </p>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={espaceBienEtre}
                className="card-img-top"
                alt="Projet 3"
              />
              <div className="card-body">
                <h2 className="card-title h5">Espace bien-être</h2>
                <p className="card-text">
                  Site de vente de produit frais en ligne
                </p>
                <button className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <hr />
              <div className="card-body">
                <p className="mb-0">
                  Sité réalisé avec LARAVEL
                </p>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={seo}
                className="card-img-top"
                alt="Projet 4"
              />
              <div className="card-body">
                <h2 className="card-title h5">SEO</h2>
                <p className="card-text">
                  Amélioration du référencement d'un site e-commerce
                </p>
                <button className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <hr />
              <div className="card-body">
                <p className="mb-0">
                  Utilisation des outils SEO
                </p>
              </div>
            </div>
          </div>

          {/* card 5 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={coder}
                className="card-img-top"
                alt="Projet 5"
              />
              <div className="card-body">
                <h2 className="card-title h5">Création d'une API</h2>
                <p className="card-text">
                  Création d'une API RESTFULL publique
                </p>
                <button className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <hr />
              <div className="card-body">
                <p className="mb-0">
                  PHP - SYMFONY
                </p>
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={screens}
                className="card-img-top"
                alt="Projet 6"
              />
              <div className="card-body">
                <h2 className="card-title h5">Maquette d'un site web</h2>
                <p className="card-text">
                  Création du prototype d'un site
                </p>
                <button className="btn btn-primary">
                  Voir le site
                </button>
              </div>
              <hr />
              <div className="card-body">
                <p className="mb-0">
                  Réaliser avec FIGMA
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Portfolio;
