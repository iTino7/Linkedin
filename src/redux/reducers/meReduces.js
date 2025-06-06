import { SET_ME } from "../action";

const initialState = {
  me: null,
};

const meReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_ME: {
      return {
        ...state,
        me: action.payload,
      };
    }
    default:
      return state;
  }
};

export default meReducers;
