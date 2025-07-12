import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router";

const Search = () => {
    const [data, setData] = useState([]);

    const breweryData = async () => {
        try {
            let response = await fetch('https://api.openbrewerydb.org/v1/breweries')
            setData(await response.json());
            console.log(data);
        } catch (error) {
            console.error("Error while fetching:", error.message);
        }
    }

    useEffect(() => {
        breweryData()
    }, [])

    /*const handleSearchClick = () => {
        return(
            
        )
    }*/

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
            <h1>Search</h1>
            <form>
                <lable htmlFor="searchBar">Search Breweries by City: </lable>
                <input type="text" id="searchBar" name="searchBar" placeholder="--City--"></input>
                <button type="button" /*onClick={handleSearchClick}*/ >See Breweries</button>
                <ul>
                    {data.map((data) => (
                        <li key={data.id}>{data.name} | {data.city}, {data.state} <button type="button">Save</button></li>
                    ))}
                </ul>
            </form>
            <footer>&copy;  2025 Copyright | drinklocal.com</footer>
        </div>
    );
}

export default Search;