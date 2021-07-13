import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import Link from "next/dist/client/link";

const SegmentShopList = ({ shops, addToCart }) => {
  const handleClick = (product) => {
    addToCart(product);
  };
  return (
    <div className="col-md-8 offset-md-1">
      {shops &&
        shops.map((shop) => (
          <>
            <Link href={"/shops/[id]"} as={`/shops/${shop.shop._id}`}>
              <div className="row" key={shop.shop._id}>
                <div className="col-md-2">
                  <img
                    src={shop.shop.filename}
                    className="img-thumbnail custom_size"
                    height="100"
                  />
                </div>
                <div className="col-md-2">
                  <h4 className="eight-p">8.7 </h4>
                  <img src="/images/bottal-img-1.png" />
                </div>
                <div className="col-md-2">
                  <h5 className="REKLAM">{shop.shop.shopname.en}</h5>
                  <img src="/images/bottal-img-2.png" className="bottal-2" />
                </div>
                <div className="col-md-3">
                  <h4 className="home">{shop.shop.shopname.en}</h4>
                  <img src="/images/bottal-img-3.png" className="bottal-3" />
                </div>
                <div className="col-md-2">
                  <h4 className="text-darkblue">%40</h4>
                </div>
              </div>
            </Link>
            <br />
          </>
        ))}
    </div>
  );
};
const mapDispatchToProps = {
  addToCart,
};
export default connect(null, mapDispatchToProps)(SegmentShopList);
