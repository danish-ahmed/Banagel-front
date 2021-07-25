import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout, { siteTitle } from "../../../components/commons/layout";
import Navbar from "../../../components/commons/navbar";
import NavbarMobile from "../../../components/commons/navbar-mobile";
import SegmentNavbar from "../../../components/commons/SegmentNavbar";
import SegmentPageFilters from "../../../components/commons/SegmentPageFilters";
import SegmentPageCarousel from "../../../components/commons/SegmentPageCarousel";
import SegmentShopList from "../../../components/SegmentShopList";
import { connect } from "react-redux";
import { getSegmentPageData } from "../../../redux/actions/segmentPageData";
const Segment = (props) => {
  const router = useRouter();
  const { segment } = router.query;

  const data = props.segmentPageData.data[segment];

  React.useEffect(() => {
    if (segment) {
      props.getSegmentPageData(segment, null);
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
        <SegmentPageCarousel offers={data && data.offers} />
      </header>
      <section className="mt-80">
        <div className="container">
          <div className="row">
            <SegmentPageFilters
              shops={data && data.shops}
              products={data && data.data}
              subcategories={data && data.subcategories}
              categories={data && data.categories}
              segment={segment}
            />
            <SegmentShopList shops={data && data.shops} />
          </div>
        </div>
      </section>
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
