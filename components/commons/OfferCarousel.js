import React from "react";
import Image from "next/image";

export default function OfferCarousel({ offer }) {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner carousel-inner-img">
        <div
          class="carousel-item active"
          style={{
            position: "relative",
            width: "100%",
            height: "700px",
            maxHeight: "700px",
            maxWidth: "100%",
          }}
        >
          <Image
            src={offer && offer.image}
            alt={offer && offer.name.en}
            // alt={shop && shop.shopname.en}
            className="d-block w-100"
            layout="fill"
            objectFit="cover"
          />

          {/* <img src={offer && offer.image} class="d-block w-100" alt="..." /> */}
        </div>
      </div>
      <div class="card-img-overlay"></div>
      <div class="container carousel-container landing-carousel-container">
        <div class="row">
          <div class="col-md-7">
            <h2 class="text-white">{offer && offer.name}</h2>
            <div class="row mt-5 row-cols-2">
              <div class="col-md-4">
                <div class="card landing-card-header text-center text-white light-green">
                  <div class="card-body">
                    <h5>Offer Price</h5>
                  </div>
                  <h5>{offer.totalPrice} Euro</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
