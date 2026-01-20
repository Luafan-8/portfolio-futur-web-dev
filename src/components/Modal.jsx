import doraemon from "../assets/images/doraemon.png";

function Modal({ id, title }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content github-modal">

          {/* TITRE */}
          <div className="modal-header justify-content-center">
            <h2 className="modal-title">{title}</h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          {/* CORPS */}
          <div className="modal-body p-0">
            <div className="row g-0">

              {/* Left part */}
              <div className="col-12 col-md-6">
                <img
                  src={doraemon}
                  alt="Profil Github"
                  className="img-fluid github-modal-img"
                />
              </div>

              {/* Right part */}
              <div className="col-12 col-md-6 p-4 github-modal-info">
                <p><i class="bi bi-person"> </i><a href="" target="blank">John Doe </a></p>
                <hr className="short-hr" style={{backgroundColor:"grey"}} />

                <p><i class="bi bi-geo-alt"></i>  </p>
                <hr className="short-hr" style={{backgroundColor:"grey"}} />

                <p><i class="bi bi-card-text"></i> As we all know, john Doe's identity is unknow. I just wanted to contribute without being known. </p>
                <hr className="short-hr" style={{backgroundColor:"grey"}} />
         
                <p><i class="bi bi-box"></i> Repositories : 1</p>
                <hr className="short-hr" style={{backgroundColor:"grey"}} />
         
                <p><i class="bi bi-people"></i> Followers : 16</p>
                <hr className="short-hr" style={{backgroundColor:"grey"}} />
         
                <p><i class="bi bi-people"></i> Following : 0</p>
              </div>

            <div className="modal-footer justify-content-end">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>

            </div>
          </div>

        </div>
      </div>

          
    </div>
  );
}

export default Modal;