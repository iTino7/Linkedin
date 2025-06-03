import { SET_PROFILE } from "../action";

const initialState = {
  user: [],
};

const profilesReduces = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default profilesReduces;
