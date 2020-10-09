import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
  setMovies: ["movie"],
  clearMovies: [],
});

//Reducer Handlers
const INITIAL_STATE = [];

const movies = (state = INITIAL_STATE, action) => {
  return [...state, ...action.payload];
};

const clear = (state = INITIAL_STATE) => {
  return INITIAL_STATE;
};

//Criando Reducer
export default createReducer(INITIAL_STATE, {
  [Types.SET_MOVIES]: movies,
  [Types.CLEAR_MOVIES]: clear,
});
