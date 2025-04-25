import { Link } from "react-router-dom";

function NavBar() {
    return(
        <nav className="navbar">
            <div>
                <Link to="/">Home</Link>
                <Link to="/project">Project</Link>
            </div>
        </nav>
    )
}

export default NavBar;