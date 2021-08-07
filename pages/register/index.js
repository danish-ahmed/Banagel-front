import React from "react";
import * as t from "../../redux/types";
import { useDropzone } from "react-dropzone";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/commons/layout";
import Navbar from "../../components/commons/navbar";
import NavbarMobile from "../../components/commons/navbar-mobile";

export default function Register() {
  const router = useRouter();

  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    shopname: "",
    address: "",
    commercialID: "",
    // phone: "",
    category: "",
    file: null,
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState("");
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [phone, setPhone] = React.useState();

  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => setValues({ ...values, ["file"]: files[0] }),
  });

  const [categories, setCategories] = React.useState([]);
  const handleChange = (prop) => (event) => {
    setLoading(false);
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("firstname", values.firstname),
      formData.append("lastname", values.lastname),
      formData.append("email", values.email),
      formData.append("shopname", values.shopname),
      formData.append("address", values.address),
      formData.append("commercialID", values.commercialID),
      formData.append("phone", phone),
      formData.append("segment", values.category),
      formData.append("file", values.file),
      formData.append("password", values.password),
      fetch(t.API + "/shops/register", {
        method: "POST",
        mimeType: "multipart/form-data",
        contentType: false,
        body: formData,
      })
        .then((res) => {
          if (res.ok) {
            setIsSubmit(true);
            setTimeout(function () {
              router.push("/");
            }, 500);
            // alert("Perfect! ");
          } else if (!res.ok) {
            throw res;
          }
          res.json();
        })
        .catch((err) => {
          err.text().then((errorMessage) => {
            setError(errorMessage);
          });
        });
    e.preventDefault();
  };
  React.useEffect(() => {
    // setValues({ ...values, ["owner"]: localStorage.getItem("user").id });
    async function getData() {
      const response = await fetch(t.API + "segments", {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
        }),
      });
      let result = await response.json();
      setCategories(result);
    }
    getData();
  }, []);
  const handleChangeCategory = (event) => {
    setValues({ ...values, ["category"]: event.target.value });
  };
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <header>
          <Navbar />
          <NavbarMobile />
        </header>
        <section>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <form onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="col-md-12">
                      <h1 class="register-h1">Registration Details</h1>
                    </div>
                  </div>
                  {error && (
                    <div class="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  {isSubmit && (
                    <div class="alert alert-success" role="alert">
                      Thankyou for registering we will review your profile and
                      let you know
                    </div>
                  )}
                  <div class="row g-3 mt-5">
                    <div class="col-md-2">
                      <label for="staticEmail2">
                        <h6>Name</h6>
                      </label>
                    </div>
                    <div class="col-md-5">
                      <input
                        required={true}
                        type="text"
                        class="form-control-1"
                        id="firstname"
                        name="firstname"
                        value={values.firstname}
                        onChange={handleChange("firstname")}
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-md-5">
                      <input
                        required={true}
                        type="text"
                        class="form-control-1"
                        id="lastname"
                        name="lastname"
                        value={values.lastname}
                        onChange={handleChange("lastname")}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2">
                      <div class="form-group">
                        <label for="staticEmail2">
                          <h6>Address</h6>
                        </label>
                      </div>
                    </div>
                    <div class="col-md-10">
                      <textarea
                        class="form-control-2"
                        id="address"
                        rows="4"
                        name="address"
                        value={values.address}
                        onChange={handleChange("address")}
                        placeholder="Address"
                      ></textarea>
                    </div>
                    <div class="row g-3 mt-5">
                      <div class="col-md-2">
                        <label for="staticEmail2">
                          <h6>Shop Name</h6>
                        </label>
                      </div>
                      <div class="col-md-10">
                        <input
                          required={true}
                          type="text"
                          class="form-control-3"
                          id="shopname"
                          name="shopname"
                          value={values.shopname}
                          onChange={handleChange("shopname")}
                          placeholder="Name of the Shop"
                        />
                      </div>
                    </div>
                    <div class="row g-3 mt-5">
                      <div class="col-md-2">
                        <label for="staticEmail2">
                          <h6>Segment</h6>
                        </label>
                      </div>
                      <div class="col-md-10">
                        <select
                          class="form-control"
                          id="category"
                          onChange={handleChangeCategory}
                        >
                          <option value="select" disabled={true}>
                            Select Segment
                          </option>
                          {categories.length > 0 &&
                            categories.map((category) => (
                              <option value={category._id}>
                                {category.name.en}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div class="col-md-10"></div>
                    </div>
                    <div class="row g-3 mt-5">
                      <div class="col-md-2">
                        <label for="staticEmail2">
                          <h6>Commercial ID</h6>
                        </label>
                      </div>
                      <div class="col-md-10">
                        <input
                          required={true}
                          type="text"
                          class="form-control-3"
                          id="commercialID"
                          placeholder="Commercial ID"
                          name="commercialID"
                          value={values.commercialID}
                          onChange={handleChange("commercialID")}
                        />
                      </div>
                    </div>
                    <div class="row g-3 mt-5">
                      <div class="col-md-2">
                        <label for="staticEmail2">
                          <h6>Email</h6>
                        </label>
                      </div>
                      <div class="col-md-10">
                        <input
                          required={true}
                          type="email"
                          class="form-control-3"
                          id="email"
                          placeholder="Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange("email")}
                        />
                      </div>
                    </div>
                    <div class="row g-3 mt-5">
                      <div class="col-md-2">
                        <label for="password">
                          <h6>Password</h6>
                        </label>
                      </div>
                      <div class="col-md-10">
                        <input
                          required={true}
                          type="password"
                          class="form-control-3"
                          id="password"
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onChange={handleChange("password")}
                        />
                      </div>
                    </div>
                    <div class="row g-3 mt-5">
                      <div class="col-md-2">
                        <label for="phone">
                          <h6>Phone</h6>
                        </label>
                      </div>
                      <div class="col-md-10">
                        <PhoneInput
                          placeholder="Enter phone number"
                          value={phone}
                          onChange={setPhone}
                        />
                      </div>
                    </div>
                    <div class="row g-3 mt-5">
                      <div class="col-md-2">
                        <label for="staticEmail2">
                          <h6>Menu/Price List</h6>
                        </label>
                      </div>
                      <div class="col-md-10">
                        <div class="custom-file">
                          <div class="row form-control-4">
                            <section className="container">
                              <div {...getRootProps({ className: "dropzone" })}>
                                <input {...getInputProps()} />
                                <p>
                                  Drag 'n' drop some files here, or click to
                                  select files
                                </p>
                                <aside>
                                  <h4>Files</h4>
                                  <ul>{files}</ul>
                                </aside>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-5">
                      <div class="col-md-2">&nbsp;</div>
                      <div class="col-md-2">
                        <p>
                          <img src="images/sight.png" />
                          &nbsp;&nbsp;GDPR
                        </p>
                      </div>
                      <div class="col-md-8 tandc">
                        <p>
                          <img src="images/sight.png" />
                          &nbsp;&nbsp;T&C
                        </p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-10"></div>
                      <div class="col-md-2">
                        <button
                          type="submit"
                          class="btn btn-primary w-100"
                          disabled={loading}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
