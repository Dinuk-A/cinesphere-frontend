import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p className="mb-2">&copy; {new Date().getFullYear()} MovieHub. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-400 hover:underline">About Us</a>
                <a href="#" className="text-blue-400 hover:underline">Contact</a>
                <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>
            </div>
            <div className="mt-4">
                <a href="#" className="inline-block mx-2">
                    <i className="fab fa-facebook-f text-blue-500"></i>
                </a>
                <a href="#" className="inline-block mx-2">
                    <i className="fab fa-twitter text-blue-400"></i>
                </a>
                <a href="#" className="inline-block mx-2">
                    <i className="fab fa-instagram text-pink-500"></i>
                </a>
            </div>
        </footer>
    );
};
export default Footer;
