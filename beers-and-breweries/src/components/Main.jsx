import { Outlet, Link } from "react-router";

const Main = () => {
    return (
        <>
        <h1>Welcome to Drink Local!</h1>
            <nav>
                <ul>
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
            <footer>&copy;  2025 Copyright | drinklocal.com</footer>
        </>
    );
}

export default Main;