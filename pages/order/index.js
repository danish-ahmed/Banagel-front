import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/commons/layout";
import Navbar from "../../components/commons/navbar";
import NavbarMobile from "../../components/commons/navbar-mobile";
import { connect } from "react-redux";

const Order = ({ invoice }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <Navbar />
        <NavbarMobile />
      </header>
      {invoice && invoice.customer && (
        <section className="mt-80">
          <div className="container">
            <div className="row">
              <div className="col col-md-8 offset-2">
                <div className="row">
                  <div className="col-md-5">
                    <h3>RECHNUNG</h3>
                    <p>
                      Banagel GmbH,
                      <br /> Waldschulstr. 30,
                      <br /> 75180 Pforzheim
                    </p>
                    <p>{invoice.customer.name}</p>
                    {/* <p>{invoice.customer._id}</p> */}
                    <p>{invoice.customer.address}</p>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-5">
                    <img src="/images/appgallery.jpg" />
                    <table>
                      <tr>
                        <th>Kundennummer</th>
                        <td>{invoice.customer.phone}</td>
                      </tr>
                      <tr>
                        <th>RECHNUNG Nr</th>
                        <td>{invoice._id}</td>
                      </tr>
                      <tr>
                        <th>Rechnungsdatum</th>
                        <td>{invoice.publishDate}</td>
                      </tr>
                      <tr>
                        <th>Lieferdatum</th>
                        <td>{invoice.publishDate}</td>
                      </tr>
                      <tr>
                        <th>Lieferart</th>
                        <td>Lieferdienst</td>
                      </tr>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      Sehr geehrter {invoice.customer.name.en}, <br />
                      Sie haben heute mit Ihrem Einkauf bei unserem Onlineshop
                      www.banagel.de eine sehr gute Wahl getroffen. Wir bedanken
                      uns für Ihren Besuch und begrüßen Ihren nächten Besuch auf
                      unseren Onlineshop.
                    </div>
                  </div>
                  <div className="row">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Art-Nr.</th>
                          <th scope="col">Artikel/Leistung</th>
                          <th scope="col">Anzahl</th>
                          <th scope="col">Preis</th>
                          <th scope="col">Erhaltene MwSt</th>
                          <th scope="col">Komment</th>
                          <th scope="col">Gesamtpreis</th>
                        </tr>
                      </thead>
                      <tbody>
                        {invoice.products &&
                          invoice.products.map((product, index) => (
                            <>
                              <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product._id}</td>
                                <td>{product.name.en}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>{product.VAT}%</td>
                                <td>{product.comment}</td>
                                <td>{product.quantity * product.price}</td>
                              </tr>
                            </>
                          ))}
                      </tbody>
                      <tbody>
                        {invoice.total && (
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <b>Zwischen-Summe</b>
                            </td>
                            <td>
                              <b>{invoice.total.toFixed(2)} €</b>
                            </td>
                          </tr>
                        )}
                        {invoice.shippingPrice && (
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Versand</td>
                            <td>{invoice.shippingPrice} €</td>
                          </tr>
                        )}
                        {invoice.total && invoice.VATCut && (
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Netto-Summe</td>
                            <td>
                              {(invoice.total - invoice.VATCut).toFixed(2)}€
                            </td>
                          </tr>
                        )}
                        {invoice.VAT &&
                          Object.keys(invoice.VAT).map((key, V) => (
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>{key}% MwSt</td>
                              <td>
                                {(
                                  ((parseInt(
                                    invoice.VAT[key].grossTotal
                                  ).toFixed(2) /
                                    (1 + key / 100)) *
                                    key) /
                                  100
                                ).toFixed(2)}
                              </td>
                            </tr>
                          ))}
                        {invoice.endTotal && (
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <b>Netto-Summe</b>
                            </td>
                            <td>
                              <b>{invoice.endTotal.toFixed(2)} € </b>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  invoice: state.invoice.data,
});

export default connect(mapStateToProps, null)(Order);
