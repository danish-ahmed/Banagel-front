import React from "react";
import { connect } from "react-redux";
import { getSegmentProducts } from "../redux/actions/segmentProducts";
import { addToCart } from "../redux/actions/cart";

export const SegmentProducts = (props) => {
  const { segmentProducts, segment, addToCart } = props;
  const handleClick = (product) => {
    addToCart(product);
  };
  React.useEffect(() => {
    props.getSegmentProducts(props.segment);
  }, []);
  return (
    <div className="row">
      {segmentProducts.data[segment] &&
        segmentProducts.data[segment].length > 0 &&
        segmentProducts.data[segment].map((product) => (
          <div class="col-md-2 col-6">
            <a href="#" class="alink-categories">
              <div class="card product-card">
                <img
                  src="images/photo-1548077446-8ee8a91f298d.jpg"
                  class="card-img-top product-card-img-top"
                  alt="..."
                />
                <div class="card-body product-card-body">
                  <h5 class="card-title product-card-title">
                    {product.name.en}
                  </h5>
                  <a
                    class="productcard-link-cart"
                    onClick={() => handleClick(product)}
                  >
                    <i class="fas fa-cart-plus"></i>
                  </a>
                  <p class="card-text product-card-text-1">${product.price}</p>
                  <p class="card-text product-card-text-2">1.5 Litre</p>
                </div>
              </div>
            </a>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  segmentProducts: state.segmentProducts,
});

const mapDispatchToProps = {
  getSegmentProducts,
  addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(SegmentProducts);
