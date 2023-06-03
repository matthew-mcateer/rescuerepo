import React, { useEffect, useState } from 'react';
import Search from '../../components/Search';


const DashboardPage = () => {
  // const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the supabase token from storage
    setTimeout(() => {
      const token = localStorage.getItem('sb-jkohjbndimwjcyobeuaf-auth-token');

      // Parse the token to a JSON object
      const data = JSON.parse(token);

      // Fetch the user from the data
      const dataUser = data.user;
      setUser(dataUser);
    }, 1000);
  }, []);

  const onSearch = (value) => {
    // TODO: Implement search functionality.
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