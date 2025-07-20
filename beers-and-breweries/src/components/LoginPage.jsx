import { useNavigate } from "react-router";
import { useState } from "react";
import Footer from "../common/Footer";
import "./LoginPage.css";

const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleClickLogin(e) {
        e.preventDefault();
        if (username === "nfox1190" && password === "Apollo11") {
        navigate("/main");
        }
    }

    function handleClickSignUp(e) {
        e.preventDefault();
        navigate("/createProfile")
    }

    return (
        <div className="loginPage">
            <h1 id="loginTitle">Drink Local &#127866;</h1>
            <form id="loginForm">
                <label htmlFor="username">Username: </label><br />
                <input type="text" id="username" name="username" value={username} onChange={(e => setUsername(e.target.value))}></input><br /><br />
                <label htmlFor="password">Password: </label><br />
                <input type="password" id="password" name="password" value={password} onChange={(e => setPassword(e.target.value))} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"></input><br /><br />
                <button type="submit" className="loginPageButton" onClick={handleClickLogin}>Login</button>
                <button type="submit" className="loginPageButton" id="signUpButton" onClick={handleClickSignUp}>Sign Up</button>
            </form><br />
            <Footer />
        </div>
    );
}

export default LoginPage;