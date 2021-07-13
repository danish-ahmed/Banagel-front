import * as t from "../types";

const segmentProducts = (
  state = {
    loading: false,
    error: null,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case t.GET_SEGMENT_PRODUCTS:
      return {
        ...state,
        data: { ...state.data, [action.payload.segment]: action.payload.data },
      };

    default:
      return { ...state };
  }
};

export default segmentProducts;
