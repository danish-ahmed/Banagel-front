import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useRouter } from "next/router";
const SegmentShopList = ({ shops, addToCart }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? "en" : "de";
  const handleClick = (product) => {
    addToCart(product);
  };
  return (
    <div className="col-md-8 offset-md-1">
      {shops &&
        shops.map((shop) => (
          <>
            <Link href={"/shops/[id]"} as={`/shops/${shop._id}`}>
              <div className="row" key={shop._id}>
                <div className="col-md-2">
                  <Image
                    src={
                      shop.filename
                        ? shop.filename
                        : "http://banagel.herokuapp.com/public/uploads/patner4.png"
                    }
                    alt={shop.shopname.en}
                    layout="responsive"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="col-md-2">
                  <h4 className="eight-p">8.7 </h4>
                  <img src="/images/bottal-img-1.png" />
                </div>
                <div className="col-md-2">
                  <h5 className="REKLAM">{shop.shopname[t]}</h5>
                  <img src="/images/bottal-img-2.png" className="bottal-2" />
                </div>
                <div className="col-md-3">
                  <h4 className="home">{shop.shopname[t]}</h4>
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
