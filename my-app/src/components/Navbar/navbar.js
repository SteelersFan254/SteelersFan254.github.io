import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <div>
            <div className="header">
                <div className="nameBox">Ryan Borja</div>
                <div className="pageBox">
                    <Link
                        to="/"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        About
                    </Link>
                    &#124;
                    <Link
                        to="/portfolio"
                        className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        style={{ textDecoration: "none", color: "white" }}

                    >
                        Portfolio
                    </Link>
                    &#124;
                     <Link
                        to="/contact"
                        className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        style={{ textDecoration: "none", color: "white" }}

                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>



    );
}

export default Navbar;