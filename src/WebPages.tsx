import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import App from "./pages/Home";

export default function WebsiteRoutes(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/results/:youtube_IDs" element={<Child />} />
      </Routes>
    </Router>
  );
}

function Child(): JSX.Element {
  let { youtube_IDs } = useParams();

  return (
    <div>
      <VideoPage routeEndpoints={youtube_IDs ? youtube_IDs : ""} />
    </div>
  );
}
