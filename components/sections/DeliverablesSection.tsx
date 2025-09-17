
import React from 'react';
import Section from '../Section';
import Card from '../Card';
import { deliverables } from '../../constants';

const DeliverablesSection: React.FC = () => {
    return (
        <Section title="What You Receive (1,200–1,500 words)" sectionNumber={3}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deliverables.map(item => (
                    <Card key={item.title} className="border-t-4 border-[#006747] shadow-sm">
                        <h3 className="text-[#006747] mb-2.5 font-bold">{item.title}</h3>
                        <p className="text-slate-800">{item.desc}</p>
                    </Card>
                ))}
            </div>
            
            <div className="text-center mt-8 p-5 bg-white rounded-xl border-2 border-[#006747] shadow-sm">
                <h3 className="text-[#006747] font-bold text-xl">One Round of Edits FREE</h3>
                <p className="text-slate-800">Complimentary revision for all plans</p>
            </div>
        </Section>
    );
};

export default DeliverablesSection;
