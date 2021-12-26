interface MaxCheckMessageProps {
  duration: number;
}
export default function MaxCheckMessage(
  props: MaxCheckMessageProps
): JSX.Element {
  switch (props.duration) {
    case 20:
      return <p>Select 1 option</p>;
    // break;
    case 30:
      return <p>Select 1-2 options</p>;
    // break;
    case 45:
      return <p>Select 1-2 options</p>;
    // break;
    case 60:
      return <p>Select 1-3 options</p>;
    // break;
    default:
      return <></>;
  }
}
