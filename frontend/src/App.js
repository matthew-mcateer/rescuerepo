import './App.css';
import { createClient } from '@supabase/supabase-js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import { AuthProvider } from './contexts/AuthContext';



const isDevelopment = false;

var backendUrl = "http://localhost:8000";

if (isDevelopment) {
  backendUrl = "http://localhost:8000"
}
// const supabaseUrl = 'https://jkohjbndimwjcyobeuaf.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imprb2hqYm5kaW13amN5b2JldWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyNTcxODIsImV4cCI6MjAwMDgzMzE4Mn0.bICKR1hSTyppYMPx8cEgocdY4IaStBlcIJdlQ1Iymg4'
// const supabase = createClient(supabaseUrl, supabaseKey);


function App() {
  console.log("App.js: App()");
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/#" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;
