import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ 
  title, 
  children, 
  className = '', 
  headerAction = null,
  animate = true 
}) {
  const cardContent = (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-quicksand font-semibold text-gray-900">{title}</h3>
          {headerAction}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}

export function StatCard({ title, value, subtitle, icon: Icon, color = 'primary' }) {
  const colorClasses = {
    primary: 'from-primary-500 to-primary-600',
    gold: 'from-gold-500 to-gold-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
    blue: 'from-blue-500 to-blue-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          )}
        </div>
        {Icon && (
          <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[color]}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        )}
      </div>
    </motion.div>
  );
}