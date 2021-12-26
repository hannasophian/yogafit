// import React from "react";
import { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import OptionSelector from "./components/OptionSelector";
import VideoDisplay from "./components/VideoDisplay";
import { Video } from "./utils/Video";

function App() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => console.log(videos), [videos])

  return (
    <div className="App">
      <AppHeader />
      <OptionSelector 
        handleSetVideos={(newVideos: Video[]) => setVideos(newVideos)}/>
      <VideoDisplay
        vids= {videos} />
    </div>
  );
}

export default App;
