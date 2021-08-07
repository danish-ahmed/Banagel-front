import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/commons/layout";
import Navbar from "../../components/commons/navbar";
import NavbarMobile from "../../components/commons/navbar-mobile";
import SegmentNavbar from "../../components/commons/SegmentNavbar";
import ShopProducts from "../../components/ShopProducts";
import { connect } from "react-redux";
import * as t from "../../redux/types";
import ShopProductsList from "../../components/ShopProductsList";
const Products = (props) => {
  console.log(props.data);
  React.useEffect(() => {
    // if (id) {
    //   props.getShopPageData(id, null);
    // }
  }, []);
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
        </header>
        <div class="container-fluid mt-5">
          <div class="row">
            <div class="col-md-12 landing-tab-main-col">
              <div className="tab-content" id="myTabContent">
                <ShopProductsList products={props.data} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`${t.API}shop-products/best-price`);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default Products;
