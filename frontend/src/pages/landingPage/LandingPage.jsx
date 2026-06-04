import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiAccountPinBoxFill } from "react-icons/ri";

const LandingPage = () => {

    const navigate = useNavigate();

  return (
    <div className="mx-auto min-w-96">
        <div className="w-full  p-6 flex flex-col gap-y-5 items-center justify-center rounded-lg shadow-md bg-[#18181b]">

            <div className="flex items-center bg-accent-content px-4 py-2 rounded-md mb-10">
                <RiAccountPinBoxFill className="size-15 text-accent"/>
                <p className="text-2xl">The Chat App</p>
            </div>

            <button className="btn w-full text-lg btn-sm h-10 bg-[#002c22] hover:bg-[#68edba] hover:text-gray-900"
                onClick = { ()=> navigate( "/login" ) }
            >Login</button>

            <div className="w-full flex justify-center items-center gap-x-3">
                <div className="w-1/4 h-0.5 bg-amber-50/50"/>
                <p className="text-center text-xl">or</p>
                <div className="w-1/4 h-0.5 bg-amber-50/50"/>
            </div>
            
            
            <button className="btn w-full text-lg btn-sm h-10 bg-[#002c22] hover:bg-[#68edba] hover:text-gray-900"
                onClick = { ()=> navigate("/signup") }
            >Signup</button>
        </div>
    </div>
  )
}

export default LandingPage;