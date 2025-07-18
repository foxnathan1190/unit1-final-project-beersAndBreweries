import { useState } from "react";
import NavigationMenu from "../common/NavigationMenu";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./Search.css";

const Search = () => {
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async (value) => {
        setLoading(true);
        try {
            const response = await fetch('https://api.openbrewerydb.org/v1/breweries?by_state=colorado&per_page=200', )
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = (await response.json());
            const results = data.filter((brewery) => {
                return value && brewery && (brewery.city && brewery.city.toLowerCase().includes(value.toLowerCase())) || (brewery.name && brewery.name.toLowerCase().includes(value.toLowerCase()));
            })
            setResults(results);
        } catch (error) {
            console.error("Error while fetching:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        fetchData(e.target.value);
    }

    return (
        <div>
            <Header />
            <NavigationMenu />
            <section className="layout">
                <h1>&#128270; Search</h1>
                <label htmlFor="search">Search Breweries by City or Brewery Name: </label>
                <input
                    type="search"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput} />
                {loading && <p>Loading data...</p>}
                <ul>
                    {results.map((result) => (
                        <li key={result.id} className="resultList">{result.name} | {result.city}, {result.state} | <a href={result.website_url} target="_blank">{result.website_url}</a></li>
                    ))}
                </ul>
            </section>
            <Footer />
        </div>
    );
}

export default Search;