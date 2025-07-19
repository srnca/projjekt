import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light tc-navbar-style2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/Projjekt.svg" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="nav-contact">
            <div className="links-item">
              <a href="#">
                Slovenská 22 <br/>Prešov 080 01
              </a>
            </div>
            <div className="links-item">
              <a href="#"> projjekt@gmail.com </a>
              <a href="#"> +421 (0) 915 544 456 </a>
            </div>
          </div>
          <div className="nav-icons">
            <a href="#" className="icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:projjekt@gmail.com" className="icon">
              <i className="fal fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
