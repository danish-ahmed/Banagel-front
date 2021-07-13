import "../styles/global.css";
import "../styles/style2.css";
import "../styles/checkout.css";
import "../styles/rSlider.min.css";
import "../styles/slick.css";
import "../styles/style.css";

import { wrapper } from "../redux/store";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
