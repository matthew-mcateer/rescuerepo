import React, { useEffect, useState } from 'react';
import Search from '../../components/Search';
import axios from 'axios';


const isDevelopment = false;

var backendUrl = "http://localhost:8000";

if (isDevelopment) {
  backendUrl = "http://localhost:8000";
}


const DashboardPage = () => {
  // const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Get the supabase token from storage
    setTimeout(() => {
      const token = localStorage.getItem('sb-jkohjbndimwjcyobeuaf-auth-token');

      // Parse the token to a JSON object
      const data = JSON.parse(token);

      // Fetch the user from the data
      const dataUser = data.user;
      setUser(dataUser);

      // Fetch the access token from the data
      const dataAccessToken = data.access_token;
      setAccessToken(dataAccessToken);

      // Fetch the email from the data
      const dataEmail = dataUser.email;
      setEmail(dataEmail);
    }, 1000);
  }, []);

  const onSearch = (value) => {
    // Send the request to the "/create-dev-environment" endpoint
    axios.post(backendUrl + '/create-dev-environment', {
      "githubRepoUrl": value,
      "githubAccessToken": accessToken,
      "email": email
    }).then((response) => {

      // Check if the response is successful
      if (response.request.code === 200) {
        // Alert the user they will be notified when the codespace is ready
        alert("You will be notified when your codespace is ready!");
      } else {
        // Alert the user that something went wrong
        alert("Something went wrong!");
      }

    }).catch((error) => {
      alert("Something went wrong!");
    });
  };

  return (
    <div className="flex flex-col p-4 h-screen bg-gradient-to-b from-sky-500 to-sky-800 justify-center items-center">
      <div className="flex flex-col justify-center">
        <h1 className="px-12 py-20 text-white text-center font-sans font-medium text-3xl">
          Welcome back, {user ? user.user_metadata.name : "..."}!
        </h1>
      </div>
      <div className="flex flex-col w-1/3 justify-center items-center">
        <Search onSearch={onSearch} />
        <h2 className="px-12 py-20 text-white text-center font-sans font-thin text-2xl">
          To resurrect an abandoned codespace, just enter a GitHub repository.
        </h2>
      </div>
    </div>
  );
};

export default DashboardPage;