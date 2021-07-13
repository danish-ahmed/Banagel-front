import * as t from "../types";

export const addInvoice = (cart) => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });
    const apiResponse = await fetch(t.API + "orders/", {
      method: "POST",
      body: JSON.stringify(cart),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    let result = await apiResponse.json();
    const data = await dispatch({
      type: t.ADD_INVOICE,
      payload: result,
    });
    dispatch({
      type: t.REMOVE_CART,
      payload: true,
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
