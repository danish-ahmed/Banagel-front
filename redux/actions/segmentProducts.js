import * as t from "../types";

export const getSegmentProducts = (segment) => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });
    console.log(segment);
    const apiResponse = await fetch(
      t.API + "/shop-products/segment/" + segment,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
        }),
      }
    );
    let result = await apiResponse.json();

    dispatch({
      type: t.GET_SEGMENT_PRODUCTS,
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
