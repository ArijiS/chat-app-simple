
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from './contexts/AuthContext';

import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Home from './pages/home/Home';

import Background from './components/backgrounds/Background';

function App() {
  const { authUser } = useAuthContext();

  return (
      <Background>
        <div className="p-4 flex items-center justify-center h-screen">
          <Routes>
            <Route path="/" element={ authUser ? <Home /> : <Navigate to="/login"/>}/>
            <Route path="/signup" element={ authUser ? <Navigate to="/" /> : <SignUp />}/>
            <Route path="/login" element={ authUser ? <Navigate to="/"/> : <Login />}/>
          </Routes>
          <Toaster />
    </div>
      </Background>
      
    
  )
}

export default App;
