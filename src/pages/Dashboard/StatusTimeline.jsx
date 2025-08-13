import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

const timelineData = [
  {
    id: 1,
    title: 'Dataset Uploaded',
    description: 'household_survey_2024.csv processed successfully',
    timestamp: '2024-01-15T10:30:00Z',
    status: 'completed',
    user: 'Dr. Sarah Kumar'
  },
  {
    id: 2,
    title: 'Risk Assessment Completed',
    description: 'High-risk records identified: 2,340 records require attention',
    timestamp: '2024-01-15T11:45:00Z',
    status: 'completed',
    user: 'System Auto-Analysis'
  },
  {
    id: 3,
    title: 'Privacy Enhancement Applied',
    description: 'Statistical Disclosure Control with k-anonymity (k=5)',
    timestamp: '2024-01-15T13:20:00Z',
    status: 'completed',
    user: 'Amit Sharma'
  },
  {
    id: 4,
    title: 'Utility Measurement',
    description: 'Overall utility score: 0.782 (Grade B+)',
    timestamp: '2024-01-15T14:15:00Z',
    status: 'in-progress',
    user: 'System Processing'
  },
  {
    id: 5,
    title: 'Compliance Review',
    description: 'DPDP Act 2023 compliance verification pending',
    timestamp: null,
    status: 'pending',
    user: 'Legal Team'
  },
  {
    id: 6,
    title: 'Data Release',
    description: 'Final approval and public release',
    timestamp: null,
    status: 'pending',
    user: 'Director Approval'
  }
];

export default function StatusTimeline() {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckIcon className="h-5 w-5 text-white" />;
      case 'in-progress':
        return <ClockIcon className="h-5 w-5 text-white" />;
      case 'pending':
        return <ExclamationTriangleIcon className="h-5 w-5 text-white" />;
      default:
        return <ClockIcon className="h-5 w-5 text-white" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500 animate-pulse';
      case 'pending':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'Pending';
    return new Date(timestamp).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {timelineData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex space-x-4"
        >
          {/* Status Icon */}
          <div className="flex-shrink-0">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(item.status)}`}>
              {getStatusIcon(item.status)}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <span>{formatTimestamp(item.timestamp)}</span>
                  <span>•</span>
                  <span>{item.user}</span>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                  item.status === 'completed' ? 'bg-green-100 text-green-800' :
                  item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {item.status === 'in-progress' ? 'In Progress' : item.status}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}