import React from "react";
import { connect } from "react-redux";
import { getShopPageData } from "../../redux/actions/shopPageData";
import { useRouter } from "next/router";
const ShopFilters = ({ categories, products, getShopPageData, shop }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-US" ? "en" : "de";
  const [checkedFilters, setCheckedFilters] = React.useState({
    subcategory: [],
    // shop: [],
    product: [],
  });
  const handleClick = () => {
    getShopPageData(shop._id, checkedFilters);
  };
  const handleChange = () => (e) => {
    // console.log(e.target.name);
    if (e.target.checked === true) {
      setCheckedFilters({
        ...checkedFilters,
        [e.target.name]: checkedFilters[e.target.name].concat(e.target.value),
      });
    } else {
      var array = [...checkedFilters[e.target.name]];
      var index = array.indexOf(e.target.value);
      if (index !== -1) {
        array.splice(index, 1);
        setCheckedFilters({ ...checkedFilters, [e.target.name]: array });
      }
    }
  };
  return (
    <div className="col-md-2 side-menu1">
      <p className="s_filter">Search Filters</p>
      <div className="side-menu">
        <p className="filter_title">ITEMS</p>
        {products &&
          products.map((p) => (
            <p>
              <input
                type="checkbox"
                value={p._id}
                name="product"
                onChange={handleChange("product")}
              />
              &nbsp;&nbsp;{p.name[t]}
            </p>
          ))}
      </div>

      <div className="side-menu">
        <p className="filter_title">CATEGORIES</p>
        {categories &&
          categories.length > 0 &&
          categories.map((cat) => (
            <>
              <p>{cat.name[t]}</p>
              {cat.subcategories.map(
                (subcat) =>
                  cat._id === subcat.category._id && (
                    <>
                      <p key={subcat._id}>
                        <input
                          type="checkbox"
                          name="subcategory"
                          value={subcat._id}
                          onChange={handleChange("subcategory")}
                        />
                        &nbsp;&nbsp;{subcat.name[t]}
                      </p>
                    </>
                  )
              )}
            </>
          ))}
      </div>

      {/* <div className="side-menu2 mt-80minus">
        <p className="filter_title ">AVAILABILITY</p>
        <p>
          <input type="checkbox" name="checkbox" />
          &nbsp;&nbsp;In stock
        </p>
      </div> */}

      {/* <p className="filter_title mt-3">Customer Rating</p>
      <div className="rating">
        <input type="radio" id="star5" name="rating" value="5" checked />
        <label for="star5" title="Meh">
          5 stars
        </label>
        <input type="radio" id="star4" name="rating" value="4" checked />
        <label for="star4" title="Kinda bad">
          4 stars
        </label>
        <input type="radio" id="star3" name="rating" value="3" checked />
        <label for="star3" title="Kinda bad">
          3 stars
        </label>
        <input type="radio" id="star2" name="rating" value="2" />
        <label for="star2" title="Sucks big tim">
          2 stars
        </label>
        <input type="radio" id="star1" name="rating" value="1" />
        <label for="star1" title="Sucks big time">
          1 star
        </label>
      </div>
      <div className="side-menu2 mt-5">
        <p className="filter_title">Country of origin</p>
        <p>
          <input type="checkbox" name="checkbox" />
          &nbsp;&nbsp;Turkey
        </p>
      </div> */}
      <button className="btn btn-primary" onClick={handleClick}>
        Filter
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  getShopPageData,
};
export default connect(null, mapDispatchToProps)(ShopFilters);
