
import React from 'react';
import Section from '../Section';

const OperatingTermsSection: React.FC = () => {
    return (
        <Section title="Operating Terms" sectionNumber={6}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                    <h3 className="text-[#1e1e1e] mb-4 text-lg font-bold">Minimum Commitment</h3>
                    <p>30 articles minimum engagement</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                    <h3 className="text-[#1e1e1e] mb-4 text-lg font-bold">Delivery Timelines</h3>
                    <p>Can be discussed and agreed based on requirements</p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center"><span className="text-[#006747] text-xl font-bold mr-3">✓</span>Timeline flexibility based on project scope</li>
                        <li className="flex items-center"><span className="text-[#006747] text-xl font-bold mr-3">✓</span>Mutually agreed delivery schedules</li>
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default OperatingTermsSection;
