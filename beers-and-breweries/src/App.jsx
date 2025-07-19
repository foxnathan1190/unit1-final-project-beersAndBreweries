import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { useState } from "react";
import LoginPage from './components/LoginPage';
import CreateProfile from './components/CreateProfile';
import About from './components/About';
import ProfilePage from './components/ProfilePage';
import SavedList from './components/SavedList';
import Search from './components/Search';
import Main from './components/Main';

function App() {

  const [results, setResults] = useState([]);

   const fetchData = async (value) => {
          try {
              const response = await fetch('https://api.openbrewerydb.org/v1/breweries?by_state=colorado&per_page=200',)
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              const data = await response.json();
              const results = data.filter((brewery) => {
                  return value && brewery && (brewery.city && brewery.city.toLowerCase().includes(value.toLowerCase())) || (brewery.name && brewery.name.toLowerCase().includes(value.toLowerCase()));
              })
              setResults(results);
          } catch (error) {
              console.error("Error while fetching:", error);
          } 
      }

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
          <Route path="/search" element={<Search results={results} fetchData={fetchData}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
