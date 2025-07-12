import { Outlet, Link } from "react-router";

const SavedList = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
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
            <h1>Your Saved Breweries</h1>
            <footer>&copy;  2025 Copyright | drinklocal.com</footer>
        </div>
    );
}

export default SavedList;