import { Link } from "react-router-dom";
import "../css/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
          <h3 className="navbar-brand">YogaFit</h3>
        </Link>
        <div className="Menu">
          <button type="button" className="btn btn-primary">
            Log In
          </button>
          <button type="button" className="btn btn-signup">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
