import * as types from "../type/types";

const initialState = {
  data: null,
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATA: {
      return { ...state, data: action.payload };
    }

    default:
      return state;
  }
};
