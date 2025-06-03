import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReduces from "../reducers/profileReducers";

const rootReducers = combineReducers({
  profile: profilesReduces,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
