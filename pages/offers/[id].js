import React from "react";
import * as t from "../../redux/types";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/commons/layout";
import Navbar from "../../components/commons/navbar";
import NavbarMobile from "../../components/commons/navbar-mobile";
import OfferCarousel from "../../components/commons/OfferCarousel";
import { addToCart } from "../../redux/actions/cart";
import { connect } from "react-redux";
import Image from "next/image";

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 300));
}

const Offer = (props) => {
  const [loading, setSpiner] = React.useState(false);
  const handleClick = async (offer) => {
    offer.products.forEach(async (item) => {
      await delayedLog(item);
    });

    setSpiner(false);
  };
  async function delayedLog(item) {
    await delay();
    await props.addToCart(item);
    console.log(item);
  }
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <header>
          <Navbar />
          <NavbarMobile />
          <OfferCarousel offer={props.data} />
        </header>
        <div class="container-fluid mt-5">
          <h2 className="mt-3 mb-3">
            Offer Products <span> </span>
            <button
              className="btn btn-primary btn-block"
              onClick={() => handleClick(props.data)}
            >
              Add Offer to Cart {!!loading && "..."}
            </button>
          </h2>

          <div class="row">
            {props.data &&
              props.data.products.length > 0 &&
              props.data.products.map((product) => (
                <div className="col-md-3" style={{ marginBottom: "10px" }}>
                  <div
                    className="card fav-carousel-card"
                    style={{ width: "18rem" }}
                  >
                    <Image
                      src={product && product.image}
                      alt={product && product.name.en}
                      layout="responsive"
                      width={500}
                      height={500}
                    />

                    <div className="card-body">
                      <h5 className="card-title">{product.name.en}</h5>
                      <p className="card-text fav-carousel-card-text">
                        {product && product.unit}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                        ></div>
                      </p>
                    </div>
                    <div className="card-body card-body-2">
                      <small className="">
                        {/* <input
                        type="number"
                        className="shadow-sm pro_num"
                        value="1"
                      /> */}

                        <span className="price">
                          <s>{product.actualPrice} €</s>
                        </span>
                        <span className="price">{product.price} €</span>
                      </small>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(t.API + "offers/all");
  console.log(res);
  const offers = await res.json();

  const paths = offers.map((offer) => ({
    params: { id: offer._id.toString() },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`${t.API}offers/one/${params.id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(Offer);
