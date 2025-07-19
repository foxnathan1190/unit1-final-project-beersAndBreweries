import { Link } from "react-router";
import { useState, useEffect } from "react";

import "./NavigationMenu.css";

const NavigationMenu = () => {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const storedProfile = localStorage.getItem('userProfile');
        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
        }
    }, []);

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
            <li className="userLoggedIn" style={{ float: "right" }}>
                {profile ? (
                    <p>User: {profile.username}</p>
                ) : (
                    <p>No profile data found.</p>
                )}
            </li>
        </ul>
    );
}
export default NavigationMenu;