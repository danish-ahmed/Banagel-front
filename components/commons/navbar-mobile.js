import React from "react";
import Flags from "country-flag-icons/react/1x1";

export default function NavbarMobile() {
  return (
    <nav className="navbar navbar-for-mobiles navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
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
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item m-nav-item">
              <a
                className="nav-link close-nav-link"
                aria-current="page"
                href="#"
              >
                <i className="fas fa-times"></i>
              </a>
            </li>
            <li className="nav-item m-nav-item">
              <a
                className="nav-link m-nav-link active"
                aria-current="page"
                href="#"
              >
                Delivery to door or pickup
              </a>
            </li>
            <li className="nav-item m-nav-item">
              <a className="nav-link m-nav-link" href="#">
                Best Price
              </a>
            </li>
            <li className="nav-item m-nav-item">
              <a className="nav-link m-nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item m-nav-item">
              <a className="nav-link m-nav-link" href="#">
                Food Delivery Restaurant
              </a>
            </li>
            <li className="nav-item m-nav-item">
              <a className="nav-link m-nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item m-nav-item dropdown">
              <a
                className="nav-link m-nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Flags.DE title="Germany" className="nav-country-img" />
                &nbsp;German
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    <Flags.DE
                      title="Germany"
                      className="nav-country-img drop-img"
                    />{" "}
                    Germany
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Flags.TR
                      title="Turkey"
                      className="nav-country-img drop-img"
                    />
                    Turkey
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item m-nav-item">
              <a
                className="nav-link m-nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <i className="fas fa-user index-2-nav-icone"></i> Login
              </a>
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-4">
                          <form>
                            <select
                              className="form-select header-form-field"
                              aria-label="Default select example"
                            >
                              <option selected>
                                <span className="flag-icon flag-icon-squared flag-icon-gr"></span>
                                +90
                              </option>
                              <option value="1">+91</option>
                              <option value="2">+92</option>
                              <option value="3">+93</option>
                            </select>
                          </form>
                        </div>
                        <div className="col-md-8">
                          <form>
                            <input
                              type="text"
                              className="form-control header-form-field"
                              id="exampleFormControlInput1"
                              placeholder="Telefone Numbrci"
                            />
                          </form>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <form className="mt-4 mb-4">
                            <a
                              href="#"
                              className="shadow-sm btn btn-group-lg carousel-btn"
                            >
                              Continue with phone number
                            </a>
                          </form>
                        </div>
                      </div>
                      <hr className="hr-carousel-form" />
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <form className="mt-4 mb-2">
                            <a
                              href="#"
                              className="shadow-sm btn btn-group-lg carousel-btn-fb"
                            >
                              <i className="fab fa-facebook"></i> Continue with
                              Facebook
                            </a>
                          </form>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <form className="mt-2 mb-2">
                            <a
                              href="#"
                              className="shadow-sm btn btn-group-lg carousel-btn-site"
                            >
                              <i className="fab fa-google"></i> Continue with
                              Password
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <form className="d-none">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
