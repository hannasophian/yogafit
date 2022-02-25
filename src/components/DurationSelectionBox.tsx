import { InputOptionsInterface } from "../utils/InputOptionsInterface";

interface Props {
  inputOptions: InputOptionsInterface;
  setInputOptions: React.Dispatch<React.SetStateAction<InputOptionsInterface>>;
  times: number[];
}

function DurationSelectionBox({
  inputOptions,
  setInputOptions,
  times,
}: Props): JSX.Element {
  const timeOptions = times.map((time) => (
    <option key={time} value={time}>
      {time} mins
    </option>
  ));

  return (
    <div className="Duration-Selection">
      <div className="duration-box" data-aos="zoom-in" data-aos-duration="1000">
        <label htmlFor="time-dropdown">
          How long would you like your yoga session to be?
        </label>
        <br />

        {/* Dropdown menu to select duration of session */}
        <select
          id="time-dropdown"
          value={inputOptions.duration}
          onChange={(e) => {
            setInputOptions({
              ...inputOptions,
              duration: parseInt(e.target.value),
            });
          }}
        >
          {timeOptions}
        </select>
      </div>
    </div>
  );
}

export default DurationSelectionBox;
