import { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import NavigationMenu from "../common/NavigationMenu";

const ProfilePage = ({ isLoggedIn }) => {

    if (isLoggedIn) {
        return (
            <div>
                <Header />
                <NavigationMenu isLoggedIn={isLoggedIn} />
                <div className="layout">
                    <h1>Profile Details</h1>
                    <p>Name: Nathan Fox</p>
                    <p>Username: Nfox1190</p>
                    <p>Email: foxnathan1190@gmail.com</p>
                    <p>Password: Apollo11</p>
                    <p>Favorite Brewery: Urban Chestnut Brewing</p>
                    <p>Birthday: 11/19/1990</p>
                </div>
                <Footer />
            </div>
        );
    } else {

        const [profile, setProfile] = useState(null);

        useEffect(() => {    // This pulls the data from local storage for the profil to be built below.
            const storedProfile = localStorage.getItem('userProfile');
            if (storedProfile) {
                setProfile(JSON.parse(storedProfile));
            }
        }, []);

        return (
            <div>
                <Header />
                <NavigationMenu />
                <div className="layout">
                    {profile ? (              // This ternary creates the profile if theres data.
                        <>
                            <h1>Profile Details</h1>
                            <p>Name: {profile.fName} {profile.lName}</p>
                            <p>Username: {profile.username}</p>
                            <p>Email: {profile.email}</p>
                            <p>Password: {profile.password}</p>
                            <p>Favorite Brewery: {profile.favBrewery}</p>
                            <p>Birthday: {profile.month}/{profile.day}/{profile.year}</p>
                        </>
                    ) : (
                        <p>No Profile Found</p>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}
export default ProfilePage;