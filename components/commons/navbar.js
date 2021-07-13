import Head from "next/head";
import Link from "next/link";
import Flags from "country-flag-icons/react/1x1";
import CartModel from "../CartModel";
import { connect } from "react-redux";
const Navbar = ({ cart }) => {
  return (
    <>
      <nav className="navbar navbar-for-desktop navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-none" href="#">
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  id="linkhover"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Delivery to door or pickup
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="linkhover"
                  className="nav-link"
                  href="food-deliver-2.html"
                >
                  Best Price
                </a>
              </li>
              <li className="nav-item">
                <a id="linkhover" className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a id="linkhover" className="nav-link" href="#">
                  Food Delivery Restaurant
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav navbar-nav-2 me-auto mb-2 mb-lg-0 index-2-navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Flags.DE
                      title="Germany"
                      className="nav-country-img drop-img"
                    />
                    &nbsp;&nbsp;&nbsp;German
                  </a>
                  <ul
                    className="dropdown-menu index-2drop-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="index-2-first-li">
                      <a className="dropdown-item" href="#">
                        Select Country <i className="fas fa-times"></i>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Flags.DE
                          title="United States"
                          className="nav-country-img drop-img"
                        />
                        Germany
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <Flags.TR
                          title="United States"
                          className="nav-country-img drop-img"
                        />
                        Turkey
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
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
                                  <i className="fab fa-facebook"></i> Continue
                                  with Facebook
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
                                  <i className="fab fa-google"></i> Continue
                                  with Password
                                </a>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    className="nav-link"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#cartModel"
                  >
                    <i className="index-2-nav-icone fas fa-shopping-cart">
                      {cart.addedItems && cart.addedItems.length > 0 && (
                        <span class="badge badge-danger">
                          {cart.addedItems.length}
                        </span>
                      )}
                    </i>
                  </a>
                </li>
                <CartModel />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Navbar);
