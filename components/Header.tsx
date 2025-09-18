
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="p-6 bg-[#f7f8fa] text-slate-800 rounded-2xl mb-10 shadow-sm flex items-center">
            <div className="w-1/4">
                <img src="/LeadWalnut light logo with tagline 3.png" alt="LeadWalnut Logo" className="max-w-[220px]" />
            </div>
            <div className="flex-grow text-center">
                <div className="text-4xl font-bold">Content Creation Services</div>
            </div>
            <div className="w-1/4"></div>
        </header>
    );
};

export default Header;