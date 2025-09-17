
import React from 'react';

const CtaSection: React.FC = () => {
    return (
        <div className="bg-[#006747] text-white text-center p-12 rounded-2xl mt-10 shadow-xl">
            <h2 className="text-4xl font-bold mb-5">Ready to Create High-Converting Content?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">Transform your content strategy with LeadWalnut's Human-assisted AI approach - where expert humans lead the strategy and AI accelerates execution.</p>

            <div className="flex justify-center gap-5 mb-8 flex-col sm:flex-row">
                <a href="https://www.leadwalnut.com/contact-us" className="bg-white text-[#1e1e1e] py-4 px-8 rounded-lg text-lg font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 hover:-translate-y-1 hover:shadow-lg no-underline inline-block">🚀 Start Your Content Journey</a>
                <a href="https://www.leadwalnut.com/contact-us" className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg text-lg font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-[#006747] hover:-translate-y-1 hover:shadow-lg no-underline inline-block">📞 Schedule Strategy Call</a>
            </div>

            <p className="opacity-80">Visit <a href="https://www.leadwalnut.com" className="font-semibold underline hover:text-white/80">www.leadwalnut.com</a> to explore more.</p>
        </div>
    );
};

export default CtaSection;
