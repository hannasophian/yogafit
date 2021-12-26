import React, { useState } from "react";

import { Video } from "../utils/Video";

interface OptionSelectorProps {
    handleSetVideos(videos: Video[]): void;
}

export default function OptionSelector({ handleSetVideos } : OptionSelectorProps): JSX.Element {
  // time options
  const times = [15, 20, 30, 45, 60];
  const tagLimits = [1, 1, 2, 2, 3];
  const timeOptions = times.map((time) => (
    <option key={time} value={time}>
      {time} mins
    </option>
  ));
  const [duration, setDuration] = useState<number>(times[0]);

  // level options
  const [level, setLevel] = useState<number>(1);
  const levels = [1, 2, 3];
  const levelsToShow = ["Beginner", "Intermediate", "Advanced"];
  const levelOptions = levels.map((level) => (
    <option value={level}>{levelsToShow[levels.indexOf(level)]}</option>
  ));

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

  async function getVideosDb(duration: number, level: number, tags: string[]) {
    fetch(`https://yogafit-server.herokuapp.com/getvideo/${level}/${duration}/${tags[0]}`)
      .then((res) => {
        return res.json();
      })
      .then(
        (video) => {
        //   console.log(video.data.video.rows);
          handleSetVideos(video.data.video.rows);
        },
        (error) => console.log(error)
      )
      .catch((error) => console.log(error));
}

  return (
    <div className="OptionSelector">
      {/* select time */}
      <label id="timeselector">Select session time: </label>
      <select
        id="timeselector"
        value={duration}
        onChange={(e) => setDuration(parseInt(e.target.value))}
      >
        {timeOptions}
      </select>

      <br />
      {/* select difficulty level*/}
      <label id="levelSelector">Select difficulty level: </label>
      <select
        name="levelSelector"
        id="levelSelector"
        onChange={(e) => setLevel(parseInt(e.target.value))}
      >
        {levelOptions}
      </select>

      {/* Select options */}
      <fieldset>
        <legend>Choose session options:</legend>
        {typesOptions}
      </fieldset>

      <button 
        disabled ={tags.length ===0}
        onClick={() => getVideosDb(duration, level, tags)
        }>
        Submit
        </button>
    </div>
  );
}
