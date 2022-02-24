import React, { useState } from "react";
import MaxCheckMessage from "../utils/MaxCheckMessage";
import DurationSelectionBox from "./DurationSelectionBox";

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

  const types = [
    "general",
    "yin",
    "vinyasa",
    "morning",
    "night",
    "stretch",
    "strength",
    "hatha",
    "relax",
  ];
  const typesToShow = [
    "General",
    "Yin",
    "Vinyasa",
    "Morning",
    "Night",
    "Stretch",
    "Strength",
    "Hatha",
    "Relaxing",
  ];
  const typesOptions = types.map((type) => (
    <div key={type}>
      <input
        key={`type.${type}`}
        type="checkbox"
        onChange={(event) => handleClickCheckbox(type, event)}
        id={type}
        name="sessiontype"
      />
      <label>{typesToShow[types.indexOf(type)]}</label>
    </div>
  ));

  const handleClickCheckbox = (
    newTag: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (inputOptions.tags.includes(newTag)) {
      // if already selected, remove tag
      let currentTags = [...inputOptions.tags];
      currentTags.splice(inputOptions.tags.indexOf(newTag), 1);
      setInputOptions({ ...inputOptions, tags: currentTags });
    } else {
      if (
        inputOptions.tags.length >=
        tagLimits[times.indexOf(inputOptions.duration)]
      ) {
        event.currentTarget.checked = false;
      } else {
        setInputOptions({
          ...inputOptions,
          tags: [...inputOptions.tags, newTag],
        });
      }
    }
  };

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
        <div className="Option-Selection">
          <div
            className="option-box"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <fieldset key="optionselection">
              <label>What would you like to focus on this session?</label>
              <br />
              <label>
                <MaxCheckMessage duration={inputOptions.duration} />
              </label>
              {typesOptions}
            </fieldset>
            <br />
            <a
              href={`/results/${inputOptions.duration}&${inputOptions.tags.join(
                "~"
              )}`}
            >
              <button
                className="submit-button"
                disabled={
                  inputOptions.tags.length === 0 //||
                  // inputOptions.tags.length >
                  //   tagLimits[times.indexOf(inputOptions.duration)]
                }
              >
                Get my workout
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
