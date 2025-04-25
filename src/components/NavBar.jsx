import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    return(
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/project">Project</Link>
                <Link to="/project">Experiences</Link>
            </div>
        </nav>
    )
}

export default NavBar;