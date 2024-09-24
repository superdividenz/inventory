import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await onLogout();
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-blue-200">
            LODI Chair
          </NavLink>
        </div>
        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col items-center">
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
        {/* Navigation */}
        <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex md:space-x-4 justify-between items-center w-full md:w-auto">
            {/* Always show Home button */}
            <li className="flex-1 text-center">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive 
                    ? "bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200" 
                    : "bg-transparent text-white p-2 rounded hover:bg-blue-700 transition duration-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex-1 text-center">
              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  isActive 
                    ? "bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200" 
                    : "bg-transparent text-white p-2 rounded hover:bg-blue-700 transition duration-200"
                }
              >
                Inventory
              </NavLink>
            </li>
            {user ? (
              <li className="flex-1 text-center">
                <button
                  onClick={handleLogout}
                  className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200 w-full"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="flex-1 text-center">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive 
                      ? "bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200" 
                      : "bg-transparent text-white p-2 rounded hover:bg-blue-700 transition duration-200"
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;