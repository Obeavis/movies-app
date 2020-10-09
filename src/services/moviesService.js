import baseService from "./baseService";

export const getUpcoming = (page, language) =>
  baseService().get(
    `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&page=${page}`
  );

export const getDetails = (id, language) =>
  baseService().get(
    `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );

export const getCredits = (id, language) =>
  baseService().get(
    `/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
  );

  export const searchMovie = (search, page, language) =>
  baseService().get(
    `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=${language}&query=${search}&page=${page}`
  );
