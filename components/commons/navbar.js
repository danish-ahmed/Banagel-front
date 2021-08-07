import Head from "next/head";
import Link from "next/link";
import React from "react";
import * as t from "../../redux/types";
import Flags from "country-flag-icons/react/1x1";
import CartModel from "../CartModel";
import { connect } from "react-redux";
import "react-phone-input-2/lib/plain.css";
import PhoneInput from "react-phone-input-2";
import { useRouter } from "next/router";

const Navbar = ({ cart }) => {
  const router = useRouter();
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [customer, setCustomer] = React.useState(null);
  const [customer_token, setCustomerToken] = React.useState("");
  const [message, setMessage] = React.useState(null);
  const [code, setCode] = React.useState("");
  const [dialCode, setDialCode] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { locale } = router;
  React.useEffect(() => {
    setCustomerToken(localStorage.getItem("customer_token"));
  }, []);
  const handleLanguageToggle = (lang) => {
    // alert(locale);
    router.push("/", "/", { locale: lang });
    // switch (locale) {
    //   case "en-US":
    //     router.push("/", "/", { locale: "de" });
    //     break;
    //   case "de":
    //     router.push("/", "/", { locale: "en-US" });
    //     break;
    // }
    // alert(locale);
  };
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("code", dialCode);
    fetch(t.API + `customers/register`, {
      method: "POST",
      // mimeType: "multipart/form-data",
      contentType: "application/json",
      body: formData,
      headers: {
        // "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        } else if (res.ok) {
          setPhone("");
          setEmail("");
          console.log(res.json);
          // setCustomer(res.json());
          return res.json();
        }
      })
      .then((data) => {
        setCustomer(data.customer);
        setMessage(data.smsRes);
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          setError(errorMessage);
        });
      });

    e.preventDefault();
  };
  const handleCodeSubmit = (e) => {
    const formData = new FormData();
    formData.append("authyId", customer.authyId);
    formData.append("email", customer.email);
    formData.append("phone", customer.phone);
    formData.append("code", code);
    fetch(t.API + `customers/verify`, {
      method: "POST",
      // mimeType: "multipart/form-data",
      contentType: "application/json",
      body: formData,
      headers: {
        // "x-auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        } else if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        localStorage.setItem("customer_token", data.token);

        document.getElementById("exampleModal").modal("hide");
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          setError(errorMessage);
        });
      });
    e.preventDefault();
  };
  const handlePhoneChange = (value, data, event, formattedValue) => {
    setDialCode(data.dialCode);
    setPhone(value.slice(data.dialCode.length));
  };
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
                    <li onClick={() => handleLanguageToggle("de")}>
                      <a className="dropdown-item">
                        <Flags.DE
                          title="United States"
                          className="nav-country-img drop-img"
                        />
                        Germany
                      </a>
                    </li>
                    <li onClick={() => handleLanguageToggle("en-US")}>
                      <a className="dropdown-item">
                        <Flags.TR
                          title="United States"
                          className="nav-country-img drop-img"
                        />
                        English
                      </a>
                    </li>
                  </ul>
                </li>
                {!customer_token && (
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
                              {error}
                              {customer ? (
                                <div className="col-md-12">
                                  {message && message.success && (
                                    <p>
                                      {`${message.message} to ${message.cellphone}`}
                                    </p>
                                  )}
                                  <form onSubmit={handleCodeSubmit}>
                                    <input
                                      type="text"
                                      className="form-control header-form-field"
                                      id="verification_code"
                                      value={code}
                                      onChange={(e) => setCode(e.target.value)}
                                      placeholder="Verification Code"
                                    />
                                    <input
                                      type="submit"
                                      value="Verify"
                                      className="shadow-sm btn btn-group-lg carousel-btn"
                                    />
                                  </form>
                                </div>
                              ) : (
                                <div className="col-md-12">
                                  <form onSubmit={handleSubmit}>
                                    <PhoneInput
                                      country={"us"}
                                      // value={phone}
                                      className="form-control header-form-field"
                                      onChange={handlePhoneChange}
                                      required={true}
                                    />
                                    <input
                                      type="email"
                                      className="form-control header-form-field"
                                      id="email"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      placeholder="Email"
                                      required={true}
                                    />
                                    <input
                                      type="submit"
                                      value="Send Verification Code"
                                      className="shadow-sm btn btn-group-lg carousel-btn"
                                    />
                                  </form>
                                </div>
                              )}
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
                )}

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
