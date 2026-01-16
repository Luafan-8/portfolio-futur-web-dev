function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className="container my-5">

      {/* titre */}
      <h1 className="mb-2">Contact</h1>
      <p>
        Vous avez un projet ou une question ? N’hésitez pas à me contacter.
      </p>
      <hr />

      {/* card */}
      <div className="card p-4 mt-4">
        <div className="row">

          {/* formulaire */}
          <div className="col-12 col-md-6 mb-4">
            <h2 className="mb-3">Formulaire de contact</h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Téléphone"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Sujet"
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>

          </form>

          </div>

          {/* Adress */}
          <div className="col-12 col-md-6">
            <h2 className="mb-3">Mes coordonnées</h2>

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
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}

export default Contact;
