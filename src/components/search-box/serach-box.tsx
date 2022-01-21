import { DebounceInput } from "react-debounce-input";
import { Plot } from "../../types/movie.types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  searchValue?: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  plot: Plot;
  setPlot: Dispatch<SetStateAction<Plot>>;
}

export const SearchBox = ({
  searchValue,
  setSearchValue,
  plot,
  setPlot,
}: Props) => {
  return (
    <>
      <div className="col-sm-12 col-md-4">
        <DebounceInput
          className="form-control"
          minLength={2}
          debounceTimeout={300}
          placeholder="Type to search..."
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
      <div className="col-sm-12 col-md-4">
        <input
          type="radio"
          name="plot"
          value={Plot.short}
          checked={plot === "short"}
          onChange={(e) => setPlot(e.currentTarget.value as Plot)}
        />{" "}
        short{" "}
        <input
          type="radio"
          name="plot"
          value={Plot.full}
          checked={plot === "full"}
          onChange={(e) => setPlot(e.currentTarget.value as Plot)}
        />{" "}
        full
      </div>
    </>
  );
};
