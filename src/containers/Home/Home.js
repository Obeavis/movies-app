import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUpcoming, searchMovie } from "services/moviesService";
import Container from "components/Container";
import MovieList from "components/MovieList";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, basicState } = useSelector((state) => state);

  const [totalPages, setTotalPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadingMore = () => {
    console.log('basicState: ', basicState.page);
    if (basicState.page < totalPages) {
      dispatch({ type: "SET_PAGE", payload: basicState.page + 1 });
    }
  };

  const upcomingMovies = async (page, language, dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      setIsLoadingMore(true);
      const { data } = await getUpcoming(page, language);
      setTotalPages(data.total_pages);
      dispatch({ type: "SET_MOVIES", payload: data.results });

      setIsLoadingMore(false);

      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const search = async (search, page, language, dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      setIsLoadingMore(true);
      const { data } = await searchMovie(search, page, language);
      setTotalPages(data.total_pages);
      dispatch({ type: "SET_MOVIES", payload: data.results });

      setIsLoadingMore(false);

      dispatch({ type: "LOADING", payload: false });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    if (basicState.search) {
      search(basicState.search, basicState.page, basicState.language, dispatch);
    } else {
      upcomingMovies(basicState.page, basicState.language, dispatch);
    }
  }, [dispatch, basicState.page, basicState.language, basicState.search]);

  return (
    <Container fluid className="min-h-screen bg-black">
      <MovieList
        movies={movies}
        isLoadingMore={isLoadingMore}
        language={basicState.language}
        loadingMore={loadingMore}
      />
    </Container>
  );
};

export default Home;
