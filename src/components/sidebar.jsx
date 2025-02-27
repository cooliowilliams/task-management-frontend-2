import React, { useContext } from "react"; 
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Sidebar = () => {
    const { user, logout } = useContext(AuthContext);

    if (!user) return null;

    return (
        <div className="sidebar">
            <h3>Dashboard</h3>
            <nav>
                <ul>
                    {user.role === "Admin" && <li><Link to="/admin">Admin Panel</Link></li>}
                    {user.role === "Intern" && <li><Link to="/intern">Intern Panel</Link></li>}
                </ul>
            </nav>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Sidebar;
