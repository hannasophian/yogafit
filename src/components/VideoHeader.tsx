interface VideoHeaderProps {
  duration: number | undefined;
  tags: string[];
}

export default function VideoHeader(props: VideoHeaderProps) {
  return (
    <div className="video-header">
      <h1>YogaFit</h1>
      <p>Get a custom workout to relax and unwind</p>
    </div>
  );
}
