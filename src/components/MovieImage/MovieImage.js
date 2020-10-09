import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import noImage from "static/images/no-image.jpg";

const MovieImage = ({ src, alt, size, className }) => {
  return (
    <LazyLoadImage
      className={className}
      src={
        src == null
          ? noImage
          : `${process.env.REACT_APP_TMDB_IMG_URL}/${size}/${src}`
      }
      alt={alt}
    />
  );
};

export default MovieImage;
