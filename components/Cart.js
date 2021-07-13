import React from "react";
import { connect } from "react-redux";
import { addQuantity, subQuantity, addComment } from "../redux/actions/cart";

const Cart = ({ cart, addQuantity, subQuantity, addComment }) => {
  const handleAddClick = (product) => {
    addQuantity(product);
  };
  const handleSubClick = (product) => {
    subQuantity(product);
  };
  return (
    <>
      {cart && cart.addedItems.length > 0 && (
        <section className="">
          <h3>Your Cart</h3>
          <div className="container">
            <div className="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    {/* <th scope="col">Image</th> */}
                    <th scope="col">Artikel/Leistung</th>
                    <th scope="col">Anzahl</th>
                    <th scope="col">Preis</th>
                    <th scope="col">Erhaltene MwSt</th>
                    <th scope="col">Gesamtpreis</th>
                    <th scope="col">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.addedItems &&
                    cart.addedItems.map((product, index) => (
                      <>
                        <tr key={product._id}>
                          <td>{index + 1}</td>
                          {/* <td>
                        <img
                          src={product.image}
                          alt={product.name.en}
                          width="50"
                          height="50"
                        />
                      </td> */}
                          <td>{product.name.en}</td>

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
                          <td>{product.price} €</td>
                          <td>{product.VAT}</td>
                          <td>
                            {(product.price * product.quantity).toFixed(2)} €
                          </td>
                          <td>
                            <input
                              className="form-control"
                              id={product._id}
                              type="text"
                              placeholder="Product Comments"
                              autoComplete="true"
                              onChange={(e) =>
                                addComment({
                                  product: product,
                                  comment: e.target.value,
                                })
                              }
                            />
                          </td>
                        </tr>
                      </>
                    ))}
                  {cart.addedItems && (
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <b>Zwischen-Summe</b>
                      </td>
                      <td>
                        <b>{cart.total.toFixed(2)} €</b>
                      </td>
                    </tr>
                  )}
                  {cart.addedItems && (
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Versand</td>
                      <td>{cart.shipping.toFixed(2)} €</td>
                    </tr>
                  )}
                  {cart.addedItems && (
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Netto-Summe</td>
                      <td>{(cart.total - cart.VATCutTotal).toFixed(2)}€</td>
                    </tr>
                  )}
                  {cart.VAT &&
                    Object.keys(cart.VAT).map((key, V) => (
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{key}% MwSt</td>
                        <td>
                          {(
                            ((cart.VAT[key].grossTotal.toFixed(2) /
                              (1 + key / 100)) *
                              key) /
                            100
                          ).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  {cart.addedItems && (
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <b>Netto-Summe</b>
                      </td>
                      <td>
                        <b>{cart.endTotal.toFixed(2)} € </b>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
const mapDispatchToProps = {
  addQuantity,
  subQuantity,
  addComment,
};
const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
