import { InputOptionsInterface } from "./InputOptionsInterface";

export default function handleClickCheckbox(
  newTag: string,
  inputOptions: InputOptionsInterface,
  tagLimits: number[],
  times: number[]
): InputOptionsInterface {
  if (inputOptions.tags.includes(newTag)) {
    // if already selected, remove tag
    let currentTags = [...inputOptions.tags];
    currentTags.splice(inputOptions.tags.indexOf(newTag), 1);
    return { ...inputOptions, tags: currentTags };
  } else {
    if (
      inputOptions.tags.length < tagLimits[times.indexOf(inputOptions.duration)]
    ) {
      return {
        ...inputOptions,
        tags: [...inputOptions.tags, newTag],
      };
    } else {
      return inputOptions;
    }
  }
}
