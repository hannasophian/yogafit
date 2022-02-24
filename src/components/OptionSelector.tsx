import React, { useState } from "react";
import MaxCheckMessage from "../utils/MaxCheckMessage";
import DurationSelectionBox from "./DurationSelectionBox";
import TagSelectionBox from "./TagSelectionBox";

// import { useHistory } from 'react-router-dom';

// import { Video } from "../utils/Video";

export default function OptionSelector(): JSX.Element {
  // time options
  const times = [20, 30, 45, 60];
  const tagLimits = [1, 2, 2, 3];

  const [inputOptions, setInputOptions] = useState<{
    duration: number;
    tags: string[];
  }>({ duration: 20, tags: [] });

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
    </div>
  );
}
