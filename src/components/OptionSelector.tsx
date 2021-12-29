import React, { useState } from "react";
import MaxCheckMessage from "../utils/MaxCheckMessage";

// import { Video } from "../utils/Video";

interface OptionSelectorProps {
  handleSetVideoIDs(newVideoIDs: string[]): void;
}

export default function OptionSelector({
  handleSetVideoIDs,
}: OptionSelectorProps): JSX.Element {
  // time options
  const times = [20, 30, 45, 60];
  const tagLimits = [1, 2, 2, 3];
  const timeOptions = times.map((time) => (
    <option key={time} value={time}>
      {time} mins
    </option>
  ));
  const [duration, setDuration] = useState<number>(times[0]);

  // level options
  // const [level, setLevel] = useState<number>(1);
  // const levels = [1, 2, 3];
  // const levelsToShow = ["Beginner", "Intermediate", "Advanced"];
  // const levelOptions = levels.map((level) => (
  //   <option value={level}>{levelsToShow[levels.indexOf(level)]}</option>
  // ));

  //   tag options
  const [tags, setTags] = useState<string[]>([]);
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
    <div>
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
    if (tags.includes(newTag)) {
      // if already selected, remove tag
      let currentTags = [...tags];
      currentTags.splice(tags.indexOf(newTag), 1);
      setTags(currentTags);
    } else {
      if (tags.length >= tagLimits[times.indexOf(duration)]) {
        event.currentTarget.checked = false;
      } else {
        setTags([...tags, newTag]);
      }
    }
  };
  //   useEffect(() => console.log(duration, level, tags), [duration, level, tags]);

  async function getVideosDb(duration: number, tags: string[]) {
    fetch(
      `https://yogafit-server.herokuapp.com/getvideos/3/${duration}/${tags.join(
        "/"
      )}`
    )
      .then((res) => {
        return res.json();
      })
      .then(
        (video) => {
          // console.log(video.data.videoIDs);
          handleSetVideoIDs(video.data.videoIDs);
        }
        // (error) => console.log(error)
      )
      .catch((error) => console.log(error));
  }

  return (
    <div className="OptionSelector">
      {/* select time */}
      <div className="row">
        <label id="timeselector">Select session time: </label>
        <select
          key="timeselections"
          id="timeselector"
          value={duration}
          onChange={(e) => {
            setDuration(parseInt(e.target.value));
          }}
        >
          {timeOptions}
        </select>
      </div>
      {/* select difficulty level*/}
      {/* <label id="levelSelector">Select difficulty level: </label>
      <select
        name="levelSelector"
        id="levelSelector"
        onChange={(e) => setLevel(parseInt(e.target.value))}
      >
        {levelOptions}
      </select> */}

      {/* Select options */}
      <div className="row">
        <fieldset key="optionselection">
          <legend>
            <MaxCheckMessage duration={duration} />
          </legend>
          {typesOptions}
        </fieldset>

        <button
          disabled={
            tags.length === 0 ||
            tags.length > tagLimits[times.indexOf(duration)]
          }
          onClick={() => getVideosDb(duration, tags)}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
