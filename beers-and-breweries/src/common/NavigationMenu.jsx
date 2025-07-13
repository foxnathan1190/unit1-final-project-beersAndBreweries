import { Outlet, Link } from "react-router";

const NavigationMenu = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/main">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/profilePage">Profile</Link>
                    </li>
                    <li>
                        <Link to="/savedList">Saved List</Link>
                    </li>
                    <li>
                        <Link to="/loginPage">Log Out</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default NavigationMenu;