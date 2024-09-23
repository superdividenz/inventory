import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-blue-200">
            Inventory App
          </NavLink>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-200" : "hover:text-blue-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  isActive ? "text-blue-200" : "hover:text-blue-200"
                }
              >
                Inventory
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-item"
                className={({ isActive }) =>
                  isActive ? "text-blue-200" : "hover:text-blue-200"
                }
              >
                Add Item
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  isActive ? "text-blue-200" : "hover:text-blue-200"
                }
              >
                Reports
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
