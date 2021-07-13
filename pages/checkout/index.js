import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/commons/layout";
import Navbar from "../../components/commons/navbar";
import NavbarMobile from "../../components/commons/navbar-mobile";
import { connect } from "react-redux";
import { addQuantity } from "../../redux/actions/cart";
import { subQuantity } from "../../redux/actions/cart";
import Cart from "../../components/Cart";
import CustomerInfo from "../../components/CustomerInfo";
import { useRouter } from "next/router";

const Checkout = ({ cart, addQuantity, subQuantity }) => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    router.basePath("/checkout/");
  };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <Navbar />
        <NavbarMobile />
      </header>
      <section className="mt-80">
        <div className="container">
          <div className="row">
            <div className="col col-md-7">
              <Cart />
            </div>
            <div className="col col-md-5">
              <CustomerInfo />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const mapDispatchToProps = {
  addQuantity,
  subQuantity,
};
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
