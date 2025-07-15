import { useNavigate } from "react-router";

const LoginPage = () => {

    const navigate = useNavigate();

    function handleClickLogin(e) {
        e.preventDefault();
        navigate("/main")
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
                <input type="text" id="username" name="username"></input><br /><br />
                <label htmlFor="password">Password: </label><br />
                <input type="password" id="password" name="password"></input><br /><br />
                <button type="submit" className="loginButton" onClick={handleClickLogin}>Login</button>
                <button type="submit" className="loginButton" id="signUpButton" onClick={handleClickSignUp}>Sign Up</button>
            </form><br />
            <footer className="footer">&copy;  2025 Copyright | drinklocal.com</footer>
        </div>
    );
}

export default LoginPage;