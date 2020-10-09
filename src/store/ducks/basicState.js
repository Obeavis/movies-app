import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
  language: ["language"],
  loading: ["status"],
  search: ["search"],
  setPage: ["page"],
});

//Reducer Handlers
const INITIAL_STATE = {
  language: "en-US",
  loading: false,
  search: false,
  page: 1,
};

const changeLanguage = (state = INITIAL_STATE, action) => {
  return { ...state, language: action.payload };
};

const loading = (state = INITIAL_STATE, action) => {
  return { ...state, loading: action.payload };
};

const search = (state = INITIAL_STATE, action) => {
  return { ...state, search: action.payload };
};

const setPage = (state = INITIAL_STATE, action) => {
  return { ...state, page: action.payload };
};

//Criando Reducer
export default createReducer(INITIAL_STATE, {
  [Types.LOADING]: loading,
  [Types.LANGUAGE]: changeLanguage,
  [Types.SEARCH]: search,
  [Types.SET_PAGE]: setPage,
});
