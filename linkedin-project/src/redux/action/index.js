export const SET_PROFILE = "SET_PROFILE";

export const profileAction = (token) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: SET_PROFILE, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

