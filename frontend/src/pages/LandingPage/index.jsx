import React from 'react';
import { createClient } from '@supabase/supabase-js';
import Title from '../../components/Title';
import Button from '../../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';


const isDevelopment = false;

var backendUrl = "http://localhost:8000";

if (isDevelopment) {
  backendUrl = "http://localhost:8000"
}
const supabaseUrl = 'https://jkohjbndimwjcyobeuaf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imprb2hqYm5kaW13amN5b2JldWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNTcxODIsImV4cCI6MjAwMDgzMzE4Mn0.bICKR1hSTyppYMPx8cEgocdY4IaStBlcIJdlQ1Iymg4'
const supabase = createClient(supabaseUrl, supabaseKey)


const LandingPage = () => {

    const navigate = useNavigate();

    const signInWithGithub = async () => {
        // Dummy logic for purposes of building frontend
        navigate('/dashboard');

        
        // Actual logic!
        // const { data, error } = await supabase.auth.signInWithOAuth({
        //     provider: 'github',
        //     options: {
        //         scopes: "codespace,repo",
        //     }
        // })

        // console.log(data);

        // if (error) {
        //     console.log('Error signing in with GitHub:', error.message)
        // }
    }

    return (
        <div className="grid grid-cols-2 p-4 h-screen bg-gradient-to-b from-sky-500 to-sky-800">
            <div className="flex flex-col justify-center">
                <Title title="reposurrection." subtitle="breathe a second life into your dead repos." className="px-12 text-white" />
            </div>
            <div className="flex flex-col h-full w-full justify-center items-center">

                {/* Note: the onClick functionality is the same as the previous GitHub button. */}
                <Button text="sign in with GitHub" onClick={signInWithGithub} className="w-1/2 bg-sky-800 hover:bg-sky-500 text-white text-2xl font-medium py-7 px-6 rounded rounded-xl mx-12" />
            </div>
        </div>
    );
};

export default LandingPage;