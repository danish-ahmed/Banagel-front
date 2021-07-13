import * as t from "../types";

const invoice = (
  state = {
    loading: false,
    error: null,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case t.ADD_INVOICE:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return { ...state };
  }
};

export default invoice;
