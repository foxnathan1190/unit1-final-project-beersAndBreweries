import { Link } from "react-router";

const About = () => {

    return (
        <div>
            <h1>About Us</h1>
            <Link to="/about"></Link>
            <p>
                We here at Drink Local have always wanted to be able to travel and drink local.
            </p>
        </div>
    );
}

export default About;