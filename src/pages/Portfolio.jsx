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
        <hr className="my-0 " style={{background: "grey"}}/>

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
                <h5 className="card-title h5 text-center">Fresh Food</h5>
                <p className="card-text text-center">
                  Site de vente de produit frais en ligne
                </p>
                <div className="text-center">
                  <button className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
              </div>
              <hr className="my-0 " style={{background: "grey"}}/>
              <div className="card-body text-center bg-light">
                <p className="mb-0 text-muted">
                  Site réalisé avec PHP et MySQL
                </p>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={restorantJaponais}
                className="card-img-top"
                alt="Projet 2"
              />
              <div className="card-body">
                <h2 className="card-title h5 text-center">Restaurant Akira</h2>
                <p className="card-text text-center">
                  Site de vente de produit frais en ligne 
                </p>
                <div className="text-center">
                  <button className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
              </div>
              <hr className="my-0 " style={{background: "grey"}}/>
              <div className="card-body text-center bg-light">
                <p className="mb-0 text-muted">
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
                <h5 className="card-title h5 text-center">Espace bien-être</h5>
                <p className="card-text text-center">
                  Site de vente de produit frais en ligne
                </p>
                <div className="text-center">
                  <button className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
              </div>
              <hr className="my-0 " style={{background: "grey"}}/>
              <div className="card-body text-center bg-light">
                <p className="mb-0 text-muted">
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
                <h5 className="card-title h5 text-center">SEO</h5>
                <p className="card-text text-center">
                  Amélioration du référencement d'un site e-commerce
                </p>
                <div className="text-center">
                  <button className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
              </div>
              <hr className="my-0 " style={{background: "grey"}}/>
              <div className="card-body text-center bg-light">
                <p className="mb-0 text-muted">
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
                <h5 className="card-title h5 text-center">Création d'une API</h5>
                <p className="card-text text-center">
                  Création d'une API RESTFULL publique
                </p>
                <div className="text-center">
                  <button className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
              </div>
              <hr className="my-0 " style={{background: "grey"}}/>
              <div className="card-body text-center bg-light">
                <p className="mb-0 text-muted">
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
                <h5 className="card-title h5 text-center">Maquette d'un site web</h5>
                <p className="card-text text-center">
                  Création du prototype d'un site
                </p>
                <div className="text-center">
                  <button className="btn btn-primary">
                    Voir le site
                  </button>
                </div>
              </div>
              
              <hr className="my-0 " style={{background: "grey"}}/>
              <div className="card-body text-center bg-light">
                <p className="mb-0 text-muted">
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
