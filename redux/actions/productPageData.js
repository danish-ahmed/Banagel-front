import * as t from "../types";
import { stringify } from "query-string";
export const getProductPageData = (id) => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });

    const apiResponse = await fetch(`${t.API}shop-products/related/${id}`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    });
    let result = await apiResponse.json();

    const data = dispatch({
      type: t.GET_PRODUCT_PAGE_DATA,
      payload: result,
    });
    dispatch({
      type: t.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: t.LOADING,
      payload: false,
    });
    dispatch({
      type: t.ERROR,
      payload: "Could not fetch data",
    });
  }
};
