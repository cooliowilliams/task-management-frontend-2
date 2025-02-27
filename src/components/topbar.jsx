import React, { useContext } from "react"; // ✅ Explicitly import React
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";


const TopBar = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="topbar">
            <h2>Task Manager</h2>
            <div className="topbar-menu">
                {user ? (
                    <p>Welcome, {user.name}</p>
                ) : (
                    <div className="dropdown">
                        <button className="dropbtn">Account</button>
                        <div className="dropdown-content">
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopBar;

