import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/commons/layout";
import Navbar from "../../components/commons/navbar";
import NavbarMobile from "../../components/commons/navbar-mobile";
import SegmentNavbar from "../../components/commons/SegmentNavbar";
import SegmentPageFilters from "../../components/commons/SegmentPageFilters";
import SegmentPageCarousel from "../../components/commons/SegmentPageCarousel";

import { connect } from "react-redux";
import { getSegmentPageData } from "../../redux/actions/segmentPageData";
const Segment = (props) => {
  const router = useRouter();
  const { segment } = router.query;
  const [shops, setShops] = React.useState([]);
  const [segmentData, setSegmentData] = React.useState({});
  const [subcategories, setSubCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const data = props.segmentPageData.data[segment];

  React.useEffect(async () => {
    const data = await props.getSegmentPageData(segment);
    console.log("Data", data);
    if (data) {
      setShops(data.shops);
      setSubCategories(data.subcategories);
      setSegmentData(data.segmentData);
      setProducts(data.data);
    }
  }, [segment]);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <Navbar />
        <NavbarMobile />
        <SegmentNavbar />
        <SegmentPageCarousel />
      </header>
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-md-12 landing-tab-main-col">
            <SegmentPageFilters
              shops={data && data.shops}
              subcategories={data && data.subcategories}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  segmentPageData: state.segmentPageData,
});

const mapDispatchToProps = {
  getSegmentPageData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Segment);
