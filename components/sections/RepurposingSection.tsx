
import React from 'react';
import Section from '../Section';
import Card from '../Card';
import { repurposingServices } from '../../constants';

const RepurposingSection: React.FC = () => {
    return (
        <Section title="Content Repurposing Services" sectionNumber={9}>
            <p className="text-center text-slate-500 mb-8 max-w-3xl mx-auto">(Convert and push highly business relevant articles to other LLM friendly channels and grow your visibility)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {repurposingServices.map(item=>(
                     <Card key={item.title} className="bg-[#f5f5f5] text-center border-t-4 border-[#006747]">
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                        <p className="mt-2 text-slate-800">{item.desc}</p>
                    </Card>
               ))}
            </div>
            
            <p className="text-center mt-8 text-slate-500">LeadWalnut offers comprehensive content repurposing services. Contact us for custom pricing.</p>
        </Section>
    );
};

export default RepurposingSection;
