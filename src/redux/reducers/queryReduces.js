import { SET_QUERY } from "../action";

const initialState = {
  value: false,
};

const queryReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY: {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
};

export default queryReducers;
