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
                <label htmlFor="fname">First Name:</label><br/>
                <input type="text" id="fname" name="fname"></input><br/>
                <label htmlFor="lname">Last Name:</label><br/>
                <input type="text" id="lname" name="lname"></input><br/>
                <label htmlFor="email">Email:</label><br/>
                <input type="email" id="email" name="email"></input><br/>
                <label htmlFor="password">Password:</label><br/>
                <input type="password" id="password" name="password"></input><br/>
                <label htmlFor="confirmPassword">Confirm Password:</label><br/>
                <input type="password" id="confirmPassword" name="confirmPassword"></input><br/>
                <label htmlFor="faveBeer">Favorite Beer:</label><br/>
                <input type="text" id="favBeer" name="favBeer"></input><br/>
                <button onClick={handleClick} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateProfile;