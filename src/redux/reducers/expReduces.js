import { SET_EXP } from "../action";

const initialState = {
  value: false,
};

const expReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXP: {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
};

export default expReducers;
