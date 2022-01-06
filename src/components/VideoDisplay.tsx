export default function VideoDisplay(props: { vidIDs: string[] }): JSX.Element {
  let showVids;
  if (props.vidIDs.length !== 0) {
    showVids = props.vidIDs.map((id) => (
      <iframe
        key={id}
        title={id}
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
    ));
  }
  return <>{showVids}</>;
}
