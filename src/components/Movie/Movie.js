import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as StarIcon } from "static/icons/star.svg";
import { formatNumber, showDate } from "utils/functions";
import MovieImage from "components/MovieImage";
import { MovieBox } from "./style";

const Movie = ({
  id,
  title,
  release_date,
  vote_average,
  vote_count,
  poster_path,
  language
}) => {
  const history = useHistory();

  const goToMovie = () => {
    history.push(`/movie/${id}`);
  };

  return (
    <MovieBox className="m-4">
      <figure
        className="border-solid border-2 border-white rounded-sm hover:border-tertiary"
        onClick={() => goToMovie()}
      >
        <MovieImage src={poster_path} alt={title} size={"w342"} />

        <figcaption className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <StarIcon width="2.5rem" />
            <p className="flex flex-col text-gray-400 pt-2">
              <span className="text-3xl">{vote_average}</span>
              <span className="text-xl text-gray-600 ">
                {formatNumber(vote_count)}
              </span>
            </p>
          </div>
        </figcaption>
      </figure>
      <div className="flex flex-col text-left py-1 px-2">
        <span
          className="text-white text-2xl cursor-pointer"
          onClick={() => goToMovie()}
        >
          {title}
        </span>
        <span className="text-gray-400 text-sm opacity-25">
          {showDate(release_date, language)}
        </span>
      </div>
    </MovieBox>
  );
};

export default Movie;
