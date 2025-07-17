import { Link } from "react-router";
import "./NavigationMenu.css";

const NavigationMenu = () => {
    return (
        <ul>
            <li>
                <Link to="/main">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/profilePage">Profile</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
            <li>
                <Link to="/savedList">Favorites</Link>
            </li>
            <li style={{ float: "right" }}>
                <Link to="/">Log Out</Link>
            </li>
        </ul>
    );
}

export default NavigationMenu;