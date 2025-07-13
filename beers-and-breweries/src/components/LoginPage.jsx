const LoginPage = () => {
    return (
        <div>
            <h1>Drink Local</h1>
            <h3>Login</h3>
            <form>
                <label htmlFor="username">Username: </label><br/>
                <input type="text" id="username" name="username"></input><br/>
                <label htmlFor="password">Password: </label><br/>
                <input type="password" id="password" name="password"></input><br/>
                <button type="submit">Submit</button>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default LoginPage;