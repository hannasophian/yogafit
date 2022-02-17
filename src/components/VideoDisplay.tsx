export default function VideoDisplay(props: { vidIDs: string[] }): JSX.Element {
  let showVids;
  if (props.vidIDs.length !== 0) {
    showVids = props.vidIDs.map((id, index) => (
      <div className="video" key={id}>
        <iframe
          title={id}
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
        ></iframe>
        <div className="video-info">
          <p>
            Video {index}/{props.vidIDs.length}
          </p>
        </div>
      </div>
    ));
  }
  return <>{showVids}</>;
}
