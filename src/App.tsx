import React, { useEffect, useState } from "react";
import "./App.css";
import { Movie } from "./components/ movie-item/movie";
import axios from "axios";
import { SearchBox } from "./components/search-box/serach-box";
import { Loader } from "./components/loader/loader";
import { MovieDetail } from "./components/movie-detail/movie-detail";
import { MovieInfo, Plot } from "./types/movie.types";
import { Modal } from "react-bootstrap";
import { OMDB_URL } from "./types/movie.constants";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("spider man");
  const [movieDetail, setMovieDetail] = useState({} as MovieInfo);
  const [activateModal, setActivateModal] = useState(false);
  const [detailRequest, setDetailRequest] = useState(false);
  const [plot, setPlot] = useState(Plot.short);

  const getMovies = (searchValue: string) => {
    const url = `${OMDB_URL}&s=${searchValue}`;
    axios
      .get(url)
      .then(({ data }) => {
        if (data.Response === "False") {
          setError(data.Error);
        } else {
          setMovies(data.Search);
        }
        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app px-4">
      <div className="row d-flex align-items-center mt-4 mb-4 gy-3">
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          plot={plot}
          setPlot={setPlot}
        />
      </div>
      <div className="row gx-1 gy-5">
        {loading && <Loader />}

        {error !== null && (
          <div style={{ margin: "20px 0" }}>
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        )}
        {movies.map((movie, index) => (
          <Movie
            key={index}
            movie={movie}
            activateModal={setActivateModal}
            setMovieDetail={setMovieDetail}
            detailRequest={setDetailRequest}
            plot={plot}
          />
        ))}
      </div>
      <Modal
        show={activateModal}
        onHide={() => setActivateModal(false)}
        size="lg"
        fullscreen="sm-down"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{movieDetail?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {detailRequest === false ? (
            <MovieDetail {...movieDetail} />
          ) : (
            <Loader />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
