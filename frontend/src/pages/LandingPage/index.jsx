import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Title from '../../components/Title';
import Button from '../../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/initSupabase';


const isDevelopment = false;

var backendUrl = "http://localhost:8000";

if (isDevelopment) {
	backendUrl = "http://localhost:8000"
}


const LandingPage = () => {
	console.log("LandingPage rendered");

	const navigate = useNavigate();
	const { session, user, setUser, login, logout } = useAuth();
	const { auth } = supabase;

	// const handleLogin = async (event) => {
	// 	console.log("handleLogin called");

	// 	// TODO: Try to log the user on via GitHub and find a way to set the user in the context
	// 	try {
	// 		await login();
	// 	} catch (error) {
	// 		console.log("Error logging in: ", error);
	// 	}

	// };

	async function handleLogin() {
		console.log("handleLogin called");

		const { error } = await login();

		if (error) {
			console.log("Error logging in: ", error);
		} else {
			console.log("User logged in");
			navigate('/dashboard');
		}
	}

	// useEffect(() => {
	// 	// Check if the user is logged in. If so, navigate to the dashboard
	// 	console.log("useEffect called");

	// 	if (session && user) {
	// 		navigate('/dashboard');
	// 	} else {
	// 		console.log("No user logged in");
	// 		console.log("session: ", session);
	// 		console.log("user: ", user);
	// 	}
	// }, [session, user]);

	return (
		<div className="grid grid-cols-2 p-4 h-screen bg-gradient-to-b from-sky-500 to-sky-800">
			<div className="flex flex-col justify-center">
				<Title title="reposurrection." subtitle="breathe a second life into your dead repos." className="px-12 text-white" />
			</div>
			<div className="flex flex-col h-full w-full justify-center items-center">
				<Button text="sign in with GitHub" onClick={login} className="w-1/2 bg-sky-800 hover:bg-sky-500 text-white text-2xl font-medium py-7 px-6 rounded rounded-xl mx-12" />
			</div>
		</div>
	);
};

export default LandingPage;