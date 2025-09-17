
import React from 'react';
import Section from '../Section';
import Card from '../Card';
import { approachPoints } from '../../constants';

const ApproachSection: React.FC = () => {
    return (
        <Section title="LeadWalnut Approach" sectionNumber={1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {approachPoints.map((point, index) => (
                    <Card key={index} className="bg-[#f5f5f5] border-l-4 border-[#006747]">
                        <h3 className="text-[#1e1e1e] mb-4 text-xl font-bold">{point.title}</h3>
                        {point.subtitle && <h4 className="font-semibold text-[#1e1e1e]">{point.subtitle}</h4>}
                        {typeof point.content === 'string' ? (
                            <p className="mt-2 text-slate-800">{point.content}</p>
                        ) : (
                            point.content
                        )}
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default ApproachSection;
