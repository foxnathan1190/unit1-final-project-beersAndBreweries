import { useState, useEffect } from "react";
import NavigationMenu from "../common/NavigationMenu";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./Search.css";

const Search = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

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

    const handleChange = (e) => {
        setSearch(e.target.value)


        let filteredData = [];
        if (search !== "") {
            data = breweryData;
            filteredData = breweryData.filter(item => item.city.toLowerCase().includes(search.toLocaleLowerCase()))
        } else {
            filteredData = breweryData;
        }
    }

    return (
        <div>
            <Header />
            <NavigationMenu />
            <section className="layout">
                <h1>Search</h1>
                <form>
                    <label htmlFor="search">Search Breweries by City: </label>
                    <input type="text" id="search" name="search" onChange={handleChange} placeholder="--City--"></input>
                    <ul>
                        {data.map((data) => (
                            <li key={data.id}>{data.name} | {data.city}, {data.state} <button type="button">Save</button></li>
                        ))}
                    </ul>
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default Search;