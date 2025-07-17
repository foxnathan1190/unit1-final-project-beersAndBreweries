import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router";
import LoginPage from './components/LoginPage';
import CreateProfile from './components/CreateProfile';
import About from './components/About';
import ProfilePage from './components/ProfilePage';
import SavedList from './components/SavedList';
import Search from './components/Search';
import Main from './components/Main';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/createProfile" element={<CreateProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/profilePage" element={<ProfilePage />} />
          <Route path="/savedList" element={<SavedList />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
