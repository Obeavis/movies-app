import { combineReducers } from "redux";
import movies from "./movies";
import basicState from "./basicState";

export default combineReducers({
  basicState,
  movies,
});
