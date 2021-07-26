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
                    <p>
                      {invoice.customer.name.charAt(0).toUpperCase() +
                        invoice.customer.name.slice(1)}
                    </p>
                    {/* <p>{invoice.customer._id}</p> */}
                    <p>
                      {invoice.customer.address.charAt(0).toUpperCase() +
                        invoice.customer.address.slice(1)}
                    </p>
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
                        <td>{invoice.publishDate.slice(0, 10)}</td>
                      </tr>
                      <tr>
                        <th>Lieferdatum</th>
                        <td>{invoice.publishDate.slice(0, 10)}</td>
                      </tr>
                      <tr>
                        <th>Lieferart</th>
                        <td>Lieferdienst</td>
                      </tr>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      Sehr geehrter{" "}
                      {invoice.customer.name.charAt(0).toUpperCase() +
                        invoice.customer.name.slice(1)}
                      , <br />
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
                              <b>Gesamtsumme</b>
                            </td>
                            <td>
                              <b>{invoice.endTotal.toFixed(2)} € </b>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <tr>
                        <td>Banagel GmbH, Waldschulstr. 30, 75180 Pforzheim</td>
                        <td>
                          Tel: +49 (151) 123466 service@banagel.de
                          www.banagel.de
                        </td>
                        <td>
                          Musterbank DE 85 1234 5678 9012 3456 78 BIC: ABCDEFGHI
                        </td>
                        <td>
                          USt. ID: 08151234 Gerichtsstand: Pforzheim
                          Handelsregister: 12345678
                        </td>
                      </tr>
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
