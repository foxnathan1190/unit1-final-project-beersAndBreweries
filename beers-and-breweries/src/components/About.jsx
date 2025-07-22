import Footer from "../common/Footer";
import Header from "../common/Header";
import "./About.css";
import NavigationMenu from "../common/NavigationMenu";
import peopleAtBrewery from "../images/peopleAtBrewery.jpg";

const About = ( {isLoggedIn }) => {

    return (
        <div >
            <Header />
            <NavigationMenu isLoggedIn={isLoggedIn} />
            <section className="aboutPage">
                <h1 id="aboutHeader">About Us</h1>
                <img src={peopleAtBrewery} alt="People at a Brewery" />
                <p>
                    We here at Drink Local have always wanted to be able to travel and drink local. We are a small midwestern operation from St. Louis Missouri and want you to be able to experience breweries of every kind no matter where you are going.<br /><br />Another great use of our search is to look up that brewery for that beer you tried once and you want to go there someday and try it from the source.
                </p>
            </section>
            <Footer />
        </div>
    );
}

export default About;