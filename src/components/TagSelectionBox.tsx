import handleClickCheckbox from "../utils/handleClickCheckbox";
import { InputOptionsInterface } from "../utils/InputOptionsInterface";
import maxCheckMessage from "../utils/maxCheckMessage";
// import MaxCheckMessage from "../utils/maxCheckMessage";

interface Props {
  inputOptions: InputOptionsInterface;
  setInputOptions: React.Dispatch<React.SetStateAction<InputOptionsInterface>>;
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
          setInputOptions(
            handleClickCheckbox(type, inputOptions, tagLimits, times)
          )
        }
        id={type}
        name="sessiontype"
        checked={inputOptions.tags.includes(type)}
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
            <small>{maxCheckMessage(inputOptions.duration)}</small>
            {/* <MaxCheckMessage duration={inputOptions.duration} /> */}
          </label>
          {typesOptions}
        </fieldset>
      </div>
    </div>
  );
}

export default TagSelectionBox;
