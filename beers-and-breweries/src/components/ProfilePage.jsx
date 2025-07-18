import Footer from "../common/Footer";
import Header from "../common/Header";
import NavigationMenu from "../common/NavigationMenu";
import "./ProfilePage.css";

const ProfilePage = () => {
    return (
        <div>
            <Header />
            <NavigationMenu />
            <h1>Profile</h1>
            <div className="layout">

            </div>
            <Footer />
        </div>
    );
}

export default ProfilePage;