export default function handleClickCheckbox(
  newTag: string,
  inputOptions: {
    duration: number;
    tags: string[];
  },
  setInputOptions: React.Dispatch<
    React.SetStateAction<{
      duration: number;
      tags: string[];
    }>
  >,
  tagLimits: number[],
  times: number[]
) {
  if (inputOptions.tags.includes(newTag)) {
    // if already selected, remove tag
    let currentTags = [...inputOptions.tags];
    currentTags.splice(inputOptions.tags.indexOf(newTag), 1);
    setInputOptions({ ...inputOptions, tags: currentTags });
  } else {
    if (
      inputOptions.tags.length < tagLimits[times.indexOf(inputOptions.duration)]
    ) {
      setInputOptions({
        ...inputOptions,
        tags: [...inputOptions.tags, newTag],
      });
    }
  }
}
