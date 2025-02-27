import React, { useContext } from "react"; // ✅ Import React explicitly
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthContext, { AuthProvider } from "./Context/AuthContext";
import Sidebar from "./components/sidebar";
import TopBar from "./components/topbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import InternDashboard from "./pages/InternDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./styles/styles.css"; 

function App() {
    const { user } = useContext(AuthContext);

    return (
        <AuthProvider>
            <Router>
                <TopBar />
                <div className="flex  overflow-y-hidden  ">
                    {user && <Sidebar />}
                    <div className=" ">
                        <Routes>
                            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/dashboard" element={user?.role === "Admin" ? <Navigate to="/admin" /> : <Navigate to="/intern" />} />
                            <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} allowedRoles={["Admin"]} />} />
                            <Route path="/intern" element={<ProtectedRoute element={<InternDashboard />} allowedRoles={["Intern"]} />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
