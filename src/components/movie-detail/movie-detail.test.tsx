import React from "react";
import { render, screen } from "@testing-library/react";
import { movieDetail } from "../../__mocks__/mocks";
import { MovieDetail } from "./movie-detail";
import { MovieInfo } from "../../types/movie.types";

describe("Movie", () => {
  test("renders movie detail", () => {
    const detailObj = movieDetail.data as MovieInfo;
    render(<MovieDetail {...detailObj} />);
    const movieDetailElement = screen.getByTestId("movie-detail");
    expect(movieDetailElement).toBeInTheDocument();
  });
});
