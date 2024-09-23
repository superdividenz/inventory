import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-200">
            Inventory App
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/inventory" className="hover:text-blue-200">
                Inventory
              </Link>
            </li>
            <li>
              <Link to="/add-item" className="hover:text-blue-200">
                Add Item
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-blue-200">
                Reports
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
