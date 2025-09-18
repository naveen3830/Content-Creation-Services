
import type React from 'react';

export interface SectionProps {
  title: string;
  sectionNumber: number;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface MethodologyStep {
  num: number;
  title: string;
  desc: string;
}

export interface Deliverable {
  title: string;
  desc: string;
}

export interface Input {
  title: string;
  desc: string;
}

export interface PricePlan {
  title: string;
  subtitle: string;
  note?: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export interface PriceExclusion {
  title: string;
  desc: string;
}

export interface Measurement {
  title: string;
  desc: string;
}

export interface SuccessStory {
  icon: React.ReactNode;
  title: string;
  stat: string;
  desc: string;
}

export interface Client {
  name: string;
  industry: string;
  logoSrc?: string;
}

export interface RepurposeService {
  icon: string;
  title: string;
  desc: string;
}

export interface ApproachPoint {
  title: string;
  subtitle: string;
  content: string | React.ReactNode;
}