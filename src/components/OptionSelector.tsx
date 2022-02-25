import { useState } from "react";
import { InputOptionsInterface } from "../utils/InputOptionsInterface";
import DurationSelectionBox from "./DurationSelectionBox";
import TagSelectionBox from "./TagSelectionBox";

// import { useHistory } from 'react-router-dom';

// import { Video } from "../utils/Video";

export default function OptionSelector(): JSX.Element {
  // time options
  const times = [20, 30, 45, 60];
  const tagLimits = [1, 2, 2, 3];

  const [inputOptions, setInputOptions] = useState<InputOptionsInterface>({
    duration: 20,
    tags: [],
  });

  return (
    <div className="OptionSelector">
      {/* select time */}
      <div className="row">
        <DurationSelectionBox
          inputOptions={inputOptions}
          setInputOptions={setInputOptions}
          times={times}
        />
      </div>

      {/* Select options */}
      <div className="row">
        <TagSelectionBox
          inputOptions={inputOptions}
          setInputOptions={setInputOptions}
          times={times}
          tagLimits={tagLimits}
        />
      </div>

      <div className="row">
        <a
          href={`/results/${inputOptions.duration}&${inputOptions.tags.join(
            "~"
          )}`}
        >
          <button
            // className="submit-button"
            type="button"
            className="btn btn-primary"
            disabled={inputOptions.tags.length === 0}
          >
            Get my workout
          </button>
        </a>
      </div>
    </div>
  );
}
