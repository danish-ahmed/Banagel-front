import * as t from "../types";

const segment = (
  state = {
    loading: false,
    error: null,
    data: [],
  },
  action
) => {
  switch (action.type) {
    case t.GET_OFFERS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return { ...state };
  }
};

export default segment;
