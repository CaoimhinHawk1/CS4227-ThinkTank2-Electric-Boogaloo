import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">ThinkTank Research Dashboard</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-blue-200 transition duration-200">Home</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="hover:text-blue-200 transition duration-200">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-blue-200 transition duration-200">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;