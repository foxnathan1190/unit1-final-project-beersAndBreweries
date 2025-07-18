import Footer from "../common/Footer";
import Header from "../common/Header";
import "./About.css";
import NavigationMenu from "../common/NavigationMenu";
import peopleAtBrewery from "../images/peopleAtBrewery.jpg";

const About = () => {

    return (
        <div >
            <Header />
            <NavigationMenu />
            <section className="aboutPage">
                <h1 id="aboutHeader">About Us</h1>
                <img src={peopleAtBrewery} alt="People at a Brewery" />
                <p>
                    We here at Drink Local have always wanted to be able to travel and drink local. We are a small midwestern operation from St. Louis Missouri.
                </p>
            </section>
            <Footer />
        </div>
    );
}

export default About;