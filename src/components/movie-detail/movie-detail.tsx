import { MovieInfo } from "../../types/movie.types";

export const MovieDetail = ({
  Title,
  Poster,
  imdbRating,
  Rated,
  Year,
  Genre,
  Plot,
  Actors,
  Awards,
  Director,
  Writer,
}: MovieInfo) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-6 col-sm-12">
          <img
            className="w-100"
            src={
              Poster === "N/A"
                ? "https://placehold.it/198x264&text=Image+Not+Found"
                : Poster
            }
            alt={Title}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <div>
              <div className="badge bg-light text-dark">{imdbRating}</div>
              <div className="badge bg-light text-dark">{Year}</div>
            </div>
            <div className="row">
              <div className="col-3">Director: </div>
              <div className="col-9">{Director}</div>
            </div>
            <div className="row">
              <div className="col-3">Rated: </div>
              <div className="col-9">{Rated}</div>
            </div>
            <div className="row">
              <div className="col-3">Genre: </div>
              <ul className="col-9">
                {Genre?.split(",").map((gen, index) => (
                  <li key={index}>{gen}</li>
                ))}
              </ul>
            </div>
            <div className="row">
              <div className="col-3">Actors: </div>
              <ul className="col-9">
                {Actors?.split(",").map((actor, index) => (
                  <li key={index}>{actor}</li>
                ))}
              </ul>
            </div>
            <div className="row">
              <div className="col-3">Writer: </div>
              <ul className="col-9">
                {Writer?.split(",").map((writer, index) => (
                  <li key={index}>{writer}</li>
                ))}
              </ul>
            </div>
            <div className="row">
              <div className="col-3">Awards: </div>
              <div className="col-9">{Awards}</div>
            </div>
            <div className="row">
              <div className="col-3">Plot: </div>
              <div className="col">{Plot}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
