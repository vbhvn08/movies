import { MovieInfo, Plot } from "../../types/movie.types";
import axios from "axios";
import { OMDB_URL } from "../../types/movie.constants";
import { Dispatch, SetStateAction } from "react";

interface Props {
  movie: MovieInfo;
  setMovieDetail: Dispatch<SetStateAction<MovieInfo>>;
  detailRequest: Dispatch<SetStateAction<boolean>>;
  activateModal: Dispatch<SetStateAction<boolean>>;
  plot: Plot;
}

export const Movie = ({
  movie,
  setMovieDetail,
  detailRequest,
  activateModal,
  plot,
}: Props) => {
  const clickHandler = () => {
    // Display Modal and Loading Icon
    activateModal(true);
    detailRequest(true);
    setMovieDetail({} as MovieInfo);
    const url = `${OMDB_URL}&i=${movie.imdbID}&plot=${plot}`;
    axios
      .get(url)
      .then(({ data }) => {
        detailRequest(false);
        setMovieDetail(data);
      })
      .catch(({ message }) => {
        detailRequest(false);
      });
  };

  return (
    <div
      className="card d-flex justify-content-start col-sm-12 col-md-2 ms-md-3 movie-container"
      data-testid="movie-item"
      onClick={() => clickHandler()}
    >
      <img src={movie?.Poster} className="card-img-top" alt="..." />
      <div className="card-body" data-testid="movie-body">
        <h5 className="card-title">{movie?.Title}</h5>
        <p className="badge bg-info">{movie?.Type}</p>
      </div>
    </div>
  );
};
