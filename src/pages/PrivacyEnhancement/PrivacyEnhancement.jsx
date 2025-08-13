import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import { privacyEnhancementData } from '../../services/dummyPrivacyData';
import { PRIVACY_METHODS } from '../../utils/constants';
import { 
  ShieldCheckIcon, 
  EyeSlashIcon, 
  Cog6ToothIcon,
  PlayIcon,
  EyeIcon 
} from '@heroicons/react/24/outline';

export default function PrivacyEnhancement() {
  const [selectedMethod, setSelectedMethod] = useState('SDC');
  const [showPreview, setShowPreview] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const methodIcons = {
    SDC: ShieldCheckIcon,
    DIFFERENTIAL: EyeSlashIcon,
    SYNTHETIC: Cog6ToothIcon
  };

  const handleApplyEnhancement = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowPreview(true);
      alert(`${PRIVACY_METHODS[selectedMethod]} applied successfully!`);
    }, 2000);
  };

  const renderMethodDetails = (methodKey) => {
    const method = privacyEnhancementData.methods[methodKey];
    const IconComponent = methodIcons[methodKey];

    return (
      <motion.div
        key={methodKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
          selectedMethod === methodKey 
            ? 'border-primary-500 bg-primary-50' 
            : 'border-gray-200 hover:border-gray-300'
        }`}
        onClick={() => setSelectedMethod(methodKey)}
      >
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-lg ${
            selectedMethod === methodKey ? 'bg-primary-600' : 'bg-gray-100'
          }`}>
            <IconComponent className={`h-6 w-6 ${
              selectedMethod === methodKey ? 'text-white' : 'text-gray-600'
            }`} />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{method.description}</p>
            
            {/* Techniques */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700">Available Techniques:</h4>
              {method.techniques.map((technique, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className={technique.applied ? 'text-green-700' : 'text-gray-600'}>
                    {technique.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{technique.impact}</span>
                    <div className={`w-3 h-3 rounded-full ${
                      technique.applied ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
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
          Privacy Enhancement Module
        </h1>
        <p className="text-gray-600">
          Apply privacy-preserving techniques to protect sensitive data while maintaining utility.
        </p>
      </motion.div>

      {/* Method Selection */}
      <Card title="Select Privacy Enhancement Method">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.keys(PRIVACY_METHODS).map((methodKey) => renderMethodDetails(methodKey))}
        </div>
      </Card>

      {/* Parameter Configuration */}
      <Card title={`${PRIVACY_METHODS[selectedMethod]} Configuration`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Parameters</h3>
            <div className="space-y-4">
              {Object.entries(privacyEnhancementData.methods[selectedMethod].parameters).map(([param, value]) => (
                <div key={param}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {param.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="range"
                      min="0"
                      max={typeof value === 'number' ? (value > 1 ? value * 2 : 2) : 100}
                      defaultValue={value}
                      className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-900 w-16 text-center">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Assessment</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Privacy Gain</h4>
                <div className="w-full bg-blue-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '85%' }} />
                </div>
                <p className="text-sm text-blue-700 mt-1">High privacy protection</p>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Utility Loss</h4>
                <div className="w-full bg-yellow-200 rounded-full h-3">
                  <div className="bg-yellow-600 h-3 rounded-full" style={{ width: '22%' }} />
                </div>
                <p className="text-sm text-yellow-700 mt-1">Minimal utility impact</p>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Overall Score</h4>
                <div className="text-2xl font-bold text-green-600">B+</div>
                <p className="text-sm text-green-700">Good balance achieved</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleApplyEnhancement}
            disabled={isProcessing}
            className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <PlayIcon className="h-5 w-5" />
            <span>{isProcessing ? 'Processing...' : 'Apply Enhancement'}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            <EyeIcon className="h-5 w-5" />
            <span>{showPreview ? 'Hide Preview' : 'Show Preview'}</span>
          </motion.button>
        </div>
      </Card>

      {/* Data Preview */}
      {showPreview && (
        <Card title="Data Transformation Preview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Original Data */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Original Data Sample</h3>
              <div className="overflow-hidden bg-gray-50 rounded-lg border">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Income</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Education</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Zipcode</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {privacyEnhancementData.preview.originalSample.map((row, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 text-sm text-gray-900">{row.age}</td>
                        <td className="px-4 py-2 text-sm text-gray-900">{row.income.toLocaleString()}</td>
                        <td className="px-4 py-2 text-sm text-gray-900">{row.education}</td>
                        <td className="px-4 py-2 text-sm text-gray-900">{row.zipcode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Enhanced Data */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy-Enhanced Data</h3>
              <div className="overflow-hidden bg-green-50 rounded-lg border border-green-200">
                <table className="min-w-full divide-y divide-green-200">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase">Age</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase">Income</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase">Education</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-green-700 uppercase">Zipcode</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-green-200">
                    {privacyEnhancementData.preview.enhancedSample.map((row, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2 text-sm text-green-800">{row.age}</td>
                        <td className="px-4 py-2 text-sm text-green-800">{row.income}</td>
                        <td className="px-4 py-2 text-sm text-green-800">{row.education}</td>
                        <td className="px-4 py-2 text-sm text-green-800">{row.zipcode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Transformation Summary</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-medium text-blue-700">Age:</span> Generalized to ranges
              </div>
              <div>
                <span className="font-medium text-blue-700">Income:</span> Rounded to brackets  
              </div>
              <div>
                <span className="font-medium text-blue-700">Education:</span> Preserved exactly
              </div>
              <div>
                <span className="font-medium text-blue-700">Zipcode:</span> Last 2 digits masked
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}