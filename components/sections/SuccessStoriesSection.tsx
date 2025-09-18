import React from 'react';
import Section from '../Section';
import Card from '../Card';
import { successStories, clients } from '../../constants';

const SuccessStoriesSection: React.FC = () => {
    return (
        <Section title="Content Creation Success Stories" sectionNumber={8}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {successStories.map((story, index)=>(
                     <Card key={story.title} className={`text-center flex flex-col border shadow-lg rounded-2xl ${index === 1 || index === 3 ? 'border-yellow-300' : 'border-sky-300'}`}>
                        <div className="h-24 flex items-center justify-center">{story.icon}</div>
                        <div className="min-h-[4.5rem] flex items-center justify-center">
                            <h3 className="text-[#1e1e1e] font-bold text-lg">{story.title}</h3>
                        </div>
                        <div className="min-h-[4rem] flex items-center justify-center">
                            <p className="font-bold text-slate-800 text-md px-2">{story.stat}</p>
                        </div>
                        <div className="flex-grow mt-2">
                            <p className="text-slate-800 text-sm px-2">{story.desc}</p>
                        </div>
                    </Card>
                ))}
            </div>
            
            <p className="text-center mt-8 font-bold text-black">All companies are mid to large enterprises based out of US</p>
            
            <div className="text-center mt-10 p-8 bg-white rounded-2xl">
                <h3 className="text-[#02AAF7] mb-8 text-2xl font-bold">Trusted by Leading B2B SaaS Companies</h3>
                <div className="flex flex-nowrap justify-between gap-4 mt-8 overflow-x-hidden w-full">
                    {clients.map((client, index)=>(
                        <div 
                            key={client.name} 
                            className={`p-4 rounded-2xl shadow-md w-36 h-36 shrink-0 flex flex-col items-center justify-center text-center gap-1 ${index % 2 === 0 ? 'bg-sky-100' : 'bg-yellow-100'}`}
                        >
                            {/* Fixed-height logo box to keep vertical alignment consistent */}
                            <div className="h-10 flex items-center justify-center">
                                {client.logoSrc && (
                                    <img
                                        src={encodeURI(client.logoSrc)}
                                        alt={`${client.name} logo`}
                                        className="max-h-8 max-w-[100px] object-contain"
                                    />
                                )}
                            </div>
                            <div className="text-center leading-tight">
                                {client.name === 'Fortinet' ? (
                                    <strong className="text-slate-900 font-bold text-sm block">{client.name}</strong>
                                ) : (
                                    // Reserve the same vertical space when name is hidden for alignment
                                    <span className="block min-h-[1rem]" />
                                )}
                                <small className="text-slate-600 text-xs block">{client.industry}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default SuccessStoriesSection;