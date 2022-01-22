import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import axios from "./__mocks__/axios";
import { movieSearchResponse } from "./__mocks__/mocks";

describe("App", () => {
  afterEach(cleanup);
  test("renders movie app", async () => {
    axios.get.mockResolvedValueOnce(movieSearchResponse);
    render(<App />);

    //show loader
    expect(screen.getByTestId("loading")).toBeInTheDocument();

    const movieItems = await waitFor(() => screen.getAllByTestId("movie-item"));
    expect(movieItems.length).toEqual(10);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
