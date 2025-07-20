import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "./CreateProfile.css";

const CreateProfile = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [favBrewery, setFavBrewery] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");

    const navigate = useNavigate();

    const passwordValidation = ({ password }) => {
        let isValid = false;
        let error = "";

        while (!isValid) {

            if (password.length < 8) {
                error = ('Password must be at least 8 characters long.');
            } else {
                let hasUppercase = false;
                let hasNumber = false;

                for (let char of password) {
                    if (char >= 'A' && char <= 'Z') {
                        hasUppercase = true;
                    } else if (char >= '0' && char <= '9') {
                        hasNumber = true;
                    }
                }

                if (!hasUppercase) {
                    error = ('Password must contain at least one uppercase letter.');
                } else if (!hasNumber) {
                    error = ('Password must contain at least one number.');
                } else {
                    isValid = true;
                }
            }
        }
    }

    function handleCreateProfile(e) {
        e.preventDefault();
        passwordValidation();
        alert("Profile Created");
        navigate("/main");
    }

    useEffect(() => {
        const profileData = { fName, lName, username, email, password, favBrewery, month, day, year };
        localStorage.setItem('userProfile', JSON.stringify(profileData));
    }, [fName, lName, username, email, password, favBrewery, month, day, year]);

    return (
        <div>
            <Header />
            <section className="createProfile">
                <h2>Create Profile</h2>
                <form>
                    <label htmlFor="fName">First Name:</label><br />
                    <input type="text" id="fName" name="fName" value={fName} onChange={(e) => setFName(e.target.value)} required></input><br />
                    <label htmlFor="lName">Last Name:</label><br />
                    <input type="text" id="lName" name="lName" value={lName} onChange={(e) => setLName(e.target.value)} required></input><br />
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required></input><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={(e) => setPassword(e.target.value)} required></input><br />
                    <label htmlFor="faveBrewery">Favorite Brewery:</label><br />
                    <input type="text" id="favBrewery" name="favBrewery" value={favBrewery} onChange={(e) => setFavBrewery(e.target.value)}></input><br />
                    <h4>Must be 21+ | Age Verification</h4>
                    <section>
                        <label htmlFor="month">Month:</label>
                        <br />
                        <input type="text" id="month" name="month" placeholder="00" value={month} onChange={(e) => setMonth(e.target.value)} required></input>
                        <br />
                        <label htmlFor="day">Day:</label>
                        <br />
                        <input type="text" id="day" name="day" placeholder="00" value={day} onChange={(e) => setDay(e.target.value)} required></input>
                        <br />
                        <label htmlFor="year">Year:</label>
                        <br />
                        <input type="text" id="year" name="year" placeholder="0000" value={year} onChange={(e) => setYear(e.target.value)} required></input>
                    </section><br />
                    <button onClick={handleCreateProfile} type="submit" id="createProfileButton">Create Profile</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}

export default CreateProfile;