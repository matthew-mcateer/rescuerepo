import React, { useEffect } from 'react';
import Title from '../../components/Title';
import Button from '../../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import DropdownSearch from '../../components/DropdownSearch';
import { useAuth } from '../../contexts/AuthContext';
import Search from '../../components/Search';


const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, setUser, signOut } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  if (!user) {
    // Come up with a nicer loading page that aligns with the theme
    return <div>Loading...</div>;
  } else {
    return (
        <div className="flex flex-col p-4 h-screen bg-gradient-to-b from-sky-500 to-sky-800 justify-center items-center">
          {user && (
            <div className="flex flex-col justify-center">
              <h1 className="px-12 py-20 text-white text-center font-sans font-medium text-3xl">
                Welcome back, {user["user_metadata"]["preferred_username"]}!
              </h1>
            </div>
          )}
          <div className="flex flex-col w-1/3 justify-center items-center">
            {/* Insert the dropdown component here */}
            <Search />
            <h2 className="px-12 py-20 text-white text-center font-sans font-thin text-2xl">
              To resurrect an abandoned codespace, just enter a GitHub repository.
            </h2>
          </div>
        </div>
      );
  }
};

export default DashboardPage;