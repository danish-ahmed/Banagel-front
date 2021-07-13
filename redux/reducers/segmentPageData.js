import * as t from "../types";

const segmentPageData = (
  state = {
    loading: false,
    error: null,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case t.GET_SEGMENT_PAGE_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.segment]: action.payload,
        },
      };

    default:
      return { ...state };
  }
};

export default segmentPageData;
