export const SET_PROFILE = "SET_PROFILE";
export const SET_SCROLL = "SET_SCROLL";

export const notScrollAction = () => ({ type: SET_SCROLL });
export const SET_IMG = "SET_IMG";

export const profileAction = (token, profiles) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profiles}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: SET_PROFILE, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const imgAction = (img) => ({ type: SET_IMG, payload: img });
