<<<<<<< HEAD
=======
import banner from "../assets/images/banner.jpg"

>>>>>>> master
function Services() {
  return (
    <main>

<<<<<<< HEAD
      {/* banner en css */}
=======
       <div className="services-banner" style={{backgroundImage: `url(${banner})`,backgroundSize: "cover",backgroundPosition: "center",height: "400px",width: "100%",}}>
        <div className="banner-overlay">
        </div>
      </div>
>>>>>>> master

      {/* contenu */}
      <section className="container my-5">

<<<<<<< HEAD
        <h1 className="mb-2">Mon offres de services</h1>
        <p>
          Voici les prestations sur lequels je peux intervenir 
        </p>
        <hr />

        <div className="row text-center mt-4">

          {/* services 1 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 p-4">
              <div className="mb-3">
                <i className="bi bi-brush fs-1"></i>
              </div>
              <h2 className="h4">UX Design</h2>
              <p>
                Le terme UX vient d'user experience ou expérience utilisateur. Le travail de l'UX designer consiste donc à concevoir une interface accessible et facile à prendre en main pour tout type de support.
              </p>
            </div>
          </div>

          {/* services 2 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 p-4">
              <div className="mb-3">
                <i class="bi bi-code-slash"></i>
              </div>
              <h2 className="h4">Développpement web</h2>
              <p>
                Le développement web consiste à concevoir, créer et gérer des sites web et applications en ligne. Il regroupe toutes les étapes de création, depuis la mise en place de l'architecture d'un site jusqu'à la gestion des serveurs et de l'interface utilisateur
              </p>
            </div>
          </div>

          {/* services 3 */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 p-4 text-center">
              <div className="mb-3">
                <i class="bi bi-search"></i>
              </div>
              <h2 className="h4">Référencement</h2>
              <p>
                Le SEO (Search Engine Optimization), ou référencement naturel, consiste à aider les moteurs de recherche à interpréter votre contenu, et à aider les internautes à trouver votre site et à décider s'ils doivent y accéder ou non via un moteur de recherche.
              </p>
=======
        <h1 className="mb-2 text-center">Mon offre de services</h1>
        <p className="mb-2 text-center">Voici les prestations sur lesquelles je peux intervenir</p>

        <hr className="short-hr" style={{ width: "35%", margin: "20px auto", }} />

        <div className="row text-center mt-4">

          {/* UX Design */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 p-4">
              <div className="mb-3">
                <i className="bi bi-brush fs-1" style={{color:"blue"}} ></i>
              </div>
              <h4 className="h4">UX Design</h4>
              <p>Le terme UX vient d'user experience ou expérience utilisateur. Le travail de l'UX designer consiste donc à concevoir une interface accessible et facile à prendre en main pour tout type de support.</p>
            </div>
          </div>

          {/* Développpement web */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 p-4">
              <div className="mb-3">
                <i className="bi bi-code-slash" style={{ fontSize: "3rem",color:"blue"}}></i>
              </div>
              <h4 className="h4">Développpement web</h4>
              <p>Le développement web consiste à concevoir, créer et gérer des sites web et applications en ligne. Il regroupe toutes les étapes de création, depuis la mise en place de l'architecture d'un site jusqu'à la gestion des serveurs et de l'interface utilisateur</p>
            </div>
          </div>

          {/* Référencement */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 p-4 text-center">
              <div className="mb-3">
                <i class="bi bi-search" style={{ fontSize: "3rem", color:"blue" }}></i>
              </div>
              <h4 className="h4">Référencement</h4>
              <p>Le SEO (Search Engine Optimization), ou référencement naturel, consiste à aider les moteurs de recherche à interpréter votre contenu, et à aider les internautes à trouver votre site et à décider s'ils doivent y accéder ou non via un moteur de recherche.</p>
>>>>>>> master
            </div>
          </div>


        </div>
      </section>

    </main>
  );
}

export default Services;
