import AppHeader from "../components/AppHeader";
import OptionSelector from "../components/OptionSelector";
import "../css/Home.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  return (
    <div className="home-page">
      <div className="container-fluid">
        <div className="row">
          <AppHeader />
        </div>
        <OptionSelector />
      </div>
    </div>
  );
}

export default Home;
