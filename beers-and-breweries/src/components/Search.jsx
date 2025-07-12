import { useState, useEffect } from "react";

const Search = () => {
    const [data, setData] = useState([]);

const breweryData = async () => {
    try{
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
            <h1>Search</h1>
            <form>
                <lable htmlFor="searchBar">Search Breweries by City: </lable>
                <input type="text" id="searchBar" name="searchBar" placeholder="--City--"></input>
                <button type="button" /*onClick={handleSearchClick}*/ >See Breweries</button>
                <ul>
                    {data.map((data) => (
                        <li key={data.id}>{data.name} | {data.city}, {data.state}</li>
                    ))}
                </ul>
            </form>
        </div>
    );
}

export default Search;