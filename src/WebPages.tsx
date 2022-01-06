import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import App from "./pages/App";
// import { Fragment } from "react";

export default function WebsiteRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/studylist" element={<StudyList />} />
        <Route path="/recommended" element={<Recommended />} /> */}
        <Route path="/results/:youtube_IDs" element={<Child />} />
        {/* <Route path="/results" element={<Child />} /> */}
      </Routes>
    </Router>
  );
}

function Child(): JSX.Element {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { youtube_IDs } = useParams();

  return (
    <div>
      <VideoPage routeEndpoints={youtube_IDs ? youtube_IDs : ""} />
    </div>
  );
  // return (<div>
  // <p>Hello World</p></div>)
}
