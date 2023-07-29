import { NavLink } from "react-router-dom";

import "./navbar.css"

export function Navbar () {
    return(
        <nav className="navbar-container">
            <NavLink to={"/"} className={"nav-links"}>Home</NavLink>
            <NavLink to={"/explore"} className={"nav-links"}>Explore</NavLink>
            <NavLink to={"/playlist"} className={"nav-links"}>Playlist</NavLink>
            <NavLink to={"/watch-later"} className={"nav-links"}>Watch Later</NavLink>
        </nav>
    )
}