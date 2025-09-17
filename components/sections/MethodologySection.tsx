
import React from 'react';
import Section from '../Section';
import { methodologySteps } from '../../constants';

const MethodologySection: React.FC = () => {
    return (
        <Section title="Methodology (10-Step Workflow)" sectionNumber={2}>
            <div className="relative pl-16">
                <div className="absolute top-5 bottom-5 left-5 w-0.5 bg-[#006747]/30" aria-hidden="true"></div>
                <div className="space-y-8">
                    {methodologySteps.map(step => (
                        <div key={step.num} className="relative">
                            <div className="absolute -left-16 top-1/2 -translate-y-1/2 bg-[#006747] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">{step.num}</div>
                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="text-[#1e1e1e] mb-1 text-lg font-semibold">{step.title}</h3>
                                <p className="text-slate-800">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default MethodologySection;
