import { combineReducers } from "redux";
import main from "./main";
import segment from "./segment";
import offers from "./offers";
import segmentProducts from "./segmentProducts";
import segmentPageData from "./segmentPageData";
import shopPageData from "./shopPageData";
import cart from "./cart";
import invoice from "./invoice";

const rootReducer = combineReducers({
  main: main,
  segments: segment,
  offers: offers,
  segmentProducts: segmentProducts,
  segmentPageData: segmentPageData,
  shopPageData: shopPageData,
  cart: cart,
  invoice: invoice,
});

export default rootReducer;
