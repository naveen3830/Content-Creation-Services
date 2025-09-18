# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Setup and Installation
```bash
npm install
```

### Development Server
```bash
npm run dev        # Start development server with hot reload
```

### Building
```bash
npm run build      # Build for production
npm run preview    # Preview production build locally
```

### Environment Setup
- Copy `.env.local` and set `GEMINI_API_KEY` to your Gemini API key
- The API key is exposed to the frontend via Vite's environment variable system

## Architecture Overview

This is a React + TypeScript single-page application built with Vite, showcasing LeadWalnut's content services dashboard.

### Project Structure
- **Root-level components**: Main App component and entry point
- **`/components`**: Reusable UI components
  - `Section.tsx` - Main section wrapper with alternating backgrounds
  - `Card.tsx` - Reusable card component with hover effects
  - `Header.tsx`, `Logo.tsx`, `CtaSection.tsx` - Layout components
- **`/components/sections`**: Individual content sections for the dashboard
- **`types.ts`**: TypeScript interfaces for all data structures
- **`constants.ts`**: All static content data (methodology, pricing, success stories, etc.)

### Key Architecture Patterns

1. **Section-Based Layout**: App renders sequential sections, each with alternating backgrounds
2. **Type-Safe Data Flow**: Strong TypeScript interfaces for all props and data structures
3. **Constants-Driven Content**: All content lives in `constants.ts` using React.createElement for JSX-in-TS compatibility
4. **Component Composition**: Sections use shared `Section` and `Card` components for consistency
5. **Tailwind CSS**: Utility-first styling with custom color scheme (`#02AAF7` primary blue)

### Data Architecture
- `approachPoints`: Content strategy approach
- `methodologySteps`: 10-step content creation process
- `deliverables`: Service deliverables
- `pricePlans`: Three-tier pricing structure
- `successStories`: Client case studies with custom SVG icons
- `clients`: Client portfolio
- `repurposingServices`: Additional content services

### Notable Technical Details
- Uses React.createElement in `constants.ts` to maintain `.ts` extension while including JSX
- Vite config exposes `GEMINI_API_KEY` as both `process.env.API_KEY` and `process.env.GEMINI_API_KEY`
- Path alias `@/*` maps to root directory
- No test framework currently configured
- No linting/formatting configuration present

### Component Hierarchy
```
App
├── Header
├── ObjectiveSection
├── ApproachSection
├── MethodologySection
├── DeliverablesSection
├── InputsSection
├── PricingSection
├── OperatingTermsSection
├── MeasurementSection
├── SuccessStoriesSection
├── RepurposingSection
└── CtaSection
```