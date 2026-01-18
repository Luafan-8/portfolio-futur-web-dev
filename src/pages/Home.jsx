import React from 'react';
import Modal from '../components/Modal';
import heroBg from '../assets/images/heroBg.jpg'
import JohnDoeAbout from '../assets/images/johnDoeAbout.jpg'

function Home() {
  return (
    <main>

{/* hero */}
<section className="hero">
  <div className="hero-bg" style={{ backgroundImage: `url(${heroBg})` }}>
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <h1>Bonjour, je suis John Doe</h1>
      <h2>Développeur web full stack</h2>
      <button type="button" className="btn mt-3" data-bs-toggle="modal" data-bs-target="#savoirPlus">
        En savoir plus
      </button>
    </div>
  </div>
</section>


<div className="container mt-5">
  <Modal id="savoirPlus" title="Mon profil Github">
    <p>temp text</p>
  </Modal>
</div>


      {/* a propos et compétecne */}
      <section className="container my-5">
        <div className="card p-4 mx-auto">
          <div className="row">

            {/* a propos */}
            <div className="col-12 col-md-6">
              <h1 className="mb-3">À propos</h1>
              <hr />

              <img
                src={JohnDoeAbout}
                alt="John Doe"
                className="img-fluid mb-3"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam nunc, sagittis quis lacus in, venenatis auctor lorem. In vel magna eget nisi ornare hendrerit sit amet vel orci.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam nunc, sagittis quis lacus in, venenatis auctor lorem. In vel magna eget nisi ornare hendrerit sit amet vel orci.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam diam nunc, sagittis quis lacus in, venenatis auctor lorem. In vel magna eget nisi ornare hendrerit sit amet vel orci.
              </p>
            </div>

            {/* compétence */}
            <div className="col-12 col-md-6">
              <h1 className="mb-3">Mes compétences</h1>
              <hr />

              <p>HTML5 90%</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "90%", backgroundColor: "red" }}></div>
              </div>

              <p>CSS3 80%</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "80%", backgroundColor: "cyan"  }}></div>
              </div>

              <p>JavaScript 70%</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "70%", backgroundColor: "orange" }}></div>
              </div>

              <p>PHP 60%</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "60%", backgroundColor: "darkgreen"  }}></div>
              </div>

              <p>React 50%</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "50%", backgroundColor: "blue"  }}></div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
export default Home;
