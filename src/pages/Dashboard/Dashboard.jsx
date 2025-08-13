import React from 'react';
import { motion } from 'framer-motion';
import { usePipeline } from '../../context/PipelineContext';
import { StatCard } from '../../components/Card';
import Card from '../../components/Card';
import StatusTimeline from './StatusTimeline';
import {
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  CloudArrowUpIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const { state } = usePipeline();

  const stats = [
    {
      title: 'Overall Risk Level',
      value: '8.2/10',
      subtitle: 'High Risk Detected',
      icon: ShieldCheckIcon,
      color: 'red'
    },
    {
      title: 'Utility Score',
      value: '0.782',
      subtitle: 'Grade B+ Performance',
      icon: ChartBarIcon,
      color: 'blue'
    },
    {
      title: 'Compliance Status',
      value: '89%',
      subtitle: 'DPDP Act 2023',
      icon: DocumentCheckIcon,
      color: 'green'
    },
    {
      title: 'Active Datasets',
      value: '3',
      subtitle: '2 Processing, 1 Released',
      icon: CloudArrowUpIcon,
      color: 'primary'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'warning',
      title: 'High Risk Records Detected',
      message: '2,340 records require privacy enhancement',
      timestamp: '2024-01-15T14:30:00Z'
    },
    {
      id: 2,
      type: 'info',
      title: 'Utility Analysis Complete',
      message: 'Dataset maintains 78.2% utility after anonymization',
      timestamp: '2024-01-15T13:45:00Z'
    },
    {
      id: 3,
      type: 'success',
      title: 'Privacy Enhancement Applied',
      message: 'Statistical Disclosure Control successfully implemented',
      timestamp: '2024-01-15T12:20:00Z'
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      case 'success':
        return <ShieldCheckIcon className="h-5 w-5 text-green-500" />;
      default:
        return <DocumentCheckIcon className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-quicksand font-bold text-gray-900 mb-2">
          SafeData Pipeline Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back, {state.user?.name}. Here's your current pipeline overview.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pipeline Status */}
        <div className="lg:col-span-2">
          <Card title="Pipeline Status & Timeline">
            <StatusTimeline />
          </Card>
        </div>

        {/* Notifications */}
        <div>
          <Card title="Recent Notifications">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {notification.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(notification.timestamp).toLocaleString('en-IN')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 border-2 border-dashed border-primary-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-300"
          >
            <CloudArrowUpIcon className="h-8 w-8 text-primary-600" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Upload New Dataset</h3>
              <p className="text-sm text-gray-600">Start a new privacy pipeline</p>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 border-2 border-dashed border-gold-300 rounded-lg hover:border-gold-500 hover:bg-gold-50 transition-all duration-300"
          >
            <DocumentCheckIcon className="h-8 w-8 text-gold-600" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Generate Report</h3>
              <p className="text-sm text-gray-600">Export compliance report</p>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 p-4 border-2 border-dashed border-green-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-300"
          >
            <UsersIcon className="h-8 w-8 text-green-600" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Manage Access</h3>
              <p className="text-sm text-gray-600">User permissions & roles</p>
            </div>
          </motion.button>
        </div>
      </Card>
    </div>
  );
}