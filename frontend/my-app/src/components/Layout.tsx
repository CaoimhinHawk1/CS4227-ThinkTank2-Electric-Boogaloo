import React from 'react';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="py-8">
                {children}
            </main>
        </div>
    );
};

export default Layout;