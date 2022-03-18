import AppHeader from "../components/AppHeader";
import OptionSelector from "../components/OptionSelector";
import "../css/Home.css";

import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/NavBar";
AOS.init();

function Home() {
  return (
    <div className="home-page">
      <NavBar />
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
