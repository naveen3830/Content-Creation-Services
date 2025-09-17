
import React from 'react';
import type { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ sectionNumber, title, children, className = '', titleClassName = '' }) => {
    const bgColor = sectionNumber % 2 === 0 ? 'bg-[#f5f5f5]' : 'bg-white';
    
    return (
        <section className={`mb-12 p-4 md:p-8 rounded-2xl shadow-md ${bgColor} ${className}`}>
            <h2 className={`text-[#1e1e1e] text-3xl font-bold mb-8 border-b-2 border-slate-200 pb-4 ${titleClassName}`}>
                {sectionNumber}. {title}
            </h2>
            <div className="mt-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
