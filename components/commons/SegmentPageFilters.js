import React from "react";
import { connect } from "react-redux";
import { getSegmentPageData } from "../../redux/actions/segmentPageData";

const SegmentPageFilters = (props) => {
  const { subcategories, products } = props;
  const [checkedFilters, setCheckedFilters] = React.useState({
    subcategory: [],
    // shop: [],
    product: [],
  });
  const handleClick = () => {
    props.getSegmentPageData(props.segment, checkedFilters);
  };
  const handleChange = (prop) => (e) => {
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
    <div className="col-md-3 side-menu1">
      <p className="s_filter">Search Filters</p>
      <div className="side-menu">
        <p className="filter_title">ITems</p>
        {products &&
          products.map((product) => (
            <p key={product._id}>
              <input
                type="checkbox"
                name="product"
                value={product._id}
                onChange={handleChange("product")}
              />
              &nbsp;&nbsp;{product.name.en}
            </p>
          ))}
      </div>
      <div className="side-menu">
        <p className="filter_title">Categories</p>
        {subcategories &&
          subcategories.map((cat) => (
            <p key={cat._id}>
              <input
                type="checkbox"
                name="subcategory"
                value={cat._id}
                onChange={handleChange("subcategory")}
              />
              &nbsp;&nbsp;{cat.name.en}
            </p>
          ))}
      </div>
      {/* <div className="side-menu">
        <p className="filter_title">Shops</p>
        {shops &&
          shops.map((shop) => (
            <p key={shop.shop._id}>
              <input
                type="checkbox"
                name="shop"
                value={shop.shop._id}
                onChange={handleChange("shop")}
              />
              &nbsp;&nbsp;{shop.shop.shopname.en}
            </p>
          ))}
      </div> */}
      <button className="btn btn-primary" onClick={handleClick}>
        Filter
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  getSegmentPageData,
};
export default connect(null, mapDispatchToProps)(SegmentPageFilters);
