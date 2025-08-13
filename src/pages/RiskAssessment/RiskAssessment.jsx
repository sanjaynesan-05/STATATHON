import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../../components/Card';
import FileUploader from '../../components/FileUploader';
import RiskSummaryCards from './RiskSummaryCards';
import { riskAssessmentData, uploadedDatasets } from '../../services/dummyRiskData';
import { 
  ExclamationTriangleIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  LinkIcon 
} from '@heroicons/react/24/outline';

export default function RiskAssessment() {
  const [selectedDataset, setSelectedDataset] = useState(uploadedDatasets[0]);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileSelect = (file) => {
    setUploadedFile(file);
    // Simulate file upload and processing
    setTimeout(() => {
      alert(`File "${file.name}" uploaded successfully! Risk assessment will begin shortly.`);
    }, 1000);
  };

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'HIGH': return 'text-red-600 bg-red-100';
      case 'MEDIUM': return 'text-yellow-600 bg-yellow-100';
      case 'LOW': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
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
          Risk Assessment Module
        </h1>
        <p className="text-gray-600">
          Upload and analyze datasets for privacy disclosure risks and vulnerabilities.
        </p>
      </motion.div>

      {/* File Upload Section */}
      <Card title="Dataset Upload">
        <FileUploader onFileSelect={handleFileSelect} />
        
        {uploadedFile && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <DocumentTextIcon className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                File uploaded: {uploadedFile.name}
              </span>
            </div>
          </motion.div>
        )}
      </Card>

      {/* Dataset Selection */}
      <Card title="Previously Uploaded Datasets">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {uploadedDatasets.map((dataset) => (
            <motion.div
              key={dataset.id}
              whileHover={{ scale: 1.02 }}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedDataset?.id === dataset.id 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedDataset(dataset)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{dataset.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskLevelColor(dataset.riskLevel)}`}>
                  {dataset.riskLevel}
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Size: {dataset.size} • Records: {dataset.records.toLocaleString()}</p>
                <p>Uploaded: {new Date(dataset.uploadDate).toLocaleDateString('en-IN')}</p>
                <p>Status: <span className="capitalize font-medium">{dataset.status}</span></p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {selectedDataset && (
        <>
          {/* Overall Risk Summary */}
          <Card title="Overall Risk Assessment">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`p-4 rounded-full ${getRiskLevelColor(riskAssessmentData.overallRisk.level)}`}>
                  <ExclamationTriangleIcon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Risk Score: {riskAssessmentData.overallRisk.score}/10
                  </h2>
                  <p className="text-lg text-gray-600">
                    Classification: <span className="font-semibold">{riskAssessmentData.overallRisk.level} RISK</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Dataset: {selectedDataset.name}</p>
                <p className="text-sm text-gray-500">Records: {selectedDataset.records.toLocaleString()}</p>
              </div>
            </div>

            {/* Risk Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div 
                className="bg-gradient-to-r from-red-500 to-red-600 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${(riskAssessmentData.overallRisk.score / 10) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Low Risk (0-3)</span>
              <span>Medium Risk (4-6)</span>
              <span>High Risk (7-10)</span>
            </div>
          </Card>

          {/* Risk Category Breakdown */}
          <Card title="Risk Category Analysis">
            <RiskSummaryCards riskData={riskAssessmentData} />
          </Card>

          {/* Linkage Analysis */}
          <Card title="External Linkage Analysis">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* External Datasets */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <LinkIcon className="h-5 w-5" />
                  <span>Potential Linkage Sources</span>
                </h3>
                <div className="space-y-4">
                  {riskAssessmentData.linkageAnalysis.externalDatasets.map((dataset, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-gray-900">{dataset.name}</h4>
                        <span className="text-sm font-semibold text-primary-600">
                          {Math.round(dataset.similarity * 100)}% Match
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Overlapping records: {dataset.records.toLocaleString()}
                      </p>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: `${dataset.similarity * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vulnerable Fields */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <ChartBarIcon className="h-5 w-5" />
                  <span>High-Risk Fields</span>
                </h3>
                <div className="space-y-3">
                  {riskAssessmentData.linkageAnalysis.vulnerableFields.map((field, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                      <span className="font-medium text-red-800">{field}</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        Quasi-identifier
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Recommendations */}
          <Card title="Privacy Enhancement Recommendations">
            <div className="space-y-4">
              {riskAssessmentData.recommendations.map((recommendation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    {index + 1}
                  </div>
                  <p className="text-sm text-blue-800 flex-1">{recommendation}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Apply Recommendations
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Export Risk Report
              </motion.button>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}