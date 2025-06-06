export const SET_PROFILE = "SET_PROFILE";
export const SET_SCROLL = "SET_SCROLL";
export const SET_ID = "SET_ID";
export const SET_EXP = "SET_EXP";
export const SET_ME = "SET_ME";
export const SET_QUERY = "SET_QUERY";
export const SET_JOBS = "SET_JOBS";
export const SET_JOBS_LOADING_ON = "SET_JOBS_LOADING_ON";
export const SET_JOBS_LOADING_OFF = "SET_JOBS_LOADING_OFF";
export const HAS_ERROR_ON = "HAS_ERROR_ON";
export const HAS_ERROR_OFF = "HAS_ERROR_OFF";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const idAction = (id) => ({
  type: SET_ID,
  payload: id,
});
export const expAction = (exp) => ({
  type: SET_EXP,
  payload: exp,
});

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
        profiles === "me" && dispatch({ type: SET_ME, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const imgAction = (img) => ({ type: SET_IMG, payload: img });
export const queryAction = (query) => ({ type: SET_QUERY, payload: query });
export const getJobsAction = (endpoint) => {
  return async (dispatch, getState) => {
    const globalState = getState();
    dispatch({ type: SET_JOBS_LOADING_ON });
    try {
      let resp = await fetch(endpoint);
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({ type: SET_JOBS, payload: fetchedJobs });
      } else {
        console.log("error");
        throw new Error("Problema nella fetch");
      }
    } catch (error) {
      console.log(error);

      dispatch({ type: HAS_ERROR_ON });
      dispatch({ type: SET_ERROR_MESSAGE, payload: error.message });
    } finally {
      dispatch({ type: SET_JOBS_LOADING_OFF });
    }
  };
};
