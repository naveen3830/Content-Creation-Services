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
    ApproachPoint,
    PriceExclusion
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

export const priceExclusions: PriceExclusion[] = [
    { title: 'Keyword Research', desc: 'Comprehensive keyword analysis and targeting' },
    { title: 'Competition Analysis', desc: 'Detailed competitive landscape assessment' },
    { title: 'Content Brief Creation', desc: 'Strategic content planning and briefing' },
    { title: 'Visual Markup', desc: 'Recommendations for images, charts, and visual elements' },
    { title: 'Contextual CTAs', desc: 'Strategic call-to-action placement and optimization' },
    { title: 'Analytics', desc: 'Performance tracking and detailed reporting' },
];

export const measurementItems: Measurement[] = [
    {title: 'Primary KPIs', desc: 'Rankings, qualified sessions, and engagement'},
    {title: 'LLM Visibility', desc: 'Presence/citations in AI answers, prompt coverage.'},
    {title: 'Quarterly Review', desc: 'Winners/underperformers, refresh plan, and new topic slate'}
];

export const successStories: SuccessStory[] = [
    {
        icon: React.createElement('svg', { width: "64", height: "64", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "mx-auto" }, 
            React.createElement('path', { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", stroke: "#3b82f6", strokeWidth: "1.5", fill: "#eff6ff", strokeLinecap: "round", strokeLinejoin: "round" })
        ), 
        title: 'Leading Cybersecurity Enterprise', 
        stat: '400+ TOFU + BOFU Articles', 
        desc: 'Comprehensive content strategy covering awareness and decision-stage content'
    },
    {
        icon: React.createElement('svg', { width: "64", height: "64", viewBox: "0 0 64 64", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "mx-auto" },
            React.createElement('rect', { x: "8", y: "8", width: "48", height: "48", rx: "8", fill: "#f3f4f6" }),
            React.createElement('rect', { x: "18", y: "26", width: "8", height: "20", rx: "2", fill: "#4ade80" }),
            React.createElement('rect', { x: "28", y: "20", width: "8", height: "26", rx: "2", fill: "#ec4899" }),
            React.createElement('rect', { x: "38", y: "30", width: "8", height: "16", rx: "2", fill: "#60a5fa" })
        ), 
        title: 'Data Observability Company', 
        stat: '30+ Hybrid Blog Articles', 
        desc: 'AI + Human expertise blend for technical thought leadership'
    },
    {
        icon: React.createElement('svg', { width: "64", height: "64", viewBox: "0 0 24 24", className: "mx-auto" }, 
            React.createElement('path', { d: "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z", fill: "#ec4899" })
        ), 
        title: 'VOIP Company', 
        stat: '50+ How-to Articles', 
        desc: 'Educational content driving user adoption and engagement'
    },
    {
        icon: React.createElement('svg', { width: "64", height: "64", viewBox: "0 0 24 24", className: "mx-auto" }, 
            React.createElement('path', { d: "M16.45,5.45L21,10H17.5C16.83,10 16.33,9.66 16.03,9.16L12,2.82L7.97,9.16C7.67,9.66 7.17,10 6.5,10H3L7.55,5.45C9.43,3.57 12,3 14,4C14.86,4.35 15.7,4.84 16.45,5.45M21,14H17.5C16.83,14 16.33,14.34 16.03,14.84L12,21.18L7.97,14.84C7.67,14.34 7.17,14 6.5,14H3L7.55,18.55C9.43,20.43 12,21 14,20C14.86,19.65 15.7,19.16 16.45,18.55L21,14Z", fill: "#d8b4fe" })
        ),
        title: 'ITT Digital', 
        stat: '20+ Thought Leadership Articles', 
        desc: 'Strategic content establishing industry authority and expertise'
    }
];

export const clients: Client[] = [
    { name: 'Fortinet', industry: 'Cybersecurity', logoSrc: '/Fortinet logo png.png' },
    { name: 'eFax', industry: 'Digital Faxing', logoSrc: '/efax.avif' },
    { name: 'Splashtop', industry: 'Remote Access', logoSrc: '/splashtop_image.png' },
    { name: '8x8', industry: 'VOIP Solutions', logoSrc: '/8x8_logo_2016.svg.png' },
    { name: 'ITT Digital', industry: 'Tech Services', logoSrc: '/ITT digital png.png' },
    { name: 'Maarga', industry: 'Tech Services', logoSrc: '/Maarga.png' }
];

export const repurposingServices: RepurposeService[] = [
   {icon: '🎬', title: 'Video Content', desc: 'Convert to 90–120 sec video'},
   {icon: '📱', title: 'Reddit Marketing', desc: 'Reddit post + targeted subreddit recommendations'},
   {icon: '💼', title: 'LinkedIn Content', desc: 'LinkedIn post with custom infographic'}
];