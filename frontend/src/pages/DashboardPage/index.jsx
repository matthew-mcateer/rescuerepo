import React from 'react';
import Title from '../../components/Title';
import Button from '../../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import DropdownSearch from '../../components/DropdownSearch';


const DashboardPage = () => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col p-4 h-screen bg-gradient-to-b from-sky-500 to-sky-800 justify-center items-center">
            <div className="flex flex-col justify-center">
                <h1 className={"px-12 py-20 text-white text-center font-sans font-medium text-3xl"}>
                    Welcome back, {localStorage.getItem('username')}!
                </h1>
            </div>
            <div className="flex flex-col w-1/3 justify-center items-center">

                {/* Insert the dropdown component here */}
                <DropdownSearch />

                <h2 className={"px-12 py-20 text-white text-center font-sans font-thin text-2xl"}>
                    To resurrect an abandoned codespace, just enter a GitHub repository.
                </h2>
            </div>
        </div>
    );
};

export default DashboardPage;