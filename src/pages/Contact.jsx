function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="container my-5">

      {/* titre */}
<<<<<<< HEAD
      <h1 className="mb-2">Contact</h1>
      <p>
        Vous avez un projet ou une question ? N’hésitez pas à me contacter.
      </p>
      <hr />
=======
      <h1 className="mb-2 text-center">Contact</h1>
      <p className="mb-2 text-center">Vous avez un projet ou une question ? N'hésitez pas à me contacter.</p>
       <hr className="short-hr" style={{ width: "35%", margin: "20px auto", }} />
>>>>>>> master

      {/* card */}
      <div className="card p-4 mt-4">
        <div className="row">

          {/* formulaire */}
<<<<<<< HEAD
          <div className="col-12 col-md-6 mb-4">
            <h2 className="mb-3">Formulaire de contact</h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
=======
          <div className="contact-card col-12 col-md-6 mb-4">
            <h2 className="mb-3">Formulaire de contact</h2>
             <hr className="short-hr"/>

            <form onSubmit={handleSubmit}>

              <div className="mb-2">
>>>>>>> master
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                required
              />
            </div>

<<<<<<< HEAD
            <div className="mb-3">
=======
            <div className="mb-2">
>>>>>>> master
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>

<<<<<<< HEAD
            <div className="mb-3">
=======
            <div className="mb-2">
>>>>>>> master
              <input
                type="tel"
                className="form-control"
                placeholder="Téléphone"
              />
            </div>

<<<<<<< HEAD
            <div className="mb-3">
=======
            <div className="mb-2">
>>>>>>> master
              <input
                type="text"
                className="form-control"
                placeholder="Sujet"
              />
            </div>

<<<<<<< HEAD
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
=======
            <div className="mb-2" >
              <textarea
                className="form-control"
                rows="12"
>>>>>>> master
                placeholder="Message"
                required
              ></textarea>
            </div>

<<<<<<< HEAD
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
=======
            <div className="text-center">
                <button type="submit" className="btn btn-primary px-2.5">Envoyer</button>
            </div>
>>>>>>> master

          </form>

          </div>

          {/* Adress */}
          <div className="col-12 col-md-6">
            <h2 className="mb-3">Mes coordonnées</h2>
<<<<<<< HEAD

            <p><strong>Nom :</strong> John Doe</p>
            <p><strong>Adresse :</strong> 10 rue Exemple</p>
            <p><strong>Ville :</strong> 75000 Paris</p>
            <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
            <p><strong>Email :</strong> john.doe@email.com</p>

            {/* google map */}
            <div className="ratio ratio-16x9 mt-3">
              <iframe
                src="https://www.google.com/maps?q=Paris&output=embed"
                title="Google Maps"
                loading="lazy"
              ></iframe>
=======
            <hr className="short-hr" />

            <p className="mb-1 fw-bold fs-4">John Doe</p>
            <p className="mb-1"><i class="bi bi-map"></i> 40 rue Laure Diebold</p>
            <p className="mb-1"><i class="bi bi-geo-alt"></i> 69009 Lyon, France</p>
            <p className="mb-1"><i class="bi bi-phone"></i> 01 23 45 67 89</p>
            <p className="mb-1"><i class="bi bi-envelope-at"></i> john.doe@gmail.com</p>

            {/* google map */}
            <div className="ratio ratio-16x9 mt-4 map-container">
              <iframe src="https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%20Lyon&output=embed"></iframe>
>>>>>>> master
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}

export default Contact;
