import handleClickCheckbox from "../utils/handleClickCheckbox";
import MaxCheckMessage from "../utils/MaxCheckMessage";

interface Props {
  inputOptions: {
    duration: number;
    tags: string[];
  };
  setInputOptions: React.Dispatch<
    React.SetStateAction<{
      duration: number;
      tags: string[];
    }>
  >;
  times: number[];

  tagLimits: number[];
}

function TagSelectionBox({
  inputOptions,
  setInputOptions,
  times,
  tagLimits,
}: Props): JSX.Element {
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
        onChange={(event) =>
          handleClickCheckbox(
            type,
            event,
            inputOptions,
            setInputOptions,
            tagLimits,
            times
          )
        }
        id={type}
        name="sessiontype"
      />
      <label>{typesToShow[types.indexOf(type)]}</label>
    </div>
  ));

  return (
    <div className="Option-Selection">
      <div className="option-box" data-aos="zoom-in" data-aos-duration="1000">
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
            disabled={inputOptions.tags.length === 0}
          >
            Get my workout
          </button>
        </a>
      </div>
    </div>
  );
}

export default TagSelectionBox;
