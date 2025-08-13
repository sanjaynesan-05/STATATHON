import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import Card from '../../components/Card';
import ChartWrapper from '../../components/ChartWrapper';
import { utilityMeasurementData } from '../../services/dummyUtilityData';
import { 
  ChartBarIcon, 
  ScaleIcon,
  CheckCircleIcon,
  ArrowUpIcon // ✅ replaced ArrowTrendingUp with ArrowUpIcon
} from '@heroicons/react/24/outline';

export default function UtilityMeasurement() {
  const [selectedMetric] = useState('distribution');

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-100';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100';
    if (grade.startsWith('C')) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const COLORS = ['#003366', '#0056e6', '#FFD700', '#e6c200'];

  const metricData = [
    { name: 'Distribution', value: utilityMeasurementData.metrics.distributionSimilarity },
    { name: 'Correlation', value: utilityMeasurementData.metrics.correlationPreservation },
    { name: 'Statistical', value: utilityMeasurementData.metrics.statisticalAccuracy },
    { name: 'Query', value: utilityMeasurementData.metrics.queryAccuracy },
  ];

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
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
            <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full mb-4 ${getGradeColor(utilityMeasurementData.overallUtility.grade)}`}>
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

      {/* Utility Metrics Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Utility Metrics Overview">
          <ChartWrapper height={300}>
            <PieChart>
              <Pie
                data={metricData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {metricData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${(value * 100).toFixed(1)}%`, 'Score']} />
            </PieChart>
          </ChartWrapper>
        </Card>

        <Card title="Detailed Metrics">
          <div className="space-y-4">
            {Object.entries(utilityMeasurementData.metrics).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h4 className="font-semibold text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Preservation score for {key.toLowerCase()}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">
                    {Math.round(value * 100)}%
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${value * 100}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>

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
        <div className="mt-4 flex justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-primary-800 rounded"></div>
            <span className="text-sm text-gray-600">Original Data</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-primary-500 rounded"></div>
            <span className="text-sm text-gray-600">Privacy-Enhanced Data</span>
          </div>
        </div>
      </Card>

      {/* Privacy-Utility Trade-off */}
      <Card title="Privacy-Utility Trade-off Analysis">
        <ChartWrapper height={400}>
          <AreaChart data={utilityMeasurementData.chartData.utilityTimeline}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="step" />
            <YAxis domain={[0, 1]} />
            <Tooltip formatter={(value) => [`${(value * 100).toFixed(1)}%`, '']} />
            <Area 
              type="monotone" 
              dataKey="utility" 
              stroke="#FFD700" 
              fill="#FFD700" 
              fillOpacity={0.6} 
              name="Utility Score"
            />
            <Area 
              type="monotone" 
              dataKey="privacy" 
              stroke="#003366" 
              fill="#003366" 
              fillOpacity={0.6} 
              name="Privacy Level"
            />
          </AreaChart>
        </ChartWrapper>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gold-50 border border-gold-200 rounded-lg">
            <h4 className="font-semibold text-gold-800 mb-2">Utility Preservation</h4>
            <p className="text-sm text-gold-700">
              Final utility score of 78.2% indicates good preservation of statistical properties 
              for analytical use cases.
            </p>
          </div>
          <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
            <h4 className="font-semibold text-primary-800 mb-2">Privacy Achievement</h4>
            <p className="text-sm text-primary-700">
              Achieved 80% privacy protection while maintaining acceptable utility levels 
              for statistical analysis.
            </p>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <Card title="Next Steps">
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowUpIcon className="w-6 h-6 text-green-500" /> {/* ✅ fixed icon */}
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
