import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { CloudArrowUpIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export default function FileUploader({ onFileSelect, accept = ".csv,.xlsx,.json" }) {
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && onFileSelect) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleFileInput = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 transition-colors duration-300 bg-gray-50 hover:bg-primary-50"
      >
        <CloudArrowUpIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-900">Upload your dataset</h3>
          <p className="text-sm text-gray-500">
            Drag and drop your file here, or click to browse
          </p>
          <p className="text-xs text-gray-400">
            Supported formats: CSV, Excel, JSON (Max 50MB)
          </p>
        </div>
        <input
          type="file"
          accept={accept}
          onChange={handleFileInput}
          className="hidden"
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 cursor-pointer transition-colors duration-300"
        >
          <DocumentTextIcon className="h-5 w-5" />
          <span>Choose File</span>
        </label>
      </div>
    </motion.div>
  );
}