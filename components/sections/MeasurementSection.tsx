
import React from 'react';
import Section from '../Section';
import Card from '../Card';
import { measurementItems } from '../../constants';

const MeasurementSection: React.FC = () => {
    return (
        <Section title="Measurement & Iteration" sectionNumber={7}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {measurementItems.map(item => (
                    <Card key={item.title} className="border-t-4 border-[#006747] shadow-sm">
                        <h3 className="text-[#1e1e1e] mb-4 text-lg font-bold">{item.title}</h3>
                        <p>{item.desc}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default MeasurementSection;
