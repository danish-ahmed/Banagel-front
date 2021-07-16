import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getShopOffers } from "../redux/actions/main";
import Link from "next/link";

const ShopOffer = (props) => {
  const { offers } = props;
  const { shop } = props;
  useEffect(() => {
    if (shop && shop._id) {
      props.getShopOffers(shop._id);
    }
  }, [shop]);
  return (
    <div>
      <section class="section-offers">
        <div class="row">
          {offers.data &&
            offers.data.length > 0 &&
            offers.data.map((offer) => (
              <div class="col-md-12">
                <div class="card offers-card text-white text-center">
                  <div class="card-body">
                    <h5 class="card-title offers-card-title">
                      <span class="offer-span">Offer</span> {offer.name}
                    </h5>
                    <p class="card-text">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: offer.description,
                        }}
                      ></div>
                    </p>
                    <Link href={"/offers/[id]"} as={`/offers/${offer._id}`}>
                      <button
                        type="button"
                        class="btn btn-warning offers-btn btn-sm"
                      >
                        Click &amp; Get Offer
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

const mapDispatchToProps = {
  getShopOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopOffer);
