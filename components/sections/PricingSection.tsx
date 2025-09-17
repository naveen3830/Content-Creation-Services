
import React from 'react';
import Section from '../Section';
import { pricePlans, priceExclusions } from '../../constants';
import type { PricePlan } from '../../types';

const PriceCard: React.FC<{plan: PricePlan}> = ({ plan }) => {
    const highlightClass = plan.highlight ? 'scale-[1.03] shadow-lg hover:shadow-2xl hover:scale-[1.05]' : 'shadow-md hover:shadow-xl';

    return (
        <div className={`bg-white p-8 rounded-2xl text-center border-t-4 border-[#006747] flex flex-col transition-all duration-300 ${highlightClass}`}>
           <h3 className="text-[#1e1e1e] text-2xl mb-2.5 font-bold">{plan.title}</h3>
           {plan.note && <p className="text-slate-500 text-sm italic">{plan.note}</p>}
           <p className="text-slate-500 mb-5 whitespace-pre-line">{plan.subtitle}</p>
           <div className="text-5xl font-bold text-slate-800 my-5">{plan.price}</div>
           <ul className="list-none text-left mt-5 space-y-3 flex-grow text-slate-800">
                {plan.features.map(feature=>(
                    <li key={feature} className="flex items-center"><span className="text-[#006747] text-xl font-bold mr-3">✓</span>{feature}</li>
                ))}
           </ul>
        </div>
    );
};

const PricingSection: React.FC = () => {
    return (
        <Section title="Economics of Engagement" sectionNumber={5}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {pricePlans.map(plan => (
                    <PriceCard key={plan.title} plan={plan} />
                ))}
            </div>
            
            <div className="bg-white mt-12 p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-slate-700 mb-5 text-center text-xl font-bold">📋 Price Exclusions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-slate-800">
                    {priceExclusions.map(item => (
                        <div key={item} className="flex items-center p-2.5">
                            <span className="bg-[#006747] text-white w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mr-3 text-sm font-bold">!</span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl mt-8 border-l-4 border-[#006747]">
                <h3 className="text-[#1e1e1e] mb-4 text-xl font-bold">Performance Warranty</h3>
                <p>Content outcome ownership: If an article doesn't reach Google's first page within 3 months, one refresh (up to 300 words) is free.</p>
                <p className="mt-4 text-sm text-slate-500"><strong>Note:</strong> Excludes authority pieces not dependent on keyword rankings.</p>
            </div>
        </Section>
    );
};

export default PricingSection;
