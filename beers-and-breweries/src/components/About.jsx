import Footer from "../common/Footer";
import Header from "../common/Header";
import "./About.css";
import NavigationMenu from "../common/NavigationMenu";
import peopleAtBrewery from "../images/peopleAtBrewery.jpg";

const About = ({isLoggedIn }) => {

    return (
        <div >
            <Header />
            <NavigationMenu isLoggedIn={isLoggedIn} />
            <section className="aboutPage">
                <h1 id="aboutHeader">About Us</h1>
                <img src={peopleAtBrewery} alt="People at a Brewery" />
                <p>
                    We here at Drink Local have always wanted to be able to travel and simply drink local. We are a small midwestern operation from St. Louis Missouri and want you to be able to experience breweries of every kind no matter where you are going.<br /><br /> With our search feature you can enter the city you are in or travleing to and it will provide you with a list of all breweries in that city, along with their website. We want you to be able to experience local breweries and not be worried about how to find them. <br /><br />Another great use of our search is to find out where that brewery is that makes the beer you found at the local grocery store or maybe that beer you tried at dinner once. You can enter the brewer from the label and get more imformation on them.<br /><br />We also want you to be safe and stick around with out website, so we ask that you make a profile and introduce yourself to use. We want you to be of age and also let us know your favorite brewery. Hopefully, in the future you'll be able to save breweries to your profile that you've been to our want to try. <br /><br />Until then our search awaits that next trip where you choose to Drink Local!
                </p>
            </section>
            <Footer />
        </div>
    );
}

export default About;