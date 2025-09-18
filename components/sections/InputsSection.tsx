
import React from 'react';
import Section from '../Section';
import { neededInputs } from '../../constants';

const InputsSection: React.FC = () => {
    return (
        <Section title="Inputs Needed From You" sectionNumber={4}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {neededInputs.map((item) =>(
                    <div key={item.title} className="bg-sky-100 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 border-[#006747]">
                        <h3 className="text-[#1e1e1e] mb-4 font-bold">{item.title}</h3>
                        <p className="text-slate-800">{item.desc}</p>
                    </div>
                 ))}
            </div>
        </Section>
    );
};

export default InputsSection;