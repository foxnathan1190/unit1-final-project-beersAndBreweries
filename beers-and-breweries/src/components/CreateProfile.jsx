import { Link } from "react-router"
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./CreateProfile.css";

function handleClick(e) {
    e.preventDefault();
    return (
        <Link to="/">Main</Link>
    )
}

const CreateProfile = () => {

    return (
        <div>
            <Header />
            <section className="createProfile">
                <h2>Create Profile</h2>
                <form>
                    <label htmlFor="fName">First Name:</label><br />
                    <input type="text" id="fName" name="fName"></input><br />
                    <label htmlFor="lName">Last Name:</label><br />
                    <input type="text" id="lName" name="lName"></input><br />
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" id="username" name="username"></input><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email"></input><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" name="password"></input><br />
                    <label htmlFor="confirmPassword">Confirm Password:</label><br />
                    <input type="password" id="confirmPassword" name="confirmPassword"></input><br />
                    <label htmlFor="faveBrewery">Favorite Brewery:</label><br />
                    <input type="text" id="favBrewery" name="favBrewery"></input><br />
                    <h4>Must be 21+ | Age Verification</h4>
                    <section>
                        <label htmlFor="month">Month:</label>
                        <br />
                        <input type="text" id="month" name="month" placeholder="00"></input>
                        <br />
                        <label htmlFor="day">Day:</label>
                        <br />
                        <input type="text" id="day" name="day" placeholder="00"></input>
                        <br />
                        <label htmlFor="year">Year:</label>
                        <br />
                        <input type="text" id="year" name="year" placeholder="0000"></input>
                    </section><br />
                    <button onClick={handleClick} type="submit" id="createProfileButton">Create Profile</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default CreateProfile;