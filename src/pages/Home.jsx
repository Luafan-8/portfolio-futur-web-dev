import React from 'react';
import Modal from '../components/Modal';
import heroBg from '../assets/images/heroBg.jpg'
import JohnDoeAbout from '../assets/images/johnDoeAbout.jpg'

function Home() {
  return (
    <main>

{/* penser à l'image qui sera dans le css */}
      
{/* hero */}
<section className="hero">
  <div className="hero-content">
    <h1>John Doe</h1>
    <h2>Développeur Web</h2>
  </div>
</section>

<div className="container mt-5">
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#savoirPlus">
    En savoir plus
  </button>

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

              <p>HTML</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "90%" }}></div>
              </div>

              <p>CSS</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "80%" }}></div>
              </div>

              <p>JavaScript</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "70%" }}></div>
              </div>

              <p>PHP</p>
              <div className="progress mb-3">
                <div className="progress-bar" style={{ width: "60%" }}></div>
              </div>

              <p>React</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: "10%" }}></div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
export default Home;
