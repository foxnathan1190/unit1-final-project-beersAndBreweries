import { useState, useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import NavigationMenu from "../common/NavigationMenu";
import "./ProfilePage.css";

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
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
                {profile ? (
                    <>
                        <h1>Profile Details</h1>
                        <p>Name: {profile.fName} {profile.lName}</p>
                        <p>Username: {profile.userName}</p>
                        <p>Email: {profile.email}</p>
                        <p>Password: {profile.password}</p>
                        <p>Favorite Brewery: {profile.favBrewery}</p>
                        <p>Birthday: {profile.month}/{profile.day}/{profile.year}</p>
                    </>
                ) : (
                    <p>No profile data found.</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default ProfilePage;