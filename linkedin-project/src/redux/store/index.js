import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReduces from "../reducers/profileReducers";
import { notScrollAction } from "../action";
import notScrollReducers from "../reducers/notScrollReducers";

const rootReducers = combineReducers({
  profile: profilesReduces,
  scroll: notScrollReducers,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
