import React from "react";

export default function AboutShop({ data }) {
  return (
    <div
      class="tab-pane fade"
      id="profile"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <h2 class="custom_bg mt-5">
        {data && data.shop && data.shop.shopname.en}
      </h2>
      <p class="p-biligir">
        <div
          dangerouslySetInnerHTML={{
            __html:
              data &&
              data.shop &&
              data.shop.description &&
              data.shop.description.en,
          }}
        ></div>
      </p>
    </div>
  );
}
