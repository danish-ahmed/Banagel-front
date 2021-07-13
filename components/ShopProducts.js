import React from "react";
import ShopFilters from "./commons/ShopFilters";
import ShopProductsList from "./ShopProductsList";

export default function ShopProducts({ data }) {
  return (
    <div
      className="tab-pane fade show active mt-4"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="row fav-row-carousel">
        <ShopFilters
          shop={data && data.shop}
          products={data && data.productList}
          subcategories={data && data.subcategories}
        />
        <ShopProductsList products={data && data.products} />
      </div>
    </div>
  );
}
