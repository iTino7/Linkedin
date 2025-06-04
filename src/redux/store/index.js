import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReduces from "../reducers/profileReducers";

import notScrollReducers from "../reducers/notScrollReducers";
import imgReducers from "../reducers/imgReducers";
import idReducers from "../reducers/idReducers";
import expReducers from "../reducers/expReduces";

const rootReducers = combineReducers({
  profile: profilesReduces,
  scroll: notScrollReducers,
  image: imgReducers,
  id: idReducers,
  exp: expReducers,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
