import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import ShopOffer from "../components/ShopOffer";
import Link from "next/link";
import { useRouter } from "next/router";
const ShopProductsList = ({ shop, products, addToCart }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? "en" : "de";
  const [loading, setSpiner] = React.useState(false);
  const handleClick = async (product) => {
    setSpiner(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    await addToCart(product);
    setSpiner(false);
  };
  return (
    <div className="col-md-10">
      <ShopOffer shop={shop} />
      <h2 className="mt-3 mb-3">Products</h2>

      <div
        className="favcara"
        data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'
      >
        <div className="row">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <div
                key={product._id}
                className="col-md-4"
                style={{ marginBottom: "10px" }}
              >
                <div
                  className="card fav-carousel-card"
                  style={{ width: "18rem" }}
                >
                  <Link href={"/products/[id]"} as={`/products/${product._id}`}>
                    <div
                      style={{ cursor: "pointer" }}
                      className="card fav-carousel-card"
                    >
                      <img
                        width="180"
                        height="280"
                        src={product.image}
                        className="card-img-top"
                        alt={product.name[t]}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name[t]}</h5>
                        <p className="card-text fav-carousel-card-text">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                          ></div>
                        </p>
                      </div>
                    </div>
                  </Link>
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
                        Add to Cart {!!loading && "..."}
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
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ShopProductsList);
