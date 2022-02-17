import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
          <h3 className="navbar-brand">YogaFit</h3>
        </Link>
      </div>
    </nav>
  );
}
