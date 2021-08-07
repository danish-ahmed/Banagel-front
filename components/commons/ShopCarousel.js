import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function ShopCarousel({ shop }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? "en" : "de";
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
            src={
              (shop && shop.landingImage) ||
              "/images/photo-1513104890138-7c749659a591.jpg"
            }
            alt={shop && shop.shopname[t]}
            className="d-block w-100"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div class="card-img-overlay"></div>
      <div class="container carousel-container landing-carousel-container">
        <div class="row">
          <div class="col-md-2">
            <img
              class="domino-logo img-thumbnail"
              src={shop && shop.filename}
            />
          </div>
          <div class="col-md-7">
            <h2 class="text-white">{shop && shop.shopname[t]}</h2>
            <div class="row mt-5 row-cols-2">
              <div class="col-md-2">
                {/* <div class="card landing-card-header text-center text-white light-green">
                  <div class="card-body">Users</div>
                  <p>9.0</p>
                </div> */}
              </div>
              <div class="col-md-2">
                {/* <div class="card landing-card-header text-center text-white light-green">
                  <div class="card-body">Users</div>
                  <p>9.0</p>
                </div> */}
              </div>
              <div class="col-md-2">
                {/* <div class="card landing-card-header text-center text-white light-green">
                  <div class="card-body">Users</div>
                  <p>9.0</p>
                </div> */}
              </div>
              {/* <div class="col-md-2">
                <div class="card landing-card-header text-white">
                  <div class="card-body">
                    <i class="fas fa-coins"></i>
                  </div>
                  <p>
                    Min Order <br />
                    15,00 TL
                  </p>
                </div>
              </div>
              <div class="col-md-2 last-col-landing">
                <div class="card landing-card-header text-white">
                  <div class="card-body">
                    <i class="fas fa-motorcycle"></i>
                  </div>
                  <p>
                    Service Time <br />
                    20 - 30 dk
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
