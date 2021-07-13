import React from "react";

export default function SegmentPageHeader() {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner carousel-inner-img">
          <div class="carousel-item active">
            <img
              src="/images/photo-1513104890138-7c749659a591.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <div class="card-img-overlay"></div>
        <div class="container carousel-container landing-carousel-container">
          <div class="row">
            <div class="col-md-2">
              <img class="domino-logo img-thumbnail" src="/images/domino.png" />
            </div>
            <div class="col-md-7">
              <h2 class="text-white">Domino's Pizza</h2>
              <div class="row mt-5 row-cols-2">
                <div class="col-md-2">
                  <div class="card landing-card-header text-center text-white light-green">
                    <div class="card-body">Users</div>
                    <p>9.0</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card landing-card-header text-center text-white light-green">
                    <div class="card-body">Users</div>
                    <p>9.0</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card landing-card-header text-center text-white light-green">
                    <div class="card-body">Users</div>
                    <p>9.0</p>
                  </div>
                </div>
                <div class="col-md-2">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
