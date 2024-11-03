import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <nav className="p-2 bg-gray-900 w-full">
            <div className="flex items-center justify-between px-10 py-1">

                {/* Logo */}
                <Link to="/home" className="pt-2">
                    <img src={logo} alt="Logo" className="h-8" />
                </Link>

                {/* Search bar and profile container */}
                <div className="flex items-center justify-end space-x-4 w-full">
                    {/* Search bar */}
                    <input
                        type="text"
                        placeholder="Search Movies..."
                        className="p-1 text-white placeholder-gray-400 bg-gray-800 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-yellow-500"
                    />

                    {/* Profile icon */}
                    <Link to="/profile" className="text-white text-sm hover:text-yellow-500 ml-5">
                        Profile
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default Header;
