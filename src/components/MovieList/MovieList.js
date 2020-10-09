import React from "react";
import { FormattedMessage } from "react-intl";
import BottomScrollListener from "react-bottom-scroll-listener";
import Container from "components/Container";
import Movie from "components/Movie";

const MovieList = ({ movies, isLoadingMore, language, loadingMore }) => {
  return (
    <BottomScrollListener
      onBottom={() => loadingMore()}
      offset="30"
      debounce="5000"
    >
      <Container className="flex flex-wrap justify-center bg-primary mt-16">
        {!movies.length && (
          <div className="w-full mt-5">
            <span className="text-gray-400 text-2xl">
              <FormattedMessage id="noResults" />
            </span>
          </div>
        )}
        {movies.map((movie, i) => {
          return (
            <Movie
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
              poster_path={movie.poster_path}
              key={i}
              language={language}
            />
          );
        })}
        {isLoadingMore && (
          <div className="w-full mt-5 mb-8">
            <span className="text-gray-400 text-xl">
              <FormattedMessage id="loading" />
              ...
            </span>
          </div>
        )}
      </Container>
    </BottomScrollListener>
  );
};

export default MovieList;
