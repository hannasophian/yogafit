import React, { useState } from "react";

export default function OptionSelector(): JSX.Element {
  const [level, setLevel] = useState<number>(1);
  const levels = [1, 2, 3];
  const levelsToShow = ["Beginner", "Intermediate", "Advanced"];

  const levelOptions = levels.map((level) => (
    <option value={level}>{levelsToShow[levels.indexOf(level)]}</option>
  ));

  return (
    <div className="OptionSelector">
      <select
        name="levels"
        id="levels"
        onChange={(e) => setLevel(parseInt(e.target.value))}
      >
        {levelOptions}
      </select>
    </div>
  );
}
