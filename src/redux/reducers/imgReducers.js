import { SET_IMG } from "../action";

const initialState = {
  img: null,
};

const imgReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMG: {
      return {
        ...state,
        img: action.payload,
      };
    }
    default:
      return state;
  }
};

export default imgReducers;
