export default function LoadingSpinner(props: { text: string }) {
  return (
    <div className="spinner">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
      <br />
      <span>{props.text}</span>
    </div>
  );
}
