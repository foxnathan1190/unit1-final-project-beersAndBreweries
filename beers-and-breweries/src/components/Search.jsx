import { useState, useEffect } from "react";
import NavigationMenu from "../common/NavigationMenu";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./Search.css";

const Search = ({ results, fetchData, isLoggedIn }) => {

    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (results.length > 0) {
            setLoading(false);
        }
    }, [results]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        fetchData(e.target.value);
    }

    return (
        <div>
            <Header />
            <NavigationMenu isLoggedIn={isLoggedIn} />
            <section className="layout">
                <h1>&#128270; Search</h1>
                <label htmlFor="search">Search Breweries by City or Brewery Name: </label>
                <div className="searchBarWrapper">
                <input
                    type="search"
                    placeholder="Type to Search..."
                    className="searchBar"
                    onChange={handleChange}
                    value={searchInput} />
                    </div>
                {loading ? (<p>Loading data...</p>) :
                    (<ul>
                        {searchInput ? results.map((result) => (
                            <li key={result.id} className="resultList">{result.name} | {result.city}, {result.state} | <a href={result.website_url} target="_blank">{result.website_url}</a></li>
                        )) : ("---Please Enter Search Query Above---")}
                    </ul>)}
            </section>
            <Footer />
        </div>
    );
}

export default Search;