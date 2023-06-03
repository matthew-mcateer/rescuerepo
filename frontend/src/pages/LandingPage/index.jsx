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
	const { signInWithGithub, user, setUser } = useAuth();
	const { auth } = supabase;

	const handleLogin = async (event) => {

		event.preventDefault();

		// console.log(event);

		try {

			// Login to GitHub
			console.log("Logging in to GitHub");
			setUser(1);
			const { user, session, error } = await signInWithGithub();

			console.log("User is: ", user);
			console.log("Session is: ", session);
			console.log("Error is: ", error);


		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// Check for a valid token in storage
		const token = localStorage.getItem('sb-jkohjbndimwjcyobeuaf-auth-token');

		if (token) {
			// If there is a token, set the user
			// try {
			// 	const { user } = supabase.auth.api.getUser(token);
			// 	setUser(user);
			// }
			console.log("Token is: ", token);

			// Parse the token to a JSON object
			const tokenObject = JSON.parse(token);

			console.log("Token object is: ", tokenObject);
		}
	}, []);


	// useEffect(() => {
	// 	const { data: authListener } = auth.onAuthStateChange((event, session) => {
	// 		console.log("inside auth listener");
	// 		if (event === "SIGNED_IN" || event === "INITIAL_SESSION") {
	// 			const { user } = session || {};
	// 			setUser(user);
	// 			// navigate("/dashboard");
	// 		} else {
	// 			setUser(null);
	// 		}
	// 	});

	// 	return () => {
	// 		authListener.subscription.unsubscribe();
	// 	};
	// }, []);

	// useEffect(() => {
	// 	console.log("User is: ", user);
	// 	if (user) {
	// 		navigate("/dashboard");
	// 	} else {
	// 		console.log("User is null");
	// 	}
	// }, [user]);

	return (
		<div className="grid grid-cols-2 p-4 h-screen bg-gradient-to-b from-sky-500 to-sky-800">
			<div className="flex flex-col justify-center">
				<Title title="reposurrection." subtitle="breathe a second life into your dead repos." className="px-12 text-white" />
			</div>
			<div className="flex flex-col h-full w-full justify-center items-center">
				<Button text="sign in with GitHub" onClick={handleLogin} className="w-1/2 bg-sky-800 hover:bg-sky-500 text-white text-2xl font-medium py-7 px-6 rounded rounded-xl mx-12" />
			</div>
		</div>
	);
};

export default LandingPage;