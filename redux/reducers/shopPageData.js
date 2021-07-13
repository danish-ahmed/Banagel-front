import * as t from "../types";

const shopPageData = (
  state = {
    loading: false,
    error: null,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case t.GET_SHOP_PAGE_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.shop._id]: action.payload,
        },
      };

    default:
      return { ...state };
  }
};

export default shopPageData;
