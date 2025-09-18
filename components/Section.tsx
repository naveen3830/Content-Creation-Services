import React from 'react';
import type { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ sectionNumber, title, children, className = '', titleClassName = '' }) => {
    const bgColor = sectionNumber % 2 === 0 ? 'bg-green-50/30' : 'bg-transparent';
    
    return (
        <section className={`mb-12 p-4 md:p-8 rounded-2xl ${bgColor} ${className}`}>
            <h2 className={`text-[#02AAF7] text-3xl font-bold mb-8 border-b-2 border-slate-200 pb-4 ${titleClassName}`}>
                <span className="text-[#02AAF7]">{sectionNumber}.</span> {title}
            </h2>
            <div className="mt-8">
                {children}
            </div>
        </section>
    );
};

export default Section;