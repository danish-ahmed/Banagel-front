import React from "react";
import { connect } from "react-redux";
import { addQuantity } from "../redux/actions/cart";
import { subQuantity } from "../redux/actions/cart";
import { useRouter } from "next/router";

const CartModel = ({ cart, addQuantity, subQuantity }) => {
  const router = useRouter();

  const handleAddClick = (product) => {
    addQuantity(product);
  };
  const handleSubClick = (product) => {
    subQuantity(product);
  };
  const handleCheckoutClick = () => {
    document.getElementById("cartModel").modal("hide");
    router.push("/Checkout");
  };
  return (
    <div
      className="modal fade bd-example-modal-lg"
      id="cartModel"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
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
            {cart.addedItems.length > 0 ? (
              <>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">VAT</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.addedItems &&
                      cart.addedItems.map((product) => (
                        <tr key={product._id}>
                          <td>{product._id}</td>
                          <td>
                            <img
                              src={product.image}
                              alt={product.name.en}
                              width="50"
                              height="50"
                            />
                          </td>
                          <td>{product.name.en}</td>
                          <td>{product.VAT}</td>
                          <td>
                            <button
                              className="btn shadow-sm pro_btn"
                              onClick={() => handleAddClick(product)}
                            >
                              +
                            </button>
                            <span
                              style={{
                                textAlign: "center",
                                padding: "5px",
                              }}
                            >
                              {product.quantity}
                            </span>
                            <button
                              className="btn shadow-sm pro_btn"
                              onClick={() => handleSubClick(product)}
                            >
                              -
                            </button>
                          </td>
                          <td>{product.price + " " + product.currency}</td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot>
                    {cart.addedItems && (
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total</td>
                        <td>{cart.total.toFixed(2)}</td>
                      </tr>
                    )}
                  </tfoot>
                </table>
                <div className="row">
                  <div className="col col-sm-6"></div>
                  <div className="col col-sm-6" style={{ textAlign: "end" }}>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      onClick={() => router.push("/checkout")}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h4>No Item in Cart</h4>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  addQuantity,
  subQuantity,
};
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModel);
