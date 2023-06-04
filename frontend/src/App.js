import './App.css';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import { useEffect, useState } from 'react';


const isDevelopment = false;

var backendUrl = "http://localhost:8000";

if (isDevelopment) {
  backendUrl = "http://localhost:8000"
}


function App() {
  console.log("App.js: App()");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  useEffect(() => {
    // Check if the user is logged in.
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <DashboardPage />
      ) : (
        <LandingPage />
      )}
    </>
  );
}

export default App;
