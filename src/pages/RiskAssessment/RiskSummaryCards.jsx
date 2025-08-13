import React from 'react';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon, ShieldExclamationIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function RiskSummaryCards({ riskData }) {
  const getRiskColor = (risk) => {
    if (risk >= 8) return 'red';
    if (risk >= 6) return 'yellow';
    return 'green';
  };

  const getRiskIcon = (category) => {
    switch (category) {
      case 'Identity Disclosure':
        return EyeIcon;
      case 'Attribute Disclosure':
        return ShieldExclamationIcon;
      default:
        return ExclamationTriangleIcon;
    }
  };

  const colorClasses = {
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: 'text-red-600',
      badge: 'bg-red-100 text-red-800'
    },
    yellow: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: 'text-yellow-600',
      badge: 'bg-yellow-100 text-yellow-800'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: 'text-green-600',
      badge: 'bg-green-100 text-green-800'
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {riskData.riskCategories.map((category, index) => {
        const color = getRiskColor(category.risk);
        const classes = colorClasses[color];
        const IconComponent = getRiskIcon(category.category);

        return (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-6 rounded-lg border-2 ${classes.bg} ${classes.border} hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg bg-white shadow-sm`}>
                <IconComponent className={`h-6 w-6 ${classes.icon}`} />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${classes.badge}`}>
                Risk: {category.risk.toFixed(1)}
              </span>
            </div>

            <h3 className={`text-lg font-semibold ${classes.text} mb-2`}>
              {category.category}
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              {category.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                Affected Records
              </span>
              <span className={`text-lg font-bold ${classes.text}`}>
                {category.records.toLocaleString()}
              </span>
            </div>

            {/* Risk Level Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    color === 'red' ? 'bg-red-500' : 
                    color === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${(category.risk / 10) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}