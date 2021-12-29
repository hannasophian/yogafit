interface MaxCheckMessageProps {
  duration: number;
}
export default function MaxCheckMessage(
  props: MaxCheckMessageProps
): JSX.Element {
  switch (props.duration) {
    case 20:
      return <small>Select 1 option</small>;
    // break;
    case 30:
      return <small>Select 1-2 options</small>;
    // break;
    case 45:
      return <small>Select 1-2 options</small>;
    // break;
    case 60:
      return <small>Select 1-3 options</small>;
    // break;
    default:
      return <></>;
  }
}
