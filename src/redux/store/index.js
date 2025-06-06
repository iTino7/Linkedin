import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReduces from "../reducers/profileReducers";

import notScrollReducers from "../reducers/notScrollReducers";
import imgReducers from "../reducers/imgReducers";
import idReducers from "../reducers/idReducers";
import expReducers from "../reducers/expReduces";
import meReducers from "../reducers/meReduces";
import { queryAction } from "../action";
import jobsReducer from "../reducers/jobReduces";
import queryReducers from "../reducers/queryReduces";

const rootReducers = combineReducers({
  profile: profilesReduces,
  scroll: notScrollReducers,
  image: imgReducers,
  id: idReducers,
  exp: expReducers,
  me: meReducers,
  query: queryReducers,
  job: jobsReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
