import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
        navigate("/dashboard");
    };

    return (
        <div className=" ">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input className="w-48 h-9 border px-2 " type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className="w-48 h-9 border px-2 " type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="bg-blue-700 text-white px-8 py-2 font-bold rounded-sm " type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

