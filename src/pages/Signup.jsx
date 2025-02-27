import React, { useContext } from "react"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [role, setRole] = useState("Intern"); // Default to Intern
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        
        const userData = { name, department, role, email, password };
        
        try {
            const response = await fetch("http://localhost:5001/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Signup successful!");
                navigate("/login");
            } else {
                alert(data.message || "Signup failed");
            }
        } catch (error) {
            console.error("Signup error:", error);
        }
    };

    return (
        <div className="flex-col flex gap-4 pl-[229px] pt-10 ">
            <h2 className="font-semibold text-gray-800 text-[19px]  ">Sign Up</h2>
            <form className="self-center flex-col flex gap-8 mt-8 " onSubmit={handleSignup}>
                <input className="w-48 h-9 border px-2 " type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="w-48 h-9 border px-2 " type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />

                <select className="w-48 h-9 border px-2 " value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="Intern">Intern</option>
                </select>

                <input className="w-48 h-9 border px-2 " type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className="w-48 h-9 border px-2 " type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="bg-blue-700 text-white px-8 py-2 font-bold rounded-sm " type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
