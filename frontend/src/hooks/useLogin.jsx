import React, { useState } from 'react';
import toast from "react-hot-toast";
import { useAuthContext } from '../contexts/AuthContext';

const useLogin = () => {
    const { setAuthUser } = useAuthContext();
    const apiBase = "http://localhost:5000/api/auth";
    const [loading, setLoading] = useState(false);
    const login = async (username, password) => {
        const success = handleLoginInputErrors (username, password);
        if(!success){
            return;
        }
        setLoading(true);
        try{
            const res = await fetch(`${apiBase}/login`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify( {username, password} ),
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);          
        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    };
  return {loading, login};
}

export default useLogin;

const handleLoginInputErrors = (username, password) => {

    if(!username || !password){
        toast.error("Please fill in ll the fields");
        return false;
    }
    
    return true;
};