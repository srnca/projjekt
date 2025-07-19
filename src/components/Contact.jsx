import React from 'react';

function Contact() {
  return (
    <section className="tc-contact-style2">
      <div className="container">
        <div className="contact-form">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2 className="fsz-45 fw-500 text-center mb-50">
                Poďme spolu
                <span className="sub-font fst-italic color-orange1 fw-400">
                  pracovať!
                </span>
              </h2>
              <p className="color-orange1 text-center mb-30">
                <i className="icon-6 bg-orange1 me-2 rounded-circle"></i> Označené polia sú povinné
              </p>
              <form className="form d-block">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="">
                        Celé meno <span className="color-orange1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Vaše meno"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="">
                        email <span className="color-orange1">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Váš email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="">
                        Mobil <span className="color-ccc">(nepovinné)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Vaše telefónne číslo"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="">
                        predmet <span className="color-orange1">*</span>
                      </label>
                      <select
                        name=""
                        id=""
                        className="form-select form-control"
                      >
                        <option value="00"> Kompletná realizácia stavby </option>
                        <option value="01"> 3D návrh stavby </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="">
                        rozpočet{' '}
                        <span className="color-ccc">(nepovinné)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Plánovaný rozpočet pre Váš projekt, napr: 150-500 tis €"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor=""> správa </label>
                      <textarea
                        rows="8"
                        className="form-control"
                        placeholder="Sem napíšte Vašu požiadavku"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="#"
                    className="butn borderd border rounded-pill hover-bg-black bg-white mt-50"
                  >
                    <span>
                      Send Your Message
                      <i className="ms-2 fal fa-long-arrow-right ico-45"></i>
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
