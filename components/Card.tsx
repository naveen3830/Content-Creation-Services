
import React from 'react';
import type { CardProps } from '../types';

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${className}`}>
            {children}
        </div>
    );
};

export default Card;
