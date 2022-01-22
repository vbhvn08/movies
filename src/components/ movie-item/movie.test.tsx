import React from "react";
import { render, screen } from "@testing-library/react";
import { Movie } from "./movie";
import { Plot } from "../../types/movie.types";
import { movieSearchResponse } from "../../__mocks__/mocks";

describe("Movie", () => {
  test("renders movie iteam", () => {
    render(
      <Movie
        movie={movieSearchResponse.data.Search[0]}
        setMovieDetail={jest.fn()}
        detailRequest={jest.fn()}
        activateModal={jest.fn()}
        plot={Plot.short}
      />
    );
    const movieBody = screen.getByTestId("movie-body");
    expect(movieBody).toBeInTheDocument();
  });
});
