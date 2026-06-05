
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from './contexts/AuthContext';

import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Home from './pages/home/Home';
import LandingPage from "./pages/landingPage/LandingPage";

import Background from './components/backgrounds/Background';

function App() {
  const { authUser } = useAuthContext();

  return (
      <Background>
        <div className="flex items-center justify-center h-dvh">
          <Routes>
            <Route path="/landingPage" element={ <LandingPage /> } />
            <Route path="/" element={ authUser ? <Home /> : <Navigate to="/landingPage"/>}/>
            <Route path="/signup" element={ authUser ? <Navigate to="/" /> : <SignUp />}/>
            <Route path="/login" element={ authUser ? <Navigate to="/"/> : <Login />}/>
            
          </Routes>
          <Toaster />
    </div>
      </Background>
      
    
  )
}

export default App;
