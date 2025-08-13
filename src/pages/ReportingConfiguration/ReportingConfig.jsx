import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import { reportingData } from '../../services/dummyReportData';
import { COMPLIANCE_FRAMEWORKS } from '../../utils/constants';
import {
  DocumentCheckIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  Cog6ToothIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline';

export default function ReportingConfiguration() {
  const [selectedFramework, setSelectedFramework] = useState('DPDP');
  const [thresholds, setThresholds] = useState(reportingData.thresholds);

  const getComplianceIcon = (status) => {
    switch (status) {
      case 'pass':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />;
      default:
        return <ExclamationTriangleIcon className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLIANT':
        return 'text-green-600 bg-green-100';
      case 'PARTIAL':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-red-600 bg-red-100';
    }
  };

  const handleExportReport = () => {
    alert('Compliance report will be generated and downloaded as PDF.');
  };

  const handleThresholdChange = (key, value) => {
    setThresholds(prev => ({ ...prev, [key]: parseFloat(value) }));
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
          Compliance Reporting & Configuration
        </h1>
        <p className="text-gray-600">
          Ensure your data release meets regulatory requirements and configure system parameters.
        </p>
      </motion.div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(reportingData.compliance).map(([key, framework]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
              selectedFramework === key ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedFramework(key)}
          >
            <div className="flex items-start justify-between mb-4">
              <ShieldCheckIcon className={`h-8 w-8 ${selectedFramework === key ? 'text-primary-600' : 'text-gray-400'}`} />
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(framework.status)}`}>
                {framework.status}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{framework.name}</h3>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl font-bold text-primary-600">
                {Math.round(framework.score * 100)}%
              </span>
              <span className="text-sm text-gray-500">Compliance Score</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${framework.score * 100}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Compliance Checklist */}
      <Card title={`${reportingData.compliance[selectedFramework].name} - Detailed Checklist`}>
        <div className="space-y-4">
          {reportingData.compliance[selectedFramework].checklist.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0 mt-1">
                {getComplianceIcon(item.status)}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">{item.item}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  item.status === 'pass' ? 'bg-green-100 text-green-800' :
                  item.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {item.status === 'pass' ? 'Compliant' : 
                   item.status === 'warning' ? 'Needs Attention' : 'Non-Compliant'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* System Configuration */}
      <Card title="Privacy & Utility Thresholds Configuration">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

              {/* Current Status */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Current Configuration Status</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Risk Level:</span>
                    <span className={`font-medium ${8.2 > thresholds.riskThreshold ? 'text-red-600' : 'text-green-600'}`}>
                      {8.2 > thresholds.riskThreshold ? 'Above Threshold' : 'Within Limits'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Utility Score:</span>
                    <span className={`font-medium ${0.782 >= thresholds.utilityThreshold ? 'text-green-600' : 'text-red-600'}`}>
                      {0.782 >= thresholds.utilityThreshold ? 'Meets Requirement' : 'Below Threshold'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Overall:</span>
                    <span className="font-medium text-yellow-600">Manual Review Required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Audit Trail */}
      <Card title="Audit Trail & Approvals">
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Processing Details</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Timestamp:</span> {new Date(reportingData.audit.timestamp).toLocaleString('en-IN')}</p>
                <p><span className="font-medium">Processor:</span> {reportingData.audit.processor}</p>
                <p><span className="font-medium">Dataset ID:</span> MOSPI-HHS-2024-001</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Review Status</h4>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Reviewer:</span> {reportingData.audit.reviewer}</p>
                <p><span className="font-medium">Status:</span> 
                  <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                    {reportingData.audit.approvalStatus}
                  </span>
                </p>
                <p><span className="font-medium">Next Action:</span> Director Approval</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Comments</h4>
              <p className="text-sm text-gray-600 bg-white p-3 rounded border">
                {reportingData.audit.comments}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <Card title="Report Generation">
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleExportReport}
            className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <DocumentArrowDownIcon className="h-5 w-5" />
            <span>Export Compliance Report</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-6 py-3 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors"
          >
            <CheckCircleIcon className="h-5 w-5" />
            <span>Submit for Review</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Cog6ToothIcon className="h-5 w-5" />
            <span>Save Configuration</span>
          </motion.button>
        </div>
      </Card>
    </div>
  );
}