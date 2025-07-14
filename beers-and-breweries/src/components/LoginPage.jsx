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
        <div>
            <h1>Drink Local &#127866;</h1>
            <h3>Login</h3>
            <form>
                <label htmlFor="username">Username: </label><br />
                <input type="text" id="username" name="username"></input><br />
                <label htmlFor="password">Password: </label><br />
                <input type="password" id="password" name="password"></input><br />
                <button type="submit" onClick={handleClickLogin}>Login</button>
                <button type="submit" onClick={handleClickSignUp}>Sign Up</button>
            </form><br />
            <footer>&copy;  2025 Copyright | drinklocal.com</footer>
        </div>
    );
}

export default LoginPage;