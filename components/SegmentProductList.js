import React from "react";
import { connect } from "react-redux";
import SegmentProducts from "./SegmentProducts";
const SegmentProductList = (props) => {
  const { segments } = props;

  return (
    <section class="products">
      <div class="container-fluid">
        <h2 class="kategoriler-heading">Product of the Month</h2>
        {segments.data &&
          segments.data.length > 0 &&
          segments.data.map((segment) => (
            <div class="row products-row">
              <h2 class="category-title">{segment.name.en}</h2>
              <SegmentProducts segment={segment._id} />
            </div>
          ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  segments: state.segments,
});

export default connect(mapStateToProps)(SegmentProductList);
