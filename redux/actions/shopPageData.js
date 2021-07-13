import * as t from "../types";
import { stringify } from "query-string";
export const getShopPageData = (id, filters) => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });
    const query = {
      filters: JSON.stringify({
        ...filters,
      }),
    };
    const apiResponse = await fetch(
      `${t.API}shops/products/${id}?${stringify(query)}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
        }),
      }
    );
    let result = await apiResponse.json();

    const data = dispatch({
      type: t.GET_SHOP_PAGE_DATA,
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
