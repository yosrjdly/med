// 

import React from "react";
import { Link, useNavigate } from "react-router-dom";
const NavBar = ({ user }) => {
  const navigate = useNavigate();

  const logout = () => {
    user.isConnected = false;
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="flex items-center text-2xl font-bold text-white" to="/">
        MedConnect
        </Link>
        <nav className="space-x-4">
            <a href="#features" className="text-lg text-white">Features</a>
            <a href="#benefits" className="text-lg text-white">Benefits</a>
          </nav>
        <div className="flex items-center space-x-4">
          {user.role === "ADMIN" && (
            <Link className="text-lg text-white" to="/admin">Admin</Link>
          )}
          {!user.isConnected ? (
            <>
              <Link className="text-lg text-white hover:text-blue-800" to="/login">Login</Link>
              <Link className="text-lg text-white hover:text-blue-800" to="/register">Register</Link>
            </>
          ) : (
            <button className="text-lg text-white" onClick={logout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

