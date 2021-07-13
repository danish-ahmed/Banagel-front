import * as t from "../types";
export const addToCart = (product) => async (dispatch) => {
  dispatch({
    type: t.LOADING,
    payload: true,
  });
  const data = await dispatch({
    type: t.ADD_TO_CART,
    payload: product,
  });
  await dispatch({
    type: t.CALCULATE_VAT,
    payload: true,
  });
  await dispatch({
    type: t.CALCULATE_VAT_CUT_TOTAL,
    payload: true,
  });
  await dispatch({
    type: t.CALCULATE_TOTAL,
    payload: true,
  });
  await dispatch({
    type: t.LOADING,
    payload: false,
  });
};

export const removeFromCart = (product) => async (dispatch) => {
  dispatch({
    type: t.LOADING,
    payload: true,
  });
  console.log(product);

  const data = await dispatch({
    type: t.REMOVE_FROM_CART,
    payload: product,
  });
  await dispatch({
    type: t.CALCULATE_VAT,
    payload: true,
  });
  await dispatch({
    type: t.CALCULATE_VAT_CUT_TOTAL,
    payload: true,
  });
  await dispatch({
    type: t.CALCULATE_TOTAL,
    payload: true,
  });
  await dispatch({
    type: t.LOADING,
    payload: false,
  });
};

export const addQuantity = (product) => async (dispatch) => {
  dispatch({
    type: t.LOADING,
    payload: true,
  });

  const data = await dispatch({
    type: t.ADD_QUANTITY,
    payload: product,
  });
  await dispatch({
    type: t.CALCULATE_VAT,
    payload: true,
  });
  await dispatch({
    type: t.CALCULATE_VAT_CUT_TOTAL,
    payload: true,
  });
  await dispatch({
    type: t.CALCULATE_TOTAL,
    payload: true,
  });
  await dispatch({
    type: t.LOADING,
    payload: false,
  });
};

export const subQuantity = (product) => async (dispatch) => {
  dispatch({
    type: t.LOADING,
    payload: true,
  });

  const data = await dispatch({
    type: t.SUBTRACT_QUANTITY,
    payload: product,
  });
  await dispatch({
    type: t.CALCULATE_VAT,
    payload: true,
  });
  await dispatch({
    type: t.CALCULATE_VAT_CUT_TOTAL,
    payload: true,
  });
  await dispatch({
    type: t.CALCULATE_TOTAL,
    payload: true,
  });
  await dispatch({
    type: t.LOADING,
    payload: false,
  });
};

export const addComment = (product) => async (dispatch) => {
  dispatch({
    type: t.LOADING,
    payload: true,
  });

  const data = dispatch({
    type: t.ADD_COMMENT,
    payload: product,
  });
  dispatch({
    type: t.LOADING,
    payload: false,
  });
};
