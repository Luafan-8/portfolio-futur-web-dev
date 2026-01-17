function MentionsLegales() {
  return (
    <main className="container my-5">

      <h1 className="text-center mb-2">Mentions légales</h1>
      <hr className="short-hr" style={{ width: "35%", margin: "20px auto", }} />
      
      {/* card */}
      <div className="card mt-4">
        <div className="card-body">


      {/* AJOUTER LES ICON DANS LE TEXTE AVEC CSS */}

          <div className="accordion" id="mentionsAccordion">

            {/* EDITEUR */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#editeur"
                >
                  Éditeur du site
                </button>
              </h2>

              <div
                id="editeur"
                className="accordion-collapse collapse show"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <h3>John Doe</h3>
                  <p><i class="bi bi-map"></i> 40 rue Laure Diebold</p>
                  <p><i class="bi bi-geo-alt"></i> 69009 Lyon, France</p>
                  <p><i class="bi bi-phone"></i> 01 23 45 67 89</p>
                  <p><i class="bi bi-envelope-at"></i> john.doe@gmail.com</p>
                </div>
              </div>
            </div>

            {/* héberger */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#hebergeur"
                >
                  Hébergeur
                </button>
              </h2>

              <div
                id="hebergeur"
                className="accordion-collapse collapse"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <h3>alwaysdata</h3>
                  <p>Adresse2 rue Kellermann</p>
                  <p><i class="bi bi-globe"></i> <a href="www.alwaysdata.com">www.alwaysdata.com</a> </p>
                </div>
              </div>
            </div>

            {/* crédits */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#credits"
                >
                  Crédits
                </button>
              </h2>

              <div
                id="credits"
                className="accordion-collapse collapse"
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">
                  <h3>Crédits</h3>
                  <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" >Centre Européen de formation</a>.</p>
                  <p>Les images utilisé sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/" target="_blank" >Pixabay</a>.</p>
                  <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/fr/icones-gratuites/john-doe" target="_blank" >John doe Icon erstellt von Frrepik - Flaticon</a>.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}

export default MentionsLegales;
