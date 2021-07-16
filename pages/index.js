import Head from "next/head";
import Layout, { siteTitle } from "../components/commons/layout";
import Navbar from "../components/commons/navbar";
import NavbarMobile from "../components/commons/navbar-mobile";
import Carousel from "../components/commons/carousel";
import SegmentList from "../components/SegmentList";
import SegmentProductList from "../components/SegmentProductList";
import HowItWorks from "../components/commons/HowItWorks";
import OfferList from "../components/OfferList";
const Home = (props) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header>
        <Navbar />
        <NavbarMobile />
        <Carousel />
      </header>
      <SegmentList />
      <OfferList />
      <SegmentProductList />
      <HowItWorks />
    </Layout>
  );
};

export default Home;
