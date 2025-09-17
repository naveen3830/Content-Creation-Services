
import React from 'react';
import Section from '../Section';
import Card from '../Card';
import { successStories, clients } from '../../constants';

const SuccessStoriesSection: React.FC = () => {
    return (
        <Section title="Our Content Creation Success Stories" sectionNumber={8}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {successStories.map(story=>(
                     <Card key={story.title} className="text-center">
                        <div className="text-5xl mb-4">{story.icon}</div>
                        <h3 className="text-[#1e1e1e] mb-2.5 font-bold">{story.title}</h3>
                        <p className="font-semibold text-slate-800">{story.stat}</p>
                        <p className="text-slate-800 mt-2 text-sm">{story.desc}</p>
                    </Card>
                ))}
            </div>
            
            <p className="text-center mt-8 italic text-slate-500">All companies are mid to large enterprises based out of US</p>
            
            <div className="text-center mt-10 p-8 bg-white rounded-2xl">
                <h3 className="text-[#1e1e1e] mb-8 text-2xl font-bold">Trusted by Leading B2B SaaS Companies</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-8 items-center">
                    {clients.map(client=>(
                        <div key={client.name} className="text-center p-4 bg-white rounded-xl shadow-sm transition-transform duration-300 hover:scale-105">
                            <strong className="text-slate-800">{client.name}</strong><br/>
                            <small className="text-slate-500">{client.industry}</small>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SuccessStoriesSection;
