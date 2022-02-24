// import React from "react";
import { useState } from "react";
import AppHeader from "../components/AppHeader";
import OptionSelector from "../components/OptionSelector";
import VideoDisplay from "../components/VideoDisplay";
import "../css/App.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const [videoIDs, setVideoIDs] = useState<string[]>([]);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <AppHeader />
        </div>
        <OptionSelector
          handleSetVideoIDs={(newVideoIDs: string[]) =>
            setVideoIDs(newVideoIDs)
          }
        />
      </div>
      <VideoDisplay vidIDs={videoIDs} />
    </div>
  );
}

export default App;
