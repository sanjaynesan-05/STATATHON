import React from 'react';
import { ResponsiveContainer } from 'recharts';

export default function ChartWrapper({ children, title, height = 300 }) {
  return (
    <div className="w-full">
      {title && (
        <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
      )}
      <div style={{ width: '100%', height: height }}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
}