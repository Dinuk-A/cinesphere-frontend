import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">
                <Link to="/home">MovieHub</Link>
            </div>
            <div className="flex-grow mx-4">
                <input
                    type="text"
                    placeholder="Search movies, series, or profiles..."
                    className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray400"
                />
            </div>
            <div className="flex items-center">
                <Link to="/profile" className="text-sm ml-4">Profile</Link>
            </div>
        </header>
    );
};
export default Header;
