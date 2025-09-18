

import React from 'react';
import Section from '../Section';
import Card from '../Card';
import { repurposingServices } from '../../constants';

const RepurposingSection: React.FC = () => {
    return (
        <Section title="Content Repurposing Services" sectionNumber={9}>
            <p className="text-center font-bold text-black mb-8 max-w-3xl mx-auto">(Convert and push highly business relevant articles to other LLM friendly channels and grow your visibility)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {repurposingServices.map((item, index) => {
                    const cardClass = index % 2 === 0 
                        ? 'bg-green-50/50 border-green-500' 
                        : 'bg-amber-50/50 border-amber-500';
                    return (
                        <Card key={item.title} className={`text-center border-t-4 ${cardClass}`}>
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                            <p className="mt-2 text-slate-800">{item.desc}</p>
                        </Card>
                    );
                })}
            </div>
            
            <p className="text-center mt-8 font-bold text-black">LeadWalnut offers comprehensive content repurposing services. Contact us for custom pricing.</p>
        </Section>
    );
};

export default RepurposingSection;