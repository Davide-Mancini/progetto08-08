import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songsReducer from "../reducers/songsReducer";
import favouriteReducer from "../reducers/favouriteReducer";

const bigReducer = combineReducers({
  songs: songsReducer,
  favourite: favouriteReducer,
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;
