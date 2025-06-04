import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReduces from "../reducers/profileReducers";

import notScrollReducers from "../reducers/notScrollReducers";
import imgReducers from "../reducers/imgReducers";

const rootReducers = combineReducers({
  profile: profilesReduces,
  scroll: notScrollReducers,
  image: imgReducers,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
