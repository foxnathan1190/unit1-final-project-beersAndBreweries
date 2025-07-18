import { Link } from "react-router";
import "./NavigationMenu.css";

const NavigationMenu = () => {
    return (
        <ul id="nav">
            <li className="navLink">
                <Link to="/main">Home</Link>
            </li>
            <li className="navLink">
                <Link to="/about">About</Link>
            </li>
            <li className="navLink">
                <Link to="/profilePage">Profile</Link>
            </li>
            <li className="navLink">
                <Link to="/search">Search</Link>
            </li>
            <li className="navLink">
                <Link to="/savedList">Favorites</Link>
            </li>
            <li className="navLink" style={{ float: "right" }}>
                <Link to="/">Log Out</Link>
            </li>
        </ul>
    );
}

export default NavigationMenu;