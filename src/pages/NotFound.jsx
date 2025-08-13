import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full mb-6">
            <span className="text-6xl font-bold text-white">404</span>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-quicksand font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              SafeData Pipeline Navigation
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              You might be looking for one of these sections:
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link 
                to="/dashboard" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Dashboard
              </Link>
              <Link 
                to="/risk-assessment" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Risk Assessment
              </Link>
              <Link 
                to="/privacy-enhancement" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Privacy Enhancement
              </Link>
              <Link 
                to="/data-release" 
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Data Release
              </Link>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Go to Dashboard</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>Go Back</span>
            </button>
          </motion.div>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-sm text-gray-500">
          <p>
            Need help? Contact the{' '}
            <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
              National Statistical Office
            </a>{' '}
            support team.
          </p>
        </div>
      </motion.div>
    </div>
  );
}