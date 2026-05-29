import React, { useState } from 'react'
import { useAuthContext } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
  const apiBase = "http://localhost:5000/api/auth";
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try{
        const res = await fetch(`/api/auth/logout`, {
            method: "POST",
            headers: {"Context-Type": "application/json"},
            credentials: "include"
        });
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.removeItem("chat-user");
        setAuthUser(null);
    }
    catch(error){
        toast.error(error.message);
    }
    finally{
        setLoading(false);
    }
  };

  return {loading, logout};
}

export default useLogout;