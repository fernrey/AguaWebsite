import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {

    return (
            <nav className="Navbar">
                <div className="logo">
                <Link to="/" className="home">AMG</Link>
                </div>
                <Link to="About" className="about"> About </Link>
                <Link to="Gallery" className="Gallery"> Gallery </Link>
                <Link to="Social" className="Social"> Social </Link>
            </nav>
    );
}

export default Navbar;