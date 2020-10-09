import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetails, getCredits } from "services/moviesService";
import { ReactComponent as StarIcon } from "static/icons/star.svg";
import { formatNumber, showDate } from "utils/functions";
import Container from "components/Container";
import MovieImage from "components/MovieImage";

import styled from "@emotion/styled/macro";

const Genres = styled.p`
  span:last-child .slash {
    display: none;
  }
`;

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.basicState);
  const params = useParams();
  const history = useHistory();

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const getDirectors = (arr) => {
    const directors = arr.filter((obj) => obj.job === "Director");
    if (!directors.length) {
      return;
    }

    if (directors.length === 1) {
      return <span><FormattedMessage id="director" />: {directors[0].name}</span>;
    } else {
      return (
        <span>
          <FormattedMessage id="directors" />: {directors[0].name}, {directors[1].name}
          {directors.length > 2 && (
            <span className="text-sm italic"> <FormattedMessage id="andMore" /> </span>
          )}
        </span>
      );
    }
  };

  const getCast = (arr) => {
    if (!arr.length) {
      return;
    }
    const actors = arr.slice(0, 6).map((actor) => actor.name);

    return (
      <span>
        <FormattedMessage id="actors" />: {actors.join(", ")}{" "}
        {arr.length > 5 && <span className="text-sm italic"> <FormattedMessage id="andMore" /> </span>}
      </span>
    );
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      dispatch({ type: "LOADING", payload: true });
      try {
        const { data } = await getDetails(params.movieId, language);
        setMovie(data);

        const { cast, crew } = await (
          await getCredits(params.movieId, language)
        ).data;

        setCast(cast);

        setCrew(crew);

        dispatch({ type: "LOADING", payload: false });
      } catch (error) {
        if (error.response.status === 404) {
          history.push(`/`);
        }
        console.log("error: ", error);
      }
    };
    getMovieDetails();
  }, [dispatch, history, params.movieId, language]);

  return (
    <Container fluid className="flex items-baseline min-h-screen bg-black">
      <Container className="bg-primary mt-16">
        <div className="flex flex-wrap py-10 px-5 justify-center">
          <div className="sm:w-1/2 lg:w-1/3">
            <MovieImage
              className="border-solid border-2 border-white rounded-sm"
              src={movie.poster_path}
              alt={movie.title}
              size={"w342"}
            />
          </div>
          <div className="text-center sm:text-left sm:w-1/2 lg:w-2/3 px-3 sm:px-5 lg:px-20">
            <p className="flex flex-col leading-8 mt-5 sm:mt-0">
              <span className="text-4xl font-semibold text-white">
                {movie.title}
              </span>
              <span className="italic text-gray-400">
                {movie.tagline && movie.tagline}
              </span>
            </p>

            <p className="text-gray-400 text-xl mt-5">
              {showDate(movie.release_date, language)}
            </p>
            {movie.genres ? (
              <Genres className="block lg:flex text-gray-400 text-xl justify-center sm:justify-start">
                {movie.genres.map((genre, i) => (
                  <span key={i}>
                    {genre.name}
                    <span className="slash px-1"> / </span>
                  </span>
                ))}
              </Genres>
            ) : null}
            <p className="text-gray-400 text-base mt-4">
              {movie.original_title && (
                <>
                  {movie.original_title}
                  <span className="italic">
                    {' '}<FormattedMessage id="originalTitle" />
                  </span>
                </>
              )}
            </p>

            <p className="text-gray-400 text-base mt-4">
              {movie.overview && <>{movie.overview}</>}
            </p>

            <p className="text-gray-400 text-base mt-5">
              {crew.length && getDirectors(crew)}
            </p>
            <p className="text-gray-400 text-base mt-2">
              {crew.length && getCast(cast)}
            </p>

            {movie.vote_average && (
              <div className="flex flex-col mt-5 justify-center items-center sm:flex-row sm:justify-start">
                <StarIcon width="2rem" />
                <p className="flex flex-col mt-3 sm:mt-0 sm:ml-3 ">
                  <span className="text-xl text-gray-400 ">
                    {movie.vote_average} <span className="text-base">/10</span>
                  </span>
                  {movie.vote_count && (
                    <span className="text-gray-400">
                      {formatNumber(movie.vote_count)}
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default MovieDetails;
