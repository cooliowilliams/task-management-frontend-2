import React, { createContext, useState, useEffect } from "react";  // ✅ Import React explicitly

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const storedUser = localStorage.getItem("user");
    //     if (storedUser) setUser(JSON.parse(storedUser));
    // }, []);

    // const login = async (email, password) => {
    //     const response = await fetch("http://localhost:5001/api/auth/login", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ email, password }),
    //     });

    //     const data = await response.json();

    //     if (response.ok) {
    //         setUser(data.user);
    //         localStorage.setItem("user", JSON.stringify(data.user));
    //     } else {
    //         alert(data.message || "Login failed");
    //     }
    // };

    // const logout = () => {
    //     setUser(null);
    //     localStorage.removeItem("user");
    // };
    const [user, setUser] = useState({
        name: "John Doe",
        role: "Intern", // Change this to "Intern" to test the Intern Dashboard
    });

    // Mock login function (not actually doing authentication)
    const login = (email, password) => {
        console.log("Mock login:", email);
        setUser({ name: "John Doe", role: "Admin" }); // Change to "Intern" if needed
    };

    // Mock logout function
    const logout = () => {
        console.log("User logged out");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

