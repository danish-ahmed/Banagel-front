import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/commons/layout";
import Navbar from "../../components/commons/navbar";
import NavbarMobile from "../../components/commons/navbar-mobile";
import SegmentNavbar from "../../components/commons/SegmentNavbar";
import ShopCarousel from "../../components/commons/ShopCarousel";
import ShopTabs from "../../components/commons/ShopTabs";
import ShopProducts from "../../components/ShopProducts";
import AboutShop from "../../components/AboutShop";
import { connect } from "react-redux";
import { getShopPageData } from "../../redux/actions/shopPageData";

const ShopDetail = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const data = props.shopPageData.data[id];

  React.useEffect(() => {
    if (id) {
      props.getShopPageData(id, null);
    }
  }, [id]);
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <header>
          <Navbar />
          <NavbarMobile />
          <SegmentNavbar />
          <ShopCarousel shop={data && data.shop} />
        </header>
        <div class="container-fluid mt-5">
          <div class="row">
            <div class="col-md-12 landing-tab-main-col">
              <ShopTabs />
              <div className="tab-content" id="myTabContent">
                <ShopProducts data={data} />
                <AboutShop data={data} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => ({
  shopPageData: state.shopPageData,
});

const mapDispatchToProps = {
  getShopPageData,
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail);
