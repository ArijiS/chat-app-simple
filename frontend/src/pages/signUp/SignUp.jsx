import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const { loading, signup } = useSignup();
  const [inputs, setInputs] = useState(
    {
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-base-300">
        <h1 className="text-3xl font-semibold text-center text-base-content">Sign-up</h1>
      
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
        <div>
            <label className="label p-2">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input type="text" placeholder="Enter Full Name" className="w-full h-10 input focus:border-base-content focus:outline-0"
            value={inputs.fullName} onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}
            />
          </div>

        <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full h-10 input focus:border-base-content focus:outline-0"
            value={inputs.username} onChange={(e)=> setInputs({...inputs, username: e.target.value})}
            />
        </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input focus:border-base-content focus:outline-0"
            value={inputs.password} onChange={e => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input focus:border-base-content focus:outline-0"
            value={inputs.confirmPassword} onChange={e => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <Link to="/login" className="text-sm hover:text-info hover:underline">
          <p>Already have an account?</p>
          </Link>

          <div>
            <button className="btn w-full btn-sm mt-4 h-10 bg-accent-content" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
      </form>

      </div>
    </div>
  )
}

export default SignUp;