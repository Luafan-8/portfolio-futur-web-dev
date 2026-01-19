function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="container my-5">

      {/* titre */}
      <h1 className="mb-2 text-center">Contact</h1>
      <p className="mb-2 text-center">Vous avez un projet ou une question ? N'hésitez pas à me contacter.</p>
       <hr className="short-hr" style={{ width: "35%", margin: "20px auto", }} />

      {/* card */}
      <div className="card p-4 mt-4">
        <div className="row">

          {/* formulaire */}
          <div className="contact-card col-12 col-md-6 mb-4">
            <h2 className="mb-3">Formulaire de contact</h2>
             <hr className="short-hr"/>

            <form onSubmit={handleSubmit}>

              <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="tel"
                className="form-control"
                placeholder="Téléphone"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Sujet"
              />
            </div>

            <div className="mb-2" >
              <textarea
                className="form-control"
                rows="12"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="text-center">
                <button type="submit" className="btn btn-primary px-2.5">Envoyer</button>
            </div>

          </form>

          </div>

          {/* Adress */}
          <div className="col-12 col-md-6">
            <h2 className="mb-3">Mes coordonnées</h2>
            <hr className="short-hr" />

            <p className="mb-1 fw-bold fs-4">John Doe</p>
            <p className="mb-1"><i class="bi bi-map"></i> 40 rue Laure Diebold</p>
            <p className="mb-1"><i class="bi bi-geo-alt"></i> 69009 Lyon, France</p>
            <p className="mb-1"><i class="bi bi-phone"></i> 01 23 45 67 89</p>
            <p className="mb-1"><i class="bi bi-envelope-at"></i> john.doe@gmail.com</p>

            {/* google map */}
            <div className="ratio ratio-16x9 mt-4 map-container">
              <iframe src="https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%20Lyon&output=embed"></iframe>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}

export default Contact;
