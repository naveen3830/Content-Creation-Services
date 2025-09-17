import React from 'react';
import type { 
    MethodologyStep,
    Deliverable,
    Input,
    PricePlan,
    Measurement,
    SuccessStory,
    Client,
    RepurposeService,
    ApproachPoint
} from './types';

export const approachPoints: ApproachPoint[] = [
    {
        title: 'Human Expertise + AI Copilot',
        subtitle: 'Editor-Led Strategy & AI Acceleration',
        content: 'We combine editor-led strategy, structure, and fact-checking with AI-assisted research and drafting for speed, breadth, and entity coverage.',
    },
    {
        title: 'Quality at Scale',
        subtitle: 'High-Quality, Comprehensive Articles',
        content: 'Deliver comprehensive articles at scale—without sacrificing accuracy, tone, or credibility.',
    },
    {
        title: 'Editorial Standards',
        subtitle: '',
        // FIX: Replaced JSX with React.createElement to be compatible with a .ts file.
        // The file cannot be renamed to .tsx, so this is the correct way to represent React elements.
        content: React.createElement('div', { className: "mt-4 space-y-3 text-slate-800" },
            React.createElement('p', null, React.createElement('strong', null, 'Audience-First:'), ' Clear POV, plain language positioning'),
            React.createElement('p', null, React.createElement('strong', null, 'E-E-A-T:'), ' Cited facts, primary sources, stats, and dates'),
            React.createElement('p', null, React.createElement('strong', null, 'LLM-Readability:'), ' Summaries, Q&A blocks, clean headings, schema'),
            React.createElement('p', null, React.createElement('strong', null, 'Quality Assurance:'), ' Plagiarism scan, hallucination check, link validation')
        )
    }
];

export const methodologySteps: MethodologyStep[] = [
    { num: 1, title: 'Understand Audience & Funnel Stage', desc: 'Define ICPs, use cases, objections, and desired next action.' },
    { num: 2, title: 'Study and Analyse Competition', desc: 'Gap analysis of content coverage, entities, and SERP/LLM patterns.' },
    { num: 3, title: 'Set Outline, Structure & Differentiation', desc: 'Create logical content outlines, establish competitive differentiation with on-brand voice, conduct comprehensive keyword research, develop detailed content briefs, and create the article framework.' },
    { num: 4, title: 'Create Authentic Content as Per Outline', desc: 'Develop original, human-guided content following the established outline with AI acceleration.' },
    { num: 5, title: 'Enrich with Statistics & Future Trends', desc: 'Insert current data points, forward-looking insights, and AI impact analysis.' },
    { num: 6, title: 'Optimize for LLMs and Scanners', desc: 'Add Q&A sections, TL;DR summaries, and short snippets for AI grounding.' },
    { num: 7, title: 'Incorporate SME Inputs', desc: 'Interview or capture notes from subject experts for credibility and specificity.' },
    { num: 8, title: 'Search & Entity Optimization', desc: 'Weave primary/secondary keywords and entities naturally across content.' },
    { num: 9, title: 'Contextual CTAs & Internal Linking', desc: 'Place value-led CTAs and strategic internal links that route readers to the right funnel stage.' },
    { num: 10, title: 'Visual Markup and Backlink Acquisition', desc: 'Create comprehensive visual guidance and strategic backlink acquisition to enhance content authority and engagement.' },
];

export const deliverables: Deliverable[] = [
    { title: 'On-Brief Draft', desc: 'Audience-aligned, editable document' },
    { title: 'SEO Structure', desc: 'H1–H3 hierarchy, meta title/description, internal linking plan' },
    { title: 'Data & Insights', desc: 'Stats box with sources + future-trend callouts' },
    { title: 'LLM Optimization', desc: 'FAQ section, TL;DR summary, snippet set' },
    { title: 'Schema Recommendations', desc: 'FAQPage/HowTo/Article as applicable' },
    { title: 'Visual Guidance', desc: 'Figure/table notes and suggested alt text' },
];

export const neededInputs: Input[] = [
    { title: 'Topic Options, Prioritization & Target Audience', desc: 'Content themes, priority focus areas, ICP definitions, and key objectives' },
    { title: 'Key Services, Differentiators & Competitors', desc: 'Core services, unique value propositions, and competitive landscape analysis' },
    { title: 'SME Support', desc: 'Internal experts and domain knowledge sources for content validation' },
    { title: 'Brand Guidelines', desc: 'Voice, terminology, compliance.' },
    { title: 'Backlink Acquisition', desc: 'Strategic link acquisition and relationship building as and when needed to enhance content authority and domain credibility.' },
];

export const pricePlans: PricePlan[] = [
    { 
        title: 'Explainer/How-To/Guides',
        subtitle: 'Educational and Guide Content',
        price: '$5,900',
        features: ['10 articles (1,200–1,500 words each)', 'Statistics & FAQ sections', 'TL;DR & meta optimization', 'Schema recommendations', 'One round of edits FREE'],
    },
    { 
        title: 'Technical/Authority Articles',
        subtitle: 'Deep dives with comprehensive research',
        note: 'Based on content complexity',
        price: '$7,900 onwards',
        features: ['10 articles (1,200–1,500 words each)', 'SME synthesis', 'Diagrams/figures guidance', 'Expanded citations', 'Authority positioning', 'One round of edits FREE'],
        highlight: true,
    },
    { 
        title: 'Content Refresh',
        subtitle: 'per 500 words\nCreate fresh sections and update existing content',
        price: '$359',
        features: ['Minimum 500 words', 'Statistics updates', 'Trend alignment', 'Fresh content sections', 'One round of edits FREE'],
    },
];

export const priceExclusions = ['Keyword Research', 'Competition Analysis', 'Content Brief Creation', 'Visual Markup', 'Contextual CTAs', 'Analytics & Reporting'];

export const measurementItems: Measurement[] = [
    {title: 'Primary KPIs', desc: 'Rankings, qualified sessions, and engagement'},
    {title: 'LLM Visibility', desc: 'Presence/citations in AI answers, prompt coverage.'},
    {title: 'Quarterly Review', desc: 'Winners/underperformers, refresh plan, and new topic slate'}
];

export const successStories: SuccessStory[] = [
    {icon: '🛡️', title: 'Leading Cybersecurity Enterprise', stat: '400+ TOFU + BOFU Articles', desc: 'Comprehensive content strategy covering awareness and decision-stage content'},
    {icon: '📊', title: 'Data Observability Company', stat: '30+ Hybrid Blog Articles', desc: 'AI + Human expertise blend for technical thought leadership'},
    {icon: '📞', title: 'VOIP Company', stat: '50+ How-to Articles', desc: 'Educational content driving user adoption and engagement'},
    {icon: '🔧', title: 'ITT Digital', stat: '20+ Thought Leadership Articles', desc: 'Strategic content establishing industry authority and expertise'}
];

export const clients: Client[] = [
    {name: 'Fortinet', industry: 'Cybersecurity'},
    {name: 'eFax', industry: 'Digital Faxing'},
    {name: 'Splashtop', industry: 'Remote Access'},
    {name: '8x8', industry: 'VOIP Solutions'},
    {name: 'ITT Digital', industry: 'Tech Services'},
    {name: 'Maarga', industry: 'Enterprise Solutions'}
];

export const repurposingServices: RepurposeService[] = [
   {icon: '🎬', title: 'Video Content', desc: 'Convert to 90–120 sec video'},
   {icon: '📱', title: 'Reddit Marketing', desc: 'Reddit post + targeted subreddit recommendations'},
   {icon: '💼', title: 'LinkedIn Content', desc: 'LinkedIn post with custom infographic'}
];