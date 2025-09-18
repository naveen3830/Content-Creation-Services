import React from 'react';
import Section from '../Section';
import { pricePlans, priceExclusions } from '../../constants';
import type { PricePlan } from '../../types';

const PriceCard: React.FC<{plan: PricePlan}> = ({ plan }) => {
    const isHighlighted = !!plan.highlight;
    const cardClasses = isHighlighted ? 'border-amber-500' : 'border-[#006747]';
    const headerClass = isHighlighted ? 'text-amber-600' : 'text-[#1e1e1e]';
    const checkClass = isHighlighted ? 'text-amber-600' : 'text-[#006747]';

    const priceParts = plan.price.split(' ');
    const priceValue = priceParts[0];
    const priceQualifier = priceParts.slice(1).join(' ');

    return (
        <div className={`bg-white p-8 rounded-2xl text-center border-t-4 flex flex-col transition-all duration-300 shadow-lg hover:shadow-xl ${cardClasses}`}>
           <div className="min-h-[4rem] flex items-center justify-center">
             <h3 className={`text-2xl font-bold ${headerClass}`}>{plan.title}</h3>
           </div>
           
           <div className="min-h-[5rem]">
             {plan.note && <p className="text-slate-500 text-sm italic mb-2">{plan.note}</p>}
             <p className="text-slate-500 whitespace-pre-line">{plan.subtitle}</p>
           </div>
           
           <div className="text-5xl font-bold text-slate-800 my-5 flex items-baseline justify-center gap-2">
                <span>{priceValue}</span>
                {priceQualifier && <span className="text-3xl font-bold">{priceQualifier}</span>}
            </div>

           <ul className="list-none text-left mt-5 space-y-3 flex-grow text-slate-800">
                {plan.features.map(feature=>(
                    <li key={feature} className="flex items-center"><span className={`${checkClass} text-xl font-bold mr-3`}>✓</span>{feature}</li>
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
                <h3 className="text-[#02AAF7] mb-5 text-left text-2xl font-bold">📋 Price Exclusions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 text-slate-800">
                    {priceExclusions.map(item => (
                        <div key={item.title} className="flex items-start">
                            <span className="text-[#006747] text-xl font-bold mr-3 flex-shrink-0 pt-0.5">✓</span>
                            <div>
                                <div className="font-semibold text-slate-800">{item.title}</div>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl mt-8 border-l-4 border-[#006747]">
                <h3 className="text-[#02AAF7] mb-4 text-xl font-bold">Performance Warranty</h3>
                <p>Content outcome ownership: If an article doesn't reach Google's first page within 3 months, one refresh (up to 300 words) is free.</p>
                <p className="mt-4 text-sm text-slate-500"><strong>Note:</strong> Excludes authority pieces not dependent on keyword rankings.</p>
            </div>
        </Section>
    );
};

export default PricingSection;