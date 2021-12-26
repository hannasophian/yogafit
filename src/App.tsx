// import React from "react";
import { useState } from "react";
import AppHeader from "./components/AppHeader";
import OptionSelector from "./components/OptionSelector";
import VideoDisplay from "./components/VideoDisplay";
// import { Video } from "./utils/Video";

function App() {
  const [videoIDs, setVideoIDs] = useState<string[]>([]);

  // useEffect(() => console.log(videoIDs), [videoIDs])

  return (
    <div className="App">
      <AppHeader />
      <OptionSelector
        handleSetVideoIDs={(newVideoIDs: string[]) => setVideoIDs(newVideoIDs)}
      />
      <VideoDisplay vidIDs={videoIDs} />
    </div>
  );
}

export default App;
