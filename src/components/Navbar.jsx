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
              <i className="fal fa-globe"></i>
            </a>
            <a href="#" className="icon search_btn">
              <i className="fal fa-search"></i>
            </a>
            <div className="nav-search-box">
              <div className="form-group">
                <input type="text" placeholder="search word" />
                <button>
                  <i className="fal fa-search"></i>
                </button>
              </div>
            </div>
            <a href="#" className="icon side_menu_btn">
              <i className="fal fa-grip-lines"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
