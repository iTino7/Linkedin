import { SET_SCROLL } from "../action";

const initialState = {
  value: true,
};

const notScrollReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCROLL: {
      return {
        ...state,
        value: !state.value,
      };
    }
    default:
      return state;
  }
};

export default notScrollReducers;
