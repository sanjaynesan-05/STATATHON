import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import { dataReleaseData } from '../../services/dummyReleaseData';
import {
  CloudArrowUpIcon,
  DocumentTextIcon,
  KeyIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CalendarDaysIcon,
  UsersIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

export default function DataRelease() {
  const [selectedLicense, setSelectedLicense] = useState(dataReleaseData.licenses[0]);
  const [releaseConfirmed, setReleaseConfirmed] = useState(false);

  const handleDataRelease = () => {
    if (window.confirm('Are you sure you want to release this dataset publicly? This action cannot be undone.')) {
      setReleaseConfirmed(true);
      alert('Dataset has been successfully released to the public repository!');
    }
  };

  const formatFileSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
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
          Data Release Module
        </h1>
        <p className="text-gray-600">
          Finalize and publish your privacy-enhanced dataset to the public repository.
        </p>
      </motion.div>

      {/* Release Status */}
      {releaseConfirmed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <CheckCircleIcon className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">Dataset Successfully Released!</h3>
              <p className="text-sm text-green-700">Your dataset is now available in the public repository.</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Dataset Overview */}
      <Card title="Dataset Information">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Dataset ID:</span>
                <span className="text-sm text-gray-900 font-mono">{dataReleaseData.dataset.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Title:</span>
                <span className="text-sm text-gray-900">{dataReleaseData.dataset.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Version:</span>
                <span className="text-sm text-gray-900 font-mono">{dataReleaseData.dataset.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Size:</span>
                <span className="text-sm text-gray-900">{dataReleaseData.dataset.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Records:</span>
                <span className="text-sm text-gray-900">{dataReleaseData.dataset.records.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-500">Formats:</span>
                <span className="text-sm text-gray-900">{dataReleaseData.dataset.format}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
            <p className="text-sm text-gray-600 mb-4">{dataReleaseData.dataset.description}</p>
            
            <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <ExclamationTriangleIcon className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-blue-800">Privacy Notice</h4>
                <p className="text-xs text-blue-700 mt-1">
                  This dataset has been processed through our privacy-preserving pipeline and meets all 
                  regulatory compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Metadata & Coverage */}
      <Card title="Dataset Metadata & Coverage">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <ChartBarIcon className="h-5 w-5 text-primary-600" />
              <h4 className="font-semibold text-gray-900">Geographical</h4>
            </div>
            <p className="text-sm text-gray-600">{dataReleaseData.metadata.geographical}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <CalendarDaysIcon className="h-5 w-5 text-primary-600" />
              <h4 className="font-semibold text-gray-900">Temporal</h4>
            </div>
            <p className="text-sm text-gray-600">{dataReleaseData.metadata.temporal}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <h4 className="font-semibold text-gray-900">Demographic</h4>
            </div>
            <p className="text-sm text-gray-600">{dataReleaseData.metadata.demographic}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <DocumentTextIcon className="h-5 w-5 text-primary-600" />
              <h4 className="font-semibold text-gray-900">Methodology</h4>
            </div>
            <p className="text-sm text-gray-600">{dataReleaseData.metadata.methodology}</p>
          </div>
        </div>
      </Card>

      {/* License Selection */}
      <Card title="License Configuration">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataReleaseData.licenses.map((license) => (
            <motion.div
              key={license.id}
              whileHover={{ scale: 1.02 }}
              className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedLicense.id === license.id 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedLicense(license)}
            >
              <div className="flex items-start justify-between mb-4">
                <KeyIcon className={`h-6 w-6 ${
                  selectedLicense.id === license.id ? 'text-primary-600' : 'text-gray-400'
                }`} />
                {selectedLicense.id === license.id && (
                  <CheckCircleIcon className="h-5 w-5 text-primary-600" />
                )}
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">{license.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{license.description}</p>
              
              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Restrictions:</h4>
                <ul className="space-y-1">
                  {license.restrictions.map((restriction, index) => (
                    <li key={index} className="text-xs text-gray-500 flex items-start space-x-2">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{restriction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-yellow-800">Selected License: {selectedLicense.name}</h4>
              <p className="text-xs text-yellow-700 mt-1">{selectedLicense.description}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Download Statistics */}
      <Card title="Usage Analytics & Statistics">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Statistics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-primary-800">Total Downloads</h4>
                  <p className="text-sm text-primary-600">All time</p>
                </div>
                <div className="text-2xl font-bold text-primary-600">
                  {dataReleaseData.downloadStats.totalDownloads.toLocaleString()}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gold-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gold-800">Recent Downloads</h4>
                  <p className="text-sm text-gold-600">Last 30 days</p>
                </div>
                <div className="text-2xl font-bold text-gold-600">
                  {dataReleaseData.downloadStats.lastMonthDownloads}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Users</h3>
            <div className="space-y-3">
              {dataReleaseData.downloadStats.topUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{user}</span>
                  </div>
                  <UsersIcon className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Release Actions */}
      <Card title="Data Release Actions">
        <div className="space-y-6">
          {/* Pre-release Checklist */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pre-Release Checklist</h3>
            <div className="space-y-3">
              {[
                'Privacy enhancement applied and verified',
                'Utility measurement completed with acceptable scores',
                'Compliance requirements met for all frameworks',
                'Dataset metadata and documentation complete',
                'License terms configured and reviewed'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDataRelease}
              disabled={releaseConfirmed}
              className={`flex items-center space-x-2 px-8 py-3 font-semibold rounded-lg transition-colors ${
                releaseConfirmed 
                  ? 'bg-green-600 text-white cursor-not-allowed' 
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              <CloudArrowUpIcon className="h-5 w-5" />
              <span>{releaseConfirmed ? 'Dataset Released' : 'Release Dataset'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2 px-6 py-3 bg-gold-500 text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors"
            >
              <DocumentTextIcon className="h-5 w-5" />
              <span>Generate Documentation</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              <span>Download Sample</span>
            </motion.button>
          </div>
        </div>
      </Card>
    </div>
  );
}