import React from 'react';

const logoSrc = 'LeadWalnut light logo with tagline 3.png';

const Logo: React.FC = () => {
    return (
        <div className="bg-slate-100 py-4 px-8">
            <img src={logoSrc} alt="LeadWalnut Logo" className="h-12" />
        </div>
    );
};

export default Logo;