import { Link } from "react-router"

function handleClick(e) {
    e.preventDefault();
    return(
    <Link to="/"></Link>
    )
}

const CreateProfile = () => { 

    return (
        <div>
            <h1>Create Profile</h1>
            <form>
                <label htmlFor="fName">First Name:</label><br/>
                <input type="text" id="fName" name="fName"></input><br/>
                <label htmlFor="lName">Last Name:</label><br/>
                <input type="text" id="lName" name="lName"></input><br/>
                <label htmlFor="username">Username:</label><br/>
                <input type="text" id="username" name="username"></input><br/>
                <label htmlFor="email">Email:</label><br/>
                <input type="email" id="email" name="email"></input><br/>
                <label htmlFor="password">Password:</label><br/>
                <input type="password" id="password" name="password"></input><br/>
                <label htmlFor="confirmPassword">Confirm Password:</label><br/>
                <input type="password" id="confirmPassword" name="confirmPassword"></input><br/>
                <label htmlFor="faveBrewery">Favorite Brewery:</label><br/>
                <input type="text" id="favBrewery" name="favBrewery"></input><br/>
                <button onClick={handleClick} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateProfile;