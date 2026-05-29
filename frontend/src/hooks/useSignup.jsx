import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../contexts/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  //const apiBase = "http://localhost:5000/api/auth";
  const { setAuthUser } = useAuthContext();

  const signup = async ( {fullName, username, password, confirmPassword} ) => {
    const success = handleInputErrors( {fullName, username, password, confirmPassword} );
    if(!success){
        return;
    }

    setLoading(true);
    try{
        const res = await fetch (`/api/auth/signup`, {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            credentials: "include",
            body: JSON.stringify( {fullName, username, password, confirmPassword} )
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
   }

   return { loading, signup };

}

export default useSignup;

const handleInputErrors = ({fullName, username, password, confirmPassword}) => {

    if(!fullName || !username || !password || !confirmPassword){
        toast.error("Please fill in ll the fields");
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Incorrect password");
        return false;
    }
    if(password.length < 6){
        toast.error("Password too short");
        return false;
    }
    return true;
};