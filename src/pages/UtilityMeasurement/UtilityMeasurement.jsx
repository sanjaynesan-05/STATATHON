import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import Card from '../../components/Card';
import ChartWrapper from '../../components/ChartWrapper';
import { utilityMeasurementData } from '../../services/dummyUtilityData';
import {
  ChartBarIcon,
  ScaleIcon,
  CheckCircleIcon,
  ArrowUpIcon,
  Cog6ToothIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

export default function UtilityMeasurement() {
  const [thresholds, setThresholds] = useState({
    riskThreshold: 7.5,
    kAnonymity: 5,
    epsilonBudget: 1.0,
    utilityThreshold: 0.7
  });

  const handleThresholdChange = (field, value) => {
    setThresholds((prev) => ({
      ...prev,
      [field]: parseFloat(value)
    }));
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
          Utility Measurement Module
        </h1>
        <p className="text-gray-600">
          Analyze how well the privacy-enhanced data preserves statistical utility and analytical value.
        </p>
      </motion.div>

      {/* Overall Utility Score */}
      <Card title="Overall Utility Assessment">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-4">
              <span className="text-4xl font-bold text-white">
                {Math.round(utilityMeasurementData.overallUtility.score * 100)}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Utility Score</h3>
            <p className="text-gray-600">Out of 100</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 text-blue-700 rounded-full mb-4">
              <span className="text-4xl font-bold">
                {utilityMeasurementData.overallUtility.grade}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Grade</h3>
            <p className="text-gray-600">Performance Rating</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Status</h3>
              <p className="text-sm text-green-600 font-medium">Acceptable Quality</p>
              <p className="text-xs text-gray-500 mt-2 max-w-xs">
                {utilityMeasurementData.overallUtility.interpretation}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Privacy & Utility Thresholds Configuration */}
      <Card title="Privacy & Utility Thresholds Configuration">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Privacy Parameters */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <Cog6ToothIcon className="h-5 w-5" />
              <span>Privacy Parameters</span>
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Risk Threshold (Max Acceptable)
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.1"
                    value={thresholds.riskThreshold}
                    onChange={(e) => handleThresholdChange('riskThreshold', e.target.value)}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-900 w-12">
                    {thresholds.riskThreshold}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Lower values increase privacy</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  K-Anonymity Level
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="2"
                    max="20"
                    value={thresholds.kAnonymity}
                    onChange={(e) => handleThresholdChange('kAnonymity', e.target.value)}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-900 w-12">
                    {thresholds.kAnonymity}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Minimum group size for anonymization</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Differential Privacy Epsilon
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="0.1"
                    max="5"
                    step="0.1"
                    value={thresholds.epsilonBudget}
                    onChange={(e) => handleThresholdChange('epsilonBudget', e.target.value)}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-900 w-12">
                    {thresholds.epsilonBudget}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Privacy budget allocation</p>
              </div>
            </div>
          </div>

          {/* Utility Requirements */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
              <DocumentCheckIcon className="h-5 w-5" />
              <span>Utility Requirements</span>
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Utility Score
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.01"
                    value={thresholds.utilityThreshold}
                    onChange={(e) => handleThresholdChange('utilityThreshold', e.target.value)}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm font-medium text-gray-900 w-12">
                    {(thresholds.utilityThreshold * 100).toFixed(0)}%
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Minimum acceptable utility for release</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Distribution Comparison */}
      <Card title="Distribution Preservation Analysis">
        <ChartWrapper height={400}>
          <BarChart data={utilityMeasurementData.chartData.distributionComparison}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="attribute" />
            <YAxis domain={[0, 1]} />
            <Tooltip formatter={(value) => [`${(value * 100).toFixed(1)}%`, '']} />
            <Bar dataKey="original" fill="#003366" name="Original Data" />
            <Bar dataKey="enhanced" fill="#0056e6" name="Privacy-Enhanced Data" />
          </BarChart>
        </ChartWrapper>
      </Card>

      {/* Action Buttons */}
      <Card title="Next Steps">
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowUpIcon className="w-6 h-6 text-green-500" />
            <span>Generate Utility Report</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-6 py-3 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors"
          >
            <ScaleIcon className="h-5 w-5" />
            <span>Adjust Privacy Parameters</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ChartBarIcon className="h-5 w-5" />
            <span>Export Analysis Data</span>
          </motion.button>
        </div>
      </Card>
    </div>
  );
}
