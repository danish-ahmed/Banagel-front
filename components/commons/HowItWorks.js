import React from "react";

export default function HowItWorks() {
  return (
    <div>
      <section class="how-works">
        <div class="container-fluid">
          <h2 class="kategoriler-heading">How it works</h2>
          <div class="row row-howwork">
            <div class="col-md-2 text-center m-auto">
              <i class="fas fa-map-marker-alt icone-how-work"></i>
              <p class="how-work-p">
                Select Your <br />
                Location
              </p>
              <hr class="hr-how-it-work" />
            </div>
            <div class="col-md-2 text-center m-auto">
              <i class="fas fa-shopping-cart icone-how-work"></i>
              <p class="how-work-p">
                Add your wish <br />
                product to shopping
              </p>
              <hr class="hr-how-it-work" />
            </div>
            <div class="col-md-2 text-center m-auto">
              <i class="fas fa-truck-moving icone-how-work"></i>
              &nbsp;&nbsp;
              <i class="fas fa-truck-loading icone-how-work"></i>
              <p class="how-work-p">
                Select Option <br />
                Delivery home/ pickup
              </p>
              <hr class="hr-how-it-work" />
            </div>
          </div>
        </div>
      </section>

      <section class="cartoon-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 text-center">
              <div class="crtoon-card shadow-sm rounded">
                <img src="images/cartoon1.jpg" class="cartoon-img" />
                <h2 class="cartoon-heading">A promotion for every order</h2>
                <p class="cartoon-paragraph">
                  At Dummy, you can find a promotion for every order.
                </p>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="crtoon-card shadow-sm rounded">
                <img src="images/cartoon2.jpg" class="cartoon-img" />
                <h2 class="cartoon-heading">At your door in minutes</h2>
                <p class="cartoon-paragraph">
                  Your order is at your door in minutes with Dummy.
                </p>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="crtoon-card shadow-sm rounded">
                <img src="images/cartoon3.jpg" class="cartoon-img" />
                <h2 class="cartoon-heading crtn-last-card-heading">
                  Thousand kinds of happiness
                </h2>
                <p class="cartoon-paragraph">
                  At Dummy, you can choose from thousands of varieties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
