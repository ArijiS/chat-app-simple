import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
        <div className="w-full p-6 rounded-lg shadow-md bg-base-300">
            <h1 className="text-3xl font-semibold text-center text-base-content">Login</h1>

        <form className="flex flex-col gap-y-5" onSubmit={handleLogin}>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full h-10 input focus:border-base-content focus:outline-0"
            value={username} onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input focus:border-base-content focus:outline-0"
            value={password} onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Link to="/signup" className="text-sm hover:text-info hover:underline">
            <p>Don't have an account?</p>
          </Link>

          <div>
            <button className="btn w-full btn-sm mt-4 h-10 bg-accent-content"
            disabled={loading}
            >{loading? <span className="loading loading-spinner"></span> : "Login"}</button>
          </div>

        </form>

        </div>
    </div>
  )
}

export default Login;