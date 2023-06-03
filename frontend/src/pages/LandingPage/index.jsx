import React, {  } from 'react';
import Title from '../../components/Title';
import Button from '../../components/PrimaryButton';
import { supabase } from '../../lib/initSupabase';


const isDevelopment = false;

var backendUrl = "http://localhost:8000";

if (isDevelopment) {
	backendUrl = "http://localhost:8000"
}


const LandingPage = () => {
	console.log("LandingPage rendered");

	async function handleLogin() {
		// TODO: Login via GitHub
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'github',
		});

		if (error) {
			console.log("Error logging in");
			throw error;
		} else {
			console.log("Logged in");
			localStorage.setItem("isLoggedIn", "true");
		}
	}

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