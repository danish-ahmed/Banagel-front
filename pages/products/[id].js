import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/commons/layout";
import Navbar from "../../components/commons/navbar";
import NavbarMobile from "../../components/commons/navbar-mobile";
import SegmentNavbar from "../../components/commons/SegmentNavbar";
import ReactStars from "react-rating-stars-component";
import * as t from "../../redux/types";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cart";
const Product = (props) => {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [is_customer, setIsCustomer] = React.useState(false);
  const [userRatting, setUserRatting] = React.useState({
    title: "",
    comment: "",
    ratting: "",
  });
  const router = useRouter();
  const { id } = router.query;

  // const data = props.shopPageData.data[id];

  React.useEffect(() => {
    if (localStorage.getItem("customer_token")) {
      setIsCustomer(true);
    }
  }, []);
  const handleClick = (product) => {
    props.addToCart(product);
  };
  const ratingChanged = (newRating) => {
    setUserRatting({ ...userRatting, ["ratting"]: newRating });
  };
  const handleChange = (e) => {
    setLoading(false);
    setUserRatting({ ...userRatting, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("title", userRatting.title);
    formData.append("comment", userRatting.comment);
    formData.append("ratting", userRatting.ratting);
    fetch(t.API + `shop-products/add-review/${id}`, {
      method: "PUT",
      // mimeType: "multipart/form-data",
      contentType: "application/json",
      body: formData,
      headers: {
        "x-auth-token": localStorage.getItem("customer_token"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        } else if (res.ok) {
          setUserRatting({ title: "", comment: "", ratting: "" });
        }
      })
      .catch((err) => {
        err.text().then((errorMessage) => {
          setError(errorMessage);
        });
      });
    e.preventDefault();
  };
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <header>
          <Navbar />
          <NavbarMobile />
          <SegmentNavbar />
          {/* <ShopCarousel shop={data && data.shop} /> */}
        </header>
        <div class="container-fluid mt-5">
          <div className="row">
            <div
              className="col col-md-8 offset-md-2"
              style={{ border: "1px solid #ccc", padding: "12px" }}
            >
              {props.data.product && (
                <div class="row">
                  <div class="col-md-5 item-photo">
                    <img
                      style={{ maxWidth: "100%", position: "relative" }}
                      src={props.data.product.image}
                      alt={props.data.product.name.en}
                    />
                  </div>
                  <div className="col-md-1"></div>
                  <div
                    class="col-md-6"
                    style={{
                      border: "0px solid gray",
                      borderRadius: "10%",
                      marginBottom: "10px",
                    }}
                  >
                    <h3>{props.data.product.name.en}</h3>
                    <h5 style={{ color: "#337ab7" }}>
                      <a href="#reviews">
                        {" "}
                        <small style={{ color: "#337ab7" }}>
                          <ReactStars
                            count={5}
                            size={24}
                            value={props.data.avg}
                            isHalf={true}
                            edit={false}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                          ({props.data.product.reviews.length} reviews)
                        </small>
                      </a>
                    </h5>
                    <h6 class="title-price">
                      <small>
                        Category: <em>{props.data.product.category.name.en}</em>
                      </small>
                    </h6>
                    <h3 style={{ marginTop: "0px" }}>
                      {props.data.product.price +
                        " " +
                        props.data.product.currency}
                    </h3>
                    Description:
                    <div
                      dangerouslySetInnerHTML={{
                        __html: props.data.product.description,
                      }}
                    ></div>
                    <div class="section" style={{ paddingBottom: "5px" }}>
                      <h6 class="title-attr">Tags</h6>
                      {props.data.product.tags.length > 0 &&
                        props.data.product.tags.map((t) => (
                          <small style={{ padding: "4px" }}>
                            {t && t.name && t.name.en}
                          </small>
                        ))}
                    </div>
                    <div class="section" style={{ paddingBottom: "20px" }}>
                      <button
                        class="btn btn-success"
                        onClick={() => handleClick(props.data.product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="container">
            <h2>Related Products</h2>
            <div className="row">
              {props.data.relatedProducts &&
                props.data.relatedProducts.length > 0 &&
                props.data.relatedProducts.map((product) => (
                  <div
                    className="col col-md-3"
                    style={{ marginBottom: "10px" }}
                  >
                    <div
                      className="card fav-carousel-card"
                      style={{ width: "18rem" }}
                    >
                      {/* <Link href={"/products/[id]"} as={`/products/${product._id}`}>
              Explore
            </Link> */}
                      <img
                        width="130"
                        height="230"
                        src={product.image}
                        className="card-img-top"
                        alt={product.name && product.name.en}
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {product.name && product.name.en}
                        </h5>
                        <p className="card-text fav-carousel-card-text">
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
                          <button
                            className="btn shadow-sm pro_btn-lg"
                            onClick={() => handleClick(product)}
                          >
                            Add to Cart
                          </button>
                          <span className="price">
                            {product.price + " " + product.currency}
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div id="reviews">
              <h3>Reviews</h3>
              {props.data.product &&
                props.data.product.reviews.map((review) => (
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={review.ratting}
                      isHalf={true}
                      edit={false}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <h4 class="alert-heading">{review.title}</h4>
                    <p>{review.comment}</p>
                  </div>
                ))}
              {is_customer && (
                <>
                  <h3>Write Review</h3>
                  <p style={{ color: "red" }}>{error}</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-control">
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={userRatting.title}
                        onChange={handleChange}
                        placeholder="Write Review Title"
                      />

                      <textarea
                        className="form-control"
                        row={2}
                        name="comment"
                        placeholder="Comment"
                        value={userRatting.comment}
                        onChange={handleChange}
                      ></textarea>
                      <input
                        disabled={loading}
                        type="submit"
                        value="Submit Review"
                        className="btn btn-primary"
                      />
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(t.API + "shop-products/all-public");
  console.log(res);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product._id.toString() },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`${t.API}shop-products/related/${params.id}`);
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
export default connect(null, mapDispatchToProps)(Product);
