import React from "react";
import Link from "next/link";

export default function ProductItem(product) {
  return (
    <>
      {product && (
        <div style={{ marginBottom: "10px" }}>
          <div className="card fav-carousel-card" style={{ width: "18rem" }}>
            {/* <Link href={"/products/[id]"} as={`/products/${product._id}`}>
              Explore
            </Link> */}
            <img
              width="180"
              height="280"
              src={product.image}
              className="card-img-top"
              alt={product.name && product.name.en}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name && product.name.en}</h5>
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
                <span className="price">{product.price} $</span>
              </small>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
