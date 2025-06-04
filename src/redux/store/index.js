import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilesReduces from "../reducers/profileReducers";
import imgReducers from "../reducers/imgReducers";

const rootReducers = combineReducers({
  profile: profilesReduces,
  image: imgReducers,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
