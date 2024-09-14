import React, {useState} from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClicks = function() {
      setClick(!click);
    }

    const closeMobileMenu = function() {
        setClick(false);
    } 

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        <GiRocketThruster 
                        className="navbar-icon" 
                        onClick={closeMobileMenu}                           
                        />
                        Skye
                    </Link>
                    <div className="menu-icon" onClick={handleClicks}>
                    {click ? <FaTimes /> : <FaBars />}
                    </div>
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar;